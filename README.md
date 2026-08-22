# 준 블로그 생각과 기록들

생각과 기록을 남기는 개인 블로그입니다. 제품, 일, 기술과 삶에 관한 글을 Markdown으로 작성하며, 웹 CMS에서도 발행할 수 있습니다.

- 블로그: [jundolee.github.io](https://jundolee.github.io/)
- 글 관리: [Netlify CMS 관리자](https://heroic-axolotl-5c89e6.netlify.app/admin/)

## 구성

- **Astro** 기반의 정적 블로그
- **Pretendard** 한글 폰트와 읽기 중심의 에디토리얼 레이아웃
- **Decap CMS + Netlify Identity**로 브라우저에서 글·카테고리·메뉴 관리
- Markdown, RSS, sitemap, Open Graph 메타데이터 지원
- GitHub Actions를 통한 품질 검사와 GitHub Pages 배포

## 글 작성하기

가장 간단한 방법은 CMS를 사용하는 것입니다.

1. [관리자 화면](https://heroic-axolotl-5c89e6.netlify.app/admin/)에 로그인합니다.
2. `글`에서 새 글을 만들거나 기존 글을 수정합니다.
3. `Publish`를 누르면 `main` 브랜치에 반영되고 자동 배포됩니다.

대표 이미지는 CMS에서 업로드하면 `public/images/uploads`에 저장되며, 상세 글 제목 아래에 배너로 표시됩니다.

메뉴와 메인 소개 문구는 CMS의 `사이트 설정`에서 관리합니다.

## 로컬에서 실행하기

Node.js LTS 환경에서 실행합니다. `corepack` 없이도 npm으로 사용할 수 있습니다.

```bash
npm install
npm run dev
```

개발 서버는 보통 `http://localhost:4321`에서 열립니다.

| 명령어              | 설명                                   |
| ------------------- | -------------------------------------- |
| `npm run dev`       | 개발 서버 실행                         |
| `npm run build`     | 타입 검사 후 정적 사이트 빌드          |
| `npm run preview`   | 빌드 결과 미리 보기                    |
| `npm run lint`      | 코드 형식 검사                         |
| `npm run lint:fix`  | 코드 형식 자동 정리                    |
| `npm run typecheck` | Astro 콘텐츠 동기화 후 TypeScript 검사 |

## 파일 구조

```text
src/
  content/
    posts/              # Markdown 글
    site-settings.json  # 블로그 제목·소개·메뉴 설정
  layouts/              # 목록·상세 글 레이아웃
  styles/               # 전역 스타일과 폰트
public/
  admin/                # Decap CMS 설정
  images/uploads/       # CMS 업로드 이미지
```

CMS 없이 직접 글을 작성하려면 `src/content/posts`에 Markdown 파일을 추가합니다.

```md
---
title: 글 제목
pubDate: 2026-08-23
categories:
  - 일반
draft: false
description: 글 요약
banner: /images/uploads/cover.jpg
---

여기부터 본문입니다.
```

## 배포와 점검

`main` 브랜치에 변경이 들어오면 다음이 자동 실행됩니다.

1. Quality Gate — 린트, 타입 검사, 빌드
2. GitHub Pages — 정적 사이트 배포
3. Netlify — CMS와 Netlify 배포 갱신

GitHub Pages 배포는 CMS에서 여러 변경을 연달아 저장해도 충돌하지 않도록 순서대로 처리합니다.

## 라이선스 및 출처

이 프로젝트는 [Astro Typography](https://github.com/moeyua/astro-theme-typography) 테마를 바탕으로 블로그 용도에 맞게 재구성했습니다.
