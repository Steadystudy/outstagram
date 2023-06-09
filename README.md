# 인스타그램 클론 코딩

배포 사이트: [Outstagram](https://outstagram-drab.vercel.app)

## 기술 스택

<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=TailwindCss&logoColor=white">

Headless CMS: Sanity.io

## 왜 Next 13인가?

- 프론트엔드에서 Full Stack으로 프로젝트를 만들 수 있고, SSR, CSR, 하이브리드 렌더링을 지원하여 Next를 선택했습니다.

- 서버 컴포넌트와 클라이언트 컴포넌트의 분리, Turbopack, Layout, api route 등 12버전보다 많은 부분이 개선되어 13버전을 선택했습니다.

## sanity를 사용한 이유?

- WordPress나 Strapi보다 더 높은 점유율을 차지하고, 2022 JAMStack Community Survey에서 높은 만족도를 보이고 있습니다.
- 오픈소스는 아니지만 Headless CMS를 지원해준지 오래되어 안정적입니다.

## NextAuth.js(Auth.js)를 사용한 이유?

- 자체적으로 로그인 데이터를 관리하기 어려워서 NextAuth를 사용해 소셜로그인으로 구현하였습니다.

## 무엇을 중점으로 하였는가?

- Next 13버전이 실험 버전이기 때문에 구현되지 않는 것들이 몇 가지 있어서 13버전 공식문서와 Next 깃헙 이슈를 중점적으로 확인하였습니다.
- 컴포넌트를 만들 때 서버에서 동작하여야 하는지, 클라이언트에서 동작하여야 하는지 생각하며 만들었습니다.

### 1️⃣ 로그인 페이지

![스크린샷 2023-05-19 오후 2 24 14](https://github.com/Steadystudy/CS-study/assets/76620786/02b5bafd-a222-4aaa-992b-70b634c29cdd)

### 2️⃣ 홈페이지

![스크린샷 2023-05-19 오후 2 24 34](https://github.com/Steadystudy/CS-study/assets/76620786/228ff8a1-e7c6-477e-9ab9-2493e35eda7d)

### 3️⃣ 검색 페이지

![스크린샷 2023-05-19 오후 2 24 48](https://github.com/Steadystudy/CS-study/assets/76620786/c2bdbc90-6a66-4ce3-b686-0266a9816c6a)

### 4️⃣ 프로필 페이지

![스크린샷 2023-05-19 오후 2 26 24](https://github.com/Steadystudy/CS-study/assets/76620786/e4a9483e-dbd4-4e77-862f-d5ccc015887e)

### 5️⃣ 포스트 작성 페이지

![스크린샷 2023-05-19 오후 2 25 02](https://github.com/Steadystudy/CS-study/assets/76620786/c1d61c72-9678-48bc-8ba7-0c0f0790de0f)

### 6️⃣ 포스트 상세 페이지

![스크린샷 2023-05-19 오후 2 33 26](https://github.com/Steadystudy/CS-study/assets/76620786/992c409f-d0c2-419d-975f-be9a851ac760)

## 기능 목록

- 소셜 로그인 (구글)
- 포스트 생성
- 포스트 상세 페이지 모달 형식
- 유저 팔로잉
- 포스트 좋아요, 북마크, 코멘트
- 사용자 검색
- 사용자 상세 페이지

## 앞으로 추가 사항

- 포스트 삭제
- 다양한 소셜 로그인 추가
