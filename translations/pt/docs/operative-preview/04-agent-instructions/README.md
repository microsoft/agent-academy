<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-18T03:18:26+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "pt"
}
-->
# 🕵️‍♂️ Missão 04: Instruções para Agentes Autores

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODINOME: `OPERAÇÃO DIRETIVA SECRETA`

> **⏱️ Janela de Tempo da Operação:** `~45 minutos`

## 🎯 Resumo da Missão

Agente, a sua próxima tarefa é **Operação Diretiva Secreta** - dominar a arte da comunicação e controle de agentes através de instruções e descrições precisas.

A sua missão, caso decida aceitá-la, é aprender as habilidades essenciais para escrever instruções claras e acionáveis que orientem os seus agentes a tomar decisões inteligentes, usar as ferramentas e fontes de conhecimento certas, e colaborar perfeitamente com outros agentes. Também irá dominar a criação de descrições de alta qualidade que ajudam os agentes a compreender os seus recursos e responder com precisão cirúrgica às consultas dos utilizadores.

Considere isto como o seu treino avançado em psicologia de agentes e modificação de comportamento. Assim como um operativo de campo precisa de parâmetros claros para ter sucesso, os seus agentes de IA necessitam de instruções cuidadosamente elaboradas para agir com clareza, precisão e fornecer inteligência valiosa em cenários reais.

---

## 🔎 Objetivos

Ao completar esta missão, você irá:

- **Domínio de Instruções**: Compreender a arte e a ciência de escrever instruções para agentes no Copilot Studio  
- **Orientação Estratégica**: Aprender a direcionar agentes para usar ferramentas, fontes de conhecimento e colaborar com outros agentes  
- **Clareza Operacional**: Garantir que os seus agentes atuem com precisão, transparência e eficiência  

---

## 📝 Escrevendo Instruções para Agentes

Escrever instruções eficazes para agentes é a chave para um comportamento bem-sucedido. As instruções são usadas pelos agentes para:

- Decidir qual ferramenta, tópico ou fonte de conhecimento usar para uma consulta de utilizador ou gatilho autónomo  
- Preencher entradas para qualquer ferramenta com base no contexto disponível  
- Gerar uma resposta para o utilizador final  

### Como Funcionam as Instruções

As instruções devem estar baseadas nas ferramentas, tópicos e fontes de conhecimento configurados para o seu agente. Os agentes não podem agir com base em instruções para recursos que não possuem. Por exemplo, se você instruir o seu agente a pesquisar nas FAQs de um site, deve adicionar essas FAQs como uma fonte de conhecimento.

Pode referenciar ferramentas específicas, tópicos, variáveis ou expressões Power Fx usando `/` nas suas instruções. Isso ajuda o agente a saber exatamente o que usar e quando.

### O Que Incluir nas Instruções

- Adicione instruções para casos em que deseja orientar as escolhas do agente, especialmente quando há possibilidade de ambiguidade.  
- Use instruções para definir limites, como restringir tópicos ou especificar formatos de resposta.  
- Dê dicas para preencher entradas de ferramentas, por exemplo, "Use o endereço de email do campo de contato do lead ao ajudar o utilizador a redigir um email."  
- Especifique como as respostas devem ser formatadas, por exemplo, "Sempre forneça respostas sobre o estado do pedido em formato de tabela."  
- Use restrições para limitar as ações do agente, por exemplo, "Responda apenas a pedidos sobre benefícios dos funcionários."  

### Exemplos Práticos

- "Use os documentos de FAQ apenas se a pergunta não for relevante para Horários, Consultas ou Faturação."  
- "Use apenas o tópico de criação de tickets para criar tickets; para outros pedidos relacionados à resolução de problemas, use o tópico de resolução de problemas."  
- "Sempre forneça respostas sobre o estado do pedido em formato de tabela."  

### Testando e Refinando

- Após editar as instruções, use o painel de teste para validar o comportamento do agente.  
- Atualize e publique alterações conforme necessário.  

### Orientação Avançada

- Numere ou use listas com marcadores nas suas instruções e especifique que devem ser seguidas na ordem indicada.  
- Use formatação markdown para facilitar a leitura e ajudar a IA generativa a processar as suas instruções.  
- Se quiser que o seu agente seja altamente específico, considere criar um tópico para esse caso de uso.  
- Use nomes exatos para ferramentas e tópicos nas instruções para evitar confusões.  

