<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-18T03:19:26+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "pt"
}
-->
# Missão 03: Adicionar Gatilhos de Evento para agir autonomamente

--8<-- "disclaimer.md"

## 🕵️‍♂️ CODINOME: `OPERAÇÃO PONTO DE SINAL`

> **⏱️ Duração da Operação:** `~45 minutos`

## 🎯 Resumo da Missão

Bem-vindo de volta, Agente. Na [Missão 02](../02-multi-agent/README.md) - aprendeste a construir um agente auxiliar para receção de candidaturas e um agente conectado para preparação de entrevistas, ampliando as capacidades do teu agente principal de recrutamento.

A tua missão, caso decidas aceitá-la, é **Operação Ponto de Sinal** - aprofundar os **gatilhos de evento** - elevando o sistema de agentes de uma operação reativa para uma **operação autônoma**. Vais transformar os teus agentes de responderem a perguntas para anteciparem necessidades e agirem de forma independente. 

Através de gatilhos de evento e fluxos automatizados, o teu agente de recrutamento irá detetar e-mails com currículos recebidos, processar anexos automaticamente, armazenar dados no Dataverse e notificar a tua equipa de recrutamento de RH via Microsoft Teams - tudo enquanto te concentras em tarefas de maior valor.

Bem-vindo ao mundo onde a automação encontra a inteligência.

## 🔎 Objetivos

Nesta missão, vais aprender:

1. Como os gatilhos de evento permitem comportamentos autônomos dos agentes sem interação do utilizador.
1. As diferenças entre agentes interativos e autônomos no Copilot Studio.
1. Como criar gatilhos de evento que processam automaticamente anexos de e-mail e carregam ficheiros no Dataverse.
1. Como construir fluxos de agentes que publicam cartões adaptativos em canais do Teams para notificações.
1. Como passar dados entre gatilhos de evento e fluxos de agentes para automação de ponta a ponta.

## 🤔 O que é um Gatilho de Evento?

Anteriormente, em [Recruit](../../recruit/10-add-event-triggers/README.md), aprendemos sobre gatilhos de evento. Vamos fazer um breve resumo caso tenhas perdido.

**Gatilhos de evento** permitem que um agente _aja_ por conta própria quando algo acontece noutro sistema - sem necessidade de mensagem do utilizador. Quando o evento configurado é acionado - como “novo item no SharePoint,” “novo e-mail,” “tarefa atribuída no Planner,” ou até uma recorrência baseada no tempo, um conector envia uma carga útil de gatilho ao teu agente. O agente segue então as tuas instruções para decidir quais ações ou tópicos chamar.

### Características principais

- **Ativação autônoma:**
      - Diferente dos gatilhos de tópico que começam quando um utilizador interage com o agente, os gatilhos de evento são acionados por eventos externos, permitindo um comportamento proativo.

- **Baseado em carga útil:**
      - Cada evento entrega uma carga útil (variáveis + instruções opcionais) através de um conector. O agente usa as instruções definidas e a carga útil para decidir o que fazer a seguir.
      - Por exemplo, _chamar um tópico_ ou _executar ações definidas por Ferramentas_.

- **Exemplos prontos para uso:**
      - Ficheiro ou item criado no SharePoint/OneDrive
      - Tarefa do Planner concluída/atribuída
      - Resposta submetida no Microsoft Forms
      - Recorrência/agenda

    A disponibilidade depende das políticas de dados da tua organização configuradas no Power Automate.

- **Requer orquestração generativa:**
      - Os gatilhos de evento estão disponíveis apenas quando a orquestração generativa está ativada para o agente.

- **Cobrança/uso:**
      - Cada entrega de gatilho conta como uma mensagem para a capacidade do Copilot Studio.
      - Por exemplo, uma recorrência de 10 minutos envia uma mensagem a cada 10 minutos.

- **Modelo de autenticação e configuração:**
      - Adicionas gatilhos dentro da visão geral do agente, em _Triggers_. A autenticação para o conector de gatilho usa a conta do criador do agente (“autenticação do autor do agente”).
      - Podes editar os parâmetros e a carga útil do gatilho no portal do Power Automate.

- **Testes e observabilidade:**
      - Podes testar os gatilhos no painel de teste do agente e inspecionar o comportamento com o mapa de atividades antes de publicar.

!!! info "Resumo para desenvolvedores"

    Pensa nos gatilhos de evento como **sinais semelhantes a webhooks** que enviam uma carga útil estruturada ao teu agente, permitindo que ele _inicie_ o trabalho e encadeie ações entre sistemas - sem esperar que um utilizador solicite.

### Gatilhos de tópico - como diferem

Anteriormente aprendeste sobre gatilhos de tópico em [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), mas ainda podes estar a perguntar-te como os gatilhos de _Tópico_ diferem dos gatilhos de _Evento_, e por que essa distinção é importante para entender o que torna um agente autônomo.

Os gatilhos de tópico controlam _quando um tópico é executado_, geralmente em resposta a uma mensagem do utilizador.

- Na orquestração generativa, o gatilho padrão é **Por agente** - o planeador escolhe um tópico cujo nome/descrição melhor corresponda à mensagem do utilizador.
- Na orquestração clássica, o padrão é **Frases** - o planeador escolhe um tópico quando uma ou várias frases de gatilho correspondem melhor à mensagem do utilizador.

Outros tipos de gatilho incluem `Mensagem recebida`, `Evento recebido`, `Atividade recebida`, `Atualização de conversa`, `Invocar recebido`, `Inatividade` e `Plano concluído`.

!!! info "Diferença principal"

    Os gatilhos de tópico são iniciadores de _atividade de conversa_ dentro do chat.
    
    Os gatilhos de evento são iniciadores de _evento do sistema_ entregues via conectores que podem executar o agente sem qualquer conversa.

### Guia rápido de Gatilho de Tópico vs Gatilho de Evento

- **Gatilho de tópico:** O utilizador (ou atividade de chat) disse/fez X ➡️ executar Tópico T.
- **Gatilho de evento:** SharePoint/Planner/E-mail/Timer acionado com carga útil P ➡️ agente avalia instruções ➡️ chama Ações/Tópicos conforme necessário.

## 🏓 Agente interativo vs Agente autônomo - comparação

Agora que sabes a diferença entre gatilhos de evento e gatilhos de tópico, vamos aprender sobre a diferença entre um agente interativo e um agente autônomo.

Nos termos do Copilot Studio, "interativo" refere-se a agentes que se envolvem principalmente através de **tópicos** num chat ou canal. "Autônomo" refere-se a agentes que também utilizam **gatilhos de evento** para funcionar sem entrada do utilizador.

A tabela abaixo resume as suas diferenças e semelhanças.

