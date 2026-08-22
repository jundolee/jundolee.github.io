# CMS 설정

이 사이트는 GitHub Pages를 계속 배포 대상으로 사용합니다. Netlify는 `/admin` 편집기의 로그인과 Git Gateway만 담당합니다.

1. Netlify에서 GitHub 저장소 `jundolee/jundolee.github.io`를 새 프로젝트로 연결합니다.
2. Build command는 `npm run build`, publish directory는 `dist`로 설정합니다.
3. **Integrations → Identity**에서 Identity를 활성화하고, 가입 방식은 **Invite only**로 설정합니다.
4. 같은 화면의 **Services → Git Gateway**를 활성화합니다.
5. Netlify가 발급한 도메인의 `/admin/`으로 이동해 초대받은 계정으로 로그인합니다.

작성·저장한 글과 사이트 설정은 GitHub `main` 브랜치에 커밋됩니다. 기존 GitHub Actions가 이 커밋을 감지해 GitHub Pages를 자동으로 다시 배포합니다.

## 편집 가능한 항목

- 글: 제목, 발행일, 카테고리, 임시저장, 요약, 대표 이미지, 작성자, Markdown 본문
- 메인: 헤더와 두 문단 소개문
- 메뉴: 메뉴명과 링크
- 소셜 링크: 아이콘 이름과 링크
