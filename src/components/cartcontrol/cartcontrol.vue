<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart() {
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        this.$emit('cartAdd', event)
      },
      decreaseCart() {
        if (this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      font-size: 24px
      .inner
        display: inline-block
        line-height: 24px
        padding: 6px
        color: rgb(0, 160, 220)
    .cart-count
      display: inline-block
      font-size: 10px
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      color: rgb(147, 153, 159)
    .cart-add
      display: inline-block
      font-size: 24px
      line-height: 24px
      padding: 6px
      color: rgb(0, 160, 220)

  .move-enter, .move-leave-to
    opacity: 0
    transform: translate3d(24px, 0, 0) rotate(180deg)

  .move-enter-active, .move-leave-active
    transition: all 0.3s linear
</style>
