<template>
  <div class="card block">
    <div v-if="product_data.discount" class="dicaunt">
      <h1>-{{product_data.discount}}%</h1>
    </div>
    <div class="imgBx">
      <img :src=" require('../../assets/shorts/' + product_data.img) " alt />
      <h2>{{product_data.name}}</h2>
      <p>{{product_data.price | toFix | formattedPrice}}</p>
    </div>
    <div class="content">
      <div class="size">
        <h3>Размер :</h3>
        <span v-for="size in product_data.size" :key="size.id">{{size.num}}</span>
      </div>
      <div class="color">
        <h3>Цвет :</h3>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div @click="addToCart" class="btn btn-card">Купить</div>
    </div>
  </div>
</template>

<script>
import toFix from '../../filters/toFix'
import formattedPrice from '../../filters/price-format'
export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    formattedPrice,
    toFix
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
  }
}
</script>

<style lang="scss">
.card{
  color: #fff;
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:hover {
    .dicaunt {
      display: none;
    }
  }
  &:hover .imgBx {
    transform: translateY(-150px);
  }
  &:hover .imgBx img {
    transform: translate(-20px, -20px) rotate(-25deg) scale(1.4);
  }
  &:hover .content {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50px);
  }
  .dicaunt { 
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(92, 160, 115);
    clip-path: circle(28% at 87% 7%); 
    h1 {
      margin: 34px 0px 0px 210px;
    }
  }
  .imgBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    transition: 0.5s ease-in-out;
    img {
      max-width: 100%;
      margin: 0 0 20px;
      transition: 0.5s ease-in-out;
    }
  }
  .content {
    position: absolute;
    bottom: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
    .size {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 20px;
      span {
        width: 26px;
        height: 26px;
        text-align: center;
        line-height: 24px;
        display: inline-block;
        color: #111;
        background:#fff;
        border-radius: 4px;
        font-size: 14px;
        margin: 0 5px;
        font-weight: 500;
        transition: 0.5s;
        cursor: pointer;
      }
      h3 {
        font-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }
    .color {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 20px;
      span {
        width: 20px;
        height: 20px;
        background: #f00;
        border-radius: 50%;
        margin: 0 5px;
        border: 2px solid #fff;
        box-sizing: border-box;
        cursor: pointer; 
        &:hover {
          border: 2px solid #000;
        }
        &:nth-child(2) {
          background: #9bdc28
        }
        &:nth-child(3) {
          background: #03a9f4
        }
        &:nth-child(4) {
          background: #e91e63
        }
      }
      h3 {
        font-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    }
    .btn-card {
      padding: 12px 30px;
      border-radius: 40px;
      font-weight: 600;
      letter-spacing: 1px;
      color: #111;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}
</style>