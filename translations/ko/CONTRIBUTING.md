<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-21T23:39:51+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "ko"
}
-->
# MCS Agent Academy에 기여하기

MCS Agent Academy에 기여해 주셔서 감사합니다! 이 가이드는 개발 환경을 설정하고 문서 작성 표준을 이해하는 데 도움을 드립니다.

## 문서 작성 표준

우리는 일관되고 높은 품질의 콘텐츠를 보장하기 위해 Microsoft의 문서 작성 표준을 따릅니다. 효과적인 문서를 작성하는 방법에 대한 포괄적인 지침은 다음을 참조하세요:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Microsoft 스타일과 표준을 따르는 문서 작성에 대한 완벽한 가이드.

이 리소스는 다음을 다룹니다:

- 명확하고 간결한 콘텐츠 작성
- 적절한 마크다운 문법 사용
- 일관된 용어 사용
- 문서를 효과적으로 구조화
- 접근성 모범 사례

## 마크다운 린팅

우리는 모든 문서의 일관된 형식과 품질을 유지하기 위해 markdownlint를 사용합니다. 이를 통해 저장소 전체의 가독성과 전문성을 유지할 수 있습니다.

### markdownlint-cli2 설치

markdownlint를 로컬에서 실행하고 GitHub 워크플로와 일치시키려면 markdownlint-cli2를 설치하세요:

```powershell
npm install -g markdownlint-cli2
```

### 로컬에서 markdownlint 실행

설치 후, 저장소의 모든 마크다운 파일에서 markdownlint를 실행할 수 있습니다:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### 구성

우리의 markdownlint 구성은 저장소 루트에 있는 `.markdownlint.jsonc`에 정의되어 있습니다. 이 구성은 다음을 포함합니다:

- 표준이 정의되지 않았으므로 줄 길이 검사(MD013)를 비활성화
- 공통 템플릿 섹션에서만 형제 항목의 중복 제목 허용(MD024)
- 들여쓰기 콘텐츠로 인해 번호가 재설정되므로 전역적으로 순서 목록 접두사 유효성 검사(MD029)를 비활성화
- 텍스트에 코드 블록 사용 허용(MD046)

### markdownlint 규칙에 대한 인라인 예외 추가

전역 구성은 대부분의 일반적인 시나리오를 처리하지만, 개별 파일에서 특정 markdownlint 규칙에 대한 인라인 예외를 추가해야 할 상황이 있을 수 있습니다. 다음은 이를 수행하는 방법의 예입니다:

#### 옵션 1: 다음 줄에 대해 무시

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### 옵션 2: 특정 범위에 대해 무시

```markdown
<!-- markdownlint-disable MD029 -->
1. First item
5. Fifth item (skips numbers but won't trigger MD029)
10. Tenth item
<!-- markdownlint-enable MD029 -->

<!-- markdownlint-disable MD013 -->
Multiple very long lines that exceed the character limit
can be placed between disable and enable comments
<!-- markdownlint-enable MD013 -->
```

#### 옵션 3: 전체 파일에 대해 무시

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> 특정 규칙을 문서 전체에서 비활성화하려면 마크다운 파일의 맨 위에 배치하세요.

### 인라인 예외를 사용할 때

다음과 같은 경우 다양한 markdownlint 규칙에 대한 예외가 필요할 수 있습니다:

1. **MD029 (순서 목록 번호 매기기)**: 다른 콘텐츠 이후 번호 목록을 계속하거나, 1부터 시작하지 않는 의도적인 번호 매기기, 복잡한 중첩 콘텐츠
2. **MD013 (줄 길이)**: 코드 예제, URL 또는 줄을 나눌 수 없는 기술 콘텐츠
3. **MD033 (인라인 HTML)**: 마크다운으로 달성할 수 없는 특정 HTML 요소가 필요한 경우
4. **MD041 (첫 줄 제목)**: 제목으로 시작하지 않는 템플릿 파일 또는 문서

### 모범 사례

