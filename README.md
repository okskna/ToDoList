# 웹 어플리케이션 "Momentum" 카피 프로젝트

Momentum: <https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?utm_source=chrome-ntp-icon>



기능:

1. 배경 이미지의 랜덤한 변경
2. ToDo li 노드의 삽입 및 삭제
3. localStorage에 이름 및 ToDo 데이터를 저장 및 로드



구현:

1. 시작 화면![](https://github.com/okskna/toDoList/blob/master/ResultImg/1.JPG?raw=true)
2. 이름 입력 -> 이름은 localStorage에 저장되어 재입력 필요 X![](https://github.com/okskna/toDoList/blob/master/ResultImg/2_%EC%9D%B4%EB%A6%84%EC%9E%85%EB%A0%A5.JPG?raw=true)
3. To Do list 입력![](https://github.com/okskna/toDoList/blob/master/ResultImg/3_ToDo%20%EC%83%9D%EC%84%B1.JPG?raw=true)
4. To Do list 삭제 -> 3번째를 삭제함![](https://github.com/okskna/toDoList/blob/master/ResultImg/4_ToDo%EC%82%AD%EC%A0%9C.JPG?raw=true)
5. localStorage 현황![](https://github.com/okskna/toDoList/blob/master/ResultImg/5_localStorage.JPG?raw=true)



세부 내용:

1. JSON 형식으로 JS에서 만들은 객체를 localStorage에 string형식으로 저장 -> JSON.stringly
2. localStorage 에서 자료를 로드할때에는 다시 객체 형식으로 변환 -> JSON.parse
3. ToDo list 에 ID 를 부여하여 삭제할 경우 어떤 li를 삭제하는지 판단하여 해당하는 li를 삭제
4. 배경화면은 images 폴더에 저장한 후 랜덤한 값을 만들어 그에 해당하는 이미지를 출력
5. 배경화면의 z-index 를 -1로 하여 가장 뒤에 배치