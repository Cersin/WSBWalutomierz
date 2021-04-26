<template>
  <ion-grid>
    <ion-row class="ion-align-items-center ion-align-self-center ion-justify-content-center">
      <ion-col size="3" class="ion-text-center">
        <ion-label position="stacked">Kwota</ion-label>
      </ion-col>
      <ion-col size="3" class="ion-text-center">
        <ion-input type="number" value="0"></ion-input>
      </ion-col>
    </ion-row>
    <ion-button  @click="checkDarkTheme">Dark Theme</ion-button>
    <ion-button  @click="euro">Test</ion-button>
  </ion-grid>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { IonCol, IonGrid, IonRow, IonButton, IonLabel, IonInput } from '@ionic/vue';
import axios from "axios";

export default defineComponent({
  name: 'Calculator',
  components: { IonCol, IonGrid, IonRow, IonButton, IonLabel, IonInput },
  data() {
    return {

    }
  },
  methods: {
    checkDarkTheme() {
      document.body.classList.toggle('dark');
    },
    euro() {
      axios.get('http://api.nbp.pl/api/exchangerates/rates/a/eur/today?format=json').then((res) => {
        console.log(res.data.rates[0].mid);
      })
    }
  }
});
</script>

<style lang="scss" scoped>
ion-content {
}


ion-input {
  border: 2px solid var(--ion-color-primary);
}

</style>
