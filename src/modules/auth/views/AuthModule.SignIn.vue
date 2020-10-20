<template>
  <layout-centered>
    <card width="24rem">
      <card-header>{{ title }}</card-header>
      <card-content>
        <text-line type="password" />
      </card-content>
    </card>
  </layout-centered>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LayoutCentered from "@/components/layouts/LayoutCentered.vue";
import Card from "@/components/cards/Card.vue";
import CardHeader from "@/components/cards/CardHeader.vue";
import CardContent from "@/components/cards/CardContent.vue";

import TextLine from "@/components/input/TextLine.vue";

export default defineComponent({
  name: "AuthModuleSignIn",
  components: { LayoutCentered, Card, CardHeader, TextLine, CardContent },
  setup() {
    const title = ref("Sign In");

    return {
      title
    };
  },
  mounted() {
    console.log(this.$route.params);
  }
});
</script>
