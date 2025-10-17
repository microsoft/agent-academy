<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-17T18:51:14+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "fr"
}
-->
# Contribuer à MCS Agent Academy

Merci de votre intérêt pour contribuer à MCS Agent Academy ! Ce guide vous aidera à configurer votre environnement de développement et à comprendre nos normes de documentation.

## Normes de documentation

Nous suivons les normes de documentation de Microsoft pour garantir un contenu cohérent et de haute qualité. Pour des conseils complets sur la rédaction d'une documentation efficace, veuillez consulter :

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Guide complet pour rédiger une documentation conforme au style et aux normes de Microsoft.

Ce guide couvre :

- La rédaction de contenu clair et concis
- L'utilisation correcte de la syntaxe Markdown
- L'adoption d'une terminologie cohérente
- La structuration efficace de la documentation
- Les meilleures pratiques en matière d'accessibilité

## Vérification Markdown

Nous utilisons markdownlint pour garantir une mise en forme et une qualité cohérentes dans toute notre documentation. Cela permet de maintenir la lisibilité et des standards professionnels dans le dépôt.

### Installer markdownlint-cli2

Pour exécuter markdownlint localement et correspondre à notre workflow GitHub, installez markdownlint-cli2 :

```powershell
npm install -g markdownlint-cli2
```

### Exécuter markdownlint localement

Une fois installé, vous pouvez exécuter markdownlint sur tous les fichiers Markdown du dépôt :

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Configuration

Notre configuration markdownlint est définie dans `.markdownlint.jsonc` à la racine du dépôt. Cette configuration :

- Désactive les vérifications de longueur de ligne (MD013) car nous n'avons pas défini de standard
- Autorise les titres en double uniquement entre sections parentes (MD024) pour les sections de modèles courants
- Désactive la validation des préfixes de listes ordonnées (MD029) globalement en raison du contenu indenté qui réinitialise la numérotation
- Autorise l'utilisation de blocs de code pour du texte (MD046)

### Ajouter des exceptions inline pour les règles markdownlint

Bien que notre configuration globale gère la plupart des scénarios courants, vous pourriez rencontrer des situations nécessitant des exceptions inline pour des règles markdownlint spécifiques dans des fichiers individuels. Voici des exemples de comment procéder :

#### Option 1 : Ignorer pour la ligne suivante

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Option 2 : Ignorer pour une plage spécifique

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

#### Option 3 : Ignorer pour tout le fichier

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Placez ces lignes en haut de votre fichier Markdown pour désactiver des règles spécifiques pour tout le document.

### Quand utiliser des exceptions inline

Vous pourriez avoir besoin d'exceptions pour diverses règles markdownlint dans les cas suivants :

1. **MD029 (Numérotation des listes ordonnées)** : Continuer des listes numérotées après un autre contenu, numérotation intentionnelle qui ne commence pas à 1, ou contenu imbriqué complexe
2. **MD013 (Longueur de ligne)** : Exemples de code, URL ou contenu technique qui ne peut pas être raisonnablement divisé en plusieurs lignes
3. **MD033 (HTML inline)** : Lorsque vous avez besoin d'éléments HTML spécifiques pour une mise en forme qui ne peut pas être réalisée avec Markdown
4. **MD041 (Titre en première ligne)** : Fichiers modèles ou documents qui ne commencent intentionnellement pas par un titre

### Bonnes pratiques

1. **Utilisez les exceptions avec parcimonie** : Ajoutez des exceptions uniquement lorsque cela est nécessaire pour la clarté de la documentation
2. **Commentez vos exceptions** : Lorsque vous utilisez des exceptions, ajoutez un bref commentaire expliquant pourquoi
3. **Privilégiez `markdownlint-disable-next-line`** : Cela est plus précis que de désactiver des sections entières
4. **Exécutez le linter avant de valider** : Exécutez toujours `markdownlint-cli2 "**/*.md"` avant de soumettre des modifications

