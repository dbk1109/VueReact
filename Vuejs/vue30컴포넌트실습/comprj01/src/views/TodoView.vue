<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

li.checked {
  background: #bbb;
  color: #fff;
  text-decoration: line-through;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<template>
  <div id="app">
    <!-- TodoHeader -->
    <TodoHeader></TodoHeader>

    <!-- TodoInput -->
    <TodoInput></TodoInput>

    <!-- TodoList -->
    <!-- "checked(todoItem.done)"  <==> "todoItem.done ? 'checked': null "  -->
    <section>
      <ul>
        <li>
          <i aria-hidden="true" class="checkBtn fas fa-check"></i>
          영화보기
          <span type="button" class="removeBtn">
            <i aria-hidden="true" class="far fa-trash-alt"></i>
          </span>
        </li>
        <li class="checked">
          <i aria-hidden="true" class="checkBtn fas fa-check"></i>
          주말 산책
          <span type="button" class="removeBtn">
            <i aria-hidden="true" class="far fa-trash-alt"></i>
          </span>
        </li>
        <li>
          <i aria-hidden="true" class="checkBtn fas fa-check"></i>
          ES6 학습
          <span type="button" class="removeBtn">
            <i aria-hidden="true" class="far fa-trash-alt"></i>
          </span>
        </li>
        <li>
          <i aria-hidden="true" class="checkBtn fas fa-check"></i>
          잠실 야구장
          <span type="button" class="removeBtn">
            <i aria-hidden="true" class="far fa-trash-alt"></i>
          </span>
        </li>
      </ul>
    </section>

    <!-- TodoFooter -->
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import TodoHeader from '../components/todo/TodoHeader.vue';
import TodoFooter from '../components/todo/TodoFooter.vue';
import TodoInput from '../components/todo/TodoInput.vue';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {};
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    clearAll(e) {
      debugger;
      console.log(e.target);
    },
    /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져오는 헬퍼 메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */
  },
  components: {
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    TodoHeader: TodoHeader,
    TodoFooter: TodoFooter,
    TodoInput: TodoInput,
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져오는 헬퍼메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
