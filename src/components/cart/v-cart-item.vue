<template>
  <div class="item">
    <div>
      <h3>{{cart_data.name}}</h3>
    </div>
    <div>
      <p>{{cart_data.price | toFix | formattedPrice}}</p>
    </div>
    <div>
      <div @click="DeleteFromCart" class="btn">Удалить</div>
    </div>
  </div>
</template>

<script>
import toFix from '../../filters/toFix'
import formattedPrice from '../../filters/price-format'
export default {
  props: {
    cart_data: {
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
    DeleteFromCart() {
        this.$emit('DeleteFromCart')
    },
  },
  mounted() {
    this.$set(this.cart_data, 'quantity', 1)
  }
}
</script>

<style lang="scss">
.item {
  .btn {
    margin-top: 0px;
  }
}
</style>