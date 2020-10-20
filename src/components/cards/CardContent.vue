<template>
  <div class="card-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardContent"
});
</script>

<style lang="scss" scoped>
.card-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem 0;
}
</style>
