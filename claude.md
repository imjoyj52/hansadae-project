# Multi-Agent Web Development Framework
## 프로젝트 구조 설계 문서

---

## 1. 프로젝트 개요

### 목적
대학 과제용 웹사이트 개발 프로젝트로, **UI/UX 완성도**에 집중하며 백엔드 로직 없이 프론트엔드만 구현합니다.

### 핵심 전략
- **Atomic Design** 기반 공통 컴포넌트 시스템
- **Multi-Agent** 역할 분담 구조
- **Style-First Workflow** (스타일 가이드 우선 접근)
- **Vibe Coding Optimization** (설계 우선, 실행은 신속)

---

## 2. 사이트 맵 (Site Map)

```
Main
├── 웹디자인
│   ├── 천 개의 파랑 (개발자 A)
│   ├── 마루 (개발자 B)
│   ├── 포트폴리오 (개발자 C)
│   └── 웹사이트 UI (개발자 D)
└── 기타(준비중)
    └── 기타 페이지 (개발자 E)
```

---

## 3. 기술 스택

### Core
- **Framework**: React 18+
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Routing**: React Router

### Development
- **Build Tool**: Vite
- **Language**: JavaScript/TypeScript
- **Version Control**: Git

---

## 4. 폴더 아키텍처

```
project-root/
├── docs/
│   ├── plan.md              # 기획자 작성 (UX 흐름, 요구사항)
│   └── style_guide.md       # PM/퍼블리셔 작성 (디자인 시스템)
│
├── src/
│   ├── components/
│   │   └── common/          # 공통 컴포넌트 (퍼블리셔 전담)
│   │       ├── Layout/
│   │       ├── Navigation/
│   │       ├── Button/
│   │       ├── Card/
│   │       ├── Typography/
│   │       ├── Form/
│   │       └── guide.md     # 컴포넌트 사용 가이드
│   │
│   ├── pages/
│   │   ├── blue-blue/       # 개발자 A: 천 개의 파랑
│   │   │   └── index.jsx
│   │   ├── maru/            # 개발자 B: 마루
│   │   │   └── index.jsx
│   │   ├── portfolio/       # 개발자 C: 포트폴리오
│   │   │   └── index.jsx
│   │   ├── ui-guide/        # 개발자 D: 웹사이트 UI
│   │   │   └── index.jsx
│   │   └── etc/             # 개발자 E: 기타
│   │       └── index.jsx
│   │
│   ├── styles/
│   │   └── globals.css      # 전역 스타일 및 Tailwind 설정
│   │
│   └── App.jsx              # 메인 라우팅 설정
│
├── public/
│   └── assets/              # 이미지, 폰트 등 정적 리소스
│
└── package.json
```

---

## 5. 역할 및 페르소나 (Roles)

### PM (Project Manager)
- **담당**: 전체 공정 관리, 우선순위 결정
- **책임**:
  - 사용자 요구사항 해석 및 작업 배분
  - docs/style_guide.md 최종 승인
  - 개발자 간 충돌 조정

### 기획자 (Planner)
- **담당**: UX 설계 및 사용자 경험 흐름 정의
- **산출물**: docs/plan.md
- **책임**:
  - 사이트 맵 구체화
  - 페이지별 기능 요구사항 정리
  - 사용자 시나리오 작성

### 퍼블리셔 (Publisher)
- **담당**: 공통 컴포넌트 개발 및 유지보수
- **작업 범위**: src/components/common/
- **책임**:
  - Atomic Design 원칙 준수
  - 컴포넌트 Props 인터페이스 설계
  - guide.md 작성 (컴포넌트 사용법)
  - 스타일 가이드 반영

### 페이지 개발자 (A, B, C, D, E)
- **개발자 A**: src/pages/blue-blue/ (천 개의 파랑)
- **개발자 B**: src/pages/maru/ (마루)
- **개발자 C**: src/pages/portfolio/ (포트폴리오)
- **개발자 D**: src/pages/ui-guide/ (웹사이트 UI)
- **개발자 E**: src/pages/etc/ (기타)

**공통 책임**:
- 담당 폴더 내에서만 작업
- **반드시** 공통 컴포넌트만 사용
- 페이지 내 스타일 하드코딩 금지
- Props를 통한 컴포넌트 변주

### 테스터 (Tester)
- **담당**: 품질 보증 및 일관성 검증
- **체크리스트**:
  - UI 일관성 (컴포넌트 스타일 통일)
  - 반응형 레이아웃 (모바일/태블릿/데스크탑)
  - 인터랙션 디테일 (애니메이션, 호버 효과)
  - 접근성 (키보드 네비게이션, ARIA)