> **Astuce :** Vous pouvez rapidement exécuter markdownlint et les vérifications cSpell sur vos fichiers Markdown en utilisant le script PowerShell `scripts/validate-markdown.ps1` fourni. Ce script aide à automatiser les vérifications courantes de mise en forme et d'orthographe pour garantir que vos contributions respectent nos directives.

Vous pouvez l'exécuter depuis la racine du dépôt en utilisant PowerShell :

```powershell
./scripts/validate-markdown.ps1
```

### Erreurs courantes de markdownlint et corrections

- **MD036** : Utilisez des titres appropriés (`## Titre`) au lieu de l'emphase (`**Texte en gras**`)
- **MD007** : Corrigez l'indentation des listes non ordonnées (utilisez 2 espaces, pas 4)
- **MD022** : Ajoutez des lignes vides avant et après les titres
- **MD032** : Ajoutez des lignes vides avant et après les listes
- **MD009** : Supprimez les espaces en fin de ligne

### Workflow GitHub

Notre dépôt inclut un workflow GitHub qui exécute automatiquement markdownlint sur toutes les pull requests. Le workflow :

- Utilise le même outil markdownlint-cli2 que vous pouvez exécuter localement
- Exclut les fichiers `SUPPORT.md`, `SECURITY.md` et `CODE_OF_CONDUCT.md`
- Utilise notre configuration `.markdownlint.jsonc`
- Signale les problèmes sous forme d'avertissements, permettant aux PR de fusionner tout en mettant en évidence les opportunités de mise en forme

### Extension markdownlint pour VS Code

Si vous utilisez VS Code, nous recommandons d'installer l'[extension markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) pour une vérification en temps réel de vos fichiers Markdown :

1. **Installer l'extension** - Recherchez "markdownlint" par David Anson dans le marketplace des extensions de VS Code
2. **Configuration automatique** - L'extension utilisera automatiquement votre fichier de configuration `.markdownlint.jsonc`
3. **Retour en temps réel** - Voyez des soulignements ondulés sur les problèmes de mise en forme Markdown au fur et à mesure que vous tapez
4. **Corrections rapides** - Utilisez `Ctrl+.` (Cmd+. sur Mac) pour voir les corrections automatiques disponibles pour de nombreux problèmes
5. **Panneau de problèmes** - Consultez tous les problèmes Markdown dans le panneau Problèmes de VS Code

Cela vous offre un retour immédiat pendant la rédaction, facilitant le respect des normes Markdown avant de valider vos modifications.

## Vérification orthographique

Nous utilisons cSpell (Code Spell Checker) pour maintenir une orthographe cohérente dans toute notre documentation. Cela garantit une qualité professionnelle et réduit les fautes de frappe dans le dépôt.

### Installer cSpell

Pour exécuter cSpell localement, installez-le globalement :

```powershell
npm install -g cspell
```

### Exécuter cSpell localement

Une fois installé, vous pouvez exécuter cSpell pour vérifier l'orthographe dans la documentation :

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

### Configuration

Notre configuration cSpell est définie dans `cspell.json` à la racine du dépôt. Cette configuration :

- Inclut des mots personnalisés spécifiques à notre domaine (Copilot, SharePoint, Dataverse, etc.)
- Ignore les types de fichiers courants qui n'ont pas besoin de vérification orthographique (images, fichiers de construction)
- Définit la langue en anglais pour la vérification orthographique

### Ajouter de nouveaux mots

Si vous rencontrez un mot que cSpell signale comme mal orthographié mais qui est en réalité correct (comme des noms de produits, des termes techniques ou des noms propres), vous pouvez l'ajouter au tableau `words` dans `cspell.json` :

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Extension cSpell pour VS Code

Si vous utilisez VS Code avec l'[extension Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), vous pouvez rapidement ajouter des mots à votre configuration :

