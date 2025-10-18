<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-18T02:59:49+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "pt"
}
-->
# 🚨 Missão 12: Compreender Licenciamento

## 🕵️‍♂️ CODINOME: `OPERAÇÃO SAIBA O QUE DEVE`

> **⏱️ Duração da Operação:** `~15 minutos`

## 🎯 Resumo da Missão

Bem-vindo, recruta. Antes de enviar os seus agentes para o campo, é essencial saber **como o uso é medido, licenciado e faturado**. Esta missão explica o modelo de faturação baseado em mensagens, detalha o que está incluído nas licenças do Microsoft 365 Copilot e mostra como planear com o estimador.

---

## 🎯 Objetivo: Compreender o Modelo Baseado em Mensagens

O Copilot Studio não cobra por utilizador ou por funcionalidade — a faturação é baseada em **quantas mensagens os seus agentes consomem**. Uma "mensagem" é uma interação entre o seu agente e o utilizador (ou um sistema).

- 💬 Cada interação do utilizador com o seu agente conta como pelo menos **1 mensagem**
- 🔄 Interações complexas (como grounding, IA generativa ou fluxos) consomem **múltiplas mensagens**
- 💼 Paga pelas mensagens através de **pacotes pré-pagos** ou **pagamento conforme o uso (PAYGO)**

---

## Opções de Licenciamento

### 1. **Pacotes de Mensagens do Copilot Studio**

- Pré-pago: **25.000 mensagens/mês por $200**
- Ideal para uso previsível — a capacidade é partilhada entre o tenant

### 2. **Pagamento Conforme o Uso (PAYGO)**

- Pós-pago: **$0.01 por mensagem**
- Sem compromisso inicial; o uso é faturado no final do mês via Azure

---

## E se tiver Licenças do M365 Copilot?

Se a sua equipa tiver **licenças do Microsoft 365 Copilot**, os seus agentes **podem operar sem custos adicionais em cenários chave**:

- Respostas clássicas, respostas geradas, mensagens baseadas em gráficos e ações básicas do agente são **isentas de cobrança** para utilizadores autenticados do M365 Copilot em apps como Teams e Outlook  
- No entanto: se ativar funcionalidades avançadas como triggers autónomos, fluxos de agentes além de ações básicas ou utilizar canais/APIs externos, essas **consomem mensagens faturáveis**

| Cenário                                     | Mensagens Adicionais Faturadas?              |
|---------------------------------------------|----------------------------------------------|
| Utilizador do M365 Copilot a interagir com o agente no Teams | ❌ Não faturado                              |
| Agente a chamar API externa ou fluxo        | ✅ Faturado (5 + mensagens)                  |
| Agente a usar trigger autónomo ou grounding | ✅ Faturado                                  |

---

## 🧮 Planeie com Precisão: Use o Estimador

Antes de lançar o seu agente, utilize o **Estimador de Uso do Copilot Studio** para prever o consumo de mensagens em cenários realistas:

[👉 Use o Estimador de Uso do Copilot Studio](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Com ele, pode:

- 🔢 Especificar o **número de utilizadores**
- ⚙️ Selecionar **funcionalidades do agente** (grounding, ações, fluxos, memória)
- 📈 Estimar o **total de mensagens por agente por mês**
- 🧠 Otimizar o design e evitar surpresas na faturação

!!! tip
    ✅ Utilize-o no início — e novamente após a construção — para comparar o uso esperado com o real.

---

## 💼 Cenário de Exemplo

**Ambiente**: Agente de Help Desk de TI com grounding + um fluxo Power Automate  
**Sessões**: 5 interações por sessão  
**Pressupostos**: grounding (10 msgs) + ação (5 msgs) + 5 respostas geradas (10 msgs)  
**Total**: ~25 mensagens por sessão  
**Escala**: 500 sessões/mês = ~12.500 mensagens (½ pacote de mensagens)

---

## 🧠 Dicas para Controlar Custos

- Monitorize o uso através do Power Platform Admin Center
- Comece em desenvolvimento/teste antes de ir para produção
- Desative ações e conectores não utilizados
- Utilize **licenças do Microsoft 365 Copilot** sempre que possível para uso interno
- Utilize pacotes de mensagens quando o uso se tornar previsível
- Use o **Estimador de Uso do Copilot Studio** para prever o consumo

---

## 🏁 Missão Concluída

Agora compreende:

- Como o uso é calculado e faturado
- Quando o M365 Copilot cobre o uso — e quando não cobre
- Como prever e gerir o consumo de mensagens

🎓 Com este conhecimento, está pronto para avançar e implementar os seus agentes **de forma eficiente e inteligente**

---

## 📚 Recursos Táticos

Saiba mais sobre licenciamento e faturação no Copilot Studio

- 📄 [Licenciamento e Tarifas de Mensagens do Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Guia de Licenciamento do Power Platform (Julho 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Gestão de Mensagens e Monitorização de Capacidade](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Análise" />

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.