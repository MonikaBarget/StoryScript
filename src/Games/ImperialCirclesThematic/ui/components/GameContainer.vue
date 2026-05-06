<template>
  <div class="container-fluid body-content">
    <!-- Toggle button -->
    <div class="d-flex justify-content-end mb-2" v-if="game.state === 'Play'">
      <button class="btn btn-sm btn-outline-secondary" @click="showRightPane = !showRightPane">
        {{ showRightPane ? 'Hide panel' : 'Show panel' }}
      </button>
    </div>

    <div class="row" v-if="game.state === 'Play'">
      <!-- LEFT: Location text + HTML description -->
      <div :class="showRightPane ? 'col-9' : 'col-12'" id="location-container">
        <location-text></location-text>
        <exploration></exploration>
      <!-- LEFT: We do not have the required container yet!! -->
      </div>
      <!-- RIGHT: Collapsible panel -->
      <div v-if="showRightPane" class="col-3">
        <party></party>
        <combinations :combinations="game.combinations"></combinations>
        <encounter></encounter>
        
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStateStore } from "ui/StateStore.ts";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useStateStore();
const { game } = storeToRefs(store);
const showRightPane = ref(true);
</script>