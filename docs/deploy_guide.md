# 배포 가이드

## 개요

이 프로젝트는 GitHub Actions를 통해 자동 배포됩니다. `main` 브랜치에 푸시하면 자동으로 빌드 후 FTP 서버에 배포됩니다.

---

## 배포 정보

| 항목 | 값 |
|------|-----|
| GitHub 저장소 | https://github.com/imjoyj52/hansadae-project |
| 배포 도메인 | http://imjoy.kr |
| 호스팅 | 닷홈 |
| 배포 방식 | GitHub Actions + FTP |

---

## 배포 방법

### 1. 프로젝트 폴더로 이동

```bash
cd "/Users/imjoy/Documents/개인/한사대 과제"
```

### 2. 로컬에서 확인 (선택)

```bash
npm run dev
```
브라우저에서 http://localhost:5173 접속하여 확인

### 3. 변경사항 확인

```bash
git status
```

### 4. 커밋 및 푸시

**한 줄 명령어:**
```bash
git add . && git commit -m "커밋 메시지" && git push
```

**단계별 명령어:**
```bash
git add .                    # 변경된 파일 스테이징
git commit -m "커밋 메시지"   # 커밋 생성
git push                     # GitHub에 푸시
```

### 5. 배포 확인

- 푸시 후 약 30초~1분 소요
- http://imjoy.kr 에서 확인
- GitHub Actions 상태: https://github.com/imjoyj52/hansadae-project/actions

---

## 커밋 메시지 컨벤션

```
feat: 새 기능 추가
fix: 버그 수정
style: 스타일 변경
docs: 문서 수정
refactor: 코드 리팩토링
```

**예시:**
```bash
git commit -m "feat: 메인 페이지 히어로 섹션 추가"
git commit -m "fix: 네비게이션 링크 오류 수정"
git commit -m "style: 버튼 호버 효과 변경"
```

---

## 문제 해결

### 배포 실패 시

1. GitHub Actions 로그 확인
   - https://github.com/imjoyj52/hansadae-project/actions

2. 터미널에서 확인
   ```bash
   gh run list --limit 5
   gh run view [run-id] --log-failed
   ```

### 로컬 빌드 테스트

```bash
npm run build
```
오류 없이 완료되면 배포 가능

---

## 변경 이력

| 날짜 | 작업 | 사유 |
|------|------|------|
| 2026-04-23 | 신규 생성 | GitHub + FTP 자동배포 설정 완료 |
