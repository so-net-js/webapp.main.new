<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ROUTES } from "./router";

export default defineComponent({
  mounted() {
    this.$router.push({
      name: ROUTES.AUTH_MODULE.SIGN_IN,
      params: {
        action: "some"
      }
    });
  }
});
</script>

<style lang="scss">
@import "./scss/globals";
</style>
