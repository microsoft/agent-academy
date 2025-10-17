<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-17T18:50:51+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "es"
}
-->
# Contribuir a MCS Agent Academy

¡Gracias por tu interés en contribuir a MCS Agent Academy! Esta guía te ayudará a configurar tu entorno de desarrollo y a entender nuestros estándares de documentación.

## Estándares de Documentación

Seguimos los estándares de documentación de Microsoft para garantizar contenido consistente y de alta calidad. Para obtener una guía completa sobre cómo escribir documentación efectiva, consulta:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Guía completa para escribir documentación que cumpla con el estilo y los estándares de Microsoft.

Este recurso cubre:

- Escribir contenido claro y conciso
- Usar la sintaxis adecuada de markdown
- Seguir una terminología consistente
- Estructurar la documentación de manera efectiva
- Mejores prácticas de accesibilidad

## Linter de Markdown

Usamos markdownlint para garantizar un formato y calidad consistentes en toda nuestra documentación. Esto ayuda a mantener la legibilidad y estándares profesionales en el repositorio.

### Instalación de markdownlint-cli2

Para ejecutar markdownlint localmente y coincidir con nuestro flujo de trabajo en GitHub, instala markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Ejecutar markdownlint localmente

Una vez instalado, puedes ejecutar markdownlint en todos los archivos markdown del repositorio:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Configuración

Nuestra configuración de markdownlint está definida en `.markdownlint.jsonc` en la raíz del repositorio. Esta configuración:

- Desactiva las verificaciones de longitud de línea (MD013) ya que no hemos definido un estándar
- Permite encabezados duplicados solo en secciones hermanas (MD024) para secciones comunes de plantillas
- Desactiva la validación de prefijos de listas ordenadas (MD029) globalmente debido al contenido indentado que reinicia la numeración
- Permite usar bloques de código para texto (MD046)

### Agregar excepciones en línea para las reglas de markdownlint

Aunque nuestra configuración global maneja la mayoría de los escenarios comunes, puede haber situaciones en las que necesites agregar excepciones en línea para reglas específicas de markdownlint en archivos individuales. Aquí hay ejemplos de cómo hacerlo:

#### Opción 1: Ignorar para la siguiente línea

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Opción 2: Ignorar para un rango específico

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

#### Opción 3: Ignorar para todo el archivo

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Coloca estas excepciones en la parte superior de tu archivo markdown para desactivar reglas específicas en todo el documento.

### Cuándo usar excepciones en línea

Podrías necesitar excepciones para varias reglas de markdownlint cuando:

1. **MD029 (Numeración de listas ordenadas)**: Continuar listas numeradas después de otro contenido, numeración intencional que no comienza en 1, o contenido anidado complejo.
2. **MD013 (Longitud de línea)**: Ejemplos de código, URLs o contenido técnico que no puede dividirse razonablemente en varias líneas.
3. **MD033 (HTML en línea)**: Cuando necesitas elementos HTML específicos para el formato que no se pueden lograr con markdown.
4. **MD041 (Encabezado en la primera línea)**: Archivos de plantilla o documentos que intencionalmente no comienzan con un encabezado.

### Mejores prácticas

1. **Usa excepciones con moderación**: Solo agrega excepciones cuando sean necesarias para la claridad de la documentación.
2. **Comenta tus excepciones**: Cuando uses excepciones, considera agregar un breve comentario explicando el motivo.
3. **Prefiere `markdownlint-disable-next-line`**: Esto es más preciso que desactivar secciones completas.
4. **Ejecuta el linter antes de hacer commit**: Siempre ejecuta `markdownlint-cli2 "**/*.md"` antes de enviar cambios.

> **Consejo:** Puedes ejecutar rápidamente tanto markdownlint como las verificaciones de cSpell en tus archivos markdown usando el script de PowerShell `scripts/validate-markdown.ps1`. Este script ayuda a automatizar las verificaciones comunes de formato y ortografía para garantizar que tus contribuciones cumplan con nuestras pautas.

Puedes ejecutarlo desde la raíz del repositorio usando PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Errores comunes de markdownlint y soluciones

- **MD036**: Usa encabezados adecuados (`## Encabezado`) en lugar de énfasis (`**Texto en negrita**`).
- **MD007**: Corrige la indentación de listas no ordenadas (usa 2 espacios, no 4).
- **MD022**: Agrega líneas en blanco antes y después de los encabezados.
- **MD032**: Agrega líneas en blanco antes y después de las listas.
- **MD009**: Elimina espacios al final de las líneas.

### Flujo de trabajo en GitHub

Nuestro repositorio incluye un flujo de trabajo en GitHub que ejecuta automáticamente markdownlint en todas las solicitudes de extracción. El flujo de trabajo:

