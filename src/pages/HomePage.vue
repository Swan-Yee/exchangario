<template>
  <div>
    <exchange-hero />
    <exchange-list />
    <exchange-pagination />
  </div>
</template>

<script>
import exchangeList from "../components/exchangeList.vue";
import exchangePagination from "../components/exchangePagination.vue";
import exchangeHero from "../components/exchangeHero.vue";

export default {
  components: {
    exchangeList,
    exchangePagination,
    exchangeHero,
  },
};
</script>
