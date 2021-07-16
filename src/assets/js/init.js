//Global Variable (전역변수)
const colorList = [
    "rad",
    "blue",
    "skyblue",
    "putple",
    "yellow",
    "grey",
    "black",
    "pink",
    "hotpink",
    "brown",
    "green",
    "orange",
    "coral",
    "indigo",
]
// 기준데이터가 변하더라도, 구현부가 변하면 안된다.

// 버튼을 눌렀을 때, colorList 배열 중에서,
// 하나면 랜덤하게 가지고 오는 로직을 작성하세요

const buttonClickHandler = () => {
    //전처리
    const box = document.getElementById("box-js");

    // colorList의 총 개수는 몇개인가?
    // 그러면 startIndex(0), endIndex (12)
    // 배열의 마지막 index는 length -1 이다.
    // 0부터 12까지 랜덤한수 를 구해야 해요.

    //box.style.backgroundColor = "rad";

    const ranNum = Math.floor(Math.random() * colorList.length);
    const nextColor = colorList[ranNum];

    // 처리
    box.style.backgroundColor = nextColor;
}