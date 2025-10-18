<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "c04b3587170139bc23e3b5cfc24c89ac",
  "translation_date": "2025-10-17T18:56:46+00:00",
  "source_file": "docs/recruit/07-add-new-topic-with-trigger/README.md",
  "language_code": "es"
}
-->
# 🚨 Misión 07: Agregar nuevo tema con activador y nodos

## 🕵️‍♂️ NOMBRE CLAVE: `OPERACIÓN MANTENTE EN EL TEMA`

> **⏱️ Ventana de tiempo de la operación:** `~60 minutos`

🎥 **Mira la guía paso a paso**

[![Miniatura del video de activadores](../../../../../translated_images/video-thumbnail.a84cf7cb473be282861469420c5e2c16adb53bcfd64c7c07fbd579e8d32bf8b2.es.jpg)](https://www.youtube.com/watch?v=7iPAZaA8nJs "Mira la guía paso a paso en YouTube")

## 🎯 Resumen de la misión

Has creado un agente. Escucha, aprende y responde preguntas, pero ahora es momento de ser más táctico. En esta misión, profundizarás en su funcionamiento y enseñarás a tu agente cómo responder a indicaciones específicas con precisión.

Con Temas y Activadores, tu agente puede:

- Reconocer intenciones

- Dirigir conversaciones con lógica

- Recopilar y almacenar variables

- Activar flujos y tomar acción

No solo estás construyendo un diálogo, estás conectando su núcleo de toma de decisiones. Bienvenido al Nexus Neural.

## 🔎 Objetivos

En esta misión, aprenderás:

1. Comprender qué son los temas y su papel en la creación de conversaciones estructuradas para tu agente.
1. Aprender la anatomía de los temas, incluyendo frases activadoras y nodos de conversación.
1. Explorar diferentes tipos de nodos de conversación y cómo usar Power Fx para lógica dinámica.
1. Crear temas personalizados desde cero para manejar solicitudes y tareas específicas de los usuarios.
1. Construir un tema funcional que se conecte a datos de SharePoint usando conectores y herramientas.

## 🤔 ¿Qué es un tema?

Un tema es una conversación estructurada que ayuda a tu agente a responder preguntas o tareas específicas de los usuarios. Piensa en un tema como una mini-conversación o tarea que tu agente puede manejar. Cada tema está diseñado para responder a una pregunta o solicitud específica del usuario.

### 🌌 Propósito de un tema

Hay tres propósitos comunes para los temas según lo que los usuarios necesiten:

**Informativo** - responde preguntas como las siguientes:

- `¿Qué es …?`
- `¿Cuándo será …?`
- `¿Por qué …?`
- `¿Puedes decirme …?`

**Cumplimiento de tareas** - ayuda a los usuarios a _hacer_ algo:

- `"Quiero …"`
- `"¿Cómo hago …?"`
- `"Necesito …?"`

**Resolución de problemas** - soluciona problemas:

- `Algo no está funcionando …`
- `Estoy encontrando un mensaje de error …`
- `Estoy viendo algo inesperado …?`

También puedes crear temas para preguntas ambiguas como `Necesito ayuda`, que piden más detalles a los usuarios antes de continuar.

## 🐦 ¿Por qué son útiles los temas?

Los temas te ayudan a:

- Organizar el conocimiento de tu agente.

- Hacer que las conversaciones se sientan naturales.

- Resolver problemas de los usuarios de manera efectiva.

## 🪺 Tipos de temas

1. **Temas del sistema** - están integrados y manejan eventos comunes como:
    - Iniciar una conversación
    - Finalizar una conversación
    - Manejar errores
    - Pedir a los usuarios que inicien sesión
    - Escalar a un agente humano

1. **Temas personalizados** - los creas para manejar tareas o preguntas específicas como:
    - Solicitud de permiso de empleado
    - Solicitar un dispositivo nuevo o de reemplazo

![Tipos de temas](../../../../../translated_images/7.0_01_Topics.6e55d2e01c1cc0994b7af05be3c1629b78d46b37cc82f59c7893d4ad90af707e.es.png)

## 🧬 Anatomía de un tema

Cada tema generalmente contiene lo siguiente.

### 🗣️ Frases activadoras

Son palabras o frases que los usuarios podrían decir para iniciar el tema.

**Ejemplos:**

Para un tema de solicitud de permiso, las frases activadoras podrían ser:

- `Quiero tomar vacaciones`
- `Solicitar vacaciones`
- `Solicitar tiempo libre`
- `¿Cómo puedo enviar una solicitud de permiso?`

Para un tema de solicitud de dispositivo, las frases activadoras podrían ser:

- `Necesito un dispositivo nuevo`
- `¿Puedo solicitar un dispositivo?`
- `¿Puedes ayudarme con una solicitud de dispositivo?`

### 💬 Nodos de conversación

Un tema está compuesto por nodos que son pasos que el agente sigue una vez que se activa el tema. Conectas estos pasos para construir un flujo de conversación que tu agente sigue al interactuar con los usuarios.

Piensa en ellos como instrucciones o acciones tales como:

- Hacer preguntas al usuario
- Enviar mensajes
- Llamar a un servicio externo como un sistema de gestión de permisos
- Establecer o verificar variables
- Usar condiciones para ramificar la conversación
- Dirigir a otro tema

![Nodos de conversación](../../../../../translated_images/7.0_03_ConversationNodes.7b1d93b7d4522d544d7f9eed597a5ef30b9f96ee1670efd048528ce13423481a.es.png)

Los siguientes son los principales tipos de nodos que puedes agregar a un agente:

#### Enviar un mensaje

- **Propósito** - envía un mensaje al usuario.
- **Ejemplo** - `¡Gracias por tu solicitud! Te ayudaré con eso.`

Este nodo permite que tu agente envíe mensajes a los usuarios, que pueden ser texto simple o contenido enriquecido como imágenes, videos, tarjetas, respuestas rápidas y tarjetas adaptativas.

Puedes personalizar los mensajes usando variables, agregar múltiples variaciones de mensajes para variedad e incluso personalizar la salida de voz para canales habilitados para voz.

!!! tip
    Piensa en esto como un bloque de "decir algo" que ayuda a tu agente a comunicarse de manera clara e interactiva con los usuarios.

#### Hacer una pregunta

- **Propósito** - hace una pregunta al usuario y espera su respuesta.
- **Ejemplo** - `¿Cuáles son tus fechas de vacaciones?`

Este nodo se utiliza para pedir información específica a los usuarios durante una conversación y almacenar sus respuestas en variables para uso posterior.

Puedes personalizar el tipo de pregunta como entrada de texto o usar entidades para una lista definida de valores que el usuario selecciona, y definir cómo debe comportarse el agente si el usuario da una respuesta inválida o se salta la pregunta.

También admite contenido enriquecido como imágenes y respuestas rápidas, y te permite ajustar la validación, re-preguntar y configuraciones de interrupción para que el flujo de conversación sea fluido.

!!! tip
    Piensa en esto como un bloque de "preguntar y escuchar" que ayuda a tu agente a interactuar con los usuarios de manera estructurada que tú defines.

#### Preguntar con tarjeta adaptativa

- **Propósito** - enviar una tarjeta rica e interactiva usando JSON.
- **Ejemplo** - una tarjeta que muestra un selector de fechas de calendario para que el usuario seleccione una fecha.

Este nodo muestra tarjetas ricas e interactivas que los usuarios pueden completar y enviar, como formularios con cuadros de texto, botones e imágenes. Captura la entrada del usuario y la almacena en variables, que tu agente puede usar más adelante en la conversación.

!!! tip
    Piensa en esto como un bloque de "constructor de formularios" personalizable que hace que tu agente sea más atractivo y capaz de recopilar información detallada de los usuarios.

#### Agregar una condición

- **Propósito** - agregar lógica a la conversación. Verifica algo y decide qué hacer a continuación.
- **Ejemplo** - si el usuario dice `Sí`, pasa al siguiente paso. Si dice `No`, termina la conversación.

Este nodo crea puntos de decisión en el flujo de conversación de tu agente al verificar si una variable cumple ciertos criterios. Según si la condición es verdadera o falsa, el agente sigue diferentes caminos.

!!! tip
    Piensa en esto como un bloque de "si-entonces" que ayuda a tu agente a tomar decisiones dependiendo de la entrada del usuario o los datos almacenados en variables.

#### Gestión de variables

- **Propósito** - almacena o elimina información (llamada variables) durante la conversación.
- **Ejemplo** - guarda la fecha que el usuario seleccionó en el nodo de Preguntar que muestra una tarjeta adaptativa.

Este nodo te permite almacenar y gestionar información durante una conversación, como el nombre del usuario, su respuesta o preferencias. Puedes usar diferentes tipos de variables como texto, números o fechas, y pueden estar limitadas a un solo tema, compartidas entre temas (globales) o incluso extraídas del sistema o entorno.

!!! tip
    Piensa en esto como una "caja de memoria" que ayuda a tu agente a recordar información y usarla mientras la conversación continúa con el usuario.

#### Gestión de temas

- **Propósito** - mueve la conversación a otro tema o paso dentro del tema, transfiere la conversación o finaliza el tema o la conversación.
- **Ejemplo** - redirigir al tema "Política de permisos".

Este nodo permite que tu agente salte de un tema a otro sin reiniciar la conversación, termine el tema, transfiera o finalice la conversación, o vaya a un paso diferente dentro del mismo tema. Ayuda a guiar a los usuarios a través de diferentes partes del flujo de conversación al hacer transiciones suaves entre temas, y puedes pasar variables entre ellos para mantener el contexto.

!!! tip
    Piensa en esto como un bloque de "ir a otra sección/paso" que ayuda a tu agente a ser flexible al conversar con los usuarios.

#### Agregar una herramienta

- **Propósito** - conecta herramientas como conectores, flujos de agente, indicaciones, búsqueda personalizada, consulta de búsqueda, habilidades, protocolo de contexto de modelo.
- **Ejemplo** - Flujo de agente ejecutado después de que el usuario envíe su solicitud de vacaciones.

Este nodo le da a tu agente capacidades para interactuar con sistemas externos o realizar tareas específicas, como enviar correos electrónicos, verificar el clima o acceder a bases de datos. Puedes agregar herramientas usando conectores integrados, APIs personalizadas, flujos de agente, indicaciones, o conectarte a servidores MCP (Protocolo de Contexto de Modelo), e incluso automatización de interfaz gráfica para aplicaciones de escritorio mediante la herramienta de uso de computadora.

!!! tip
    Piensa en las herramientas como "bloques de acción" que le dan superpoderes a tu agente para hacer cosas más allá de _chatear_, como llamar a una API, ejecutar un proceso o recopilar automáticamente la entrada del usuario.

#### Nodo de respuestas generativas

- **Propósito** - utiliza un modelo de lenguaje grande para generar respuestas naturales y similares a las humanas basadas en la pregunta del usuario y cualquier dato conectado.
- **Ejemplo** - utiliza la fuente de conocimiento conectada que contiene información sobre derechos de vacaciones para responder preguntas de los usuarios sobre solicitudes de vacaciones.

Este nodo permite que tu agente responda preguntas de los usuarios utilizando información de diversas fuentes de conocimiento, como sitios web, documentos, SharePoint o datos personalizados. Puede usarse como respaldo cuando no se encuentra un tema coincidente, o dentro de un tema para proporcionar respuestas más detalladas y dinámicas basadas en fuentes específicas que hayas configurado para tu agente.

!!! tip
    Piensa en esto como un "bloque de respuesta inteligente" que ayuda a tu agente a dar respuestas útiles y precisas buscando contenido confiable que tú defines.

#### Nodo de solicitud HTTP

- **Propósito** - conecta tu agente a sistemas externos enviando llamadas API (por ejemplo, `GET` o `POST`) para obtener o actualizar datos.
- **Ejemplo** - cuando un usuario pregunta por su saldo de días de vacaciones, el agente realiza una solicitud `GET` al sistema de gestión de permisos y extrae el `remainingLeaveDays` de la respuesta de la API y responde al usuario con el valor.

Este nodo permite que tu agente se conecte a sistemas externos enviando llamadas API REST, como solicitudes `GET` o `POST`. Puedes personalizar la solicitud con encabezados, contenido del cuerpo e incluso usar Power Fx para incluir datos dinámicos, luego almacenar la respuesta en variables para usarla más adelante en la conversación.

!!! tip
    Piensa en esto como un bloque de "buscar y obtener información" que ayuda a tu agente a comunicarse con otros servicios, como recuperar detalles del usuario o enviar datos a otro sistema.

#### Enviar un evento

- **Propósito** - permite que tu agente envíe acciones no relacionadas con mensajes, como actualizaciones del sistema o activadores de herramientas, al cliente o canal, ayudándolo a realizar tareas.
- **Ejemplo** - reaccionar a un usuario que se une a un chat mostrando un mensaje de bienvenida.

Este nodo permite que tu agente envíe acciones no relacionadas con mensajes a sistemas externos o canales, que luego deciden cómo responder. Le das a cada evento un nombre y adjuntas un valor, que puede ser un número o texto simple, una variable o una fórmula de Power Fx, y se envía como un objeto JSON.

!!! tip
    Piensa en esto como un bloque de "activador silencioso" que ayuda a tu agente a hacer cosas detrás de escena o comunicarse con herramientas externas sin necesidad de que el usuario diga algo.

## 🏋🏻‍♀️ Usar Power Fx en tus nodos

En Copilot Studio, Power Fx es un lenguaje de programación de bajo código utilizado para agregar lógica y comportamiento dinámico a tu agente. Es el mismo lenguaje utilizado en Microsoft Power Apps, y está diseñado para ser simple y similar a Excel, lo que lo hace fácil para desarrolladores y no desarrolladores.

![Expresión Power Fx](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.es.png)

### Qué puede hacer Power Fx en los temas

- Establecer y manipular variables
      - Ejemplo: `Set(userName, "Adele Vance")`
- Crear condiciones
      - Ejemplo: `If(score > 80, "Pass", "Fail")`
- Formatear y transformar datos
      - Ejemplo: `Text(DateValue, "dd/mm/yyyy")`

### ¿Por qué usar Power Fx?

- **Flexible:** puedes construir lógica sin escribir líneas completas de código.

- **Familiar:** si has usado fórmulas de Excel, se siente muy similar.

- **Potente:** te permite personalizar conversaciones, validar entradas y controlar cómo se comporta tu agente según los datos del usuario.

## 🏗️ ¿Cómo creo y edito temas?

Hay dos formas en que puedes crear y editar temas para tus agentes.

### 1. Crear desde cero

Esto te permite construir flujos de conversación personalizados desde cero, y puedes agregar o eliminar nodos según sea necesario al editar tu tema.

![Agregar un tema](../../../../../translated_images/7.0_04_AddATopic.111df124a4a7ff8b41e3f577fbef08885ac52d9d6c0c705a82f5968e5ccc384d.es.png)

#### Por qué esto es útil

- Te da control total sobre cómo responde tu agente.
- Puedes personalizar la lógica usando variables, Power Fx y condiciones.
- Es perfecto para construir experiencias adaptadas a necesidades específicas del negocio.

### 2. Crear con Copilot
Esto te permite describir lo que deseas utilizando lenguaje natural, y Copilot construirá la conversación por ti. Lo mismo aplica al editar tu tema, usa lenguaje natural y Copilot revisará y modificará el tema por ti.

#### Lo que Copilot admite

- Puede crear y editar:
      - Nodos de mensaje
      - Nodos de pregunta
      - Nodos de condición
- No admite configuraciones avanzadas como cómo volver a preguntar al usuario si no responde o cómo manejar interrupciones durante una pregunta. Aún puedes ajustar esas configuraciones manualmente si es necesario.

#### Por qué esto es útil

- Acelera el desarrollo con asistencia de IA.
- Te permite enfocarte en la lógica y la experiencia del usuario en lugar de configuraciones repetitivas.
- Facilita iterar y mejorar los flujos de conversación con mínimo esfuerzo.

#### ✨ Ejemplos de indicaciones

- **Crear un tema**
      - `Aceptar el nombre, edad y fecha de nacimiento de un usuario y luego repetir sus respuestas`
      - `Recopilar la dirección, estado y código postal de un usuario. El usuario debería poder intentar cada pregunta hasta 4 veces`

- **Editar un tema**
      - `Agregar una pregunta solicitando la fecha de nacimiento del usuario`
      - `Resumir la información recopilada en una tarjeta adaptativa.`

## 👩🏻‍🎨 OK, ¿cómo diseño temas para mi agente?

### 🧙🏻‍♂️ Paso 1 - entender lo que los usuarios necesitan

Comienza identificando preguntas o tareas comunes que los usuarios pedirán a tu agente. Estas podrían ser:

- Preguntas que los usuarios hacen con frecuencia como, `¿cuál es mi derecho a días de enfermedad?`
- Tareas comunes que los usuarios quieren completar como enviar un formulario
- Problemas que los usuarios enfrentan a menudo como problemas de inicio de sesión

### 📦 Paso 2 - Agrupar los escenarios

Organiza las necesidades de los usuarios en tres categorías basadas en lo que aprendimos anteriormente: el propósito de un tema:

- Informativo - el usuario quiere saber algo
- Completar una tarea - el usuario quiere hacer algo
- Solución de problemas - el usuario necesita ayuda para resolver un problema

### 🗺️ Paso 3 - Diseñar la conversación

Dibuja un flujo de conversación simple sobre cómo debería responder el agente.

- Comienza con un saludo o confirmación
- Haz preguntas de seguimiento para obtener detalles
- Proporciona respuestas o realiza acciones

!!! tip
    Mantén la conversación breve y enfocada. Solo pregunta lo necesario.

### 🔀 Paso 4 - Manejar diferentes tipos de conversación

Diseña para ambos:

- **De un solo turno** - una pregunta, una respuesta

- **De varios turnos** - una conversación de ida y vuelta con preguntas de seguimiento

Ejemplo:

- Usuario: `Quiero solicitar permiso de vacaciones.`

- Agente: `¡Claro! ¿Qué fecha te gustaría que comenzara tu permiso?`

- Usuario: `15 de julio`

- Agente: `Entendido. ¿Y cuándo terminará tu permiso?`

- Usuario: `22 de julio.`

- Agente: `Gracias. ¿Cuál es el motivo de tu permiso?`

- Usuario: `Vacaciones familiares.`

- Agente: `Gracias por los detalles. He enviado tu solicitud de permiso del 15 al 22 de julio por vacaciones familiares. Pronto recibirás una confirmación.`

### 🤖 Paso 5 - Usar IA para preguntas inesperadas

Incluso si has diseñado un tema para solicitudes de permiso, los usuarios podrían hacer preguntas que no están directamente cubiertas. Aquí es donde las características de IA como el tema del sistema _Impulso conversacional_ son útiles.

Este tema incluye un nodo de respuestas generativas, que permite que tu agente comience a usar fuentes de conocimiento conectadas de inmediato. Cualquier fuente de conocimiento añadida a nivel del agente se incluye automáticamente en el nodo de respuestas generativas dentro del tema del sistema _Impulso conversacional_.

#### Ejemplo

- Usuario: `¿Puedo transferir días de vacaciones no utilizados al próximo año?`

Esta pregunta podría no formar parte del flujo de tema predefinido, especialmente si tu tema solo maneja solicitudes de permiso.

#### Cómo ayuda la IA

Si tu agente está conectado a los documentos de política de recursos humanos de tu empresa o al sitio web interno, la IA puede:

- Buscar la política de permisos relevante
- Entender y resumir las reglas
- El agente responde con: `Según la política de recursos humanos, puedes transferir días de vacaciones no utilizados al próximo año calendario. Para más detalles, consulta la sección de política de permisos en el portal de recursos humanos.`

#### Por qué esto es útil

- No necesitas crear manualmente un tema para cada pregunta relacionada con políticas.
- La IA puede obtener respuestas precisas de fuentes de conocimiento confiables.
- Mejora la experiencia del usuario haciendo que el agente parezca más inteligente y receptivo.

### 🔬 Paso 6 - Probar el tema, el flujo de conversación

Antes de publicar tu tema:

- Prueba usando preguntas reales o entradas de muestra reales.
- Asegúrate de que suene natural y útil.

!!! tip
    Aplica mejoras a tu tema según lo pruebes, como agregar más nodos o eliminar nodos en lugar de redirigir a otro tema.

### ⚠️ Paso 7 - Evitar duplicar contenido del sitio web

No copies lo que ya está en tu sitio web.

- Enfócate en temas que los usuarios preguntan con frecuencia.
- Agrega nuevos temas basados en el historial de chat o solicitudes de soporte.

### ✨ Ejemplo de flujo de conversación

A continuación, se muestra un ejemplo de un tema que maneja solicitudes de permiso.

#### Paso 1: Frase de activación

El usuario escribe,

`Quiero solicitar permiso de vacaciones`

#### Paso 2: El agente solicita detalles usando una tarjeta adaptativa

El agente pregunta,

`¡Claro! ¿Qué fechas te gustaría tomar libres?`

La tarjeta adaptativa tiene un control de selección de calendario para la fecha de inicio y la fecha de fin.

#### Paso 3: El usuario proporciona las fechas

El usuario selecciona la fecha de inicio como el 5 de agosto de 2025 y la fecha de fin como el 10 de agosto de 2025, y envía la tarjeta. Los valores de las fechas se almacenan en la salida de la tarjeta adaptativa como variables.

#### Paso 4: Flujo en la nube ejecutado

Se ha ejecutado un flujo en la nube de Power Automate que crea una nueva solicitud en el sistema de gestión de permisos y envía un correo electrónico para notificar al gerente sobre la solicitud de permiso.

#### Paso 5: Enviar un mensaje de confirmación al usuario

El agente responde con,

`Tu solicitud de permiso de vacaciones del 5 al 10 de agosto ha sido enviada. Tu gerente la revisará y se pondrá en contacto contigo pronto.`

## 🧪 Laboratorio 07 - Agregar un nuevo tema con nodos de conversación

Ahora vamos a aprender cómo agregar un nuevo tema con un activador y herramientas. Este laboratorio cubrirá la creación de un tema desde cero para que entiendas cómo personalizar temas según tus necesidades.

- [7.1 Agregar un nuevo tema desde cero](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.2 Definir las entradas y salidas del activador](../../../../../docs/recruit/07-add-new-topic-with-trigger)
- [7.3 Agregar una herramienta usando un conector](../../../../../docs/recruit/07-add-new-topic-with-trigger)

### ✨ Caso de uso

**Como** empleado

**Quiero** saber qué dispositivos están disponibles

**Para que** tenga una lista de dispositivos disponibles

¡Comencemos!

### Requisitos previos

1. **Lista de SharePoint**

    Usaremos la lista de SharePoint **Dispositivos** de [Lección 00 - Configuración del curso - Paso 3: Crear nuevo sitio de SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Si no has configurado la lista de SharePoint **Dispositivos**, por favor regresa a [Lección 00 - Configuración del curso - Paso 3: Crear nuevo sitio de SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agente de soporte técnico de Contoso**

    Usaremos el mismo agente creado previamente en [Lección 06 - Crear un agente personalizado usando lenguaje natural con Copilot y conectándolo con tus datos](../06-create-agent-from-conversation/README.md).

### 7.1 Agregar un nuevo tema desde cero

1. Selecciona la **pestaña Temas** cerca del nombre del agente. Si no la ves visible, selecciona **+6** y verás **Temas** listados.

    ![Seleccionar Temas](../../../../../translated_images/7.1_01_Topics.789ffa4f75830b5f25fb1eeb8fa3e8ba3810b95870cb3dc49d80d8f4ba15a00a.es.png)

1. La pestaña **Temas** se cargará y por defecto se mostrarán los temas _Personalizados_. Puedes filtrar los temas por Todos, Personalizados y Sistema. Los temas personalizados y del sistema que ves actualmente fueron creados automáticamente cuando se aprovisionó el agente.

    Selecciona **+ Agregar un tema** y selecciona **Desde cero**.

    ![Crear tema desde cero](../../../../../translated_images/7.1_02_FromBlank.f3fe83fad24825f8eb498b19af8e472810f657868613b96b3b4e033fa1042e75.es.png)

1. Ingresa un nombre para el tema. Copia y pega lo siguiente.

    ```text
    Available devices
    ```

    ![Nombrar el tema](../../../../../translated_images/7.1_03_TopicName.06eb34ebe94516c1d898b5dff183f9586f7526f9316bc122dca641ac29967966.es.png)

1. Ingresa una descripción del activador que describa lo que hace el tema. Copia y pega lo siguiente.

    ```text
    This topic helps users find devices that are available from our SharePoint Devices list. User can ask to see available devices and it will return a list of devices that are available which can include laptops, smartphones, accessories and more.
    ```

    ![Ingresar un nombre y descripción para el activador](../../../../../translated_images/7.1_04_TriggerDescription.cb748c0358b3af249fcc0fdb0b262185ffed14d8cf628186b8a65ad4bbf14172.es.png)

### 7.2 Definir las entradas y salidas del activador

1. A continuación, vamos a agregar una nueva variable de entrada que la IA generativa usará en su orquestación para extraer el valor del tipo de dispositivo del mensaje del usuario. Selecciona los **tres puntos (...)** en el tema y selecciona **Detalles** para ver el panel de detalles del tema.

    ![Seleccionar Detalles del Tema](../../../../../translated_images/7.2_01_SelectTopicDetails.cc1b97a86718e101084c366514cc306fe82243a014a44c579394e0f70ba5ca53.es.png)

1. El panel de **Detalles del Tema** ahora se ha cargado. Selecciona la pestaña **Entrada**.

    ![Pestaña de entrada](../../../../../translated_images/7.2_02_SelectInputTab.d0b900eb02a8f982324f59e3b7aca34c2cdba78263acdc9301225e1c3e6338b6.es.png)

1. Selecciona **Crear una nueva variable**.

    ![Crear nueva variable de entrada](../../../../../translated_images/7.2_03_CreateANewVariable.0d45780268d9b6250617c45a9ddd557cdaa23945b66539b313ca8d74f2c96cc2.es.png)

1. Ingresa un nombre para la variable. Copia y pega lo siguiente.

    ```text
    VarDeviceType
    ```

    ![Nombre de la variable de entrada](../../../../../translated_images/7.2_04_VariableName.56555922eab13cad52fa29d846f4e515d82c2e9bf61c86705f080a1ba4f3b1af.es.png)

1. Ahora necesitamos definir nuestras variables de entrada y salida. Las siguientes son propiedades que se pueden definir para las entradas y salidas del tema.

    | Campo    | Valor |
    | ---------- | :--------- |
    | ¿Cómo llenará el agente esta entrada? | Determina cómo el agente llena esta variable con un valor antes de ejecutar el tema. Por defecto está configurado como _Llenar dinámicamente con la mejor opción_. De lo contrario, puedes sobrescribir una entrada con un valor en lugar de preguntar al usuario |
    | Tipo de datos de la variable  | El tipo de datos de la variable. Los tipos de datos admitidos son `String`, `Boolean`, `Number`, `Date`, `DateTime`, `DateTimeNoTimeZone`, `Time`, `Record`, `Table`, `Unspecified`, `From sample data` |
    | Nombre para mostrar   | Nombre de la variable   |
    | Identificar como  | Tipo de entidad para que el agente capture el tipo de valor correcto  |
    | Descripción    | La descripción ayuda al agente a llenar automáticamente las entradas antes de ejecutar el tema o generar preguntas para solicitar los valores   |

    Las propiedades _¿Cómo llenará el agente esta entrada?_, _Tipo de datos de la variable_ y _Nombre para mostrar_ pueden permanecer como están. Actualiza la propiedad **Identificar como** a **Respuesta completa del usuario**.

    ![Actualizar Identificar como](../../../../../translated_images/7.2_05_IdentifyAs.a502101e6f60c27ed8c8b1eff049b8ceedd0531845b932f9b7608ad3d8220090.es.png)

1. Copia y pega lo siguiente como descripción.

    ```text
    List of possible values: Laptop, Desktop, Smartphone
    ```

    ![Descripción](../../../../../translated_images/7.2_06_InputDescription.844e1776080e595c6c221bcc33d7a269abcc7e4755c8f11b284c3950f42166b5.es.png)

1. A continuación, definamos nuestra salida para el tema. Selecciona la pestaña **Salida**.

    ![Seleccionar pestaña de salida](../../../../../translated_images/7.2_07_SelectOutputTab.ab5aa0a2f385f1492df5a67f8f2cbed752dc0258c1e1ddb9928d204405ec403a.es.png)

1. Selecciona **Crear una nueva variable**.

    ![Crear nueva variable de salida](../../../../../translated_images/7.2_08_CreateANewVariable.5518205f121014ff4757af062bedfd38ce768c8f38291dd9d6489d67cd5d5dc8.es.png)

1. Actualiza las siguientes propiedades.

    **Nombre de la variable** - Copia y pega lo siguiente.

    ```text
    VarAvailableDevices
    ```

    **Tipo de datos de la variable** - Selecciona **Tabla** como el tipo de datos.

    **Descripción de la variable** - Copia y pega lo siguiente.

    ```text
    List of available devices by device type
    ```

    ![Propiedades de salida](../../../../../translated_images/7.2_09_OutputVariable.fb0e159fbad5052280040090352c50faf4d91228095c3762e75440b2842e0d29.es.png)

1. Ahora hemos completado la definición de las entradas y salidas del tema. Selecciona el **icono X** para salir del panel de **Detalles del Tema**.

    ![Salir del panel de detalles del tema.](../../../../../translated_images/7.2_10_ExitTopicDetailsPane.6e8981434f04049bef7ab93f9545ee433087e1c99cdfe27b355ee9858ddfde99.es.png)

### 7.3 Agregar una herramienta usando un conector

1. A continuación, agreguemos un nodo que permita al agente recuperar la lista de dispositivos de la lista de SharePoint **Dispositivos**. Selecciona el **icono +** debajo del activador.

    ![Agregar una herramienta](../../../../../translated_images/7.3_01_AddNode.4656328835f7a28bc5f66c440d620a0990bf098e858619ff2c32a9b14fae7c4f.es.png)

1. Selecciona el nodo **Agregar una herramienta**, luego selecciona la pestaña **Conector**. Busca `Obtener elementos` y selecciona la acción del conector de SharePoint **Obtener elementos**.

    ![Seleccionar obtener elementos](../../../../../translated_images/7.3_02_GetItems.a6bdfb122449de789e7c58592f4c3e3a0f38b7bdcec2e0e5eab34b2d9d991f97.es.png)

1. Se necesita crear una nueva conexión para el conector. Selecciona el **icono de cheurón** y selecciona **Crear nueva conexión**.

    ![Agregar una herramienta](../../../../../translated_images/7.3_03_CreateNewConnection.03f49fab97e5f5f2a298e4b1b2e5081304c9c98c5f3ad5be0302c241c3d83d94.es.png)

1. Se mostrarán dos opciones que te permiten conectarte directamente a SharePoint Online o a un SharePoint local. Por defecto, la opción **Conectar directamente (servicios en la nube)** estará seleccionada, que es la que usaremos para nuestra conexión.
Selecciona **Crear**.

![Seleccionar Crear](../../../../../translated_images/7.3_04_SelectCreate.f2216f1e276ed153e06d5b5d47f170a0f9cc6854aa05f0736623acb3aeee1229.es.png)

1. Selecciona tu cuenta de usuario iniciada.

![Seleccionar cuenta de usuario iniciada](../../../../../translated_images/7.3_05_SelectSignedInUserAccount.e27a0ada918a1cf4477f3966adcc5f1d033a8998a2589d02d1208f21f5d93938.es.png)

1. A continuación, necesitas confirmar que tu cuenta de usuario puede ser utilizada para la conexión con el conector de SharePoint. Selecciona **Permitir acceso**.

![Seleccionar permitir acceso](../../../../../translated_images/7.3_06_AllowAccess.69f012dbcedf7ebc1869e648a5eaa661d085b15aa7a2eb69e69c5b63adfa36dd.es.png)

1. Selecciona **Enviar** para que la acción del conector de SharePoint **Obtener elementos** se agregue como un nodo al tema.

![Enviar](../../../../../translated_images/7.3_07_ConnectedSelectSubmit.16ec31ef062696cabb6e7964879debd177f2b9162f88ef95ae1b4eed85e08a21.es.png)

1. La acción del conector de SharePoint **Obtener elementos** ahora está agregada al tema. Ahora podemos comenzar a configurar las entradas de la acción. Selecciona el **icono de elipsis (...)** y selecciona **Propiedades**.

![Seleccionar Propiedades](../../../../../translated_images/7.3_08_GetItemsProperties.32bdda34a1d73a55eb2893695e4b4cf15cd899806e616d0b0b5015471414c9d7.es.png)

1. Aparecerá el panel de configuración de **Obtener elementos** y, por defecto, verás la pestaña **Entradas**. Selecciona la pestaña **Inicio** e ingresa una descripción en el campo **Descripción de uso**. Copia y pega lo siguiente.

    ```text
    Retrieves devices from SharePoint list
    ```

> Esto será útil cuando veamos la página _Administrar tus conexiones_ de nuestro agente. Volveremos a esto en breve.

![Descripción de Obtener elementos](../../../../../translated_images/7.3_09_UpdateDescription.76a8d2ebddd4c3e4ca423daad7485afa60f31f37c97e16529d94e224f9709d60.es.png)

1. Selecciona la pestaña **Entradas** y selecciona el sitio **Contoso IT** y la lista **Dispositivos** que configuraste en [Lección 00 - Configuración del curso - Paso 3: Crear nuevo sitio de SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

![Configurar entradas de Obtener elementos](../../../../../translated_images/7.3_10_GetItemsInputs.17f8689e660c480dd405ab2ab57db34dcd2b8e697ec09d54c8f8649eb619c58b.es.png)

1. Ahora, para mostrar solo los dispositivos de la lista de SharePoint basados en:
   - el valor seleccionado,
   - y solo los dispositivos donde el estado sea _Disponible_,

   necesitamos aplicar un filtro. Esto se logra ingresando una consulta de filtro con la ayuda de Power Fx. Selecciona el **icono de elipsis (...)**.

![Seleccionar icono de elipsis](../../../../../translated_images/7.3_11_SelectVariable.33bfe876cc230569ea0f6cc5e1efa100432509e44342e9b3d6a9e65ee2bc525f.es.png)

1. Por defecto, estarás en la pestaña **Personalizado**. Selecciona la pestaña **Fórmula**.

![Seleccionar pestaña Fórmula](../../../../../translated_images/7.3_12_SelectFormula.a7aba25c95956d113865da3f30da3f3872e12c7a7a8f3c65098a3e3fac9616a4.es.png)

1. Selecciona el icono de **expandir** para ampliar el campo **Fórmula**. Copia y pega la siguiente expresión de Power Fx.

Estamos utilizando la función `Concatenate` para crear una expresión que filtrará:
   - la columna de SharePoint **Estado** igual a _Disponible_,
   - y la columna de SharePoint **Tipo de activo** igual al _dispositivo seleccionado del nodo de pregunta_.

    ```text
    Concatenate("Status eq 'Available' and AssetType eq '", Topic.VarDeviceType, "'")
    ```

Selecciona **Insertar**.

![Ingresar expresión de Power Fx y seleccionar insertar](../../../../../translated_images/7.3_13_EnterFormula.d17cc9f73e01e1cab8e2420a55bcb726ae0a0e55673f81ee3d7fe12d20148b92.es.png)

1. La expresión de Power Fx ahora se aplicará en el parámetro de entrada de consulta de filtro de la acción **Obtener elementos**. A continuación, selecciona la vista **Todos los elementos** en **Limitar columnas por vista**. Esto solo recuperará las columnas de la lista basadas en la vista seleccionada.

![Listar columnas por vista](../../../../../translated_images/7.3_14_LimitColumnsByView.5537126aaa087bd7f81cc35dfe182aa72cdbec4fe1fb5c2e15823a1275dcaa71.es.png)

1. A continuación, actualizaremos el nombre de la variable para la salida. Selecciona la pestaña **Salidas** y selecciona la variable `GetItems`.

![Actualizar variable](../../../../../translated_images/7.3_15_ConfigureOutputs.d4cb0c5c8e37d1859ed705bd1582fce2d063e7f4d65cc036127a846d743ff391.es.png)

1. Actualiza el nombre a lo siguiente.

    ```text
    VarDevices
    ```

![Actualizar nombre de variable](../../../../../translated_images/7.3_16_RenameVariable.55d7adb355808d39fe515bf980af123c60e218fa427354079e86efc412dc0f83.es.png)

1. Desplázate hacia abajo y en la sección **Uso**, selecciona **Global**. Esto hará que la variable sea accesible por cualquier tema.

![Actualizar a variable global](../../../../../translated_images/7.3_17_UpdateToGlobalVariable.09bdb05c0938898a04e48b6bcebee1584f17080b63b2577594be74f9f77a5bc3.es.png)

1. **Cierra** el panel de **Propiedades de la variable**.

![Cerrar panel de propiedades de la variable](../../../../../translated_images/7.3_18_ExitVariablePropertiesPane.b1a5e76dfe490bdf1274d8e8c78df44f9b3e3542180fa52fb6f903a980ef31ab.es.png)

1. Selecciona el **icono de más +** para insertar un nuevo nodo, selecciona **Gestión de variables** seguido de seleccionar **Establecer un valor de variable**.

![Agregar nodo Establecer un valor de variable](../../../../../translated_images/7.3_19_AddSetAVariableValueNode.958d21c21727ef92506fe76cf0458f05ac8508d84d0a4917077d2889410330e2.es.png)

1. Selecciona el icono de **mayor que** para el parámetro de entrada **Establecer variable**.

![Establecer variable](../../../../../translated_images/7.3_20_SelectAVariable.9d3beb144002569b947c90cbec22afcc9cb34f277b21e3f65dcaf69831abc438.es.png)

1. Selecciona la salida del tema creada anteriormente como la variable, **VarAvailableDevices**.

![Guardar tema](../../../../../translated_images/7.3_21_SelectVarAvailableDevicesOutput.8d7259eb6ce1bc7c89de10b768b62dc3008ad7468c094249282bfe66436d1672.es.png)

1. A continuación, selecciona el **icono de elipsis (...)** para definir el valor de la variable.

![Seleccionar valor de variable](../../../../../translated_images/7.3_22_SelectVariable.f16319e644afc97d24a8cddaf64a7df9fcc52acd7e284b21f20b685a6e53887a.es.png)

1. Ahora utilizaremos una expresión de PowerFx para establecer el valor de la variable como la propiedad `value` devuelta en la respuesta de **Obtener elementos**, y hacer que el [alcance de la variable](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez) sea global agregando el prefijo `Global`.

Selecciona **Insertar** y **guardar** el tema.

![Fórmula de Power Fx para valor de variable](../../../../../translated_images/7.3_23_PowerFxFormula.f860daa2c8423021926f0697177279ede3d8d443714d471a77e655c3c42edb07.es.png)

1. A continuación, necesitamos actualizar las instrucciones del agente. Selecciona la pestaña **Resumen** y selecciona **Editar**.

![Editar instrucciones](../../../../../translated_images/7.3_24_EditInstructions.ce65a6cbcd74792885230af1da432fbb4079fd8b0f5af24ab840453a900b67a8.es.png)

1. Agrega una nueva línea en las instrucciones, copia y pega lo siguiente.

    ```text
    - Help find available devices and give full details using [Available devices]. Always extract the VarDeviceType from the inputs. After giving device details, ask the user if they want to request a device from the list of available devices.
    ```

Esta instrucción guiará a la IA generativa para invocar el disparador **Dispositivos disponibles** y mostrar la lista de dispositivos disponibles de la lista **Dispositivos** de SharePoint. Selecciona el marcador de posición del tema completo entre corchetes.

![Agregar instrucciones](../../../../../translated_images/7.3_25_AddInstructions.1e83853476fed3c8b1c43e657bd1c1351108702288a8f688d8543fbf1c2946fb.es.png)

1. Escribe el carácter de barra inclinada `/` y aparecerá la lista de temas. Selecciona el tema **Dispositivos disponibles**.

![Referenciar disparador](../../../../../translated_images/7.3_26_SelectAvailableDevicesTopic.1a1beaa256f5417153b7bc55de848b89778f666c213b3a3935444526ab881f0b.es.png)

1. **Guarda** las instrucciones actualizadas.

![Guardar instrucciones](../../../../../translated_images/7.3_27_SaveUpdatedInstructions.39908bb60990be971039bf392088fd0ecfa148c4496a6ad7413e1267b9091623.es.png)

1. Ahora vamos a probar nuestro agente actualizado. Selecciona **Probar** en la parte superior derecha para mostrar el panel de prueba y **actualiza** el panel de prueba. Ingresa el siguiente mensaje al agente.

    ```text
    I need a laptop
    ```

![Probar](../../../../../translated_images/7.3_28_Test.a273496de273bf3bebb9ac1504c1cedd8947c250ccf8454cf38b2effbdf66f71.es.png)

1. Antes de que el agente pueda proceder, el usuario necesita verificar que su conexión puede ser utilizada. Selecciona **Permitir**.

![Seleccionar permitir](../../../../../translated_images/7.3_29_SelectAllow.9f508c4001270252924d889792ecf0cc2a984954b903bb00f7ce6b2dc43d08e3.es.png)

1. El agente ejecutará la herramienta de SharePoint que recupera una lista filtrada de dispositivos donde el tipo de dispositivo es "laptop" y el estado es "disponible", utilizando la expresión de Power Fx. Se devolverá una respuesta en forma de puntos para que el usuario la lea.

![Respuesta de prueba](../../../../../translated_images/7.3_30_TestResponse.b60253568edc8b68d737a62960f4a3fa3620d2ba4658b05aa2503ad5fd763383.es.png)

1. Una última cosa que aprender es cómo ver las conexiones utilizadas al visualizar la página _Administrar tus conexiones_ del agente. Selecciona el **icono de elipsis (...)** y selecciona **Administrar conexión**.

![Administrar conexión](../../../../../translated_images/7.3_31_ManageConnections.151932ec4f907e020b67c418cf591806da164c74f6b1d9b73c04d7374d9fc505.es.png)

1. Esta página es donde podemos ver todas las conexiones utilizadas por el agente. Actualmente, solo hay una conexión listada que está asociada a la herramienta de SharePoint que se agregó al tema. Selecciona **1 herramienta** en la columna **Usado por**.

![Usado por](../../../../../translated_images/7.3_32_UsedBy.1e5ff032f1e02a565a0dafdde4f9436486ed3f012fcc23b824871a71b6de543e.es.png)

1. Aquí es donde podemos ver los detalles de la acción Obtener elementos y recordar la _descripción de uso_ que ingresamos anteriormente. Aquí es donde veremos la descripción de uso. Selecciona **Cerrar**.

> Esto nos permite saber qué acciones se utilizan y su propósito. Esto mantiene nuestras conexiones organizadas 📁.

![Descripción de uso](../../../../../translated_images/7.3_33_UsedByInformation.74a42aedb6dc906c678ff8b281a8706e1c0156ee7375111ed20e02d1a1dfd808.es.png)

1. Regresa a tu pestaña del navegador con Copilot Studio y **actualiza** el panel de prueba para borrar la prueba.

## ✅ Misión Completa

¡Felicidades! 👏🏻 Has aprendido cómo agregar un nuevo tema desde cero, cómo agregar una herramienta que llama a la acción del conector Obtener elementos de SharePoint y usar Power Fx para filtrar la respuesta para devolver solo dispositivos donde el estado sea disponible y el tipo de dispositivo sea laptop. 🙌🏻

Este es el final de **Laboratorio 07 - Agregar un nuevo tema con nodos de conversación**, selecciona el enlace a continuación para pasar a la siguiente lección. Ampliaremos el caso de uso de este laboratorio en el laboratorio de la siguiente lección.

⏭️ [Pasar a la lección **Mejorar las interacciones del usuario con tarjetas adaptativas**](../08-add-adaptive-card/README.md)

## 📚 Recursos Tácticos

🔗 [Usar temas del sistema](https://learn.microsoft.com/microsoft-copilot-studio/authoring-system-topics?mc_id=power-172618-ebenitez)

🔗 [Temas en Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/guidance/topics-overview?WT.mc_id=power-172618-ebenitez)

🔗 [Establecer disparadores de temas](https://learn.microsoft.com/microsoft-copilot-studio/authoring-triggers?WT.mc_id=power-172618-ebenitez)

🔗 [Definir temas de agentes](https://learn.microsoft.com/microsoft-copilot-studio/guidance/defining-chatbot-topics?WT.mc_id=power-172618-ebenitez)

🔗 [Crear expresiones usando Power Fx](https://learn.microsoft.com/microsoft-copilot-studio/advanced-power-fx?WT.mc_id=power-172618-ebenitez)

📺 [Crear temas usando lenguaje natural](https://aka.ms/ai-in-action/copilot-studio/ep6)

📺 [Agregar acciones a agentes usando conectores](https://aka.ms/ai-in-action/copilot-studio/ep4)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/07-add-new-topic-with-trigger" alt="Analítica" />

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que surjan del uso de esta traducción.