<style scoped></style>

<template>
  <div>
    Vue3501View
    <Vue3501Comp></Vue3501Comp>
  </div>
</template>

<script>
import Vue3501Comp from '../components/vue3501/Vue3501Comp.vue';

export default {
  components: {
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    Vue3501Comp: Vue3501Comp,
  },
};
</script>