1. **예외를 최소화**: 문서의 명확성을 위해 필요한 경우에만 예외를 추가하세요.
2. **예외에 주석 추가**: 예외를 사용할 때, 이유를 간단히 설명하는 주석을 추가하세요.
3. **`markdownlint-disable-next-line` 선호**: 전체 섹션을 비활성화하는 것보다 더 정확합니다.
4. **커밋 전에 린터 실행**: 변경 사항을 제출하기 전에 항상 `markdownlint-cli2 "**/*.md"`를 실행하세요.

> **팁:** 제공된 `scripts/validate-markdown.ps1` PowerShell 스크립트를 사용하여 마크다운 파일에서 markdownlint와 cSpell 검사를 빠르게 실행할 수 있습니다. 이 스크립트는 일반적인 형식 및 맞춤법 검사를 자동화하여 기여가 우리의 지침을 충족하도록 돕습니다.

PowerShell을 사용하여 저장소 루트에서 실행할 수 있습니다:

```powershell
./scripts/validate-markdown.ps1
```

### 일반적인 markdownlint 오류 및 수정 방법

- **MD036**: 강조(`**굵은 텍스트**`) 대신 적절한 제목(`## 제목`) 사용
- **MD007**: 정렬되지 않은 목록 들여쓰기 수정 (4칸 대신 2칸 사용)
- **MD022**: 제목 앞뒤에 빈 줄 추가
- **MD032**: 목록 앞뒤에 빈 줄 추가
- **MD009**: 줄 끝의 공백 제거

### GitHub 워크플로

우리 저장소에는 모든 풀 리퀘스트에서 자동으로 markdownlint를 실행하는 GitHub 워크플로가 포함되어 있습니다. 워크플로는 다음을 수행합니다:

- 로컬에서 실행할 수 있는 동일한 markdownlint-cli2 도구 사용
- `SUPPORT.md`, `SECURITY.md`, `CODE_OF_CONDUCT.md` 파일 제외
- 우리의 `.markdownlint.jsonc` 구성 사용
- 경고로 문제를 보고하여 PR 병합을 허용하면서 형식 개선 기회를 강조

### VS Code markdownlint 확장

VS Code를 사용하는 경우, 실시간 마크다운 린팅을 위해 [markdownlint 확장](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)을 설치하는 것을 권장합니다:

1. **확장 설치** - VS Code 확장 마켓플레이스에서 David Anson의 "markdownlint" 검색
2. **자동 구성** - 확장은 `.markdownlint.jsonc` 구성 파일을 자동으로 사용합니다.
3. **실시간 피드백** - 입력 중 마크다운 형식 문제에 대한 물결선 표시
4. **빠른 수정** - `Ctrl+.` (Mac에서는 Cmd+.)을 사용하여 많은 문제에 대한 자동 수정 옵션 확인
5. **문제 패널** - VS Code 문제 패널에서 모든 마크다운 문제 보기

이 확장은 작성 중에 즉각적인 피드백을 제공하여 변경 사항을 커밋하기 전에 마크다운 표준을 따르기 쉽게 만듭니다.

## 맞춤법 검사

우리는 cSpell(Code Spell Checker)을 사용하여 모든 문서의 일관된 맞춤법을 유지합니다. 이를 통해 저장소 전체에서 전문적인 품질을 보장하고 오타를 줄일 수 있습니다.

### cSpell 설치

로컬에서 cSpell을 실행하려면 전역적으로 설치하세요:

```powershell
npm install -g cspell
```

### 로컬에서 cSpell 실행

설치 후, 문서에서 맞춤법을 확인하려면 cSpell을 실행할 수 있습니다:

```powershell
# Check all markdown files in the docs folder
cspell "docs/**/*.md"

# Check all markdown files in the repository
cspell "**/*.md"

# Check a specific file
cspell "docs/recruit/README.md"

# Show suggestions for misspelled words
cspell --show-suggestions "docs/**/*.md"

# Check with minimal output (cleaner display)
cspell --no-progress --no-summary "docs/**/*.md"
```

### 구성

우리의 cSpell 구성은 저장소 루트에 있는 `cspell.json`에 정의되어 있습니다. 이 구성은 다음을 포함합니다:

