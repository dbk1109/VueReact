
<style scoped>
section {
  height: 150px;
  background-color: #95db5e;
  margin: 0 5% 20px 5%;
  margin: 40px 0px;
}

div {margin: 40px 20px;}
</style>

<template>
  <div class="container">
    <header-comp></header-comp>

    <section id="page1" data-role="page">
        <div class="content" data-role="content">컨텐츠</div>
    </section>

    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Header from "./Header.vue"; //여기서 소환
import Footer from "./Footer.vue";

export default { //sf10 파일단위의 컴포넌트를 만들어냄
  data() {
    return {
      msg: "Hello VueJS",
    };
  },
  components: { //여기서 조합
    "header-comp": Header,
    "footer-comp": Footer,
  },
};
</script>
