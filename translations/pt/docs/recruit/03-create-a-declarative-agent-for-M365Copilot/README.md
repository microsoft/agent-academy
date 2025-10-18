<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-18T02:43:41+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "pt"
}
-->
# 🚨 Missão 03: Implementar um Agente Declarativo para o Microsoft 365 Copilot

## 🕵️‍♂️ CODINOME: `OPERAÇÃO EXTENSÃO COPILOT`

> **⏱️ Duração da Operação:** `~60 minutos`

🎥 **Assista ao Tutorial**

[![Miniatura do vídeo Criar um Agente Declarativo](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.pt.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Assista ao tutorial no YouTube")

## 🎯 Resumo da Missão

Bem-vindo à sua primeira missão de campo, Criador de Agentes. Você foi selecionado para projetar, equipar e implementar um Agente Declarativo—um agente especializado integrado diretamente no Microsoft 365 Copilot e no Microsoft Teams.

Diferentemente dos agentes tradicionais, os agentes declarativos operam com uma missão definida (instruções), ferramentas (prompts/conectores) e acesso estratégico à inteligência interna (fontes de conhecimento como SharePoint, Dataverse e mais). Sua tarefa é construir este agente usando o Microsoft Copilot Studio—um centro de comando sem código onde as habilidades e o propósito do seu agente ganham vida.

Vamos começar.

## 🔎 Objetivos

Nesta missão, você aprenderá:

1. Compreender o que são agentes declarativos e como eles ampliam o Microsoft 365 Copilot com capacidades personalizadas
1. Comparar o Microsoft Copilot Studio com o construtor de agentes do Copilot Studio para criar agentes declarativos
1. Criar um agente declarativo usando linguagem natural através da experiência de criação conversacional
1. Adicionar prompts de IA como ferramentas para aprimorar o conhecimento especializado e as habilidades de resolução de problemas do seu agente
1. Publicar e testar seu agente declarativo no Microsoft 365 Copilot e no Microsoft Teams

## 🕵🏻‍♀️ O que é um agente declarativo para o Microsoft 365 Copilot?

Agentes declarativos são versões personalizadas do Microsoft 365 Copilot. Você pode adaptar o Microsoft 365 Copilot para atender às necessidades específicas de negócios, fornecendo instruções para apoiar um processo específico, baseando-se em conhecimento empresarial e utilizando ferramentas para maior extensibilidade. Isso permite que as organizações criem experiências personalizadas com maior funcionalidade para seus usuários.

## 🤔 Por que usar o Microsoft Copilot Studio para criar um agente declarativo?

Como criador, é possível que você já tenha explorado o [construtor de agentes do Copilot Studio](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) no Microsoft 365 Copilot e esteja se perguntando _por que criar um agente declarativo no Microsoft Copilot Studio?_

O Microsoft Copilot Studio oferece um conjunto abrangente de ferramentas e recursos para agentes declarativos que vão além das limitações do construtor de agentes do Copilot Studio. Assim como o construtor de agentes do Copilot Studio, você não precisa saber programação ou desenvolvimento de software para criar no Microsoft Copilot Studio. Vamos detalhar mais para entender as diferenças entre o construtor de agentes do Copilot Studio e o Copilot Studio para criar agentes declarativos.

### Comparação de recursos

A tabela a seguir destaca as diferenças ao criar um agente declarativo no construtor de agentes do Copilot Studio e no Copilot Studio.

| Recurso                   | Construtor de agentes do Copilot Studio no Microsoft 365 Copilot                          | Ampliar o Microsoft 365 Copilot no Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Conhecimento**       | Web, SharePoint, chats do Microsoft Teams, e-mails do Outlook, conectores do Copilot     | Pesquisa na web (via Bing), SharePoint, Dataverse, Dynamics 365, conectores do Copilot  |
| **Ferramentas**       | Interpretador de código, gerador de imagens     | Mais de 1400 conectores do Power Platform, conectores personalizados, prompt, uso de computador, API REST, Protocolo de Contexto de Modelo   |
| **Prompts iniciais**         | Configurar prompts para que os usuários comecem rapidamente   | Configurar prompts para que os usuários comecem rapidamente  |
| **Canal**           | Agente publicado apenas no Microsoft 365 Copilot     | Agente publicado no Microsoft 365 Copilot e no Microsoft Teams      |
| **Permissões de compartilhamento**         | Usuários são apenas visualizadores    | Usuários podem ser editores ou visualizadores   |

Há mais capacidades oferecidas para agentes declarativos criados no Microsoft Copilot Studio, que aprenderemos a seguir.

!!! tip
    - Para saber mais sobre o construtor de agentes do Copilot Studio, acesse [Copilot Developer Camp: Lab MAB1 - Crie seu primeiro agente](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Para desenvolvimento avançado de extensão de um agente declarativo além do construtor de agentes do Copilot Studio para o Microsoft 365 Copilot, acesse [Copilot Developer Camp: Lab MAB1 - Crie seu primeiro agente](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Ampliando o Microsoft 365 Copilot com agentes declarativos criados no Copilot Studio

Vamos expandir o que aprendemos na tabela de comparação de recursos.

#### Personalização

- **Instruções detalhadas**: Você pode fornecer instruções detalhadas e capacidades para definir o propósito e o comportamento do agente com precisão.
  - Isso inclui invocar ferramentas simplesmente usando linguagem natural.

- **Acesso ao conhecimento empresarial**: Permite acesso ao conhecimento empresarial que respeita as permissões do usuário.
  - Integração com SharePoint
  - Integração com Dataverse
  - Integração com Dynamics 365
  - Conectores do Microsoft 365 Copilot habilitados pelo administrador da sua organização

   ![Personalização](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.pt.png)

#### Capacidades avançadas

- **Integração com serviços externos**: Permite escolher entre mais de 1400 conectores do Power Platform que se integram com serviços externos, proporcionando funcionalidades mais complexas e poderosas.
  - Exemplos incluem [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) e outros
  - Alternativamente, você também pode utilizar servidores do Protocolo de Contexto de Modelo e APIs REST diretamente no seu agente declarativo

- **Prompts de IA**: Use um prompt para analisar e transformar texto, documentos, imagens e dados com linguagem natural e raciocínio de IA.
  - Selecione o modelo de chat, escolha entre Básico (Padrão), Padrão, Premium
  - Opção de trazer seu próprio modelo Azure AI Foundry para fundamentar seu prompt

- **Mais opções de configuração de implantação**: Selecione canais e defina permissões de usuário.
  - Publique no Microsoft Teams, uma interface familiar para seus usuários para uma adoção mais rápida
  - Permissões de edição podem ser compartilhadas para evitar um único ponto de dependência no proprietário do agente

   ![Capacidades avançadas](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.pt.png)

Em resumo, os agentes declarativos no Microsoft Copilot Studio permitem a personalização do Microsoft 365 Copilot para atender às necessidades de negócios por meio da integração de sistemas de conhecimento empresarial, ferramentas para conectar-se a serviços externos ou modelos de IA GPT.

## 🧪 Laboratório 03: Crie um agente declarativo no Microsoft Copilot Studio para o Microsoft 365 Copilot

A seguir, aprenderemos como criar um agente declarativo para um caso de uso "Business-to-Employee", que atuará como um **agente de suporte técnico de TI**.

- [3.1 Criar um agente declarativo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Criar e adicionar um prompt ao seu agente declarativo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Atualizar instruções e testar seu agente declarativo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Publicar seu agente declarativo no Microsoft 365 Copilot e no Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Este laboratório irá delinear os passos para adicionar um Prompt como ferramenta. As próximas lições abordarão a adição de fontes de conhecimento e outras ferramentas disponíveis. Mantendo simples para o seu aprendizado 😊

### 👩🏻‍💼 Compreendendo Business-to-Employee (B2E)

Business-to-Employee (B2E) refere-se às interações e serviços que uma empresa oferece diretamente aos seus funcionários. No contexto de um agente, isso significa usar as capacidades avançadas do Copilot Studio para apoiar e melhorar a experiência de trabalho dos funcionários dentro da organização.

### ✨ Cenário de caso de uso

**Como** funcionário

**Eu quero** obter ajuda rápida e precisa do agente de suporte técnico de TI para problemas como problemas de dispositivos, solução de problemas de rede, configuração de impressoras

**Para que eu possa** permanecer produtivo e resolver problemas técnicos sem atrasos

Vamos começar!

### Pré-requisitos

- Os criadores devem ter permissões para criar e ter acesso a um ambiente do Copilot Studio.

!!! note "Nota sobre licenciamento"
    Este laboratório irá delinear os passos para adicionar um Prompt como ferramenta. As próximas lições abordarão a adição de fontes de conhecimento e outras ferramentas disponíveis. Mantendo simples para o seu aprendizado 😊
  
    Você não precisa de uma licença de usuário do Microsoft 365 Copilot para publicar seu agente declarativo criado no Copilot Studio para o Microsoft 365 Copilot. No entanto, **os usuários** do _agente declarativo publicado_ no Microsoft 365 Copilot precisam de uma licença de usuário do Microsoft 365 Copilot.

### 3.1 Criar um agente declarativo

!!! warning "As perguntas do Copilot podem variar entre as sessões"

    A experiência de criação conversacional do Copilot pode variar a cada vez, onde as perguntas fornecidas para orientação podem ser ligeiramente diferentes das anteriores.

1. Acesse [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) e faça login usando suas credenciais. Certifique-se de alternar para o ambiente que você está usando para esses laboratórios.

1. Selecione **Agentes** no menu e clique em **Copilot para Microsoft 365**.

       ![Copilot para Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.pt.png)

1. Em seguida, vamos criar um agente declarativo selecionando **+ Adicionar** agente.

       ![Adicionar Agente](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.pt.png)

1. Em seguida, veremos a experiência de criação conversacional carregar, onde podemos conversar em linguagem natural com o Copilot para descrever o agente declarativo que queremos criar e usar as perguntas fornecidas para orientação.

       Vamos inserir uma descrição detalhada que descreva o seguinte,  
       - a tarefa do agente  
       - que tipo de perguntas ele pode lidar  
       - o formato de sua resposta  
       - o objetivo do agente  
    
       ```text
       Você é um profissional de TI altamente qualificado e experiente, especializado em uma ampla gama de sistemas de computador, redes e cibersegurança. Você é capaz de diagnosticar e resolver problemas técnicos, explicar soluções de forma clara e compreensível para usuários de todos os níveis técnicos e fornecer orientações sobre as melhores práticas. Você deve ser conciso e informativo, usando instruções passo a passo com marcadores quando apropriado. Seu objetivo é ajudar o usuário a entender o problema e como resolvê-lo de forma eficaz.
       ```
    
       ![Criar Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.pt.png)

1. Após enviar o prompt, uma atualização notável aparecerá no painel do lado direito com os detalhes e instruções do agente conforme definido pelo prompt. Em seguida, será solicitado que você confirme o nome do seu agente e o Copilot sugerirá um nome.

       Insira `sim` para aceitar o nome sugerido ou insira um nome diferente, como o seguinte,
    
       ```text
       Contoso Suporte Técnico Pro
       ```
    
       ![Instruções atualizadas](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.pt.png)

    !!! warning "Lembrete: As perguntas do Copilot podem variar entre as sessões"

        A experiência de criação conversacional do Copilot pode variar a cada vez, onde as perguntas fornecidas para orientação podem ser ligeiramente diferentes das anteriores.

1. O nome do agente agora foi atualizado, como visto no painel do lado direito. Agora será solicitado que você refine as instruções para o agente. O que o Copilot sugeriu parece ótimo, então pediremos que ele use suas próprias sugestões. Insira o seguinte,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Nome atualizado](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.pt.png)

1. Em seguida, será perguntado se você deseja adicionar algum site ou conhecimento acessível publicamente. Responderemos com `Não`, pois apenas adicionaremos um prompt ao nosso agente declarativo neste laboratório. Os laboratórios subsequentes em lições futuras abordarão fontes de conhecimento.

      ![Nenhum site ou fonte de conhecimento adicionada](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.pt.png)

1. Em seguida, veremos uma resposta do Copilot indicando que agora terminamos de configurar nosso agente usando a experiência de criação conversacional do Copilot. No entanto, vamos refiná-lo um pouco mais, destacando que ele deve ser conciso e informativo com marcadores, usar empatia na comunicação e pedir feedback após fornecer soluções.

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

      ![Atualizar instruções do agente](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.pt.png)

1. O Copilot confirma que as instruções foram atualizadas. Clique em **Criar** para provisionar o agente declarativo para o Microsoft 365 Copilot.

      ![Criar agente](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.pt.png)

    !!! warning "Lembrete: As perguntas do Copilot podem variar entre as sessões"

        A experiência de criação conversacional do Copilot pode variar a cada vez, onde as perguntas fornecidas para orientação podem ser ligeiramente diferentes das anteriores.

1. Assim que o agente for provisionado, você verá os detalhes do agente, que contêm a descrição e as instruções definidas durante a experiência de criação conversacional do Copilot.
![Detalhes do agente](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.pt.png)

Desça o painel e verá também as capacidades de adicionar conhecimento, ativar a pesquisa na web (via Bing), prompts iniciais e os detalhes de publicação do agente declarativo para o Microsoft 365 Copilot. Os prompts iniciais também serão exibidos no painel de teste no lado direito. Os utilizadores podem selecionar esses prompts iniciais para começar a interagir com o agente.

![Prompts sugeridos](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.pt.png)

1. Na secção de detalhes do agente, também tem a possibilidade de alterar o ícone do agente. Selecione **Editar**.

![Editar detalhes](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.pt.png)

Aqui pode alterar o ícone e a cor de fundo. Selecione **Guardar** e, em seguida, selecione **Guardar** novamente para atualizar os detalhes do agente.

![Alterar ícone](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.pt.png)

1. Vamos fazer um teste rápido do agente que criámos. Selecione um dos **Prompts Iniciais** no painel de teste no lado direito.

![Testar prompt inicial](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.pt.png)

1. O nosso agente irá responder. Note como ele seguiu as instruções ao fornecer pontos em partes digeríveis e utilizou empatia na sua resposta.

Se descer até ao final da mensagem, verá como ele também pediu feedback após fornecer uma solução, conforme instruído.

![Resposta do teste](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.pt.png)

Em poucos minutos, adicionou um agente declarativo para o Microsoft 365 Copilot no Copilot Studio 🙌🏻

A seguir, vamos aprender como adicionar uma ferramenta ao nosso agente e criar um prompt.

### 3.2 Criar e adicionar um prompt ao seu agente declarativo

1. Desça até à secção **Ferramentas** e selecione **+ Adicionar ferramenta**

![Adicionar ferramenta](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.pt.png)

1. O modal de Ferramentas aparecerá e será exibida uma lista de conectores do Power Platform. Para adicionar um Prompt, selecione **+ Nova ferramenta**.

![Nova ferramenta](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.pt.png)

1. Será exibida uma lista de outras ferramentas - Prompt, Conector personalizado, API REST e Protocolo de Contexto de Modelo. Se a sua organização atender aos [requisitos para Uso de Computador](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), isso também aparecerá na lista. Selecione **Prompt**.

![Selecionar prompt](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.pt.png)

1. Insira um nome para o prompt. Vamos nomear o nosso prompt como `Especialista em TI`.

![Inserir nome](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.pt.png)

1. Selecione o **ícone de seta** ao lado do **Modelo** para ver os diferentes modelos de chat que pode escolher. Por padrão, o modelo **Basic GPT-4.1 mini** está selecionado e também tem a opção de usar o seu próprio modelo com os Modelos Azure AI Foundry. Vamos manter o modelo padrão selecionado.

![Alterar modelo](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.pt.png)

1. Em seguida, vamos fornecer instruções ao nosso prompt. Existem 3 métodos que pode escolher:

   - Usar o Copilot para gerar instruções com base na sua descrição do que deseja que o prompt faça.
   - Usar um modelo predefinido da biblioteca de prompts para criar um prompt.
   - Inserir manualmente as suas próprias instruções.

1. Primeiro, vamos tentar usar o Copilot para gerar instruções com base numa descrição inserida. Insira o seguinte no campo do Copilot e envie.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Começar com o Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.pt.png)

1. O Copilot começará a gerar um prompt para nós.

![Copilot cria prompts](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.pt.png)

1. As instruções geradas pelo Copilot aparecerão.

![Instruções geradas pelo Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.pt.png)

1. Desça até ao final das instruções e verá o parâmetro de entrada do utilizador já definido pelo Copilot. Tem então a opção de:
   - Manter as instruções geradas.
   - Atualizar as instruções geradas usando o Copilot.
   - Limpar as instruções geradas.

   Limpe as instruções geradas selecionando o ícone **caixote do lixo** e, em seguida, experimentaremos a biblioteca de prompts.

![Instruções do prompt](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.pt.png)

1. Selecione o link **modelo de prompt**.

![Selecionar modelo de prompt](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.pt.png)

1. Verá uma lista de modelos de prompt para escolher. Estes são da [Biblioteca de Prompts do Power Platform](https://aka.ms/power-prompts).

![Biblioteca de prompts](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.pt.png)

1. Procure o prompt `Especialista em TI` e selecione-o.

![Selecionar prompt Especialista em TI](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.pt.png)

1. O prompt será então adicionado como as instruções com o parâmetro de entrada definido pelo modelo de prompt. Similar à abordagem que adotámos ao fornecer instruções para o nosso agente durante a experiência de criação conversacional com o Copilot, este modelo de prompt descreve:
   - uma tarefa,
   - que tipo de perguntas pode lidar,
   - e o formato da sua resposta e o objetivo do prompt.

![Instruções do prompt](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.pt.png)

1. Limpe as instruções e, em seguida, experimente inserir manualmente as instruções. Usaremos o [prompt Especialista em TI](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) da [Biblioteca de Prompts do Power Platform](https://aka.ms/power-prompts). Copie e cole o prompt.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Instruções do prompt](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.pt.png)

1. Em seguida, podemos definir os parâmetros de entrada do utilizador para o nosso prompt. Estes podem ser texto e imagens, e dados de exemplo para testar. Também há a capacidade de fundamentar o prompt com conhecimento de tabelas do Dataverse. Para este exercício, temos apenas uma entrada de utilizador para definir, que é a entrada do problema. Atualmente, é um espaço reservado no nosso prompt como `[Problema]`. Vamos agora configurar esta entrada, inserindo o caractere `/` ou selecionando **+Adicionar conteúdo** e, em seguida, **Texto**.

![Entrada de texto](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.pt.png)

1. Agora podemos inserir um nome para o nosso parâmetro de entrada e dados de exemplo.

Insira o seguinte como nome:

    ```text
    problem input
    ```

Insira o seguinte como dados de exemplo:

    ```text
    My laptop gets an error with a blue screen
    ```

Em seguida, selecione **Fechar**.

![Configurar entrada do problema](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.pt.png)

1. O parâmetro de entrada do problema será agora adicionado às instruções com os dados de exemplo configurados. Podemos agora testar o nosso prompt!

![Entrada do problema adicionada](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.pt.png)

1. Selecione **Testar** para testar o prompt.

![Testar instruções](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.pt.png)

1. A resposta será exibida. Note como a resposta fornece títulos com pontos, conforme as instruções. Desça e reveja o restante da resposta do modelo.

![Resposta do modelo](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.pt.png)

1. Antes de guardar o nosso prompt, vamos aprender sobre as configurações que podem ser ajustadas para este prompt. Selecione o **ícone de reticências (...)**.

![Configurações do prompt](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.pt.png)

1. Aqui veremos três configurações que podem ser ajustadas.

   - **Temperatura**: Temperaturas mais baixas levam a resultados previsíveis, enquanto temperaturas mais altas permitem respostas mais diversificadas ou criativas.
   - **Recuperação de registos**: Especifica o número de registos recuperados para as suas fontes de conhecimento.
   - **Incluir links na resposta**: Quando selecionado, a resposta inclui citações de links para os registos recuperados.

   Selecione o ícone **X** para sair das Configurações.

![Configurar configurações](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.pt.png)

1. Selecione **Guardar** para guardar o prompt.

![Guardar prompt](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.pt.png)

1. Em seguida, selecione **Adicionar ao agente** para adicionar o prompt ao nosso agente declarativo.

![Instruções do prompt](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.pt.png)

1. O prompt aparecerá agora em Ferramentas 🙌🏻

![Prompt adicionado](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.pt.png)

A seguir, vamos atualizar as nossas instruções para invocar o prompt e testar o nosso agente declarativo.

### 3.3 Atualizar instruções e testar o seu agente declarativo

1. Suba até à secção **Detalhes** e selecione **Editar**. Isso permitirá que os campos sejam editáveis.

![Selecionar Editar](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.pt.png)

1. Agora podemos atualizar as nossas instruções para invocar o nosso prompt, referenciando o nome do prompt. Limpe as instruções, depois copie e cole o seguinte.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

Note como a frase final instrui o agente a usar a pergunta feita pelo utilizador como valor para o parâmetro de entrada do problema. O agente usará a pergunta como entrada do problema para o prompt. Em seguida, selecione **Guardar**.

![Atualizar instruções para invocar prompt](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.pt.png)

1. Agora estamos prontos para testar as instruções atualizadas do nosso agente declarativo. Selecione o **ícone de atualização** no painel de teste.

![Selecionar ícone de atualização](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.pt.png)

1. Em seguida, insira o seguinte prompt abaixo e envie.

```text
Pode ajudar-me, o meu portátil está com ecrã azul
```

![Realizar teste](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.pt.png)

1. O agente invoca o prompt e responde.

![Instruções do prompt](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.pt.png)

Agora vamos publicar o nosso agente declarativo 😃

### 3.4 Publicar o seu agente declarativo no Microsoft 365 Copilot e Microsoft Teams

1. Selecione **Publicar**.

![Publicar agente](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.pt.png)

1. Um modal aparecerá exibindo os Canais e os detalhes de publicação que podem ser atualizados.

   - Canais: O agente será publicado no Microsoft 365 Copilot e no Microsoft Teams.
   - Informações da aplicação do agente: Isto será exibido quando o utilizador adicionar o agente ao Microsoft 365 Copilot ou ao Microsoft Teams. Estes são campos que podem ser atualizados conforme necessário.

![Detalhes da aplicação do agente](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.pt.png)

1. Por exemplo, pode atualizar a **Descrição curta**, **Descrição longa**, **Nome do desenvolvedor** com o seu nome.

!!! tip
Se não vir todos os campos exibidos no seu navegador, tente reduzir o zoom, por exemplo, para 75%.

Selecione **Publicar**. O Copilot Studio começará então a publicar o agente.

![Publicar agente](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.pt.png)

1. Quando a publicação for concluída, veremos as [Opções de Disponibilidade](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) do agente.

| Opção de Disponibilidade | Descrição |
| ---------- | ---------- |
| Link de Partilha | Copie o link para distribuí-lo com utilizadores partilhados para abrir o agente no Microsoft 365 Copilot |
| Mostrar aos meus colegas e utilizadores partilhados | Permite conceder acesso a outros para participar na criação do agente ou a grupos de segurança para conceder-lhes acesso para usar o agente no Microsoft 365 Chat ou Microsoft Teams. |
| Mostrar a todos na minha organização | Submeta ao administrador do tenant para adicionar ao catálogo organizacional para todos os utilizadores do tenant adicionarem o agente. O agente será exibido em Criado pela sua organização no Microsoft 365 Copilot e no Microsoft Teams |
| Transferir como .zip | Transfira como um ficheiro zip para carregar como uma aplicação personalizada no Microsoft Teams |

![Opções de disponibilidade](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.pt.png)

1. Vamos ver como partilhar o agente. Selecione **Mostrar aos meus colegas e utilizadores partilhados**. Um painel aparecerá onde pode procurar utilizadores com quem deseja partilhar o agente, inserindo o nome, email ou grupo de segurança deles. Pode rever esta lista a qualquer momento para editar quem tem acesso ao agente.

Há também duas caixas de seleção:
- _Enviar um convite por email para novos utilizadores_ - novos utilizadores receberão um convite por email.
- _Visível em Criado com Power Platform_ - o agente torna-se disponível na secção Criado com Power Platform da loja de aplicações do Teams.
Para mais detalhes, consulte [Conectar e configurar um agente para Teams e Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Selecione **Cancelar** ou o ícone **X** para sair do painel.

![Partilhar agente](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.pt.png)

1. Selecione **Copiar** e, numa nova aba do navegador, cole o link.

![Copiar link](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.pt.png)

1. O Microsoft 365 Copilot será carregado e uma janela modal aparecerá com os detalhes da aplicação do agente. Note como o nome do desenvolvedor, a descrição curta e a descrição longa são exibidos. Estes vêm dos detalhes de publicação atualizados numa etapa anterior.

Selecione **Adicionar**.

![Opções de disponibilidade](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.pt.png)

1. O nosso agente declarativo será carregado em seguida. Podemos ver os prompts iniciais para selecionar, o que permite aos utilizadores obter ajuda imediata rapidamente.

Selecione um dos prompts iniciais. Nos meus prompts iniciais, vou selecionar o prompt **Ajuda para Instalação de Software**, que preencherá automaticamente o campo de mensagem do Copilot. Submeta a pergunta ao Copilot.

![Selecionar prompt inicial](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.pt.png)

1. Selecione **Permitir sempre** para dar ao seu agente declarativo permissão para invocar o prompt do Especialista de TI.

![Selecionar permitir sempre](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.pt.png)

1. O agente então invocará o nosso prompt **Especialista de TI** e veremos a resposta do modelo retornada como uma mensagem no nosso agente declarativo.

![Resposta](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.pt.png)

Role para baixo para ver os detalhes completos da resposta.

![Resposta](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.pt.png)

1. Mas _como sabemos_ que o agente declarativo invocou o prompt? 👀 Bem, aqui está uma dica!

!!! tip
    Pode testar e depurar agentes no Microsoft 365 Copilot ativando o [modo de desenvolvedor](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Insira o seguinte no campo de mensagem do Copilot e submeta.

    ```text
    -developer on
    ```

Uma mensagem de confirmação aparecerá para informar que o modo de desenvolvedor está agora ativado.

![Modo de desenvolvedor ativado](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.pt.png)

1. Submeta a seguinte pergunta para invocar o prompt.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Inserir pergunta](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.pt.png)

1. Veremos novamente uma resposta do modelo do nosso prompt **Especialista de TI** retornada como uma mensagem. Role até o final da mensagem e um cartão com informações de depuração será exibido.

Expanda **Informações de Depuração do Agente** ao selecioná-lo.

![Informações de depuração do agente](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.pt.png)

1. Aqui encontrará informações sobre os metadados do agente que ocorreram em tempo de execução.

![Informações de depuração do agente expandidas](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.pt.png)

No nosso caso de uso, vamos focar na seção _Ações_

- **Ações correspondentes** destacam o estado atual das funções encontradas durante a pesquisa da aplicação.
- **Ações selecionadas** destacam o estado atual das funções escolhidas para executar com base no processo de tomada de decisão da aplicação.

![Informações de depuração do agente expandidas](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.pt.png)

Aqui podemos ver que o orquestrador do agente escolheu invocar o prompt Especialista de TI conforme as instruções do nosso agente declarativo. Isso é detalhado ainda mais na seção _Ações Executadas_, que também nos informa que o prompt foi invocado com sucesso.

![Revisar informações de depuração do agente](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.pt.png)

1. Para desativar o modo de desenvolvedor, insira o seguinte no campo de mensagem do Copilot e submeta.

    ```text
    -developer off
    ```

Uma mensagem de confirmação aparecerá para informar que o modo de desenvolvedor está desativado. Ótimo, agora sabe como verificar se o seu agente declarativo no Microsoft 365 Copilot invocou o seu prompt 🌞

![Modo de desenvolvedor desativado](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.pt.png)

1. Vamos agora testar o nosso agente no Microsoft Teams. Navegue até **Aplicações** usando o menu do lado esquerdo e selecione **Teams** na seção _Aplicações_.

![Selecionar Teams em Aplicações](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.pt.png)

1. O Microsoft Teams será carregado numa nova aba do navegador e, em seguida, seremos apresentados aos termos de uso do Microsoft 365 Copilot. Selecione **Concordar**.

![Selecionar Concordar](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.pt.png)

1. O Microsoft 365 Copilot será carregado por padrão, com o painel do lado direito listando todos os seus agentes disponíveis, incluindo o agente declarativo **Contoso Tech Support Pro**.

![Microsoft 365 Copilot no Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.pt.png)

1. Selecione o **ícone de reticências (...)** no menu do lado esquerdo. Pesquise por **Contoso Tech Support Pro** no campo de pesquisa ou, se vir o agente, selecione-o.

Também pode clicar com o botão direito do rato para **Fixar** o agente para acesso rápido no menu do lado esquerdo no Microsoft Teams.

![Selecionar e fixar agente](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.pt.png)

1. O nosso agente será então carregado. Vamos agora testar o nosso agente. Insira o seguinte prompt e submeta.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Fixar agente](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.pt.png)

1. Uma resposta do modelo do nosso prompt será então exibida.

![Resposta no Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.pt.png)

Em poucos minutos, aprendeu como publicar o seu agente declarativo e testá-lo no Microsoft 365 Copilot e no Microsoft Teams 😊

## ✅ Missão Cumprida

Parabéns! 👏🏻 Construiu um agente declarativo no Copilot Studio, onde adicionou um Prompt, instruiu o agente a usar o Prompt e aprendeu como testar + publicar o seu agente no Microsoft 365 Copilot e no Microsoft Teams.

O seu agente está agora em ação—pronto para ajudar, solucionar problemas e atender utilizadores internos sob demanda.

Este é o fim de **Laboratório 03 - Construir um agente declarativo no Microsoft Copilot Studio para Microsoft 365 Copilot**, selecione o link abaixo para avançar para a próxima lição.

⏭️ [Avançar para a lição **Criar uma nova Solução**](../04-creating-a-solution/README.md)

Até à próxima, mantenha-se atento. O futuro do trabalho empresarial passa por agentes—e agora sabe como construir um.

## 📚 Recursos Táticos

🔗 [Construir agente declarativo no Microsoft Copilot Studio para Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Adicionar prompts](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Partilhar agentes com outros utilizadores](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Construir prompts para o seu agente](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.