<style scoped></style>

<template>
  <div>
    <button v-on:click="showLog">show</button>
  </div>
</template>

<script>
export default {
  /* pdtmc^2w */
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    showLog(e) {
      console.log(e.target);
      // showLog 라는 사용자 이벤트를 발생시키고
      // "abc" 와 123 을 값으로 전달하시오
      debugger;
      this.$emit('showLog', 'abc', 123);
    },
  },
};
</script>
