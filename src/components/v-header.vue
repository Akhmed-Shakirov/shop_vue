<template>
  <header ref="nav">
    <a href="" class="logo">
      <router-link to="/">Мой лого</router-link></a>
    <a id="nav" v-if="!bshow" @click="show = !show">
      <i v-if="!show" class="material-icons">menu</i>
      <i v-else class="material-icons">close</i>
    </a>
    <ul v-if="show" class="navigation">
      <li><a href=""><router-link to="/">Гланое</router-link></a></li>
      <li><a href=""><router-link to="/catalog">Каталог</router-link></a></li>
      <li><a href=""><router-link to="/cart">Корзина</router-link></a></li>
      <li><a href=""><router-link to="/about">Обо мне</router-link></a></li>
    </ul>
    <div class="search">
      <input type="text" placeholder="Поиск по сайту" v-model="searchValue" v-on:keyup.enter="search(searchValue)">
      <i @click="search(searchValue)" class="material-icons">search</i>
      <i @click="clearSearch" id="clear" class="material-icons">clear</i>
    </div>
  </header>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      show: true,
      bshow: false,
      searchValue: '',
    }
  },
  computed: {
    ...mapGetters([
      'SEARCH_VALUE',
      'PRODUCTS'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE'
    ]),
    search(value) {
      this.GET_SEARCH_VALUE(value);
      if (this.$router.path !== '/catalog') {
        this.$router.push('/catalog').catch(err=>err);
      }
    },
    clearSearch() {
      this.searchValue = ''
      this.GET_SEARCH_VALUE();
    },
    onResize() {
      let w = document.documentElement.clientWidth;
      this.itemSize = w >= 991 ? this.show = true : this.bshow = false;
      this.itemSize = w < 991 ? this.show = false : this.bshow = true;
    },
    closeNav() {
      if (this.bshow == false) {
        this.show = false
      }
    }
  },
  created() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function(item) {
      if (item.target === vm.$refs['nav']) {
        vm.closeNav()
      }
    })
  }
}
</script>

<style lang="scss">
header {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 100px;
  background: #5b639c;
  z-index: 10;
  #nav {
    margin-left: -268px;
    margin-top: -3px;
    position: absolute;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 3px 3px 0px 3px;
    cursor: pointer;
  }
  .logo {
    position: relative;
    font-size: 1.5em;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    .router-link-active {
      color: #fff;
      text-decoration: none;
    }
  }
  .navigation {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px 0;
    li {
      list-style: none;
      margin: 0 10px;
      a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 1px;
        a:hover {
          color: #ffeb3b;
        }
        .router-link-exact-active {
          color: #ffeb3b;
        }
      }
    }
  }
  .search {
    position: relative;
    width: 300px;
    height: 40px;
    input {
      position: absolute;
      width: 100%;
      height: 100%;
      color: #fff;
      background: transparent;
      outline: none;
      border: 1px solid #fff;
      border-radius: 4px; 
      padding-left: 50px;
    }
    input::placeholder {
      color: #fff;
      padding-left: 45px;
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
    #clear {
      left: 258px;
      border-left: 1px solid #fff;
      border-right: none;
      padding-left: 10px;
    }
  }
}

@media (max-width: 991px) {
	header {
    padding: 10px 20px;
    flex-direction: column;
    .logo {
      margin-bottom: 7px;
    }
  }
}
@media (max-width: 420px) {
  header {
    #nav {
      margin-left: -228px;
    }
    .search {
      position: relative;
      width: 260px;
      height: 40px;
      #clear {
        left: 217px;
      }
      input::placeholder {
        color: #fff;
        padding-left: 55px;
      }
    }
  }
}
@media (max-width: 392px) {
  header {
    .navigation {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
      li {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
