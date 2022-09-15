<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'cart' }">
            Корзина
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Корзина
      </h1>
      <span class="content__info">
        {{ totalAmount }} товаров
      </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST" @submit.prevent="order">
        <div class="cart__field">
          <div class="cart__data" style="position: relative;">
            <BasePreloader v-if="orderSending" style="z-index: 2;"/>

            <BaseFormText v-model="formData.name" title="ФИО"
             :error="formError.name" placeholder="Введите ваше полное имя"/>

            <BaseFormText v-model="formData.address" title="Адрес доставки"
             :error="formError.address" placeholder="Введите ваш адрес"/>

            <BaseFormText v-model="formData.phone" type="tel" title="Телефон"
             :error="formError.phone" placeholder="Введите ваш телефон"/>

            <BaseFormText v-model="formData.email" type="email" title="Email"
             :error="formError.email" placeholder="Введи ваш Email"/>

            <BaseFormTextarea v-model="formData.comment" title="Комментарий к заказу"
             :error="formError.comment" placeholder="Ваши пожелания" />
          </div>

          <div class="cart__options">
            <h3 class="cart__title">Доставка</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio"
                    name="delivery" value="0" checked="">
                  <span class="options__value">
                    Самовывоз <b>бесплатно</b>
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="500">
                  <span class="options__value">
                    Курьером <b>500 ₽</b>
                  </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Оплата</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="card">
                  <span class="options__value">
                    Картой при получении
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="cash">
                  <span class="options__value">
                    Наличными при получении
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <OrderCartItem v-for="item in products" :key="item.productId" :item="item" />
          </ul>

          <div class="cart__total">
            <p>Доставка: <b>500 ₽</b></p>
            <p>Итого:
              <b>{{ totalAmount }}</b> товаров на сумму <b>{{ totalPrice | formatNumber }} ₽
              </b>
            </p>
          </div>

          <button class="cart__button button button--primery" type="submit">
            Оформить заказ
          </button>
        </div>
        <div class="cart__error form__error-block" v-if="formErrorMessage">
          <h4>Заявка не отправлена!</h4>
          <p>
            {{ formErrorMessage }}
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import BaseFormText from '@/components/BaseFormText.vue';
import OrderCartItem from '@/components/OrderCartItem.vue';
import BaseFormTextarea from '@/components/BaseFormTextarea.vue';
import formatNumber from '@/helpers/formatNumber';
import axios from 'axios';
import { API_BASE_URL } from '@/config';
import BasePreloader from '@/components/BasePreloader.vue';

export default {
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: '',
      orderSending: false,
    };
  },
  computed: {
    ...mapGetters({ products: 'cartDetailProducts', totalPrice: 'cartTotalPrice', totalAmount: 'cartTotalAmount' }),
  },
  components: {
    BaseFormText, BaseFormTextarea, OrderCartItem, BasePreloader,
  },
  filters: {
    formatNumber,
  },
  methods: {
    order() {
      this.orderSending = true;
      this.formError = {};
      this.formErrorMessage = '';

      axios.post(`${API_BASE_URL}/orders`, {
        ...this.formData,
      }, {
        params: {
          userAccessKey: this.$store.state.userAccessKey,
        },
      })
        .then((response) => {
          this.$store.commit('resetCart');
          this.$store.commit('updateOrderInfo', response.data);
          this.$router.push({ name: 'orderInfo', params: { id: response.data.id } });
        })
        .catch((error) => {
          this.formError = error.response.data.error.request || {};
          this.formErrorMessage = error.response.data.error.message;
        })
        .then(() => {
          this.orderSending = false;
        });
    },
  },
};
</script>
