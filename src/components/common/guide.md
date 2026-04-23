# 공통 컴포넌트 사용 가이드

## 개요

이 문서는 프로젝트에서 사용하는 공통 컴포넌트의 사용법을 설명합니다.
**페이지 개발자는 반드시 이 가이드에 따라 공통 컴포넌트를 사용해야 합니다.**

---

## 컴포넌트 Import

```jsx
import { Layout, Navigation, Button, Card, Typography, Form } from '@/components/common'
// 또는
import Layout from '@/components/common/Layout'
import Button from '@/components/common/Button'
```

---

## 1. Layout

페이지의 기본 레이아웃 구조를 제공합니다.

### 기본 사용법

```jsx
import Layout from '@/components/common/Layout'

function MyPage() {
  return (
    <Layout bgColor="bg-white">
      <Layout.Container>
        {/* 페이지 내용 */}
      </Layout.Container>
    </Layout>
  )
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | 레이아웃 내부 콘텐츠 |
| className | string | '' | 추가 스타일 클래스 |
| animate | boolean | true | 페이지 전환 애니메이션 사용 |
| bgColor | string | 'bg-white' | 배경색 Tailwind 클래스 |

### Layout.Container Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | 컨테이너 내부 콘텐츠 |
| className | string | '' | 추가 스타일 클래스 |
| padding | boolean | true | 섹션 패딩 사용 여부 |

---

## 2. Button

다양한 스타일의 버튼을 제공합니다.

### 기본 사용법

```jsx
import Button from '@/components/common/Button'

// 기본 버튼
<Button>클릭</Button>

// 링크 버튼
<Button href="/page">페이지로 이동</Button>

// 변형
<Button variant="outline" size="lg">아웃라인 버튼</Button>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | 버튼 내용 |
| variant | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | 버튼 스타일 |
| size | 'sm' \| 'md' \| 'lg' | 'md' | 버튼 크기 |
| disabled | boolean | false | 비활성화 상태 |
| href | string | - | 링크 URL (설정 시 Link로 렌더링) |
| onClick | function | - | 클릭 핸들러 |
| className | string | '' | 추가 스타일 클래스 |

### 변형 예시

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

---

## 3. Card

콘텐츠를 담는 카드 컨테이너입니다.

### 기본 사용법

```jsx
import Card from '@/components/common/Card'

// 기본 카드
<Card>
  <Card.Header>
    <Card.Badge>태그</Card.Badge>
    <h3>제목</h3>
  </Card.Header>
  <Card.Body>
    <p>내용</p>
  </Card.Body>
  <Card.Footer>
    <Button>액션</Button>
  </Card.Footer>
</Card>

// 링크 카드
<Card href="/detail">
  클릭 가능한 카드
</Card>

// 강조 카드
<Card variant="accent">
  핑크 배경의 강조 카드
</Card>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | 카드 내용 |
| href | string | - | 링크 URL (클릭 가능한 카드) |
| hoverable | boolean | true | 호버 효과 사용 |
| padding | 'sm' \| 'md' \| 'lg' | 'md' | 패딩 크기 |
| variant | 'default' \| 'accent' | 'default' | 카드 스타일 (accent: 핑크 배경) |
| className | string | '' | 추가 스타일 클래스 |

### 서브 컴포넌트

- **Card.Header**: 카드 상단 영역
- **Card.Body**: 카드 본문 영역
- **Card.Footer**: 카드 하단 영역
- **Card.Badge**: 카드 내 배지/태그 (핑크 스타일)

---

## 4. Typography

일관된 텍스트 스타일을 제공합니다.

### 기본 사용법

```jsx
import Typography from '@/components/common/Typography'

const { Heading, Text, Label } = Typography

// 제목
<Heading level={1}>메인 제목</Heading>
<Heading level={2} align="center">서브 제목</Heading>

// 본문
<Text>일반 텍스트</Text>
<Text size="lg" color="secondary">큰 보조 텍스트</Text>