- Usa la misma herramienta markdownlint-cli2 que puedes ejecutar localmente.
- Excluye los archivos `SUPPORT.md`, `SECURITY.md` y `CODE_OF_CONDUCT.md`.
- Utiliza nuestra configuración `.markdownlint.jsonc`.
- Reporta problemas como advertencias, permitiendo que las solicitudes de extracción se fusionen mientras destaca oportunidades de formato.

### Extensión markdownlint para VS Code

Si usas VS Code, te recomendamos instalar la [extensión markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) para la revisión en tiempo real de markdown:

1. **Instala la extensión** - Busca "markdownlint" de David Anson en el mercado de extensiones de VS Code.
2. **Configuración automática** - La extensión usará automáticamente tu archivo de configuración `.markdownlint.jsonc`.
3. **Retroalimentación en tiempo real** - Verás subrayados ondulados en problemas de formato markdown mientras escribes.
4. **Correcciones rápidas** - Usa `Ctrl+.` (Cmd+. en Mac) para ver correcciones automáticas disponibles para muchos problemas.
5. **Panel de problemas** - Visualiza todos los problemas de markdown en el panel de problemas de VS Code.

Esto proporciona retroalimentación inmediata mientras escribes, facilitando seguir los estándares de markdown antes de enviar tus cambios.

## Revisión ortográfica

Usamos cSpell (Code Spell Checker) para mantener una ortografía consistente en toda nuestra documentación. Esto ayuda a garantizar calidad profesional y reduce errores tipográficos en el repositorio.

### Instalación de cSpell

Para ejecutar cSpell localmente, instálalo globalmente:

```powershell
npm install -g cspell
```

### Ejecutar cSpell localmente

Una vez instalado, puedes ejecutar cSpell para verificar la ortografía en la documentación:

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

### Configuración

Nuestra configuración de cSpell está definida en `cspell.json` en la raíz del repositorio. Esta configuración:

- Incluye palabras personalizadas específicas de nuestro dominio (Copilot, SharePoint, Dataverse, etc.).
- Ignora tipos de archivos comunes que no necesitan revisión ortográfica (imágenes, archivos de compilación).
- Establece el idioma en inglés para la revisión ortográfica.

### Agregar nuevas palabras

Si encuentras una palabra que cSpell marca como mal escrita pero es correcta (como nombres de productos, términos técnicos o nombres propios), puedes agregarla al array `words` en `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Extensión cSpell para VS Code

Si usas VS Code con la [extensión Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), puedes agregar palabras rápidamente a tu configuración:

1. **Ver errores ortográficos** - Busca subrayados ondulados en palabras mal escritas.
1. **Usa la corrección rápida** - Haz clic derecho en la palabra subrayada o usa `Ctrl+.` (Cmd+. en Mac).
1. **Agregar a la configuración** - Selecciona "Spelling -> Add to cSpell configuration" en el menú contextual.
1. **Elige ubicación** - La extensión agregará automáticamente la palabra a tu archivo `cspell.json`.

Esto es mucho más rápido que editar manualmente el archivo de configuración para palabras individuales.

### Mejores prácticas para la ortografía

1. **Ejecuta la revisión ortográfica antes de hacer commit**: Siempre ejecuta `cspell "docs/**/*.md"` antes de enviar cambios.
1. **Corrige errores tipográficos en lugar de ignorarlos**: Cuando sea posible, corrige errores ortográficos reales en lugar de agregarlos a la lista de palabras.
1. **Usa terminología consistente**: Adhiérete a nombres de productos y términos técnicos establecidos.

## Vista previa local de la documentación con MkDocs

Usamos MkDocs con el tema Material para generar nuestro sitio de documentación. Puedes ejecutarlo localmente para previsualizar tus cambios antes de enviar una solicitud de extracción.

📖 **Más información**: [Documentación de MkDocs](https://www.mkdocs.org/) | [Material para MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Configuración del entorno Python en VS Code

Recomendamos usar un entorno virtual para aislar las dependencias de este proyecto. VS Code hace que este proceso sea sencillo y manejará la instalación de Python si es necesario.

> **GitHub Codespaces**: Estas instrucciones funcionan perfectamente en GitHub Codespaces, que viene con Python preinstalado y el entorno de VS Code listo para usar.

📖 **Más información**: [Python en VS Code](https://code.visualstudio.com/docs/languages/python) | [Entornos de Python en VS Code](https://code.visualstudio.com/docs/python/environments)

#### Requisitos previos

**Instalar la extensión de Python**: Instala la [extensión de Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) de Microsoft desde el mercado de extensiones de VS Code si aún no lo has hecho.

#### Configuración en VS Code

1. **Crear un entorno virtual**:
   - Abre la Paleta de Comandos (`Ctrl+Shift+P` en Windows/Linux, `Cmd+Shift+P` en Mac).
   - Escribe "Python: Create Environment" y selecciónalo.
   - Elige "Venv" (entorno virtual).
   - Si no hay intérpretes de Python disponibles, VS Code te guiará para instalar Python.
   - Selecciona tu intérprete de Python (Python 3.8+).
   - VS Code creará una carpeta `.venv` y la activará automáticamente.

2. **Verificar configuración**:
   - Abre un nuevo terminal integrado (`` Ctrl+Shift+` `` en Windows/Linux, `` Cmd+Shift+` `` en Mac, o `View > Terminal`).
   - Deberías ver `(.venv)` en el prompt del terminal.
   - Ejecuta: `python --version` para verificar.

> **Nota**: Abrir un nuevo terminal asegura que el entorno de Python esté activado correctamente. Si prefieres usar un entorno de Python existente en lugar de crear uno nuevo, puedes usar "Python: Select Interpreter" desde la Paleta de Comandos y elegir tu entorno preferido.

### Instalación de MkDocs en VS Code

Con tu entorno de Python configurado en VS Code, instala MkDocs y el tema Material:

1. **Abre el terminal integrado de VS Code** (`Ctrl+`` ` o `View > Terminal`).
2. **Asegúrate de que tu entorno virtual esté activo** (deberías ver `(.venv)` en el prompt).
3. **Instala los paquetes**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Ejecutar MkDocs en VS Code

Para iniciar el servidor de desarrollo local con recarga automática:

1. **En el terminal integrado de VS Code**, ejecuta:

   ```bash
   mkdocs serve
   ```

2. **El sitio estará disponible en**: `http://127.0.0.1:8000/agent-academy/`

