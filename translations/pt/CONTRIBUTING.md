<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-18T02:40:36+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "pt"
}
-->
# Contribuir para a MCS Agent Academy

Obrigado pelo seu interesse em contribuir para a MCS Agent Academy! Este guia irá ajudá-lo a configurar o seu ambiente de desenvolvimento e a compreender os nossos padrões de documentação.

## Padrões de Documentação

Seguimos os padrões de documentação da Microsoft para garantir conteúdo consistente e de alta qualidade. Para orientações completas sobre como escrever documentação eficaz, consulte:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Guia completo para escrever documentação que segue o estilo e os padrões da Microsoft.

Este recurso aborda:

- Escrever conteúdo claro e conciso
- Utilizar a sintaxe correta de markdown
- Seguir uma terminologia consistente
- Estruturar a documentação de forma eficaz
- Práticas recomendadas de acessibilidade

## Linting de Markdown

Utilizamos o markdownlint para garantir formatação e qualidade consistentes em toda a nossa documentação. Isso ajuda a manter a legibilidade e os padrões profissionais em todo o repositório.

### Instalar markdownlint-cli2

Para executar o markdownlint localmente e corresponder ao nosso fluxo de trabalho no GitHub, instale o markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Executar markdownlint localmente

Depois de instalado, pode executar o markdownlint em todos os ficheiros markdown no repositório:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Configuração

A nossa configuração do markdownlint está definida em `.markdownlint.jsonc` na raiz do repositório. Esta configuração:

- Desativa verificações de comprimento de linha (MD013), pois não definimos um padrão
- Permite cabeçalhos duplicados apenas em irmãos (MD024) para seções comuns de templates
- Desativa validação de prefixo de lista ordenada (MD029) globalmente devido ao conteúdo indentado que reinicia a numeração
- Permite que blocos de código sejam usados para texto (MD046)

### Adicionar exceções inline para regras do markdownlint

Embora a nossa configuração global lide com a maioria dos cenários comuns, pode encontrar situações em que precisa adicionar exceções inline para regras específicas do markdownlint em ficheiros individuais. Aqui estão exemplos de como fazer isso:

#### Opção 1: Ignorar para a próxima linha

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Opção 2: Ignorar para um intervalo específico

```markdown
<!-- markdownlint-disable MD029 -->
1. First item
5. Fifth item (skips numbers but won't trigger MD029)
10. Tenth item
<!-- markdownlint-enable MD029 -->

<!-- markdownlint-disable MD013 -->
Multiple very long lines that exceed the character limit
can be placed between disable and enable comments
<!-- markdownlint-enable MD013 -->
```

#### Opção 3: Ignorar para o ficheiro inteiro

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Coloque estas no topo do seu ficheiro markdown para desativar regras específicas para o documento inteiro

### Quando usar exceções inline

Pode precisar de exceções para várias regras do markdownlint quando:

1. **MD029 (Numeração de lista ordenada)**: Continuar listas numeradas após outro conteúdo, numeração intencional que não começa em 1, ou conteúdo aninhado complexo
2. **MD013 (Comprimento de linha)**: Exemplos de código, URLs ou conteúdo técnico que não pode ser dividido razoavelmente em várias linhas
3. **MD033 (HTML inline)**: Quando precisa de elementos HTML específicos para formatação que não podem ser alcançados com markdown
4. **MD041 (Cabeçalho na primeira linha)**: Ficheiros de template ou documentos que intencionalmente não começam com um cabeçalho

### Melhores práticas

1. **Use exceções com moderação**: Adicione exceções apenas quando necessário para a clareza da documentação
2. **Comente as suas exceções**: Ao usar exceções, considere adicionar um breve comentário explicando o motivo
3. **Prefira `markdownlint-disable-next-line`**: Isto é mais preciso do que desativar para seções inteiras
4. **Execute o linter antes de submeter**: Sempre execute `markdownlint-cli2 "**/*.md"` antes de enviar alterações

> **Dica:** Pode executar rapidamente as verificações de markdownlint e cSpell nos seus ficheiros markdown usando o script PowerShell `scripts/validate-markdown.ps1` fornecido. Este script ajuda a automatizar verificações comuns de formatação e ortografia para garantir que as suas contribuições atendam às nossas diretrizes.

Pode executá-lo a partir da raiz do repositório usando PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Erros comuns do markdownlint e correções

- **MD036**: Use cabeçalhos adequados (`## Cabeçalho`) em vez de ênfase (`**Texto em negrito**`)
- **MD007**: Corrija a indentação de listas não ordenadas (use 2 espaços, não 4)
- **MD022**: Adicione linhas em branco antes e depois dos cabeçalhos
- **MD032**: Adicione linhas em branco antes e depois das listas
- **MD009**: Remova espaços em branco no final das linhas

### Fluxo de trabalho no GitHub

O nosso repositório inclui um fluxo de trabalho no GitHub que executa automaticamente o markdownlint em todos os pull requests. O fluxo de trabalho:

