<template>
  <div>
   <!--  <p>{{service.name}}</p>
    <span>{{service.price  | toFix | formattedPrice}}</span>
    <v-cart-total
        v-for="service in CART"
        :key="service.id"
        :service="service"
        v-on:click="toggleActive(service)"
        :class="{ 'active': service.active}"
      />
      <div class="total">
          Итого:
          <span>{{total()  | toFix | formattedPrice}}</span>
          <center>
            <br />
            <div v-if="total() > 0" class="btn">Оформить</div>
          </center>
        </div> -->
  </div>
  
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default() {
        return {}
      }
    }
  },
}
</script>

<style>

</style>







 | toFix | formattedPrice
import toFix from '../../filters/toFix'
import formattedPrice from '../../filters/price-format'
filters: {
  formattedPrice,
  toFix
},