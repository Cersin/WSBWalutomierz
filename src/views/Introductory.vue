<template>
  <ion-slides class="slides swiper-no-swiping" @ionSlideReachEnd="end()" :options="slideOpts">
    <ion-slide>
      <First></First>
    </ion-slide>
    <ion-slide>
      <Personal></Personal>
    </ion-slide>
    <ion-slide>
      <About></About>
    </ion-slide>
  </ion-slides>

</template>

<script lang="ts">
import {IonSlides, IonSlide} from '@ionic/vue';
import {defineComponent} from 'vue';
import About from "@/components/About.vue";
import First from "@/components/First.vue";
import Personal from "@/components/Personal.vue";

export default defineComponent({
  name: 'WSB',
  components: {
    Personal,
    First,
    About,
    IonSlides,
    IonSlide
  },
  data() {
    return {
      slideOpts: {
        initialSlide: 0,
        loop: false,
        autoplay: {
          delay: 6000,
        }
      }
    }
  },
  beforeCreate() {
    if (localStorage.getItem('intro')) {
      this.$router.push({path: 'calculator', replace: true});
    }
  },
  methods: {
    end() {
      localStorage.setItem('intro', "true");
      console.log('elo');
      setTimeout(() => {
        // this.$router.push('calculator');
        this.$router.push({path: 'calculator', replace: true});
      }, 5000);
    },
    checkDarkTheme() {
      document.body.classList.toggle('dark');
    }
  }
});
</script>

<style lang="scss" scoped>
.slides {
  display: flex;
  justify-content: center;
  height: 100vh;
}

</style>
