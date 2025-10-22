<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-22T00:24:39+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "ko"
}
-->
# 🚨 미션 09: 주제에 에이전트 흐름 추가하여 자동화 구현하기

## 🕵️‍♂️ 코드명: `OPERATION AUTOMATION POWERHOUSE`

> **⏱️ 작업 시간:** `~30분`  

🎥 **워크스루 보기**

[![에이전트 흐름 비디오 썸네일](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.ko.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "YouTube에서 워크스루 보기")

## 🎯 미션 개요

이제 에이전트가 사용자와 대화하며 정보를 제공할 수 있지만, 진정한 운영 효율성을 위해서는 에이전트가 행동을 취할 수 있어야 합니다. 이번 미션에서는 대화형 에이전트를 자동화의 중심으로 변모시키기 위해 에이전트 흐름을 추가합니다.

미션이 끝나면, 적응형 카드를 통해 사용자 입력을 캡처하고, SharePoint에서 데이터를 검색하며, 이메일을 통해 관리자에게 알림을 보내고, 사용자에게 원활한 피드백을 제공하는 엔드 투 엔드 장치 요청 자동화를 생성하게 됩니다. 이 모든 과정은 에이전트가 지능형 워크플로우 자동화를 통해 조율합니다.

## 🔎 목표

이번 미션에서 배우게 될 내용:

1. 에이전트 흐름이 무엇인지 이해하고, 자동화를 위한 Power Automate 클라우드 흐름과의 차이점 학습
1. AI 액션과 자연어 작성 등 에이전트 흐름을 강력하게 만드는 주요 기능 학습
1. 에이전트 흐름 디자이너를 탐색하고 동적 데이터 처리를 위한 표현식 사용 방법 학습
1. SharePoint 데이터와 이메일 알림을 통합한 완전한 장치 요청 자동화 생성

## 🤔 에이전트 흐름이란?

에이전트 흐름은 반복적인 작업을 자동화하고 앱과 서비스를 통합하는 강력한 방법입니다. 에이전트가 작업을 자동화하거나 다른 애플리케이션 및 서비스와 연결할 수 있도록 실행하는 구조화된 단계별 워크플로우라고 생각하면 됩니다. 알림을 보내거나 기록을 업데이트하거나 이벤트에 응답하는 등의 작업을 수행하는 미니 워크플로우라고 볼 수 있습니다.

AI를 사용하여 즉석에서 결정을 내리는 자율 에이전트와 달리, 에이전트 흐름은 **결정론적 워크플로우**입니다. 즉, 매번 동일한 경로를 따르며 일관되고 신뢰할 수 있는 결과를 보장합니다.

간단히 말해:

- 에이전트가 사용자에게 _말하는 것_뿐만 아니라 _행동하는 것_을 돕습니다.
- 주제와 에이전트 전반에서 재사용 가능하며, 사용자 메시지, 이벤트 또는 다른 애플리케이션 및 서비스에 의해 트리거될 수 있습니다.

## 🙋🏽 그렇다면 Power Automate 클라우드 흐름과는 어떻게 다른가요?

에이전트 흐름과 Power Automate 클라우드 흐름은 모두 작업을 자동화하는 데 도움을 줍니다. 하지만 목적과 작동 방식이 다릅니다.

### 🤖 Copilot Studio의 에이전트 흐름

**용도:**

- Copilot Studio에서 대화형 및 자율 에이전트(에이전트 지침을 통해)를 위해 설계됨.
- 비즈니스 시스템과 상호작용하는 스마트 AI 기반 자동화에 초점.

**유용한 이유:**

- Copilot Studio에서 직접 쉽게 구축 및 관리 가능.
- 사용자와의 대화 중 발생하는 작업(예: 휴가 요청 제출)을 자동화하는 데 적합.
- Copilot Studio 내 사용량에 따라 청구되므로 별도의 Power Automate 라이센스가 필요하지 않아 기업 팀의 시간과 비용 절약 가능.

**제한 사항:**

- 공유, 복사, 공동 소유자 할당 불가.
- 에이전트 흐름은 Copilot Studio 내에서만 표시되고 사용 가능.
- 현재 에이전트의 이벤트 트리거는 Power Automate 제작자 포털에서 편집 가능.

### ☁️ Power Automate 클라우드 흐름

**용도:**

- 다양한 앱과 서비스 전반에서 일반적인 자동화를 위해 설계됨.
- 독립적으로 실행되거나 에이전트 흐름과 함께 작동 가능.

**유용한 이유:**

- 다양한 커넥터 제공.
- 에이전트 외부의 프로세스 자동화에 적합.
- 팀 간 공유, 재사용 및 관리 가능.

**요구 사항:**

- 사용하려면 Power Automate 라이센스가 필요.

### 📗 요약

| 이것을 사용하세요 | 원하는 경우 |
| :- | :- |
| 에이전트 흐름 | 에이전트 내부에서 작업을 자동화하고, AI를 사용하며, 모든 것을 Copilot Studio에 유지 |  
| Power Automate 클라우드 흐름 | 앱과 서비스 전반에서 자동화하거나 에이전트 외부에서 워크플로우를 구축 |

## 👍🏻 에이전트 흐름을 사용하는 이유

에이전트 흐름은 고정된 경로를 항상 따릅니다. 동일한 입력이 주어지면 매번 동일한 작업을 수행합니다.

이로 인해:

- **신뢰성** - 매번 동일한 방식으로 작동할 것을 신뢰할 수 있음.
- **예측 가능성** - 흐름이 실행될 때 예상되는 결과를 알 수 있음.
- **규칙 기반** - 정의된 단계를 따름.

다른 이점:

- **자동화** - 양식 제출, 알림 전송과 같은 반복 작업을 처리 가능.
- **연결성** - ServiceNow, SharePoint, Salesforce와 같은 1400개 이상의 커넥터와 연결 가능. 또는 자체 커넥터를 구축 가능.
- **긴밀한 통합** - 에이전트의 논리 일부로, 사용자 메시지나 대화 중 작업에 의해 직접 트리거됨.
- **확장성** - 여러 에이전트나 시나리오에서 흐름 재사용 가능.
- **코드 필요 없음 또는 저코드** - 자연어 또는 시각적 디자이너를 사용하여 흐름을 구축 가능.
- **올인원 플랫폼** - Copilot Studio에서 에이전트 흐름을 설계, 테스트 및 배포 가능. 플랫폼 간 전환 불필요.

## 🏄🏻‍♂️ 에이전트 흐름이 에이전트를 어떻게 강화하나요?

에이전트 흐름은 에이전트가 사용자와 "대화"하는 것을 넘어 행동하고 시스템과 상호작용할 수 있도록 확장합니다.

예를 들어, 재무 부서에서 일하고 공급업체로부터 많은 송장을 받는다고 가정해봅시다. 일반적으로 누군가가 각 송장을 읽고 중요한 세부 정보를 추출해야 합니다 - 금액, 날짜, 송장 발신자, 기록과 일치 여부 확인 후 승인할 사람에게 송장을 보내야 합니다. 이는 시간과 노력이 많이 듭니다.

Copilot Studio의 에이전트 흐름을 사용하면 이 프로세스를 자동화할 수 있습니다. 송장이 들어오면 에이전트가:

1. 지능형 문서 처리를 사용하여 주요 정보를 읽고 이해합니다.
1. 기업 데이터를 확인하여 모든 세부 사항이 올바른지 확인합니다.
1. 적합한 사람에게 승인을 요청합니다.

이로 인해 시간 절약, 실수 감소, 전체 프로세스가 훨씬 원활해집니다.

### 이렇게 생각해보세요

- **에이전트**: 스마트한 의사 결정자
- **에이전트 흐름**: 신뢰할 수 있는 실행자

### 중요한 이유

- 신뢰할 수 있는 자동화와 유연한 AI의 장점을 모두 얻을 수 있습니다.
- 비즈니스 요구가 변경됨에 따라 흐름을 쉽게 구축하고 업데이트할 수 있습니다.
- 팀 전반에 걸쳐 자동화를 확장할 수 있습니다.

## 🔌 에이전트 흐름을 강력하게 만드는 주요 기능

1. **자연어 작성**
    - 흐름이 수행해야 할 작업을 평범한 영어로 설명할 수 있습니다.
    - Copilot이 의도를 이해하고 흐름을 구축합니다.
    - 코드를 작성할 필요 없이 아이디어를 설명하세요.

1. **AI 액션**

    AI를 사용하여:

    - 문서나 이미지를 읽고 이해합니다.
    - 긴 내용을 짧고 유용한 답변으로 요약합니다.
    - 스마트한 추천이나 결정을 내립니다.

1. **생성적 액션**
    - 흐름이 실시간으로 적응할 수 있도록 합니다.
    - 에이전트가 변화하는 정보에 따라 단계를 계획하고 조정할 수 있습니다.

1. **통합 액션**
    - Outlook, Microsoft Teams, ServiceNow, SharePoint 및 기타 애플리케이션 및 서비스와 같은 도구에 흐름을 연결합니다. +1400개 이상의 내장 커넥터 또는 사용자 정의 커넥터를 통해 연결 가능합니다.
    - 이를 통해 에이전트가 팀이 이미 사용하는 앱과 함께 작업할 수 있습니다.

1. **사람의 개입**
    - 사람이 검토하거나 확인해야 하는 승인 단계를 추가합니다.
    - [고급 승인](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez)은 알림, 위임 및 다단계 승인을 지원합니다.

## ⚙️ 작동 방식

1. **트리거**

    흐름을 시작하는 이벤트 - 사용자 질문, 주제에서 흐름 호출, 예약된 시간, 또는 다른 시스템에서 발생하는 이벤트.

1. **액션**

    에이전트가 다음에 따르는 단계 - 이메일 보내기, API 호출, ServiceNow에서 티켓 업데이트.

## 🧶 에이전트 흐름 생성 방법

1. **자연어**: 에이전트가 수행해야 할 작업을 설명하면 Copilot이 이를 기반으로 흐름을 구축합니다.
1. **디자이너 캔버스**: 에이전트 흐름 디자이너에서 액션, 조건, 루프를 드래그 앤 드롭하여 흐름을 구축합니다.

## 🎨 에이전트 흐름 디자이너란?

Copilot Studio에서 에이전트가 작업을 완료하기 위해 따르는 단계별 지침을 제공하는 흐름을 구축, 편집 및 관리할 수 있는 시각적 도구입니다. 에이전트 흐름에 익숙하지 않은 사람도 쉽게 사용할 수 있도록 설계되었습니다.

### 에이전트 흐름 디자이너의 주요 기능

1. **시각적 캔버스**
    - 흐름 전체를 다이어그램처럼 볼 수 있습니다.
    - 쉽게 확대/축소, 보기 맞춤 또는 미니맵을 사용하여 큰 흐름 탐색 가능.

1. **액션 추가 및 제거**
    - _플러스 (+)_ 버튼을 클릭하여 메시지 보내기 또는 SharePoint 목록 항목 업데이트와 같은 새 액션 추가.
    - 커넥터에서 액션 검색 가능하며, 설정을 통해 구성 가능.
    - 액션 제거는 _세 개의 점 (⋮)_을 클릭하고 _삭제_를 선택.

1. **매개변수 확인**
    - 액션을 클릭하여 _매개변수_라고 불리는 설정을 보고 편집 가능.
    - 값을 수동으로 입력하거나 _표현식_을 사용하여 동적으로 만들 수 있음.

1. **버전 기록**
    - 흐름을 저장할 때마다 버전이 기록됩니다.
    - 필요 시 이전 버전을 보고 복원 가능.

1. **오류 확인**
    - _Flow Checker_가 오류를 강조 표시합니다.
    - 흐름을 게시하기 전에 모든 오류를 해결해야 합니다.

1. **게시 및 테스트**
    - 오류가 없는 흐름을 게시하여 라이브로 만듭니다.
    - _테스트_ 기능을 사용하여 흐름을 수동 또는 자동으로 실행하고 예상대로 작동하는지 확인합니다.

### 에이전트 흐름 디자이너를 사용하는 이유

- **시각적이고 직관적** - 드래그 앤 클릭으로 흐름을 구축 가능.
- **실험하기 안전** - 버전 기록으로 변경 사항 되돌리기 가능.
- **내장 테스트** - 라이브로 전환하기 전에 모든 것이 작동하는지 확인 가능.

## 🔤 _표현식_이란 무엇인가요?

표현식은 에이전트 흐름이 데이터를 처리하는 데 도움을 주는 작은 공식이나 명령입니다. 값을 계산하거나, 텍스트를 형식화하거나, 결정을 내리거나, 입력에서 특정 정보를 가져오는 데 사용됩니다.

### 표현식을 사용하는 이유

표현식은 다음을 가능하게 합니다:

- **데이터 처리 맞춤화** - 이름 결합, 날짜 형식화.
- **결정 내리기** - 값이 10보다 크면 작업 수행.
- **데이터 변환** - 텍스트를 소문자로 변경하거나 문자열의 일부 추출.
- **자동화된 논리** - 전체 코드를 작성하지 않고도 가능.

### 표현식은 어떻게 생겼나요?

표현식은 함수(function)를 사용합니다. Microsoft MVP였던 Jerry Weinstock의 설명을 빌려 함수가 무엇인지 설명하겠습니다.

!!! 인용
    함수는 표현식에서 간단하거나 복잡한 작업을 통해 데이터를 변환하는 내장된 논리입니다.

함수를 사용하면 코드를 작성하지 않고도 표현식을 구축할 수 있습니다.

제가 좋아하는 설명 방식은, 에이전트 흐름의 함수는 Excel 함수와 유사하다는 것입니다. 데이터를 원하는 출력으로 변환하기 위해 간단한 작업을 수행할 수 있습니다. Excel에서 수식을 작성할 때 테이블의 셀이나 범위에서 입력 값을 선택하고 데이터를 조작하기 위해 함수를 적용합니다. 예를 들어, `COUNT` 함수를 사용하여 숫자가 포함된 셀의 개수를 계산할 수 있습니다.

에이전트 흐름에서는 Excel의 셀 대신 트리거나 액션의 데이터 출력을 참조하여 표현식을 구축합니다. 이전 예를 계속해서, SharePoint 커넥터 액션 _Get items_에서 반환된 항목 수를 가져오기 위해 `length` 함수를 사용할 수 있습니다.

### 함수가 중요한 이유

함수를 사용하면 에이전트 흐름이:

- **더 스마트해짐** - 다양한 입력이나 조건에 반응 가능.
- **유연성 증가** - 데이터 처리 방식 맞춤화 가능.
- **효율성 향상** - 논리를 자동화하여 수동 단계를 피할 수 있음.

### 가장 유용한 함수

다음은 에이전트 흐름에서 자주 사용되는 일반적인 함수입니다. 함수의 전체 목록은 [참고 가이드](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)를 참조하세요.

#### 🔡 텍스트

- `concat()` - 두 개 이상의 텍스트를 결합.
      - 예: `concat('Hello ', firstName)` → “Hello John”

- `toLower()` / `toUpper()` - 텍스트를 소문자 또는 대문자로 변경.
      - 입력 표준화에 유용.

- `substring()` - 문자열의 일부를 추출.
      - 예: 이름의 첫 3글자 가져오기.

- `trim()` - 텍스트의 시작과 끝에서 공백 제거.

#### 🔢 수학 및 숫자

- `add()`, `sub()`, `mul()`, `div()` - 기본 수학 연산.
      - 예: `add(5, 3)` - 출력은 8

#### 📅 날짜 및 시간

- `utcNow()` - 현재 UTC 날짜와 시간 가져오기.
      - 타임스탬프에 유용.

- `addDays()`, `addHours()` - 날짜에 시간 추가.
- 예시: `addDays(utcNow(), 7)` 출력은 현재로부터 7일 후입니다.

- `formatDateTime()` - 날짜를 읽기 쉬운 문자열로 포맷합니다.
      - 예시: 월요일, 2025년 7월 7일

#### ✅ 논리적

- `if()` - 조건이 참일 경우 하나의 값을 실행하고, 거짓일 경우 다른 값을 실행합니다.
      - 예시: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - 두 값이 동일한지 확인합니다.

- `and()`, `or()`, `not()` - 여러 조건을 결합합니다.

#### 🪣 유용한 기타 함수

- `coalesce()` - 첫 번째 비어 있지 않은 값을 반환합니다.
      - 대체값/기본값으로 유용합니다.

- `guid()` - 고유 ID를 생성합니다.
      - 추적 또는 로깅에 유용합니다.

- `length()` - 문자열 또는 배열에 있는 문자나 항목의 개수를 셉니다.

## ⭐ 모범 사례

Copilot Studio에서 에이전트 흐름을 구축할 때의 모범 사례를 소개합니다.

1. **간단하게 시작하고 점진적으로 확장하기**

    - 메시지 보내기와 같은 작은 명확한 작업으로 시작하세요.
    - 자동화의 기본을 테스트한 후 더 많은 단계를 추가하세요.

1. **명확하고 설명적인 작업 이름 사용**

    - 각 단계를 명확하게 라벨링하여 자신과 팀이 작업 내용을 이해할 수 있도록 하세요.
    - 예시: SharePoint 커넥터 작업의 기본 이름인 "항목 업데이트" 대신 업데이트하는 내용을 반영하여 "장치 상태 업데이트"로 이름을 변경하세요.

1. **게시 전에 오류 확인**

    - **흐름 검사기**를 사용하여 문제를 찾아 수정하세요.
    - 오류가 있으면 흐름을 게시할 수 없으므로 발생 시 해결하세요.

1. **흐름을 철저히 테스트하기**

    - 저장하고 게시한다고 해서 예상대로 작동한다는 보장은 없습니다.
    - _테스트_ 기능을 사용하여 흐름을 수동 또는 자동으로 실행하고 결과를 확인하세요.

1. **버전 기록 사용**

    - 흐름을 자주 저장하여 필요 시 이전 버전으로 돌아갈 수 있도록 하세요.
    - _버전 기록_ 패널을 사용하여 이전 버전을 보고 복원할 수 있습니다.

1. **매개변수와 표현식을 현명하게 사용하기**

    - 작업을 구성할 때 매개변수를 사용하여 흐름을 동적으로 만드세요.
    - 값을 수동으로 입력하거나 표현식을 사용하여 계산하거나, _동적 콘텐츠_ 선택기를 사용하여 상류 작업의 값을 결합할 수 있습니다.

1. **사용하지 않는 작업 삭제**

    - 작업을 추가한 후 필요 없다고 판단되면 흐름을 깔끔하게 유지하기 위해 제거하세요.

## 🧪 실습 09 - 자동화를 위한 에이전트 흐름 추가 및 주제 기능 강화

이제 적응형 카드와 주제 및 노드의 고급 기능을 사용하여 주제를 강화하는 방법을 배워보겠습니다.

- [9.1 에이전트 흐름 생성](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 에이전트 흐름을 주제에 추가](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 여러 노드를 사용하여 요청 장치 주제를 업데이트하여 더 나은 사용자 경험 제공](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 여러 시나리오를 사용하여 에이전트 테스트](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ 사용 사례

**관리자로서**

**직원의 장치 요청을 받고 싶습니다.**

**그래서** 직원이 요청한 장치를 검토할 수 있습니다.

시작해봅시다!

### 사전 준비

1. **SharePoint 목록**

    [Lesson 00 - 과정 설정 - 3단계: 새 SharePoint 사이트 생성](../00-course-setup/README.md#step-4-create-new-sharepoint-site)에서 생성한 **Devices** SharePoint 목록을 사용합니다.

    **Devices** SharePoint 목록을 설정하지 않았다면 [Lesson 00 - 과정 설정 - 3단계: 새 SharePoint 사이트 생성](../00-course-setup/README.md#step-4-create-new-sharepoint-site)로 돌아가세요.

1. **Contoso Helpdesk Agent**

    이전에 [Lesson 06 - Copilot을 사용하여 자연어로 사용자 정의 에이전트 생성 및 데이터 기반 설정](../06-create-agent-from-conversation/README.md)에서 생성한 동일한 에이전트를 사용합니다.

### 9.1 에이전트 흐름 생성

이 실습에서는 선택한 장치의 SharePoint 항목을 검색하고 장치 세부 정보를 포함한 이메일을 관리자에게 보내는 에이전트 흐름을 생성합니다.

1. **Request device** 주제에서 **Ask with adaptive card** 노드로 스크롤하여 새 노드를 추가합니다. **도구 추가**를 선택하고 플라이아웃 창의 **기본 도구** 탭에서 **새 에이전트 흐름**을 선택합니다.

    ![새 에이전트 흐름 추가](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.ko.png)

1. 에이전트 흐름 **디자이너**가 트리거와 작업으로 로드됩니다.

    - **트리거** - 에이전트가 흐름을 호출할 때
        - Copilot Studio 에이전트에서 흐름을 트리거합니다.

    - **작업** - 에이전트에 응답
        - Copilot Studio 에이전트로 출력 값을 포함한 응답을 보냅니다.

    트리거를 선택하세요.

    ![트리거 선택](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.ko.png)

1. 다음으로 에이전트 흐름에 여러 입력을 추가합니다.

    - `DeviceSharePointId` - SharePoint 항목의 ID 값을 저장합니다. 이 ID 값은 사용자가 장치를 선택한 **Ask with adaptive card** 노드의 출력입니다.

    - `User` - 에이전트의 시스템 변수에서 가져온 사용자 이름입니다.

    - `AdditionalComments` - 사용자가 입력한 댓글로, **Ask with adaptive card** 노드의 출력입니다.

    먼저 트리거에 `DeviceSharePointId`를 입력으로 추가합니다. **+ 입력 추가**를 선택하세요.

    ![입력 추가](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.ko.png)

1. 사용자 입력 유형으로 **텍스트**를 선택합니다.

    ![텍스트 선택](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.ko.png)

1. 입력 이름에 다음을 입력하세요.

    ```text
    DeviceSharePointId
    ```

    ![DeviceSharePointId 입력](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.ko.png)

1. 이제 두 번째 입력인 `User`를 추가합니다. 동일한 단계를 반복하여 **+ 입력 추가**를 선택하고 **텍스트**를 선택합니다.

    ![입력 추가](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.ko.png)

1. 입력 이름에 다음을 입력하세요.

    ```text
    User
    ```

    ![User 입력](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.ko.png)

1. 이제 세 번째 입력인 `AdditionalComments`를 추가합니다. 동일한 단계를 반복하여 **+ 입력 추가**를 선택하고 **텍스트**를 선택합니다.

    ![입력 추가](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.ko.png)

1. 입력 이름에 다음을 입력하세요.

    ```text
    AdditionalComments
    ```

    ![AdditionalComments 입력](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.ko.png)

1. `AdditionalComments` 입력을 선택적으로 업데이트합니다. **점(...) 아이콘**을 선택하고 **필드를 선택적으로 설정**을 선택합니다.

    ![필드를 선택적으로 설정](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.ko.png)

1. 잘하셨습니다! 트리거가 이제 구성되었습니다. 계속 진행하세요. 트리거 아래의 **플러스 + 아이콘**을 선택하여 새 작업을 삽입합니다.

    ![작업 추가](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.ko.png)

1. **작업 창**이 나타나며 Microsoft 및 타사 서비스의 1400개 이상의 내장 커넥터에서 작업을 볼 수 있습니다. **검색 필드**에 다음을 입력하세요.

    ```text
    Get item
    ```

    검색 결과에 작업 목록이 표시됩니다. **SharePoint 커넥터**에서 **항목 가져오기** 작업을 선택하세요.

    ![항목 가져오기 작업](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.ko.png)

1. 이제 **항목 가져오기** 작업을 구성할 수 있습니다.

    **항목 가져오기** 작업에서 **점(...) 아이콘**을 선택하세요.

    ![점 선택](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.ko.png)

1. **이름 바꾸기**를 선택하세요.

    ![이름 바꾸기 선택](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.ko.png)

1. 작업 이름을 다음으로 변경하세요.

    ```text
    Get Device
    ```

    ![작업 이름 바꾸기](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.ko.png)

1. **사이트 주소** 필드에서 [Lesson 00 - 과정 설정 - 3단계: 새 SharePoint 사이트 생성](../00-course-setup/README.md#step-4-create-new-sharepoint-site)에서 생성한 Contoso IT SharePoint 사이트의 **사이트 주소**를 선택하세요.

    **목록 이름** 필드에서 **Devices** SharePoint 목록을 선택하세요.

    ![입력 매개변수](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.ko.png)

1. **Id** 필드에서 오른쪽의 **번개 아이콘** 또는 **fx 아이콘**을 선택하세요.

    ![동적 콘텐츠 선택기](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.ko.png)

1. 플라이아웃 창의 **동적 콘텐츠** 탭에서 다음을 입력하세요.

    ```text
    sharepoint
    ```

    검색 결과에 일치하는 입력 매개변수가 표시됩니다. 트리거에서 **DeviceSharePointId** 매개변수를 선택하세요.

    그런 다음 **추가**를 선택하여 동적 콘텐츠 입력을 작업의 **Id** 매개변수에 추가하세요.

    ![DeviceSharePointId 입력 선택](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.ko.png)

1. 트리거에서 가져온 동적 콘텐츠 입력이 작업의 **Id** 매개변수에 참조되었습니다. 이제 고급 매개변수 중 하나를 업데이트하겠습니다. **모두 보기**를 선택하여 고급 매개변수를 확인하세요.

    ![고급 매개변수 보기](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.ko.png)

1. **뷰로 열 제한** 매개변수가 표시되며 기본적으로 **모든 열 사용(제한 없음)**으로 설정됩니다. 이 값을 업데이트하여 작업 응답에서 반환되는 열을 제한합니다. **뷰로 열 제한** 매개변수를 선택하여 뷰 목록을 확인하세요.

    ![매개변수 선택](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.ko.png)

1. **모든 항목** 뷰를 선택하세요.

    ![모든 항목 뷰 선택](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.ko.png)

1. _Get Device_ 작업 아래의 **플러스 + 아이콘**을 선택하여 새 작업을 삽입합니다.

    ![새 작업 추가](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.ko.png)

1. 검색 필드에 다음을 입력하세요.

    ```text
    send an email
    ```

    검색 결과에 작업 목록이 표시됩니다. **Office 365 Outlook 커넥터**에서 **이메일 보내기(V2)** 작업을 선택하세요.

    ![이메일 보내기 작업](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.ko.png)

1. 다음으로 커넥터 작업에 대한 연결을 생성해야 합니다. **로그인**을 선택하세요.

    ![연결 생성](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.ko.png)

1. 로그인한 사용자 계정을 선택하세요.

    ![사용자 계정 선택](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.ko.png)

1. **액세스 허용**을 선택하세요. 이제 연결이 생성되었습니다.

    ![액세스 허용 선택](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.ko.png)

1. 작업 이름을 다음으로 변경하세요.

    ```text
    Send an email to manager
    ```

    이제 작업의 입력 매개변수를 정의하겠습니다.

    **To** 입력 매개변수에는 자신을 선택하세요. 일반적으로 이는 관리자이거나 Entra ID 프로필을 기반으로 관리자를 가져오는 다른 작업을 사용할 수 있지만, 이 강의의 목적을 위해 자신을 선택하세요.

    **Subject** 입력 매개변수에는 다음을 입력하세요.

    ```text
    Request type: new device
    ```

    **Body** 입력 매개변수에는 다음을 입력하세요.

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![작업 이름 바꾸기 및 입력 구성](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.ko.png)

1. 다음으로 **Body** 입력 매개변수에 트리거 또는 **항목 가져오기** 작업의 동적 콘텐츠 입력을 참조하여 업데이트합니다. 두 번째 줄 뒤에 공백을 입력한 후 트리거 입력인 **User**의 이름을 삽입합니다.

    오른쪽의 **번개 아이콘** 또는 **fx 아이콘**을 선택하세요.

    ![User 입력을 동적 콘텐츠로 추가](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.ko.png)

1. 플라이아웃 창의 **동적 콘텐츠** 탭에서 트리거의 **User** 입력을 선택하세요.

    **추가**를 선택하여 동적 콘텐츠 **User** 입력을 작업의 **Body** 매개변수에 추가하세요.

    ![User 입력 선택](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.ko.png)
1. 트리거에서 입력된 동적 콘텐츠는 이제 작업의 **Body** 매개변수에서 참조됩니다. 이메일 메시지 본문의 나머지 줄에서도 동일한 작업을 반복하겠습니다.

    ![사용자 입력 추가됨](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.ko.png)

1. `Manufacturer:` 옆 공간을 클릭합니다. 오른쪽에 있는 **번개 아이콘** 또는 **fx 아이콘**을 선택합니다.

    플라이아웃 창의 **동적 콘텐츠** 탭에서 검색 필드에 다음을 입력합니다.

    ```text
    manufacturer
    ```

    트리거에서 **Manufacturer value** 입력을 선택하고 **추가**를 선택합니다.

    ![Manufacturer value 입력을 동적 콘텐츠로 추가](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.ko.png)

1. `Model:` 옆 공간을 클릭합니다. 오른쪽에 있는 **번개 아이콘** 또는 **fx 아이콘**을 선택합니다.

    플라이아웃 창의 **동적 콘텐츠** 탭에서 검색 필드에 다음을 입력합니다.

    ```text
    model
    ```

    **Get item** 작업에서 **Model** 입력을 선택하고 **추가**를 선택합니다.

    ![Model 입력을 동적 콘텐츠로 추가](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.ko.png)

1. `Link to item in SharePoint` 텍스트를 이메일 메시지 본문에서 하이퍼링크로 업데이트하겠습니다. 줄의 시작 부분을 클릭하고 오른쪽에 있는 **번개 아이콘** 또는 **fx 아이콘**을 선택합니다.

    ![동적 콘텐츠 추가](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.ko.png)

1. HTML 앵커 태그 뒤를 클릭하고 오른쪽에 있는 **번개 아이콘** 또는 **fx 아이콘**을 선택합니다.

    플라이아웃 창의 **동적 콘텐츠** 탭에서 검색 필드에 다음을 입력합니다.

    ```text
    link to item
    ```

    **Get item** 작업에서 **Link to item** 입력을 선택하고 **추가**를 선택합니다.

    ![Link to item을 동적 콘텐츠로 추가](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.ko.png)

1. **&lt;/&gt;** 아이콘을 선택하여 HTML 편집기로 전환해야 합니다.

    ![사용자 입력 추가](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.ko.png)

1. HTML 편집기가 활성화되었습니다. `Link to item in SharePoint` 텍스트 앞을 클릭하고 하이퍼링크를 생성하기 위해 HTML 앵커 태그를 추가합니다. 다음을 복사하여 붙여넣으세요.

    ```text
    <a href="
    ```

    ![HTML 태그](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.ko.png)

1. **Link to item**의 동적 콘텐츠 입력이 이제 **Body** 매개변수에서 참조됩니다. **Link to item** 입력 뒤를 클릭하고 다음을 복사하여 붙여넣으세요.

    ```text
    ">
    ```

    ![HTML 태그](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.ko.png)

1. `Link to item in SharePoint` 텍스트 뒤를 클릭하고 HTML 앵커 태그를 닫습니다. 다음을 복사하여 붙여넣으세요.

    ```text
    </a>
    ```

    ![HTML 태그](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.ko.png)

1. **&lt;/&gt;** 아이콘을 선택하여 코드 보기를 전환합니다.

    ![코드 보기 비활성화](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.ko.png)

1. 그런 다음 **&lt;/&gt;** 아이콘을 다시 선택하여 코드 보기를 다시 전환합니다.

    ![코드 보기로 다시 전환](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.ko.png)

1. `&lt;br&gt;`와 같은 여러 추가 문자가 있는 것을 확인할 수 있습니다. 이러한 문자를 삭제하세요.

    ![문자 삭제](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.ko.png)

1. 이제 이메일 메시지 본문에 하이퍼링크 추가 작업이 완료되었습니다 😎 **&lt;/&gt;** 아이콘을 선택하여 코드 보기를 전환합니다.

    ![HTML 태그 정리 완료](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.ko.png)

1. 콜론 문자 앞의 `Additional comments from` 텍스트 뒤를 클릭하고 오른쪽에 있는 **번개 아이콘** 또는 **fx 아이콘**을 선택합니다.

    ![사용자 매개변수 추가](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.ko.png)

1. 플라이아웃 창의 **동적 콘텐츠** 탭에서 검색 필드에 다음을 입력합니다.

    ```text
    user
    ```

    트리거에서 **User** 매개변수를 선택하고 **추가**를 선택합니다.

    ![사용자 매개변수를 동적 콘텐츠로 추가](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.ko.png)

1. 이제 **Ask an adaptive card** 노드에서 사용자가 제공한 **Additional Comments** 값이 표시되도록 하거나 사용자가 댓글을 제공하지 않은 경우 "None"을 표시하는 표현식을 삽입하겠습니다.

    콜론 뒤를 클릭하고 오른쪽에 있는 **번개 아이콘** 또는 **fx 아이콘**을 선택합니다.

    ![표현식 추가](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.ko.png)

1. 플라이아웃 창의 **Function** 탭에서 위의 표현식 필드에 다음을 입력합니다.

    ```text
    if(empty())
    ```

    이 표현식은 if-else 문을 위한 `if` 함수를 사용합니다.

    다음으로 사용된 함수는 `empty`로, 문자열 매개변수에 값이 존재하는지 여부를 확인합니다. 참조할 문자열 매개변수는 트리거에서 가져온 `AdditionalComments` 입력 매개변수 값입니다.

    ![If empty](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.ko.png)

1. 다음으로, `empty` 함수 뒤의 괄호 안을 클릭합니다. 트리거에서 `AdditionalComments` 입력 매개변수를 삽입하겠습니다.

    **동적 콘텐츠** 탭을 선택합니다. 검색 필드에 다음을 입력합니다.

    ```text
    Additional
    ```

    플라이아웃 창을 아래로 스크롤하여 트리거에서 **AdditionalComments** 입력을 선택합니다. 매개변수가 이제 표현식의 문자열 매개변수로 추가됩니다.

    ![AdditionalComments를 동적 콘텐츠로 추가](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.ko.png)

1. 다음으로 **_true_** 논리를 정의하겠습니다. `AdditionalComments` 문자열 매개변수가 비어 있는 경우, `None`이라는 문자열(텍스트)을 표시하도록 설정합니다.

    문자열 매개변수를 감싸는 괄호 뒤에 다음을 입력합니다.

    ```text
    , 'None',
    ```

    ![True 논리](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.ko.png)

1. 마지막으로 **_false_** 논리를 정의하겠습니다. `AdditionalComments` 문자열 매개변수가 비어 있지 않은 경우, 트리거에서 가져온 **AdditionalComments** 입력 매개변수 값을 표시하도록 설정합니다.

    > 이 값은 **Request device** 주제의 **Ask with adaptive card** 노드에서 제공된 Additional Comments 필드의 값입니다.

    **_true_** 논리 뒤의 쉼표 뒤에 **동적 콘텐츠** 탭을 선택합니다. 검색 필드에 다음을 입력합니다.

    ```text
    Additional
    ```

    플라이아웃 창을 아래로 스크롤하여 트리거에서 **AdditionalComments** 입력을 선택합니다. 매개변수가 이제 표현식의 문자열 매개변수로 추가됩니다.

    이제 **Body** 매개변수에 추가하려면 **추가**를 선택합니다.

    ![False 논리](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.ko.png)

1. 훌륭합니다, 표현식이 완료되었습니다! 표현식이 이제 **Body** 매개변수에 추가되었습니다. 마지막 줄을 기울임꼴로 포맷하세요.

    ![기울임꼴](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.ko.png)

1. 이제 **Respond to the agent** 작업을 업데이트하여 **Get item** 작업에서 가져온 **Model value** 매개변수 값을 에이전트에게 다시 보내겠습니다.

    마우스 왼쪽 키를 누른 상태에서 디자이너 내에서 위로 이동하여 **Respond to the agent** 작업을 확인합니다.

    **Respond to the agent** 작업을 선택하고 출력 유형으로 **Text**를 선택합니다.

    ![Text 출력 선택](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.ko.png)

1. 출력 이름으로 다음을 입력합니다.

    ```text
    ModelValue
    ```

    ![ModelValue 출력](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.ko.png)

1. 값 필드를 선택하고 오른쪽에 있는 **번개 아이콘** 또는 **fx 아이콘**을 선택합니다.

    ![표현식 삽입](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.ko.png)

1. 플라이아웃 창의 **동적 콘텐츠** 탭에서 검색 필드에 다음을 입력합니다.

    ```text
    model
    ```

    **Get item** 작업에서 **Model** 매개변수를 선택하고 **추가**를 선택합니다.

    ![Model 매개변수를 동적 콘텐츠로 추가](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.ko.png)

1. **Model** 매개변수가 이제 텍스트 출력의 값입니다. **Save draft**를 선택하여 에이전트 흐름을 저장합니다.

    에이전트 흐름이 완료되었습니다 👏🏻

    ![초안 저장 선택](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.ko.png)

1. 게시하기 전에 에이전트 흐름을 한 번 더 업데이트하겠습니다. **Overview** 탭을 선택하고 **Edit**을 선택합니다.

    ![Edit 선택](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.ko.png)

1. **Flow name**에 다음을 복사하여 붙여넣습니다.

    ```text
    Send device request email
    ```

    **Description**에서는 **새로 고침 아이콘**을 선택하여 트리거와 에이전트 흐름의 작업을 기반으로 AI가 자동으로 설명을 생성하도록 합니다.

    **Save**를 선택하여 에이전트 흐름의 업데이트된 이름과 설명을 저장합니다.

    ![이름 변경, 설명 추가 및 세부 정보 저장](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.ko.png)

1. **Designer** 탭을 선택하고 **Publish**를 선택하여 에이전트 흐름을 게시합니다. 이제 **Request device** 주제의 노드로 추가할 수 있습니다.

    ![게시](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.ko.png)

1. 에이전트 흐름이 게시되었음을 확인하는 메시지가 곧 나타납니다.

    ![확인 메시지](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.ko.png)

### 9.2 에이전트 흐름을 주제에 추가하기

이제 에이전트 흐름을 **Request device** 주제에 추가하겠습니다.

1. 왼쪽 메뉴에서 **Agents**를 선택하고 **Contoso Helpdesk Agent**를 선택합니다.

    ![Agents 선택](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.ko.png)

1. **Topics** 탭을 선택합니다.

    ![Topics 탭 선택](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.ko.png)

1. **Request device** 주제를 선택합니다.

    ![Request device 주제 선택](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.ko.png)

1. **Ask with adaptive card** 노드로 스크롤하여 새 노드를 추가합니다.

    **Add a tool**을 선택하고 플라이아웃 창의 **Basic tools** 탭에서 최근에 생성하고 게시한 **Send device request email** 에이전트 흐름을 선택합니다.

    ![에이전트 흐름 선택](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.ko.png)

1. 에이전트 흐름의 트리거 입력에 대해 **Ask with adaptive card** 노드에서 정의된 변수 출력을 선택해야 합니다.

    **DeviceSharePointId** 입력의 **ellipsis (...) 아이콘**을 선택합니다.

    ![변수 선택](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.ko.png)

1. **Ask with adaptive card** 노드에서 정의된 출력 중 하나인 **deviceSelectionId** 변수를 선택합니다.

    ![deviceSelectionId 변수 선택](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.ko.png)

1. 다음으로 **User** 입력의 **ellipsis (...) 아이콘**을 선택합니다.

    ![변수 선택](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.ko.png)

1. 플라이아웃 변수 창에서 **System** 탭을 선택하고 **User.DisplayName**을 선택합니다. 이 변수는 에이전트와 상호작용하는 내부 사용자의 표시 이름을 저장합니다.

    ![User.DisplayName 시스템 변수 선택](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.ko.png)

1. 다음으로 **Advanced inputs**를 확장하여 **AdditionalComments** 입력을 확인하려면 **greater than 아이콘**을 선택합니다.

    ![고급 입력 확장](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.ko.png)

1. AdditionalComments 입력의 **ellipsis (...) 아이콘**을 선택합니다.

    ![변수 선택](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.ko.png)

1. 플라이아웃 변수 창에서 **Formula** 탭과 확장 아이콘을 선택합니다. Power Fx 표현식을 사용할 것입니다.

    ![Formula 탭](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.ko.png)

1. 에이전트 흐름에서 _if_ 함수를 사용하여 조건부 확인을 수행하는 표현식과 유사하지만 이번에는
    - Power Fx 함수를 사용하고,
    - 값이 없거나 **Ask with adaptive card** 노드에서 `commentsId` 출력 변수 값을 삽입합니다.

    Power Fx 필드에 다음 함수를 입력합니다.

    ```text
    If(IsBlank())
    ```

이 표현은 if-else 문을 위해 `If` 함수를 사용합니다.

다음으로 사용되는 함수는 `IsBlank`로, 문자열 매개변수에 값이 존재하는지 또는 존재하지 않는지를 확인합니다. 참조할 문자열 매개변수는 **적응형 카드로 묻기** 노드의 `commentsId` 출력 변수입니다.

![If 및 IsBlank 함수](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.ko.png)

1. 다음으로, `IsBlank` 함수 뒤의 **괄호 안쪽**을 클릭합니다. 이제 **적응형 카드로 묻기** 노드에서 `commentsId` 출력 변수를 삽입할 것입니다.

   괄호 안에 다음을 입력하세요.

    ```text
    Topic.commentsId
    ```

   그리고 괄호 뒤에 쉼표를 추가하세요.

   ![commentsId 출력 참조](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.ko.png)

1. 이제 논리를 정의하겠습니다.

   - **_true_**일 때 - `Topic.commentsId` 문자열 매개변수가 비어 있다면, 값을 삽입하지 않습니다.
   - **_false_**일 때 - `Topic.commentsId` 문자열 매개변수가 비어 있지 않다면, commentsId 변수의 값을 삽입합니다.

   문자열 매개변수를 감싸는 괄호 뒤에 다음을 입력하세요.

    ```text
    "", Topic.commentsId)
    ```

   Power Fx 표현식은 다음과 같아야 합니다.

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   잘하셨습니다, 표현식이 완성되었습니다! 🙌🏻 이제 **삽입**을 선택하여 에이전트 흐름의 입력 매개변수를 Power Fx 표현식으로 설정하세요.

   ![Power Fx 표현식](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.ko.png)

1. **주제를 저장하세요.**

### 9.3 사용자 경험을 개선하기 위해 여러 노드를 추가하여 요청 장치 주제 업데이트

이제 두 개의 노드를 추가하겠습니다:

- **메시지 보내기** - 선택한 장치를 참조하고 요청이 제출되었음을 확인하는 메시지 역할을 합니다.
- **주제 관리** - 대화를 종료하기 위해 **대화 종료** 노드로 리디렉션합니다.

시작해봅시다!

1. 에이전트 흐름 노드 아래의 **플러스 + 아이콘**을 선택하고 **메시지 보내기** 노드를 선택하세요.

   ![메시지 보내기 노드 추가](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.ko.png)

1. 메시지 필드에 아래 내용을 입력하세요.

    ```text
    Thanks
    ```

   그런 다음 **변수 삽입**을 선택하여 사용자의 이름을 참조합니다.

   ![변수 삽입](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.ko.png)

1. **시스템** 탭을 선택하고 검색 필드에 `User`를 입력하세요. **User.DisplayName** 변수를 선택합니다.

   ![시스템 변수 선택](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.ko.png)

1. 메시지 필드에 아래 내용을 입력하세요.

    ```text
    . Your selected device,
    ```

   그런 다음 **변수 삽입**을 선택하고 이번에는 **사용자 정의** 탭에서 **ModelValue** 변수를 선택합니다.

   그런 다음 메시지를 완성하기 위해 아래 내용을 입력하세요.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   메시지는 다음과 같아야 합니다.

   ![메시지 보내기](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.ko.png)

1. 마지막으로, **메시지 보내기** 노드 아래의 **플러스 + 아이콘**을 선택하고 **주제 관리**를 선택한 후 **다른 주제로 이동**을 선택하고 **대화 종료**를 선택하세요.

   ![주제 관리](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.ko.png)

1. **주제를 저장하세요.**

   ![저장](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.ko.png)

### 9.4 여러 시나리오를 사용하여 에이전트 테스트

잘하셨습니다!!! 😁 이제 에이전트를 테스트할 수 있습니다.

#### 9.4.1 장치를 요청하고 적응형 카드에 댓글 입력

1. **테스트 창을 새로고침**하고 **활동 맵** 아이콘을 선택한 후 에이전트에게 메시지로 아래 내용을 입력하세요.

    ```text
    I need a laptop
    ```

   ![에이전트 테스트](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.ko.png)

1. 에이전트가 **사용 가능한 장치**를 트리거하고 사용 가능한 장치 목록으로 응답합니다. 장치를 요청할지 여부에 대한 질문에 아래와 같이 답변합니다.

    ```text
    Yes
    ```

   ![예](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.ko.png)

1. 에이전트가 에이전트 지침에 따라 **장치 요청**을 호출했으며 적응형 카드가 이제 에이전트 메시지에 표시되는 것을 확인하세요.

   **Surface Laptop 15** 장치를 선택하고 아래 내용을 댓글로 추가하세요.

    ```text
    I need 16GB of RAM please
    ```

   ![장치 선택 및 댓글 입력](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.ko.png)

1. 아래로 스크롤하여 **요청 제출** 버튼을 확인한 후 이를 선택하여 적응형 카드를 에이전트에게 제출하세요.

   ![요청 제출](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.ko.png)

1. 두 커넥터 작업의 연결 인증을 위해 에이전트가 자격 증명을 사용할 수 있도록 **허용**을 선택하세요.

   ![허용](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.ko.png)

1. 에이전트가 선택한 모델을 포함한 확인 메시지를 표시한 후 **대화 종료** 주제로 리디렉션합니다. 멋지네요!

   ![요청 제출됨](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.ko.png)

1. **예**를 선택하여 **대화 종료** 주제의 나머지를 확인하세요.

   ![예 선택](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.ko.png)

1. 다음으로, 평가 카드에서 별점을 선택하여 경험을 평가하세요.

   에이전트는 **대화 종료** 주제의 마지막 **질문** 노드로 진행합니다. **아니요**를 선택하세요.

   ![대화 종료 주제](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.ko.png)

1. 주제가 완료되면 테스트 창에 최종 메시지가 표시됩니다.

   ![대화 종료 주제](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.ko.png)

1. 이메일 계정의 받은 편지함을 확인하여 에이전트 흐름이 관리자에게 보낸 이메일을 검토하세요. 선택한 장치의 세부 정보와 적응형 카드에 입력된 메모를 확인할 수 있습니다.

   ![이메일 수신](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.ko.png)

1. 하이퍼링크를 클릭하면 브라우저가 장치의 SharePoint 항목을 로드합니다. 멋지네요!

   ![이메일의 링크 클릭](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.ko.png)

#### 9.4.2 장치를 요청하고 적응형 카드에 댓글을 입력하지 않음

이제 댓글을 입력하지 않는 시나리오를 테스트해봅시다.

1. 다음 단계를 반복하세요:

   - **테스트 창 새로고침** 및 **활동 맵** 아이콘 선택
   - 메시지 입력, `I need a laptop`
   - 장치를 요청할지 여부에 대한 질문에 `Yes`로 응답

   ![장치 요청](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.ko.png)

1. 이번에는 **Surface Laptop 13** 장치를 선택하고 댓글을 입력하지 마세요.

   ![장치 선택](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.ko.png)

1. **요청 제출** 버튼을 선택하여 요청을 제출하세요.

   ![요청 제출](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.ko.png)

1. 이번에는 받은 편지함에 수신된 이메일이 댓글로 **없음**을 표시합니다.

   ![이메일 수신](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.ko.png)

#### 9.4.3 장치를 요청하지 않음

마지막 시나리오를 테스트해봅시다. 장치를 요청하지 않고, 에이전트 지침에 따라 **안녕** 주제가 호출되어야 합니다.

1. 다음 단계를 반복하세요:

   - **테스트 창 새로고침** 및 **활동 맵** 아이콘 선택
   - 메시지 입력, `I need a laptop`
   - 이번에는 장치를 요청할지 여부에 대한 질문에 `No`로 응답

   ![에이전트 테스트](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.ko.png)

1. 에이전트가 **안녕** 주제를 호출하고 주제에 정의된 질문을 묻습니다.

   ![안녕 주제 호출됨](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.ko.png)

## ✅ 미션 완료

축하합니다! 👏🏻 에이전트 흐름을 구축하고 기존 **장치 요청** 주제에 추가하는 방법과 에이전트를 다른 주제로 리디렉션하는 방법을 배웠습니다.

이것으로 **Lab 09 - 자동화를 위한 에이전트 흐름 추가 및 주제 기능 강화**가 끝났습니다. 아래 링크를 선택하여 다음 레슨으로 이동하세요. 이번 레슨의 실습에서 사용 사례를 확장할 것입니다.

⏭️ [**이벤트 트리거 추가 - 자율 에이전트 기능 활성화** 레슨으로 이동](../10-add-event-triggers/README.md)

## 📚 실용적인 자료

🔗 [에이전트 흐름 소개: AI 중심 워크플로우로 자동화 변혁](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [에이전트 흐름 개요](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [에이전트 흐름을 에이전트와 함께 사용하기](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [참고 가이드의 함수 목록](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Copilot Studio의 에이전트 흐름](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="분석" />

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 자료로 간주해야 합니다. 중요한 정보에 대해서는 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.