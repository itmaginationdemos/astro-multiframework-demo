<script>
export default {
  props: {
    count: String
  },

  data() {
    return {
      value: parseInt(this.count) || 0
    }
  },
  methods: {
    onCountClick(){
      if (this.value) {
        this.value ++;
      }
    }
  }
}
</script>

<template>
  <h3>Hello!</h3>
  <button @click="onCountClick">Let the counting begin!</button>
  <p class="greeting">with count {{ value }}</p>
</template>

<style>
.greeting {
  color: green;
  font-weight: bold;
  background: aliceblue;
}
</style>