<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-18T02:46:21+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "pt"
}
-->
# 🚨 Missão 07: Adicionar novo tópico com gatilho e nós

## 🕵️‍♂️ NOME DE CÓDIGO: `OPERAÇÃO MANTER O FOCO`

> **⏱️ Janela de Tempo da Operação:** `~60 minutos`

🎥 **Assista ao Tutorial**

[![Miniatura do vídeo de gatilho](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.pt.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Assista ao tutorial no YouTube")

## 🎯 Resumo da Missão

Você criou um agente. Ele escuta, aprende e responde perguntas - mas agora é hora de ser mais estratégico. Nesta missão, você vai mergulhar fundo e ensinar seu agente a responder a solicitações específicas com precisão.

Com Tópicos e Gatilhos, seu agente pode:

- Reconhecer intenções

- Direcionar conversas com lógica

- Coletar e armazenar variáveis

- Acionar fluxos e tomar ações

Você não está apenas construindo diálogos, está conectando o núcleo de tomada de decisões do agente. Bem-vindo ao Nexus Neural.

## 🔎 Objetivos

Nesta missão, você aprenderá:

1. Compreender o que são tópicos e seu papel na criação de conversas estruturadas para o seu agente
1. Aprender a anatomia dos tópicos, incluindo frases de gatilho e nós de conversa
1. Explorar diferentes tipos de nós de conversa e como usar Power Fx para lógica dinâmica
1. Criar tópicos personalizados do zero para lidar com solicitações e tarefas específicas dos usuários
1. Construir um tópico funcional que se conecta a dados do SharePoint usando conectores e ferramentas

## 🤔 O que é um Tópico?

Um tópico é uma conversa estruturada que ajuda seu agente a responder a perguntas ou tarefas específicas dos usuários. Pense em um tópico como uma mini-conversa ou tarefa que seu agente pode realizar. Cada tópico é projetado para responder a uma pergunta ou solicitação específica do usuário.

### 🌌 Propósito de um tópico

Existem três propósitos comuns para os tópicos, com base nas necessidades dos usuários:

**Informativo** - responde a perguntas como:

- `O que é …?`
- `Quando será …?`
- `Por que …?`
- `Pode me dizer …?`

**Conclusão de tarefa** - ajuda os usuários a _fazerem_ algo:

- `"Quero …"`
- `"Como faço para …?"`
- `"Preciso de …?"`

**Resolução de problemas** - resolve problemas:

- `Algo não está funcionando …`
- `Estou recebendo uma mensagem de erro …`
- `Estou vendo algo inesperado …?`

Você também pode criar tópicos para perguntas ambíguas como `Preciso de ajuda`, que pedem mais detalhes aos usuários antes de continuar.

## 🐦 Por que os tópicos são úteis?

Os tópicos ajudam você a:

- Organizar o conhecimento do seu agente.

- Tornar as conversas mais naturais.

- Resolver problemas dos usuários de forma eficaz.

## 🪺 Tipos de tópicos

1. **Tópicos do sistema** - são integrados e lidam com eventos comuns, como:
    - Iniciar uma conversa
    - Encerrar uma conversa
    - Lidar com erros
    - Pedir aos usuários para fazer login
    - Escalar para um agente humano

1. **Tópicos personalizados** - você os cria para lidar com tarefas ou perguntas específicas, como:
    - Solicitação de licença de funcionário
    - Solicitação de novo dispositivo ou substituição

![Tipos de tópicos](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.pt.png)

## 🧬 Anatomia de um tópico

Cada tópico geralmente contém o seguinte.

### 🗣️ Frases de gatilho

São palavras ou frases que os usuários podem dizer para iniciar o tópico.

**Exemplos:**

Para um tópico de solicitação de licença, as frases de gatilho podem ser:

- `Quero tirar férias`
- `Solicitar férias`
- `Pedir folga`
- `Como faço para solicitar uma licença?`

Para um tópico de solicitação de dispositivo, as frases de gatilho podem ser:

- `Preciso de um novo dispositivo`
- `Posso solicitar um dispositivo?`
- `Pode ajudar-me com uma solicitação de dispositivo?`

### 💬 Nós de conversa

Um tópico é composto por nós, que são etapas que o agente segue uma vez que o tópico é acionado. Você conecta essas etapas para construir um fluxo de conversa que seu agente segue ao interagir com os usuários.

Pense neles como instruções ou ações, como:

- Fazer perguntas ao usuário
- Enviar mensagens
- Chamar um serviço externo, como um sistema de gestão de licenças
- Definir ou verificar variáveis
- Usar condições para ramificar a conversa
- Direcionar para outro tópico

![Nós de conversa](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.pt.png)

Os seguintes são os principais tipos de nós que você pode adicionar a um agente:

#### Enviar uma mensagem

- **Propósito** - envia uma mensagem ao usuário.
- **Exemplo** - `Obrigado pela sua solicitação! Vou ajudá-lo com isso.`

Este nó permite que seu agente envie mensagens aos usuários, que podem ser texto simples ou conteúdo rico, como imagens, vídeos, cartões, respostas rápidas e cartões adaptativos.

Você pode personalizar mensagens usando variáveis, adicionar várias variações de mensagens para variedade e até mesmo personalizar a saída de voz para canais habilitados para voz.

!!! tip
    Pense nisso como um bloco de "dizer algo" que ajuda seu agente a se comunicar de forma clara e interativa com os usuários.

#### Fazer uma pergunta

- **Propósito** - faz uma pergunta ao usuário e aguarda sua resposta.
- **Exemplo** - `Quais são as suas datas de férias?`

Este nó é usado para perguntar informações específicas aos usuários durante uma conversa e armazenar suas respostas em variáveis para uso posterior.

Você pode personalizar o tipo de pergunta, como entrada de texto, ou usar entidades para uma lista definida de valores que o usuário seleciona, além de definir como o agente deve se comportar caso o usuário forneça uma resposta inválida ou pule a pergunta.

Também suporta conteúdo rico, como imagens e respostas rápidas, e permite ajustar configurações de validação, repetição e interrupção para que o fluxo da conversa seja suave.

!!! tip
    Pense nisso como um bloco de "perguntar e ouvir" que ajuda seu agente a interagir com os usuários de forma estruturada e definida por você.

#### Perguntar com cartão adaptativo

- **Propósito** - envia um cartão interativo e rico usando JSON.
- **Exemplo** - um cartão que exibe um seletor de data de calendário para o usuário escolher uma data.

Este nó exibe cartões interativos e ricos que os usuários podem preencher e enviar, como formulários com caixas de texto, botões e imagens. Ele captura as entradas do usuário e as armazena em variáveis, que seu agente pode usar posteriormente na conversa.

!!! tip
    Pense nisso como um bloco de "construtor de formulários" personalizável que torna seu agente mais envolvente e capaz de coletar informações detalhadas dos usuários.

#### Adicionar uma condição

- **Propósito** - adiciona lógica à conversa. Verifica algo e decide o que fazer a seguir.
- **Exemplo** - se o usuário disser `Sim`, vá para a próxima etapa. Se `Não`, encerre a conversa.

Este nó cria pontos de decisão no fluxo de conversa do seu agente, verificando se uma variável atende a determinados critérios. Com base em se a condição é verdadeira ou falsa, o agente segue caminhos diferentes.

!!! tip
    Pense nisso como um bloco de "se-então" que ajuda seu agente a tomar decisões com base na entrada do usuário ou nos dados armazenados em variáveis.

#### Gestão de variáveis

- **Propósito** - armazena ou limpa informações (chamadas variáveis) durante a conversa.
- **Exemplo** - salva a data selecionada pelo usuário no nó Fazer uma pergunta que exibe um cartão adaptativo.

Este nó permite que você armazene e gerencie informações durante uma conversa, como o nome, resposta ou preferências do usuário. Você pode usar diferentes tipos de variáveis, como texto, números ou datas, e elas podem ser limitadas a um único tópico, compartilhadas entre tópicos (globais) ou até mesmo extraídas do sistema ou ambiente.

!!! tip
    Pense nisso como uma "caixa de memória" que ajuda seu agente a lembrar informações e usá-las conforme a conversa com o usuário avança.

#### Gestão de tópicos

- **Propósito** - move a conversa para outro tópico ou etapa dentro do tópico, transfere a conversa ou encerra o tópico ou a conversa.
- **Exemplo** - redirecionar para um tópico "Política de Licenças".

Este nó permite que seu agente passe de um tópico para outro sem reiniciar a conversa, encerre o tópico, transfira ou encerre a conversa, ou vá para uma etapa diferente dentro do mesmo tópico. Ele ajuda a guiar os usuários por diferentes partes do fluxo de conversa, fazendo transições suaves entre tópicos, e você pode passar variáveis entre eles para manter o contexto.

!!! tip
    Pense nisso como um bloco de "ir para outra seção/etapa" que ajuda seu agente a ser flexível ao conversar com os usuários.

#### Adicionar uma ferramenta

- **Propósito** - conecta-se a ferramentas como conectores, fluxos de agente, prompts, pesquisa personalizada, consulta de pesquisa, habilidades, protocolo de contexto de modelo.
- **Exemplo** - Fluxo de agente executado após o usuário enviar sua solicitação de licença de férias.

Este nó dá ao seu agente capacidades para interagir com sistemas externos ou realizar tarefas específicas, como enviar e-mails, verificar o clima ou acessar bancos de dados. Você pode adicionar ferramentas usando conectores integrados, APIs personalizadas, fluxos de agente, prompts ou conectar-se a servidores do Protocolo de Contexto de Modelo (MCP), e até mesmo automação de interface gráfica para aplicativos de desktop através da ferramenta de uso do computador.

!!! tip
    Pense nas ferramentas como "blocos de ação" que dão superpoderes ao seu agente para fazer coisas além de _conversar_, como chamar uma API, executar um processo ou coletar automaticamente entradas do usuário.

#### Nó de respostas gerativas

- **Propósito** - usa um modelo de linguagem grande para gerar respostas naturais e semelhantes às humanas com base na pergunta do usuário e em quaisquer dados conectados.
- **Exemplo** - usa a fonte de conhecimento conectada que contém informações sobre direitos de licença de férias para responder às perguntas dos usuários sobre solicitações de férias.

Este nó permite que seu agente responda às perguntas dos usuários usando informações de várias fontes de conhecimento, como websites, documentos, SharePoint ou dados personalizados. Ele pode ser usado como um recurso de apoio quando nenhum tópico correspondente for encontrado ou dentro de um tópico para fornecer respostas mais detalhadas e dinâmicas com base em fontes específicas que você configurou para o seu agente usar.

!!! tip
    Pense nisso como um "bloco de resposta inteligente" que ajuda seu agente a fornecer respostas úteis e precisas ao buscar conteúdo confiável que você define.

#### Nó de solicitação HTTP

- **Propósito** - conecta seu agente a sistemas externos enviando chamadas de API (por exemplo, `GET` ou `POST`) para buscar ou atualizar dados.
- **Exemplo** - quando um usuário pergunta sobre o saldo de seus dias de férias, o agente realiza uma solicitação `GET` ao sistema de gestão de licenças, extrai o `remainingLeaveDays` da resposta da API e responde ao usuário com o valor.

Este nó permite que seu agente se conecte a sistemas externos enviando chamadas de API REST, como solicitações `GET` ou `POST`. Você pode personalizar a solicitação com cabeçalhos, conteúdo do corpo e até usar Power Fx para incluir dados dinâmicos, armazenando a resposta em variáveis para uso posterior na conversa.

!!! tip
    Pense nisso como um bloco de "buscar informações" que ajuda seu agente a se comunicar com outros serviços, como recuperar detalhes do usuário ou enviar dados para outro sistema.

#### Enviar um evento

- **Propósito** - permite que seu agente envie ações não relacionadas a mensagens, como atualizações de sistema ou gatilhos de ferramentas - para o cliente ou canal, ajudando-o a realizar tarefas.
- **Exemplo** - reagir a um usuário que entra no chat exibindo uma mensagem de boas-vindas.

Este nó permite que seu agente envie ações não relacionadas a mensagens para sistemas ou canais externos, que podem então decidir como responder. Você dá a cada evento um nome e atribui um valor, que pode ser um número ou texto simples, uma variável ou uma fórmula Power Fx, e ele é enviado como um objeto JSON.

!!! tip
    Pense nisso como um bloco de "gatilho silencioso" que ajuda seu agente a realizar tarefas nos bastidores ou se comunicar com ferramentas externas sem precisar que o usuário diga algo.

## 🏋🏻‍♀️ Usando Power Fx nos seus nós

No Copilot Studio, Power Fx é uma linguagem de programação de baixo código usada para adicionar lógica e comportamento dinâmico ao seu agente. É a mesma linguagem usada no Microsoft Power Apps e foi projetada para ser simples e semelhante ao Excel, facilitando para desenvolvedores e não desenvolvedores.

![Expressão Power Fx](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.pt.png)

### O que o Power Fx pode fazer em tópicos

- Definir e manipular variáveis
      - Exemplo: `Set(userName, "Adele Vance")`
- Criar condições
      - Exemplo: `If(score > 80, "Aprovado", "Reprovado")`
- Formatar e transformar dados
      - Exemplo: `Text(DateValue, "dd/mm/yyyy")`

### Por que usar Power Fx?

- **Flexível:** você pode construir lógica sem escrever linhas completas de código.

- **Familiar:** se você já usou fórmulas do Excel, será muito semelhante.

- **Poderoso:** permite personalizar conversas, validar entradas e controlar como seu agente se comporta com base nos dados do usuário.

## 🏗️ Como criar e editar tópicos?

Existem duas maneiras de criar e editar tópicos para seus agentes.

### 1. Criar do zero

Isso permite que você construa fluxos de conversa personalizados do zero, e você pode adicionar ou remover nós conforme necessário ao editar seu tópico.

![Adicionar um tópico](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.pt.png)

#### Por que isso é útil

- Dá a você controle total sobre como seu agente responde.
- Você pode personalizar a lógica usando variáveis, Power Fx e condições.
- É perfeito para criar experiências personalizadas para necessidades específicas de negócios.

### 2. Criar com Copilot
Isto permite-lhe descrever o que deseja utilizando linguagem natural, e o Copilot criará a conversa para si. O mesmo se aplica ao editar o seu tópico: use linguagem natural e o Copilot revisará e modificará o tópico para si.

#### O que o Copilot suporta

- Pode criar e editar:
      - Nós de mensagem
      - Nós de pergunta
      - Nós de condição
- Não suporta configurações avançadas, como o que fazer para repedir a pergunta ao utilizador caso ele não responda ou como gerir interrupções durante uma pergunta. Ainda assim, pode ajustar essas configurações manualmente, se necessário.

#### Por que isto é útil

- Acelera o desenvolvimento com assistência de IA.
- Permite que se concentre na lógica e na experiência do utilizador, em vez de configurações repetitivas.
- Facilita a iteração e melhoria dos fluxos de conversa com esforço mínimo.

#### ✨ Exemplos de prompts

- **Criar um tópico**
      - `Aceitar o nome, idade e data de nascimento de um utilizador e depois repetir as respostas para ele`
      - `Recolher o endereço, estado e código postal de um utilizador. O utilizador deve poder tentar novamente cada pergunta até 4 vezes`

- **Editar um tópico**
      - `Adicionar uma pergunta pedindo a data de nascimento do utilizador`
      - `Resumir as informações recolhidas num Adaptive Card.`

## 👩🏻‍🎨 Ok, como posso desenhar tópicos para o meu agente?

### 🧙🏻‍♂️ Passo 1 - Entender o que os utilizadores precisam

Comece por identificar perguntas ou tarefas comuns que os utilizadores irão pedir ao seu agente. Estas podem ser:

- Perguntas que os utilizadores fazem frequentemente, como `qual é o meu direito a dias de baixa médica?`
- Tarefas comuns que os utilizadores querem realizar, como submeter um formulário
- Problemas que os utilizadores enfrentam frequentemente, como questões de login

### 📦 Passo 2 - Agrupar os cenários

Organize as necessidades dos utilizadores em três categorias com base no que aprendemos anteriormente - o propósito de um tópico:

- Informativo - o utilizador quer saber algo
- Conclusão de tarefa - o utilizador quer realizar algo
- Resolução de problemas - o utilizador precisa de ajuda para resolver um problema

### 🗺️ Passo 3 - Mapear a conversa

Desenhe um fluxo de conversa simples sobre como o agente deve responder:

- Comece com uma saudação ou confirmação
- Faça perguntas de seguimento para obter detalhes
- Forneça respostas ou realize ações

!!! tip
    Mantenha a conversa curta e focada. Pergunte apenas o que for necessário.

### 🔀 Passo 4 - Lidar com diferentes tipos de conversa

Projete para ambos:

- **Interação única** - uma pergunta, uma resposta

- **Interação múltipla** - uma conversa de ida e volta com perguntas de seguimento

Exemplo:

- Utilizador: `Quero pedir licença para férias.`

- Agente: `Claro! Qual data gostaria que a sua licença começasse?`

- Utilizador: `15 de julho`

- Agente: `Entendido. E quando a sua licença terminará?`

- Utilizador: `22 de julho.`

- Agente: `Obrigado! Qual é o motivo da sua licença?`

- Utilizador: `Férias em família.`

- Agente: `Obrigado pelos detalhes. Submeti o seu pedido de licença de 15 a 22 de julho para férias em família. Receberá uma confirmação em breve.`

### 🤖 Passo 5 - Usar IA para perguntas inesperadas

Mesmo que tenha projetado um tópico para pedidos de licença, os utilizadores podem fazer perguntas que não estão diretamente cobertas. É aqui que recursos de IA, como o sistema de _Conversational boosting_, são úteis.

Este tópico inclui um nó de respostas generativas, que permite ao seu agente começar a usar fontes de conhecimento conectadas imediatamente. Qualquer fonte de conhecimento adicionada ao nível do agente é automaticamente incluída no nó de respostas generativas dentro do tópico de sistema _Conversational boosting_.

#### Exemplo

- Utilizador: `Posso transferir dias de férias não utilizados para o próximo ano?`

Esta pergunta pode não fazer parte do fluxo de tópico pré-definido, especialmente se o seu tópico apenas tratar de pedidos de licença.

#### Como a IA ajuda

Se o seu agente estiver conectado aos documentos de política de RH da sua empresa ou ao site interno, a IA pode:

- Procurar a política de licença relevante
- Compreender e resumir as regras
- O agente responde com: `De acordo com a política de RH, pode transferir dias de férias não utilizados para o próximo ano civil. Para mais detalhes, consulte a secção de política de licença no portal de RH.`

#### Por que isto é útil

- Não precisa criar manualmente um tópico para cada pergunta relacionada à política.
- A IA pode obter respostas precisas de fontes de conhecimento confiáveis.
- Melhora a experiência do utilizador, tornando o agente mais inteligente e responsivo.

### 🔬 Passo 6 - Testar o tópico, o fluxo de conversa

Antes de publicar o seu tópico:

- Teste usando perguntas reais ou entradas de exemplo reais.
- Certifique-se de que soa natural e útil.

!!! tip
    Aplique melhorias ao seu tópico conforme testa, como adicionar mais nós ou remover nós em favor de redirecionar para outro tópico.

### ⚠️ Passo 7 - Evitar duplicar conteúdo do site

Não copie o que já está no seu site.

- Foque-se em tópicos que os utilizadores perguntam frequentemente.
- Adicione novos tópicos com base no histórico de conversas ou pedidos de suporte.

### ✨ Exemplo de fluxo de conversa

Abaixo está um exemplo de um tópico que trata de pedidos de licença.

#### Passo 1: Frase de ativação

O utilizador digita,

`Quero pedir licença para férias`

#### Passo 2: O agente pede detalhes usando um Adaptive Card

O agente pergunta,

`Claro! Quais datas gostaria de tirar folga?`

O Adaptive Card tem um controlo de seleção de calendário para data de início e fim.

#### Passo 3: O utilizador fornece as datas

O utilizador seleciona a data de início como 5 de agosto de 2025 e a data de fim como 10 de agosto de 2025, e submete o cartão. Os valores das datas são armazenados na saída do Adaptive Card como variáveis.

#### Passo 4: Fluxo na nuvem executado

Um fluxo na nuvem do Power Automate foi executado, criando um novo pedido no sistema de gestão de licenças e enviando um email para notificar o gestor sobre o pedido de licença.

#### Passo 5: Enviar uma mensagem de confirmação ao utilizador

O agente responde com,

`O seu pedido de licença de férias de 5 a 10 de agosto foi submetido. O seu gestor irá analisar e responder em breve.`

## 🧪 Laboratório 07 - Adicionar um novo tópico com nós de conversa

Agora vamos aprender como adicionar um novo tópico com uma ativação e ferramentas. Este laboratório abordará a criação de um tópico do zero para que compreenda como personalizar tópicos de acordo com as suas necessidades.

- [7.1 Adicionar um novo tópico do zero](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Definir as entradas e saídas da ativação](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Adicionar uma ferramenta usando um conector](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Caso de uso

**Como** funcionário

**Quero** saber quais dispositivos estão disponíveis

**Para que** eu tenha uma lista de dispositivos disponíveis

Vamos começar!

### Pré-requisitos

1. **Lista do SharePoint**

    Vamos usar a lista **Devices** do SharePoint do [Lesson 00 - Course Setup - Step 3: Create new SharePoint site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Se ainda não configurou a lista **Devices** do SharePoint, por favor, volte para [Lesson 00 - Course Setup - Step 3: Create new SharePoint site](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agente de Suporte da Contoso**

    Vamos usar o mesmo agente criado anteriormente em [Lesson 06 - Create a custom agent using natural language with Copilot and grounding it with your data](../06-create-agent-from-conversation/README.md).

### 7.1 Adicionar um novo tópico do zero

1. Selecione o **separador Tópicos** próximo ao nome do agente. Se não o vir visível, selecione **+6** e verá **Tópicos** listado.

    ![Selecionar Tópicos](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.pt.png)

1. O separador **Tópicos** será carregado e, por padrão, os tópicos _Custom_ serão exibidos. Pode filtrar os tópicos por Todos, Personalizados e Sistema. Os tópicos personalizados e de sistema que vê atualmente foram criados automaticamente quando o agente foi provisionado.

    Selecione **+ Adicionar um tópico** e escolha **Do zero**.

    ![Criar tópico do zero](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.pt.png)

1. Insira um nome para o tópico. Copie e cole o seguinte.

    ```text
    Available devices
    ```

    ![Nomear o tópico](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.pt.png)

1. Insira uma descrição de ativação que descreva o que o tópico faz. Copie e cole o seguinte.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Inserir um nome e descrição para a ativação](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.pt.png)

### 7.2 Definir as entradas e saídas da ativação

1. Em seguida, vamos adicionar uma nova variável de entrada que a IA generativa usará na sua orquestração para extrair o tipo de dispositivo da mensagem do utilizador. Selecione os **três pontos (...)** no tópico e escolha **Detalhes** para visualizar o painel de detalhes do tópico.

    ![Selecionar Detalhes do Tópico](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.pt.png)

1. O painel **Detalhes do Tópico** foi carregado. Selecione o separador **Entrada**.

    ![Separador Entrada](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.pt.png)

1. Selecione **Criar uma nova variável**.

    ![Criar nova variável de entrada](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.pt.png)

1. Insira um nome para a variável. Copie e cole o seguinte.

    ```text
    VarDeviceType
    ```

    ![Nome da variável de entrada](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.pt.png)

1. Agora precisamos definir as nossas variáveis de entrada e saída. As seguintes propriedades podem ser definidas para entradas e saídas de tópicos.

    | Campo    | Valor |
    | ---------- | :--------- |
    | Como o agente preencherá esta entrada? | Determina como o agente preenche esta variável com um valor antes de executar o tópico. Por padrão, está definido como _Preencher dinamicamente com a melhor opção_. Caso contrário, pode substituir uma entrada por um valor em vez de perguntar ao utilizador |
    | Tipo de dados da variável  | O tipo de dados da variável. Os tipos de dados suportados são `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Nome de exibição   | Nome da variável   |
    | Identificar como  | Tipo de entidade para o agente capturar o tipo de valor correto  |
    | Descrição    | A descrição ajuda o agente a preencher automaticamente as entradas antes de executar o tópico ou gerar perguntas para solicitar os valores   |

    Os campos _Como o agente preencherá esta entrada?_, _Tipo de dados da variável_ e _Nome de exibição_ podem permanecer como estão. Atualize a propriedade **Identificar como** para **Resposta completa do utilizador**.

    ![Atualizar Identificar como](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.pt.png)

1. Copie e cole o seguinte como descrição.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Descrição](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.pt.png)

1. Em seguida, vamos definir a nossa saída para o tópico. Selecione o separador **Saída**.

    ![Selecionar separador Saída](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.pt.png)

1. Selecione **Criar uma nova variável**.

    ![Criar nova variável de saída](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.pt.png)

1. Atualize as seguintes propriedades.

    **Nome da variável** - Copie e cole o seguinte.

    ```text
    VarAvailableDevices
    ```

    **Tipo de dados da variável** - Selecione **Tabela** como o tipo de dados.

    **Descrição da variável** - Copie e cole o seguinte.

    ```text
    List of available devices by device type
    ```

    ![Propriedades de saída](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.pt.png)

1. Agora concluímos a definição das entradas e saídas do tópico. Selecione o **ícone X** para sair do painel **Detalhes do Tópico**.

    ![Sair do painel de detalhes do tópico.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.pt.png)

### 7.3 Adicionar uma ferramenta usando um conector

1. Vamos agora adicionar um nó que permite ao agente recuperar a lista de dispositivos da lista **Devices** do SharePoint. Selecione o **ícone +** abaixo da ativação.

    ![Adicionar uma ferramenta](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.pt.png)

1. Selecione o nó **Adicionar uma ferramenta**, depois escolha o separador **Conector**. Procure por `Get items` e selecione a ação do conector **Get items** do SharePoint.

    ![Selecionar get items](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.pt.png)

1. É necessário criar uma nova conexão para o conector. Selecione o **ícone de seta** e escolha **Criar nova conexão**.

    ![Adicionar uma ferramenta](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.pt.png)

1. Serão exibidas duas opções que permitem conectar diretamente ao SharePoint Online ou a um SharePoint local. Por padrão, a opção **Conectar diretamente (serviços na nuvem)** será selecionada, que é a que usaremos para a nossa conexão.
Selecione **Criar**.

![Selecione Criar](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.pt.png)

1. Selecione a conta de utilizador com sessão iniciada.

![Selecione a conta de utilizador com sessão iniciada](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.pt.png)

1. Em seguida, é necessário confirmar que a sua conta de utilizador pode ser usada para a ligação ao conector do SharePoint. Selecione **Permitir acesso**.

![Selecione permitir acesso](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.pt.png)

1. Selecione **Submeter** para que a ação do conector **Obter itens** do SharePoint seja adicionada como um nó ao tópico.

![Submeter](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.pt.png)

1. A ação do conector **Obter itens** do SharePoint foi agora adicionada ao tópico. Podemos começar a configurar as entradas da ação. Selecione o **ícone de reticências (...)** e, em seguida, **Propriedades**.

![Selecione Propriedades](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.pt.png)

1. O painel de configuração **Obter itens** aparecerá e, por padrão, verá o separador **Entradas**. Selecione o separador **Iniciação** e insira uma descrição no campo **Descrição de Uso**. Copie e cole o seguinte.

    ```text
    Retrieves devices from SharePoint list
    ```

> Isto será útil quando visualizarmos a página _Gerir as suas conexões_ do nosso agente. Voltaremos a isto em breve.

![Descrição de Obter itens](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.pt.png)

1. Selecione o separador **Entradas** e escolha o site **Contoso IT** e a lista **Dispositivos** que configurou em [Lição 00 - Configuração do Curso - Passo 3: Criar novo site do SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Configurar entradas de Obter itens](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.pt.png)

1. Agora, para exibir apenas os dispositivos da lista do SharePoint com base em:
   - o valor selecionado,
   - e apenas dispositivos cujo estado seja _Disponível_,

   precisamos aplicar um filtro. Isso é feito inserindo uma consulta de filtro com a ajuda do Power Fx. Selecione o **ícone de reticências (...)**.

![Selecione o ícone de reticências](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.pt.png)

1. Por padrão, estará no separador **Personalizado**. Selecione o separador **Fórmula**.

![Selecione o separador Fórmula](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.pt.png)

1. Selecione o ícone **expandir** para ampliar o campo **Fórmula**. Copie e cole a seguinte expressão Power Fx.

Estamos a usar a função `Concatenate` para criar uma expressão que irá filtrar:
- a coluna **Estado** do SharePoint igual a _Disponível_
- e a coluna **Tipo de ativo** do SharePoint igual ao _dispositivo selecionado no nó de pergunta_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Selecione **Inserir**.

![Insira a expressão Power Fx e selecione inserir](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.pt.png)

1. A expressão Power Fx será agora aplicada no parâmetro de entrada da consulta de filtro da ação **Obter itens**. Em seguida, selecione a vista **Todos os itens** em **Limitar Colunas por Vista**. Isso irá recuperar apenas as colunas da lista com base na vista selecionada.

![Listar Colunas por Vista](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.pt.png)

1. Em seguida, atualizaremos o nome da variável para a saída. Selecione o separador **Saídas** e escolha a variável `GetItems`.

![Atualizar variável](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.pt.png)

1. Atualize o nome para o seguinte.

    ```text
    VarDevices
    ```

![Atualizar nome da variável](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.pt.png)

1. Role para baixo e, na seção **Uso**, selecione **Global**. Isso tornará a variável acessível por qualquer tópico.

![Atualizar para variável Global](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.pt.png)

1. **Feche** o painel de propriedades da variável.

![Fechar painel de propriedades da variável](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.pt.png)

1. Selecione o ícone **mais +** para inserir um novo nó, selecione **Gestão de variáveis** seguido de **Definir um valor de variável**.

![Adicionar nó Definir um valor de variável](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.pt.png)

1. Selecione o ícone **maior que** para o parâmetro de entrada **Definir variável**.

![Definir variável](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.pt.png)

1. Selecione a saída do tópico criada anteriormente como a variável, **VarAvailableDevices**.

![Guardar tópico](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.pt.png)

1. Em seguida, selecione o **ícone de reticências (...)** para definir o valor da variável.

![Selecionar valor da variável](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.pt.png)

1. Agora usaremos uma expressão PowerFx para definir o valor da variável como a propriedade `value` retornada na resposta **Obter itens**, e tornaremos o [escopo da variável](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) global ao adicionar o prefixo `Global`.

Selecione **Inserir** e **guardar** o tópico.

![Fórmula Power Fx para valor da variável](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.pt.png)

1. Em seguida, precisamos atualizar as instruções do agente. Selecione o separador **Visão Geral** e clique em **Editar**.

![Editar instruções](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.pt.png)

1. Adicione uma nova linha nas instruções, copie e cole o seguinte.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Esta instrução irá orientar a IA generativa a invocar o gatilho **Dispositivos disponíveis** para exibir a lista de dispositivos disponíveis da lista **Dispositivos** do SharePoint. Selecione o marcador de posição do tópico inteiro entre parênteses retos.

![Adicionar instruções](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.pt.png)

1. Digite o caractere barra `/` e a lista de tópicos aparecerá. Selecione o tópico **Dispositivos disponíveis**.

![Referenciar gatilho](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.pt.png)

1. **Guarde** as instruções atualizadas.

![Guardar instruções](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.pt.png)

1. Vamos agora testar o nosso agente atualizado. Selecione **Testar** no canto superior direito para exibir o painel de teste e **atualize** o painel de teste. Insira a seguinte mensagem para o agente.

    ```text
    I need a laptop
    ```

![Testar](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.pt.png)

1. Antes que o agente possa prosseguir, o utilizador precisa verificar se a sua conexão pode ser usada. Selecione **Permitir**.

![Selecione permitir](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.pt.png)

1. O agente irá executar a ferramenta do SharePoint que recupera uma lista filtrada de dispositivos onde o tipo de dispositivo é "portátil" e o estado é "disponível", com base na expressão Power Fx utilizada. Uma resposta formatada em forma de pontos será retornada para o utilizador ler.

![Resposta do teste](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.pt.png)

1. Por último, vamos aprender a visualizar as conexões usadas ao acessar a página _Gerir as suas conexões_ do agente. Selecione o **ícone de reticências (...)** e clique em **Gerir Conexão**.

![Gerir conexão](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.pt.png)

1. Nesta página, podemos ver todas as conexões usadas pelo agente. Atualmente, apenas uma conexão está listada, que está associada à ferramenta do SharePoint adicionada ao Tópico. Selecione **1 ferramenta** na coluna **Usado Por**.

![Usado Por](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.pt.png)

1. Aqui podemos ver os detalhes da ação Obter itens e lembrar da _descrição de uso_ que inserimos anteriormente? É aqui que veremos a descrição de uso. Selecione **Fechar**.

> Isso permite-nos saber quais ações são usadas e qual é o propósito delas. Isso mantém as nossas conexões organizadas 📁.

![Descrição de uso](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.pt.png)

1. Volte para o separador do navegador com o Copilot Studio e **atualize** o painel de teste para limpar o teste.

## ✅ Missão Cumprida

Parabéns! 👏🏻 Aprendeu como adicionar um novo tópico do zero, como adicionar uma ferramenta que chama a ação do conector Obter itens do SharePoint e usar Power Fx para filtrar a resposta para retornar apenas dispositivos onde o estado seja disponível e o tipo de dispositivo seja portátil. 🙌🏻

Este é o fim de **Laboratório 07 - Adicionar um novo tópico com nós de conversa**, selecione o link abaixo para avançar para a próxima lição. Vamos expandir o caso de uso deste laboratório na lição seguinte.

⏭️ [Avançar para a lição **Melhorar interações com o utilizador usando Cartões Adaptativos**](../08-add-adaptive-card/README.md)

## 📚 Recursos Táticos

🔗 [Usar tópicos do sistema](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Tópicos no Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Definir gatilhos de tópicos](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Definir tópicos de agentes](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Criar expressões usando Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Criar tópicos usando linguagem natural](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Adicionar ações a agentes usando conectores](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analytics" />

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.