<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-22T01:00:29+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "ko"
}
-->
# 🚨 미션 12: 라이선스 이해하기

## 🕵️‍♂️ 코드명: `OPERATION KNOW WHAT YOU OWE`

> **⏱️ 작전 시간:** `~15분`

## 🎯 미션 개요

환영합니다, 신입 요원. 현장에 요원을 배치하기 전에 **사용량 측정, 라이선스 및 청구 방식**을 이해해야 합니다. 이번 미션에서는 메시지 기반 청구 모델을 설명하고, Microsoft 365 Copilot 라이선스에 포함된 내용을 소개하며, 추정 도구를 사용하여 계획을 세우는 방법을 알려드립니다.

---

## 🎯 목표: 메시지 기반 모델 이해하기

Copilot Studio는 사용자나 기능별로 요금을 부과하지 않습니다. 대신 **요원이 소비하는 메시지 수**를 기준으로 청구됩니다. "메시지"는 요원과 사용자(또는 시스템) 간의 상호작용을 의미합니다.

- 💬 사용자가 요원과 상호작용할 때마다 최소 **1개의 메시지**가 계산됩니다.
- 🔄 복잡한 상호작용(예: 그라운딩, 생성형 AI, 플로우)은 **여러 메시지**를 소비합니다.
- 💼 메시지 비용은 **선불 패키지** 또는 **사용량 기반 결제(PAYGO)** 방식으로 지불합니다.

---

## 라이선스 옵션

### 1. **Copilot Studio 메시지 패키지**

- 선불 옵션: **월 25,000 메시지, $200**
- 예측 가능한 사용량에 적합 — 용량은 테넌트 전체에서 공유됨

### 2. **사용량 기반 결제(PAYGO)**

- 후불 옵션: **메시지당 $0.01**
- 선결제 없이 사용량을 월말에 Azure를 통해 청구

---

## M365 Copilot 라이선스를 보유한 경우?

팀에 **Microsoft 365 Copilot 라이선스**가 있다면, 요원이 **주요 시나리오에서 추가 비용 없이 작동**할 수 있습니다:

- Teams 및 Outlook과 같은 앱에서 인증된 M365 Copilot 사용자의 경우, 기본 답변, 생성형 응답, 그래프 기반 메시지 및 기본 요원 작업은 **비용이 청구되지 않습니다**.  
- 하지만: 고급 기능(예: 자율 트리거, 기본 작업을 초과하는 요원 플로우, 외부 채널/API 사용)을 활성화하면 **청구 가능한 메시지**를 소비합니다.

| 시나리오                                     | 추가 메시지 청구 여부                         |
|---------------------------------------------|----------------------------------------------|
| M365 Copilot 사용자가 Teams에서 요원에게 질문 | ❌ 청구되지 않음                              |
| 요원이 외부 API 또는 플로우 호출             | ✅ 청구됨 (5개 이상의 메시지)                 |
| 요원이 자율 트리거 또는 그라운딩 사용        | ✅ 청구됨                                     |

---

## 🧮 정밀한 계획: 추정 도구 사용하기

요원을 배포하기 전에 **Copilot Studio 사용량 추정 도구**를 사용하여 현실적인 시나리오에서 메시지 소비를 예측하세요:

[👉 Copilot Studio 사용량 추정 도구 사용하기](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

이 도구를 사용하면:

- 🔢 **사용자 수**를 지정할 수 있습니다.
- ⚙️ **요원 기능**을 선택할 수 있습니다(그라운딩, 작업, 플로우, 메모리).
- 📈 **요원당 월 메시지 총량**을 추정할 수 있습니다.
- 🧠 설계를 최적화하고 청구 놀라움을 방지할 수 있습니다.

!!! tip
    ✅ 초기 단계에서 실행하고, 구축 후 다시 실행하여 예상 사용량과 실제 사용량을 비교하세요.

---

## 💼 샘플 시나리오

**환경**: 그라운딩 + 하나의 Power Automate 플로우를 사용하는 IT 헬프 데스크 요원  
**세션**: 세션당 사용자 5회 상호작용  
**가정**: 그라운딩(10 메시지) + 작업(5 메시지) + 생성형 응답 5개(10 메시지)  
**총합**: 세션당 약 25 메시지  
**규모**: 월 500 세션 = 약 12,500 메시지 (메시지 패키지의 절반)

---

## 🧠 비용 절감 팁

- Power Platform 관리 센터에서 사용량 모니터링
- 라이브 배포 전에 개발/테스트 환경에서 시작
- 사용하지 않는 작업 및 커넥터 비활성화
- 내부 사용 시 **Microsoft 365 Copilot 라이선스** 활용
- 사용량이 예측 가능해지면 메시지 패키지 사용
- **Copilot Studio 사용량 추정 도구**를 사용하여 사용량 예측

---

## 🏁 미션 완료

이제 다음을 이해했습니다:

- 사용량 계산 및 청구 방식
- M365 Copilot이 사용량을 커버하는 경우와 그렇지 않은 경우
- 메시지 소비를 예측하고 관리하는 방법

🎓 이 지식을 바탕으로 요원을 **효율적이고 스마트하게** 배포할 준비가 완료되었습니다.

---

## 📚 전술적 자료

Copilot Studio의 라이선스 및 청구에 대해 더 알아보기

- 📄 [Copilot Studio 라이선스 및 메시지 요금](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Power Platform 라이선스 가이드 (2025년 7월)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [메시지 관리 및 용량 모니터링](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="분석" />

---

**면책 조항**:  
이 문서는 AI 번역 서비스 [Co-op Translator](https://github.com/Azure/co-op-translator)를 사용하여 번역되었습니다. 정확성을 위해 최선을 다하지만, 자동 번역에는 오류나 부정확성이 포함될 수 있습니다. 원본 문서의 원어 버전을 권위 있는 출처로 간주해야 합니다. 중요한 정보의 경우, 전문적인 인간 번역을 권장합니다. 이 번역 사용으로 인해 발생하는 오해나 잘못된 해석에 대해 책임지지 않습니다.