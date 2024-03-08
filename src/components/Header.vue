<script setup lang="ts">
import TabSection from "./TabSection.vue";
import {type Filter} from "../type/interfaces.ts";

defineProps<{
    title: string;
    description: string;
    filterTag: Filter;
}>();

const emit = defineEmits(['addCountry']);

const onClick = (item: string, event: any) => {
    emit('addCountry', item, event);
};
</script>

<template lang="">
  <header>
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

    </div>
    <TabSection :filterTag="filterTag" @addCountry="onClick" />
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

    >div {
        padding: 180px 150px;
    }
}

h1 {
    color: $black;
    font-size: 64px;
    font-weight: 600;
    max-width: 500px;
}

p {
    font-size: 24px;
    text-transform: capitalize;
    font-weight: 500;
    color: $black;
}
</style>
