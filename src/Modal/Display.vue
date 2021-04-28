<template>
  <ion-button class="dismiss" @click="dismiss()">X</ion-button>
  <div class="container">
    <ion-button @click="turnDarkTheme()">Tryb ciemny/jasny</ion-button>
    <div class="fonts">
      <p style="font-size: 2rem; margin-bottom: 1rem;">Zmiana czcionki</p>
      <div class="fonts-buttons">
        <ion-button @click="changeFont('40%')">Small</ion-button>
        <ion-button @click="changeFont('62.5%')">Medium</ion-button>
        <ion-button @click="changeFont('80%')">Big</ion-button>
      </div>
    </div>
    <div style="width: 100%">
      <h2 style="text-align: center; font-size: 2rem;">Odstęp między literami: {{ valueSpacing }}</h2>
      <ion-range min="0" max="10" v-model="valueSpacing">
        <ion-label style="margin-right: 1rem" slot="start">0</ion-label>
        <ion-label style="margin-left: 1rem" slot="end">10</ion-label>
      </ion-range>
    </div>

    <div class="range" style="width: 100%">
      <h2 style="text-align: center; font-size: 2rem;">Odstęp między liniami: {{ lineSpacing }}</h2>
      <ion-range min="1" max="4" v-model="lineSpacing">
        <ion-label style="margin-right: 1rem" slot="start">1</ion-label>
        <ion-label style="margin-left: 1rem" slot="end">4</ion-label>
      </ion-range>
    </div>

  </div>
</template>

<script>
import {modalController, IonRange} from '@ionic/vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Display',
  components: {IonRange},
  data() {
    return {
      content: 'Content',
      valueSpacing: 0,
      lineSpacing: 0,
      html: document.getElementsByTagName('html')[0]
    }
  },
  beforeMount() {
    if (localStorage.getItem('spacing')) {
      this.valueSpacing = localStorage.getItem('spacing');
    }
    if (localStorage.getItem('lineSpacing')) {
      this.lineSpacing = localStorage.getItem('lineSpacing');
    }
  },
  watch: {
    valueSpacing() {
      this.html.style.letterSpacing = this.valueSpacing + "px";
      localStorage.setItem("spacing", this.valueSpacing);
    },
    lineSpacing() {
      this.html.style.lineHeight = this.lineSpacing;
      localStorage.setItem("lineSpacing", this.lineSpacing);
    }
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    async turnDarkTheme() {
      const dark = await document.body.classList.contains('dark');
      if (!dark) {
        document.body.classList.toggle('dark');
        localStorage.setItem('dark', "true");
      } else {
        localStorage.removeItem('dark');
        document.body.classList.toggle('dark');
      }
    },
    changeFont(percentage) {
      this.html.style.fontSize = percentage;
      localStorage.setItem('fontSize', percentage);
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 5rem);
  margin: 0 auto;
  flex: 1;
}

.fonts {
  display: grid;
  text-align: center;

  &-buttons {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
  }
}

.dismiss {
  align-self: flex-end;
  margin-right: 1rem;
  margin-top: 1rem;
}

.range {
  margin-bottom: 5rem;
}

</style>
