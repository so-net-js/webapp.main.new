<template>
  <div class="card" :style="{ width: styles.width }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Card",
  props: {
    width: [Number, String]
  },
  setup(props) {
    const styles = computed(() => {
      return {
        width:
          typeof props.width === "string" ? props.width : `${props.width}px`
      };
    });

    return {
      styles
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/scss/card";

.card {
  display: flex;
  flex-direction: column;
  padding: $card-padding;
  background-color: $card-bg;
  box-shadow: $card-shadow;
  border-radius: $card-border-radius;
}
</style>
