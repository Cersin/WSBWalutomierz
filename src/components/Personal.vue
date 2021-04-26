<template>
  <ion-card>
    <ion-card-header>
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
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText} from '@ionic/vue'

export default {
  name: "Personal",
  components: {
    IonCard,
    IonText,
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle
  }
}
</script>

<style lang="scss" scoped>
</style>
