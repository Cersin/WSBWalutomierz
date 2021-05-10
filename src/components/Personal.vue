<template>
  <ion-card>
    <ion-card-header>
      <ion-img class="WSB-img" src="assets/leg.jpg" alt="WSB Logo"></ion-img>
      <ion-card-subtitle>
        DANE
      </ion-card-subtitle>
      <ion-card-title>
        Szymon Wójcik
      </ion-card-title>
    </ion-card-header>


    <ion-card-content>
      <ion-text>
        <h4>Album: 97474</h4>
      </ion-text>
      <ion-text>
        <h4>Data urodzenia: 13.03.1996r.</h4>
      </ion-text>
    </ion-card-content>
  </ion-card>
</template>

<script>
import {IonCard, IonCardContent, IonImg, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText} from '@ionic/vue'

export default {
  name: "Personal",
  components: {
    IonCard,
    IonImg,
    IonText,
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle
  }
}
</script>

<style lang="scss" scoped>
  ion-card {
    border: 1px solid rgba(0, 0, 0, .2);
  }

  ion-card-subtitle {
    margin: .5rem 0;
    font-weight: 200;
  }

  ion-card-title {
    margin-bottom: .5rem;
  }

  h4 {
    font-weight: 200;
  }
</style>