### Segurança e Moderação

- Limite quais ferramentas o agente deve usar ao referenciar fontes de conhecimento.  
- Limite quais parâmetros devem ser usados para ferramentas (por exemplo, enviar email apenas para uma lista específica de indivíduos).  
- Use instruções para proteger contra comportamentos indesejados ou problemas de filtragem de conteúdo.  

---

## ✍️ Criando Descrições para Ferramentas, Tópicos e Agentes

Descrições de alta qualidade são essenciais para a orquestração generativa. O seu agente usa essas descrições para selecionar as ferramentas, tópicos e agentes certos para responder às consultas e gatilhos dos utilizadores. Siga estas melhores práticas:

- **Use Linguagem Simples e Direta**: Evite jargões, gírias ou termos excessivamente técnicos. Escreva em voz ativa e no presente.  
- **Seja Específico e Relevante**: Inclua palavras-chave relacionadas à funcionalidade e intenção do utilizador. Certifique-se de que as descrições diferenciem claramente ferramentas ou tópicos semelhantes para evitar ambiguidade.  
- **Mantenha Curto e Informativo**: Limite as descrições a uma ou duas frases. Resuma o que a ferramenta, tópico ou agente faz e como beneficia o utilizador.  
- **Use Nomes Únicos e Descritivos**: Evite nomes genéricos. Por exemplo, use "Previsão do Tempo para Amanhã" em vez de apenas "Tempo".  
- **Liste Ações ou Considerações**: Use listas com marcadores ou numeradas para maior clareza ao descrever múltiplas funcionalidades ou etapas.  
- **Teste para Sobreposição**: Se vários tópicos tiverem descrições semelhantes, o seu agente pode invocar todos. Teste e revise para evitar sobreposição.  

!!! example "Exemplos de Boas e Más Descrições"
    **Bom:** Este tópico fornece informações meteorológicas para qualquer local no mundo para o dia seguinte. Ele fornece a temperatura. Não obtém o clima atual para hoje.  
    **Ruim:** Esta ferramenta pode responder perguntas. *(Muito vago)*  

---

## 🛠️ Melhores Práticas para Instruções e Descrições

Para tornar as suas instruções e descrições verdadeiramente eficazes, tenha em mente estes princípios:

- Use voz ativa e tempo presente (por exemplo, "Esta ferramenta fornece informações meteorológicas").  
- Evite jargões, gírias ou termos técnicos desnecessários, a menos que sejam essenciais para o público.  
- Use listas com marcadores ou numeradas para separar ações, funcionalidades ou considerações.  
- Inclua palavras-chave que correspondam à intenção do utilizador e à funcionalidade da ferramenta ou tópico.  
- Certifique-se de que os nomes e descrições de recursos semelhantes sejam distintos para evitar confusão e sobreposição.  

---

## 🗂️ Estrutura de Exemplo para Instruções

Ao escrever instruções, considere a seguinte estrutura para maior clareza e completude:

1. **Visão Geral**: Descreva brevemente a missão e o papel do agente  
1. **Etapas do Processo**: Liste os principais passos que o agente deve seguir  
1. **Pontos de Colaboração**: Indique quando chamar outros agentes ou usar ferramentas específicas  
1. **Segurança e Moderação**: Inclua quaisquer requisitos de conformidade ou segurança  
1. **Ciclo de Feedback**: Especifique como o agente deve coletar feedback ou escalar problemas  

---

## 🧪 Laboratório: Criando Instruções para Agentes

*Conteúdo do laboratório em breve...*

---

## 🎉 Missão Concluída

Missão 04 concluída! Agora você tem:

✅ **Domínio de Instruções**: Aprendeu a escrever instruções claras e acionáveis para agentes  
✅ **Orientação Estratégica**: Direcionou agentes para usar ferramentas e colaborar de forma eficaz  
✅ **Clareza Operacional**: Garantiu que os agentes atuem com precisão e transparência  

A seguir: [Missão 05](../05-agent-responses/README.md): Personalizar respostas de agentes para máximo impacto.

---

## 📚 Recursos Táticos

📖 [Microsoft Copilot Studio - Criando Instruções](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Orientação para Modo Generativo](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.