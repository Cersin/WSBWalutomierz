<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  }
});
</script>

<style lang="scss">
*,
*::after,
*::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-weight: 400;
  color: var(--ion-text);
}
html {
  box-sizing: border-box;
  font-size: 62.5%; //1rem = 10px; 10px/16px = 62.5%
  background-color: var(--ion-color-secondary);
}
</style>
