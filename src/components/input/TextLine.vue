<template>
  <div class="text-input">
    <div class="text-input_label"></div>
    <div class="text-input_box">
      <div class="text-input_icon-prepend"></div>
      <input v-bind="$props" />
      <div class="text-input_icon-append"></div>
    </div>
    <div class="text-input_icon-append-outer"></div>
    <div class="text-input_error"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    type: {
      type: String,
      default: () => "text"
    }
  },
  name: "TextInput"
});
</script>
