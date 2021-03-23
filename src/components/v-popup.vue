<template>
  <div class="popup-wraper" ref="popup-wraper">
      <div class="v-popup">
        <div class="v-popup__header">
            <span>Popup NAME</span>
            <span>
                <i 
                    class="material-icons"
                    @click="closePopup"
                >close</i>
            </span>
        </div>
        <div class="v-popup__content">
            <slot></slot>
        </div>
        <div class="v-popup__footer">
            <a @click="AddToCart" class="btn">Добавить в корзину</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  methods: {
    closePopup() {
        this.$emit('closePopup')
    },
    AddToCart() {
        this.$emit('AddToCart')
    }
  },
  mounted() {
      let vm = this;
      document.addEventListener('click', function(item) {
          if (item.target === vm.$refs['popup-wraper']) {
              vm.closePopup()
          }
      })
  }
}

</script>

<style lang="scss">
.popup-wraper {
    background: #a3a3a35d;
    display: flex;
    min-height: 200vw;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
}
.v-popup {
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 300px;
    background: #fff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 10;
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .material-icons {
            cursor: pointer;
        }
    }
    &__content {
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    &__footer {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>


 