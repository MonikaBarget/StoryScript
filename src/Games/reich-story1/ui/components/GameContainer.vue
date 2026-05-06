<template>
  <div class="container-fluid body-content">
    <div class="row">
      <div class="col-6">
      <party></party>
      </div>
    </div>
    <div id="location-container"
           :class="{ 'col-8': game.state === 'Play' && showCharacterPane, 'col-12': game.state !== 'Play' || !showCharacterPane }">
        <div v-if="game.state === 'Play'">
          <location-text></location-text>
          <encounter></encounter>
          <exploration></exploration>
        </div>
    </div>
    <div v-if="game.state === 'Play'" class="row">
      <div class="col-12">
        <combinations :combinations="game.combinations"></combinations>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useStateStore} from "ui/StateStore.ts";
import {storeToRefs} from "pinia";
import {computed} from "vue";

const store = useStateStore();
const {game, useEquipment, useBackpack, useQuests, useCharacterSheet} = storeToRefs(store);
const {texts} = store.services;

const showCharacterPane = computed(() => useCharacterSheet.value || useEquipment.value || useBackpack.value || useQuests.value)
</script>