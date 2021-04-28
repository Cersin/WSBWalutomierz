<template>
  <ion-app>
    <router-view></router-view>
  </ion-app>
</template>

<script lang="ts">
import {IonApp} from '@ionic/vue';
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp
  },
  async beforeCreate() {
    const html = await document.getElementsByTagName('html')[0];

    const isDark = await localStorage.getItem('dark');
    const fontSize = await localStorage.getItem('fontSize');
    const letterSpacing = await localStorage.getItem('spacing');
    const lineSpacing = await localStorage.getItem('lineSpacing');
    if (isDark) {
      document.body.classList.toggle('dark');
    }
    if (fontSize) {
      html.style.fontSize = fontSize;
    }
    if (letterSpacing) {
      html.style.letterSpacing = letterSpacing + "px";
    }
    if (letterSpacing) {
      html.style.letterSpacing = letterSpacing + "px";
    }
    if (lineSpacing) {
      html.style.lineHeight = lineSpacing;
    }
  }
});
</script>

<style lang="scss">
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: "Segoe UI", sans-serif;
  font-weight: 400;
  color: var(--ion-text);
}

html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%
  //background-color: var(--ion-color-secondary);
}
</style>
