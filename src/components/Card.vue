<script setup lang="ts">
    import { Content } from "../type/interfaces.ts";

    defineProps<{data: Content}>();

</script>

<template lang="">
    <div class="card">
        <div class="badge" v-if="data.superhost">
            <p>Superhost</p>
            <img src="../assets/images/star.svg" alt="starIcon" class="badge-icon"/>
        </div>
        <img :src="data.image" :alt="data.title">
      
        <div class="card-content">
            {{data.location}}
            <h2 class="card-title">{{data.title}}</h2>
            <p class="card-description">{{data.description}}</p>
            <div class="card-property">
                <div>
                    <img src="../assets/images/house.svg" alt="houseIcon" />
                    <p class="card-smallText">{{data.capacity.bedroom}} bedroom</p>
                </div>
                <div>
                    <img src="../assets/images/guest.svg" alt="guestIcon" />
                    <p class="card-smallText">{{data.capacity.people}} guest</p>
                </div>
            </div>
            <div class="card-info">
                <p class="card-price">{{data.price}}<span>/night</span></p>
                <div>
                    <img src="../assets/images/star.svg" alt="starIcon" class="star-icon"/>
                    <p class="card-rate">{{data.rating}}</p>
                </div>
            </div>
        </div>
       
    </div>
</template>

<style lang="scss" scoped>
$gray-text: #8096A0;

.card {
    >img{
        width: 100%;
        border-radius: 10px 10px 0px 0px;
        display: block;
    }
}


.badge {
    display: flex;
    align-items: center;
    gap: 3px;
    background-color: #121826;
    position: absolute;
    padding: 5px 10px;
    border-radius: 50px;
    margin: 10px;

    p{
        font-size: 10px;
    }

    img{
        width: 13px;
    }
}

.card-content{
    border: 1px solid #495567;
    padding: 20px;
    border-radius: 0px 0px 10px 10px;

    .card-title{ 
        font-size: 16px;
    }

    .card-description{
        font-size: 14px;
        font-weight: 500;
        color: $gray-text;
        margin: 15px 0px;
        width: 90%;
    }

    .card-property{
        display: flex;
        gap: 20px;

        div{
            display: flex;
            align-items: center;
            gap: 5px;
        }

        p{
            color: $gray-text;
            font-size: 12px;
        }
    }

    .card-info{
        border-top: 1px solid #495567;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        div{
            display: flex;
            align-items: center;
            gap: 3px;
            font-size: 12px;
        }

        span{
            color: $gray-text;
            font-size: 12px;
        }
    }
}
</style>