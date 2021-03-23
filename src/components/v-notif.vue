<template>
  <div class="v-notif">

      <transition-group
        name="v-transition-animate"
        class="mess_list"
      >
        <div 
            class="v-notif__content"
            v-for="mes in mess"
            :key="mes.id"
            :class="mes.icon"
        >
            <div class="content__text">
                <p></p>
                <span>{{mes.name}} </span>
                <i class="material-icons">{{mes.icon}}</i>
            </div>
        </div>
      </transition-group>

      
  </div>
</template>

<script>
export default {
  name: 'v-notif',
  props: {
      mess: {
          type: Array,
          default:() => []
      },
      timeout: {
          type: Number,
          default: 3000
      }
  },
  methods: {
    hideNotif() {
        let vm = this;
        if (this.mess.length) {
            setTimeout(function() {
                vm.mess.splice(vm.mess.length - 1, 1)
            }, vm.timeout)
        }
    }
  },
    watch: {
        mess() {
            this.hideNotif()
        }
    },
    mounted() {
        this.hideNotif()
    }
}
</script>

<style lang="scss">
.v-notif {
    position: fixed;
    top: 80px;
    right: 16px;
    z-index: 10;
    &__content {
        background: green;
        padding: 16px;
        height: 80px;
        border-radius: 4px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
        &.error {
            background: red;
        }
        &.warning {
            background: orange;
        }
        &.check_circle {
            background: green;
        }
    }
    .content__text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
    }
    .material-icons {
        margin-left: 16px;
    }
}
.v-transition-animate {
    &-enter {
        transform: translateX(120px);
        opacity: 0;
    }
    &-enter-active {
        transition: all .6s ease;
    }
    &-enter-to {
        opacity: 1;
    }
    &-leave {
        height: 30px;
        opacity: 1;
    }
    &-leave-active {
        transition: transform .6s ease, opacity .6s, height .6s .2s;
    }
    &-leave-to {
        height: 0;
        transform: translateX(120px);
        opacity: 0;
    }
    &-move {
        transition: transform .6s ease;
    }
}

</style>