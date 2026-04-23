# 페이지 수정 가이드

각 페이지별 컨텐츠를 수정하는 방법을 안내합니다.

---

## 공통 구조

모든 페이지는 다음 구조로 되어 있습니다:

```
페이지
├── 히어로 배너 (상단 이미지/그라데이션 영역)
│   ├── 메인으로 버튼
│   ├── 페이지 제목
│   └── 페이지 설명
└── 컨텐츠 영역 (흰색 카드들)
```

---

## 페이지별 파일 위치

| 페이지 | 파일 경로 |
|--------|-----------|
| 천 개의 파랑 | `src/pages/blue-blue/index.jsx` |
| 마루 | `src/pages/maru/index.jsx` |
| 포트폴리오 | `src/pages/portfolio/index.jsx` |
| 웹사이트 UI | `src/pages/ui-guide/index.jsx` |
| 기타 | `src/pages/etc/index.jsx` |

---

## 기본 페이지 수정 방법 (마루, 포트폴리오, 웹사이트 UI, 기타)

### 1. 페이지 설정 수정

파일 상단의 `pageConfig` 객체를 수정합니다:

```jsx
const pageConfig = {
  title: '페이지 제목',           // 히어로 배너에 표시될 제목
  subtitle: '페이지 설명',        // 제목 아래 표시될 설명
  // heroImage: '/img/hero.png', // 배경 이미지 (주석 해제 시 적용)
}
```

### 2. 히어로 배경 이미지 추가

1. 이미지 파일을 `public/img/` 폴더에 넣습니다
2. `pageConfig.heroImage` 주석을 해제하고 경로를 입력합니다:

```jsx
const pageConfig = {
  title: '마루',
  subtitle: '자연과 함께하는 공간',
  heroImage: '/img/maru_hero.png',  // 주석 해제!
}
```

### 3. 컨텐츠 섹션 수정

`content.sections` 배열에 섹션을 추가/수정합니다:

```jsx
const content = {
  sections: [
    {
      title: '첫 번째 섹션 제목',
      content: `
        여기에 내용을 입력합니다.

        여러 줄로 작성할 수 있습니다.
        빈 줄을 넣으면 문단이 나뉩니다.
      `,
    },
    {
      title: '두 번째 섹션 제목',
      content: '두 번째 섹션 내용입니다.',
    },
    // 필요한 만큼 섹션 추가 가능
  ],
}
```

---

## 천 개의 파랑 페이지 수정 방법

천 개의 파랑 페이지는 탭 구조로 되어 있어 수정 방법이 다릅니다.

### 파일 위치
`src/pages/blue-blue/index.jsx`

### 1. 탭 컨텐츠 수정

파일 상단의 `tabContents` 객체를 수정합니다:

```jsx
const tabContents = {
  summary: {
    title: '책 소개',              // 탭 클릭 시 표시될 제목
    content: `
      여기에 책 소개 내용을 입력합니다.

      여러 문단으로 작성할 수 있습니다.
    `,
  },
  review: {
    title: '책을 읽은 후',
    content: `
      독후감 내용을 입력합니다.
    `,
  },
  purchase: {
    title: '책 구매하러 가기',
    content: `
      구매 관련 안내 내용을 입력합니다.
    `,
    // link: 'https://example.com/buy',  // 구매 링크 (주석 해제 시 버튼 생성)
  },
}
```

### 2. 구매 링크 추가

`purchase` 탭에 구매 버튼을 추가하려면:

```jsx
purchase: {
  title: '책 구매하러 가기',
  content: '아래 버튼을 클릭하여 구매하세요.',
  link: 'https://www.yes24.com/Product/Goods/12345',  // 실제 URL 입력
},
```

### 3. 탭 버튼 이름 변경

`tabs` 배열을 수정합니다:

```jsx
const tabs = [
  { id: 'summary', label: '줄거리' },        // label이 버튼에 표시됨
  { id: 'review', label: '책을 읽은 후' },
  { id: 'purchase', label: '책 구매하러 가기' },
]
```

### 4. 히어로 배경 이미지 변경

```jsx
style={{
  backgroundImage: 'url(/img/thousand_blues_option_a.png)',  // 이미지 경로 변경
}}
```

---

## 이미지 추가 방법

### 1. 이미지 파일 위치
모든 이미지는 `public/img/` 폴더에 넣습니다.

### 2. 이미지 경로 규칙
- 경로는 `/img/파일명.png` 형식으로 작성
- `public` 폴더는 경로에 포함하지 않음

### 예시
```
파일 위치: public/img/maru_hero.png
사용 경로: /img/maru_hero.png
```

---

## 텍스트 작성 팁

### 여러 줄 텍스트
백틱(`)을 사용하면 여러 줄로 작성할 수 있습니다:

```jsx
content: `
  첫 번째 문단입니다.
  같은 문단 내 줄바꿈.

  빈 줄을 넣으면 새 문단이 됩니다.

  세 번째 문단입니다.
`,
```

### 한 줄 텍스트
짧은 텍스트는 따옴표로 작성합니다:

```jsx
content: '간단한 한 줄 텍스트입니다.',
```

---

## 주의사항

1. **따옴표 규칙**: 텍스트 내에 따옴표가 있으면 백틱(`)을 사용하세요
2. **쉼표 확인**: 객체/배열 항목 끝에 쉼표(,)를 잊지 마세요
3. **저장 후 확인**: 수정 후 브라우저에서 새로고침하여 확인하세요

---

## 변경 이력

| 날짜 | 작업 | 사유 |
|------|------|------|
| 2026-04-17 | 신규 생성 | 페이지 수정 가이드 최초 작성 |

---

**최종 수정일**: 2026-04-17
**작성자**: 가이드 관리자
