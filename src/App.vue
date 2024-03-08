<script setup lang="ts">
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import {type Filter, type Cate} from "./type/interfaces.ts";

import { onMounted, watch, ref, reactive} from "vue";

const dataform= ref([])
const filterTag= reactive<Filter>({
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

// interface scacasc {
//   [key: string]: boolean
// }

const filteredCountries = (item: keyof Filter, event: any) => {
  filterTag[item] = !filterTag[item];
  // const keys = Object.keys(filterTag.value)
  // const array = keys.every((key: keyof scacasc)=> { filterTag.value[key]})
  // console.log(array)
}

// const haha: Filter= {
//   All: true,
//     Norway: false,
//     Finland: false,
//     Sweden: false,
//     Switzerland: false, 
//     propertyType:2,
//     superhost: false,
// }


// const reos= Object.keys(haha).every((key: keyof scacasc)=> {
//   console.log(haha[key: type keyof scacasc])
// })
const cacsac = ref({
  Select: true,
  cacas: true,
})
watch(filterTag, ()=> {
  console.log("changes")
})

const cascasc = () => {
  cacsac.value.Select = false
}
</script>

<template>
  <div>
    <!-- <button @click="cascasc">cacas</button> -->
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  place-items: center;
}


@media screen and (max-width: 1439px) {
  section{
    width: 85%;
  }  
}

@media screen and (max-width: 1023px) {
  section {
    width: 80%;
  } 
}


@media screen and (max-width: 767px) {

}




</style>