| Dimensão                            | Agente interativo     | Agente autônomo                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Como começa                         | O utilizador (ou atividade de chat) aciona um tópico. Exemplo: Por agente, Frases, Mensagem recebida.   | Gatilho de evento externo envia uma carga útil via conector para o agente. Exemplo: SharePoint, Planner, e-mail, agenda, etc. |
| Uso principal                       | Perguntas e respostas, fluxos guiados, ações solicitadas no chat - Teams, web, etc.  | Operações proativas e automação em segundo plano - reagir a mudanças no sistema e depois notificar, arquivar ou orquestrar tarefas. |
| Superfície de gatilho               | Gatilhos de tópico: Por agente / Frases / Mensagem recebida / Tipos de atividade / Invocar / Inatividade / Plano concluído | Biblioteca de gatilhos de evento via conectores; carga útil inclui dados do evento + instruções opcionais. |
| Planeador (orquestração generativa) | Fortemente utilizado para gatilhos Por agente e Plano concluído para selecionar/sequenciar tópicos. | Necessário para gatilhos de evento; o agente usa instruções + carga útil para decidir quais ações/tópicos chamar. |
| Exemplo típico                      | O utilizador pergunta "Qual é a nossa política de reembolso?" → O tópico é executado, consulta o conhecimento, responde. | Nova tarefa atribuída no Planner → Gatilho de evento é acionado → O agente publica uma mensagem no Teams, atualiza um registo ou chama um tópico. |
| Caminho de configuração             | Criar tópicos, definir tipo de gatilho, autorizar diálogo/ações; publicar em canais. | Adicionar gatilho de evento (Visão geral → Triggers), autenticar conector com credenciais do autor do agente, configurar carga útil/instruções; testar via painel de teste; publicar. |
| Autenticação e governança           | Executa sob o contexto do canal/autenticação; gatilhos de tópico respondem a atividades de chat em canais permitidos. | Disponibilidade do gatilho depende das políticas de dados do Power Automate; conectores executam sob a conta do criador do agente. |
| Observabilidade                     | Testar tópicos dentro do Copilot Studio, inspecionar transcrições/atividades de conversa. | Usar Testar gatilho e mapa de atividades para validar execução antes de publicar, monitorar atividade após publicar. |
| Impacto na capacidade               | Cada mensagem do utilizador/resposta do agente é uma mensagem que consome capacidade. | Cada entrega de evento também é uma mensagem, além de quaisquer ações subsequentes. Exemplo: uma recorrência de 10 minutos = 6 mensagens/hora |

### Quando usar qual?

- Escolhe **gatilhos de tópico (interativos)** quando os utilizadores iniciam a conversa com o agente - FAQ, receção guiada ou tarefas de estilo comando dentro do chat. O gatilho Por agente do planeador reduz a curadoria manual de frases.
- Adiciona **gatilhos de evento (autônomos)** quando o agente deve iniciar a conversa ou tomar ação por conta própria - em atualizações no SharePoint/Dataverse, e-mails recebidos ou em um cronograma. Isso move-te de operações reativas para proativas.

## Dicas para desenvolvedores e cuidados

1. **Ativa a orquestração generativa** para qualquer agente que desejas tornar autônomo. Os gatilhos de evento não aparecerão de outra forma.

1. **Modela a carga útil desde o início.** Decide quais campos mínimos o teu agente precisa do gatilho, como `itemId`, `assignedTo`, `dueDate`, e adiciona instruções concisas que informem ao agente quais ações/tópicos chamar com base nos valores da carga útil.

1. **O escopo de autenticação importa.** Os gatilhos autenticam usando a conta do criador do agente. Certifica-te de que essa conta tem as permissões corretas do conector e está em conformidade com as políticas de dados do Power Automate.

1. **Controla custos e ruído.** Recorrências de alta frequência ou fontes muito ativas podem consumir rapidamente a capacidade de mensagens - limita onde possível ou adiciona condições no gatilho para filtrar eventos.

1. **Testa antes de publicar.** Usa **Testar gatilho** e o mapa de atividades para observar o plano e as ações chamadas - itera nas instruções/carga útil até que o comportamento seja estável.

## 🧪 Laboratório 03 - Automatizar e-mails de candidatura de candidatos

Vamos agora adicionar um gatilho de evento ao **Agente de Recrutamento** e construir um fluxo de agente no agente filho **Agente de Receção de Candidaturas** para lidar com o processamento adicional de forma autônoma.

### ✨ Cenário de uso

!!! info ""

    **Como** Recrutador de RH

    **Quero** ser notificado quando um e-mail com um currículo chegar à minha Caixa de Entrada e for automaticamente carregado no Dataverse

    **Para que eu possa** estar informado sobre os currículos enviados por e-mail para candidaturas automaticamente carregados no Dataverse

Vamos alcançar isso usando duas técnicas:

1. Um gatilho de evento para quando o e-mail chegar,
    1. Verificar se o `contentType` do ficheiro é igual a `PDF` como tipo de formato.
    1. Extrair o ficheiro e carregá-lo no Dataverse usando ações através do conector Dataverse.
    1. Em seguida, enviar um prompt ao agente para processamento adicional, passando parâmetros de entrada das ações do Dataverse.

1. Um fluxo de agente será adicionado ao agente filho **Agente de Receção de Candidaturas**, que será invocado pelo prompt no gatilho de evento.
    1. Usar os parâmetros de entrada passados pelo prompt do gatilho de evento num cartão adaptativo publicado num canal no Microsoft Teams para notificar a equipa de Recrutamento de RH. O cartão adaptativo terá um link para a linha no Dataverse que será visualizada no **Agente de Recrutamento**.

Vamos começar!

### ✨ Pré-requisitos para completar esta missão

Precisarás de **uma das seguintes opções**:

