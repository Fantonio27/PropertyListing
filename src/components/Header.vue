<script setup lang="ts">
import TabSection from "./TabSection.vue";
import {type Filter} from "../type/interfaces.ts";

defineProps<{
    title: string;
    description: string;
    filterTag: Filter;
}>();

const emit = defineEmits(['addCountry']);

const onClick = (item: string) => {
    emit('addCountry', item);
};
</script>

<template>
  
  <header>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <TabSection :filterTag="filterTag" @addCountry="onClick" />
    </div>
   
  </header>
</template>

<style lang="scss" scoped>
$black: #121826;

header {
    background-image: url("../assets/images/hero-image-Nqbxy5i3.jpg");
    background-position: center;
    background-size: cover;
    height: 620px;
    position: relative;
    width: 100%;


    >div {
        padding: 180px 150px;
    }
}

h1 {
    color: $black;
    font-size: clamp(30px, 4vw, 64px);
    font-weight: 600;
    width:500px;
}

p {
    font-size: clamp(18px, 2vw, 24px);
    text-transform: capitalize;
    font-weight: 500;
    color: $black;
}

@media screen and (max-width: 1439px){
  header {
    
    > div{
      padding: 180px 100px;

      h1{
        width: 400px;
      }
    }
  }
}

@media screen and (max-width: 1023px){
  header {
    max-height: 400px;

      >div{
        padding: 150px 80px;
      } 
  }

}

@media screen and (max-width: 767px){
  header {
    max-height: 300px;

    > div{
      padding: 50px 20px;

      h1{
        width: 100%;
      }
    }
  }
}
</style>