- Usa a mesma ferramenta markdownlint-cli2 que pode executar localmente
- Exclui os ficheiros `SUPPORT.md`, `SECURITY.md` e `CODE_OF_CONDUCT.md`
- Usa a nossa configuração `.markdownlint.jsonc`
- Relata problemas como avisos, permitindo que os PRs sejam mesclados enquanto destaca oportunidades de formatação

### Extensão markdownlint para VS Code

Se estiver a usar o VS Code, recomendamos instalar a [extensão markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) para linting de markdown em tempo real:

1. **Instale a extensão** - Procure por "markdownlint" de David Anson no marketplace de extensões do VS Code
2. **Configuração automática** - A extensão usará automaticamente o ficheiro de configuração `.markdownlint.jsonc`
3. **Feedback em tempo real** - Veja sublinhados ondulados em problemas de formatação de markdown enquanto escreve
4. **Correções rápidas** - Use `Ctrl+.` (Cmd+. no Mac) para ver correções automáticas disponíveis para muitos problemas
5. **Painel de problemas** - Veja todos os problemas de markdown no painel de problemas do VS Code

Isso fornece feedback imediato enquanto escreve, facilitando o seguimento dos padrões de markdown antes de submeter as suas alterações.

## Verificação Ortográfica

Utilizamos o cSpell (Code Spell Checker) para manter a ortografia consistente em toda a nossa documentação. Isso ajuda a garantir qualidade profissional e reduz erros ortográficos em todo o repositório.

### Instalar cSpell

Para executar o cSpell localmente, instale-o globalmente:

```powershell
npm install -g cspell
```

### Executar cSpell localmente

Depois de instalado, pode executar o cSpell para verificar a ortografia na documentação:

```powershell
# Check all markdown files in the docs folder
cspell "docs/**/*.md"

# Check all markdown files in the repository
cspell "**/*.md"

# Check a specific file
cspell "docs/recruit/README.md"

# Show suggestions for misspelled words
cspell --show-suggestions "docs/**/*.md"

# Check with minimal output (cleaner display)
cspell --no-progress --no-summary "docs/**/*.md"
```

### Configuração

A nossa configuração do cSpell está definida em `cspell.json` na raiz do repositório. Esta configuração:

- Inclui palavras personalizadas específicas do nosso domínio (Copilot, SharePoint, Dataverse, etc.)
- Ignora tipos de ficheiros comuns que não precisam de verificação ortográfica (imagens, ficheiros de build)
- Define o idioma como inglês para verificação ortográfica

### Adicionar novas palavras

Se encontrar uma palavra que o cSpell marca como incorreta, mas que está correta (como nomes de produtos, termos técnicos ou nomes próprios), pode adicioná-la ao array `words` em `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Extensão cSpell para VS Code

Se estiver a usar o VS Code com a [extensão Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), pode adicionar palavras à sua configuração rapidamente:

1. **Veja erros ortográficos** - Procure por sublinhados ondulados em palavras incorretas
1. **Use Correção Rápida** - Clique com o botão direito na palavra sublinhada ou use `Ctrl+.` (Cmd+. no Mac)
1. **Adicione à configuração** - Selecione "Spelling -> Add to cSpell configuration" no menu de contexto
1. **Escolha o local** - A extensão adicionará automaticamente a palavra ao seu ficheiro `cspell.json`

Isto é muito mais rápido do que editar manualmente o ficheiro de configuração para palavras individuais.

### Melhores práticas para ortografia

1. **Execute a verificação ortográfica antes de submeter**: Sempre execute `cspell "docs/**/*.md"` antes de enviar alterações
1. **Corrija erros em vez de ignorá-los**: Sempre que possível, corrija erros ortográficos reais em vez de adicioná-los à lista de palavras
1. **Use terminologia consistente**: Mantenha os nomes de produtos e termos técnicos estabelecidos

## Pré-visualização Local da Documentação com MkDocs

Utilizamos o MkDocs com o tema Material para gerar o nosso site de documentação. Pode executá-lo localmente para pré-visualizar as suas alterações antes de submeter um pull request.

📖 **Saiba mais**: [Documentação MkDocs](https://www.mkdocs.org/) | [Material para MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Configurar o Ambiente Python no VS Code

Recomendamos usar um ambiente virtual para isolar as dependências deste projeto. O VS Code torna este processo simples e irá tratar da instalação do Python, se necessário.

> **GitHub Codespaces**: Estas instruções funcionam perfeitamente no GitHub Codespaces, que vem com Python pré-instalado e o ambiente VS Code pronto para usar.

📖 **Saiba mais**: [Python no VS Code](https://code.visualstudio.com/docs/languages/python) | [Ambientes Python no VS Code](https://code.visualstudio.com/docs/python/environments)

#### Pré-requisitos

**Instalar a Extensão Python**: Instale a [extensão Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) da Microsoft no marketplace do VS Code, se ainda não o fez.

#### Configuração no VS Code

1. **Criar um ambiente virtual**:
   - Abra o Command Palette (`Ctrl+Shift+P` no Windows/Linux, `Cmd+Shift+P` no Mac)
   - Escreva "Python: Create Environment" e selecione
   - Escolha "Venv" (ambiente virtual)
   - Se não houver intérpretes Python disponíveis, o VS Code irá guiá-lo na instalação do Python
   - Selecione o seu intérprete Python (Python 3.8+)
   - O VS Code criará a pasta `.venv` e ativará automaticamente

2. **Verificar configuração**:
   - Abra um novo terminal integrado (`` Ctrl+Shift+` `` no Windows/Linux, `` Cmd+Shift+` `` no Mac, ou `View > Terminal`)
   - Deve ver `(.venv)` no prompt do terminal
   - Execute: `python --version` para verificar

> **Nota**: Abrir um novo terminal garante que o ambiente Python está devidamente ativado. Se preferir usar um ambiente Python existente em vez de criar um novo ambiente virtual, pode usar "Python: Select Interpreter" no Command Palette e escolher o ambiente preferido.

### Instalar MkDocs no VS Code

Com o seu ambiente Python configurado no VS Code, instale o MkDocs e o tema Material:

1. **Abra o terminal integrado do VS Code** (`Ctrl+`` ` ou `View > Terminal`)
2. **Certifique-se de que o ambiente virtual está ativo** (deve ver `(.venv)` no prompt)
3. **Instale os pacotes**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Executar MkDocs no VS Code

Para iniciar o servidor de desenvolvimento local com recarregamento automático:

1. **No terminal integrado do VS Code**, execute:

   ```bash
   mkdocs serve
   ```

2. **O site estará disponível em**: `http://127.0.0.1:8000/agent-academy/`

