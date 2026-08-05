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
      </div>

      <!-- RIGHT: Collapsible panel -->
      <div v-if="showRightPane" class="col-3">
        <party></party>
        <combinations :combinations="game.combinations"></combinations>
        <encounter></encounter>

        <!-- Audio Player Box -->
        <div class="audio-player-box mt-3">
          <audio v-if="getCurrentMusic()"
                 ref="music-player"
                 :src="`resources/${getCurrentMusic()}`"
                 autostart="false" 
                 preload ="metadata"
                 class="storyscript-player"
                 loop
                 controls>
          </audio>
          <p>Now playing <em>Three Voices</em>, recorded & mixed with <a href="https://ntrack.com">N-Track Studio</a> for Linux.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStateStore } from "ui/StateStore.ts";
import { useSound } from "ui/Composables/Sound.ts";
import { storeToRefs } from "pinia";
import { ref, onMounted, onUnmounted, useTemplateRef, nextTick } from "vue";

const store = useStateStore();
const { game } = storeToRefs(store);
const showRightPane = ref(true);

const {
  canPlay,
  getSoundQueue,
  getCurrentMusic,
  checkMusicPlaying,
  soundCompleted
} = useSound(useTemplateRef('music-player'));

let interval: NodeJS.Timeout;

// Define button colors
const buttonColors: Record<string, string> = {
    "War & Defence": "rgb(234, 21, 35)",
    "Governance & Law": "#0a6dc4",
    "Economy": "hsl(38, 89%, 51%)",
    "Mobility": "#519c0b",
    "Social Order": "rgb(138, 9, 155)",
    "Currencies": "hsl(40, 75%, 37%)",
    "Knowledge": "rgb(84, 141, 151)"
};

// Function to apply button colours
const applyButtonColors = () => {
    nextTick(() => {
        document.querySelectorAll<HTMLElement>('button.btn.btn-info').forEach(button => {
            const buttonText = button.textContent?.trim() || '';
            if (buttonColors[buttonText]) {
                button.style.backgroundColor = buttonColors[buttonText];
            }
        });
    });
};

onMounted(() => {
    // Apply button colours when the component is mounted
    applyButtonColors();

    // Existing interval logic
    interval = setInterval(() => {
        if (!canPlay.value) {
            checkMusicPlaying();
        } else {
            clearInterval(interval);
        }
    }, 1000);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>