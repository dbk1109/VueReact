/*
 (구조) 분해 할당에 대해서 알아본다.
  배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
  객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
*/

// 배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
const points = [20, 30, 40];
const x1 = points[0]; // 20
const y1 = points[1]; // 30
const z1 = points[2]; // 40
console.log(x1, y1, z1);

const [x2, y2, z2] = points; // const [x2, y2, z2] =[20, 30, 40];
console.log(x2, y2, z2);

// 두번째 값 무시하기
const [x3, , z3] = points; // [20, 30, 40];
console.log(x3, z3); // 20, 40

// 세번째 값 무시하기
const [x4, , , w4] = points; // [20, 30, 40];
console.log(x4, w4); // 20, undefined

const [x5, , , w5] = [20, 30, 40, () => console.log('xxxx')];
console.log(x5, w5); // 20, ()=>(console.log('xxxx'))
w5(); // xxxx

const car = {
  type: 't',
  color: 'S',
  model: 2021,
};

// ES5
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);

// 객체 분해 할당 을 이용해서 type ,color ,model 을 만드시오
// 객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
// const { type:type, color:color, model:model, gear:gear } = car;
const { type, color, model, gear } = car;
console.log(type, color, model, gear); // t S 2021 undefined
