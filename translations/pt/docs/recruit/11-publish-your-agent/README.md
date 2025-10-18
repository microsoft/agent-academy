<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "9dceeba2eae2bb73e328602a060eddab",
  "translation_date": "2025-10-18T02:54:21+00:00",
  "source_file": "docs/recruit/11-publish-your-agent/README.md",
  "language_code": "pt"
}
-->
# 🚨 Missão 11: Publicar o Seu Agente

## 🕵️‍♂️ CODINOME: `OPERAÇÃO PUBLICAR PUBLICAR PUBLICAR`

> **⏱️ Duração da Operação:** `~30 minutos`  

🎥 **Assista ao Tutorial**

[![Miniatura do vídeo de publicação do agente](../../../../../translated_images/video-thumbnail.cb69abce792f4bd310436e8b46ebbfcada62f60c636bb894e4077046131f7023.pt.jpg)](https://www.youtube.com/watch?v=eVZmljhYlSI "Assista ao tutorial no YouTube")

## 🎯 Resumo da Missão

Após concluir uma série de módulos desafiadores, Criador de Agentes, está na hora de dar o passo mais importante: publicar o seu agente. É hora de tornar sua criação acessível para os utilizadores no Microsoft Teams e no Microsoft 365 Copilot.

O seu agente—equipado com uma missão clara, ferramentas poderosas e acesso a fontes de conhecimento essenciais—está pronto para servir. Usando o Microsoft Copilot Studio, você irá implementar o seu agente para que ele comece a ajudar utilizadores reais, diretamente onde eles trabalham.

Vamos lançar o seu agente em ação.

## 🔎 Objetivos

📖 Esta lição aborda:

1. Por que é importante publicar o seu agente
1. O que acontece quando você publica o seu agente
1. Como adicionar um canal (Microsoft Teams & Microsoft 365 Copilot)
1. Como adicionar o agente no Microsoft Teams
1. Como disponibilizar o agente no Microsoft Teams para toda a sua organização

## 🚀 Publicar um agente

Sempre que você trabalha em um agente no Copilot Studio, pode atualizá-lo adicionando conhecimento ou ferramentas. Quando todas as alterações estiverem concluídas e devidamente testadas, estará pronto para publicá-lo. A publicação garante que as atualizações mais recentes estejam disponíveis. Se você atualizar o seu agente com novas ferramentas e não clicar no botão de publicar, essas alterações ainda não estarão disponíveis para os utilizadores finais.

Certifique-se de sempre clicar no botão de publicar quando quiser disponibilizar as atualizações para os utilizadores do seu agente. O seu agente pode ter canais adicionados e, ao clicar em publicar, as atualizações ficam disponíveis para todos os canais configurados no agente.

## ⚙️ Configurar canais

Os canais determinam onde os utilizadores podem acessar e interagir com o seu agente. Após publicar o seu agente, você pode torná-lo disponível em vários canais. Cada canal pode exibir o conteúdo do seu agente de forma diferente.

Você pode adicionar o seu agente aos seguintes canais:

- **Microsoft Teams e Microsoft 365 Copilot** - Disponibilize o seu agente em chats e reuniões do Teams, e nas experiências do Microsoft 365 Copilot ([Saiba mais](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams))
- **Website de demonstração** - Teste o seu agente em um website de demonstração fornecido pelo Copilot Studio ([Saiba mais](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **Website personalizado** - Incorpore o seu agente diretamente no seu próprio website ([Saiba mais](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-web-channels))
- **Aplicação móvel** - Integre o seu agente em uma aplicação móvel personalizada ([Saiba mais](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-custom-application))
- **SharePoint** - Adicione o seu agente a sites do SharePoint para assistência com documentos e sites ([Saiba mais](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-sharepoint))
- **Facebook Messenger** - Conecte-se com utilizadores através da plataforma de mensagens do Facebook ([Saiba mais](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-facebook))
- **Power Pages** - Integre o seu agente em websites do Power Pages ([Saiba mais](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-power-pages))
- **Canais do Azure Bot Service** - Acesse canais adicionais, incluindo Slack, Telegram, Twilio SMS e mais ([Saiba mais](https://learn.microsoft.com/microsoft-copilot-studio/publication-connect-bot-to-azure-bot-service-channels))

Para adicionar um canal, navegue até a aba **Canais** no seu agente e selecione o canal que deseja configurar. Cada canal tem requisitos específicos de configuração e pode exigir autenticação ou etapas adicionais de configuração.

![Aba de canais no agente](../../../../../translated_images/channels.01b4185735e1147c56dd9c6a9d33a751cdf45e44b3b8515b21e2c57a9c1fe9b8.pt.png)

## 📺 Experiências de canais

Diferentes canais oferecem diferentes experiências para os utilizadores. Ao criar um agente para múltiplos canais, certifique-se de estar ciente das diferenças entre eles. É sempre uma boa estratégia testar o seu agente em vários canais para garantir que ele funcione conforme o esperado.

| Experiência                        | Website       | Teams e Microsoft 365 Copilot         | Facebook                 | Dynamics Omnichannel para Atendimento ao Cliente            |
| --------------------------------- | ------------- | ------------------------------------- | ------------------------ | ----------------------------------------------------------- |
| [Pesquisa de satisfação do cliente][1] | Cartão adaptável | Apenas texto                          | Apenas texto             | Apenas texto                                                 |
| [Opções de múltipla escolha][1]   | Suportado     | [Suportado até seis (como cartão hero)][4] | [Suportado até 13][6]    | [Parcialmente suportado][8]                                 |
| [Markdown][2]                     | Suportado     | [Parcialmente suportado][5]           | [Parcialmente suportado][7] | [Parcialmente suportado][9]                                 |
| [Mensagem de boas-vindas][1]      | Suportado     | Suportado                             | Não suportado            | Suportado para [Chat][10]. Não suportado para outros canais. |
| [Você quis dizer][3]              | Suportado     | Suportado                             | Suportado                | Suportado para [Microsoft Teams][11], [Chat][10], Facebook, e canais apenas texto (serviço de mensagens curtas (SMS) via [TeleSign][12] e [Twilio][13], [WhatsApp][14], [WeChat][15], e [Twitter][16]). Ações sugeridas são apresentadas como uma lista apenas texto; os utilizadores devem digitar novamente uma opção para responder. |

[1]: https://learn.microsoft.com/microsoft-copilot-studio/authoring-create-edit-topics
[2]: https://daringfireball.net/projects/markdown/
[3]: https://learn.microsoft.com/microsoft-copilot-studio/advanced-ai-features
[4]: https://learn.microsoft.com/microsoftteams/platform/concepts/cards/cards-reference#hero-card
[5]: https://learn.microsoft.com/microsoftteams/platform/bots/how-to/format-your-bot-messages#text-only-messages
[6]: https://developers.facebook.com/docs/messenger-platform/send-messages/quick-replies/
[7]: https://www.facebook.com/help/147348452522644?helpref=related
[8]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#suggested-actions-support
[9]: https://learn.microsoft.com/dynamics365/customer-service/asynchronous-channels#preview-support-for-formatted-messages
[10]: https://learn.microsoft.com/dynamics365/customer-service/set-up-chat-widget
[11]: https://learn.microsoft.com/dynamics365/customer-service/configure-microsoft-teams
[12]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel
[13]: https://learn.microsoft.com/dynamics365/customer-service/configure-sms-channel-twilio
[14]: https://learn.microsoft.com/dynamics365/customer-service/configure-whatsapp-channel
[15]: https://learn.microsoft.com/dynamics365/customer-service/configure-wechat-channel
[16]: https://learn.microsoft.com/dynamics365/customer-service/configure-twitter-channel

> [!NOTE]
> Existem alguns exemplos de como usar diferentes lógicas para diferentes canais. Um exemplo pode ser encontrado no repositório Power Platform Snippets:
>
> Henry Jammes compartilhou um exemplo de como mostrar um cartão adaptável diferente quando o canal é Microsoft Teams. ([Link para o exemplo](https://github.com/pnp/powerplatform-snippets/blob/main/copilot-studio/multiple-topics-matched-topic/source/multiple-topics-matched.yaml#L40))

## 🧪 Laboratório 11: Publique o seu agente no Teams e no Microsoft 365 Copilot

### 🎯 Caso de uso

O seu agente de Help Desk de TI da Contoso está agora totalmente configurado com capacidades poderosas—ele pode acessar fontes de conhecimento no SharePoint, criar tickets de suporte, enviar notificações proativas e responder inteligentemente às perguntas dos utilizadores. No entanto, todas essas funcionalidades estão atualmente disponíveis apenas no ambiente de desenvolvimento onde foram criadas.

**O Desafio:** Os utilizadores finais não podem aproveitar as capacidades do seu agente até que ele seja devidamente publicado e tornado acessível nos canais onde eles realmente trabalham.

**A Solução:** Publicar o seu agente garante que a versão mais recente—com todas as suas atualizações recentes, novos tópicos, fontes de conhecimento aprimoradas e fluxos configurados—esteja disponível para utilizadores reais. Sem publicar, os utilizadores ainda interagiriam com uma versão mais antiga do seu agente, que pode não ter funcionalidades críticas.

Adicionar o canal Teams e Microsoft 365 Copilot é igualmente crucial porque:

- **Integração com Teams**: Os funcionários da sua organização passam a maior parte do dia no Microsoft Teams para colaboração, reuniões e comunicação. Ao adicionar o seu agente ao Teams, os utilizadores podem obter suporte de TI sem sair do ambiente de trabalho principal.

- **Microsoft 365 Copilot**: Os utilizadores podem acessar o seu agente especializado de Help Desk de TI diretamente na experiência do Microsoft 365 Copilot, tornando-o perfeitamente integrado ao fluxo de trabalho diário nas aplicações do Office.

- **Acesso Centralizado**: Em vez de lembrar-se de websites ou aplicações separadas, os utilizadores podem acessar o suporte de TI através das plataformas que já utilizam, reduzindo barreiras e aumentando a adoção.

Esta missão transforma o seu trabalho de desenvolvimento em uma solução pronta para produção que oferece valor real aos utilizadores finais da sua organização.

### Pré-requisitos

Antes de começar este laboratório, certifique-se de que:

- ✅ Concluiu os laboratórios anteriores e tem um agente de Help Desk da Contoso totalmente configurado
- ✅ O seu agente foi testado e está pronto para uso em produção
- ✅ Tem permissões no ambiente do Copilot Studio para publicar agentes
- ✅ Tem acesso ao Microsoft Teams na sua organização

### 11.1 Publique o seu agente

Agora que todo o trabalho no agente está concluído, precisamos garantir que todo o conteúdo esteja disponível para os utilizadores finais que irão usar o agente. Para garantir que o conteúdo esteja disponível para todos os utilizadores, precisamos publicar o agente.

1. Acesse o agente de Help Desk da Contoso no Copilot Studio (via o [portal de criação do Copilot Studio](https://copilotstudio.microsoft.com))

    No Copilot Studio, é fácil publicar o seu agente. Basta selecionar o botão de publicar no topo da visão geral do agente.

    ![Visão geral de publicação do agente](../../../../../translated_images/publish.0ea13d92c5642af915bb3340c95d21fc560314f4df9de212039a9bfc90b91789.pt.png)

1. Selecione o botão **Publicar** no seu agente

    Isso abrirá o pop-up de publicação - para confirmar que você realmente deseja publicar o seu agente.

    ![Confirmação de publicação](../../../../../translated_images/publish-popup.5c81be18b2a810270303f4020b0469152a40e006d26cb4aa50373ecaf5033777.pt.png)

1. Selecione **Publicar** para confirmar a publicação do seu agente

    Agora uma mensagem será exibida indicando que o seu agente está sendo publicado. Não é necessário manter o pop-up aberto. Você será notificado quando o agente for publicado.

    ![Agente está sendo publicado](../../../../../translated_images/publishing.a459aaf38bc05b77198534174dc726b598c5270c5474227933f6a0f1a1efb299.pt.png)

    Quando a publicação do agente estiver concluída, você verá a notificação no topo da página do agente.

    ![Notificação de publicação concluída](../../../../../translated_images/publish-notification.19af02a64b396fb845fa86917f97f165bb2098b76de97cb039c6a9547323eee1.pt.png)

Mas - apenas publicamos o agente, ainda não o adicionamos a um canal, então vamos corrigir isso agora!

### 11.2 Adicione o canal Teams e Microsoft 365 Copilot

1. Para adicionar o canal Teams e Microsoft 365 Copilot ao nosso agente, precisamos selecionar **Canal** na navegação superior do agente

    ![Aba de canais](../../../../../translated_images/channels-tab.c0e6f94aec1578072eee8efd47e461d58cd685799de84a4ddc18cb418886f834.pt.png)

    Aqui podemos ver todos os canais que podemos adicionar a este agente.

1. Selecione **Teams e Microsoft 365**

    ![Selecionar Teams e Microsoft 365](../../../../../translated_images/teams-m365-copilot.f0893e75ed6cfa7e41d8beb6b0131114d29a1b71dab2b2d888bde406d30fcff0.pt.png)

1. Selecione **Adicionar canal** para completar o assistente e adicionar o canal ao agente

    ![Selecionar adicionar canal](../../../../../translated_images/add-channel.5fd407ac747e713cea43d87cfdc015c5d203a70e729619ca01a67e6868afdb03.pt.png)

    Isso levará algum tempo até que seja adicionado. Após a adição, uma notificação verde aparecerá no topo da barra lateral.

    ![Canal adicionado](../../../../../translated_images/channel-added.ce9c58eff88524ba2a74c37c7939350303e650d93f34c753dfe9636226e197f1.pt.png)

1. Selecione **Ver agente no Teams** para abrir uma nova aba

    ![Ver agente no Teams](../../../../../translated_images/see-agent-teams.5f265c0babfccbe4ef18fbe6259df04ec8649d48fed94d42b3c330e37ca0a9d5.pt.png)

1. Selecione **Adicionar** para adicionar o agente de Help Desk da Contoso ao Teams

    ![Adicionar agente ao Teams](../../../../../translated_images/add-teams.645ddf3b6719bd7edfcf453d77481c18afb7df478a4f655ef2452a0b77ab6944.pt.png)

    Isso levará algum tempo. Após a conclusão, será exibida a seguinte tela:

    ![Agente adicionado com sucesso](../../../../../translated_images/teams-added.3cafc77c56381bdd977ea80a117795c6ea677b2d86568cd5da24338e3958f7ce.pt.png)

1. Selecione **Abrir** para abrir o agente no Teams

    Isso abrirá o agente no Teams como uma aplicação do Teams

    ![Agente aberto no Microsoft Teams](../../../../../translated_images/agent-teams-open.5a83151f38b31ebeccf7cabf36f2bfd03e7045bb902b4103f1d2126c6aec9498.pt.png)

Agora publicamos o agente para funcionar no Microsoft Teams, mas talvez você queira torná-lo disponível para mais pessoas.

### 11.3 Torne o agente disponível para todos os utilizadores no tenant

1. Feche a aba do navegador onde o agente de Help Desk da Contoso está aberto

    Isso deve levá-lo de volta ao Copilot Studio, onde o painel lateral do Teams e Microsoft 365 Copilot ainda está aberto. Apenas abrimos o agente no Teams até agora, mas podemos fazer muito mais aqui. Podemos editar os detalhes do agente, implantá-lo para mais utilizadores e muito mais.

1. Selecione **Editar detalhes**

    ![Editar detalhes](../../../../../translated_images/m365-teams-edit-details.317ee562b1b2aa75c093f2833b793610c3445f69dada7163f164674bad173ab5.pt.png)
Isso abrirá um painel onde podemos alterar vários detalhes e configurações do agente. Podemos modificar detalhes básicos como o ícone, a cor de fundo do ícone e as descrições. Também podemos alterar as configurações do Teams (por exemplo, permitir que um utilizador adicione o agente a uma equipa ou permitir o uso deste agente em chats de grupo e reuniões) aqui. Ao selecionar *mais*, também é possível alterar detalhes do desenvolvedor, como o nome do desenvolvedor, o site, a declaração de privacidade e os termos de uso.

![Painel de edição de detalhes](../../../../../translated_images/edit-details.216f5c77105e190ca504c4c21152f32b0965450427d7cc175df370935b715510.pt.png)

1. Selecione **Cancelar** para fechar o painel de edição de detalhes.

1. Selecione **Opções de disponibilidade**

![Opções de disponibilidade](../../../../../translated_images/m365-teams-availability-options.0ab161ab446293ef5c8f877df3457b87c8a02f5c9df21dc735fb9cddc6b58ed1.pt.png)

Isso abrirá o painel de opções de disponibilidade, onde pode copiar um link para enviar aos utilizadores para utilizarem este agente (atenção, é necessário partilhar o agente com o utilizador também) e pode descarregar um ficheiro para adicionar o seu agente à loja do Microsoft Teams ou Microsoft 365. Para mostrar o agente na loja, existem outras opções: pode mostrá-lo aos seus colegas de equipa e utilizadores partilhados (para aparecer na secção *Criado com Power Platform*) ou pode mostrá-lo a todos na sua organização (isso requer aprovação do administrador).

1. Selecione **Mostrar para todos na minha organização**

![Opções de disponibilidade](../../../../../translated_images/availability-options.a7043460dcbbcdbb6981c86cae687b0d4ecd3d7a8ef709dd267684b17d4a7b8e.pt.png)

1. Selecione **Submeter para aprovação do administrador**

![Submeter para aprovação](../../../../../translated_images/submit-for-approval.6c7cfa08ed2637c8e0219dde1d69ac7e62e81b32289e77ff5b6cdeb730ab5e0b.pt.png)

Agora, o seu administrador precisa aprovar a submissão do agente. Ele pode fazer isso indo ao Centro de Administração do Teams e procurando o Contoso Helpdesk Agent em Apps. Na captura de ecrã, pode ver o que o administrador verá no Centro de Administração do Teams.

![App do Teams pendente de aprovação](../../../../../translated_images/pending-approval.ec9b6ebcdd1c9a8ca8f9bf20148ffa97e40d16720779c14f106dc3ddda170202.pt.png)

O administrador precisa selecionar o Contoso Helpdesk Agent e clicar em *Publicar* para disponibilizar o Contoso Helpdesk Agent para todos.

![Publicar app do Teams](../../../../../translated_images/teams-apps-publish.cccbf85984750c60cc7cc27fc20c152ef14d21e3dacb6fa3df01c024ac5fe7ad.pt.png)

Quando o administrador publicar a submissão do agente, poderá atualizar o Copilot Studio e deverá ver o banner *disponível na loja de apps* nas opções de disponibilidade.

![Disponível na Loja de Apps](../../../../../translated_images/available-in-app-store.aeb2a875a164b537ee62d0ece51399e94986393837a1c6eec544b81c673e23b0.pt.png)

Existem ainda mais possibilidades aqui. O seu administrador pode alterar a política de configuração global e instalar automaticamente o Contoso Helpdesk Agent para todos no inquilino. Além disso, é possível fixar o Contoso Helpdesk Agent na barra lateral esquerda para que todos tenham fácil acesso a ele.

## ✅ Missão Concluída

🎉 **Parabéns!** Conseguiu publicar o seu agente e adicioná-lo ao Teams e ao Microsoft 365 Copilot! A seguir, temos a última missão do curso: Compreender licenciamento.

⏭️ [Avançar para a lição **Compreender licenciamento**](../12-understanding-licensing/README.md)

## 📚 Recursos Táticos

🔗 [Documentação sobre canais de publicação](https://learn.microsoft.com/microsoft-copilot-studio/publication-fundamentals-publish-channels)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/11-publish-your-agent" alt="Análise" />

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional realizada por humanos. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.