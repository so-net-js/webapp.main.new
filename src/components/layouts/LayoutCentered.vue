<template>
  <div
    class="layout-centered"
    :class="{ 'layout-centered--horizontal': horizontal }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutCentered",
  props: {
    horizontal: Boolean
  },
  setup(props) {
    console.log(props);
  }
});
</script>

<style lang="scss" scoped>
.layout-centered {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
