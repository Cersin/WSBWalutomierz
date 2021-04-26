<template>
  <ion-grid class="welcome">
    <div class="text">
      <h1>Witam w kalkulatorze walut!</h1>
      <p>Kalkulator działa z wykorzystaniem NBP API</p>
    </div>
  </ion-grid>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss" scoped>
.welcome {
  background-image: url('../../public/assets/currency.jpg');
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;

  p {
    opacity: .6;
  }

  .text {
    background-color: rgba(255, 255, 255, .7);
    padding: 2rem;
  }
}
</style>
