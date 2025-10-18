<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-18T02:50:09+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "pt"
}
-->
# 🚨 Missão 09: Adicionar um fluxo de agente ao seu Tópico para automação

## 🕵️‍♂️ NOME DE CÓDIGO: `OPERAÇÃO POTÊNCIA AUTOMÁTICA`

> **⏱️ Duração da Operação:** `~30 minutos`  

🎥 **Assista ao Tutorial**

[![Miniatura do vídeo do fluxo de agente](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.pt.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Assista ao tutorial no YouTube")

## 🎯 Resumo da Missão

O seu agente já consegue conversar com os utilizadores e fornecer informações, mas a verdadeira excelência operacional exige que o agente tome ações. Esta missão transformará o seu agente conversacional numa potência de automação ao equipá-lo com fluxos de agente.

Ao final da missão, terá criado uma automação completa de solicitação de dispositivos que captura informações do utilizador através de um cartão adaptativo, recupera dados do SharePoint, envia notificações por email aos gestores e fornece feedback contínuo ao utilizador - tudo orquestrado pelo seu agente através de fluxos de trabalho inteligentes.

## 🔎 Objetivos

Nesta missão, irá aprender:

1. Compreender o que são fluxos de agente e como diferem dos fluxos de nuvem do Power Automate para automação.
1. Aprender as principais funcionalidades que tornam os fluxos de agente poderosos, incluindo ações de IA e criação em linguagem natural.
1. Explorar o designer de fluxos de agente e como usar expressões para manipulação dinâmica de dados.
1. Criar uma automação completa de solicitação de dispositivos que integra dados do SharePoint e notificações por email.

## 🤔 O que é um fluxo de agente?

Os fluxos de agente são uma forma poderosa de automatizar tarefas repetitivas e integrar as suas aplicações e serviços. Pense neles como fluxos de trabalho estruturados, passo a passo, que o seu agente pode executar para automatizar tarefas ou conectar-se a outras aplicações e serviços. Pode considerá-los como mini fluxos que ajudam o seu agente a realizar ações como enviar notificações, atualizar registos ou responder a eventos.

Ao contrário de agentes autónomos que utilizam IA para tomar decisões em tempo real, os fluxos de agente são **fluxos de trabalho determinísticos** - ou seja, seguem sempre o mesmo caminho, garantindo resultados consistentes e confiáveis.

Em termos simples:

- Ajudam o seu agente a _fazer coisas_, não apenas _dizer coisas_ aos utilizadores.
- São reutilizáveis em tópicos e agentes, e podem ser acionados por mensagens de utilizadores, eventos ou outras aplicações e serviços.

## 🙋🏽 Sim, mas como é diferente dos fluxos de nuvem do Power Automate?

Tanto os fluxos de agente quanto os fluxos de nuvem do Power Automate ajudam a automatizar tarefas. No entanto, foram concebidos para propósitos diferentes e funcionam de formas distintas.

### 🤖 Fluxos de agente no Copilot Studio

**Para que servem:**

- Criados para agentes conversacionais e autónomos (via instruções de agente) no Copilot Studio.
- Focados em automação inteligente e orientada por IA que interage com sistemas empresariais.

**Por que são úteis:**

- Fáceis de criar e gerir diretamente no Copilot Studio.
- Ótimos para automatizar tarefas que ocorrem _durante a conversa_ com os utilizadores, como submeter um pedido de licença.
- Não é necessário uma licença separada do Power Automate, pois a cobrança é baseada no uso dentro do Copilot Studio. Isso pode economizar tempo e custos para equipas empresariais.

**Limitações:**

- Não podem ser partilhados, copiados ou atribuídos a co-proprietários.
- Os fluxos de agente só são visíveis e utilizáveis dentro do Copilot Studio.
- Atualmente, os gatilhos de eventos para agentes podem ser editados no portal do Power Automate Maker.

### ☁️ Fluxos de nuvem do Power Automate

**Para que servem:**

- Projetados para automação de propósito geral em várias aplicações e serviços.
- Podem funcionar de forma independente ou em conjunto com fluxos de agente.

**Por que são úteis:**

- Oferecem uma ampla gama de conectores.
- Ideais para automatizar processos fora dos agentes.
- Podem ser partilhados, reutilizados e geridos entre equipas.

**Requisitos:**

- É necessário uma licença do Power Automate para utilizá-los.

### 📗 Resumo

| Use isto | Quando quiser |
| :- | :- |
| Fluxos de agente | Automatizar tarefas dentro de um agente, usar IA e manter tudo no Copilot Studio |  
| Fluxos de nuvem do Power Automate | Automatizar entre aplicações e serviços ou criar fluxos fora dos agentes |

## 👍🏻 Por que usar fluxos de agente

Os fluxos de agente seguem sempre um caminho fixo - fazem a mesma coisa todas as vezes quando recebem a mesma entrada.

Isso torna-os:

- **Confiáveis** - pode confiar que irão comportar-se da mesma forma sempre.
- **Previsíveis** - sabe qual será o resultado esperado quando o fluxo for executado.
- **Baseados em regras** - seguem os passos que definiu.

Outros benefícios incluem:

- **Automação** - permite que o seu agente lide com tarefas repetitivas, como submeter formulários ou enviar notificações.
- **Conectividade** - conecte-se a mais de 1400 conectores como ServiceNow, SharePoint, Salesforce. Caso contrário, pode criar o seu próprio conector personalizado.
- **Integração estreita** - os fluxos de agente fazem parte da lógica do agente, sendo acionados diretamente por mensagens de utilizadores ou ações na conversa.
- **Escalabilidade** - reutilize fluxos em vários agentes ou cenários.
- **Sem código ou com pouco código** - pode criar fluxos usando linguagem natural ou um designer visual.
- **Plataforma tudo-em-um** - pode projetar, testar e implementar fluxos de agente num único lugar - Copilot Studio. Não é necessário alternar entre plataformas.

## 🏄🏻‍♂️ Como os fluxos de agente melhoram o seu agente?

Os fluxos de agente expandem o que o seu agente pode fazer além de "conversar" com os utilizadores. Permitem que ele tome ações e interaja com sistemas.

Imagine que trabalha no departamento financeiro e recebe muitas faturas de fornecedores. Normalmente, alguém tem que ler cada fatura, extrair as informações importantes - o valor, a data, o remetente - verificar se tudo corresponde aos seus registos e, em seguida, enviá-la para a pessoa certa para aprovação. Isso consome tempo e esforço.

Com os fluxos de agente no Copilot Studio, pode automatizar este processo. Assim que a fatura chega, o agente:

1. Lê o documento usando processamento inteligente de documentos para encontrar as informações principais.
1. Verifica os detalhes com os dados da sua empresa para garantir que tudo está correto.
1. Encaminha para aprovação para a(s) pessoa(s) certa(s).

Isso economiza tempo, reduz erros e torna todo o processo muito mais eficiente.

### Pense desta forma

- **Agentes**: os tomadores de decisão inteligentes.
- **Fluxos de agente**: os executores confiáveis.

### Por que isso é importante

- Obtém o melhor dos dois mundos: automação confiável e IA flexível.
- É fácil criar e atualizar fluxos conforme as necessidades do negócio mudam.
- Pode escalar a automação em várias equipas.

## 🔌 Funcionalidades principais que tornam os fluxos de agente poderosos

1. **Criação em linguagem natural**
    - Pode descrever o que deseja que o fluxo faça em linguagem simples.
    - O Copilot entende a sua intenção e cria o fluxo para si.
    - Não precisa escrever código - basta explicar a sua ideia.

1. **Ações de IA**

    Use IA para:

    - Ler e compreender documentos ou imagens.
    - Resumir conteúdos longos em respostas curtas e úteis.
    - Fazer recomendações ou tomar decisões inteligentes.

1. **Ações generativas**
    - Permitem que o fluxo se adapte em tempo real.
    - O agente pode planear e ajustar os passos com base em informações que mudam.

1. **Ações de integração**
    - Conecte o seu fluxo a outras ferramentas como Outlook, Microsoft Teams, ServiceNow, SharePoint e outras aplicações e serviços, através de mais de 1400 conectores integrados ou do seu próprio conector personalizado.
    - Isso ajuda o seu agente a trabalhar com as aplicações que a sua equipa já utiliza.

1. **Intervenção humana**
    - Adicione etapas de aprovação onde uma pessoa precisa rever ou confirmar algo.
    - [Aprovações avançadas](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) suportam lembretes, delegação e aprovações em várias etapas.

## ⚙️ Como funcionam

1. **Gatilho**

    Um evento inicia o fluxo - como um utilizador fazer uma pergunta, invocar o fluxo a partir de um tópico, um horário agendado ou um evento que ocorre noutro sistema.

1. **Ações**

    Estes são os passos que o agente segue a seguir - enviar um email, chamar uma API, atualizar um ticket no ServiceNow.

## 🧶 Como criar um fluxo de agente

1. **Linguagem natural**: descreva o que deseja que o agente faça, e o Copilot cria o fluxo para si.
1. **Canvas do designer**: arraste e solte ações, condições e loops no designer de fluxos de agente para criar o seu fluxo.

## 🎨 O que é o designer de fluxos de agente?

É uma ferramenta visual no Copilot Studio que ajuda a criar, editar e gerir fluxos de agente que fornecem instruções passo a passo que o seu agente segue para concluir tarefas. Foi projetado para ser simples de usar, mesmo para quem é novo em fluxos de agente.

### Funcionalidades principais do designer de fluxos de agente

1. **Canvas visual**
    - Pode ver todo o seu fluxo disposto como um diagrama.
    - Facilmente ampliar/reduzir, ajustar a visualização ou usar um minimapa para navegar em fluxos grandes.

1. **Adicionar e remover ações**
    - Clique no botão _mais (+)_ para adicionar uma nova ação, como enviar uma mensagem ou atualizar um item numa lista do SharePoint.
    - Pode procurar ações nos conectores e configurá-las através das suas definições.
    - Para remover uma ação, clique nos _três pontos (⋮)_ e selecione _Eliminar_.

1. **Verificar parâmetros**
    - Clique em qualquer ação para visualizar ou editar as suas definições chamadas _parâmetros_.
    - Pode inserir valores manualmente ou usar _expressões_ para torná-los dinâmicos.

1. **Histórico de versões**
    - Sempre que guardar o seu fluxo, uma versão é registada.
    - Pode voltar e visualizar ou restaurar versões anteriores, se necessário.

1. **Verificação de erros**
    - O _Verificador de Fluxos_ destaca quaisquer erros.
    - Todos os erros precisam ser resolvidos antes de publicar o fluxo.

1. **Publicar e testar**
    - Quando o seu fluxo estiver sem erros, publique para torná-lo ativo.
    - Use a funcionalidade _Testar_ para executar o fluxo manualmente ou automaticamente e verificar se funciona conforme esperado.

### Por que usar o designer de fluxos de agente?

- **Visual e intuitivo** - pode criar fluxos arrastando e clicando.
- **Seguro para experimentar** - o histórico de versões permite desfazer alterações.
- **Testes integrados** - ajuda a garantir que tudo funciona antes de entrar em produção.

## 🔤 Mencionou _expressões_ - o que são expressões?

Expressões são pequenas fórmulas ou comandos que ajudam o fluxo de agente a trabalhar com dados. São usadas para calcular valores, formatar texto, tomar decisões ou extrair informações específicas das entradas.

### Por que usar expressões?

As expressões permitem:

- **Personalizar o tratamento de dados** - combinar nomes, formatar datas.
- **Tomar decisões** - se um valor for maior que 10, fazer algo.
- **Transformar dados** - alterar texto para minúsculas, extrair parte de uma string.
- **Automatizar lógica** - sem necessidade de escrever código completo.

### Como são as expressões?

As expressões utilizam funções. Vou usar uma explicação do antigo MVP da Microsoft, Jerry Weinstock.

!!! quote
    Funções são lógicas incorporadas para transformar os seus dados, seja através de operações simples ou complexas na sua expressão.

As funções permitem criar expressões sem necessidade de escrever código.

A forma como gosto de descrever é que uma função em fluxos de agente é semelhante às funções do Excel. Pode realizar uma operação nos dados para transformá-los num resultado desejado. Ao criar a sua fórmula no Excel, seleciona o valor de entrada das células numa tabela ou intervalo e aplica funções para manipular o resultado dos dados. Um exemplo é usar a função `COUNT` para calcular o número de células que contêm números num intervalo.

Nos fluxos de agente, em vez de referenciar dados de células numa tabela, está a referenciar saídas de dados do gatilho ou ações ao criar as suas expressões. Continuando com o exemplo anterior, use a função `length` para obter o número de itens retornados pela ação do conector _Obter itens_ do SharePoint.

### Por que as funções são importantes?

Usar funções torna os seus fluxos de agente:

- **Mais inteligentes** - podem reagir a diferentes entradas ou condições.
- **Flexíveis** - pode personalizar como os dados são tratados.
- **Eficientes** - evita passos manuais ao automatizar lógica.

### Funções mais úteis

As seguintes são funções comuns usadas em fluxos de agente. Para a lista completa de funções, aceda ao [guia de referência](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Texto

- `concat()` - Junta duas ou mais partes de texto.
      - Exemplo: `concat('Olá ', firstName)` → “Olá João”

- `toLower()` / `toUpper()` - Altera o texto para minúsculas ou maiúsculas.
      - Útil para padronizar entradas.

- `substring()` - Extrai parte de uma string.
      - Exemplo: Obter as 3 primeiras letras de um nome.

- `trim()` - Remove espaços do início e do fim do texto.

#### 🔢 Matemática e números

- `add()`, `sub()`, `mul()`, `div()` - Operações matemáticas básicas.
      - Exemplo: `add(5, 3)` - o resultado é 8

#### 📅 Data e hora

- `utcNow()` - Obtém a data e hora atual em UTC.
      - Ótimo para registos de data e hora.

- `addDays()`, `addHours()` - Adiciona tempo a uma data.
- Exemplo: `addDays(utcNow(), 7)` resultado é 7 dias a partir de agora.

- `formatDateTime()` - Formata uma data numa string legível.
      - Exemplo: Segunda-feira, 7 de julho de 2025

#### ✅ Lógica

- `if()` - Executa um valor se verdadeiro, outro se falso.
      - Exemplo: `if(score > 50, 'Pass', 'Fail')`

- `equals()` - Verifica se dois valores são iguais.

- `and()`, `or()`, `not()` - Combina várias condições.

#### 🪣 Outras funções úteis

- `coalesce()` - Retorna o primeiro valor não vazio.
      - Útil para valores padrão ou de substituição.

- `guid()` - Gera um ID único.
      - Útil para rastreamento ou registo.

- `length()` - Conta quantos caracteres ou itens estão numa string ou array.

## ⭐ Melhores práticas

Aqui estão algumas melhores práticas para criar fluxos de agentes no Copilot Studio.

1. **Comece simples e construa gradualmente**

    - Inicie com uma tarefa pequena e clara, como enviar uma mensagem.
    - Adicione mais etapas após testar os fundamentos da sua automação.

1. **Use nomes de ações claros e descritivos**

    - Rotule cada etapa de forma clara para que você e sua equipa entendam o que ela faz.
    - Exemplo: em vez do nome padrão "Atualizar item" para a ação do conector do SharePoint, renomeie para o que está a atualizar, como "Atualizar estado do dispositivo".

1. **Verifique erros antes de publicar**

    - Use o **verificador de fluxo** para encontrar e corrigir quaisquer problemas.
    - Não é possível publicar fluxos se houver erros, então tente resolvê-los quando ocorrerem.

1. **Teste o seu fluxo minuciosamente**

    - Só porque foi guardado e publicado, não significa que funcione como esperado.
    - Use a funcionalidade _Testar_ para executar o seu fluxo manualmente ou automaticamente e verificar os resultados.

1. **Use o Histórico de Versões**

    - Guarde o seu fluxo frequentemente para poder voltar a versões anteriores, se necessário.
    - Pode visualizar e restaurar versões anteriores usando o painel _Histórico de Versões_.

1. **Use parâmetros e expressões de forma inteligente**

    - Ao configurar ações, use parâmetros para tornar o seu fluxo dinâmico.
    - Pode inserir valores manualmente ou usar expressões para calculá-los, ou combiná-los com valores de ações anteriores usando o seletor de _conteúdo dinâmico_.

1. **Apague ações não utilizadas**

    - Se adicionar uma ação e depois decidir que não precisa dela, remova-a para manter o seu fluxo organizado.

## 🧪 Laboratório 09 - Adicionar um fluxo de agente para automação e melhorar as capacidades do tópico

Agora vamos aprender a melhorar o nosso tópico com cartões adaptativos e utilizando funcionalidades avançadas de tópicos e nós.

- [9.1 Criar um fluxo de agente](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Adicionar fluxo de agente ao tópico](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Atualizar o tópico Solicitar dispositivo com vários nós para uma melhor experiência do utilizador](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Testar o agente usando vários cenários](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Caso de uso

**Como** gestor de um colaborador

**Quero** receber pedidos de dispositivos

**Para que** possa analisar o dispositivo solicitado pelo colaborador.

Vamos começar!

### Pré-requisitos

1. **Lista do SharePoint**

    Vamos usar a lista **Dispositivos** do SharePoint criada em [Lição 00 - Configuração do Curso - Passo 3: Criar novo site do SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Se ainda não configurou a lista **Dispositivos** do SharePoint, volte para [Lição 00 - Configuração do Curso - Passo 3: Criar novo site do SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agente de Helpdesk da Contoso**

    Vamos usar o mesmo agente criado anteriormente em [Lição 06 - Criar um agente personalizado usando linguagem natural com Copilot e baseando-o nos seus dados](../06-create-agent-from-conversation/README.md).

### 9.1 Criar um fluxo de agente

Neste exercício, vamos criar um fluxo de agente que recupera o item do SharePoint do dispositivo selecionado e envia um email a um gestor com os detalhes do dispositivo.

1. No tópico **Solicitar dispositivo**, desça até ao nó **Perguntar com cartão adaptativo** e adicione um novo nó. Selecione **Adicionar uma ferramenta** e, no separador **Ferramentas básicas** do painel lateral, selecione **Novo fluxo de agente**.

    ![Adicionar novo fluxo de agente](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.pt.png)

1. O **Designer** de fluxos de agentes será carregado com um gatilho e uma ação.

    - **Gatilho** - Quando um agente chama o fluxo
        - Isto irá acionar um fluxo a partir de um agente do Copilot Studio.

    - **Ação** - Responder ao agente
        - Isto envia uma resposta que pode conter valores de saída de volta ao agente do Copilot Studio.

    Selecione o gatilho.

    ![Selecionar o gatilho](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.pt.png)

1. A seguir, vamos adicionar vários inputs para o fluxo de agente.

    - `DeviceSharePointId` - isto irá armazenar o valor, ID, do item do SharePoint. Este valor de ID é uma saída do nó Perguntar com cartão adaptativo onde o utilizador selecionou o dispositivo.

    - `User` - este será o nome do utilizador que virá de uma variável de sistema do agente.

    - `AdditionalComments` - este será o comentário inserido pelo utilizador, que é uma saída do nó Perguntar com cartão adaptativo.

    Primeiro, vamos adicionar o `DeviceSharePointId` como um input para o nosso gatilho. Selecione **+ Adicionar um input**.

    ![Adicionar um input](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.pt.png)

1. Para o tipo de input do utilizador, selecione **Texto**.

    ![Selecionar Texto](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.pt.png)

1. Para o nome do input, insira o seguinte.

    ```text
    DeviceSharePointId
    ```

    ![Input DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.pt.png)

1. Agora vamos adicionar o segundo input, `User`. Repita os mesmos passos, selecione **+ Adicionar um input** e selecione **Texto**.

    ![Adicionar um input](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.pt.png)

1. Para o nome do input, insira o seguinte.

    ```text
    User
    ```

    ![Input User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.pt.png)

1. Agora vamos adicionar o terceiro input, `AdditionalComments`. Repita os mesmos passos, selecione **+ Adicionar um input** e selecione **Texto**.

    ![Adicionar um input](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.pt.png)

1. Para o nome do input, insira o seguinte.

    ```text
    AdditionalComments
    ```

    ![Input AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.pt.png)

1. Para o input `AdditionalComments`, vamos atualizá-lo para torná-lo opcional. Selecione o **ícone de reticências (...)** e escolha **Tornar o campo opcional**.

    ![Tornar o campo opcional](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.pt.png)

1. Ótimo trabalho! O gatilho foi configurado, vamos continuar. Selecione o **ícone de mais +** abaixo do gatilho para inserir uma nova ação.

    ![Adicionar ação](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.pt.png)

1. O **Painel de Ações** aparecerá onde pode visualizar ações de mais de 1400 conectores integrados para serviços da Microsoft e de terceiros. No **campo de pesquisa**, insira o seguinte,

    ```text
    Get item
    ```

    Uma lista de ações será exibida nos resultados da pesquisa. Selecione a ação **Obter item** do conector **SharePoint**.

    ![Ação Obter item](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.pt.png)

1. Agora podemos começar a configurar a ação **Obter item**.

    Selecione o **ícone de reticências (...)** na ação **Obter item**.

    ![Selecionar reticências](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.pt.png)

1. Selecione **Renomear**.

    ![Selecionar Renomear](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.pt.png)

1. Renomeie a ação para,

    ```text
    Get Device
    ```

    ![Renomear ação](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.pt.png)

1. No campo **Endereço do site**, selecione o **Endereço do site** do site Contoso IT SharePoint criado em [Lição 00 - Configuração do Curso - Passo 3: Criar novo site do SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    No campo **Nome da lista**, selecione a lista **Dispositivos** do SharePoint.

    ![Parâmetros de entrada](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.pt.png)

1. No campo **Id**, selecione o **ícone de raio** ou **ícone fx** à direita.

    ![Seletor de conteúdo dinâmico](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.pt.png)

1. No separador **Conteúdo dinâmico** do painel lateral, insira o seguinte,

    ```text
    sharepoint
    ```

    Os resultados da pesquisa mostrarão os parâmetros de entrada que correspondem ao valor pesquisado. Selecione o parâmetro **DeviceSharePointId** do gatilho.

    Em seguida, selecione **Adicionar** para adicionar o input de conteúdo dinâmico ao parâmetro **Id** da ação.

    ![Selecionar input DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.pt.png)

1. O input de conteúdo dinâmico do gatilho agora está referenciado no parâmetro **Id** da ação. Vamos atualizar um dos parâmetros avançados a seguir. Selecione **Mostrar tudo** para visualizar os parâmetros avançados.

    ![Visualizar parâmetros avançados](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.pt.png)

1. O parâmetro **Limitar colunas por vista** será exibido e, por padrão, está definido como **Usar todas as colunas (Não limitar)**. Vamos atualizar este valor para uma vista para limitar as colunas retornadas na resposta da ação. Selecione o parâmetro **Limitar colunas por vista** para visualizar a lista de vistas.

    ![Selecionar parâmetro](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.pt.png)

1. Selecione a vista **Todos os itens**.

    ![Selecionar vista Todos os itens](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.pt.png)

1. Selecione o **ícone de mais +** abaixo da ação _Obter Dispositivo_ para inserir uma nova ação.

    ![Adicionar nova ação](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.pt.png)

1. No campo de pesquisa, insira o seguinte,

    ```text
    send an email
    ```

    Uma lista de ações será exibida nos resultados da pesquisa. Selecione a ação **Enviar um email (V2)** do conector **Office 365 Outlook**.

    ![Ação Enviar um email](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.pt.png)

1. Em seguida, precisamos criar uma conexão para a ação do conector. Selecione **Iniciar sessão**.

    ![Criar conexão](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.pt.png)

1. Selecione a conta de utilizador com a qual iniciou sessão.

    ![Selecionar conta de utilizador](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.pt.png)

1. Selecione **Permitir acesso**. Uma conexão foi criada.

    ![Selecionar permitir acesso](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.pt.png)

1. Renomeie a ação para o seguinte,

    ```text
    Send an email to manager
    ```

    Vamos agora definir os parâmetros de entrada da nossa ação.

    Para o parâmetro de entrada **Para**, selecione você mesmo. Normalmente, seria o seu gestor ou usaríamos outra ação que identificasse o seu gestor com base no seu perfil do Entra ID, mas para o propósito desta lição, selecione você mesmo.

    Para o parâmetro de entrada **Assunto**, insira o seguinte,

    ```text
    Request type: new device
    ```

    Para o parâmetro de entrada **Corpo**, insira o seguinte,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Renomear ação e configurar entradas](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.pt.png)

1. A seguir, vamos atualizar o parâmetro de entrada **Corpo** com referências ao input de conteúdo dinâmico do **gatilho** ou da ação **Obter item**. Insira um espaço após a segunda linha, pois vamos inserir o nome do utilizador a partir do input do gatilho, **User**.

    Selecione o **ícone de raio** ou **ícone fx** à direita.

    ![Adicionar input User como conteúdo dinâmico](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.pt.png)

1. No separador **Conteúdo dinâmico** do painel lateral, selecione o input **User** do gatilho.

    Selecione **Adicionar** para adicionar o input de conteúdo dinâmico **User** ao parâmetro **Corpo** da ação.

    ![Selecionar input User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.pt.png)
1. O conteúdo dinâmico inserido pelo gatilho agora está referenciado no parâmetro **Body** da ação. Vamos repetir o mesmo para as linhas restantes no corpo da mensagem de e-mail.

    ![Entrada do utilizador adicionada](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.pt.png)

1. Clique no espaço ao lado de `Fabricante:`. Selecione o **ícone de raio** ou o **ícone fx** à direita.

    No separador **Conteúdo dinâmico** do painel lateral, insira o seguinte no campo de pesquisa,

    ```text
    manufacturer
    ```

    Selecione a entrada **Valor do Fabricante** do gatilho e clique em **Adicionar**.

    ![Adicionar entrada de valor do fabricante como conteúdo dinâmico](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.pt.png)

1. Clique no espaço ao lado de `Modelo:`. Selecione o **ícone de raio** ou o **ícone fx** à direita.

    No separador **Conteúdo dinâmico** do painel lateral, insira o seguinte no campo de pesquisa,

    ```text
    model
    ```

    Selecione a entrada **Modelo** da ação **Obter item** e clique em **Adicionar**.

    ![Adicionar entrada de modelo como conteúdo dinâmico](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.pt.png)

1. Para o texto `Link para item no SharePoint`, vamos atualizá-lo para ser um hiperlink no corpo da mensagem de e-mail. Clique no início da linha e selecione o **ícone de raio** ou o **ícone fx** à direita.

    ![Adicionar conteúdo dinâmico](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.pt.png)

1. Clique após a tag de âncora HTML e selecione o **ícone de raio** ou o **ícone fx** à direita.

    No separador **Conteúdo dinâmico** do painel lateral, insira o seguinte no campo de pesquisa,

    ```text
    link to item
    ```

    Selecione a entrada **Link para item** da ação **Obter item** e clique em **Adicionar**.

    ![Adicionar Link para item como conteúdo dinâmico](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.pt.png)

1. Precisamos alternar para o editor HTML selecionando o ícone **&lt;/&gt;**.

    ![Adicionar entrada do utilizador](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.pt.png)

1. O editor HTML está agora ativado. Clique antes do texto `Link para item no SharePoint`, adicione uma tag de âncora HTML para criar um hiperlink. Copie e cole o seguinte.

    ```text
    <a href="
    ```

    ![Tag HTML](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.pt.png)

1. O conteúdo dinâmico da entrada **Link para item** agora está referenciado no parâmetro **Body**. Clique após a entrada **Link para item**, copie e cole o seguinte.

    ```text
    ">
    ```

    ![Tag HTML](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.pt.png)

1. Clique após o texto `Link para item no SharePoint`, feche a tag de âncora HTML. Copie e cole o seguinte.

    ```text
    </a>
    ```

    ![Tag HTML](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.pt.png)

1. Selecione o ícone **&lt;/&gt;** para alternar a visualização do código.

    ![Desativar visualização de código](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.pt.png)

1. Em seguida, selecione novamente o ícone **&lt;/&gt;** para alternar novamente para a visualização do código.

    ![Voltar para a visualização de código](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.pt.png)

1. Note como há vários caracteres extras `&lt;br&gt;`. Elimine esses caracteres.

    ![Eliminar caracteres](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.pt.png)

1. Terminámos de adicionar um hiperlink ao corpo da mensagem de e-mail 😎 Selecione o ícone **&lt;/&gt;** para alternar a visualização do código.

    ![Tag HTML organizada](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.pt.png)

1. Clique após o texto `Comentários adicionais de` antes do caractere de dois pontos e selecione o **ícone de raio** ou o **ícone fx** à direita.

    ![Adicionar parâmetro do utilizador](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.pt.png)

1. No separador **Conteúdo dinâmico** do painel lateral, insira o seguinte no campo de pesquisa,

    ```text
    user
    ```

    Selecione o parâmetro **Utilizador** do gatilho e clique em **Adicionar**.

    ![Adicionar parâmetro do utilizador como conteúdo dinâmico](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.pt.png)

1. Agora vamos inserir uma expressão que exibirá o valor de Comentários Adicionais, se fornecido pelo utilizador no nó **Perguntar com cartão adaptativo**, ou exibirá "Nenhum" se o utilizador não fornecer comentários.

    Clique após os dois pontos e selecione o **ícone de raio** ou o **ícone fx** à direita.

    ![Adicionar expressão](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.pt.png)

1. No separador **Função** do painel lateral e no campo de expressão acima, insira o seguinte,

    ```text
    if(empty())
    ```

    Esta expressão utiliza a função `if` para uma declaração if-else.

    A próxima função usada é `empty`, que verifica se existe ou não um valor num parâmetro de string. O parâmetro de string a ser referenciado é o valor do parâmetro de entrada `AdditionalComments` do gatilho.

    ![Se vazio](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.pt.png)

1. Em seguida, clique **dentro dos parênteses** após a função `empty`. Vamos inserir o parâmetro de entrada `AdditionalComments` do gatilho.

    Selecione o separador **Conteúdo dinâmico**. Insira o seguinte no campo de pesquisa,

    ```text
    Additional
    ```

    Role para baixo no painel e selecione o parâmetro de entrada **AdditionalComments** do gatilho. O parâmetro será agora adicionado como um parâmetro de string na expressão.

    ![Adicionar AdditionalComments como conteúdo dinâmico](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.pt.png)

1. Em seguida, vamos definir a lógica **_verdadeira_**, onde, se o parâmetro de string `AdditionalComments` estiver vazio, queremos exibir uma string (texto) com `Nenhum`.

    Após o parêntese que encerra o parâmetro de string, insira o seguinte,

    ```text
    , 'None',
    ```

    ![Lógica verdadeira](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.pt.png)

1. Finalmente, vamos definir a lógica **_falsa_**, onde, se o parâmetro de string `AdditionalComments` não estiver vazio, queremos exibir o valor do parâmetro de entrada **AdditionalComments** do nosso gatilho.

    > Lembre-se de que este valor será do campo Comentários Adicionais do cartão adaptativo no nó **Perguntar com cartão adaptativo** no tópico **Solicitar dispositivo**.

    Após a vírgula depois da nossa lógica **_verdadeira_**, selecione o separador **Conteúdo dinâmico**. Insira o seguinte no campo de pesquisa,

    ```text
    Additional
    ```

    Role para baixo no painel e selecione o parâmetro de entrada **AdditionalComments** do gatilho. O parâmetro será agora adicionado como um parâmetro de string na expressão.

    Agora adicione-o ao nosso parâmetro **Body** selecionando **Adicionar**.

    ![Lógica falsa](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.pt.png)

1. Excelente, a nossa expressão está completa! A expressão foi agora adicionada ao parâmetro **Body**. Por fim, formate a última linha em itálico.

    ![Itálico](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.pt.png)

1. Agora vamos atualizar a ação **Responder ao agente** para enviar o valor do parâmetro **Valor do Modelo** da ação **Obter item** de volta ao agente.

    Mantenha pressionado o botão esquerdo do rato e mova para cima no designer para visualizar a ação **Responder ao agente**.

    Selecione a ação **Responder ao agente** e escolha a saída **Texto** como tipo.

    ![Selecionar saída de texto](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.pt.png)

1. Insira o seguinte como nome da saída.

    ```text
    ModelValue
    ```

    ![Saída ModelValue](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.pt.png)

1. Selecione o campo de valor e clique no **ícone de raio** ou **ícone fx** à direita.

    ![Inserir expressão](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.pt.png)

1. No separador **Conteúdo dinâmico** do painel lateral, insira o seguinte no campo de pesquisa,

    ```text
    model
    ```

    Selecione o parâmetro **Modelo** da ação **Obter item** e clique em **Adicionar**.

    ![Adicionar parâmetro Modelo como conteúdo dinâmico](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.pt.png)

1. O parâmetro **Modelo** agora é o valor da saída de texto. Selecione **Guardar rascunho** para salvar o fluxo do agente.

    Agora concluímos o fluxo do agente 👏🏻

    ![Selecionar guardar rascunho](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.pt.png)

1. Vamos fazer mais uma atualização no fluxo do agente antes de publicar. Selecione o separador **Visão geral** e clique em **Editar**.

    ![Selecionar Editar](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.pt.png)

1. Para o **Nome do fluxo**, copie e cole o seguinte.

    ```text
    Send device request email
    ```

    Para a **Descrição**, selecione o **ícone de atualização** para usar IA e gerar automaticamente uma descrição com base no gatilho e nas ações do fluxo do agente.

    Selecione **Guardar** para salvar o nome e a descrição atualizados do fluxo do agente.

    ![Renomear, adicionar descrição e guardar detalhes](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.pt.png)

1. Selecione o separador **Designer** e clique em **Publicar** para publicar o fluxo do agente para que possa ser adicionado como um nó no tópico **Solicitar dispositivo**.

    ![Publicar](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.pt.png)

1. Uma mensagem de confirmação aparecerá em breve para confirmar que o fluxo do agente foi publicado.

    ![Mensagem de confirmação](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.pt.png)

### 9.2 Adicionar fluxo do agente ao tópico

Agora vamos adicionar o fluxo do agente ao tópico **Solicitar dispositivo**.

1. Selecione **Agentes** no menu do lado esquerdo e clique no **Agente de Helpdesk Contoso**.

    ![Selecionar Agentes](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.pt.png)

1. Selecione o separador **Tópicos**.

    ![Selecionar separador Tópicos](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.pt.png)

1. Selecione o tópico **Solicitar dispositivo**.

    ![Selecionar tópico Solicitar dispositivo](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.pt.png)

1. Role para baixo até o nó **Perguntar com cartão adaptativo** e adicione um novo nó.

    Selecione **Adicionar uma ferramenta** e, no separador **Ferramentas básicas** do painel lateral, selecione o fluxo do agente **Enviar e-mail de solicitação de dispositivo** que criámos e publicámos recentemente.

    ![Selecionar fluxo do agente](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.pt.png)

1. Para as entradas de gatilho do nosso fluxo do agente, precisamos selecionar as variáveis de saída do nó **Perguntar com cartão adaptativo**.

    Clique no **ícone de reticências (...)** para a entrada **DeviceSharePointId**.

    ![Selecionar variável](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.pt.png)

1. Selecione a variável **deviceSelectionId**, que é uma das saídas definidas no nó **Perguntar com cartão adaptativo**.

    ![Selecionar variável deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.pt.png)

1. Em seguida, clique no **ícone de reticências (...)** para a entrada **Utilizador**.

    ![Selecionar variável](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.pt.png)

1. Selecione o separador **Sistema** no painel lateral de variáveis e clique em **User.DisplayName**. Esta variável armazena o nome de exibição do utilizador interno que está a interagir com o agente.

    ![Selecionar variável User.DisplayName do sistema](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.pt.png)

1. Em seguida, clique no **ícone de maior que** para **Entradas avançadas** para expandir e ver a entrada **AdditionalComments**.

    ![Expandir entradas avançadas](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.pt.png)

1. Clique no **ícone de reticências (...)** para a entrada AdditionalComments.

    ![Selecionar variável](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.pt.png)

1. Selecione o separador **Fórmula** e o ícone de expandir no painel lateral de variáveis, pois usaremos uma expressão Power Fx.

    ![Separador Fórmula](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.pt.png)

1. Semelhante à expressão no fluxo do agente que faz uma verificação condicional usando a função _if_, mas desta vez
    - usando funções Power Fx,
    - e inserindo ou nenhum valor, ou o valor da variável de saída `commentsId` do nó **Perguntar com cartão adaptativo**.

    Insira as seguintes funções no campo Power Fx,

    ```text
    If(IsBlank())
    ```

Esta expressão utiliza a função `If` para uma instrução if-else.

A próxima função utilizada é `IsBlank`, que verifica se existe ou não um valor num parâmetro de string. O parâmetro de string a ser referenciado é a variável de saída `commentsId` do nó **Ask with adaptive card**.

![Funções If e IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.pt.png)

1. Em seguida, clique **dentro dos parênteses** após a função `IsBlank`. Vamos inserir a variável de saída `commentsId` do nó **Ask with adaptive card**.

Digite o seguinte dentro dos parênteses,

    ```text
    Topic.commentsId
    ```

E adicione uma vírgula após o parêntese.

![Referenciar variável de saída commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.pt.png)

1. Agora vamos definir a lógica:

    - quando **_true_** - se o parâmetro de string `Topic.commentsId` estiver vazio, queremos inserir nenhum valor.
    - quando **_false_** - se o parâmetro de string `Topic.commentsId` não estiver vazio, então insira o valor da variável commentsId.

Após o parêntese que encerra o parâmetro de string, insira o seguinte,

    ```text
    "", Topic.commentsId)
    ```

A expressão Power Fx deve ser a seguinte,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

Ótimo trabalho, nossa expressão está completa! 🙌🏻 Agora selecione **Insert** para definir o parâmetro de entrada do fluxo do agente para a expressão Power Fx.

![Expressão Power Fx](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.pt.png)

1. **Guarde** o tópico.

### 9.3 Atualizar o tópico de Pedido de dispositivo com vários nós para uma melhor experiência do utilizador

Vamos adicionar dois nós adicionais:

- **Enviar uma mensagem** - este atuará como uma mensagem de confirmação que faz referência ao dispositivo selecionado e informa que o pedido foi enviado.

- **Gestão de tópicos** - para encerrar a conversa, vamos redirecionar para o nó **Fim da conversa**.

Vamos começar!

1. Selecione o **ícone de mais +** abaixo do nó de fluxo do agente e selecione o nó **Enviar uma mensagem**.

![Adicionar nó de enviar mensagem](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.pt.png)

1. Insira o seguinte no campo de mensagem,

    ```text
    Thanks
    ```

Em seguida, selecione **Inserir variável**, pois vamos referenciar o nome do utilizador.

![Inserir variável](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.pt.png)

1. Selecione o separador **Sistema** e procure por `User` no campo de pesquisa. Selecione a variável **User.DisplayName**.

![Selecionar variável do sistema](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.pt.png)

1. Insira o seguinte no campo de mensagem,

    ```text
    . Your selected device,
    ```

Em seguida, selecione **Inserir variável** e, desta vez, no separador **Personalizado**, selecione a variável **ModelValue**.

Depois insira o seguinte para completar a mensagem.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

A mensagem deve ficar como a seguinte.

![Enviar mensagem](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.pt.png)

1. Por fim, selecione o **ícone de mais +** abaixo do nó **Enviar uma mensagem** e selecione **Gestão de tópicos**, seguido de **Ir para outro tópico** e selecione **Fim da conversa**.

![Gestão de tópicos](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.pt.png)

1. **Guarde** o tópico.

![Guardar](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.pt.png)

### 9.4 Testar o agente usando vários cenários

Ótimo trabalho!!! 😁 Agora podemos testar o nosso agente.

#### 9.4.1 Solicitar um dispositivo e inserir um comentário no cartão adaptativo

1. **Atualize** o painel de teste, selecione o ícone **mapa de atividades** e insira o seguinte como mensagem para o agente.

    ```text
    I need a laptop
    ```

![Testar agente](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.pt.png)

1. O agente aciona o tópico **Dispositivos disponíveis** e responde com a lista de dispositivos disponíveis. Vamos inserir o seguinte como resposta à pergunta sobre se gostaríamos de solicitar um dispositivo.

    ```text
    Yes
    ```

![Sim](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.pt.png)

1. Note como o agente invocou o tópico **Solicitar dispositivo** conforme as instruções do agente e como o cartão adaptativo agora está sendo exibido na mensagem do agente.

    Selecione o dispositivo **Surface Laptop 15** e adicione o seguinte como comentário.

    ```text
    I need 16GB of RAM please
    ```

![Selecionar dispositivo e inserir comentário](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.pt.png)

1. Role para baixo até ver o botão **Enviar pedido** e selecione-o para enviar o cartão adaptativo ao agente.

![Enviar pedido](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.pt.png)

1. Selecione **Permitir** para que o agente utilize as suas credenciais para a autenticação da conexão das duas ações do conector.

![Permitir](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.pt.png)

1. O agente exibirá então a mensagem de confirmação que inclui o modelo selecionado, seguido de um redirecionamento para o tópico **Fim da conversa**. Fantástico!

![Pedido enviado](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.pt.png)

1. Selecione **Sim** para verificar o restante do tópico **Fim da conversa**.

![Selecionar Sim](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.pt.png)

1. Em seguida, avalie a experiência selecionando qualquer uma das estrelas no cartão de escala de avaliação.

O agente prosseguirá para o nó final **Pergunta** no tópico **Fim da conversa**. Selecione **Não**.

![Tópico de fim da conversa](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.pt.png)

1. O tópico será então concluído e uma mensagem final será exibida no painel de teste.

![Tópico de fim da conversa](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.pt.png)

1. Verifique a sua caixa de entrada de e-mail para revisar o e-mail enviado ao gestor pelo fluxo do agente. Pode ver os detalhes do dispositivo selecionado e a nota inserida no cartão adaptativo.

![E-mail recebido](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.pt.png)

1. Clique na hiperligação e o navegador deve carregar o item do SharePoint do dispositivo. Excelente!

![Clicar na hiperligação no e-mail](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.pt.png)

#### 9.4.2 Solicitar um dispositivo e não inserir um comentário no cartão adaptativo

Agora vamos testar o cenário em que um comentário não é inserido.

1. Repita os mesmos passos de:

    - **Atualize** o painel de teste e selecione o ícone **mapa de atividades**
    - Insira a mensagem, `Preciso de um portátil`
    - Responda com `Sim` à pergunta sobre solicitar um dispositivo

![Solicitar dispositivo](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.pt.png)

1. Desta vez, selecione **Surface Laptop 13** como o dispositivo e não insira um comentário.

![Selecionar dispositivo](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.pt.png)

1. **Envie** o pedido selecionando o botão **Enviar pedido**.

![Enviar pedido](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.pt.png)

1. Desta vez, o e-mail recebido na sua caixa de entrada exibirá **Nenhum** como comentário.

![E-mail recebido](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.pt.png)

#### 9.4.3 Não solicitar um dispositivo

Vamos testar o cenário final, que é não solicitar um dispositivo, e o tópico **Adeus** deve ser invocado conforme as instruções do agente.

1. Repita os mesmos passos de:

    - **Atualize** o painel de teste e selecione o ícone **mapa de atividades**
    - Insira a mensagem, `Preciso de um portátil`
    - Desta vez, responda com `Não` à pergunta sobre solicitar um dispositivo

![Testar agente](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.pt.png)

1. O agente invocou o tópico **Adeus** e a pergunta definida no tópico foi feita.

![Tópico Adeus invocado](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.pt.png)

## ✅ Missão Completa

Parabéns! 👏🏻 Aprendeu como construir o fluxo do agente e adicioná-lo ao nosso tópico existente **Solicitar dispositivo**, e como redirecionar o agente para outro tópico.

Este é o fim do **Laboratório 09 - Adicionar um fluxo de agente para automação e melhorar as capacidades do tópico**, selecione o link abaixo para avançar para a próxima lição. Vamos expandir o caso de uso deste laboratório na lição seguinte.

⏭️ [Avançar para a lição **Adicionar Gatilhos de Evento - Ativar capacidades autônomas do agente**](../10-add-event-triggers/README.md)

## 📚 Recursos Táticos

🔗 [Apresentando fluxos de agente: Transformando a automação com fluxos de trabalho orientados por IA](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Visão geral dos fluxos de agente](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Utilizar fluxos de agente com o seu agente](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Lista de funções no guia de referência](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Fluxos de Agente no Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analytics" />

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.