### 가이드 관리자 (Technical Writer)
- **담당**: 문서 및 가이드 관리
- **작업 범위**: docs/ 폴더 내 모든 가이드 문서
- **책임**:
  - 기능 추가/변경 시 유관 가이드 파일 확인
  - 가이드 파일 신규 생성, 추가, 수정, 삭제
  - 변경 이력 기록 (날짜, 사유)
  - 가이드 문서 최신 상태 유지

---

## 6. 핵심 운영 원칙 (Rules)

### Rule 1: Style-First Workflow
```
사용자 스타일 요청
  ↓
docs/style_guide.md 업데이트
  ↓
공통 컴포넌트 생성/수정
  ↓
페이지에 적용
```

**절대 금지**
- 스타일 가이드 없이 개별 페이지에 스타일 하드코딩
- 텍스트 사용 시 이모지 사용 금지

### Rule 2: Strict Modularization
- 중메뉴별 작업자 엄격 분리
- 폴더 경계 침범 금지
- 공통 컴포넌트 외 직접 스타일링 금지
- 변주는 Props를 통해서만

### Rule 3: Vibe Coding Optimization
1. **구조 설계 우선** (claude.md, plan.md 등)
2. **구현 대상 명확화** (Todo 리스트 작성)
3. **즉시 실행** (불필요한 논의 최소화)

### Rule 4: No Logic, High UX
- 백엔드 로직/데이터베이스 구현 제외
- 시각적 깊이에 집중:
  - Framer Motion을 활용한 페이지 전환
  - CSS Animation으로 마이크로 인터랙션
  - Parallax, Scroll Trigger 등 고급 효과

### Rule 5: Atomic Design Hierarchy
```
Atoms (원자)
  ↓
Molecules (분자)
  ↓
Organisms (유기체)
  ↓
Templates (템플릿)
  ↓
Pages (페이지)
```

**예시**:
- Atom: Button, Input, Icon
- Molecule: SearchBar (Input + Button)
- Organism: Header (Logo + Navigation + SearchBar)
- Template: MainLayout (Header + Content + Footer)
- Page: blue-blue/index.jsx (MainLayout + 특정 콘텐츠)

### Rule 6: Guide Management
기능 추가/변경 시 반드시 가이드 문서를 함께 관리합니다.

```
기능 추가/변경 발생
  ↓
유관 가이드 파일 확인
  ↓
없음 → 신규 생성 / 있음 → 추가/수정/삭제
  ↓
변경 이력 기록 (날짜, 사유)
```

**가이드 파일 목록**:
| 파일 | 용도 |
|------|------|
| docs/style_guide.md | 디자인 시스템, 컬러, 타이포그래피 |
| docs/plan.md | 기획 문서, 사이트맵, 요구사항 |
| docs/page_guide.md | 페이지 수정 방법 안내 |
| docs/deploy_guide.md | 배포 방법 및 GitHub 연동 안내 |
| src/components/common/guide.md | 공통 컴포넌트 사용법 |

**변경 이력 기록 형식**:
```
## 변경 이력

| 날짜 | 작업 | 사유 |
|------|------|------|
| 2026-04-17 | 신규 생성 | 페이지 수정 가이드 최초 작성 |
```

---

## 7. 워크플로우 (Workflow)

### Phase 1: 기획 및 설계
1. **기획자**: docs/plan.md 작성
   - 사이트 맵 상세화
   - 페이지별 요구사항 정리
   - 사용자 시나리오 작성

2. **PM**: docs/style_guide.md 초안 작성
   - 컬러 팔레트 정의
   - 타이포그래피 시스템
   - 간격/그리드 시스템
   - 컴포넌트 네이밍 규칙

### Phase 2: 공통 컴포넌트 개발
1. **퍼블리셔**: 우선순위 컴포넌트 구현
   - Layout (전체 레이아웃 구조)
   - Navigation (메인/서브 네비게이션)
   - Button (기본/아웃라인/텍스트 버튼)
   - Card (콘텐츠 카드)
   - Typography (제목/본문 텍스트)

2. **퍼블리셔**: src/components/common/guide.md 작성
   - 각 컴포넌트 사용법
   - Props 인터페이스 설명
   - 사용 예시 코드

