<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-22T00:41:36+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "ko"
}
-->
# 🚨 미션 03: Microsoft 365 Copilot을 위한 선언적 에이전트 배포

## 🕵️‍♂️ 코드명: `OPERATION COPILOT EXTENSION`

> **⏱️ 작업 시간:** `~60분`

🎥 **워크스루 영상 보기**

[![선언적 에이전트 생성 비디오 썸네일](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.ko.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "YouTube에서 워크스루 보기")

## 🎯 미션 개요

Agent Maker로서의 첫 현장 임무에 오신 것을 환영합니다. Microsoft 365 Copilot과 Microsoft Teams에 직접 내장된 특수 요원인 선언적 에이전트를 설계, 장비화 및 배포하도록 선택되었습니다.

전통적인 에이전트와 달리, 선언적 에이전트는 정의된 임무(지침), 도구(프롬프트/커넥터) 및 내부 정보(SharePoint, Dataverse 등과 같은 지식 소스)에 대한 전략적 접근을 통해 작동합니다. Microsoft Copilot Studio를 사용하여 이 에이전트를 구축하는 것이 여러분의 임무입니다. 이곳은 코드 없이 에이전트의 기술과 목적이 구현되는 명령 센터입니다.

시작해봅시다.

## 🔎 목표

이 미션에서 배우게 될 내용:

1. 선언적 에이전트가 무엇인지 이해하고 Microsoft 365 Copilot을 사용자 정의 기능으로 확장하는 방법
1. Microsoft Copilot Studio와 Copilot Studio 에이전트 빌더를 비교하여 선언적 에이전트를 구축하는 방법
1. 대화형 생성 경험을 통해 자연어로 선언적 에이전트 생성
1. 에이전트의 전문 지식과 문제 해결 능력을 강화하기 위해 AI 프롬프트를 도구로 추가
1. Microsoft 365 Copilot과 Microsoft Teams에서 선언적 에이전트를 게시하고 테스트

## 🕵🏻‍♀️ Microsoft 365 Copilot을 위한 선언적 에이전트란 무엇인가요?

선언적 에이전트는 Microsoft 365 Copilot의 맞춤형 버전입니다. 특정 비즈니스 요구를 충족하기 위해 Microsoft 365 Copilot을 사용자 정의할 수 있으며, 특정 프로세스를 지원하기 위한 지침을 제공하고, 기업 지식으로 기반을 마련하며, 더 넓은 확장성을 위한 도구를 활용할 수 있습니다. 이를 통해 조직은 사용자들에게 더 큰 기능을 제공하는 맞춤형 경험을 만들 수 있습니다.

## 🤔 Microsoft Copilot Studio를 사용하여 선언적 에이전트를 구축하는 이유는 무엇인가요?

제작자로서 이미 Microsoft 365 Copilot에서 [Copilot Studio 에이전트 빌더](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez)를 탐색했을 가능성이 있으며, _왜 Microsoft Copilot Studio에서 선언적 에이전트를 구축해야 하는지_ 궁금할 수 있습니다.

Microsoft Copilot Studio는 Copilot Studio 에이전트 빌더의 한계를 넘어서는 선언적 에이전트를 위한 포괄적인 도구와 기능을 제공합니다. Copilot Studio 에이전트 빌더와 마찬가지로 Microsoft Copilot Studio에서 구축하기 위해 프로그래밍이나 소프트웨어 개발을 알 필요는 없습니다. Copilot Studio 에이전트 빌더와 Copilot Studio를 사용하여 선언적 에이전트를 구축하는 차이를 더 자세히 살펴보겠습니다.

### 기능 비교

다음 표는 Copilot Studio 에이전트 빌더와 Copilot Studio에서 선언적 에이전트를 구축할 때의 차이를 강조합니다.

| 기능                   | Microsoft 365 Copilot의 Copilot Studio 에이전트 빌더                          | Copilot Studio에서 Microsoft 365 Copilot 확장                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **지식**       | 웹, SharePoint, Microsoft Teams 채팅, Outlook 이메일, Copilot 커넥터     | Bing을 통한 웹 검색, SharePoint, Dataverse, Dynamics 365, Copilot 커넥터  |
| **도구**       | 코드 해석기, 이미지 생성기     | 1400개 이상의 Power Platform 커넥터, 사용자 정의 커넥터, 프롬프트, 컴퓨터 사용, REST API, 모델 컨텍스트 프로토콜   |
| **시작 프롬프트**         | 사용자가 빠르게 시작할 수 있도록 프롬프트 구성   | 사용자가 빠르게 시작할 수 있도록 프롬프트 구성  |
| **채널**           | 에이전트가 Microsoft 365 Copilot에만 게시됨     | 에이전트가 Microsoft 365 Copilot과 Microsoft Teams에 게시됨      |
| **공유 권한**         | 사용자는 뷰어만 가능    | 사용자는 편집자 또는 뷰어로 설정 가능   |

Microsoft Copilot Studio에서 구축된 선언적 에이전트에 대해 더 많은 기능을 제공하며, 이를 다음에서 배워보겠습니다.

!!! tip
    - Copilot Studio 에이전트 빌더에 대해 더 알아보려면 [Copilot Developer Camp: Lab MAB1 - 첫 번째 에이전트 구축](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)을 참조하세요.
    - Microsoft 365 Copilot을 위한 Copilot Studio 에이전트 빌더를 넘어 선언적 에이전트를 확장하는 프로 개발에 대해 알아보려면 [Copilot Developer Camp: Lab MAB1 - 첫 번째 에이전트 구축](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)을 참조하세요.

### Copilot Studio에서 구축된 선언적 에이전트를 사용하여 Microsoft 365 Copilot 확장

기능 비교 표에서 배운 내용을 확장해봅시다.

#### 사용자 정의

- **상세 지침**: 에이전트의 목적과 행동을 정확히 정의하기 위해 상세한 지침과 기능을 제공할 수 있습니다.
  - 이는 자연어를 사용하여 도구를 호출하는 것을 포함합니다.

- **기업 지식 접근**: 사용자 권한을 존중하는 기업 지식에 대한 접근을 가능하게 합니다.
  - SharePoint 통합
  - Dataverse 통합
  - Dynamics 365 통합
  - 조직 관리자에 의해 활성화된 Microsoft 365 Copilot 커넥터

   ![사용자 정의](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.ko.png)

#### 고급 기능

- **외부 서비스와의 통합**: 외부 서비스와 통합하는 1400개 이상의 Power Platform 커넥터를 선택하여 더 복잡하고 강력한 기능을 제공합니다.
  - 예: [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) 등
  - 또는 모델 컨텍스트 프로토콜 서버와 REST API를 직접 활용할 수도 있습니다.

- **AI 프롬프트**: 자연어와 AI 추론을 통해 텍스트, 문서, 이미지 및 데이터를 분석하고 변환하는 프롬프트를 사용합니다.
  - 채팅 모델 선택, 기본(Default), 표준(Standard), 프리미엄(Premium) 중 선택 가능
  - Azure AI Foundry 모델을 가져와 프롬프트를 기반으로 설정 가능

- **더 많은 배포 구성 옵션**: 채널을 선택하고 사용자 권한을 정의합니다.
  - Microsoft Teams에 게시하여 사용자들이 익숙한 인터페이스를 통해 빠르게 적응할 수 있도록 지원
  - 에이전트 소유자에 대한 단일 의존성을 방지하기 위해 편집 사용자 권한 공유 가능

   ![고급 기능](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.ko.png)

요약하자면, Microsoft Copilot Studio의 선언적 에이전트는 기업 지식 시스템 통합, 외부 서비스 연결 도구 또는 AI GPT 모델을 통해 비즈니스 요구에 맞게 Microsoft 365 Copilot을 사용자 정의할 수 있습니다.

## 🧪 실습 03: Microsoft Copilot Studio에서 Microsoft 365 Copilot을 위한 선언적 에이전트 구축

다음으로 "Business-to-Employee" 사용 사례를 위한 선언적 에이전트를 구축하는 방법을 배울 것입니다. 이 에이전트는 **IT 헬프데스크 에이전트** 역할을 하게 됩니다.

- [3.1 선언적 에이전트 생성](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 선언적 에이전트에 프롬프트 생성 및 추가](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 지침 업데이트 및 선언적 에이전트 테스트](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 선언적 에이전트를 Microsoft 365 Copilot 및 Microsoft Teams에 게시](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    이 실습에서는 도구로 프롬프트를 추가하는 단계를 설명합니다. 이후 레슨에서는 지식 소스 추가 및 다른 도구 추가에 대해 다룰 것입니다. 학습을 간단하게 유지 😊

### 👩🏻‍💼 Business-to-Employee (B2E) 이해하기

Business-to-Employee (B2E)는 비즈니스가 직원들에게 직접 제공하는 상호작용 및 서비스를 의미합니다. 에이전트의 맥락에서 이는 Copilot Studio의 고급 기능을 사용하여 조직 내 직원들의 업무 경험을 지원하고 향상시키는 것을 의미합니다.

### ✨ 사용 사례 시나리오

**직원으로서**

**IT 헬프데스크 에이전트로부터** 장치 문제, 네트워크 문제 해결, 프린터 설정과 같은 문제에 대해 빠르고 정확한 도움을 받고 싶습니다.

**그래서** 생산성을 유지하고 기술적 문제를 지체 없이 해결할 수 있기를 바랍니다.

시작해봅시다!

### 사전 요구 사항

- 제작자는 Copilot Studio 환경에서 생성 권한을 가지고 있어야 하며 접근할 수 있어야 합니다.

!!! note "라이선스 참고"
    이 실습에서는 도구로 프롬프트를 추가하는 단계를 설명합니다. 이후 레슨에서는 지식 소스 추가 및 다른 도구 추가에 대해 다룰 것입니다. 학습을 간단하게 유지 😊
  
    Copilot Studio에서 Microsoft 365 Copilot을 위한 선언적 에이전트를 게시하려면 Microsoft 365 Copilot 사용자 라이선스가 필요하지 않습니다. 그러나 **게시된 선언적 에이전트**를 Microsoft 365 Copilot에서 사용하는 **사용자**는 Microsoft 365 Copilot 사용자 라이선스가 필요합니다.

### 3.1 선언적 에이전트 생성

!!! warning "Copilot 질문은 세션마다 다를 수 있음"

    Copilot 대화형 생성 경험은 제공된 질문이 이전과 약간 다를 수 있어 매번 다를 수 있습니다.

1. [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/)로 이동하여 자격 증명을 사용해 로그인합니다. 이 실습에 사용하는 환경으로 전환했는지 확인하세요.

1. 메뉴에서 **Agents**를 선택하고 **Copilot for Microsoft 365**를 선택합니다.

       ![Microsoft 365용 Copilot](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.ko.png)

1. 다음으로 **+ Add** 에이전트를 선택하여 선언적 에이전트를 생성합니다.

       ![에이전트 추가](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.ko.png)

1. 대화형 생성 경험이 로드되며, 자연어로 Copilot과 채팅하여 구축하려는 선언적 에이전트를 설명하고 제공된 질문을 사용하여 안내를 받을 수 있습니다.

       다음을 포함하는 상세한 설명을 입력해봅시다,  
       - 에이전트의 작업  
       - 처리할 수 있는 문의 유형  
       - 응답 형식  
       - 에이전트의 목표  
    
       ```text
       당신은 컴퓨터 시스템, 네트워킹 및 사이버 보안 분야에서 전문성을 갖춘 고도로 숙련된 IT 전문가입니다. 기술 문제를 진단하고 해결하며, 모든 기술 수준의 사용자에게 명확하고 이해하기 쉬운 방식으로 솔루션을 설명할 수 있습니다. 또한 모범 사례에 대한 지침을 제공합니다. 간결하고 정보에 입각한 방식으로 단계별 지침을 제공하며, 적절할 경우에는 글머리 기호를 사용합니다. 사용자가 문제를 이해하고 효과적으로 해결할 수 있도록 돕는 것이 목표입니다.
       ```
    
       ![프롬프트 생성](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.ko.png)

1. 프롬프트를 제출한 후, 오른쪽 패널에 프롬프트로 정의된 에이전트의 세부 정보와 지침이 업데이트된 것을 확인할 수 있습니다. 다음으로 에이전트 이름을 확인하라는 요청을 받으며 Copilot이 이름을 제안합니다.

       `yes`를 입력하여 제안된 이름을 수락하거나 다음과 같은 다른 이름을 입력합니다,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![지침 업데이트됨](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.ko.png)

    !!! warning "알림: Copilot 질문은 세션마다 다를 수 있음"

        Copilot 대화형 생성 경험은 제공된 질문이 이전과 약간 다를 수 있어 매번 다를 수 있습니다.

1. 에이전트 이름이 오른쪽 패널에 업데이트된 것을 확인할 수 있습니다. 이제 에이전트의 지침을 세부적으로 조정하라는 요청을 받습니다. Copilot이 제안한 내용이 훌륭하므로 자체 제안을 사용하도록 요청합니다. 다음을 입력합니다,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![이름 업데이트됨](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.ko.png)

1. 다음으로 공개적으로 접근 가능한 웹사이트나 지식을 추가할지 묻는 질문을 받습니다. 이 실습에서는 선언적 에이전트에 프롬프트만 추가할 것이므로 `No`로 응답합니다. 이후 레슨의 실습에서 지식 소스를 다룰 것입니다.

      ![웹사이트나 지식 소스 추가 안 함](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.ko.png)

1. Copilot이 이제 Copilot 대화형 생성 경험을 사용하여 에이전트 구성을 완료했다고 응답합니다. 그러나 이를 더 세부적으로 조정하여 간결하고 정보에 입각하며 글머리 기호를 사용하고, 공감하는 커뮤니케이션을 사용하며, 솔루션 제공 후 피드백을 요청하도록 지침을 추가합니다.

    ```text
    Concise and Informative:
    - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
    - Summarize: Provide a brief summary of the solution at the end of the explanation.
   
    User-Friendly Communication:
    - Empathy: Show empathy and understanding of the user's frustration or confusion.
    - Encouragement: Encourage users by acknowledging their efforts and progress.
   
    Interactive and Engaging:
    - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
    ```

      ![에이전트 지침 업데이트](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.ko.png)

1. Copilot이 지침이 업데이트되었음을 확인합니다. **Create**를 클릭하여 Microsoft 365 Copilot을 위한 선언적 에이전트를 프로비저닝합니다.

      ![에이전트 생성](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.ko.png)

    !!! warning "알림: Copilot 질문은 세션마다 다를 수 있음"

        Copilot 대화형 생성 경험은 제공된 질문이 이전과 약간 다를 수 있어 매번 다를 수 있습니다.

1. 에이전트가 프로비저닝되면 Copilot 대화형 생성 경험 동안 정의된 설명과 지침이 포함된 에이전트의 세부 정보를 확인할 수 있습니다.
![에이전트 세부 정보](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.ko.png)

창을 아래로 스크롤하면 지식 추가, 웹 검색 활성화(Bing을 통해), 시작 프롬프트 및 Microsoft 365 Copilot을 위한 선언적 에이전트의 게시 세부 정보를 추가할 수 있는 기능을 확인할 수 있습니다. 시작 프롬프트는 오른쪽 테스트 창에도 표시됩니다. 사용자는 이러한 시작 프롬프트를 선택하여 에이전트와 상호작용을 시작할 수 있습니다.

![추천 프롬프트](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.ko.png)

1. 에이전트의 세부 정보 섹션에서 에이전트 아이콘을 변경할 수도 있습니다. **편집**을 선택하세요.

![세부 정보 편집](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.ko.png)

여기에서 아이콘과 배경색을 변경할 수 있습니다. **저장**을 선택한 후 다시 **저장**을 선택하여 에이전트의 세부 정보를 업데이트하세요.

![아이콘 변경](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.ko.png)

1. 이제 우리가 만든 에이전트를 간단히 테스트해 보겠습니다. 오른쪽 테스트 창에서 **시작 프롬프트** 중 하나를 선택하세요.

![시작 프롬프트 테스트](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.ko.png)

1. 에이전트가 응답합니다. 에이전트가 지침을 준수하여 정보를 소화하기 쉬운 부분으로 나누고 공감을 사용하여 응답한 것을 확인하세요.

메시지 하단으로 스크롤하면 솔루션을 제공한 후 피드백을 요청한 것도 확인할 수 있습니다.

![테스트 응답](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.ko.png)

몇 분 만에 Copilot Studio에서 Microsoft 365 Copilot을 위한 선언적 에이전트를 추가했습니다 🙌🏻

다음으로 에이전트에 도구를 추가하고 프롬프트를 생성하는 방법을 배워보겠습니다.

### 3.2 선언적 에이전트를 위한 프롬프트 생성 및 추가

1. **도구** 섹션으로 스크롤하여 **+ 도구 추가**를 선택하세요.

![도구 추가](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.ko.png)

1. 도구 모달이 나타나며 Power Platform 커넥터 목록이 표시됩니다. 프롬프트를 추가하려면 **+ 새 도구**를 선택하세요.

![새 도구](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.ko.png)

1. 다른 도구 목록이 표시됩니다 - 프롬프트, 사용자 지정 커넥터, REST API 및 모델 컨텍스트 프로토콜. 조직이 [컴퓨터 사용 요구 사항](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez)을 충족하면 이 목록에도 나타납니다. **프롬프트**를 선택하세요.

![프롬프트 선택](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.ko.png)

1. 프롬프트 이름을 입력하세요. 프롬프트 이름을 `IT Expert`로 지정해 보겠습니다.

![이름 입력](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.ko.png)

1. **모델** 옆의 **체브론 아이콘**을 선택하여 선택할 수 있는 다양한 채팅 모델을 확인하세요. 기본적으로 **Basic GPT-4.1 mini** 모델이 선택되어 있으며 Azure AI Foundry Models를 사용하여 자체 모델을 가져올 수도 있습니다. 기본 선택된 모델을 유지하겠습니다.

![모델 변경](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.ko.png)

1. 다음으로 프롬프트에 지침을 제공하겠습니다. 선택할 수 있는 방법은 3가지입니다.

   - 프롬프트가 수행해야 할 작업에 대한 설명을 기반으로 Copilot이 지침을 생성하도록 합니다.
   - 프롬프트 라이브러리에서 사전 설정 템플릿을 사용하여 프롬프트를 생성합니다.
   - 직접 지침을 수동으로 입력합니다.

1. 먼저 Copilot을 사용하여 설명을 기반으로 지침을 생성해 보겠습니다. Copilot 필드에 다음을 입력하고 제출하세요.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Copilot 시작](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.ko.png)

1. Copilot이 프롬프트를 생성하기 시작합니다.

![Copilot 프롬프트 작성](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.ko.png)

1. Copilot이 생성한 초안 지침이 나타납니다.

![Copilot 생성 초안 지침](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.ko.png)

1. 지침 하단으로 스크롤하면 Copilot이 이미 정의한 사용자 입력 매개변수를 확인할 수 있습니다. 다음 옵션을 선택할 수 있습니다.
   - 생성된 초안 지침 유지.
   - Copilot을 사용하여 초안 지침 새로고침.
   - 초안 지침 삭제.

   **휴지통 아이콘**을 선택하여 초안 지침을 삭제하고 다음으로 프롬프트 라이브러리를 시도해 보겠습니다.

![프롬프트 지침](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.ko.png)

1. **프롬프트 템플릿** 링크를 선택하세요.

![프롬프트 템플릿 선택](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.ko.png)

1. 선택할 수 있는 프롬프트 템플릿 목록이 표시됩니다. 이는 [Power Platform 프롬프트 라이브러리](https://aka.ms/power-prompts)에서 제공됩니다.

![프롬프트 라이브러리](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.ko.png)

1. `IT expert` 프롬프트를 검색하여 선택하세요.

![IT expert 프롬프트 선택](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.ko.png)

1. 프롬프트가 템플릿에서 정의된 입력 매개변수와 함께 지침으로 추가됩니다. Copilot을 사용한 대화형 생성 경험에서 에이전트에 지침을 제공할 때와 유사하게, 이 프롬프트 템플릿은
   - 작업,
   - 처리할 수 있는 문의 유형,
   - 응답 형식 및 프롬프트의 목표를 설명합니다.

![프롬프트 지침](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.ko.png)

1. 지침을 삭제하고 다음으로 수동으로 지침을 입력해 보겠습니다. [Power Platform 프롬프트 라이브러리](https://aka.ms/power-prompts)에서 [IT Expert 프롬프트](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/)를 사용합니다. 프롬프트를 복사하여 붙여넣으세요.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![프롬프트 지침](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.ko.png)

1. 다음으로 프롬프트의 사용자 입력 매개변수를 정의할 수 있습니다. 텍스트와 이미지, 테스트용 샘플 데이터를 입력할 수 있습니다. 또한 Dataverse 테이블의 지식을 기반으로 프롬프트를 설정할 수도 있습니다. 이번 연습에서는 문제 입력이라는 하나의 사용자 입력만 정의합니다. 이는 현재 프롬프트의 `[Problem]` 자리 표시자로 되어 있습니다. `/` 문자를 입력하거나 **+ 콘텐츠 추가**를 선택한 후 **텍스트**를 선택하여 입력을 구성합니다.

![텍스트 입력](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.ko.png)

1. 이제 입력 매개변수 이름과 샘플 데이터를 입력할 수 있습니다.

   이름으로 다음을 입력하세요.

    ```text
    problem input
    ```

   샘플 데이터로 다음을 입력하세요.

    ```text
    My laptop gets an error with a blue screen
    ```

   그런 다음 **닫기**를 선택하세요.

![문제 입력 구성](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.ko.png)

1. 문제 입력 매개변수가 구성된 샘플 데이터와 함께 지침에 추가됩니다. 이제 프롬프트를 테스트할 수 있습니다!

![문제 입력 추가됨](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.ko.png)

1. **테스트**를 선택하여 프롬프트를 테스트하세요.

![테스트 지침](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.ko.png)

1. 응답이 표시됩니다. 응답이 지침에 따라 제목과 글머리 기호를 제공하는 것을 확인하세요. 아래로 스크롤하여 모델 응답의 나머지를 검토하세요.

![모델 응답](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.ko.png)

1. 프롬프트를 저장하기 전에 프롬프트에 대해 구성할 수 있는 설정에 대해 알아보겠습니다. **점(...) 아이콘**을 선택하세요.

![프롬프트 설정](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.ko.png)

1. 여기에서 구성할 수 있는 세 가지 설정을 확인할 수 있습니다.

   - **온도**: 낮은 온도는 예측 가능한 결과를 제공하며, 높은 온도는 더 다양하거나 창의적인 응답을 허용합니다.
   - **레코드 검색**: 지식 소스에서 검색된 레코드 수를 지정합니다.
   - **응답에 링크 포함**: 선택하면 검색된 레코드에 대한 링크 인용이 응답에 포함됩니다.

   **X** 아이콘을 선택하여 설정에서 나옵니다.

![설정 구성](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.ko.png)

1. **저장**을 선택하여 프롬프트를 저장하세요.

![프롬프트 저장](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.ko.png)

1. 다음으로 **에이전트에 추가**를 선택하여 프롬프트를 선언적 에이전트에 추가하세요.

![프롬프트 지침](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.ko.png)

1. 프롬프트가 이제 도구 아래에 표시됩니다 🙌🏻

![프롬프트 추가됨](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.ko.png)

다음으로 프롬프트를 호출하도록 지침을 업데이트하고 선언적 에이전트를 테스트하겠습니다.

### 3.3 지침 업데이트 및 선언적 에이전트 테스트

1. **세부 정보** 섹션으로 스크롤하여 **편집**을 선택하세요. 이를 통해 필드를 편집할 수 있습니다.

![편집 선택](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.ko.png)

1. 이제 프롬프트를 호출하도록 지침을 업데이트할 수 있습니다. 지침을 삭제한 후 다음을 복사하여 붙여넣으세요.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

   마지막 문장이 사용자 질문을 문제 입력 매개변수 값으로 사용하도록 에이전트에게 지시하는 것을 확인하세요. 에이전트는 질문을 프롬프트의 문제 입력으로 사용합니다. 다음으로 **저장**을 선택하세요.

![프롬프트 호출 지침 업데이트](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.ko.png)

1. 이제 선언적 에이전트의 업데이트된 지침을 테스트할 준비가 되었습니다. 테스트 창에서 **새로고침 아이콘**을 선택하세요.

![새로고침 아이콘 선택](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.ko.png)

1. 다음 프롬프트를 입력하고 제출하세요.

   ```text
   제 노트북이 블루 스크린 오류를 겪고 있습니다. 도와주실 수 있나요?
   ```

![테스트 수행](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.ko.png)

1. 에이전트가 프롬프트를 호출하고 응답합니다.

![프롬프트 지침](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.ko.png)

이제 선언적 에이전트를 게시해 보겠습니다 😃

### 3.4 Microsoft 365 Copilot 및 Microsoft Teams에 선언적 에이전트 게시

1. **게시**를 선택하세요.

![에이전트 게시](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.ko.png)

1. 모달이 나타나며 업데이트할 수 있는 채널 및 게시 세부 정보가 표시됩니다.

   - 채널: 에이전트는 Microsoft 365 Copilot 및 Microsoft Teams에 게시됩니다.
   - 에이전트 앱 정보: 사용자가 Microsoft 365 Copilot 또는 Microsoft Teams에 에이전트를 추가할 때 표시되는 정보입니다. 필요에 따라 이 필드를 업데이트할 수 있습니다.

![에이전트 앱 세부 정보](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.ko.png)

1. 예를 들어, **짧은 설명**, **긴 설명**, **개발자 이름**을 자신의 이름으로 업데이트할 수 있습니다.

    !!! tip
        브라우저에서 모든 필드가 표시되지 않으면 화면을 축소해 보세요(예: 75%).

    **게시**를 선택하세요. Copilot Studio가 에이전트를 게시하기 시작합니다.

![에이전트 게시 중](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.ko.png)

1. 게시가 완료되면 에이전트의 [사용 가능 옵션](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez)을 확인할 수 있습니다.

   | 사용 가능 옵션    | 설명 |
   | ---------- | ---------- |
   | 링크 공유 | 공유된 사용자가 Microsoft 365 Copilot에서 에이전트를 열 수 있도록 링크를 복사하여 배포합니다. |
   | 내 팀원 및 공유된 사용자에게 표시 | 에이전트 작성에 참여할 수 있도록 다른 사용자에게 액세스를 부여하거나 보안 그룹에 액세스를 부여하여 Microsoft 365 Chat 또는 Microsoft Teams에서 에이전트를 사용할 수 있도록 합니다. |
   | 내 조직의 모든 사용자에게 표시 | 테넌트 관리자가 조직 카탈로그에 추가하여 모든 테넌트 사용자가 에이전트를 추가할 수 있도록 제출합니다. 에이전트는 Microsoft 365 Copilot 및 Microsoft Teams에서 조직에서 제작한 항목 아래에 표시됩니다. |
   | .zip 파일로 다운로드 | Microsoft Teams에서 사용자 지정 앱으로 업로드할 수 있도록 zip 파일로 다운로드합니다. |

![사용 가능 옵션](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.ko.png)

1. 에이전트를 공유하는 방법을 살펴보겠습니다. **내 팀원 및 공유된 사용자에게 표시**를 선택하세요. 창이 나타나며 이름, 이메일 또는 보안 그룹을 입력하여 에이전트를 공유할 사용자를 검색할 수 있습니다. 이 목록은 언제든지 검토하여 에이전트에 대한 액세스를 가진 사용자를 편집할 수 있습니다.

   또한 두 개의 체크박스가 있습니다:
   - _새 사용자에게 이메일 초대 보내기_ - 새 사용자는 이메일 초대를 받습니다.
   - _Power Platform으로 제작됨에 표시_ - 에이전트가 Teams 앱 스토어의 Power Platform으로 제작됨 섹션에서 사용 가능해집니다.
자세한 내용은 [Teams 및 Microsoft 365용 에이전트 연결 및 구성](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez)을 참조하세요.

**취소** 또는 **X** 아이콘을 선택하여 창을 닫습니다.

![에이전트 공유](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.ko.png)

1. **복사**를 선택하고 새 브라우저 탭에 링크를 붙여넣습니다.

![링크 복사](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.ko.png)

1. Microsoft 365 Copilot이 로드되며 에이전트 앱 세부 정보가 포함된 모달이 나타납니다. 개발자 이름, 간단한 설명 및 상세 설명이 표시되는 것을 확인하세요. 이는 이전 단계에서 업데이트된 게시 세부 정보입니다.

**추가**를 선택합니다.

![사용 가능 옵션](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.ko.png)

1. 선언적 에이전트가 다음으로 로드됩니다. 사용자가 즉각적인 도움을 받을 수 있도록 빠르게 선택할 수 있는 시작 프롬프트를 확인할 수 있습니다.

시작 프롬프트 중 하나를 선택하세요. 제 시작 프롬프트에서는 **소프트웨어 설치 도움말** 프롬프트를 선택하여 Copilot 메시지 필드에 자동으로 내용을 채웁니다. Copilot에 질문을 제출하세요.

![시작 프롬프트 선택](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.ko.png)

1. **항상 허용**을 선택하여 선언적 에이전트가 IT 전문가 프롬프트를 호출할 수 있는 권한을 부여합니다.

![항상 허용 선택](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.ko.png)

1. 에이전트가 **IT 전문가** 프롬프트를 호출하면 모델 응답이 선언적 에이전트의 메시지로 반환됩니다.

![응답](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.ko.png)

응답의 전체 세부 정보를 확인하려면 아래로 스크롤하세요.

![응답](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.ko.png)

1. 하지만 _어떻게_ 선언적 에이전트가 프롬프트를 호출했는지 알 수 있을까요? 👀 여기 팁이 있습니다!

!!! tip
    Microsoft 365 Copilot에서 [개발자 모드](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez)를 활성화하여 에이전트를 테스트하고 디버그할 수 있습니다.

다음 내용을 Copilot 메시지 필드에 입력하고 제출하세요.

    ```text
    -developer on
    ```

확인 메시지가 나타나 개발자 모드가 활성화되었음을 알려줍니다.

![개발자 모드 활성화됨](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.ko.png)

1. 다음 질문을 제출하여 프롬프트를 호출하세요.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![질문 입력](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.ko.png)

1. **IT 전문가** 프롬프트에서 다시 모델 응답이 메시지로 반환됩니다. 메시지 하단으로 스크롤하면 디버그 정보가 포함된 카드가 표시됩니다.

**에이전트 디버그 정보**를 선택하여 확장하세요.

![에이전트 디버그 정보](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.ko.png)

1. 여기서 런타임 중 발생한 에이전트 메타데이터 정보를 확인할 수 있습니다.

![에이전트 디버그 정보 확장됨](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.ko.png)

이 사용 사례에서는 _작업_ 섹션에 초점을 맞춥니다.

- **일치하는 작업**은 앱 검색 중 발견된 기능의 현재 상태를 강조합니다.
- **선택된 작업**은 앱의 의사 결정 과정에 따라 실행하기로 선택된 기능의 현재 상태를 강조합니다.

![에이전트 디버그 정보 확장됨](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.ko.png)

여기서 에이전트 오케스트레이터가 선언적 에이전트의 지시에 따라 IT 전문가 프롬프트를 호출하기로 선택했음을 확인할 수 있습니다. 이는 _실행된 작업_ 섹션에서 더 자세히 설명되며 프롬프트가 성공적으로 호출되었음을 알려줍니다.

![에이전트 디버그 정보 검토](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.ko.png)

1. 개발자 모드를 끄려면 다음 내용을 Copilot 메시지 필드에 입력하고 제출하세요.

    ```text
    -developer off
    ```

확인 메시지가 나타나 개발자 모드가 비활성화되었음을 알려줍니다. 멋지네요, 이제 Microsoft 365 Copilot에서 선언적 에이전트가 프롬프트를 호출했는지 확인하는 방법을 알게 되었습니다 🌞

![개발자 모드 비활성화됨](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.ko.png)

1. 이제 Microsoft Teams에서 에이전트를 테스트해보겠습니다. 왼쪽 메뉴를 사용하여 **앱**으로 이동한 후 _앱_ 섹션에서 **Teams**를 선택하세요.

![앱에서 Teams 선택](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.ko.png)

1. Microsoft Teams가 새 브라우저 탭에서 로드되며 Microsoft 365 Copilot 이용 약관이 표시됩니다. **동의**를 선택하세요.

![동의 선택](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.ko.png)

1. Microsoft 365 Copilot이 기본적으로 로드되며, 오른쪽 창에 사용 가능한 모든 에이전트가 나열됩니다. 여기에는 **Contoso Tech Support Pro** 선언적 에이전트도 포함됩니다.

![Microsoft Teams의 Microsoft 365 Copilot](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.ko.png)

1. 왼쪽 메뉴에서 **줄임표 아이콘 (...)**을 선택하세요. 검색 필드에서 **Contoso Tech Support Pro**를 검색하거나 에이전트를 확인한 경우 선택하세요.

마우스 오른쪽 버튼을 클릭하여 에이전트를 **고정**하여 Microsoft Teams의 왼쪽 메뉴에서 빠르게 액세스할 수 있습니다.

![에이전트 선택 및 고정](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.ko.png)

1. 에이전트가 로드됩니다. 다음으로 에이전트를 테스트해보겠습니다. 다음 프롬프트를 입력하고 제출하세요.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![에이전트 고정](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.ko.png)

1. 프롬프트에서 모델 응답이 표시됩니다.

![Teams에서의 응답](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.ko.png)

몇 분 만에 선언적 에이전트를 게시하고 Microsoft 365 Copilot 및 Microsoft Teams에서 테스트하는 방법을 배웠습니다 😊

## ✅ 미션 완료

축하합니다! 👏🏻 Copilot Studio에서 선언적 에이전트를 구축하여 프롬프트를 추가하고, 에이전트가 프롬프트를 사용하도록 지시하며, 에이전트를 테스트하고 Microsoft 365 Copilot 및 Microsoft Teams에 게시하는 방법을 배웠습니다.

이제 에이전트가 활성 상태로 내부 사용자에게 즉각적인 도움을 제공하고 문제를 해결하며 지원할 준비가 되었습니다.

**Lab 03 - Microsoft Copilot Studio에서 Microsoft 365 Copilot용 선언적 에이전트 구축**의 끝입니다. 다음 레슨으로 이동하려면 아래 링크를 선택하세요.

⏭️ [**새로운 솔루션 생성** 레슨으로 이동](../04-creating-a-solution/README.md)

다음 시간까지, 날카롭게 유지하세요. 기업 업무의 미래는 에이전트를 통해 이루어지며, 이제 이를 구축하는 방법을 알게 되었습니다.

## 📚 전술적 자료

🔗 [Microsoft 365 Copilot용 Microsoft Copilot Studio에서 선언적 에이전트 구축](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [프롬프트 추가](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [다른 사용자와 에이전트 공유](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [에이전트를 위한 프롬프트 구축](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="분석" />

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하고 있지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임을 지지 않습니다.