- **Ter completado a Missão 01 e a Missão 02** e ter o teu Agente de Recrutamento pronto, **OU**
- **Importar a solução inicial da Missão 03** se estiveres a começar do zero ou precisares de recuperar. [Descarregar Solução Inicial da Missão 03](https://aka.ms/agent-academy)

!!! note "Importação de Solução e Dados de Exemplo"
    Se estiveres a usar a solução inicial, consulta [Missão 01](../01-get-started/README.md) para instruções detalhadas sobre como importar soluções e dados de exemplo para o teu ambiente.

Também precisarás de acesso ao **Microsoft Teams** para completar o segundo exercício do laboratório de publicação de um cartão adaptativo no Microsoft Teams.

### Laboratório 3.1 - Automatizar o carregamento de currículos para o Dataverse recebidos por e-mail

1. No Agente de Recrutamento, desce na **aba de Visão Geral** e seleciona **+ Adicionar gatilho**.

       ![Adicionar gatilho ao agente](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.pt.png)

1. Aparecerá uma lista de gatilhos. Seleciona **Quando um novo e-mail chegar (V3)** e clica em **Seguinte**.

       ![Selecionar gatilho Quando um novo e-mail chegar (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.pt.png)

1. Agora veremos o **Nome do Gatilho** e as referências de conexão **Iniciar sessão** para os aplicativos listados.

       Renomeia o nome do gatilho para o seguinte,
    
       ```text
       Quando um novo e-mail chegar de um candidato
       ```

       Certifica-te de que vês um visto verde ao lado de cada uma das referências de conexão dos aplicativos listados. Se não vires um visto verde, inicia sessão através dos três pontos (...) e seleciona **+ Nova referência de conexão** para criar uma nova referência de conexão.

       ![Atualizar detalhes do nome do gatilho e verificar referências de conexão](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.pt.png)

1. O último passo é definir as propriedades de entrada do gatilho. Atualiza as seguintes propriedades para os valores abaixo:

     | Propriedade | Como configurar | Detalhes |
     |-------------|-----------------|----------|
     | **Incluir Anexos (Opcional)** | Dropdown | Sim |
     | **Filtro de Assunto (Opcional)** | Escrever/Inserir com teclado | Candidatura |
     | **Apenas com Anexos (Opcional)** | Dropdown | Sim |

       Seleciona **Criar gatilho**.

       ![Configurar entradas do gatilho](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.pt.png)

1. Uma mensagem de confirmação aparecerá indicando que o gatilho foi adicionado ao agente. Seleciona **Fechar** e o gatilho será listado na seção **Triggers**.
Agora vamos atualizar o gatilho do evento para adicionar mais capacidades de automação. Selecione os **três pontos (...)** no gatilho e escolha **Editar no Power Automate**.

![Selecionar Editar no Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.pt.png)

1. O gatilho será carregado como um fluxo no portal de criação do Power Automate. O que está a ver é o designer de fluxo no portal de criação do Power Automate. É aqui que podemos adicionar mais lógica e ações para maior automação. O gatilho aparecerá no topo, seguido por **Envia um prompt para o copiloto especificado para processamento** como a última ação no fluxo.

![Designer de fluxo no portal de criação do Power Automate](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.pt.png)

1. Por padrão, o gatilho **Quando um novo email chega** no Power Automate pode processar vários emails juntos se vários chegarem ao mesmo tempo, executando o fluxo apenas uma vez para o lote.

Para garantir que o fluxo seja executado separadamente para cada email, ative a configuração **Dividir em** nas configurações do gatilho e selecione `@triggerOutputs()?['body/value']` no campo de array do menu suspenso.

Com o **Dividir em** ativado e o campo de array configurado como `@triggerOutputs()?['body/value']`, o fluxo será executado individualmente para cada mensagem, mesmo que várias cheguem simultaneamente.

![Ativar configurações de Dividir em no gatilho](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.pt.png)

1. A seguir, vamos adicionar alguma lógica para verificar o tipo de arquivo do anexo. Queremos apenas carregar anexos de arquivos .PDF e não imagens (que podem vir de assinaturas de email). Selecione o ícone **+** abaixo do gatilho e escolha **Controle** na seção **Ferramentas integradas**.

![Selecionar Controle](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.pt.png)

1. Selecione a ação **Condição**.

![Selecionar ação Condição](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.pt.png)

1. Agora configuramos a condição para verificar se o tipo de arquivo do anexo é .PDF. No campo **Escolher um valor**, selecione o **ícone de raio** ou o **ícone fx** à direita.

1. No campo **Pesquisar**, digite o seguinte:

```text
content type
```

1. Em seguida, selecione o parâmetro **Attachments Content-Type** do gatilho.

1. Depois, selecione **Adicionar** para adicionar o conteúdo dinâmico ao parâmetro **Id** da ação.

![Configurar ação Condição](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.pt.png)

1. Vamos fazer uma pausa aqui por um momento. Provavelmente notou que a ação **Para cada** apareceu automaticamente.

Selecione a ação **Para cada**. Esta ação representa a repetição de cada anexo no email, já que o parâmetro **Attachments Content-Type** do gatilho está vinculado a cada anexo.

Por trás dos bastidores, é um array e é por isso que a ação **Para cada** foi adicionada automaticamente quando selecionámos o parâmetro **Attachments Content-Type** na ação **Condição**.

Para saber mais sobre isso, expanda o bloco de aprendizagem adicional abaixo.

??? info "Aprendizagem Adicional: Ação Para cada aparecendo automaticamente"

🤔 **Por que "Aplicar a cada" ou "Para cada" aparece automaticamente?**

Quando seleciona um parâmetro (conteúdo dinâmico) que representa uma lista ou array de itens - por exemplo, uma lista de anexos, emails ou linhas - o Power Automate reconhece que pode querer processar cada item individualmente.

Para ajudar com isso, o Power Automate adiciona automaticamente um loop **“Aplicar a cada”** (ou **Para cada**) em torno da sua ação. Isso garante que sua ação será executada uma vez para cada item na lista, em vez de tentar processar a lista inteira de uma vez (o que poderia causar erros).

🦋 **Exemplo**

- Se selecionar "Attachments" de uma ação anterior (que é um array) e tentar usá-lo em uma ação que espera um único arquivo, o Power Automate envolve sua ação em um loop **"Aplicar a cada"** (ou **Para cada**). 
- Dessa forma, sua ação será executada para **cada anexo** - um de cada vez.

💡 **Pontos-chave**

- **Automático:** O loop aparece automaticamente para ajudar a processar cada item em uma coleção.
- **Previne erros:** Sem o loop, sua ação pode falhar porque não consegue lidar com vários itens de uma vez.
- **Indicação visual:** É uma forma visual de mostrar que seu fluxo repetirá a ação para cada item na lista.

![Ação Para cada explicada](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.pt.png)

1. Em seguida, no outro campo **Escolher um valor**, digite o seguinte:

```text
application/pdf
```

Isso garantirá que, para cada anexo de arquivo, será verificado se o formato da extensão do arquivo é .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.pt.png)

1. Agora vamos configurar o caminho **Verdadeiro** para extrair o arquivo do email e carregá-lo na tabela **Currículos** do Dataverse.

Adicione uma nova ação abaixo no caminho **Verdadeiro** e procure por `html to text`. Selecione a ação **Html para texto**.

Para saber mais sobre a ação **Html para texto**, expanda o bloco de aprendizagem adicional abaixo.

??? info "Aprendizagem Adicional: Ação Html para texto"

🤔 **O que é a ação "HTML para texto"?**

A ação **HTML para texto** no Power Automate é usada para converter conteúdo formatado em HTML em texto simples. Isso é especialmente útil quando recebe dados (como emails, conteúdo da web ou respostas de API) que contêm tags HTML e deseja extrair apenas o texto legível, sem qualquer formatação ou código.

⚙️ **Como funciona?**

- **Entrada:** Fornece uma string de conteúdo HTML (por exemplo, o corpo de um email).
- **Saída:** A ação remove todas as tags HTML e retorna apenas o texto simples.

👍🏻 **Quando deve usar?**

- Quando quiser extrair texto legível de emails, páginas da web ou respostas de API que contenham HTML.
- Antes de enviar conteúdo para sistemas que não suportam formatação HTML (como SMS, mensagens do Teams ou bases de dados).
- Para limpar dados para processamento ou análise posterior.

🔭 **Onde encontrar?**

- No Power Automate para fluxos de Agente, procure pela ação chamada `HTML para texto`. Está sob o conector **Operações de Dados**.

💡 **Pontos-chave**

- Remove todas as tags HTML e deixa apenas o texto.
- Não interpreta ou executa scripts/estilos - apenas remove as tags.
- Útil para limpeza de dados e preparação de conteúdo para saídas em texto simples.

![Adicionar ação Html para texto](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.pt.png)

1. Em seguida, precisamos criar uma nova referência de conexão para a ação **Html para texto** selecionando **Adicionar novo**.

![Adicionar nova referência de conexão](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.pt.png)

1. A ação agora pode ser configurada. Vamos adicionar o parâmetro **Body** do gatilho. No campo **Conteúdo**, selecione o **ícone de raio** ou **ícone fx** à direita.

![Adicionar Conteúdo Dinâmico](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.pt.png)

1. Na aba **Conteúdo Dinâmico**, procure por `body` e selecione o parâmetro **Body**, seguido de selecionar **Adicionar**.

![Adicionar parâmetro Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.pt.png)

1. Concluímos a configuração desta ação, então vamos sair da ação selecionando os dois parênteses angulares («) apontando para a esquerda para recolher o painel.

![Recolher painel de ação](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.pt.png)

1. Vamos adicionar uma nova ação selecionando o **ícone +** abaixo da ação **Html para texto**, o que carregará o painel para adicionar ações. Selecione o conector **Microsoft Dataverse**.

![Adicionar nova ação](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.pt.png)

1. Selecione a ação **Adicionar uma nova linha**.

![Adicionar uma nova ação de linha](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.pt.png)

1. Renomeie a ação selecionando os **três pontos (...)**, copie e cole o seguinte como nome:

```text
Adicionar uma nova linha de Currículo
```

Para o parâmetro **Nome da tabela**, procure por `res` e selecione a tabela **Currículos**.

![Renomear ação e configurar parâmetro Nome da tabela](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.pt.png)

1. Selecione o campo **Título do Currículo** e clique no **ícone de raio** ou **ícone fx** à direita.

![Configurar parâmetro Título do Currículo](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.pt.png)

1. Na aba **Função**, insira a seguinte expressão que utiliza a função `item()`.

```text
item()?['name']
```

Para saber mais sobre a função `item()`, expanda o bloco de aprendizagem adicional abaixo.

??? info "Aprendizagem Adicional: Função `item()`"

🤔 **O que é a função `item()`?**

- Quando utiliza uma ação **Aplicar a cada**, o Power Automate percorre cada elemento em uma coleção (array).
- É mais frequentemente usada dentro de ações como **Aplicar a cada** (ou **Para cada**), **Selecionar** ou **Filtrar array**.

⚙️ **Como funciona?**

- `item()` é uma função que retorna o item atual sendo processado em um loop ou operação de array.
- Dentro desse loop, `item()` refere-se ao _elemento atual_ sendo processado.

📌 **Onde pode usar?**

- **Aplicar a cada:** para acessar propriedades do item atual.
- **Selecionar:** para transformar cada item em um array.
- **Filtrar array:** para referenciar o item atual sendo avaliado.

🦋 **Exemplo**

- Expressão dentro de um loop:
       -  `item()?['Email']`
- Isso obtém a propriedade `Email` do item atual.

💡 **Pontos-chave**

- `item()` é _sensível ao contexto_: sempre se refere ao item atual no loop ou operação de array em que está.
- Se aninhar loops, pode usar `items('NomeDoLoop')` para se referir a itens em um loop específico.

Selecione **Adicionar** para adicionar a expressão ao parâmetro **Título do Currículo**.

![Adicionar expressão para o parâmetro Título do Currículo](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.pt.png)

1. Ainda precisamos configurar vários outros parâmetros. Selecione **Mostrar tudo** e, no campo **Carta de Apresentação**, clique no **ícone de raio** ou **ícone fx** à direita.

Na aba **Função**, insira a seguinte expressão que utiliza a mesma expressão da [missão anterior](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Essa expressão verifica se o _texto_ da ação **Html para texto** tem mais de 2000 caracteres e, se for o caso, retorna apenas os primeiros 2000 caracteres; caso contrário, retorna o texto completo.

![Adicionar expressão para o parâmetro Carta de Apresentação](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.pt.png)

1. A expressão agora será adicionada ao campo **Carta de Apresentação**.

![Expressão adicionada ao parâmetro Carta de Apresentação](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.pt.png)

1. Para o campo **Endereço de Email de Origem**, procure por `from` e selecione o parâmetro **De** do gatilho, pois este contém o valor do endereço de email.

![Parâmetro Endereço de Email de Origem](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.pt.png)

1. Para o campo **Data de Upload**, clique no **ícone de raio** ou **ícone fx** à direita. Na aba **Função**, insira a seguinte expressão que utiliza a função `utcNow()`.

```text
utcNow()
```

Para saber mais sobre a função `utcNow`, expanda o bloco de aprendizagem adicional abaixo.

??? info "Aprendizagem Adicional: Função `utcNow`"

🤔 **O que é a função `utcNow()`?**

- A função utcnow() no Power Automate retorna a data e hora atual no Tempo Universal Coordenado (UTC) em um formato ISO 8601, como: `2025-09-23T04:32:14Z`

🦋 **Exemplo**

- Expressão:
       -  `concat('Relatório gerado em ', utcnow())`
- Resultado:
       - Relatório gerado em `2025-09-23T04:32:14Z`

💡 **Pontos-chave**
- **Sem argumentos (parâmetros de entrada) necessários:** fornece sempre o carimbo de data/hora atual em UTC.
   - **Casos de uso**
       - Adicionar carimbos de data/hora a registos ou nomes de ficheiros
       - Comparar a hora atual com outras datas
       - Agendar ou definir condições baseadas no tempo

![Parâmetro de Data de Upload](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.pt.png)

1. Concluímos agora a configuração da ação **Adicionar uma nova linha de Currículo**, então vamos sair do painel ao colapsá-lo.

![Sair do painel de ação](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.pt.png)

1. Vamos adicionar uma nova ação selecionando o **ícone +** abaixo da ação **Adicionar uma nova linha de Currículo**, o que carregará o painel para adicionar ações. Selecione novamente o conector **Microsoft Dataverse**.

![Adicionar ação Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.pt.png)

1. Selecione a ação **Carregar um ficheiro ou uma imagem**.

![Adicionar a ação Carregar um ficheiro ou uma imagem](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.pt.png)

1. Renomeie a ação selecionando os **três pontos (...)**, copie e cole o seguinte como nome:

```text
Carregar Ficheiro de Currículo
```

![Renomear ação](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.pt.png)

1. Em seguida, selecione o campo **Nome do conteúdo** e clique no **ícone de raio** ou **ícone fx** à direita.

No **separador de Função**, insira a seguinte expressão que utiliza a função `item ()`. Isto obtém a propriedade `name` do item atual (o ficheiro anexado).

```text
item()?['name']
```

![Configurar parâmetro Nome do conteúdo](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.pt.png)

1. Para o parâmetro **Nome da tabela**, procure por `res` e selecione a tabela **Currículos**.

![Configurar parâmetro Nome da tabela](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.pt.png)

1. Em seguida, selecione o campo **ID da linha** e clique no **ícone de raio** ou **ícone fx** à direita.

Procure por `ID` e selecione o parâmetro **Currículo** da ação _Adicionar uma nova linha_ do Dataverse, pois este contém o valor do ID da linha para carregar o ficheiro PDF.

Selecione **Adicionar**.

![Selecionar ID da linha](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.pt.png)

1. Selecione o campo **Nome da coluna** e escolha a opção **Currículo PDF**.

![Configurar parâmetro Nome da coluna](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.pt.png)

1. Selecione o campo **Conteúdo** e clique no **ícone de raio** ou **ícone fx** à direita.

No **separador de Função**, insira a seguinte expressão que utiliza a função `item ()`. Isto obtém a propriedade `contentBytes` do item atual (o ficheiro anexado). `contentBytes` refere-se aos dados binários brutos de um ficheiro ou anexo, codificados como uma string Base64.

```text
item()?['contentBytes']
```

1. Concluímos a configuração desta ação, então vamos sair da ação selecionando os dois parênteses angulares («) apontando para a esquerda para colapsar o painel.

![Colapsar painel de ação](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.pt.png)

1. Em seguida, selecione a ação **Enviar um prompt ao copiloto especificado para processamento**, depois arraste e solte esta ação abaixo da ação **Carregar Ficheiro de Currículo** no caminho _Verdadeiro_ da condição.

![Arrastar e soltar ação no caminho Verdadeiro](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.pt.png)

1. Selecione a ação **Enviar um prompt ao copiloto especificado para processamento** para configurá-la.

![Selecionar ação](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.pt.png)

1. No campo **Corpo/mensagem**, selecione todo o conteúdo do campo e limpe/exclua-o.

![Limpar parâmetro Corpo](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.pt.png)

1. Copie e cole o seguinte texto no campo **Corpo/mensagem** e destaque o `RESUME ID PLACEHOLDER`.

```text
Enviar [ResumeId (text)] = "RESUME ID PLACEHOLDER" e [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" e [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" para a Ferramenta "Notificar canal de candidatos do Teams" no agente filho "Agente de Receção de Candidaturas"
```

![Substituir texto do marcador de posição do ID do Currículo](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.pt.png)

1. Selecione o **ícone de raio** ou **ícone fx** à direita.

Procure por `resume` e selecione o parâmetro **Currículo** da ação _Adicionar uma nova linha Dataverse_, pois este contém o valor `ID` da linha de Currículo criada.

Selecione **Adicionar**.

![Selecionar parâmetro Currículo](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.pt.png)

1. Destaque o `RESUME TITLE PLACEHOLDER`. Selecione o **ícone de raio** ou **ícone fx** à direita.

Procure por `title` e selecione o parâmetro **Título do Currículo** da ação _Adicionar uma nova linha Dataverse_, pois este contém o valor `título do currículo` da linha de Currículo criada.

Selecione **Adicionar**.

![Selecionar parâmetro Título do Currículo](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.pt.png)

1. Destaque o `RESUME NUMBER PLACEHOLDER`. Selecione o **ícone de raio** ou **ícone fx** à direita.

Procure por `resume number` e selecione o parâmetro **Número do Currículo** da ação _Adicionar uma nova linha Dataverse_, pois este contém o valor `Número do Currículo` da linha de Currículo criada.

Selecione **Adicionar**.

![Selecionar parâmetro Número do Currículo](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.pt.png)

1. Concluímos a configuração desta ação e o fluxo do agente 🙌🏻 Estás a fazer um ótimo trabalho! Agora vamos guardar o fluxo de evento ao selecionar **Guardar rascunho**.

![Guardar rascunho](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.pt.png)

1. Agora precisamos editar os detalhes do fluxo do agente, selecione **Voltar**.

![Selecionar Voltar](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.pt.png)

1. Selecione **Editar** na seção **Detalhes** e atualize o **Plano** para a opção **Copilot Studio**.

Selecione **Guardar**.

![Alterar plano para Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.pt.png)

1. Aparecerá um modal para confirmar a mudança para o plano Copilot Studio. Selecione **Confirmar**.

![Confirmar mudança para plano Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.pt.png)

1. O plano agora está atualizado para **Copilot Studio**. Selecione **Editar**, pois precisamos publicar o fluxo de evento para o nosso agente.

![Editar fluxo](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.pt.png)

1. Selecione **Publicar**.

![Publicar](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.pt.png)

Hooray! O fluxo de evento agora está publicado 😃

![Publicado](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.pt.png)

Vamos prosseguir para criar um novo fluxo de agente que será invocado pelo agente filho **Agente de Receção de Candidaturas**.

### Laboratório 3.2 - Notificar um canal do Teams usando um cartão adaptável

Agora vamos criar um novo fluxo de agente para o agente filho **Agente de Receção de Candidaturas**, que utiliza os valores passados pelo evento de disparo, para publicar um cartão adaptável num canal do Teams. Este cartão adaptável irá alertar a equipa de recrutamento de RH sobre o PDF que foi carregado automaticamente para que possam revê-lo.

Vamos começar!

1. No **Agente de Recrutamento**, selecione o separador **Agentes** e escolha o **Agente de Receção de Candidaturas**.

![Selecionar Agente de Receção de Candidaturas](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.pt.png)

1. Desça até **Ferramentas** e selecione **+ Adicionar**.

![Adicionar Ferramenta](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.pt.png)

1. Aparecerá o modal **Adicionar ferramenta**. Selecione **+ Nova ferramenta**.

![Selecionar Nova Ferramenta](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.pt.png)

1. Selecione **Fluxo de agente**.

![Selecionar Fluxo de agente](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.pt.png)

1. O **designer de fluxo de agente** será carregado a seguir. No disparador **Quando um agente chama o fluxo**, selecione **+ Adicionar uma entrada**.

![Selecionar adicionar uma entrada](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.pt.png)

1. Selecione **Texto** como o tipo de entrada do utilizador.

![Selecionar Texto](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.pt.png)

1. No campo de texto de entrada, copie e cole o seguinte como nome do parâmetro de entrada.

```text
ResumeId
```

![Entrada ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.pt.png)

1. Repita os mesmos passos para adicionar uma segunda entrada de texto. Copie e cole o seguinte como nome do parâmetro de entrada.

```text
ResumeTitle
```

![Entrada ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.pt.png)

1. Repita os mesmos passos para adicionar uma terceira entrada de texto. Copie e cole o seguinte como nome do parâmetro de entrada.

```text
ResumeNumber
```
![Entrada ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.pt.png)

1. Lembras-te de como em [Recrutar](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) adicionámos um cartão adaptável dentro de um Tópico para o nosso agente? Desta vez, vamos adicionar um cartão adaptável num fluxo de agente. Agora vamos adicionar outra ação ao nosso fluxo de agente que publicará um cartão adaptável num canal do Teams.

Selecione o **ícone +** abaixo do disparador.

![Adicionar nova ação](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.pt.png)

1. Selecione a ação **Publicar cartão num chat ou canal**.

![Selecionar ação de publicar cartão num chat ou canal](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.pt.png)

1. É necessário criar uma referência de conexão ao Microsoft Teams com a conta de utilizador com que está autenticado. Selecione **Iniciar sessão**.

![Selecionar iniciar sessão](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.pt.png)

1. Selecione a sua conta de utilizador e depois clique em **Permitir acesso**.

![Selecionar Permitir acesso](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.pt.png)

1. Para os seguintes parâmetros de entrada,

| Parâmetro | Como configurar | Detalhes |
|----------|------------------|---------|
| **Publicar como** | Dropdown | Selecione a opção `Bot de Fluxo` |
| **Publicar em** | Dropdown | Selecione a opção `Canal` |
| **Equipa** | Dropdown | Selecione uma equipa disponível no seu ambiente à qual tenha acesso para o propósito de completar este exercício de laboratório |
| **Canal** | Dropdown | Selecione um canal disponível no seu ambiente ao qual tenha acesso para o propósito de completar este exercício de laboratório |

![Configurar parâmetros de entrada](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.pt.png)

1. Em seguida, vamos configurar o campo **Cartão Adaptável**. Selecione o campo **Cartão Adaptável**.

![Selecionar campo Cartão Adaptável](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.pt.png)

1. Abra o [ficheiro JSON Atualizado da Tabela de Currículos](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), copie todo o seu conteúdo e cole-o no campo Cartão Adaptável.

![Copiar e colar JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.pt.png)

1. Semelhante ao que fizemos em [Recrutar](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), vamos substituir os valores existentes no payload JSON por valores reais ou conteúdo dinâmico.

Primeiro, vamos atualizar o URL para a propriedade `url` dentro da propriedade `selectAction`. Este URL será substituído pelo URL da vista de sistema de Currículos na aplicação model-driven **Hiring Hub**. Isto permitirá que o Recrutador selecione a ação e seja direcionado para a vista de sistema de Currículos na aplicação model-driven.

Destaque o valor atual do URL e apague-o.

![Selecionar valor do URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.pt.png)

1. Na aplicação model-driven **Hiring Hub**, navegue até à vista de sistema **Currículos** usando o menu do lado esquerdo e copie o URL. Depois, volte ao fluxo do agente e cole o URL copiado na propriedade **url** dentro da propriedade `selectAction`.

![Copiar URL da vista de sistema de Currículos](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.pt.png)
1. Deve ver o seguinte onde destacado em amarelo estão os detalhes do seu ambiente da aplicação orientada por modelos **Hiring Hub**.

     | Parâmetro | Valor | Explicação |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL da organização do ambiente Dataverse/Dynamics 365 |
     | **appid** | GUID | Para abrir uma aplicação orientada por modelos específica, utiliza-se o parâmetro de consulta appid ou appname. Neste caso, é utilizado o appid |
     | **viewid** | GUID | O parâmetro de consulta que é o id da vista |

       ![Colar URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.pt.png)

1. Em seguida, vamos adicionar valores de conteúdo dinâmico para várias propriedades. Vamos começar com o texto que exibirá a referência do Número de Currículo da linha criada automaticamente pelo gatilho do evento.

      Selecione o ícone **painel** para carregar o painel de ações.

       ![Selecionar ícone do painel](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.pt.png)

1. Desça até a linha onde vê a propriedade `text` para `RESUME NUMBER PLACEHOLDER`. Destaque o valor do espaço reservado e elimine-o.

       ![Eliminar espaço reservado](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.pt.png)

1. Clique entre as aspas duplas e selecione o ícone **raio** ou o ícone **fx** à direita.

      No separador **Dynamic Content**, selecione o parâmetro **ResumeNumber** e clique em **Add**.

       ![Adicionar parâmetro ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.pt.png)

1. O parâmetro **ResumeNumber** será agora adicionado como conteúdo dinâmico à propriedade `text`.

       ![Conteúdo dinâmico ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.pt.png)

1. Vamos repetir os mesmos passos para o `RESUME NAME PLACEHOLDER`. Desça até a linha onde vê a propriedade `text` para `RESUME NAME PLACEHOLDER`. Destaque o valor do espaço reservado e elimine-o.

       ![Espaço reservado para Nome do Currículo](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.pt.png)

1. Clique entre as aspas duplas e selecione o ícone **raio** ou o ícone **fx** à direita.

      No separador **Dynamic Content**, selecione o parâmetro **ResumeTitle** e clique em **Add**.

       ![Adicionar parâmetro ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.pt.png)

1. O parâmetro **ResumeTitle** será agora adicionado como conteúdo dinâmico à propriedade `text`.

       ![Conteúdo dinâmico ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.pt.png)

1. Vamos repetir os mesmos passos para o valor **Due Date**, que representa quando um recrutador deve rever o currículo. Desça até a linha onde vê a propriedade `text` para `May 21, 2023`.

       ![Selecionar Permitir acesso](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.pt.png)

1. Elimine este valor de espaço reservado para a data e clique entre as aspas duplas.

       ![Eliminar](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.pt.png)

1. Selecione o ícone **raio** ou o ícone **fx** à direita e, no separador **Function**, insira a seguinte expressão e clique em **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Esta expressão utiliza duas funções.

     | Função | Explicação |
     |----------|------------|
     | **addDays** | Adiciona um número especificado de dias a uma data e retorna a data resultante em formato de string |
     | **utcNow** | Retorna a data e hora atual no formato de Tempo Universal Coordenado (UTC) como uma string. |

      Para o valor utcNow, estamos a formatar a data para ser mês e dia, seguido do ano.

       ![Expressão Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.pt.png)

      A expressão será agora adicionada à propriedade `text`.

       ![Expressão Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.pt.png)

1. Por fim, vamos atualizar o URL para a propriedade `url` dentro da propriedade `actions` array no final do payload JSON. Este URL de espaço reservado atual será substituído pelo URL da linha do Currículo na aplicação orientada por modelos **Hiring Hub**. Isto permitirá ao Recrutador selecionar a ação `Action.OpenURL` do cartão adaptativo e ser direcionado ao Currículo na aplicação orientada por modelos.

       ![Eliminar espaço reservado para URL de Visualizar Currículo](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.pt.png)

1. Na aplicação orientada por modelos **Hiring Hub**, abra uma linha na vista de sistema **Resumes** usando o menu do lado esquerdo. A linha do currículo será carregada como um formulário na aplicação orientada por modelos.

      Copie o URL para a linha do Currículo.

    ??? info "Como navegar de volta para a aplicação orientada por modelos **Hiring Hub** caso tenha saído/fechado"

        1. Aceda a [https://make.powerapps.com](https://make.powerapps.com) e certifique-se de que está no ambiente de desenvolvimento que está a usar para estes exercícios de laboratório, caso contrário, altere para ele.
        
        ![Aceder a make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.pt.png)

        1. Selecione **Apps** no painel do menu do lado esquerdo e, para a aplicação orientada por modelos **Hiring Hub**, selecione o ícone **Play** para carregá-la no seu navegador.
        
        ![Selecionar aplicação orientada por modelos Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.pt.png)

       ![Copiar URL da linha do Currículo](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.pt.png)

1. Depois, navegue de volta para o fluxo do agente, destaque o valor atual do URL de espaço reservado e elimine-o.

       ![Eliminar espaço reservado para URL da linha do Currículo](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.pt.png)

1. Depois, cole o URL copiado na propriedade **url** dentro da propriedade `url`.

       ![Colar o URL copiado da linha do Currículo](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.pt.png)

1. Deve ver o seguinte. Elimine o valor id `GUID` no final. Vamos substituir este conteúdo dinâmico - o parâmetro **ResumeId**.

       ![Eliminar espaço reservado para URL de Visualizar Currículo](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.pt.png)

1. Selecione o ícone **raio** ou o ícone **fx** à direita.

      No separador **Dynamic Content**, selecione o parâmetro **ResumeId** e clique em **Add**.

       ![Parâmetro ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.pt.png)

1. O **ResumeId** será adicionado como conteúdo dinâmico. O seguinte destacado em amarelo são os detalhes do seu ambiente da aplicação orientada por modelos **Hiring Hub**.

     | Parâmetro | Valor | Explicação |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL da organização do ambiente Dataverse/Dynamics 365 |
     | **appid** | GUID | Para abrir uma aplicação orientada por modelos específica, utiliza-se o parâmetro de consulta appid ou appname. Neste caso, é utilizado o appid |
     | **id** | GUID | O parâmetro de consulta que é o id da linha do Currículo |

       ![Conteúdo dinâmico ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.pt.png)

1. Concluímos a configuração da ação **Post card in a chat or channel** 👏🏻 Saia do painel de configuração da ação selecionando o ícone **x**.

       ![Fechar painel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.pt.png)

1. Finalmente, vamos configurar a última ação, **Respond to the agent**, enviando um texto de volta ao agente para encerrar o processamento.

      Na ação **Respond to the agent**, selecione **+Add an output**.

       ![Selecionar Adicionar uma saída](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.pt.png)

1. Selecione **Text** como o tipo de saída.

       ![Selecionar texto como tipo de saída](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.pt.png)

1. Insira o seguinte como nome da saída.

       ![Saída de Fim de Conversa](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.pt.png)

1. Insira o seguinte como valor para a saída.

       ```text
       Finished
       ```

       ![Valor da Saída de Fim de Conversa](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.pt.png)

1. Concluímos agora a configuração do fluxo do agente. Selecione **Save draft** para guardar o rascunho do fluxo do agente. Uma mensagem de confirmação aparecerá após ser guardado.

       ![Guardar rascunho](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.pt.png)

1. Antes de publicar o fluxo do agente, precisamos atualizar os detalhes do fluxo do agente. Selecione o separador **Overview** e clique em **Edit**.

      No campo de nome do fluxo, insira o seguinte.

       ```text
       Notify Teams Applicant channel
       ```      

      Depois, selecione o ícone **Refresh** para atualizar a descrição do fluxo do agente usando IA.

      Em seguida, selecione **Save** para guardar os detalhes atualizados do fluxo do agente.

       ![Editar e guardar detalhes](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.pt.png)

1. Navegue de volta para o separador **Designer** e selecione **Publish** para publicar o fluxo do agente. Uma mensagem de confirmação aparecerá após ser guardado.

       ![Publicar fluxo do agente](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.pt.png)

1. O fluxo do agente agora precisa ser adicionado como uma ferramenta no **Application Intake Agent**. Navegue de volta para o **Hiring Agent** e selecione o separador **Agents**, depois selecione o **Application Intake Agent**.

       ![Selecionar Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.pt.png)

1. Na secção **Details** do agente, vamos atualizar o campo **Description**. Copie o seguinte e cole no final do texto da descrição.

       ```text
       e também notificar o canal Teams Applicant
       ```

       ![Atualizar descrição do agente](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.pt.png)

1. Em seguida, vamos adicionar o fluxo do agente como uma ferramenta. Desça e selecione **+ Add**.

       ![Selecionar Adicionar](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.pt.png)

1. Selecione o fluxo do agente criado anteriormente, **Notify Teams Applicant Channel**.

       ![Selecionar fluxo do agente](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.pt.png)

1. Em seguida, selecione **Add and configure**.

       ![Selecionar Adicionar e configurar](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.pt.png)

1. Na secção **Inputs** do fluxo do agente, os três inputs que configurámos anteriormente no fluxo do agente são visíveis. Por padrão, a configuração **Fill using** está definida como **Dynamically fill with AI**. Vamos manter esta configuração como está, pois o prompt do gatilho do evento (na última ação, **Sends a prompt to the specified copilot for processing** - isto são os passos 38-44 do **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) conterá os valores dos parâmetros que a IA irá extrair.

       ![Inputs do fluxo do agente como ferramenta](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.pt.png)

1. Agora que a ferramenta foi adicionada ao **Application Intake Agent**, as instruções do agente precisam ser atualizadas. Selecione o ícone **seta para trás** para retornar à lista de agentes.

       ![Selecionar ícone de seta para trás](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.pt.png)

1. Selecione o **Application Intake Agent** no separador **Agents** do **Hiring Agent**.

       ![Selecionar Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.pt.png)

1. No campo **Instructions**, insira uma nova linha após as instruções `2.Post-Upload`. Copie e cole as seguintes instruções.

       ```text
       Processo para Upload de Currículo via Email
       1. Quando receber uma mensagem, **Envie [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" e [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" e [ResumeNumber (text_2)]= "R01026" para a Ferramenta "Notify Teams Applicant channel"** no agente filho "Application Intake Agent", chame [AGENT FLOW PLACEHOLDER]
       ```

       ![Atualizar instruções do Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.pt.png)

1. Destaque o texto `[AGENT FLOW PLACEHOLDER`.

       ![Destacar espaço reservado](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.pt.png)

1. Insira o caractere barra, `/`, e selecione a ferramenta **Notify Teams Applicant Channel**.

       ![Selecionar ferramenta Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.pt.png)
1. O fluxo do agente será agora invocado pelo **Application Intake Agent**, conforme as instruções, após a última ação (**Enviar um prompt para o copiloto especificado para processamento**) no gatilho de evento enviar o prompt que contém os valores dos parâmetros de volta para o agente.

      Selecione **Guardar** para salvar as instruções atualizadas para o **Application Intake Agent**.

       ![Selecionar Guardar](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.pt.png)

1. As instruções serão agora atualizadas assim que o agente for guardado.

       ![Instruções atualizadas](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.pt.png)

1. Agora precisamos **Publicar** o **Hiring Agent**. Selecione **Publicar** no canto superior direito e, na janela modal _Publicar este agente_ que aparece, selecione **Publicar**.

       ![Publicar Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.pt.png)

1. Após a publicação, aparecerá uma mensagem de confirmação indicando que o agente foi publicado.

       ![Mensagem de confirmação](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.pt.png)

Agora podemos testar o agente!

### Laboratório 3.3 - Testar o gatilho de evento

1. Para executar o gatilho de evento, é necessário enviar um email com um ficheiro PDF de currículo. No Outlook, componha uma nova mensagem de email.

     | Componente do Email | Detalhes |
     |----------|------------|
     | **Destinatário** | Utilize a conta de utilizador com a qual está autenticado como valor |
     | **Anexo de ficheiro** | Carregue o ficheiro [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Corpo** | Copie e cole o texto abaixo como corpo do email  |

       ```text
       Prezado(a) Gestor(a) de Recrutamento,

       Escrevo para expressar meu interesse na posição de Engenheiro Sénior de Power Platform na sua organização. Com mais de nove anos de experiência na entrega de soluções seguras e escaláveis em plataformas de nuvem da Microsoft, estou confiante na minha capacidade de contribuir eficazmente para a sua equipa.

       Na minha função mais recente como Engenheiro Líder de Power Platform, desenvolvi um pipeline automatizado de triagem de currículos, reduzindo o trabalho manual e melhorando a capacidade de pesquisa. Entreguei aplicações de gestão de casos de RH, introduzi fluxos conscientes de soluções e implementei verificações de PR para melhorar os tempos de implementação. A minha experiência inclui Power Apps, Power Automate, Power Pages, Dataverse e uma gama de serviços Microsoft 365, bem como integração com APIs Graph/REST e Azure Functions.

       Anteriormente, desenvolvi aprovações no Teams com cartões adaptativos, reduzindo os tempos de aprovação para o mesmo dia, e criei frameworks robustos de tratamento de erros. O meu histórico também inclui a migração de fluxos de trabalho legados para o Power Automate e a construção de portais de autoatendimento adotados por centenas de colaboradores.

       Sou licenciado em Ciências da Computação e certificado como Desenvolvedor Power Platform (PL-400) e Arquiteto de Soluções (PL-600). Também sou apaixonado por mentoria e tenho trabalhado como voluntário em grupos locais de criadores.

       Por favor, encontre o meu CV anexado para sua consideração. Ficaria muito grato pela oportunidade de discutir como as minhas competências e experiência se alinham às suas necessidades.

       Agradeço pelo seu tempo e consideração.

       Atenciosamente,  
       Taylor Testperson
       ```

       **Envie** o email após compô-lo.

       ![Compor email com anexo de ficheiro PDF](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.pt.png)

1. No portal do Power Automate Maker para o fluxo de gatilho de evento, selecione o ícone **Atualizar** para visualizar a execução do fluxo que foi bem-sucedida para o email enviado.

       ![Selecionar ícone de atualizar para visualizar execução do fluxo](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.pt.png)

1. De volta ao Copilot Studio no **Hiring Agent**, selecione o separador **Atividade**.

       ![Selecionar separador Atividade](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.pt.png)

1. O separador **Atividade** será carregado e exibirá todas as atividades do **Hiring Agent**. Haverá uma atividade com o nome **Automated** e status **Complete**. Esta atividade representa o gatilho de evento e o fluxo do agente que foi invocado.

       ![Atividade concluída](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.pt.png)

1. Selecione a atividade e, no mapa de atividades, selecione o gatilho de evento. No painel à direita, observe como os parâmetros de entrada no prompt contêm os valores dos parâmetros `Resume Id`, `Resume Title` e `Resume Number` da linha do **Dataverse** que foi criada. Isso foi configurado anteriormente nos passos 18 - 27 do **Laboratório 3.1 - Automatizar o upload de currículos para o Dataverse recebidos por email**.

       ![Gatilho de evento](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.pt.png)

1. Navegue de volta para a aplicação model-driven **Hiring Hub** e, na vista de sistema de **Resumes**, selecione **Atualizar** para atualizar a vista. A nova linha criada para o currículo enviado por email será agora listada, pois foi criada através do gatilho de evento.

       ![Linha de currículo criada](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.pt.png)

1. Volte ao Copilot Studio e selecione o fluxo do agente **Notify Teams Applicant Channel** dentro do **Application Intake Agent** no mapa de atividades. No painel à direita, observe como as entradas têm valores da linha do Dataverse. Isso foi enviado pelo prompt da última ação (**Enviar um prompt para o copiloto especificado para processamento**) no gatilho de evento que contém os valores dos parâmetros da nova linha criada no Dataverse. É assim que podemos passar valores de parâmetros de gatilhos de evento para fluxos de agentes.

       ![Selecionar fluxo do agente](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.pt.png)

1. Por fim, vamos dar uma olhada no cartão adaptativo publicado no canal do **Microsoft Teams**. No canal, veremos o cartão adaptativo que exibe as informações sobre a nova linha de currículo criada no Dataverse. Passe o cursor sobre o hyperlink no início do cartão adaptativo e observe como o URL é o URL da vista de sistema de Resumes que configurámos anteriormente no JSON (passos 15 - 19 do **Laboratório 3.2 - Notificar um canal do Teams usando um cartão adaptativo**) do payload do cartão adaptativo.

       ![URL da vista de sistema da tabela de currículos no cartão adaptativo](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.pt.png)

1. Selecione o hyperlink e será direcionado para a vista de sistema de Resumes na aplicação model-driven **Hiring Hub** no seu navegador.

       ![Vista de sistema de currículos na aplicação model-driven Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.pt.png)

1. Navegue de volta para o cartão adaptativo publicado no canal do Microsoft Teams. Desta vez, passe o cursor sobre **Ver Currículo**, que é a ação `Action.OpenURL` do cartão adaptativo. Observe como o URL é a linha de currículo que configurámos anteriormente no JSON (passos 30 - 36 do **Laboratório 3.2 - Notificar um canal do Teams usando um cartão adaptativo**) do payload do cartão adaptativo.

       ![URL da linha de currículo no cartão adaptativo](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.pt.png)

1. Selecione a ação e será direcionado para o formulário da linha de currículo na aplicação model-driven **Hiring Hub** no seu navegador.

       ![Linha de currículo na aplicação model-driven Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.pt.png)

## ✅ Missão Completa

Parabéns! 👏🏻 Excelente trabalho, Operativo.

✅ Gatilho de evento: criou um gatilho de evento que passa valores de parâmetros do Dataverse para um fluxo de agente.  
✅ Construiu um fluxo de agente: consome os valores de parâmetros do Dataverse para publicar um cartão adaptativo num canal do Microsoft Teams para alertar a equipa de recrutamento de RH.  
✅ Atualizou as instruções do agente filho: para invocar o fluxo assim que o gatilho de evento for concluído.

Isso permite que o **Hiring Agent** funcione de forma autónoma sempre que currículos forem recebidos como anexos de email e notifique a equipa de recrutamento de RH para revisão manual.

Este é o fim do **Laboratório 03 - Automatizar emails de candidatura de candidatos**, selecione o link abaixo para avançar para a próxima lição.

⏭️ [Avançar para a lição **Instruções de Autoria de Agentes**](../04-agent-instructions/README.md)

## 📚 Recursos Táticos

📖 [Torne o seu agente autónomo no Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)

📖 [Adicionar um gatilho de evento](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)

📖 [Utilizar fluxos de agentes com o seu agente](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)

📖 [Introdução aos gatilhos do Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)

📖 [Utilizar fluxos do Power Automate com agentes](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)

📖 [Prevenção de perda de dados para o Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.