1. **Voir les erreurs d'orthographe** - Recherchez des soulignements ondulés sur les mots mal orthographiés
1. **Utiliser la correction rapide** - Cliquez droit sur le mot souligné ou utilisez `Ctrl+.` (Cmd+. sur Mac)
1. **Ajouter à la configuration** - Sélectionnez "Spelling -> Add to cSpell configuration" dans le menu contextuel
1. **Choisir l'emplacement** - L'extension ajoutera automatiquement le mot à votre fichier `cspell.json`

C'est beaucoup plus rapide que de modifier manuellement le fichier de configuration pour des mots individuels.

### Bonnes pratiques pour l'orthographe

1. **Exécutez la vérification orthographique avant de valider** : Exécutez toujours `cspell "docs/**/*.md"` avant de soumettre des modifications
1. **Corrigez les fautes plutôt que de les ignorer** : Lorsque c'est possible, corrigez les erreurs d'orthographe réelles plutôt que de les ajouter à la liste des mots
1. **Utilisez une terminologie cohérente** : Respectez les noms de produits et les termes techniques établis

## Prévisualisation locale de la documentation avec MkDocs

Nous utilisons MkDocs avec le thème Material pour générer notre site de documentation. Vous pouvez l'exécuter localement pour prévisualiser vos modifications avant de soumettre une pull request.

