<!-- eslint-disable max-len -->
<template>
  <component :is="currentPageComponent" :page-params="currentpageParams" />
</template>

<script>
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import eventBus from '@/eventBus';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  data() {
    return {
      currentpage: 'main',
      currentpageParams: {},
    };
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentpage = pageName;
      this.currentpageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentpage] || 'NotFoundPage';
    },
  },
  components: { MainPage, ProductPage, NotFoundPage },
  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  },
};
</script>
