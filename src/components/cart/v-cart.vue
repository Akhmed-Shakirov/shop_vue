<template>
  <div class="v-cart">
    <div v-if="CART.length > 0" class="if">
      <div class="v-cart-item block">
        <v-cart-item 
          v-for="(item, index) in CART"
          :key="item.id"
          :cart_data="item"
          @DeleteFromCart="DeleteFromCart(index)"
        />
      </div>
      <div class="v-cart-total block">
        <h3>Товар для оформлений</h3>
        <ul>
          <li
            v-for="service in CART"
            :key="service.id"
            v-on:click="toggleActive(service)"
            :class="{ 'active': service.active}"
          >
            <p>{{service.name}}</p>
            <p>{{service.price  | toFix | formattedPrice}}</p>
          </li>
        </ul>
        <div class="total">
          <p>Итого:</p>
          <p>{{total()  | toFix | formattedPrice}}</p>
        </div>
        <center>
          <transition name="fade">
            <div v-if="total() > 0" class="btn">Оформить</div>
          </transition>
        </center>
      </div>
    </div>
    <div v-else class="else"> 
      <h2>Корзина пустая</h2>
    </div>
    <v-notif 
      :mess="mess"
      :timeout="3000"
    />
  </div>
</template>

<script>
import toFix from '../../filters/toFix'
import formattedPrice from '../../filters/price-format'
import { mapGetters, mapActions } from 'vuex'
import vCartItem from './v-cart-item'
import vNotif from '../v-notif'

export default {
  components: {
    vCartItem,
    vNotif
  },
  data() {
    return {
      search: '',
      mess: [],
    }
  },
  filters: {
    formattedPrice,
    toFix
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
    ]),
    DeleteFromCart(index) {
      this.DELETE_FROM_CART(index)
      .then(() => {
        let timeStamp = Date.now().toLocaleString();
        this.mess.unshift(
          { name: 'Toвар успешно удален', icon: 'warning', id: timeStamp }
        )
      })
    },
    toggleActive: function(s){
      s.active = !s.active;
    },
    total: function(){
      var total = 0;
      this.CART.forEach(function(s){
        if (s.active){
          total+= s.price;
        }
      });
      return total;
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
  },
}
</script>

<style lang="scss">
.v-cart .if {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 96px 0px 100px;
  color: #fff;
  .v-cart-item {
    width: 700px;
    margin-bottom: 50px;
    .item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 70px;
      margin: 0px 20px;
      div {
        text-align: center;
        width: 150px;
      }
    }
  }
  .v-cart-total {
    width: 350px;
  }
}
.v-cart-total{
  height: 100%;
  padding: 10px 23px;
  margin-top: 0px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  h3 {
    color:#fff;
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    line-height:1;
    text-shadow:0 3px 0 rgba(0,0,0,0.1);
    text-align: center;
  }
  ul {
    list-style:none;
    color:#fff;
    font-size:16px;
    font-weight:bold;
    text-align: left;
    margin:20px 0 15px;
    li{
      padding: 15px 25px; 
      background-color:#e35885;
      margin-bottom:8px;
      box-shadow:0 1px 1px rgba(0,0,0,0.1);
      cursor:pointer;
      display: flex;
      justify-content: space-between;
      &.active{
        background-color:#8ec16d;
      }
    }
  }
  .total{
    border-top:1px solid rgba(255,255,255,0.5);
    padding:15px 30px;
    font-size:20px;
    font-weight:bold;
    color:#fff;
    display: flex;
    justify-content: space-between;
  }
  .btn {
    margin-top: 0px;
    margin-bottom: 10px;
  }
}
.else {
    padding: 100px;
    text-align: center;
    color: #fff;
}

@media (max-width: 990px) {
  .v-cart {
    padding: 30px 100px 100px;
  }
}

@media (max-width: 550px) {
  .v-cart .if {
   
    .v-cart-item {
      display: flex;
      
      flex-direction: column;
      .item {
        flex-direction: column;
        margin: 20px;
      }
    }
  }
}

@media (max-width: 490px) {
  .v-cart-total {
    ul li {
      flex-direction: column;
      align-items: center;
    }
    .total {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>