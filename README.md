# 딥러닝 기반 영상 콘텐츠 속 한국문화요소 해설 서비스 버블링(Bubbling)
![image](https://user-images.githubusercontent.com/78165538/145298017-ea6bacb5-0023-47a8-8c65-9356740d73a2.png)
- 2021-2 캡스톤디자인프로젝트A 스타트 1팀 파워졸프걸
## What is Bubbling?
버블링은 딥러닝 기반 영상 콘텐츠 속 한국문화요소 해설 서비스로, 외국인 사용자가 재생하는 영상 속 사물이 무엇인지를 해설과 함께 제공하는 확장 프로그램입니다.

## 예상 프로토타입

- 인식한 사물 위 버블 표시
![image](https://user-images.githubusercontent.com/78165538/145302307-a906fd87-5634-4913-bd44-97b7ba858912.png)
- 인식한 사물의 이름 및 해설 표시 / MY LIST 기능
![image](https://user-images.githubusercontent.com/78165538/145302459-ad5c4cfa-7c8e-4653-a948-aeda1c4a98b3.png)



## 시나리오

1) 버블링 확장 프로그램 아이콘을 클릭하여 실행
2) 유튜브 영상 재생시 인식한 객체 위에 버블 표시
3) 버블 클릭시 인식한 객체들의 이름과 해설을 화면 우측에서 각각 보여줌
4) Finish 버튼을 클릭하여 확장 프로그램 종료

## 서비스 제공 기능

- 영상 속 사물 인식 및 버블 표시 기능
- 영상 속 사물의 이름과 해설 제공
- 영상 속 사물 추가 탐색 기능
- MY LIST 및 북마크 기능

## 예상 아키텍처

![image](https://user-images.githubusercontent.com/78165538/145293710-53aeaf39-8406-4568-8030-7d44502ecab4.png)

## 기술 스택
- 언어 : Javascript, Python
- 딥러닝 아키텍처 : YOLO v5, pytorch, Google Colab, Roboflow annotate
- 웹 프론트엔드 : React
- 웹 백엔드 : NodeJs
- 기타 : git, Figma, AWS

## 코드 구성

- YOLO 모델의 성능 테스트 : https://github.com/PowerZolffGirl/Bubbling-Start/tree/main/Material/OD
- YOLO 모델 커스텀 트레이닝 : https://github.com/PowerZolffGirl/Bubbling-Start/tree/main/Material/Custom%20Training
- 웹기반 실시간 OD 및 Display : https://github.com/PowerZolffGirl/Bubbling-Start/tree/main/Web