### Vista previa en el navegador simple de VS Code

Para la mejor experiencia de desarrollo sin salir de VS Code:

1. **Inicia el servidor de MkDocs** en el terminal integrado (como se muestra arriba).
2. **Abre el navegador simple**:
   - **Método 1**: Abre la Paleta de Comandos (`Ctrl+Shift+P` / `Cmd+Shift+P`).
   - Escribe "Simple Browser: Show" y selecciónalo.
   - Ingresa la URL: `http://127.0.0.1:8000/agent-academy/`.

   - **Método 2**: Haz clic derecho en la URL en la salida del terminal y selecciona "Follow Link".

   - **Método 3**: Usa `Ctrl+Click` (Windows) o `Cmd+Click` (Mac) en la URL en el terminal.

3. **Posiciona el navegador**: Puedes acoplar el navegador simple junto a tu editor para editar y previsualizar en paralelo.

### Beneficios del espacio de trabajo en VS Code

Trabajar completamente dentro de VS Code ofrece estas ventajas:

- **Terminal integrado**: No necesitas cambiar entre aplicaciones.
- **Vista previa en paralelo**: Edita markdown y ve los cambios simultáneamente.  
- **Navegación por enlaces**: Haz clic directamente en las URLs del terminal para abrir el navegador simple.
- **Integración de extensiones**: Las extensiones de Python, markdownlint y cSpell trabajan juntas.
- **Integración con Git**: Panel de control de fuente integrado para commits y solicitudes de extracción.

### Funciones de recarga automática

Cuando ejecutas `mkdocs serve`, obtienes:

- **Auto-refresco**: Los cambios en cualquier archivo `.md` en la carpeta `docs/` recargan automáticamente el navegador.
- **Actualizaciones de configuración**: Los cambios en `mkdocs.yml` también desencadenan reconstrucciones.
- **Vista previa en tiempo real**: Ve tus cambios de formato, enlaces y contenido al instante.
- **Validación de enlaces**: MkDocs te advertirá sobre enlaces internos rotos.

### Comandos útiles de MkDocs en VS Code

Ejecuta estos comandos en el terminal integrado de VS Code:

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

> **Consejo:** Para previsualizar la documentación localmente con todas las dependencias verificadas, usa el script de PowerShell `scripts/serve-docs.ps1`.

### Beneficios de la vista previa local

- **Retroalimentación inmediata**: Ve cómo se renderiza tu markdown con el tema Material.
- **Validación de enlaces**: Detecta enlaces rotos antes de que se publiquen.
- **Pruebas de navegación**: Verifica que tu contenido aparezca en las secciones correctas.
- **Vista móvil**: Prueba cómo se ve tu contenido en diferentes tamaños de pantalla.
- **Verificación de rendimiento**: Asegúrate de que las imágenes y recursos se carguen correctamente.

## ¿Preguntas?

Si tienes preguntas sobre el formato de markdown o las pautas de contribución, por favor:

1. Revisa esta guía de contribución.
1. Consulta los problemas existentes para preguntas similares.
1. Abre un nuevo problema.

¡Feliz contribución! 🚀

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.