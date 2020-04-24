<template>
  <div>
    Firebase Messaging Test, see devtools.
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
    console.log("FIRE MESSAGING", this.$fireMess)
  },
})
</script>
