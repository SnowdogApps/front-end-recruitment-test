<template>
  <div class="order-block">
    <h3 class="order-title">Your order</h3>
    <div class="orders-list-box">
      <ul class="orders-list">
        <li v-for="(item, i) in cart.items" :key="i">
          <span>{{ item.name }}</span>
          <span>$ {{ item.price }}</span>
        </li>
      </ul>
    </div>
    <div class="orders-list-box order-totals">
      <ul class="orders-list">
        <li>
          <span>Total purchases</span>
          <span>$ {{ cart.totals.subTotal }}</span>
        </li>
        <li>
          <span>Estimated tax</span>
          <span>$ {{ cart.totals.tax }}</span>
        </li>
      </ul>
    </div>
    <div class="orders-list-box">
      <ul class="orders-list">
        <li>
          <span>Total</span>
          <span class="grand-total">$ {{ cart.totals.grandTotal }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cart: {
          items: [
            { name: "Apple Watch Sport", price: 580 },
            { name: "Modern Buckle", price: 380 },
          ],
          totals: {
            subTotal: Number,
            tax: 0,
            grandTotal: Number,
          },
        },
      }
    },
    methods: {
      getTotals() {
        this.cart.totals.subTotal = this.cart.items.reduce((value, item) => value + item.price, 0);
        this.cart.totals.grandTotal = this.cart.totals.subTotal + this.cart.totals.tax;
        return;
      },
    },
    mounted() {
      this.getTotals();
    }
  }
</script>

<style lang="scss">
  @use "sass:math";

  // order background-color
  $order-bg-color: #fff;

  // order border settings
  $order-border-width: 1px;
  $order-border-radius: 4px;

  // order margins and paddings
  $order-padding: 16px;
  $order-margin: $order-padding;

  // order list-item gap
  $order-list-item-gap: math.div($order-margin, 2) - 1px;

  .order {
    &-block {
      background: $order-bg-color;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.04);
      border-radius: $order-border-radius;
      padding: $order-padding;
      font-size: 11px;
      line-height: 16px;
      font-weight: 600;
      letter-spacing: 0.0015em;
    }
    &-title {
      display: block;
      margin-bottom: $order-margin;
      text-transform: uppercase;
      color: #000;
      font-weight: 900;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.03rem;
    }
    &-totals {
      padding: $order-padding 0;
      border: solid #D9D9D9;
      border-width: $order-border-width 0;
    }
  }
  .orders-list {
    list-style-type: none;
    &-box {
      margin-bottom: $order-margin;
    }
    > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &:not(:last-child) {
        margin-bottom: $order-list-item-gap;
      }
      .grand-total {
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
</style>