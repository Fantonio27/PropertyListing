<script setup lang="ts">

</script>

<template lang="">
    <div class="card">
        <div class="badge">
            <p>Superhost</p>
            <img src="../assets/images/star.svg" alt="starIcon" class="badge-icon"/>
        </div>
        <img src="https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/property-challenge/thumbnail-1.jpg" alt="">
      
        <div class="card-content">
            <h2 class="card-title">Cozy Cabin in the Woods</h2>
            <p class="card-description">Immerse yourself in the beauty of the Nordic landscape at this sleek and stylish cabin. With floor-to-ceiling windows and a spacious deck, you'll have breathtaking views of the surrounding mountains.</p>
            <div class="card-property">
                <div>
                    <img src="../assets/images/house.svg" alt="houseIcon" />
                    <p class="card-smallText">2 bedroom</p>
                </div>
                <div>
                    <img src="../assets/images/guest.svg" alt="guestIcon" />
                    <p class="card-smallText">3 guest</p>
                </div>
            </div>
            <div class="card-info">
                <p class="card-price">$250<span>/night</span></p>
                <div>
                    <img src="../assets/images/star.svg" alt="starIcon" class="star-icon"/>
                    <p class="card-rate">4.9</p>
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