// 라벨
<Label>태그</Label>
```

### Heading Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | 텍스트 내용 |
| level | 1 \| 2 \| 3 \| 4 | 1 | 제목 레벨 |
| align | 'left' \| 'center' \| 'right' | 'left' | 텍스트 정렬 |
| className | string | '' | 추가 스타일 클래스 |

### Text Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | 텍스트 내용 |
| size | 'lg' \| 'md' \| 'sm' \| 'xs' | 'md' | 텍스트 크기 |
| color | 'primary' \| 'secondary' \| 'muted' | 'primary' | 텍스트 색상 |
| align | 'left' \| 'center' \| 'right' | 'left' | 텍스트 정렬 |
| className | string | '' | 추가 스타일 클래스 |

---

## 5. Navigation

사이트 네비게이션 바를 제공합니다.

### 기본 사용법

```jsx
import Navigation from '@/components/common/Navigation'

// 네비게이션 바
<Navigation
  logo="My Site"
  items={[
    { label: '홈', path: '/' },
    { label: '소개', path: '/about' },
  ]}
/>

// 뒤로가기 링크
<Navigation.BackLink to="/" label="메인으로" />
```

### Navigation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| logo | string | 'Logo' | 로고 텍스트 |
| items | Array | [] | 네비게이션 항목 `[{ label, path }]` |
| className | string | '' | 추가 스타일 클래스 |

### Navigation.BackLink Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| to | string | '/' | 이동할 경로 |
| label | string | '메인으로' | 링크 텍스트 |
| variant | 'default' \| 'hero' | 'default' | 스타일 변형 (hero: 히어로 배너용 흰색) |
| className | string | '' | 추가 스타일 클래스 |

### 히어로 배너에서 BackLink 사용 예시

```jsx
// 히어로 배너 위에서 사용 시
<Navigation.BackLink
  to="/"
  label="메인으로"
  variant="hero"
/>
```

---

## 6. Form

폼 관련 UI 요소들을 제공합니다.

### 기본 사용법

```jsx
import Form from '@/components/common/Form'

const { Input, Textarea, Select } = Form

// 입력 필드
<Input
  label="이름"
  placeholder="이름을 입력하세요"
/>

// 텍스트 영역
<Textarea
  label="메시지"
  placeholder="내용을 입력하세요"
  rows={6}
/>

// 선택 드롭다운
<Select
  label="카테고리"
  options={[
    { value: '1', label: '옵션 1' },
    { value: '2', label: '옵션 2' },
  ]}
/>
```

### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | 라벨 텍스트 |
| type | string | 'text' | 입력 타입 |
| placeholder | string | - | 플레이스홀더 |
| error | string | - | 에러 메시지 |
| className | string | '' | 추가 스타일 클래스 |

### Textarea Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | 라벨 텍스트 |
| placeholder | string | - | 플레이스홀더 |
| rows | number | 4 | 행 수 |
| error | string | - | 에러 메시지 |
| className | string | '' | 추가 스타일 클래스 |

### Select Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | 라벨 텍스트 |
| options | Array | [] | 옵션 `[{ value, label }]` |
| placeholder | string | '선택하세요' | 플레이스홀더 |
| error | string | - | 에러 메시지 |
| className | string | '' | 추가 스타일 클래스 |

---

## 주의사항

1. **스타일 하드코딩 금지**: 컴포넌트의 기본 스타일을 무시하고 인라인 스타일이나 직접 Tailwind 클래스를 추가하지 마세요.

2. **Props를 통한 변주**: 스타일 변경이 필요한 경우 `className` prop이나 정의된 variant/size props를 사용하세요.

3. **새 컴포넌트 필요 시**: 퍼블리셔에게 요청하세요. 직접 만들지 마세요.

4. **일관성 유지**: 모든 페이지에서 동일한 컴포넌트를 사용하여 UI 일관성을 유지하세요.

---

## 변경 이력

| 날짜 | 작업 | 사유 |
|------|------|------|
| 2026-04-15 | 신규 생성 | 컴포넌트 가이드 초안 작성 |
| 2026-04-17 | 수정 | Card.Badge 추가, Navigation.BackLink variant 옵션 추가 |

---

**프로젝트명**: imjoy
**문서 작성자**: 가이드 관리자
**최종 수정일**: 2026-04-17
**상태**: 업데이트됨