### Phase 3: 페이지 개발
1. **개발자 A~E**: 각자 담당 폴더에 index.jsx 생성
2. **공통 컴포넌트 import 및 조합**
3. **Props를 통한 스타일 변주**
4. **페이지별 고유 레이아웃 구성**

### Phase 4: 테스트 및 최적화
1. **테스터**: 체크리스트 기반 검증
2. **개발자**: 피드백 반영
3. **PM**: 최종 승인

---

## 8. 초기 구동 계획 (Action Plan)

### Step 1: 문서화
- [ ] docs/plan.md 작성 (기획자)
- [ ] docs/style_guide.md 초안 작성 (PM/퍼블리셔)

### Step 2: 프로젝트 초기화
- [ ] React + Vite 프로젝트 생성
- [ ] Tailwind CSS 설정
- [ ] Framer Motion 설치
- [ ] 폴더 구조 생성

### Step 3: 공통 컴포넌트 개발
- [ ] Layout 컴포넌트 (퍼블리셔)
- [ ] Navigation 컴포넌트 (퍼블리셔)
- [ ] Button 컴포넌트 (퍼블리셔)
- [ ] Card 컴포넌트 (퍼블리셔)
- [ ] guide.md 작성 (퍼블리셔)

### Step 4: 라우팅 설정
- [ ] React Router 설정
- [ ] 메인 페이지 라우트 구성
- [ ] 중메뉴별 라우트 설정

### Step 5: 페이지 개발 시작
- [ ] 개발자 A: blue-blue/index.jsx
- [ ] 개발자 B: maru/index.jsx
- [ ] 개발자 C: portfolio/index.jsx
- [ ] 개발자 D: ui-guide/index.jsx
- [ ] 개발자 E: etc/index.jsx

---

## 9. 커뮤니케이션 규칙

### claude.md 파일 내용 변경 요청 시
```
사용자: "claude.md 파일 내 aa 내용을 bb로 변경해주세요"
  ↓
PM: docs/style_guide.md, guide.md에 업데이트 필요 여부 체크 후, 필요 시 각 작업자에게 요청
  ↓
퍼블리셔: 해당 내용 수정
  ↓
개발자: 해당 내용 수정
```


### 스타일 변경 요청 시
```
사용자: "버튼 색상을 파란색으로 변경해주세요"
  ↓
PM: docs/style_guide.md 업데이트 여부 확인
  ↓
퍼블리셔: Button 컴포넌트 수정 또는 새 variant 추가
  ↓
개발자: 수정된 컴포넌트 적용
```

### 컴포넌트 추가 요청 시
```
개발자: "모달 컴포넌트가 필요합니다"
  ↓
퍼블리셔: Modal 컴포넌트 설계 및 구현
  ↓
퍼블리셔: guide.md에 사용법 추가
  ↓
개발자: 가이드에 따라 적용
```

---

## 10. 품질 기준

### 코드 품질
- ESLint/Prettier 준수
- 컴포넌트 파일당 200줄 이하
- Props 명확히 정의 (TypeScript 권장)
- 의미 있는 변수/함수명

### UI/UX 품질
- 반응형 디자인 (320px ~ 1920px)
- 60fps 애니메이션 성능
- 접근성 (WCAG 2.1 Level AA)
- 브라우저 호환성 (Chrome, Safari, Firefox)

### 문서 품질
- 모든 컴포넌트 guide.md에 문서화
- plan.md에 페이지별 요구사항 명시
- style_guide.md에 디자인 토큰 정의

---

## 11. 버전 관리 전략

### 브랜치 구조
```
main (배포용)
├── develop (개발 통합)
│   ├── feature/common-components (퍼블리셔)
│   ├── feature/blue-blue (개발자 A)
│   ├── feature/maru (개발자 B)
│   ├── feature/portfolio (개발자 C)
│   ├── feature/ui-guide (개발자 D)
│   └── feature/etc (개발자 E)
```

### 커밋 컨벤션
```
feat: 새 기능 추가
fix: 버그 수정
style: 스타일 변경
docs: 문서 수정
refactor: 코드 리팩토링
```

---

## 12. 다음 단계

1. **즉시 실행**: docs/ 폴더 생성 및 plan.md, style_guide.md 초안 작성
2. **프로젝트 초기화**: React + Vite 프로젝트 생성
3. **공통 컴포넌트 개발**: Layout, Navigation 우선 구현
4. **페이지 개발 시작**: 개발자별 담당 페이지 구현

---

**Last Updated**: 2026-04-15
**Document Owner**: PM
**Status**: Initial Draft