- Copilot, SharePoint, Dataverse 등 도메인에 특화된 사용자 정의 단어 포함
- 맞춤법 검사가 필요하지 않은 일반 파일 유형(이미지, 빌드 파일) 제외
- 맞춤법 검사 언어를 영어로 설정

### 새로운 단어 추가

cSpell이 잘못된 맞춤법으로 표시하지만 실제로는 올바른 단어(제품 이름, 기술 용어, 고유 명사 등)를 발견한 경우, `cspell.json`의 `words` 배열에 추가할 수 있습니다:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### VS Code cSpell 확장

[Code Spell Checker 확장](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)을 사용하는 VS Code에서 단어를 빠르게 구성에 추가할 수 있습니다:

1. **맞춤법 오류 보기** - 잘못된 맞춤법 단어에 물결선 표시 확인
1. **빠른 수정 사용** - 물결선이 표시된 단어를 오른쪽 클릭하거나 `Ctrl+.` (Mac에서는 Cmd+.) 사용
1. **구성에 추가** - 컨텍스트 메뉴에서 "Spelling -> Add to cSpell configuration" 선택
1. **위치 선택** - 확장은 단어를 자동으로 `cspell.json` 파일에 추가합니다.

이는 개별 단어에 대해 구성 파일을 수동으로 편집하는 것보다 훨씬 빠릅니다.

### 맞춤법 모범 사례

1. **커밋 전에 맞춤법 검사 실행**: 변경 사항을 제출하기 전에 항상 `cspell "docs/**/*.md"`를 실행하세요.
1. **오타를 무시하지 말고 수정**: 가능한 경우, 단어 목록에 추가하기보다는 실제 맞춤법 오류를 수정하세요.
1. **일관된 용어 사용**: 확립된 제품 이름과 기술 용어를 고수하세요.

## MkDocs를 사용한 로컬 문서 미리보기

우리는 Material 테마를 사용하는 MkDocs를 사용하여 문서 사이트를 생성합니다. 풀 리퀘스트를 제출하기 전에 변경 사항을 미리 보기 위해 로컬에서 실행할 수 있습니다.