### Pré-visualização no Navegador Simples do VS Code

Para a melhor experiência de desenvolvimento sem sair do VS Code:

1. **Inicie o servidor MkDocs** no terminal integrado (como mostrado acima)
2. **Abra o Navegador Simples**:
   - **Método 1**: Abra o Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Escreva "Simple Browser: Show" e selecione
   - Insira o URL: `http://127.0.0.1:8000/agent-academy/`

   - **Método 2**: Clique com o botão direito no URL na saída do terminal e selecione "Follow Link"

   - **Método 3**: Use `Ctrl+Click` (Windows) ou `Cmd+Click` (Mac) no URL no terminal

3. **Posicione o navegador**: Pode encaixar o Navegador Simples ao lado do editor para edição e pré-visualização lado a lado

### Benefícios do Ambiente de Trabalho no VS Code

Trabalhar inteiramente no VS Code oferece estas vantagens:

- **Terminal integrado**: Não precisa alternar entre aplicações
- **Pré-visualização lado a lado**: Edite markdown e veja as alterações simultaneamente  
- **Navegação por links**: Clique diretamente nos URLs do terminal para abrir o Navegador Simples
- **Integração de extensões**: Extensões de Python, markdownlint e cSpell funcionam juntas
- **Integração com Git**: Painel de controlo de origem integrado para commits e pull requests

### Funcionalidades de recarregamento automático

Ao executar `mkdocs serve`, obtém:

- **Atualização automática**: Alterações em qualquer ficheiro `.md` na pasta `docs/` recarregam automaticamente o navegador
- **Atualizações de configuração**: Alterações em `mkdocs.yml` também desencadeiam reconstruções
- **Pré-visualização em tempo real**: Veja as suas alterações de formatação, links e conteúdo instantaneamente
- **Validação de links**: O MkDocs irá alertá-lo sobre links internos quebrados

### Comandos úteis do MkDocs no VS Code

Execute estes comandos no terminal integrado do VS Code:

```bash
# Start development server
mkdocs serve

# Build static site (for production)
mkdocs build

# Serve with strict mode (treats warnings as errors)
mkdocs serve --strict

# Show version
mkdocs --version
```

> **Dica:** Para pré-visualizar a documentação localmente com todas as dependências verificadas, use o script PowerShell `scripts/serve-docs.ps1`.

### Benefícios da pré-visualização local

- **Feedback imediato**: Veja como o seu markdown é renderizado com o tema Material
- **Validação de links**: Identifique links quebrados antes de serem publicados
- **Teste de navegação**: Verifique se o seu conteúdo aparece nas seções corretas
- **Pré-visualização móvel**: Teste como o seu conteúdo aparece em diferentes tamanhos de ecrã
- **Verificação de desempenho**: Certifique-se de que imagens e recursos são carregados corretamente

## Questões?

Se tiver dúvidas sobre formatação de markdown ou diretrizes de contribuição, por favor:

1. Revise este guia de contribuição
1. Verifique problemas existentes para questões semelhantes
1. Abra um novo problema

Boas contribuições! 🚀

---

**Aviso Legal**:  
Este documento foi traduzido utilizando o serviço de tradução por IA [Co-op Translator](https://github.com/Azure/co-op-translator). Embora nos esforcemos pela precisão, esteja ciente de que traduções automáticas podem conter erros ou imprecisões. O documento original na sua língua nativa deve ser considerado a fonte autoritária. Para informações críticas, recomenda-se uma tradução profissional humana. Não nos responsabilizamos por quaisquer mal-entendidos ou interpretações incorretas decorrentes do uso desta tradução.