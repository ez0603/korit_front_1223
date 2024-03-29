// ! 자바스크립트의 제어문

// 제어문
// : 프로그램의 흐름을 제어하는 경우에 사용하는 실행문
// - 조건문, 반복문

// 순차문
// : 코드가 위에서 아래로 순차적으로 실행되는 구문

// ! 조건문(Condition)
// : 프로그램에게 특정 조건을 검사하고
// : 그 결과에 따라 다른 행동을 하도록 명령하는 방식
// : 특정 조건에 따라 코드블록을 실행 | 건너뛰기 가능

// ? JS 조건문의 종류
// : if문, else문, else if문, swith문

// 1. if문
// : 가장 기본적인 조건문 : 특정 조건이 참이면 코드블록을 실행

// * if문의 기본 형태
/*
if (조건) {
    조건이 참일 때 실행할 코드
}
*/
// >> 조건 : 보통 비교 연산자를 사용해 표현(동등, 일치, 부등호 - boolean 타입으로 반환)
// : 주어진 조건이 참(true)일 때만 코드블록을 실행
// : 만약 조건이 거짓(false)이면 코드블록은 무시

let number = 10;

if (number > 0) { 
    // 조건이 참일 때 실행할 코드
    console.log('The number is positive');
}

console.log('순차문의 코드 진행');

// ? else문
// : if문과 함께 사용, if문의 주어진 조건이 거짓일 때 실행할 코드 블록을 정의

// * 기본 형태
/*
if (조건) {
    조건이 참일 때 실행 되는 코드
} else {
    조건이 거짓일 때 실행되는 코드
}
*/

number = -10; // 위에 let으로 number을 선언 해주었기 때문에 재할당만 가능

if (number > 0) {
    console.log('The number is positive');
} else {
    console.log('The number is not positive');
}

// ? else if문
// : 여러 조건을 순차적으로 검사하고 싶을 때 사용
// : 첫 번째 if 조건이 거짓이면, else if의 조건을 검사
// >> if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조

// * 기본적인 문법
/*
if (조건1) {
    조건1이 참일 때 실행되는 코드
} else if (조건2) {
    조건1이 거짓이고, 조건2가 참일 때 실행되는 코드
} else if (조건3) {
    조건1, 조건2가 거짓이고, 조건3이 참일 때 실행되는 코드
    ...
} else {
    모든 조건이 거짓일 때 실행되는 코드
}
*/

number = -10;

if (number > 0) {
    console.log('양수입니다.');
} else if (number < 0) {
    console.log('음수입니다.');
} else {
    console.log('0입니다.');
}

// - 조건식에 true와 false값과의 비교
// boolean 타입에서 false값으로 인식되는 값
// (false, 0, '', null, undefined)
// : 위의 값을 제외하고는 true의 값을 반환하기 때문에
// : 변수가 참인지 또는 그 값이 존재하는지를 테스트하기 위해서, 변수 이름 그 자체를 사용할 수 있음

// 조건식에서 변수명을 boolean 타입과 일치여부 확인을 하지 않아도 된다.

// >> 해당 변수를 불일치와 비교하고 싶은 경우
//    : 부정 논리를 사용(!)

let cheese = 'Cheddar';
// let result = Boolean(cheese); -> 형변환을 시키는 것이 아닌 변수명을 직접넣어 비교

if (cheese) {
    console.log('치즈가 존재합니다.');
} else {
    console.log('치즈가 없습니다.');
}

// cheese !== true
if (!cheese) {
    console.log('치즈가 없습니다.');
} else {
    console.log('치즈가 있습니다.');
}

// ? switch문
// : 하나의 표현식을 평가하고 그 값에 맞는 case 라벨로 코드 실행을 전환
// : 여러 가지 경우 중 하나를 선택하는데 사용

// * 기본 구조
/*
switch (식) {
    case 값1:
        식이 값1과 일치할 때 실행되는 코드
    case 값2:
        식이 값2과 일치할 때 실행되는 코드
    case 값3:
        식이 값3과 일치할 때 실행되는 코드
    ...
    default:
        식이 어떤 값과도 일치하지 않을 때 실행되는 코드
}
*/

let fruit = 'banana';

// case의 값의 경우 조건식의 데이터와 같은 데이터타입을 가져야함
switch (fruit) {
    // 줄정렬 : 원하는 줄을 드래그 ctrl + k + f
    // 해당 파일 전체 정렬 : 마우스 커서 ctrl + k + f
    case 'apple':
        console.log('사과');
        break;
        // break문(필수 X)
        // : 이전의 선택이 표현식의 값과 일치한다면
        //   브라우저는 해당 코드 블록에서 실행을 멈추고 
        //   switch문 아래에 있는 코드로 이동
        // >> break를 만나면 switch문 탈출
    case 'banana':
        console.log('바나나');
        break;
    case 'orange':
        console.log('오렌지');
        break;
    default:
        console.log('일치하는 과일이 없습니다.');
}