📖 **더 알아보기**: [MkDocs Documentation](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### VS Code에서 Python 환경 설정

이 프로젝트의 종속성을 격리하기 위해 가상 환경을 사용하는 것을 권장합니다. VS Code는 이 과정을 간단하게 만들어주며 필요 시 Python 설치를 처리합니다.

> **GitHub Codespaces**: 이 지침은 Python이 사전 설치된 GitHub Codespaces에서도 완벽히 작동하며 VS Code 환경이 준비되어 있습니다.

📖 **더 알아보기**: [Python in VS Code](https://code.visualstudio.com/docs/languages/python) | [Python environments in VS Code](https://code.visualstudio.com/docs/python/environments)

#### 사전 준비

**Python 확장 설치**: 아직 설치하지 않았다면 Microsoft의 [Python 확장](https://marketplace.visualstudio.com/items?itemName=ms-python.python)을 VS Code 마켓플레이스에서 설치하세요.

#### VS Code에서 설정

1. **가상 환경 생성**:
   - 명령 팔레트 열기 (`Windows/Linux에서는 Ctrl+Shift+P`, Mac에서는 `Cmd+Shift+P`)
   - "Python: Create Environment" 입력 후 선택
   - "Venv"(가상 환경) 선택
   - 사용 가능한 Python 인터프리터가 없으면 VS Code가 Python 설치를 안내합니다.
   - Python 인터프리터 선택 (Python 3.8 이상)
   - VS Code가 `.venv` 폴더를 생성하고 자동으로 활성화합니다.

2. **설정 확인**:
   - 새 통합 터미널 열기 (`` Windows/Linux에서는 Ctrl+Shift+` ``, Mac에서는 `` Cmd+Shift+` `` 또는 `View > Terminal`)
   - 터미널 프롬프트에 `(.venv)`가 표시되어야 합니다.
   - 실행: `python --version`으로 확인

> **참고**: 새 터미널을 열면 Python 환경이 제대로 활성화됩니다. 새 가상 환경을 생성하는 대신 기존 Python 환경을 사용하려면 명령 팔레트에서 "Python: Select Interpreter"를 사용하여 선호하는 환경을 선택할 수 있습니다.

### VS Code에서 MkDocs 설치

VS Code에서 Python 환경을 설정한 후 MkDocs와 Material 테마를 설치하세요:

1. **VS Code의 통합 터미널 열기** (`Ctrl+`` ` 또는 `View > Terminal`)
2. **가상 환경이 활성화되었는지 확인** (프롬프트에 `(.venv)`가 표시되어야 함)
3. **패키지 설치**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### VS Code에서 MkDocs 실행

핫 리로드 기능이 있는 로컬 개발 서버를 시작하려면:

1. **VS Code의 통합 터미널에서 실행**:

   ```bash
   mkdocs serve
   ```

2. **사이트는 다음에서 확인 가능**: `http://127.0.0.1:8000/agent-academy/`

### VS Code 간단한 브라우저에서 미리보기

VS Code를 떠나지 않고 최고의 개발 환경을 위해:

1. **통합 터미널에서 MkDocs 서버 시작** (위에 설명된 대로)
2. **간단한 브라우저 열기**:
   - **방법 1**: 명령 팔레트 열기 (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - "Simple Browser: Show" 입력 후 선택
   - URL 입력: `http://127.0.0.1:8000/agent-academy/`

   - **방법 2**: 터미널 출력의 URL을 오른쪽 클릭하고 "Follow Link" 선택

   - **방법 3**: 터미널의 URL을 `Ctrl+Click` (Windows) 또는 `Cmd+Click` (Mac)으로 클릭

3. **브라우저 위치 조정**: 간단한 브라우저를 편집기 옆에 배치하여 편집과 미리보기를 나란히 확인 가능

### VS Code 작업 공간의 장점

VS Code에서 작업하면 다음과 같은 이점이 있습니다:

- **통합 터미널**: 애플리케이션 간 전환 필요 없음
- **나란히 미리보기**: 마크다운을 편집하며 동시에 변경 사항 확인  
- **링크 탐색**: 터미널 URL을 클릭하여 간단한 브라우저 열기
- **확장 통합**: Python, markdownlint, cSpell 확장이 함께 작동
- **Git 통합**: 커밋 및 풀 리퀘스트를 위한 내장 소스 제어 패널

### 핫 리로드 기능

`mkdocs serve`를 실행하면 다음을 얻을 수 있습니다:

- **자동 새로고침**: `docs/` 폴더의 모든 `.md` 파일 변경 사항이 브라우저를 자동으로 새로고침
- **구성 업데이트**: `mkdocs.yml` 변경 사항도 재빌드 트리거
- **실시간 미리보기**: 형식, 링크 및 콘텐츠 변경 사항을 즉시 확인
- **링크 유효성 검사**: MkDocs가 내부 링크 오류를 경고

### VS Code에서 유용한 MkDocs 명령

이 명령을 VS Code의 통합 터미널에서 실행하세요:

```bash
# Start development server
mkdocs serve

# Build static site (for production)
mkdocs build

# Serve with strict mode (treats warnings as errors)
mkdocs serve --strict

# Show version
mkdocs --version
```

> **팁:** 모든 종속성을 확인하며 로컬에서 문서를 미리 보려면 `scripts/serve-docs.ps1` PowerShell 스크립트를 사용하세요.

### 로컬 미리보기의 장점

- **즉각적인 피드백**: Material 테마로 마크다운이 렌더링되는 방식 확인
- **링크 유효성 검사**: 라이브로 전환되기 전에 깨진 링크 확인
- **탐색 테스트**: 콘텐츠가 올바른 섹션에 표시되는지 확인
- **모바일 미리보기**: 다양한 화면 크기에서 콘텐츠가 어떻게 보이는지 테스트
- **성능 확인**: 이미지와 자산이 제대로 로드되는지 확인

## 질문이 있으신가요?

마크다운 형식 또는 기여 지침에 대한 질문이 있다면:

1. 이 기여 가이드를 검토하세요.
1. 유사한 질문에 대한 기존 문제를 확인하세요.
1. 새로운 문제를 열어주세요.

기여를 즐기세요! 🚀

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임지지 않습니다.