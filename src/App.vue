<script setup lang="ts">
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import {type Filter, Content} from "./type/interfaces.ts";

import { onMounted, watch, ref, reactive} from "vue";

const dataform = ref<Content[]>([])
const filterTag= reactive<Filter>({
    All: true,
    Norway: false,
    Finland: false,
    Sweden: false,
    Switzerland: false, 
    propertyType:0,
    superhost: false,
})

const dataFilter  = ref<Content[]>([])

onMounted(async()=>{
  const response = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json") 
  const data = await response.json()
  dataform.value = data;
  dataFilter.value = data;
})

const filteredCountries = (item: keyof Filter) => {
  const keys = Object.keys(filterTag).slice(1,5)

  if(item == "All"){
    filterTag.All = true
    keys.forEach((key)=> {
      filterTag[key as keyof typeof filterTag] = false;
    })
  }else{
    filterTag.All = false
    filterTag[item] = !filterTag[item];
  }

}

watch(filterTag, ()=>{

  // const keys = Object.keys(filterTag).slice(0,5)
  // const everyArray = keys.every((key)=> {
  //   const attr = filterTag[key as keyof typeof filterTag]
  //   if(attr == false){
  //     return true
  //   }
  // })

  const filterMethod = ()=> {
    return dataform.value.filter((data)=> {
      return (filterTag.propertyType == 0 ?  data.capacity.bedroom >= 1  :data.capacity.bedroom == filterTag.propertyType ) &&
      (filterTag.superhost ? data.superhost : (data.superhost == true || data.superhost == false )) &&
      (
        (filterTag.All && data.id >= 0) ||
        (filterTag.Norway && data.location == "Norway")  || 
        (filterTag.Finland && data.location == "Finland") || 
        (filterTag.Sweden && data.location == "Sweden") || 
        (filterTag.Switzerland && data.location == "Switzerland")
      )
    })
  }
  
  dataFilter.value = filterMethod()
})


</script>

<template>
  <div>
    <Header title="Peace, nature, dream" description="find and book a great experience" @addCountry="filteredCountries" :filterTag="filterTag"/>

    <section>
      <h2>Over 200 stays</h2>

      <div class="card-container">
          <Card v-for="(data, index) in dataFilter" :key="index" :data="data"/> 
      </div>
      <h2 class="alert-message" v-if="dataFilter.length == 0">No Records Found</h2>
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
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 30px;
  place-items: center;
}

.alert-message{
    font-weight: 400;
    background-color: #f1f9fee4;
    width: 100%;
    color: #121826;
    text-align: center;
    border-radius: 5px;
    padding: 10px 0px;
    font-size: 1.2rem;
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

  .card-container{
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}


</style>
