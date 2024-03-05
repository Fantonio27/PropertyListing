<script setup lang="ts">
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
// import data from "./assets/property-listing-data.json";
// import Content from "./type/interfaces.ts"

// const {capacity, id, title, description, price,rating, superhost, location, image } : Content[] = data;

</script>

<template>
  <div>
    <Header title="Peace, nature, dream" description="find and book a great experience" />

    <section>
      <h2>Over 200 stays</h2>
      <div class="card-container">
        <Card v-for="n in 3"/>
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
