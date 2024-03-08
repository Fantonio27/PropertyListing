<script setup lang="ts">
import {type Filter} from "../type/interfaces.ts";

const props = defineProps<{ filterTag: Filter }>()

const items = ['All', 'Norway', 'Finland', 'Sweden', 'Switzerland']

const filtered = (country: string) => {
    return props.filterTag[country as keyof Filter]
}

</script>

<template>
    <nav>
        <div class="tab">
            <ul>
                <li v-for="(item, index) in items" :key="index" :class="{ active: filtered(item) }" @click="$emit('addCountry', item, $event)" :name="false" id="cascasc">
                    {{ index == 0? `${item} Stays`: item }}
                </li>
            </ul>
        </div>
        <div class="side-tab">
            <div class="tab-option">
                <div class="toggle-switch">
                    <input class="toggle-input" id="toggle" type="checkbox" v-model="filterTag.superhost">
                    <label class="toggle-label" for="toggle"></label>
                </div>
                <p>Superhost</p>
            </div>
            <div class="select-container">
                <select v-model="filterTag.propertyType">
                    <option value="0">Property type</option>
                    <option value="1">Property type 1</option>
                    <option value="2">Property type 2</option>
                </select>
            </div>

        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    background-color: rgba(32, 41, 58, 0.95);
    color: white;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 15px;
    padding: 30px 40px;
    position: absolute;
    bottom: -3.5rem;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid rgb(151, 163, 182, 0.5);
}

.tab {
    ul {
        display: flex;
        gap: 10px;
    }

    li {
        list-style: none;
        padding: 8px 13px;
        border-radius: 8px;
        font-size: clamp(14px, 1vw, 16px);
        cursor: pointer;
        transition: 0.3s linear;

        &:hover {
            background-color: #97a3b62a;
        }
    }
    .active {
        background-color: #97A3B6;
    }
}


.side-tab {
    display: flex;
    gap: 30px;
    align-items: center;

    .select-container {
        border-radius: 10px;
        border: 2px solid #6D788A;
        padding: 12px 25px;

        select {
            background-color: #232C3C;
            border: none;
            width: 100%;
            margin: auto;
            display: block;
            font-size: clamp(12px, 1vw, 14px);
        }
    }

    select:focus {
        outline: none;
    }

    p {
        font-size: 12px;
    }
}

.tab-option {
    display: flex;
    align-items: center;
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    margin: 10px;
}

.toggle-switch .toggle-input {
    display: none;
}

.toggle-switch .toggle-label {
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 24px;
    background-color: #DADDDF;
    border-radius: 34px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.toggle-switch .toggle-label::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    background-color: #fff;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
}

.toggle-switch .toggle-input:checked+.toggle-label {
    background-color: #2196F3;
}

.toggle-switch .toggle-input:checked+.toggle-label::before {
    transform: translateX(16px);
}

@media screen and (max-width: 1439px){
    nav{
        width: 80%;
    }
}


@media screen and (max-width: 1023px){
    nav{
       flex-direction: column;
       gap: 20px;
       padding: 20px 0px;
       bottom: -4.5rem;
    }
}

@media screen and (max-width: 767px){
    nav{
       width: 95%;
       flex-direction: row;
       justify-content: space-evenly;
    }

    .tab> ul, .side-tab{
        flex-direction: column;
        text-align: center;
    }

}

</style>