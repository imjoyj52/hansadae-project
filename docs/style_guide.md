# imjoy 스타일 가이드 (Style Guide)

## 1. 브랜드 아이덴티티

### 프로젝트명
**imjoy** - 대학 과제용 웹디자인 포트폴리오

### 브랜드 컬러 컨셉
핑크 & 퍼플 계열의 부드럽고 세련된 색상 조합

---

## 2. 컬러 시스템

### Primary Colors (핑크 계열)
메인 액션 및 강조 요소에 사용

| Token | Hex | 용도 |
|-------|-----|------|
| primary | #FF8EBF | 메인 컬러 (버튼, 강조) |
| primary-light | #FFD9E5 | 배경, 호버 상태 |
| primary-dark | #E67AAB | 액티브 상태 |

### Secondary Colors (퍼플 계열)
보조 요소 및 포인트에 사용

| Token | Hex | 용도 |
|-------|-----|------|
| secondary | #966988 | 포인트 컬러 |
| secondary-light | #B88AAD | 호버 상태 |
| secondary-dark | #7A5570 | 액티브 상태 |

### Neutral Colors
텍스트 및 배경에 사용

| Token | Hex | 용도 |
|-------|-----|------|
| black | #000000 | 제목 텍스트 |
| gray-900 | #1A1A1A | 본문 텍스트 |
| gray-600 | #666666 | 보조 텍스트 |
| gray-400 | #999999 | 비활성 텍스트 |
| gray-200 | #E5E5E5 | 테두리 |
| gray-100 | #F5F5F5 | 배경 (밝은) |
| white | #FFFFFF | 흰색 배경 |

### Background Gradients
| 이름 | 값 | 용도 |
|------|-----|------|
| gradient-main | from-primary-light to-white | 메인 페이지 배경 |
| gradient-accent | from-primary to-secondary | 강조 요소 |

---

## 3. 타이포그래피

### 폰트 패밀리
```css
font-family: 'Pretendard', system-ui, sans-serif;
```

### 제목 스타일
| 레벨 | 크기 | 굵기 | 행간 | 색상 |
|------|------|------|------|------|
| H1 | 2.5rem (40px) | Bold (700) | 1.2 | black |
| H2 | 1.75rem (28px) | Semibold (600) | 1.3 | black |
| H3 | 1.25rem (20px) | Medium (500) | 1.4 | gray-900 |

### 본문 스타일
| 용도 | 크기 | 굵기 | 행간 | 색상 |
|------|------|------|------|------|
| Body Large | 1.125rem (18px) | Normal (400) | 1.6 | gray-900 |
| Body | 1rem (16px) | Normal (400) | 1.6 | gray-900 |
| Body Small | 0.875rem (14px) | Normal (400) | 1.5 | gray-600 |
| Caption | 0.75rem (12px) | Medium (500) | 1.4 | gray-400 |

---

## 4. 간격 시스템

Tailwind CSS 기본 간격 시스템 사용

| Token | 값 | 용도 |
|-------|-----|------|
| 1 | 4px | 아이콘과 텍스트 간격 |
| 2 | 8px | 요소 내부 패딩 (작음) |
| 4 | 16px | 요소 내부 패딩 (기본) |
| 6 | 24px | 컴포넌트 간 간격 |
| 8 | 32px | 섹션 내 간격 |
| 12 | 48px | 섹션 간 간격 |
| 16 | 64px | 페이지 섹션 간격 |

---

## 5. 그림자

| 레벨 | 값 | 용도 |
|------|-----|------|
| sm | 0 1px 2px rgba(0,0,0,0.05) | 미세 강조 |
| DEFAULT | 0 4px 6px rgba(150,105,136,0.1) | 카드 기본 |
| lg | 0 10px 20px rgba(150,105,136,0.15) | 카드 호버 |
| xl | 0 20px 30px rgba(150,105,136,0.2) | 모달/드롭다운 |
| pink | 0 4px 14px rgba(255,142,191,0.3) | 핑크 강조 요소 |

---

## 6. 둥근 모서리

| Token | 값 | 용도 |
|-------|-----|------|
| rounded | 4px | 작은 요소 (태그) |
| rounded-lg | 8px | 버튼, 입력 필드 |
| rounded-xl | 12px | 카드 |
| rounded-2xl | 16px | 큰 카드, 모달 |
| rounded-3xl | 24px | 히어로 섹션 |
| rounded-full | 9999px | 아바타, 원형 버튼 |

---

## 7. 애니메이션

### 전환 지속시간
| 속도 | 값 | 용도 |
|------|-----|------|
| fast | 150ms | 버튼 상태 변경 |
| normal | 300ms | 일반 전환 |
| slow | 500ms | 페이지 전환 |

### 이징
| 타입 | 값 | 용도 |
|------|-----|------|
| ease-out | cubic-bezier(0, 0, 0.2, 1) | 등장 애니메이션 |
| ease-in-out | cubic-bezier(0.4, 0, 0.2, 1) | 양방향 전환 |
| spring | type: "spring", stiffness: 300 | Framer Motion 스프링 |

---

## 8. 버튼 스타일

### Primary Button
- 배경: primary (#FF8EBF)
- 텍스트: white
- 호버: primary-dark (#E67AAB)
- 그림자: shadow-pink

### Secondary Button
- 배경: secondary (#966988)
- 텍스트: white
- 호버: secondary-dark (#7A5570)

### Outline Button
- 배경: transparent
- 테두리: primary
- 텍스트: primary
- 호버 배경: primary-light

### Ghost Button
- 배경: transparent
- 텍스트: gray-900
- 호버 배경: gray-100

---

## 9. 카드 스타일

### Default Card
- 배경: white
- 테두리: gray-200
- 둥근 모서리: rounded-xl
- 그림자: shadow (기본)
- 호버 그림자: shadow-lg

### Accent Card
- 배경: primary-light
- 테두리: primary (옅은)
- 둥근 모서리: rounded-2xl

---

## 10. 컴포넌트 네이밍 규칙

### 파일 구조
```
ComponentName/
├── index.jsx       # 메인 컴포넌트
├── styles.css      # (필요시) 추가 스타일
└── ComponentName.test.jsx  # (필요시) 테스트
```

### Props 네이밍
- **variant**: 시각적 변형 (primary, secondary, outline, ghost)
- **size**: 크기 변형 (sm, md, lg)
- **disabled**: 비활성화 상태
- **className**: 추가 스타일 클래스
- **children**: 자식 요소

---

## 11. 반응형 브레이크포인트

```css
/* Mobile First */
sm: 640px   /* 태블릿 */
md: 768px   /* 작은 데스크탑 */
lg: 1024px  /* 데스크탑 */
xl: 1280px  /* 큰 데스크탑 */
2xl: 1536px /* 초대형 */
```

---

## 변경 이력

| 날짜 | 작업 | 사유 |
|------|------|------|
| 2026-04-15 | 신규 생성 | 스타일 가이드 초안 작성 |
| 2026-04-17 | 수정 | imjoy 브랜딩 적용, 컬러 팔레트 변경 (핑크/퍼플 계열) |

---

**프로젝트명**: imjoy
**문서 작성자**: 가이드 관리자
**최종 수정일**: 2026-04-17
**상태**: 업데이트됨
