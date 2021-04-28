<template>
  <ion-content scroll-events="true">
    <div v-if="loading" class="spinner">
      <ion-spinner name="crescent"></ion-spinner>
    </div>
    <div v-if="!loading" class="container">
      <button @click="openModal" class="style">Wygląd</button>
      <h1>Kalkulator <br>walutowy</h1>

      <div class="currency">
        <h2>Z</h2>
        <ion-select disabled placeholder="Select One" v-model="from">
          <ion-select-option value="pln">PLN</ion-select-option>
        </ion-select>
      </div>

      <div class="currency">
        <h2>Do</h2>
        <ion-select placeholder="Select One" v-model="currency">
          <ion-select-option value="eur">Euro</ion-select-option>
          <ion-select-option value="usd">Dolar</ion-select-option>
          <ion-select-option value="chf">Frank Szwajcarski</ion-select-option>
        </ion-select>
      </div>

      <div class="input">
        <h2>Ile (w zł)</h2>
        <ion-input min="0" type="number" value="0.00" v-model="pln"></ion-input>
      </div>

      <div class="result">
        <p class="result-date">Dane z: {{ effectiveDate }}</p>
        <div class="result-header">
          <p>Kurs</p>
          <p>{{ rate }}</p>
        </div>
        <div class="result-header">
          <p>Wynik</p>
          <p>{{ currency.toUpperCase() }}</p>
        </div>
        <h2>{{ summary }}</h2>
      </div>
    </div>
  </ion-content>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {IonSelectOption, modalController, IonSelect, IonInput, IonSpinner} from "@ionic/vue";
import axios from "axios";
import Display from "@/Modal/Display.vue";

export default defineComponent({
  name: 'Calculator',
  components: {
    IonInput,
    IonSpinner,
    IonSelectOption,
    IonSelect
  },
  data() {
    return {
      pln: "0",
      rate: 0,
      from: 'pln',
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
    turnDarkTheme() {
      document.body.classList.toggle('dark');
    },
    async openModal() {
      const modal = await modalController
          .create({
            component: Display,
            cssClass: 'custom-class',
            componentProps: {},
          })
      return modal.present();
    },
    async fetchRate() {
      this.loading = true;
      await axios.get(`https://api.nbp.pl/api/exchangerates/rates/a/${this.currency}?format=json`).then((res) => {
        this.rate = res.data.rates[0].mid;
        this.effectiveDate = res.data.rates[0].effectiveDate;
      });
      this.loading = false;
    },
    calculate() {
      const num = parseFloat(this.pln).toFixed(2);
      const ratio = parseFloat(num);
      const calculate = ratio / this.rate;
      if (calculate < 0 || isNaN(calculate)) {
        this.summary = "Wartość nieprawidłowa";
      } else {
        this.summary = calculate.toFixed(2);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.spinner {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  ion-spinner {
    width: 50%;
    height: 50%;
  }
}

.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: calc(100% - 12rem);
  margin: 0 auto;
}

.style {
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  color: var(--ion-color-success);
  font-weight: 400;
  letter-spacing: .1rem;
  font-size: 1.8rem;
  background-color: transparent;
  margin-top: 2rem;
}

h1 {
  font-weight: 700;
  font-size: 2.5rem;
  color: var(--ion-color-primary);
}

.currency {
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
  }

  ion-select {
    background-color: var(--ion-color-medium);
    padding: 1rem;
    font-size: 1.6rem;
    letter-spacing: .05rem;
    text-transform: uppercase;
    border-radius: 10px;
  }
}

.input {
  width: 50%;
  align-self: center;
  font-size: 1.5rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    text-align: center;
  }

  ion-input {
    font-weight: 800;
    background-color: var(--ion-color-medium);
    padding: .5rem;
    border-radius: 10px;
  }
}

.result {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 3rem;

  &-date {
    font-size: 1.2rem;
    opacity: .6;
    margin-bottom: 1rem;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    opacity: .8;

    p {
      font-weight: 600;
      color: var(--ion-color-primary);
    }
  }

  h2 {
    align-self: center;
    background-color: var(--ion-color-medium);
    text-align: center;
    border-radius: 10px;
    padding: 1rem 0;
    font-weight: 700;
    width: 100%;
  }
}
</style>
