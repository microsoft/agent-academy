<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-17T18:54:01+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "es"
}
-->
# 🚨 Misión 03: Desplegar un Agente Declarativo para Microsoft 365 Copilot

## 🕵️‍♂️ NOMBRE CLAVE: `OPERACIÓN EXTENSIÓN COPILOT`

> **⏱️ Ventana de Tiempo de la Operación:** `~60 minutos`

🎥 **Mira la Guía**

[![Miniatura del video Crear un Agente Declarativo](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.es.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Mira la guía en YouTube")

## 🎯 Resumen de la Misión

Bienvenido a tu primera asignación en el campo, Agente Creador. Has sido seleccionado para diseñar, equipar y desplegar un Agente Declarativo: un operativo especializado integrado directamente en Microsoft 365 Copilot y Microsoft Teams.

A diferencia de los agentes tradicionales, los agentes declarativos operan con una misión definida (instrucciones), herramientas (prompts/conectores) y acceso estratégico a inteligencia interna (fuentes de conocimiento como SharePoint, Dataverse y más). Tu tarea es construir este agente utilizando Microsoft Copilot Studio, un centro de comando sin código donde las habilidades y el propósito de tu agente cobran vida.

¡Vamos allá!

## 🔎 Objetivos

En esta misión, aprenderás:

1. Comprender qué son los agentes declarativos y cómo extienden Microsoft 365 Copilot con capacidades personalizadas.
1. Comparar Microsoft Copilot Studio vs. el constructor de agentes de Copilot Studio para crear agentes declarativos.
1. Crear un agente declarativo utilizando lenguaje natural a través de la experiencia de creación conversacional.
1. Agregar prompts de IA como herramientas para mejorar el conocimiento especializado y las habilidades de resolución de problemas de tu agente.
1. Publicar y probar tu agente declarativo en Microsoft 365 Copilot y Microsoft Teams.

## 🕵🏻‍♀️ ¿Qué es un agente declarativo para Microsoft 365 Copilot?

Los agentes declarativos son versiones personalizadas de Microsoft 365 Copilot. Puedes personalizar Microsoft 365 Copilot para satisfacer necesidades específicas de negocio proporcionándole instrucciones para apoyar un proceso particular, basándolo en el conocimiento empresarial y aprovechando herramientas para una mayor extensibilidad. Esto permite a las organizaciones crear experiencias personalizadas con mayor funcionalidad para sus usuarios.

## 🤔 ¿Por qué usar Microsoft Copilot Studio para construir un agente declarativo?

Como creador, es posible que ya hayas explorado [el constructor de agentes de Copilot Studio](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) en Microsoft 365 Copilot y te estés preguntando _¿por qué construir un agente declarativo en Microsoft Copilot Studio?_

Microsoft Copilot Studio ofrece un conjunto completo de herramientas y características para agentes declarativos que van más allá de las limitaciones del constructor de agentes de Copilot Studio. Al igual que el constructor de agentes de Copilot Studio, no necesitas saber programación o desarrollo de software para construir en Microsoft Copilot Studio. Vamos a desglosarlo más para entender las diferencias entre el constructor de agentes de Copilot Studio y Copilot Studio para crear agentes declarativos.

### Comparación de características

La siguiente tabla destaca las diferencias al construir un agente declarativo en el constructor de agentes de Copilot Studio y Copilot Studio.

| Característica            | Constructor de agentes de Copilot Studio en Microsoft 365 Copilot            | Extender Microsoft 365 Copilot en Copilot Studio            |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Conocimiento**       | Web, SharePoint, chats de Microsoft Teams, correos de Outlook, conectores de Copilot     | Búsqueda web (a través de Bing), SharePoint, Dataverse, Dynamics 365, conectores de Copilot  |
| **Herramientas**       | Intérprete de código, generador de imágenes     | Más de 1400 conectores de Power Platform, conectores personalizados, prompts, uso de computadora, API REST, Protocolo de Contexto de Modelo   |
| **Prompts iniciales**         | Configurar prompts para que los usuarios comiencen rápidamente   | Configurar prompts para que los usuarios comiencen rápidamente  |
| **Canal**           | Agente solo publicado en Microsoft 365 Copilot     | Agente publicado en Microsoft 365 Copilot y Microsoft Teams      |
| **Permisos de compartición**         | Los usuarios solo son espectadores    | Los usuarios pueden ser editores o espectadores   |

Hay más capacidades ofrecidas para los agentes declarativos construidos en Microsoft Copilot Studio que aprenderemos a continuación.

!!! tip
    - Para aprender más sobre el constructor de agentes de Copilot Studio, visita [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Para desarrollo profesional extendiendo un agente declarativo más allá del constructor de agentes de Copilot Studio para Microsoft 365 Copilot, visita [Copilot Developer Camp: Lab MAB1 - Build your first agent](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Extender Microsoft 365 Copilot con agentes declarativos construidos en Copilot Studio

Ampliemos lo que hemos aprendido de la tabla de comparación de características.

#### Personalización

- **Instrucciones detalladas**: Puedes proporcionar instrucciones detalladas y capacidades para definir el propósito y comportamiento del agente con precisión.
  - Esto incluye invocar herramientas simplemente usando lenguaje natural.

- **Acceso al conocimiento empresarial**: Permite acceso al conocimiento empresarial respetando los permisos de usuario.
  - Integración con SharePoint
  - Integración con Dataverse
  - Integración con Dynamics 365
  - Conectores de Microsoft 365 Copilot habilitados por el administrador de tu organización

   ![Personalización](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.es.png)

#### Capacidades avanzadas

- **Integración con servicios externos**: Te permite elegir entre más de 1400 conectores de Power Platform que se integran con servicios externos, proporcionando funcionalidades más complejas y potentes.
  - Ejemplos incluyen [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) y más.
  - Alternativamente, también puedes aprovechar servidores de Protocolo de Contexto de Modelo y APIs REST directamente dentro de tu agente declarativo.

- **Prompts de IA**: Usa un prompt para analizar y transformar texto, documentos, imágenes y datos con lenguaje natural y razonamiento de IA.
  - Selecciona el modelo de chat, elige entre Básico (Predeterminado), Estándar, Premium.
  - Opción de usar tu propio modelo de Azure AI Foundry para fundamentar tu prompt.

- **Más opciones de configuración de despliegue**: Selecciona canales y define permisos de usuario.
  - Publica en Microsoft Teams, una interfaz familiar para tus usuarios para una adopción más rápida.
  - Los permisos de edición pueden compartirse para evitar un único punto de dependencia en el propietario del agente.

   ![Capacidades avanzadas](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.es.png)

En resumen, los agentes declarativos en Microsoft Copilot Studio permiten personalizar Microsoft 365 Copilot para adaptarse a las necesidades empresariales mediante la integración de sistemas de conocimiento empresarial, herramientas para conectarse a servicios externos o modelos GPT de IA.

## 🧪 Laboratorio 03: Construir un agente declarativo en Microsoft Copilot Studio para Microsoft 365 Copilot

A continuación aprenderemos cómo construir un agente declarativo para un caso de uso "Business-to-Employee", que actuará como un **agente de soporte técnico de TI**.

- [3.1 Crear un agente declarativo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Crear y agregar un prompt para tu agente declarativo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Actualizar instrucciones y probar tu agente declarativo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Publicar tu agente declarativo en Microsoft 365 Copilot y Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Este laboratorio describirá los pasos para agregar un Prompt como herramienta. Las siguientes lecciones profundizarán en la adición de fuentes de conocimiento y otras herramientas disponibles. Manteniéndolo simple para tu aprendizaje 😊

### 👩🏻‍💼 Comprender Business-to-Employee (B2E)

Business-to-Employee (B2E) se refiere a las interacciones y servicios que una empresa proporciona directamente a sus empleados. En el contexto de un agente, significa usar las capacidades avanzadas de Copilot Studio para apoyar y mejorar la experiencia laboral de los empleados dentro de la organización.

### ✨ Escenario de caso de uso

**Como** empleado

**Quiero** obtener ayuda rápida y precisa del agente de soporte técnico de TI para problemas como problemas de dispositivos, solución de problemas de red, configuración de impresoras.

**Para que pueda** ser productivo y resolver problemas técnicos sin demoras.

¡Comencemos!

### Requisitos previos

- Los creadores deben tener permisos para crear y acceso a un entorno de Copilot Studio.

!!! note "Nota sobre licencias"
    Este laboratorio describirá los pasos para agregar un Prompt como herramienta. Las siguientes lecciones profundizarán en la adición de fuentes de conocimiento y otras herramientas disponibles. Manteniéndolo simple para tu aprendizaje 😊
  
    No necesitas una licencia de usuario de Microsoft 365 Copilot para publicar tu agente declarativo construido en Copilot Studio en Microsoft 365 Copilot. Sin embargo, **los usuarios** del _agente declarativo publicado_ en Microsoft 365 Copilot requieren una licencia de usuario de Microsoft 365 Copilot.

### 3.1 Crear un agente declarativo

!!! warning "Las preguntas de Copilot pueden variar entre sesiones"

    La experiencia de creación conversacional de Copilot puede variar cada vez, donde las preguntas proporcionadas para orientación pueden ser ligeramente diferentes a las anteriores.

1. Navega a [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) e inicia sesión con tus credenciales. Asegúrate de cambiar al entorno que estás utilizando para estos laboratorios.

1. Selecciona **Agentes** del menú y selecciona **Copilot para Microsoft 365**.

       ![Copilot para Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.es.png)

1. A continuación, vamos a crear un agente declarativo seleccionando **+ Agregar** agente.

       ![Agregar Agente](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.es.png)

1. Luego veremos cargar la experiencia de creación conversacional donde podemos chatear en lenguaje natural con Copilot para describir el agente declarativo que queremos construir y usar las preguntas proporcionadas para orientación.

       Ingresemos una descripción detallada que incluya lo siguiente,  
       - la tarea del agente  
       - qué tipo de consultas puede manejar  
       - el formato de su respuesta  
       - el objetivo del agente  
    
       ```text
       Eres un profesional de TI altamente capacitado y experimentado especializado en una amplia gama de sistemas informáticos, redes y ciberseguridad. Puedes diagnosticar y resolver problemas técnicos, explicar soluciones de manera clara y comprensible para usuarios de todos los niveles técnicos, y proporcionar orientación sobre las mejores prácticas. Debes ser conciso e informativo, utilizando instrucciones paso a paso con viñetas cuando sea apropiado. Tu objetivo es ayudar al usuario a entender el problema y cómo resolverlo eficazmente.
       ```
    
       ![Crear Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.es.png)

1. Después de enviar el prompt, aparecerá una actualización notable en el panel del lado derecho con los detalles e instrucciones del agente según lo definido por el prompt. A continuación, se te pedirá que confirmes el nombre de tu agente y Copilot habrá sugerido un nombre.

       Ingresa `sí` para aceptar el nombre sugerido o ingresa un nombre diferente como el siguiente,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instrucciones actualizadas](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.es.png)

    !!! warning "Recordatorio: Las preguntas de Copilot pueden variar entre sesiones"

        La experiencia de creación conversacional de Copilot puede variar cada vez, donde las preguntas proporcionadas para orientación pueden ser ligeramente diferentes a las anteriores.

1. El nombre del agente ahora se ha actualizado como se ve en el panel del lado derecho. Ahora se nos pide refinar las instrucciones para el agente. Lo que Copilot sugirió suena genial, así que le pediremos que use sus propias sugerencias. Ingresaremos lo siguiente,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Nombre actualizado](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.es.png)

1. A continuación, se nos preguntará si queremos agregar algún sitio web o conocimiento accesible públicamente. Responderemos con `No`, ya que solo agregaremos un prompt para nuestro agente declarativo en este laboratorio. Los laboratorios posteriores en futuras lecciones cubrirán las fuentes de conocimiento.

      ![No se agregaron sitios web ni fuentes de conocimiento](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.es.png)

1. Luego veremos una respuesta de Copilot indicando que hemos terminado de configurar nuestro agente utilizando la experiencia de creación conversacional de Copilot. Sin embargo, vamos a refinarlo un poco más detallando que debe ser conciso e informativo con viñetas, usar empatía en la comunicación y pedir retroalimentación después de proporcionar soluciones.

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

      ![Actualizar instrucciones del agente](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.es.png)

1. Copilot confirma que las instrucciones han sido actualizadas. Haz clic en **Crear** para provisionar el agente declarativo para Microsoft 365 Copilot.

      ![Crear agente](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.es.png)

    !!! warning "Recordatorio: Las preguntas de Copilot pueden variar entre sesiones"

        La experiencia de creación conversacional de Copilot puede variar cada vez, donde las preguntas proporcionadas para orientación pueden ser ligeramente diferentes a las anteriores.

1. Una vez que el agente haya sido provisionado, verás los detalles del agente que contienen la descripción y las instrucciones definidas durante la experiencia de creación conversacional de Copilot.
![Detalles del agente](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.es.png)

Desplázate hacia abajo en el panel y también verás las capacidades de agregar conocimiento, habilitar la búsqueda web (a través de Bing), los mensajes iniciales y los detalles de publicación del agente declarativo para Microsoft 365 Copilot. Los mensajes iniciales también se mostrarán en el panel de prueba en el lado derecho. Los usuarios pueden seleccionar estos mensajes iniciales para comenzar a interactuar con el agente.

![Mensajes sugeridos](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.es.png)

1. En la sección de Detalles del agente, también tienes la posibilidad de cambiar el ícono del agente. Selecciona **Editar**.

![Editar detalles](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.es.png)

Aquí puedes cambiar el ícono y el color de fondo. Selecciona **Guardar** y luego selecciona **Guardar** nuevamente para actualizar los detalles del agente.

![Cambiar ícono](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.es.png)

1. Hagamos una prueba rápida del agente que hemos creado. Selecciona uno de los **Mensajes Iniciales** en el panel de prueba en el lado derecho.

![Probar mensaje inicial](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.es.png)

1. Nuestro agente responderá. Observa cómo sigue las instrucciones proporcionando puntos clave en partes digeribles y utiliza empatía en su respuesta.

Si te desplazas hacia el final del mensaje, observa cómo también solicita retroalimentación después de proporcionar una solución, tal como se indicó.

![Respuesta de prueba](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.es.png)

En unos minutos has agregado un agente declarativo para Microsoft 365 Copilot en Copilot Studio 🙌🏻

A continuación, aprenderemos cómo agregar una herramienta a nuestro agente, creando un mensaje.

### 3.2 Crear y agregar un mensaje para tu agente declarativo

1. Desplázate hacia la sección **Herramientas** y selecciona **+ Agregar herramienta**

![Agregar herramienta](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.es.png)

1. Aparecerá el modal de Herramientas y se mostrará una lista de conectores de Power Platform. Para agregar un mensaje, selecciona **+ Nueva herramienta**.

![Nueva herramienta](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.es.png)

1. Se mostrará una lista de otras herramientas: Mensaje, Conector personalizado, API REST y Protocolo de contexto de modelo. Si tu organización cumple con los [requisitos para el uso de computadoras](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), esto también aparecerá en la lista. Selecciona **Mensaje**.

![Seleccionar mensaje](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.es.png)

1. Ingresa un nombre para el mensaje. Nombremos nuestro mensaje `Experto en TI`.

![Ingresar nombre](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.es.png)

1. Selecciona el **ícono de chevron** junto al **Modelo** para ver los diferentes modelos de chat que puedes elegir. Por defecto, se selecciona el modelo **Basic GPT-4.1 mini** y también tienes la opción de usar tu propio modelo con Azure AI Foundry Models. Nos quedaremos con el modelo predeterminado seleccionado.

![Cambiar modelo](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.es.png)

1. A continuación, proporcionaremos instrucciones para nuestro mensaje. Hay tres métodos que puedes elegir:

   - Usar Copilot para generar instrucciones basadas en tu descripción de lo que quieres que haga el mensaje.
   - Usar una plantilla predefinida de la biblioteca de mensajes para crear un mensaje.
   - Ingresar manualmente tus propias instrucciones.

1. Primero intentemos usar Copilot para generar instrucciones basadas en una descripción ingresada. Ingresa lo siguiente en el campo de Copilot y envíalo.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Comenzar con Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.es.png)

1. Copilot comenzará a generar un mensaje para nosotros.

![Copilot redactando mensajes](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.es.png)

1. Las instrucciones generadas por Copilot aparecerán.

![Instrucciones generadas por Copilot](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.es.png)

1. Desplázate hacia el final de las instrucciones y verás el parámetro de entrada del usuario ya definido por Copilot. Luego tienes la opción de:
   - Mantener las instrucciones generadas.
   - Actualizar las instrucciones generadas usando Copilot.
   - Borrar las instrucciones generadas.

   Borra las instrucciones generadas seleccionando el ícono de **papelera** y luego probaremos la biblioteca de mensajes.

![Instrucciones del mensaje](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.es.png)

1. Selecciona el enlace de **plantilla de mensaje**.

![Seleccionar plantilla de mensaje](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.es.png)

1. Verás una lista de plantillas de mensajes para elegir. Estas son de la [biblioteca de mensajes de Power Platform](https://aka.ms/power-prompts).

![Biblioteca de mensajes](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.es.png)

1. Busca el mensaje `Experto en TI` y selecciónalo.

![Seleccionar mensaje de experto en TI](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.es.png)

1. El mensaje se agregará como las instrucciones con el parámetro de entrada definido por la plantilla de mensaje. Similar al enfoque que tomamos al proporcionar instrucciones para nuestro agente durante la experiencia de creación conversacional con Copilot, esta plantilla de mensaje detalla:
   - una tarea,
   - qué tipo de consultas puede manejar,
   - y el formato de su respuesta y el objetivo del mensaje.

![Instrucciones del mensaje](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.es.png)

1. Borra las instrucciones y luego intentaremos ingresar manualmente las instrucciones. Usaremos el [mensaje de Experto en TI](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) de la [biblioteca de mensajes de Power Platform](https://aka.ms/power-prompts). Copia y pega el mensaje.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Instrucciones del mensaje](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.es.png)

1. A continuación, podemos definir los parámetros de entrada del usuario para nuestro mensaje. Estos pueden ser texto e imágenes, y datos de muestra para probar. También existe la capacidad de vincular el mensaje con conocimiento de tablas de Dataverse. Para este ejercicio, solo tenemos un parámetro de entrada de usuario para definir, que es el problema. Actualmente, este es un marcador de posición en nuestro mensaje como `[Problema]`. Ahora configuraremos esta entrada ingresando el carácter `/` o seleccionando **+Agregar contenido** y luego seleccionando **Texto**.

![Entrada de texto](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.es.png)

1. Ahora podemos ingresar un nombre para nuestro parámetro de entrada y datos de muestra.

   Ingresa lo siguiente como nombre:

    ```text
    problem input
    ```

   Ingresa lo siguiente como datos de muestra:

    ```text
    My laptop gets an error with a blue screen
    ```

   Luego selecciona **Cerrar**.

![Configurar entrada del problema](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.es.png)

1. El parámetro de entrada del problema ahora se agregará a las instrucciones con los datos de muestra configurados. ¡Ahora podemos probar nuestro mensaje!

![Entrada del problema agregada](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.es.png)

1. Selecciona **Probar** para probar el mensaje.

![Probar instrucciones](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.es.png)

1. La respuesta se mostrará. Observa cómo la respuesta proporciona encabezados con puntos clave según las instrucciones. Desplázate hacia abajo y revisa el resto de la respuesta del modelo.

![Respuesta del modelo](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.es.png)

1. Antes de guardar nuestro mensaje, aprendamos sobre las configuraciones que se pueden ajustar para este mensaje. Selecciona el **ícono de elipsis (...)**.

![Configuraciones del mensaje](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.es.png)

1. Aquí veremos tres configuraciones que se pueden ajustar:

   - **Temperatura**: Temperaturas más bajas generan resultados predecibles, mientras que temperaturas más altas permiten respuestas más diversas o creativas.
   - **Recuperación de registros**: Especifica el número de registros recuperados de tus fuentes de conocimiento.
   - **Incluir enlaces en la respuesta**: Cuando se selecciona, la respuesta incluye citas de enlaces para los registros recuperados.

   Selecciona el ícono **X** para salir de Configuraciones.

![Configurar configuraciones](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.es.png)

1. Selecciona **Guardar** para guardar el mensaje.

![Guardar mensaje](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.es.png)

1. A continuación, selecciona **Agregar al agente** para agregar el mensaje a nuestro agente declarativo.

![Instrucciones del mensaje](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.es.png)

1. El mensaje ahora aparecerá bajo Herramientas 🙌🏻

![Mensaje agregado](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.es.png)

A continuación, actualizaremos nuestras instrucciones para invocar el mensaje y probar nuestro agente declarativo.

### 3.3 Actualizar instrucciones y probar tu agente declarativo

1. Desplázate hacia la sección **Detalles** y selecciona **Editar**. Esto habilitará los campos para que sean editables.

![Seleccionar Editar](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.es.png)

1. Ahora podemos actualizar nuestras instrucciones para invocar nuestro mensaje haciendo referencia al nombre del mensaje. Borra las instrucciones, luego copia y pega lo siguiente.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

   Observa cómo la frase final instruye al agente a usar la pregunta realizada por el usuario como el valor para el parámetro de entrada del problema. El agente usará la pregunta como entrada del problema para el mensaje. A continuación, selecciona **Guardar**.

![Actualizar instrucciones para invocar mensaje](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.es.png)

1. Ahora estamos listos para probar nuestras instrucciones actualizadas de nuestro agente declarativo. Selecciona el **ícono de refrescar** en el panel de prueba.

![Seleccionar ícono de refrescar](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.es.png)

1. A continuación, ingresa el siguiente mensaje y envíalo.

```text
¿Puedes ayudarme? Mi laptop está mostrando una pantalla azul.
```

![Realizar prueba](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.es.png)

1. El agente invoca el mensaje y responde.

![Instrucciones del mensaje](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.es.png)

Ahora publiquemos nuestro agente declarativo 😃

### 3.4 Publicar tu agente declarativo en Microsoft 365 Copilot y Microsoft Teams

1. Selecciona **Publicar**.

![Publicar agente](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.es.png)

1. Aparecerá un modal que muestra los Canales y los detalles de publicación que se pueden actualizar.

   - Canales: El agente se publicará en Microsoft 365 Copilot y Microsoft Teams.
   - Información de la aplicación del agente: Esto es lo que se mostrará cuando el usuario agregue el agente a Microsoft 365 Copilot o en Microsoft Teams. Estos son campos que se pueden actualizar según sea necesario.

![Detalles de la aplicación del agente](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.es.png)

1. Por ejemplo, puedes actualizar la **Descripción breve**, **Descripción larga**, **Nombre del desarrollador** con tu nombre.

!!! tip
    Si no ves todos los campos mostrados en tu navegador, intenta hacer zoom hacia afuera, por ejemplo, al 75%.

Selecciona **Publicar**. Copilot Studio comenzará a publicar el agente.

![Publicando agente](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.es.png)

1. Cuando la publicación se complete, veremos las [Opciones de disponibilidad](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) del agente.

   | Opción de disponibilidad | Descripción |
   | ---------- | ---------- |
   | Enlace para compartir | Copia el enlace para distribuirlo con usuarios compartidos para abrir el agente en Microsoft 365 Copilot |
   | Mostrar a mis compañeros de equipo y usuarios compartidos | Te permite otorgar acceso a otros para participar en la creación del agente, o a grupos de seguridad para otorgarles acceso para usar el agente en Microsoft 365 Chat o Microsoft Teams. |
   | Mostrar a todos en mi organización | Enviar al administrador del tenant para agregarlo al catálogo organizacional para que todos los usuarios del tenant puedan agregar el agente. El agente se mostrará bajo Creado por tu organización en Microsoft 365 Copilot y en Microsoft Teams |
   | Descargar como .zip | Descargar como archivo zip para cargarlo como una aplicación personalizada en Microsoft Teams |

![Opciones de disponibilidad](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.es.png)

1. Veamos cómo compartir el agente. Selecciona **Mostrar a mis compañeros de equipo y usuarios compartidos**. Aparecerá un panel donde puedes buscar usuarios con los que deseas compartir el agente ingresando su nombre, correo electrónico o un grupo de seguridad. Puedes revisar esta lista en cualquier momento para editar quién tiene acceso al agente.

   También hay dos casillas de verificación:
   - _Enviar una invitación por correo electrónico a nuevos usuarios_ - los nuevos usuarios recibirán una invitación por correo electrónico.
   - _Visible en Creado con Power Platform_ - el agente estará disponible en la sección Creado con Power Platform de la tienda de aplicaciones de Teams.
Para más detalles, consulta [Conectar y configurar un agente para Teams y Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Selecciona **Cancelar** o el icono **X** para salir del panel.

![Compartir agente](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.es.png)

1. Selecciona **Copiar** y en una nueva pestaña del navegador, pega el enlace.

![Copiar enlace](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.es.png)

1. Microsoft 365 Copilot se cargará y aparecerá un modal con los detalles de la aplicación del agente. Observa cómo se muestran el nombre del desarrollador, la descripción breve y la descripción larga. Estos provienen de los detalles de publicación actualizados en un paso anterior.

Selecciona **Agregar**.

![Opciones de disponibilidad](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.es.png)

1. Nuestro agente declarativo se cargará a continuación. Podemos ver los mensajes iniciales para seleccionar, lo que permite a los usuarios buscar ayuda inmediata rápidamente.

Selecciona uno de los mensajes iniciales. En mis mensajes iniciales, seleccionaré el mensaje **Ayuda para instalación de software**, que automáticamente rellenará el campo de mensaje de Copilot. Envía la pregunta a Copilot.

![Seleccionar mensaje inicial](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.es.png)

1. Selecciona **Permitir siempre** para dar a tu agente declarativo permiso para invocar el mensaje del Experto en TI.

![Seleccionar permitir siempre](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.es.png)

1. El agente invocará nuestro mensaje **Experto en TI** y veremos la respuesta del modelo devuelta como un mensaje en nuestro agente declarativo.

![Respuesta](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.es.png)

Desplázate hacia abajo para ver todos los detalles de la respuesta.

![Respuesta](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.es.png)

1. Pero _¿cómo sabemos_ que el agente declarativo invocó el mensaje? 👀 ¡Aquí tienes un consejo!

!!! tip
    Puedes probar y depurar agentes en Microsoft 365 Copilot habilitando [modo desarrollador](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Introduce lo siguiente en el campo de mensaje de Copilot y envíalo.

    ```text
    -developer on
    ```

Aparecerá un mensaje de confirmación para informarte que el modo desarrollador está habilitado.

![Modo desarrollador habilitado](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.es.png)

1. Envía la siguiente pregunta para invocar el mensaje.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Introducir pregunta](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.es.png)

1. Veremos nuevamente una respuesta del modelo de nuestro mensaje **Experto en TI** devuelta como un mensaje. Desplázate hacia abajo hasta el final del mensaje y se mostrará una tarjeta con información de depuración.

Expande **Información de depuración del agente** seleccionándola.

![Información de depuración del agente](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.es.png)

1. Aquí encontrarás información sobre los metadatos del agente que ocurrieron en tiempo de ejecución.

![Información de depuración del agente expandida](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.es.png)

En nuestro caso de uso, nos centraremos en la sección _Acciones_.

- **Acciones coincidentes** destacan el estado actual de las funciones encontradas durante la búsqueda de la aplicación.
- **Acciones seleccionadas** destacan el estado actual de las funciones elegidas para ejecutarse según el proceso de toma de decisiones de la aplicación.

![Información de depuración del agente expandida](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.es.png)

Aquí podemos ver que el orquestador del agente eligió invocar el mensaje del Experto en TI según las instrucciones de nuestro agente declarativo. Esto se detalla aún más en la sección _Acciones ejecutadas_, que también nos indica que invocó el mensaje con éxito.

![Revisar información de depuración del agente](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.es.png)

1. Para desactivar el modo desarrollador, introduce lo siguiente en el campo de mensaje de Copilot y envíalo.

    ```text
    -developer off
    ```

Aparecerá un mensaje de confirmación para informarte que el modo desarrollador está desactivado. Genial, ahora sabes cómo verificar si tu agente declarativo en Microsoft 365 Copilot invocó tu mensaje 🌞

![Modo desarrollador desactivado](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.es.png)

1. Ahora probaremos nuestro agente en Microsoft Teams. Navega a **Aplicaciones** usando el menú del lado izquierdo y selecciona **Teams** en la sección _Aplicaciones_.

![Seleccionar Teams en Aplicaciones](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.es.png)

1. Microsoft Teams se cargará en una nueva pestaña del navegador y se te presentarán los términos de uso de Microsoft 365 Copilot, selecciona **Aceptar**.

![Seleccionar Aceptar](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.es.png)

1. Microsoft 365 Copilot se cargará por defecto, con el panel del lado derecho que lista todos tus agentes disponibles, incluyendo el agente declarativo **Contoso Tech Support Pro**.

![Microsoft 365 Copilot en Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.es.png)

1. Selecciona el **icono de elipsis (...)** en el menú del lado izquierdo. Busca **Contoso Tech Support Pro** en el campo de búsqueda o, si ves el agente, selecciónalo.

También puedes hacer clic derecho con el ratón para **Fijar** el agente y tener acceso rápido en el menú del lado izquierdo en Microsoft Teams.

![Seleccionar y fijar agente](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.es.png)

1. Veremos que nuestro agente se carga. 1. Ahora probemos nuestro agente. Introduce el siguiente mensaje y envíalo.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Fijar agente](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.es.png)

1. Se mostrará una respuesta del modelo de nuestro mensaje.

![Respuesta en Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.es.png)

En unos minutos, has aprendido cómo publicar tu agente declarativo y probarlo en Microsoft 365 Copilot y en Microsoft Teams 😊

## ✅ Misión Completa

¡Felicidades! 👏🏻 Has creado un agente declarativo en Copilot Studio donde agregaste un mensaje, instruiste al agente para usar el mensaje y aprendiste cómo probar y publicar tu agente en Microsoft 365 Copilot y Microsoft Teams.

Tu agente ahora está en servicio activo—listo para asistir, solucionar problemas y servir a los usuarios internos bajo demanda.

Este es el final de **Laboratorio 03 - Crear un agente declarativo en Microsoft Copilot Studio para Microsoft 365 Copilot**, selecciona el enlace a continuación para pasar a la siguiente lección.

⏭️ [Ir a la lección **Crear una nueva solución**](../04-creating-a-solution/README.md)

Hasta la próxima, mantente alerta. El futuro del trabajo empresarial pasa por los agentes—y ahora sabes cómo construir uno.

## 📚 Recursos Tácticos

🔗 [Crear agente declarativo en Microsoft Copilot Studio para Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Agregar mensajes](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Compartir agentes con otros usuarios](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Crear mensajes para tu agente](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Analytics" />

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.