<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "180f9cc0b40527f61be092c9b0f72aba",
  "translation_date": "2025-10-18T03:00:24+00:00",
  "source_file": "docs/recruit/06-create-agent-from-conversation/README.md",
  "language_code": "pt"
}
-->
# 🚨 Missão 06: Criar um agente personalizado usando linguagem natural com Copilot e conectá-lo aos seus dados

## 🕵️‍♂️ CODINOME: `OPERAÇÃO FORJA DE AGENTE`

> **⏱️ Janela de Tempo da Operação:** `~75 minutos`

🎥 **Assista ao Tutorial**

[![Miniatura do vídeo de criação de agente personalizado](../../../../../translated_images/video-thumbnail.9d5fddc1190fd4a04537488795821ac2f88fdcfe00e017f6e575a33f724e39cb.pt.jpg)](https://www.youtube.com/watch?v=qZTtQVncGFg "Assista ao tutorial no YouTube")

## 🎯 Resumo da Missão

Bem-vindo de volta, Criador de Agentes. Esta missão coloca você no comando da capacidade mais poderosa do Copilot Studio - criar um agente personalizado do zero usando apenas linguagem natural... e potencializá-lo com os seus próprios dados.

Este não é apenas mais um chatbot. Você está a construir um colega digital capacitado com conhecimento - um que pode raciocinar, responder e referenciar informações reais da sua empresa.

Sua arma secreta? Linguagem natural. Sua missão? Projetar, treinar e testar um agente de helpdesk totalmente personalizado que responde a perguntas de TI usando SharePoint, arquivos carregados ou URLs da empresa.

Vamos construir o seu agente do zero.

## 🔎 Objetivos

Nesta missão, você aprenderá:

1. Compreender o que são agentes personalizados e como eles diferem dos modelos pré-construídos.
1. Criar agentes usando prompts de linguagem natural e design conversacional com Copilot.
1. Conectar agentes a fontes de conhecimento empresarial, incluindo SharePoint, documentos e websites.
1. Aprender sobre orquestração generativa e como os agentes pesquisam e respondem dinamicamente usando múltiplas fontes de dados.
1. Construir e testar um agente de helpdesk de TI totalmente funcional que pode responder a perguntas com base nos seus próprios dados.

## 🤔 O que é um agente _personalizado_?

Um agente personalizado é um chatbot ou assistente virtual que você cria e projeta no Copilot Studio para ajudar os usuários com tarefas ou perguntas específicas. É chamado de personalizado porque:

- **Você decide o propósito** - ajudar os usuários a solicitar férias, verificar o status de pedidos, fornecer assistência com questões relacionadas a TI.
- **Você define a conversa** - o que o agente diz e como ele deve responder.
- **Você conecta aos seus próprios dados** - vincule aos dados da sua empresa por meio dos recursos de conhecimento integrados.
- **Você conecta aos seus próprios sistemas ou aplicações** - escolha entre conectores, fluxos, APIs REST e servidores de protocolo de contexto de modelo.

!!! note
    Pense desta forma: você está a construir o seu próprio assistente digital que pode conversar com os usuários e realizar tarefas para eles, como responder perguntas, coletar informações necessárias para um processo ou acessar os dados da sua empresa.

### 🤖 O que um agente personalizado pode fazer?

Um agente personalizado pode realizar as seguintes tarefas:

- Pedir informações aos usuários, como nomes, datas ou preferências.
- Salvar essas informações em uma base de dados ou tabela.
- Pesquisar dados com base nas perguntas feitas e respondê-las.
- Trabalhar de forma autônoma sem interação direta dos usuários.
- Acionar ações sob demanda por interação direta do usuário ou de forma autônoma, como enviar e-mails ou criar registros.

### 👩🏻‍💻 Por que usar um agente personalizado?

- Economiza tempo ao automatizar tarefas repetitivas.
- Oferece aos usuários uma experiência amigável e guiada.
- Adapta-se às necessidades do seu negócio ou projeto.

### ✨ Exemplo

Você cria um agente personalizado que ajuda os funcionários a solicitar férias.

Ele pede o nome deles, as datas de início e término das férias, e o nome do gestor, depois salva as informações no sistema designado que gerencia solicitações de férias, como uma lista do SharePoint.

Agora, em vez de navegar até a lista do SharePoint e criar um novo item, os funcionários simplesmente conversam com o agente.

## 🗣️ Use linguagem natural para criar agentes

Anteriormente, você aprendeu como construir rapidamente agentes no Copilot Studio usando modelos de agentes pré-construídos em [Lição 05 - Comece rapidamente com agentes pré-construídos](../05-using-prebuilt-agents/README.md). Nesta lição, vamos explorar a experiência de criação conversacional com o Copilot. O Copilot Studio facilita a criação de agentes conversando com o Copilot, como se fosse uma conversa.

No Copilot Studio, você não precisa escrever código para criar um agente. Em vez disso, você descreve o que deseja que seu agente faça em linguagem simples, e o Copilot ajuda você a construí-lo passo a passo por meio de uma experiência semelhante a um chat.

## 🌱 Mas sou novo em "descrever o que quero" - o que faço?

Descrever em linguagem natural para criar um agente personalizado pode ser um conceito novo para você. Sempre que você usa o Copilot em produtos e serviços da Microsoft, está utilizando linguagem natural na forma de um _prompt_.

Um prompt é a mensagem ou instrução que você dá a um agente de IA para dizer o que você quer que ele faça. Pense nisso como dar direções a um assistente. Quanto mais claras forem suas instruções, mais fácil será para o assistente entender e agir.

### 🪄 Por que os Prompts são importantes

- Eles orientam o comportamento do agente.
- Ajudam o agente a entender que tipo de conversa deve ter.
- Um bom prompt torna o agente mais útil e preciso.

### 📝 Dicas para escrever um bom prompt

- Seja claro e específico - diga exatamente o que você quer que o agente faça.
- Pense como o usuário - o que o usuário dirá? O que o agente deve responder?
- Inclua exemplos - se possível, forneça uma interação de exemplo.

### ✨ Exemplo

Digamos que a equipe de RH precise de um agente para ajudar com solicitações de férias.

O prompt poderia ser:

    “Quero criar um agente que ajude os usuários a enviar uma solicitação de férias. Quando um usuário disser que quer solicitar folga, o agente deve pedir o nome, a data de início das férias, a data de término das férias e o nome do gestor. Assim que o usuário fornecer essas informações, o agente deve salvá-las em uma lista do SharePoint chamada ‘Solicitações de Férias’ e postar uma notificação em um canal dedicado do Microsoft Teams.”

Por que este prompt funciona:

- **Declara claramente o objetivo** - enviar uma solicitação de férias.
- **Descreve a interação com o usuário** - o que o usuário diz e o que o agente deve perguntar.
- **Lista os dados necessários** - nome, data de início, data de término, gestor.
- **Menciona onde os dados serão armazenados** - uma lista do SharePoint chamada Solicitações de Férias.

## 🔮 OK, criei meu agente... como conectá-lo ao conhecimento?

No Copilot Studio, fontes de conhecimento são lugares onde seu agente pode encontrar informações para fornecer respostas melhores. Quando você adiciona essas fontes, seu agente pode acessar os dados da sua empresa de locais como Power Platform, Dynamics 365, websites e outros sistemas ou serviços que sua empresa utiliza.

Essas fontes trabalham em conjunto com a IA para ajudar seu agente a responder com mais precisão às perguntas dos usuários, isso é alcançado por meio do que é conhecido como **orquestração generativa**.

### 🌿 O que é orquestração generativa no contexto de agentes?

Orquestração generativa significa que o agente usa IA para decidir dinamicamente como responder a uma pergunta, combinando suas habilidades linguísticas integradas com informações das fontes de conhecimento adicionadas.

Quando um usuário faz uma pergunta, o agente:

- Entende a pergunta usando IA.
- Pode pedir informações faltantes aos usuários, gerando perguntas espontaneamente.
- Seleciona as fontes de conhecimento mais relevantes.
- Pesquisa essas fontes para encontrar respostas.
- Gera uma resposta natural e útil usando as informações encontradas.

### 🏦 Por que as fontes de conhecimento são importantes?

1. **Respostas mais inteligentes** - ao adicionar fontes de conhecimento, seu agente pode fornecer respostas melhores e mais precisas usando dados reais da sua organização.

1. **Menos trabalho manual** - você não precisa escrever todas as respostas possíveis. O agente pode pesquisar nas fontes adicionadas e responder automaticamente.

1. **Usar informações confiáveis** - seu agente pode buscar respostas em sistemas que você já utiliza, como Dataverse, SharePoint ou websites da empresa, garantindo que os usuários tenham informações confiáveis de uma fonte oficial.

1. **Funciona com IA generativa** - fontes de conhecimento e IA ajudam seu agente a entender perguntas e responder de forma natural, mesmo que a pergunta não tenha sido programada ou adicionada como um prompt inicial.

1. **Flexível e expansível** - você pode adicionar fontes de conhecimento a qualquer momento durante a configuração ou posteriormente, e seu agente se torna mais inteligente conforme suas necessidades mudam.

### ✨ Exemplo

Imagine que você cria um agente para ajudar os funcionários com perguntas de RH. Você adiciona o documento de política de RH da sua empresa e o site do SharePoint como fontes de conhecimento.

Quando um funcionário pergunta, _“Quantos dias de férias eu tenho direito?”_, o agente usa a orquestração generativa para pesquisar essas fontes e responder com a política correta, sem que você precise escrever essa resposta manualmente. Isso economiza tempo ao não precisar prever todas as perguntas possíveis que um funcionário pode fazer sobre seus direitos.

## Tipos de fontes de conhecimento que podem ser adicionadas

1. **Websites públicos**
    - **O que faz:** Pesquisa websites específicos (como o site da sua empresa) usando Bing.
    - **Por que é útil:** Ótimo para obter informações públicas como FAQs ou detalhes de produtos.

1. **Documentos**
    - **O que faz:** Usa documentos que você carrega diretamente no agente, como PDFs ou arquivos do Word. Esses arquivos carregados são armazenados com segurança no Dataverse.
    - **Por que é útil:** Permite que seu agente responda a perguntas com base em guias internos, manuais ou políticas.

1. **SharePoint**
    - **O que faz:** Conecta-se a pastas ou arquivos do SharePoint usando Microsoft Graph Search.
    - **Por que é útil:** Ideal para acessar documentos da equipe, políticas de RH ou arquivos de projetos armazenados no SharePoint.

1. **Dataverse**
    - **O que faz:** Usa dados estruturados do ambiente Dataverse, como tabelas e linhas, e pode aplicar sinônimos e definições de glossário para tabelas e colunas, melhorando as respostas do agente.
    - **Por que é útil:** Quando você precisa buscar dados empresariais armazenados no Dataverse, como informações de clientes.

1. **Conhecimento em tempo real com conectores**
    - **O que faz:** Permite que seu agente acesse dados ao vivo de outros sistemas empresariais, como Salesforce, ServiceNow, Dynamics 365, AzureSQL, Databricks, e mais durante uma conversa, usando as permissões do próprio usuário.
    - **Por que é útil:** Fornece respostas atualizadas, seguras e precisas sem armazenar ou duplicar dados, tornando seu agente mais inteligente e seguro.

1. **Azure AI Search**
    - **O que faz:** Permite que seu agente pesquise grandes conjuntos de documentos armazenados no Azure usando busca semântica e vetorial para entender as perguntas dos usuários.
    - **Por que é útil:** Oferece respostas precisas e confiáveis a partir de fontes de dados complexas, suporta citações e escala bem para grandes coleções de documentos com controles de acesso seguros.

## 🔒 Nota sobre segurança

### Autenticação de fontes de conhecimento

Algumas fontes, como SharePoint e Dataverse, exigem autenticação do usuário. Isso significa que o agente só fará referência a dados em sua resposta que o usuário tem permissão para ver. Outras fontes podem exigir configurações adicionais para que o agente se conecte, como o Azure AI Search, que requer uma conta Azure e especificação de um tipo de autenticação.

## Melhorando as respostas do seu agente no Copilot Studio

Depois que seu agente é provisionado a partir da experiência de criação conversacional, você vai querer testá-lo com base nas instruções que o Copilot gerou a partir do seu prompt. Melhorar as respostas do seu agente no Copilot Studio é sobre garantir que ele entenda claramente seus objetivos e tenha as informações certas para trabalhar.

1. **Refine as instruções do agente** - aqui é onde você diz ao agente como ele deve se comportar. Use linguagem clara e específica.

    Por exemplo:

    ✅ “Aja como um agente de suporte ao cliente amigável que explica as coisas de forma simples.”

    ❌ “Seja útil.” (Muito vago)

1. **Verifique o tom e a linguagem** - certifique-se de que o tom do agente corresponda ao seu público.

    Você pode configurá-lo para ser:

    - Amigável e casual.
    - Profissional e conciso.
    - Solidário e paciente.

1. **Adicione ou atualize fontes de conhecimento** - se seu agente precisar responder perguntas sobre um tópico, certifique-se de que ele tenha acesso às informações certas.

    - Adicione links para websites, documentos ou FAQs.
    - Mantenha o conteúdo atualizado.
    - Use informações claras e bem estruturadas.

1. **Use Tópicos e Gatilhos** - Se seu agente precisar lidar com tarefas ou conversas específicas, você pode criar tópicos com frases de gatilho. Isso ajuda a guiar a conversa com mais precisão. Aprenderemos mais sobre isso na próxima lição.

1. **Teste com perguntas reais** - tente fazer ao seu agente os tipos de perguntas que os usuários podem fazer.

    Se as respostas não forem boas:

    - Ajuste as instruções do sistema.
    - Adicione mais exemplos ou conhecimento.
    - Reformule suas perguntas para ver como ele responde.

1. **Revise e itere** - melhorar um agente é um processo contínuo!

    Após a publicação:

    - Colete feedback dos usuários.
    - Observe perguntas ou confusões comuns.
    - Continue refinando a configuração do agente.

## 🧪 Laboratório 06: Criar um agente personalizado no Copilot Studio

Agora vamos aprender como criar um agente personalizado que pode conversar com base nos seus dados.

- [6.1 Use linguagem natural para criar um agente com o Copilot](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.2 Adicione uma fonte de conhecimento interna usando um site do SharePoint](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.3 Adicione uma fonte de conhecimento interna carregando um documento](../../../../../docs/recruit/06-create-agent-from-conversation)
- [6.4 Teste o agente](../../../../../docs/recruit/06-create-agent-from-conversation)

### ✨ Caso de uso
Usaremos o mesmo caso de uso de [Lição 03 - Criar um agente declarativo para o Microsoft 365 Copilot](../03-create-a-declarative-agent-for-M365Copilot/README.md#use-case-scenario)

**Como** funcionário

**Quero** obter ajuda rápida e precisa do agente da assistência técnica de TI para problemas como problemas de dispositivos, solução de problemas de rede, configuração de impressoras

**Para que eu possa** manter a produtividade e resolver problemas técnicos sem atrasos

Vamos começar!

### ✨ Pré-requisitos

- **Site do SharePoint**

Usaremos o site do SharePoint **Contoso IT** da [Lição 00 - Configuração do Curso - Etapa 3: Criar novo site do SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

Se ainda não configurou o site do SharePoint **Contoso IT**, volte para [Lição 00 - Configuração do Curso - Etapa 3: Criar novo site do SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

- **Solução**

Usaremos a solução **Contoso Helpdesk Agent** da [Lição 04 - Criando uma solução para o seu agente](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

Se ainda não configurou a solução **Contoso Agent**, volte para [Lição 04 - Criando uma solução para o seu agente](../04-creating-a-solution/README.md#41-create-a-solution-publisher).

### 6.1 Usar linguagem natural para criar um agente com o Copilot

!!! warning "As perguntas do Copilot podem variar entre sessões"

    A experiência de criação conversacional do Copilot pode variar a cada vez, onde as perguntas fornecidas para orientação podem ser ligeiramente diferentes das anteriores.

1. Navegue até a página inicial do Copilot Studio e, no campo, insira o seguinte prompt que descreve o agente de assistência técnica de TI. O prompt inclui o objetivo do agente, o contexto, as tarefas esperadas e o formato da resposta do agente.

    ```text
    You are an IT help desk agent. Your goal is to assist users with their IT issues. You can access information from our company's knowledge base at https://support.microsoft.com/en-us. Your responses should be polite and helpful. If a user reports a slow computer, ask about the age of the device, current software versions, and if they've recently installed any new programs. If a user is experiencing trouble logging into their email, guide them through password reset procedures. You should be concise and informative, using step-by-step instructions with bullet points when appropriate.
    ```

      ![Inserir prompt](../../../../../translated_images/6.1_01_Prompt.c4be2ff2cac9fde3659f2e7016e48f01860b55523d3320b3b8450ef2fcb1f51a.pt.png)

1. A experiência de criação conversacional com o Copilot será carregada em seguida. Você verá que o Copilot está processando sua solicitação.

      ![Experiência de criação conversacional do Copilot](../../../../../translated_images/6.1_02_ConversationalCreationExperienceLoads.115eaf4e5a15c1b60bc0d25c97a0d97d462d6c740cfed5de369b2bd8fd1cc8bc.pt.png)

1. O Copilot confirma que o agente foi configurado com as instruções fornecidas e solicita a confirmação do nome do agente. Pediremos ao Copilot para nomear nosso agente como:

       ```text
       Contoso Helpdesk Agent
       ```

      ![Renomear o agente](../../../../../translated_images/6.1_03_AgentName.a848acea10cd1d3d6ba68fea2b0e094ecbd130a124413e3c8134198c81654833.pt.png)

1. O Copilot realiza a solicitação e veremos que o nome do agente foi atualizado no painel do agente. Em seguida, o Copilot solicita que refinemos as instruções. Ele pergunta como devemos responder a problemas específicos e solicitaremos que ele reconheça o problema, forneça exemplos de tópicos para responder e formate a resposta em forma de lista com marcadores.

    Copie e cole o seguinte e envie a solicitação ao Copilot.

       ```text
       Priorize solicitações urgentes. Exemplos de problemas ou cenários de TI para ajudar: problemas com dispositivos, conectividade de rede, problemas de login. Ao solucionar problemas, primeiro reconheça o problema e responda com empatia, depois forneça orientações passo a passo usando marcadores e pergunte se precisam de mais assistência.
       ```

      ![Refinar instruções do agente](../../../../../translated_images/6.1_04_RefineInstructions.9575407dbc12e0399691068d20e0d0252bb8b8f839cf53ee9d715fe2c16afa70.pt.png)

1. As instruções do agente serão atualizadas após o Copilot receber a solicitação. Observe como, no painel à direita, os prompts iniciais agora apareceram. Estes foram formados com base em nossas instruções.

    Em seguida, o Copilot solicita sites públicos para fundamentar o conhecimento do agente.

    Copie e cole o seguinte e envie a solicitação ao Copilot.

      ```text
      https://support.microsoft.com
      ```

      ![Adicionar site público acessível](../../../../../translated_images/6.1_05_KnowledgeSource.3aec8d869b73d273f88c62cf99bb2f731df83a83c1ca54d92d6e96b86a570637.pt.png)

1. O site público será adicionado como uma fonte de conhecimento. O Copilot pergunta se fontes de conhecimento adicionais devem ser adicionadas. Não precisamos adicionar outros sites públicos.

    Copie e cole o seguinte e envie a solicitação ao Copilot.

      ```text
      Proceed with setup
      ```

      ![Continuar com a configuração](../../../../../translated_images/6.1_06_ProceedWithSetup.11ceb9ccccccd19418711681d42b602ee223ebd017d6bf300088de84d1d35f1d.pt.png)

1. O Copilot confirma que a configuração do nosso Contoso Helpdesk Agent está concluída, mas faremos mais uma modificação: vamos solicitar que nosso agente não responda a perguntas relacionadas a RH. Isso informa ao agente que ele não deve responder a perguntas relacionadas a RH feitas pelos usuários.

    Copie e cole o seguinte e envie a solicitação ao Copilot.

       ```text
       Não forneça assistência para perguntas relacionadas a RH, exemplos são: Qual é o saldo dos meus dias de férias? Quantos dias de licença médica eu tenho? Qual é o URL do nosso portal de folha de pagamento?
       ```

      ![Não responder a perguntas relacionadas a RH](../../../../../translated_images/6.1_07_DoNotTalkAbout.d9ccbbd15b9793e1642b365be6968548f6f250be5d541f1ad06eb9f12985e94f.pt.png)

1. As instruções serão atualizadas para não fornecer assistência com perguntas relacionadas a RH. Não precisamos fazer mais atualizações, nosso agente está pronto para ser criado.

      ![Instruções do agente atualizadas](../../../../../translated_images/6.1_08_AgentInstructionsUpdated.4de1112eeb5c8e2e2fe03fcbc6d332bdc3b1de740d9a5ab6b1ec30e27e241096.pt.png)

1. Antes de criar nosso agente, vamos fazer algumas coisas.

    Primeiro, selecione a aba **Configurar** para visualizar os detalhes do agente definidos a partir de nossa conversa com o Copilot. Aqui você verá o Nome, Descrição, Instruções, Conhecimento e Prompts sugeridos/iniciais.

      ![Visualizar detalhes do agente](../../../../../translated_images/6.1_09_ViewAgentDetails.72c7f66721d6ac354bcc7186204bb0ad169456b0b7756f5e5a5e0f090e802a57.pt.png)

1. Em segundo lugar, vamos testar nosso agente. Copie e cole o seguinte e envie a pergunta ao nosso agente.

       ```text
       Como posso verificar o status da garantia do meu Surface?
       ```

      ![Testar agente](../../../../../translated_images/6.1_10_TestAgent.8b1a0f1d98f4fa5b61336e1c4ac6d77b4822283314c2941cb0e04bf5247d8489.pt.png)

1. A resposta à pergunta será exibida, onde as respostas estão no formato de um guia passo a passo usando marcadores. Ótimo, nosso agente funciona! 🙌🏻

      ![Resposta do agente](../../../../../translated_images/6.1_11_AgentResponse.c5fb305335b8e9b456b0f75ec9e237d4abbc3e9a1a6976e14bb656f1adffb14a.pt.png)

1. Por fim, verificaremos se a solução na qual nosso agente será criado é a solução que criamos e selecionamos como solução preferida na [Lição 04 - Criar uma nova solução](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Selecione o **ícone de reticências (...)** e escolha **Atualizar Configurações Avançadas**.

      ![Atualizar Configurações Avançadas](../../../../../translated_images/6.1_12_UpdateAdvancedSettings.5943949ae7c9f492fb90779b0284283deb4186f14cd6588c46920f8e50d8d6d0.pt.png)

1. O modal **Configurações Avançadas** aparecerá e podemos ver que nossa solução criada anteriormente está selecionada por padrão. Isso ocorre porque selecionamos nossa solução como a solução preferida na [Lição 04 - Criar uma nova solução](../04-creating-a-solution/README.md#42-create-a-new-solution).

    Selecione **Cancelar.**

      ![Visualização das Configurações Avançadas](../../../../../translated_images/6.1_13_AdvancedSettings.fff0861831346d5bef4e7731fed83073aca6d17aa940633040f65b1f300aee15.pt.png)

1. Agora vamos criar nosso agente personalizado! Selecione **Criar**.

      ![Selecionar Criar](../../../../../translated_images/6.1_14_CreateAgent.7330a5fbe44a0664f35c5b5502e499f6dd3bad55d13094ef6c22608e8f8831b1.pt.png)

1. O Copilot Studio começará a provisionar nosso agente.

      ![Configurando agente](../../../../../translated_images/6.1_15_SettingUpAgent.34028a37bc2922eae13d0a18bb468bd738608b4de948192d89c3a2680fff2496.pt.png)

1. Assim que nosso agente for provisionado, podemos ver os detalhes do agente refletindo o que solicitamos durante nossa experiência de criação conversacional com o Copilot. Role para baixo para revisar o agente, onde você verá o nome, descrição, instruções, as fontes de conhecimento e os prompts sugeridos. O modo de orquestração está ativado por padrão e o modelo padrão é usado para o modelo de resposta do agente.

      ![Agente criado](../../../../../translated_images/6.1_16_AgentCreated.91edb1939b33d158930cd385c0d97c320958504e224ffc163ed5030b0cdc72a7.pt.png)

      ![Fontes de conhecimento](../../../../../translated_images/6.1_17_KnowledgeSources.00f1ed0b7f405e4820971834fb75e39a80659cf1b9eeeee42d861bfc4656240f.pt.png)

      ![Prompts sugeridos](../../../../../translated_images/6.1_18_SuggestedPrompts.20b84b9420858de8485460cc50a8e73798b08bb2022c946899adcbf9b484e0f0.pt.png)

1. Agora vamos testar nosso agente recém-criado. No painel **Testar** à direita, selecione o ícone **Mapa de Atividades**.

      ![Selecionar Mapa de Atividades](../../../../../translated_images/6.1_19_ActivityMap.b2e6c77c69fd953818dc73b4dbe2e6d46529cf105d7a4a18c590d15c0b717cf4.pt.png)

1. Insira a seguinte pergunta no painel **Testar**.

       ```text
       Como encontro a chave do produto do meu Windows 11?
       ```

      ![Testar agente recém-criado](../../../../../translated_images/6.1_20_TestAgent.a9d3a761477c9b79facd132c173ec886d808320ad2cbc0347066a20c0f9dd669.pt.png)

1. O Mapa de Atividades será carregado, mostrando em tempo real o caminho que o agente está processando. Neste cenário, nosso agente entendeu a pergunta e está pesquisando nas fontes de conhecimento. Atualmente, temos uma fonte, que é o site público que adicionamos anteriormente usando o Copilot, que é o que o agente está revisando.

      ![Revisando fontes de conhecimento](../../../../../translated_images/6.1_21_ReviewingSources.78068042898e2960667393c931e120dbe80f6b74c9af222b79446f7a82d5c757.pt.png)

1. Nosso agente então responde com respostas que estão delineadas como marcadores, conforme definido nas instruções. A resposta tem referências às páginas da web das quais o agente formou sua resposta. Isso permite que os usuários verifiquem a fonte da resposta.

      ![Referências na resposta](../../../../../translated_images/6.1_22_Response.44a088e80f2a9fac74bcd364571f1ebb900b43e9e647089ef51d39b809b0f0e9.pt.png)

1. Você também pode revisar a resposta e suas fontes rolando para baixo no **modal de Conhecimento** no Mapa de Atividades.

      ![Fontes referenciadas](../../../../../translated_images/6.1_23_ReferencedSources.ca8e41855284446d121a34fd9d8d667e05016f5eda741adcf7f356ac2c59c559.pt.png)

Parabéns! Você criou seu primeiro agente personalizado com o Copilot no Copilot Studio 🙌🏻

### 6.2 Adicionar uma fonte de conhecimento interna usando um site do SharePoint

Anteriormente, com o Copilot, adicionamos um site público como uma fonte de conhecimento externa para nosso agente durante a experiência de criação conversacional. Agora vamos adicionar uma fonte de conhecimento interna usando um site do SharePoint. Este será o site do SharePoint que você criou durante [Lição 00 - Configuração do Curso](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. Selecione **+ Adicionar conhecimento**.

      ![Selecionar Adicionar conhecimento](../../../../../translated_images/6.2_01_AddKnowledge.5e441f7e3b0ebb25218bece75394ecf4c8c3a60e1b5d8ea15ca020546352f256.pt.png)

1. Selecione **SharePoint**.

      ![Selecionar SharePoint](../../../../../translated_images/6.2_02_SelectSharePoint.5bd29d31cc76f581db3eef474731fc2dfce4ef1dab86d9cc11716323ba726408.pt.png)

1. Cole o **endereço do site do SharePoint** criado em [Lição 00 - Configuração do Curso](../00-course-setup/README.md#step-4-create-new-sharepoint-site) no campo URL do SharePoint e selecione **Adicionar**.

      ![Inserir URL do site do SharePoint](../../../../../translated_images/6.2_03_AddSharePointURL.974c251d9690524a8bfa4c9dd930af3d834245749fb9f1fda508c3b1f9773827.pt.png)

1. Atualize o **nome** do site do SharePoint para `Contoso IT` e selecione **Adicionar**.

      ![Atualizar nome do site do SharePoint e adicionar ao agente](../../../../../translated_images/6.2_04_UpdateNameAddToAgent.46a814c09586fe135bffb77814ba13d0593f25feaaa989174c97e80345f03866.pt.png)

1. O site do SharePoint agora foi adicionado como uma fonte de conhecimento com o status _Pronto_. A coluna Status mostrará se a fonte de conhecimento foi carregada/conectada com sucesso ou se há algum problema.

      ![Status do site do SharePoint](../../../../../translated_images/6.2_05_SharePointStatus.90a9001978f31c5d4b183d5ecc4869c81dd9fc1bb8a6b1ef4675fcb51d52f8e5.pt.png)

### 6.3 Adicionar uma fonte de conhecimento interna carregando um documento

Agora vamos adicionar outra fonte de conhecimento interna carregando um documento diretamente para o nosso agente.

1. Selecione **Adicionar conhecimento**.

      ![Selecionar Adicionar conhecimento](../../../../../translated_images/6.3_01_AddKnowledge.d93caa805efb7e2a433d9777f8eb1789dc5daf4f9ebe95da2a74a2b57cffdd33.pt.png)

1. Selecione **Carregar arquivo** ou **Selecionar para procurar**.

      ![Selecionar carregar arquivos](../../../../../translated_images/6.3_02_UploadFile.662de4f3916bfa3f34a6699a9a45846e64e71a70dfecbc656fb5b511792de6b6.pt.png)

1. Baixe este [arquivo de exemplo](../../../../../docs/recruit/06-create-agent-from-conversation/assets/Contoso_Guest_WiFi_Connection_Guide.docx "download") e selecione-o no seu Explorador de Arquivos. Selecione **Abrir**.

      ![Selecionar documento](../../../../../translated_images/6.3_03_SelectFile.077d73491dc6ff1f6114d259261ee68334c4da182c3b55233468637d1989f14c.pt.png)

1. O arquivo foi selecionado para upload. Em seguida, selecione **Adicionar ao agente**.

      ![Selecionar Adicionar ao Agente](../../../../../translated_images/6.3_04_AddToAgent.1eec469d6d28c22959c8d7f3ad39aa0df5e07adfdb85ce1e21c0c4fe31c27db5.pt.png)

1. O documento estará no processo de ser adicionado ao agente. Aguarde até que o upload seja concluído, não feche a janela do navegador. O status do documento inicialmente mostrará como _Em progresso_, aguarde até que o status seja atualizado para **Pronto** antes de testar seu agente.

      ![Status do arquivo](../../../../../translated_images/6.3_05_FileStatus.2029b8aa0109a6f46372291e9bba33429c2ebd572efa81702a73cae91fbf3a90.pt.png)

Agora vamos testar nosso agente!

### 6.4 Testar agente

Testaremos nossas três fontes de conhecimento fazendo perguntas ao nosso Contoso Helpdesk Agent.

1. Selecione o ícone **atualizar** no painel de teste, seguido de selecionar o ícone **Mapa de Atividades**.

      ![Ícone de atualizar](../../../../../translated_images/6.4_01_RefreshAndActivityMap.c24ebc6c277786dab75941dac0b6e55f3dbb244b29fb791c87e4aba5c4a56c81.pt.png)

1. Insira a seguinte pergunta para testar nossa fonte de conhecimento do site público (externa).

      ```text
      How can I find the serial number on my Surface device?
      ```

      ![Inserir prompt para testar fonte de conhecimento do site](../../../../../translated_images/6.4_02_TestQuestion1.3a5aeaaa72a9578a05edd4575275e1ba60ecaf8c7377ab13872619580e0309f9.pt.png)

1. Em seguida, você verá o agente revisando as fontes de conhecimento e fornecendo uma resposta usando a fonte de conhecimento do site.
![Página web referenciada na resposta](../../../../../translated_images/6.4_03_ReviewingSources.a56742505402eab51b423b543c814242728ff7947e443360740b3e5dac82ba65.pt.png)

1. Uma resposta será retornada e repare como há referências à página web da qual foi formada a resposta. Se você rolar para baixo no modal de conhecimento no mapa de atividades, verá as outras fontes de conhecimento que o agente pesquisou, que são o site do SharePoint e o ficheiro carregado.

   No entanto, estas não foram utilizadas, pois na secção **Fontes referenciadas**, apenas a fonte de conhecimento do site foi mencionada. A resposta foi fundamentada utilizando a fonte de conhecimento do site. Se selecionar as referências, será direcionado para a página web.

![Fontes de conhecimento referenciadas e pesquisadas](../../../../../translated_images/6.4_04_ReferencedSources.2fb91e8ed7cac8196c3cc1e43006512d4138adb4f240bdab66cd2af5fd1ec7c6.pt.png)

1. Vamos agora testar tanto a fonte de conhecimento do site do SharePoint quanto a fonte de conhecimento do documento numa única mensagem. Insira a seguinte pergunta.

      ```text
      How can I access our company Contoso VPN? How do guests connect to the Contoso Guest wifi?
      ```

![Testar fontes de conhecimento do SharePoint e do documento](../../../../../translated_images/6.4_05_TestQuestion2.f77ce87578b59386ec5491716996aff9247c5e5ad458a51226276238adb282f3.pt.png)

1. Mais uma vez, verá o agente a rever as três fontes de conhecimento para gerar uma resposta às perguntas da nossa única mensagem. O agente responde a ambas as perguntas numa única mensagem e referencia separadamente a página do SharePoint e o documento de onde gerou a sua resposta.

   No modal de conhecimento no mapa de atividades, verá o site do SharePoint e o documento utilizados como fontes de referência. Tem total visibilidade das fontes de conhecimento que foram usadas para responder às duas perguntas.

![Fontes de conhecimento referenciadas](../../../../../translated_images/6.4_06_ReferencedSources.caf049dac28b4317c39b074b481f5d7d5b1b92fd792fc4b796fec0c1575f9581.pt.png)

1. É sempre bom verificar se a resposta gerada está correta. Selecione a referência do site do SharePoint e a página de FAQs do SharePoint será carregada, onde poderá rolar para baixo e rever as instruções de VPN.

![Rever página do SharePoint](../../../../../translated_images/6.4_07_VerifySharePoint.6ee48515fedf37a62564ddc388c2452751ed5777cda321d887c315c2de78d293.pt.png)

1. Em seguida, selecione a referência do documento e um modal aparecerá com o texto do documento que reflete a resposta.

![Rever documento](../../../../../translated_images/6.4_08_VerifyDocument.0f0680b63e6bdd0b558eb287e85965b87ab820e12b25b1e0965f8ebbde795222.pt.png)

O agente pode responder a várias perguntas numa única mensagem, pesquisar nas fontes de conhecimento e referenciar essas fontes na sua resposta. Certifique-se sempre de verificar se a resposta está correta, revisando as referências.

## ✅ Missão Concluída

Parabéns! 👏🏻 Aprendeu como usar linguagem natural para criar o seu próprio agente personalizado que pode conversar sobre os seus dados provenientes de três diferentes fontes de conhecimento 🙌🏻

Este é o fim de **Laboratório 06 - Criar um agente com Copilot**, selecione o link abaixo para avançar para a próxima lição. O agente personalizado criado neste laboratório será usado no laboratório da próxima lição.

⏭️ [Avançar para a lição **Adicionar um novo tópico com gatilho**](../07-add-new-topic-with-trigger/README.md)

Bem-vindo à elite. Agora sabe como criar agentes digitais que falam a sua língua, referenciam os seus dados e apoiam a sua equipa. Continue—a sua missão está apenas a começar.

## 📚 Recursos Táticos

🔗 [Introdução rápida: Criar e implementar um agente](https://learn.microsoft.com/microsoft-copilot-studio/fundamentals-get-started?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172617-ebenitez)

🔗 [Criar e eliminar agentes](https://learn.microsoft.com/microsoft-copilot-studio/authoring-first-bot?WT.mc_id=power-172617-ebenitez)

🔗 [Conceitos-chave - Criação de agentes](https://learn.microsoft.com/microsoft-copilot-studio/authoring-fundamentals/?WT.mc_id=power-172617-ebenitez)

📺 [Criar um agente personalizado usando linguagem natural](https://aka.ms/ai-in-action/copilot-studio/ep1)

📺 [Adicionar conhecimento aos seus agentes](https://aka.ms/ai-in-action/copilot-studio/ep2)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/06-create-agent-from-conversation" alt="Analytics" />

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.