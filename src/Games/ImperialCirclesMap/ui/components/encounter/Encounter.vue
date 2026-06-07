<template>
  <div v-if="activePersons.length > 0 && !enemiesPresent" id="encounters" class="box-container">
    <div class="box-title">{{ texts.encounters }}</div>
    <ul class="list-unstyled">
      <li v-for="person of activePersons" :class="game.combinations.getCombineClass(person)"
          @click="game.combinations.tryCombine(person)">
        <img v-if="person.picture" :alt="person.name" :src="person.picture" class="person-picture"/>
        <div class="inline">
          <button v-if="person.conversation" class="btn btn-info talk" type="button" @click="conversationService.talk(person)">
            {{ texts.format(texts.talk, [person.name]) }}
          </button>
          <button v-if="person.trade" class="btn btn-info trade" type="button" @click="store.trade(game.currentLocation, person)">
            {{ texts.format(texts.trade, [person.name]) }}
          </button>
          <button v-if="hasDescription(person)" class="btn btn-info examine" type="button"
                  @click="store.showDescription('person', person, person.name)">
            {{ texts.format(texts.examine, [person.name]) }}
          </button>
          <button v-if="hasSource(person)" class="btn btn-info source" type="button"
                  @click="showPersonSource(person)">
            {{ texts.format(texts.source, [person.name]) }}
          </button>
          <button v-if="person.canAttack === undefined || person.canAttack === true" class="btn btn-danger"
                  type="button" @click="store.startCombat(game.currentLocation, person)">{{ texts.format(texts.attack, [person.name]) }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import {useStateStore} from "ui/StateStore.ts";
import {storeToRefs} from "pinia";
import {hasDescription} from "storyScript/Services/sharedFunctions.ts";

const store = useStateStore();
const {game, enemiesPresent, activePersons} = storeToRefs(store);
const {texts, conversationService} = store.services;

const hasSource = (person: any): boolean => {
    if (!person.source) {
        return false;
    }

    if (typeof person.source === 'string') {
        return person.source.trim().length > 0;
    }

    return !!((person.source.description && person.source.description.trim().length > 0) || (person.source.name && person.source.name.trim().length > 0));
};

const showPersonSource = (person: any): void => {
    const title = person.source && typeof person.source !== 'string'
        ? person.source.name || person.name
        : person.name;

    const sourceDescription = person.source && typeof person.source !== 'string'
        ? person.source.description || ''
        : person.source;

    store.showSource('person', {...person, source: sourceDescription}, title);
};

</script>