
spread 연산자!

const numbers = [ 1,2,3,4,5]

const spreadNumber = [ ...numbers, 1000, numbers ];
console .log(spreadNumbers); //[1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]



concat 연산자

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1. concat(arr2);

console.log(concated);

결과: [1, 2, 3, 4, 5, 6];



filter 

배열에서 특정한 값을 삭제 할 때 , filter 함수 사용
특정 조건이 만족하는 원소를 축출하여 새로운 배열 만듬.

예)
const tasksNotDone = todos.filter(todo => todo.done == false);
console.log(tasksNotDone);
: todo.done == false 만 축출하고, 조건이 만족할 때에만, 추출하여 새로운 배열을 만들겠다. 
