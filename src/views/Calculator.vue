<template>
  <ion-grid>
    <ion-item color="warning">
      <ion-label style="color: var(--ion-text)">Wybierz walutę</ion-label>
      <ion-select placeholder="Select One" v-model="currency">
        <ion-select-option value="eur">Euro</ion-select-option>
        <ion-select-option value="usd">Dolar</ion-select-option>
        <ion-select-option value="chf">Frank Szwajcarski</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-row v-if="!loading" class="ion-align-items-center ion-align-self-center ion-justify-content-center">
      <ion-col size="4" class="ion-text-center">
        <ion-label position="stacked">Kwota</ion-label>
      </ion-col>
      <ion-col size="8" class="ion-text-center">
        <ion-input min="0" type="number" value="0.00" pattern="^\d*(\.\d{0,2})?$" v-model="pln"></ion-input>
      </ion-col>
    </ion-row>
    <ion-row v-if="!loading">
      <ion-col size="12" class="effective">
        {{ 'Dane pobrane z dnia: ' + effectiveDate }}
      </ion-col>
      <ion-col size="12" class="summary">
        <ion-label>{{ summary }}</ion-label>
      </ion-col>
    </ion-row>
    <h1 v-if="loading">Ładuję</h1>
    <ion-button @click="checkDarkTheme">Dark Theme</ion-button>
  </ion-grid>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonButton, IonCol, IonGrid, IonInput, IonLabel, IonRow, IonSelectOption, IonSelect, IonItem} from '@ionic/vue';
import axios from "axios";

export default defineComponent({
  name: 'Calculator',
  components: {
    IonCol,
    IonGrid,
    IonRow,
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonSelectOption,
    IonSelect
  },
  data() {
    return {
      pln: "0",
      rate: 0,
      summary: "0",
      currency: "eur",
      effectiveDate: Date,
      loading: false
    }
  },
  watch: {
    pln() {
      this.calculate();
    },
    async currency() {
      await this.fetchRate();
      this.calculate();
    }
  },
  beforeMount() {
    this.fetchRate();
  },
  methods: {
    checkDarkTheme() {
      document.body.classList.toggle('dark');
    },
    async fetchRate() {
      this.loading = true;
      await axios.get(`https://api.nbp.pl/api/exchangerates/rates/a/${this.currency}/today?format=json`).then((res) => {
        this.rate = res.data.rates[0].mid;
        this.effectiveDate = res.data.rates[0].effectiveDate;
      });
      this.loading = false;
    },
    calculate() {
      const num = parseFloat(this.pln).toFixed(2);
      const ratio = parseFloat(num);
      const calculate = ratio / this.rate;
      this.summary = calculate.toFixed(2);
    }
  }
});
</script>

<style lang="scss" scoped>
ion-grid {
  background-color: var(--ion-color-secondary);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ion-item {
  margin-top: 30vh;
  width: 70%;
  border-radius: 15px;
  margin-bottom: 2vh;
}

ion-row {
  margin-bottom: 1rem;
}

ion-input {
  border: 2px solid var(--ion-color-primary);
}

.effective {
  text-align: center;
  font-size: 1.5vh;
  opacity: .5;
}

.summary {
  font-size: 5vh;
  text-align: center;
  margin-top: 2rem;
}
</style>
