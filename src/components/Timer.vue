<template>
  <span>{{ timer }}</span>
</template>

<script>
export default {
  data() {
    return {
      timer: ""
    };
  },
  created() {
    this.clock();
  },
  methods: {
    clock() {
      setInterval(() => {
        this.timer = new Date().toTimeString();
      }, 1000);
    }
  }
};
</script>