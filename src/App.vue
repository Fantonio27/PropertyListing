<script setup lang="ts">
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import {type Filter} from "./type/interfaces.ts";

import { onMounted, ref } from "vue";

const dataform = ref([])
const filterTag = ref<Filter>({
    All: true,
    Norway: false,
    Finland: false,
    Sweden: false,
    Switzerland: false, 
    propertyType:2,
    superhost: false,
})

// const propertyType = ref<number>(0)
// const superhost = ref<boolean>(0)

onMounted(async()=>{
  const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json")
  const data = await response.json()
  dataform.value = data;
})

const filteredCountries = (item: keyof Filter, event: any) => {
  // filterTag.value[item] = !filterTag.value[item];
  console.log(filterTag.value)
}


</script>

<template>
  <div>
    <Header title="Peace, nature, dream" description="find and book a great experience" @addCountry="filteredCountries" :filterTag="filterTag"/>

    <section>
      <h2>Over 200 stays</h2>
      <div class="card-container">
        <Card v-for="(data, index) in dataform" :key="index" :data="data"/>
      </div>
    </section>
  </div>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

* {
  margin: 0px;
  padding: 0px;
  font-family: "Outfit", sans-serif;
  color: #F1F9FE;
}

body{
  background-color: #121826;
}

section{
  margin: 100px auto;
  width: 60%;

  > h2{
    font-weight: 500;
    margin-bottom: 30px;
  }
}

.card-container{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  place-items: center;
}


</style>
