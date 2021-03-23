<template>
  <div class="v-catalog">
    <div class="filter">
      <div class="select">
        <v-select :selected="selected" :options="categories" @select="sortByCategories" />
      </div>
      <div class="search">
        <input type="text" placeholder="Поиск по каталогу" v-model="search" />
      </div>
    </div>
    <div v-if="filteredProducts.length < 1" class="if">
      <h1>Нет такого товара</h1>
    </div>
    <div class="container">
      <v-catalog-item 
        v-for="product in filteredProducts" 
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
    <v-notif 
      :mess="mess"
      :timeout="3000"
    />
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import vSelect from '../v-select'
import vCatalogItem from './v-catalog-item'
import vNotif from '../v-notif'

export default {
  name: 'v-catalog',
  components: {
    vCatalogItem,
    vSelect,
    vNotif
  },
  data() {
    return {
      disShow: false,
      search: '',
      mess: [],
      categories: [
        {name: 'Все', value: 'All'},
        {name: 'Мужские', value: 'М'},
        {name: 'Женские', value: 'Ж'},
      ],
      selected: 'Все',
      sortedProducts: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'SEARCH_VALUE'
    ]),
    filteredProducts() {
      if  (this.search) {
        if (this.sortedProducts.length) {
          return this.sortedProducts.filter(item => {return item.name.toLowerCase().includes(this.search.toLowerCase())}) 
        } else {
          return this.PRODUCTS.filter(item => {return item.name.toLowerCase().includes(this.search.toLowerCase())})
        }
      } 
      else
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } 
      else {
        return this.PRODUCTS
      }
    },
  },
  mounted() {
    if (this.SEARCH_VALUE.length > 0) {
      this.search = this.SEARCH_VALUE;
    }
  },
  watch: {
    SEARCH_VALUE() {
      this.filtered(this.SEARCH_VALUE);
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
      .then(() => {
          let timeStamp = Date.now().toLocaleString();
          this.mess.unshift(
            { name: 'Toвар успешно добавлен', icon: 'check_circle', id: timeStamp }
          )
        })
    },
    sortByCategories(category) {
      this.sortedProducts = []
      let vm = this;
      this.PRODUCTS.map(function(item) {
        if (item.category === category.name) {
          vm.sortedProducts.push(item);
        }
      })
      this.selected = category.name
    },
    filtered() {
      this.search = this.SEARCH_VALUE;
    }
  }
}
</script>

<style lang="scss">
.v-catalog {
  padding: 100px 100px 100px;
  .container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
  }
  .if {
    color: #fff;
    text-align: center;
    margin-top: 30px;
  }
  .filter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; 
    align-items: center;
    .search {
      position: relative;
      width: 300px;
      height: 40px;
      margin: 10px;
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #fff;
        background: transparent;
        outline: none;
        border: 1px solid #fff;
        border-radius: 4px; 
        padding: 0 10px 0 10px;
      }
      input::placeholder {
        color: #fff;
      }
      .material-icons {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        color: #fff;
        border-right: 1px solid #fff;
        padding-right: 10px;
        cursor: pointer;
      }
      .material-icons:hover {
        color: #ffeb3b;
      }
    }
    .select {
      color: #fff;
      z-index: 1;
      .options {
        background: #434978;
        :hover {
          background: #434978;
          color: #000;
        }
      }
    }
  }
}
@media (max-width: 990px) {
  .v-catalog {
    padding: 100px 20px 100px;
    .filter {
      flex-direction: column-reverse;
    }
  }
}
@media (max-width: 450px) {
  .v-catalog {
    .card {
      margin: 20px 0px;
      width: 225px;
      .content {
        bottom: 0px;
        .size {
          padding: 12px 0px;
        }
      }
    }
    .dicaunt h1 {
      margin: 34px 0px 0px 135px;
    }
    .filter .search {
      position: relative;
      width: 200px;
      height: 40px;
      margin: 0px;
    }
  }
}
</style>