📖 **En savoir plus** : [Documentation MkDocs](https://www.mkdocs.org/) | [Material pour MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Configuration de l'environnement Python dans VS Code

Nous recommandons d'utiliser un environnement virtuel pour isoler les dépendances de ce projet. VS Code facilite ce processus et gère l'installation de Python si nécessaire.

> **GitHub Codespaces** : Ces instructions fonctionnent parfaitement dans GitHub Codespaces, qui inclut Python préinstallé et l'environnement VS Code prêt à l'emploi.

📖 **En savoir plus** : [Python dans VS Code](https://code.visualstudio.com/docs/languages/python) | [Environnements Python dans VS Code](https://code.visualstudio.com/docs/python/environments)

#### Prérequis

**Installer l'extension Python** : Installez l'[extension Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) de Microsoft depuis le marketplace de VS Code si ce n'est pas déjà fait.

#### Configuration dans VS Code

1. **Créer un environnement virtuel** :
   - Ouvrez la palette de commandes (`Ctrl+Shift+P` sur Windows/Linux, `Cmd+Shift+P` sur Mac)
   - Tapez "Python: Create Environment" et sélectionnez-le
   - Choisissez "Venv" (environnement virtuel)
   - Si aucun interpréteur Python n'est disponible, VS Code vous guidera pour installer Python
   - Sélectionnez votre interpréteur Python (Python 3.8+)
   - VS Code créera un dossier `.venv` et l'activera automatiquement

2. **Vérifiez la configuration** :
   - Ouvrez un nouveau terminal intégré (`` Ctrl+Shift+` `` sur Windows/Linux, `` Cmd+Shift+` `` sur Mac, ou `View > Terminal`)
   - Vous devriez voir `(.venv)` dans l'invite du terminal
   - Exécutez : `python --version` pour vérifier

> **Remarque** : Ouvrir un nouveau terminal garantit que l'environnement Python est correctement activé. Si vous préférez utiliser un environnement Python existant plutôt que de créer un nouvel environnement virtuel, vous pouvez utiliser "Python: Select Interpreter" dans la palette de commandes et choisir votre environnement préféré.

### Installer MkDocs dans VS Code

Avec votre environnement Python configuré dans VS Code, installez MkDocs et le thème Material :

1. **Ouvrez le terminal intégré de VS Code** (`Ctrl+`` ` ou `View > Terminal`)
2. **Assurez-vous que votre environnement virtuel est actif** (vous devriez voir `(.venv)` dans l'invite)
3. **Installez les packages** :

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Exécuter MkDocs dans VS Code

Pour démarrer le serveur de développement local avec rechargement automatique :

1. **Dans le terminal intégré de VS Code**, exécutez :

   ```bash
   mkdocs serve
   ```

2. **Le site sera disponible à l'adresse** : `http://127.0.0.1:8000/agent-academy/`

### Prévisualisation dans le navigateur simple de VS Code

Pour une meilleure expérience de développement sans quitter VS Code :

1. **Démarrez le serveur MkDocs** dans le terminal intégré (comme indiqué ci-dessus)
2. **Ouvrez le navigateur simple** :
   - **Méthode 1** : Ouvrez la palette de commandes (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Tapez "Simple Browser: Show" et sélectionnez-le
   - Entrez l'URL : `http://127.0.0.1:8000/agent-academy/`

   - **Méthode 2** : Cliquez droit sur l'URL dans la sortie du terminal et sélectionnez "Follow Link"

   - **Méthode 3** : Utilisez `Ctrl+Click` (Windows) ou `Cmd+Click` (Mac) sur l'URL dans le terminal

3. **Positionnez le navigateur** : Vous pouvez ancrer le navigateur simple à côté de votre éditeur pour une édition et une prévisualisation côte à côte

### Avantages de l'espace de travail VS Code

Travailler entièrement dans VS Code offre ces avantages :

- **Terminal intégré** : Pas besoin de basculer entre les applications
- **Prévisualisation côte à côte** : Modifiez le Markdown et voyez les changements simultanément  
- **Navigation par lien** : Cliquez directement sur les URL du terminal pour ouvrir le navigateur simple
- **Intégration des extensions** : Les extensions Python, markdownlint et cSpell fonctionnent ensemble
- **Intégration Git** : Panneau de contrôle source intégré pour les validations et les pull requests

### Fonctionnalités de rechargement automatique

Lors de l'exécution de `mkdocs serve`, vous bénéficiez de :

- **Actualisation automatique** : Les modifications apportées à tout fichier `.md` dans le dossier `docs/` rechargent automatiquement le navigateur
- **Mises à jour de configuration** : Les modifications apportées à `mkdocs.yml` déclenchent également des reconstructions
- **Prévisualisation en temps réel** : Voyez instantanément vos modifications de mise en forme, de liens et de contenu
- **Validation des liens** : MkDocs vous avertira des liens internes cassés

### Commandes utiles de MkDocs dans VS Code

Exécutez ces commandes dans le terminal intégré de VS Code :

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

> **Astuce :** Pour prévisualiser la documentation localement avec toutes les dépendances vérifiées, utilisez le script PowerShell `scripts/serve-docs.ps1`.

### Avantages de la prévisualisation locale

- **Retour immédiat** : Voyez comment votre Markdown se rend avec le thème Material
- **Validation des liens** : Identifiez les liens cassés avant leur mise en ligne
- **Test de navigation** : Vérifiez que votre contenu apparaît dans les sections correctes
- **Prévisualisation mobile** : Testez l'apparence de votre contenu sur différentes tailles d'écran
- **Vérification des performances** : Assurez-vous que les images et les ressources se chargent correctement

## Questions ?

Si vous avez des questions sur la mise en forme Markdown ou les directives de contribution, veuillez :

1. Consulter ce guide de contribution
1. Vérifier les problèmes existants pour des questions similaires
1. Ouvrir un nouveau problème

Bonne contribution ! 🚀

---

**Avertissement** :  
Ce document a été traduit à l'aide du service de traduction automatique [Co-op Translator](https://github.com/Azure/co-op-translator). Bien que nous nous efforcions d'assurer l'exactitude, veuillez noter que les traductions automatisées peuvent contenir des erreurs ou des inexactitudes. Le document original dans sa langue d'origine doit être considéré comme la source faisant autorité. Pour des informations critiques, il est recommandé de recourir à une traduction humaine professionnelle. Nous ne sommes pas responsables des malentendus ou des interprétations erronées résultant de l'utilisation de cette traduction.