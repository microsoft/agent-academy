<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-17T19:27:42+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "es"
}
-->
# Misión 03: Añadir disparadores de eventos para actuar de forma autónoma

--8<-- "disclaimer.md"

## 🕵️‍♂️ NOMBRE CLAVE: `OPERACIÓN PUNTO DE SEÑAL`

> **⏱️ Ventana de tiempo de la operación:** `~45 minutos`

## 🎯 Resumen de la misión

Bienvenido de nuevo, agente. En [Misión 02](../02-multi-agent/README.md) - aprendiste cómo construir un agente secundario de Admisión de Solicitudes y un agente conectado de Preparación para Entrevistas para ampliar las capacidades de tu agente principal de Contratación.

Tu asignación, si decides aceptarla, es **Operación Punto de Señal** - profundizar en los **disparadores de eventos** - elevando tu sistema de agentes de reactivo a **operación autónoma**. Transformarás tus agentes de esperar la entrada humana a responder proactivamente a eventos externos y tomar acciones inteligentes sin supervisión.

Piensa en ello como una actualización de agentes que _responden preguntas_ a agentes que _anticipan necesidades_ y _actúan de forma independiente_. A través de disparadores de eventos y flujos de trabajo automatizados, tu agente de contratación detectará correos electrónicos entrantes con currículums, procesará los archivos adjuntos automáticamente, almacenará datos en Dataverse y notificará a tu equipo de reclutamiento de RRHH a través de Microsoft Teams, mientras tú te concentras en tareas de mayor valor.

Bienvenido al mundo donde la automatización se encuentra con la inteligencia.

## 🔎 Objetivos

En esta misión, aprenderás:

1. Cómo los disparadores de eventos permiten un comportamiento autónomo de los agentes sin interacción del usuario.
1. Las diferencias entre agentes interactivos y autónomos en Copilot Studio.
1. Cómo crear disparadores de eventos que procesen automáticamente archivos adjuntos de correos electrónicos y suban archivos a Dataverse.
1. Cómo construir flujos de agentes que publiquen tarjetas adaptativas en canales de Teams para notificaciones.
1. Cómo pasar datos entre disparadores de eventos y flujos de agentes para una automatización de extremo a extremo.

## 🤔 ¿Qué es un disparador de eventos?

Anteriormente en [Recruit](../../recruit/10-add-event-triggers/README.md), aprendimos sobre los disparadores de eventos. Hagamos un breve repaso en caso de que te lo hayas perdido.

Los **disparadores de eventos** permiten que un agente _actúe_ por _sí mismo_ cuando algo sucede en otro sistema - no se requiere un mensaje del usuario. Cuando se activa el evento configurado - como “nuevo elemento en SharePoint,” “nuevo correo electrónico,” “tarea asignada en Planner,” o incluso una recurrencia basada en tiempo, un conector envía una carga útil de disparador a tu agente. El agente sigue tus instrucciones para decidir qué acciones o temas llamar.

### Características clave

- **Activación autónoma:**
      - A diferencia de los disparadores de temas que comienzan cuando un usuario escribe al agente, los disparadores de eventos se activan por eventos externos, permitiendo un comportamiento proactivo.

- **Impulsado por carga útil:**
      - Cada evento entrega una carga útil (variables + instrucciones opcionales) a través de un conector. El agente utiliza tus instrucciones definidas y la carga útil para decidir qué hacer a continuación.
      - Por ejemplo, _llamar a un tema_ o _ejecutar acciones definidas por herramientas_.

- **Ejemplos preconfigurados:**
      - Archivo o elemento creado en SharePoint/OneDrive.
      - Tarea completada/asignada en Planner.
      - Respuesta enviada en Microsoft Forms.
      - Recurrencia/programación.

    La disponibilidad depende de las políticas de datos de tu organización configuradas en Power Automate.

- **Requiere orquestación generativa:**
      - Los disparadores de eventos están disponibles solo cuando la orquestación generativa está habilitada para el agente.

- **Facturación/uso:**
      - Cada entrega de disparador cuenta como un mensaje hacia la capacidad de Copilot Studio.
      - Por ejemplo, una recurrencia de 10 minutos envía un mensaje cada 10 minutos.

- **Modelo de autenticación y configuración:**
      - Añades disparadores dentro de la vista general del agente, en _Triggers_. La autenticación para el conector del disparador utiliza la cuenta del creador del agente (“autenticación del autor del agente”).
      - Puedes editar los parámetros del disparador y la carga útil en el portal de creación de Power Automate.

- **Pruebas y observabilidad:**
      - Puedes probar disparadores desde el panel de prueba del agente e inspeccionar el comportamiento con el mapa de actividad antes de publicar.

!!! info "Resumen para desarrolladores"

    Piensa en los disparadores de eventos como **señales tipo webhook** que empujan una carga útil estructurada a tu agente, permitiéndole _iniciar_ trabajo y encadenar acciones entre sistemas - sin esperar a que un usuario lo solicite.

### Disparadores de temas - cómo se diferencian

Anteriormente aprendiste sobre los disparadores de temas en [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), sin embargo, aún podrías preguntarte cómo los disparadores de _temas_ se diferencian de los disparadores de _eventos_, y por qué esa distinción importa para entender qué hace que un agente sea autónomo.

Los disparadores de temas controlan _cuándo se ejecuta un tema_, generalmente en respuesta a un mensaje del usuario.

- En la orquestación generativa, el disparador predeterminado es **Por agente** - el planificador elige un tema cuyo nombre/descripción coincida mejor con el mensaje del usuario.
- En la orquestación clásica, el predeterminado es **Frases** - el planificador elige un tema cuando una o varias frases de disparador coinciden mejor con el mensaje del usuario.

Otros tipos de disparadores incluyen `Mensaje recibido`, `Evento recibido`, `Actividad recibida`, `Actualización de conversación`, `Invocación recibida`, `Redirección`, `Inactividad` y `Plan completo`.

!!! info "Diferencia principal"

    Los disparadores de temas son iniciadores de _actividad de conversación_ dentro del chat.
    
    Los disparadores de eventos son iniciadores de _eventos del sistema_ entregados a través de conectores que pueden ejecutar el agente sin ninguna conversación.

### Guía rápida de disparador de temas vs disparador de eventos

- **Disparador de temas:** El usuario (o actividad de chat) dijo/hizo X ➡️ ejecutar Tema T.
- **Disparador de eventos:** SharePoint/Planner/Correo electrónico/Temporizador activado con carga útil P ➡️ el agente evalúa instrucciones ➡️ llama a Acciones/Temas según corresponda.

## 🏓 Agente interactivo vs agente autónomo - comparación

Ahora que conoces la diferencia entre los disparadores de eventos y los disparadores de temas, aprendamos la diferencia entre un agente interactivo y un agente autónomo.

En términos de Copilot Studio, "interactivo" se refiere a agentes que principalmente interactúan a través de **temas** en un chat o canal. "Autónomo" se refiere a agentes que también aprovechan **disparadores de eventos** para funcionar sin entrada del usuario.

La siguiente tabla resume sus diferencias y similitudes.

| Dimensión                           | Agente interactivo     | Agente autónomo                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Cómo comienza                       | El usuario (o actividad de chat) activa un tema. Ejemplo: Por agente, Frases, Mensaje recibido.   | Un disparador de evento externo envía una carga útil a través de un conector al agente. Ejemplo: SharePoint, Planner, correo electrónico, programación, etc. |
| Uso principal                       | Preguntas y respuestas, flujos de trabajo guiados, acciones solicitadas en el chat - Teams, web, etc.  | Operaciones proactivas y automatización en segundo plano - reaccionar a cambios en el sistema y luego notificar, archivar u orquestar tareas. |
| Superficie de disparador            | Disparadores de temas: Por agente / Frases / Mensaje recibido / Tipos de actividad / Invocación / Inactividad / Plan completo | Biblioteca de disparadores de eventos a través de conectores; la carga útil incluye datos del evento + instrucciones opcionales. |
| Planificador (orquestación generativa)  | Fuertemente utilizado para los disparadores Por agente y Plan completo para seleccionar/secuenciar temas. | Requerido para los disparadores de eventos; el agente utiliza instrucciones + carga útil para decidir qué acciones/temas llamar. |
| Ejemplo típico                      | El usuario pregunta "¿Cuál es nuestra política de reembolsos?" → Se ejecuta el tema, consulta el conocimiento, responde. | Nueva tarea asignada en Planner → Se activa el disparador de evento → El agente publica un mensaje en Teams, actualiza un registro o llama a un tema. |
| Ruta de configuración               | Crear temas, definir tipo de disparador, redactar diálogo/acciones; publicar en canales. | Añadir disparador de evento (Vista general → Disparadores), autenticar conector con credenciales del autor del agente, configurar carga útil/instrucciones; probar en el panel de prueba; publicar. |
| Autenticación y gobernanza          | Se ejecuta bajo el contexto de canal/autenticación; los disparadores de temas responden a actividades de chat en canales permitidos. | La disponibilidad de los disparadores depende de las políticas de datos de Power Automate; los conectores se ejecutan bajo la cuenta del creador del agente. |
| Observabilidad                      | Probar temas dentro de Copilot Studio, inspeccionar transcripciones/actividades de conversación. | Usar Probar disparador y mapa de actividad para validar la ejecución antes de publicar, monitorear actividad después de publicar. |
| Impacto en la capacidad             | Cada mensaje del usuario/respuesta del agente es un mensaje que consume capacidad. | Cada entrega de evento también es un mensaje, además de cualquier acción subsiguiente. Ejemplo: una recurrencia de 10 minutos = 6 mensajes/hora |

### ¿Cuándo usar cuál?

- Elige **disparadores de temas (interactivos)** cuando los usuarios inicien la conversación con el agente - preguntas frecuentes, admisión guiada o tareas tipo comando dentro del chat. El disparador Por agente del planificador reduce la curación manual de frases.
- Añade **disparadores de eventos (autónomos)** cuando el agente deba iniciar la conversación o tomar acción por sí mismo - en actualizaciones en SharePoint/Dataverse, correos electrónicos entrantes o en un horario. Esto te mueve de operaciones reactivas a proactivas.

## Consejos para desarrolladores y advertencias

1. **Habilita la orquestación generativa** para cualquier agente que desees hacer autónomo. Los disparadores de eventos no aparecerán de otra manera.

1. **Modela la carga útil temprano.** Decide qué campos mínimos necesita tu agente del disparador, como `itemId`, `assignedTo`, `dueDate` y añade instrucciones concisas que indiquen al agente qué acción/tema llamar según los valores de la carga útil.

1. **El alcance de la autenticación importa.** Los disparadores se autentican usando la cuenta del creador del agente. Asegúrate de que esa cuenta tenga los permisos correctos del conector y cumpla con las políticas de datos de Power Automate.

1. **Controla el costo y el ruido.** Las recurrencias de alta frecuencia o fuentes muy activas pueden consumir rápidamente mensajes - limita donde sea posible o añade condiciones en el disparador para filtrar eventos.

1. **Prueba antes de publicar.** Usa **Probar disparador** y el mapa de actividad para observar el plan y las acciones llamadas - itera sobre las instrucciones/carga útil hasta que el comportamiento sea estable.

## 🧪 Laboratorio 03 - Automatización de correos electrónicos de aplicaciones de candidatos

A continuación, añadiremos un disparador de evento al **Agente de Contratación** y construiremos un flujo de agente en el agente secundario **Agente de Admisión de Solicitudes** para manejar el procesamiento adicional de forma autónoma.

### ✨ Escenario de caso de uso

!!! info ""

    **Como** Reclutador de RRHH

    **Quiero** ser notificado cuando un correo electrónico con un currículum llegue a mi bandeja de entrada y se haya subido automáticamente a Dataverse

    **Para que pueda** estar informado de los currículums enviados por correo electrónico para aplicaciones automáticamente subidos a Dataverse

Lograremos esto utilizando dos técnicas:

1. Un disparador de evento para cuando llegue el correo electrónico,
    1. Verificar que el `contentType` del archivo sea igual a `PDF` como tipo de formato.
    1. Extraer el archivo y subirlo a Dataverse utilizando acciones a través del conector de Dataverse.
    1. Luego enviar un aviso al agente para un procesamiento adicional pasando parámetros de entrada desde las acciones de Dataverse.

1. Se añadirá un flujo de agente al agente secundario **Agente de Admisión de Solicitudes**, que será invocado por el aviso en el disparador de evento.
    1. Usar los parámetros de entrada pasados desde el aviso del disparador de evento en una tarjeta adaptativa publicada en un canal de Microsoft Teams para notificar al equipo de reclutamiento de RRHH. La tarjeta adaptativa tendrá un enlace a la fila en Dataverse que se verá en el **Agente de Contratación**.

¡Comencemos!

### ✨ Requisitos previos para completar esta misión

Necesitarás **ya sea**:

- **Haber completado la Misión 01 y la Misión 02** y tener tu Agente de Contratación listo, **O**
- **Importar la solución inicial de la Misión 03** si estás comenzando desde cero o necesitas ponerte al día. [Descargar solución inicial de la Misión 03](https://aka.ms/agent-academy)

!!! note "Importación de solución y datos de muestra"
    Si estás utilizando la solución inicial, consulta [Misión 01](../01-get-started/README.md) para obtener instrucciones detalladas sobre cómo importar soluciones y datos de muestra a tu entorno.

También necesitarás acceso a **Microsoft Teams** para completar el segundo ejercicio de laboratorio de publicación de una tarjeta adaptativa en Microsoft Teams.

### Laboratorio 3.1 - Automatizar la subida de currículums a Dataverse recibidos por correo electrónico

1. En el Agente de Contratación, desplázate hacia abajo en la **pestaña de Vista General** y selecciona **+ Añadir disparador**.

       ![Añadir disparador al agente](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.es.png)

1. Aparecerá una lista de disparadores. Selecciona **Cuando llegue un nuevo correo electrónico (V3)** y selecciona **Siguiente**.

       ![Seleccionar disparador Cuando llegue un nuevo correo electrónico (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.es.png)

1. Ahora veremos el **Nombre del disparador** y las referencias de conexión de inicio de sesión para las aplicaciones listadas.

       Renombra el nombre del disparador a lo siguiente,
    
       ```text
       Cuando llegue un nuevo correo electrónico de un solicitante
       ```

       Asegúrate de ver una marca verde junto a cada una de las referencias de conexión de las aplicaciones listadas. Si no ves una marca verde, inicia sesión a través de los puntos suspensivos (...) y selecciona **+ Nueva referencia de conexión** para crear una nueva referencia de conexión.

       ![Actualizar detalles del nombre del disparador y verificar referencias de conexión](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.es.png)

1. El paso final es configurar las propiedades de entrada del disparador. Actualiza las siguientes propiedades a lo siguiente:

     | Propiedad | Cómo configurarla | Detalles |
     |----------|-------------------|---------|
     | **Incluir adjuntos (Opcional)** | Desplegable | Sí |
     | **Filtro de asunto (Opcional)** | Escribir/Introducir con teclado | Aplicación |
     | **Solo con adjuntos (Opcional)** | Desplegable | Sí |

       Selecciona **Crear disparador**.

       ![Configurar entradas del disparador](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.es.png)

1. Una vez creado, aparecerá un mensaje de confirmación indicando que el disparador ha sido añadido al agente. Selecciona **Cerrar** y el disparador se listará en la sección **Disparadores**.
Ahora vamos a actualizar el desencadenador del evento para añadir más capacidades de automatización. Selecciona los **tres puntos (...)** en el desencadenador y elige **Editar en Power Automate**.

![Seleccionar Editar en Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.es.png)

1. El desencadenador se cargará como un flujo en el portal de creación de Power Automate. Lo que estás viendo es el diseñador de flujos en el portal de creación de Power Automate. Aquí es donde podemos añadir más lógica y acciones para una mayor automatización. El desencadenador aparecerá en la parte superior, seguido de **Envía un aviso al copiloto especificado para su procesamiento** como la última acción en el flujo.

![Diseñador de flujos en el portal de creación de Power Automate](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.es.png)

1. Por defecto, el desencadenador **Cuando llega un nuevo correo electrónico** en Power Automate puede procesar varios correos juntos si llegan varios a la vez, ejecutando el flujo solo una vez para el lote.

Para garantizar que el flujo se ejecute por separado para cada correo, habilita la configuración **Dividir en** en los ajustes del desencadenador y selecciona `@triggerOutputs()?['body/value']` en el campo de matriz desplegable.

Con **Dividir en** activado y el campo de matriz configurado como `@triggerOutputs()?['body/value']`, el flujo se ejecutará individualmente para cada mensaje, incluso si llegan muchos simultáneamente.

![Activar configuración de Dividir en el desencadenador](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.es.png)

1. A continuación, añadiremos algo de lógica para verificar el tipo de archivo del adjunto; solo queremos subir archivos adjuntos en formato .PDF y no imágenes (que podrían provenir de firmas de correo electrónico). Selecciona el icono **+** debajo del desencadenador y elige **Control** en la sección de **Herramientas integradas**.

![Seleccionar Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.es.png)

1. Selecciona la acción **Condición**.

![Seleccionar acción Condición](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.es.png)

1. Ahora configuramos la condición para verificar si el tipo de archivo adjunto es .PDF. En el campo **Elegir un valor**, selecciona el **icono de rayo** o el **icono fx** a la derecha.

1. En el campo **Buscar**, escribe lo siguiente:

```text
content type
```

1. Luego selecciona el parámetro **Attachments Content-Type** del desencadenador.

1. A continuación, selecciona **Agregar** para añadir la entrada de contenido dinámico en el parámetro **Id** de la acción.

![Configurar acción Condición](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.es.png)

1. Hagamos una pausa aquí por un momento, probablemente notaste que la acción **Para cada uno** apareció automáticamente.

Selecciona la acción **Para cada uno**. Esta acción representa un bucle que recorre cada adjunto en el correo electrónico, ya que el parámetro **Attachments Content-Type** del desencadenador está vinculado a cada adjunto.

En el fondo, es una matriz y por eso la acción **Para cada uno** se añadió automáticamente cuando seleccionamos el parámetro **Attachments Content-Type** en la acción **Condición**.

Para aprender más sobre esto, expande el siguiente bloque de aprendizaje adicional.

??? info "Aprendizaje adicional: La acción Para cada uno aparece automáticamente"

🤔 **¿Por qué aparece automáticamente "Aplicar a cada uno" o "Para cada uno"?**

Cuando seleccionas un parámetro (contenido dinámico) que representa una lista o matriz de elementos - por ejemplo, una lista de adjuntos, correos electrónicos o filas - Power Automate reconoce que podrías querer procesar cada elemento individualmente.

Para ayudarte a hacer esto, Power Automate añade automáticamente un bucle **“Aplicar a cada uno”** (o **Para cada uno**) alrededor de tu acción. Esto asegura que tu acción se ejecute una vez por cada elemento en la lista, en lugar de intentar procesar toda la lista a la vez (lo que podría causar errores).

🦋 **Ejemplo**

- Si seleccionas "Attachments" de una acción anterior (que es una matriz), e intentas usarlo en una acción que espera un solo archivo, Power Automate envuelve tu acción en un bucle **"Aplicar a cada uno"** (o **Para cada uno**). 
- De esta manera, tu acción se ejecutará para **cada adjunto** - uno a la vez.

💡 **Puntos clave**

- **Automático:** El bucle aparece automáticamente para ayudarte a procesar cada elemento en una colección.
- **Previene errores:** Sin el bucle, tu acción podría fallar porque no puede manejar múltiples elementos a la vez.
- **Indicador visual:** Es una forma visual de mostrar que tu flujo repetirá la acción para cada elemento en la lista.

![Explicación de la acción Para cada uno](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.es.png)

1. A continuación, en el otro campo **Elegir un valor**, escribe lo siguiente:

```text
application/pdf
```

Esto asegurará que para cada archivo adjunto, se verifique que el formato de extensión del archivo sea .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.es.png)

1. Ahora configuraremos el camino **Verdadero** para extraer el archivo del correo electrónico y subirlo a la tabla **Currículum** de Dataverse.

Añade una nueva acción debajo del camino **Verdadero** y busca `html to text`. Selecciona la acción **Html to text**.

Para aprender más sobre la acción **Html to text**, expande el siguiente bloque de aprendizaje adicional.

??? info "Aprendizaje adicional: Acción Html to text"

🤔 **¿Qué es la acción "HTML to text"?**

La acción **HTML to text** en Power Automate se utiliza para convertir contenido en formato HTML en texto plano. Esto es especialmente útil cuando recibes datos (como correos electrónicos, contenido web o respuestas de API) que contienen etiquetas HTML, y quieres extraer solo el texto legible sin ningún formato o código.

⚙️ **¿Cómo funciona?**

- **Entrada:** Proporcionas una cadena de contenido HTML (por ejemplo, el cuerpo de un correo electrónico).
- **Salida:** La acción elimina todas las etiquetas HTML y devuelve solo el texto plano.

👍🏻 **¿Cuándo deberías usarlo?**

- Cuando quieras extraer texto legible de correos electrónicos, páginas web o respuestas de API que contienen HTML.
- Antes de enviar contenido a sistemas que no admiten formato HTML (como SMS, mensajes de Teams o bases de datos).
- Para limpiar datos para un procesamiento o análisis posterior.

🔭 **¿Dónde encontrarlo?**

- En Power Automate para Flujos de Agente, busca la acción llamada `HTML to text`. Está en el conector **Operaciones de datos**.

💡 **Puntos clave**

- Elimina todas las etiquetas HTML y deja solo el texto.
- No interpreta ni ejecuta scripts/estilos - solo elimina etiquetas.
- Útil para la limpieza de datos y la preparación de contenido para salidas en texto plano.

![Añadir acción Html to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.es.png)

1. A continuación, necesitamos crear una nueva referencia de conexión para la acción **Html to text** seleccionando **Agregar nuevo**.

![Agregar nueva referencia de conexión](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.es.png)

1. La acción ahora puede configurarse. Añadamos el parámetro **Body** del desencadenador. En el campo **Contenido**, selecciona el **icono de rayo** o el **icono fx** a la derecha.

![Agregar contenido dinámico](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.es.png)

1. En la pestaña **Contenido dinámico**, busca `body` y selecciona el parámetro **Body**, seguido de seleccionar **Agregar**.

![Agregar parámetro Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.es.png)

1. Hemos terminado de configurar esta acción, así que salgamos de la acción seleccionando los dos corchetes angulares («) que apuntan hacia la izquierda para colapsar el panel.

![Colapsar panel de acción](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.es.png)

1. Añadiremos una nueva acción seleccionando el **icono +** debajo de la acción **Html to text**, lo que cargará el panel para añadir acciones. Selecciona el conector **Microsoft Dataverse**.

![Añadir nueva acción](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.es.png)

1. Selecciona la acción **Agregar una nueva fila**.

![Agregar una nueva acción de fila](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.es.png)

1. Renombra la acción seleccionando los **tres puntos (...)**, copia y pega lo siguiente como nombre:

```text
Agregar una nueva fila de Currículum
```

Para el parámetro **Nombre de la tabla**, busca `res` y selecciona la tabla **Currículums**.

![Renombrar acción y configurar parámetro Nombre de la tabla](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.es.png)

1. Selecciona el campo **Título del Currículum** y selecciona el **icono de rayo** o el **icono fx** a la derecha.

![Configurar parámetro Título del Currículum](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.es.png)

1. En la pestaña **Función**, introduce la siguiente expresión que utiliza la función `item()`.

```text
item()?['name']
```

Para aprender más sobre la función `item()`, expande el siguiente bloque de aprendizaje adicional.

??? info "Aprendizaje adicional: Función `item()`"

🤔 **¿Qué es la función `item()`?**

- Cuando utilizas una acción **Aplicar a cada uno**, Power Automate recorre cada elemento en una colección (matriz).
- Se utiliza principalmente dentro de acciones como **Aplicar a cada uno** (o **Para cada uno**), **Seleccionar** o **Filtrar matriz**.

⚙️ **¿Cómo funciona?**

- `item()` es una función que devuelve el elemento actual que se está procesando en un bucle o operación de matriz.
- Dentro de ese bucle, `item()` se refiere al _elemento actual_ que se está procesando.

📌 **¿Dónde lo usas?**

- **Aplicar a cada uno:** para acceder a las propiedades del elemento actual.
- **Seleccionar:** para transformar cada elemento en una matriz.
- **Filtrar matriz:** para referenciar el elemento actual que se está evaluando.

🦋 **Ejemplo**

- Expresión dentro de un bucle:
       -  `item()?['Email']`
- Esto obtiene la propiedad `Email` del elemento actual.

💡 **Puntos clave**

- `item()` es _sensible al contexto_: siempre se refiere al elemento actual en el bucle o operación de matriz en el que estás.
- Si anidas bucles, puedes usar `items('NombreDelBucle')` para referenciar elementos en un bucle específico.

Selecciona **Agregar** para añadir la expresión al parámetro **Título del Currículum**.

![Añadir expresión para el parámetro Título del Currículum](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.es.png)

1. Aún necesitamos configurar varios parámetros más, selecciona **Mostrar todo** y en el campo **Carta de presentación**, selecciona el **icono de rayo** o el **icono fx** a la derecha.

En la pestaña **Función**, introduce la siguiente expresión que utiliza la misma expresión en la [misión anterior](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Esta expresión verifica si el _texto_ de la acción **Html to text** es más largo que 2000 caracteres, y si es así, devuelve solo los primeros 2000 caracteres; de lo contrario, devuelve el texto completo.

![Añadir expresión para el parámetro Carta de presentación](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.es.png)

1. La expresión ahora se añadirá al campo **Carta de presentación**.

![Expresión añadida al parámetro Carta de presentación](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.es.png)

1. Para el campo **Dirección de correo electrónico de origen**, busca `from` y selecciona el parámetro **From** del desencadenador, ya que contiene el valor de la dirección de correo electrónico.

![Parámetro Dirección de correo electrónico de origen](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.es.png)

1. Para el campo **Fecha de subida**, selecciona el **icono de rayo** o el **icono fx** a la derecha. En la pestaña **Función**, introduce la siguiente expresión que utiliza la función `utcNow()`.

```text
utcNow()
```

Para aprender más sobre la función `utcNow`, expande el siguiente bloque de aprendizaje adicional.

??? info "Aprendizaje adicional: Función `utcNow`"

🤔 **¿Qué es la función `utcNow()`?**

- La función utcnow() en Power Automate devuelve la fecha y hora actual en Tiempo Universal Coordinado (UTC) en un formato ISO 8601, como: `2025-09-23T04:32:14Z`

🦋 **Ejemplo**

- Expresión:
       -  `concat('Informe generado el ', utcnow())`
- La salida es:
       - Informe generado el `2025-09-23T04:32:14Z`

💡 **Puntos clave**
- **No se requieren argumentos (parámetros de entrada):** siempre proporciona la marca de tiempo actual en UTC.
   - **Casos de uso**
       - Agregar marcas de tiempo a registros o nombres de archivos
       - Comparar la hora actual con otras fechas
       - Condiciones basadas en programación o tiempo

![Parámetro de fecha de carga](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.es.png)

1. Hemos terminado de configurar la acción **Agregar una nueva fila de currículum**, así que salgamos del panel colapsándolo.

![Salir del panel de acción](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.es.png)

1. Agregaremos una nueva acción seleccionando el **icono +** debajo de la acción **Agregar una nueva fila de currículum**, lo que cargará el panel para agregar acciones. Selecciona nuevamente el conector **Microsoft Dataverse**.

![Agregar acción de Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.es.png)

1. Selecciona la acción **Subir un archivo o una imagen**.

![Agregar la acción Subir un archivo o una imagen](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.es.png)

1. Renombra la acción seleccionando los **tres puntos (...)**, copia y pega lo siguiente como nombre:

```text
Subir archivo de currículum
```

![Renombrar acción](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.es.png)

1. Selecciona el campo **Nombre del contenido** y luego selecciona el **icono de rayo** o **icono fx** a la derecha.

En la **pestaña de función**, ingresa la siguiente expresión que utiliza la función `item()`. Esto obtiene la propiedad `name` del elemento actual (el archivo adjunto).

```text
item()?['name']
```

![Configurar parámetro Nombre del contenido](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.es.png)

1. Para el parámetro **Nombre de la tabla**, busca `res` y selecciona la tabla **Currículums**.

![Configurar parámetro Nombre de la tabla](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.es.png)

1. Selecciona el campo **ID de fila** y luego selecciona el **icono de rayo** o **icono fx** a la derecha.

Busca `ID` y selecciona el parámetro **Currículum** de la acción _Agregar una nueva fila_ de Dataverse, ya que contiene el valor de ID de la fila para subir el archivo PDF.

Selecciona **Agregar**.

![Seleccionar ID de fila](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.es.png)

1. Selecciona el campo **Nombre de columna** y selecciona la opción **PDF del currículum**.

![Configurar parámetro Nombre de columna](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.es.png)

1. Selecciona el campo **Contenido** y selecciona el **icono de rayo** o **icono fx** a la derecha.

En la **pestaña de función**, ingresa la siguiente expresión que utiliza la función `item()`. Esto obtiene la propiedad `contentBytes` del elemento actual (el archivo adjunto). `contentBytes` se refiere a los datos binarios en bruto de un archivo o adjunto, codificados como una cadena Base64.

```text
item()?['contentBytes']
```

1. Hemos terminado de configurar esta acción, así que salgamos de la acción seleccionando los dos corchetes angulares («) que apuntan hacia la izquierda para colapsar el panel.

![Colapsar panel de acción](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.es.png)

1. A continuación, selecciona **Envía un mensaje al copiloto especificado para su procesamiento**, luego arrastra y suelta esta acción debajo de la acción **Subir archivo de currículum** en el camino _Verdadero_ de la condición.

![Arrastrar y soltar acción en el camino Verdadero](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.es.png)

1. Selecciona **Envía un mensaje al copiloto especificado para su procesamiento** para configurarlo.

![Seleccionar acción](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.es.png)

1. En el campo **Cuerpo/mensaje**, selecciona todo el contenido del campo y bórralo/elíminalo.

![Borrar parámetro Cuerpo](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.es.png)

1. Copia y pega el siguiente texto en el campo **Cuerpo/mensaje** y resalta el `RESUME ID PLACEHOLDER`.

```text
Enviar [ResumeId (text)] = "RESUME ID PLACEHOLDER" y [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" y [ResumeNumber (text_2)] = "RESUME NUMBER PLACEHOLDER" a la herramienta "Notificar canal de solicitantes de Teams" en el agente secundario "Agente de recepción de solicitudes"
```

![Reemplazar texto del marcador de posición de ID de currículum](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.es.png)

1. Selecciona el **icono de rayo** o **icono fx** a la derecha.

Busca `resume` y selecciona el parámetro **Currículum** de la acción _Agregar una nueva fila de Dataverse_, ya que contiene el valor de `ID` de la fila de currículum creada.

Selecciona **Agregar**.

![Seleccionar parámetro de currículum](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.es.png)

1. Resalta el `RESUME TITLE PLACEHOLDER`. Selecciona el **icono de rayo** o **icono fx** a la derecha.

Busca `title` y selecciona el parámetro **Título del currículum** de la acción _Agregar una nueva fila de Dataverse_, ya que contiene el valor de `título del currículum` de la fila de currículum creada.

Selecciona **Agregar**.

![Seleccionar parámetro de título de currículum](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.es.png)

1. Resalta el `RESUME NUMBER PLACEHOLDER`. Selecciona el **icono de rayo** o **icono fx** a la derecha.

Busca `resume number` y selecciona el parámetro **Número de currículum** de la acción _Agregar una nueva fila de Dataverse_, ya que contiene el valor de `Número de currículum` de la fila de currículum creada.

Selecciona **Agregar**.

![Seleccionar parámetro de número de currículum](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.es.png)

1. Hemos terminado de configurar esta acción y nuestro flujo de agente 🙌🏻 ¡Lo estás haciendo genial! Ahora guardemos nuestro flujo de activación de eventos seleccionando **Guardar borrador**.

![Guardar borrador](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.es.png)

1. Ahora necesitamos editar los detalles del flujo de agente, selecciona **Atrás**.

![Seleccionar Atrás](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.es.png)

1. Selecciona **Editar** en la sección **Detalles** y actualiza el **Plan** a la opción **Copilot Studio**.

Selecciona **Guardar**.

![Cambiar plan a Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.es.png)

1. Aparecerá un modal para pedirte que confirmes el cambio al plan Copilot Studio. Selecciona **Confirmar**.

![Confirmar cambio de plan a Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.es.png)

1. El plan ahora está actualizado a **Copilot Studio**. Selecciona **Editar** ya que necesitamos publicar el flujo de activación de eventos para nuestro agente.

![Editar flujo](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.es.png)

1. Selecciona **Publicar**.

![Publicar](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.es.png)

¡Hurra! El flujo de activación de eventos ahora está publicado 😃

![Publicado](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.es.png)

Procedamos a crear un nuevo flujo de agente que será invocado por el agente secundario **Agente de recepción de solicitudes**.

### Laboratorio 3.2 - Notificar a un canal de Teams usando una tarjeta adaptativa

Ahora vamos a crear un nuevo flujo de agente para el agente secundario **Agente de recepción de solicitudes**, que utiliza los valores pasados por la activación de eventos para publicar una tarjeta adaptativa en un canal de Teams. Esta tarjeta adaptativa alertará al equipo de reclutamiento de recursos humanos sobre el PDF que se cargó automáticamente para que puedan revisarlo.

¡Comencemos!

1. En el **Agente de contratación**, selecciona la pestaña **Agentes** y selecciona el **Agente de recepción de solicitudes**.

![Seleccionar Agente de recepción de solicitudes](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.es.png)

1. Desplázate hacia abajo hasta **Herramientas** y selecciona **+ Agregar**.

![Agregar herramienta](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.es.png)

1. Aparecerá el modal **Agregar herramienta**. Selecciona **+ Nueva herramienta**.

![Seleccionar Nueva herramienta](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.es.png)

1. Selecciona **Flujo de agente**.

![Seleccionar flujo de agente](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.es.png)

1. A continuación, se cargará el **diseñador de flujo de agente**. En el disparador **Cuando un agente llama al flujo**, selecciona **+ Agregar una entrada**.

![Seleccionar agregar una entrada](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.es.png)

1. Selecciona **Texto** como el tipo de entrada del usuario.

![Seleccionar Texto](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.es.png)

1. En el campo de entrada de texto, copia y pega lo siguiente como nombre del parámetro de entrada.

```text
ResumeId
```

![Entrada ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.es.png)

1. Repite los mismos pasos para agregar una segunda entrada de texto. Copia y pega lo siguiente como nombre del parámetro de entrada.

```text
ResumeTitle
```

![Entrada ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.es.png)

1. Repite los mismos pasos para agregar una tercera entrada de texto. Copia y pega lo siguiente como nombre del parámetro de entrada.

```text
ResumeNumber
```
![Entrada ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.es.png)

1. ¿Recuerdas cómo en [Reclutar](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) agregamos una tarjeta adaptativa dentro de un tema para nuestro agente? Esta vez, vamos a agregar una tarjeta adaptativa en un flujo de agente. Ahora vamos a agregar otra acción a nuestro flujo de agente que publicará una tarjeta adaptativa en un canal de Teams.

Selecciona el **icono +** debajo del disparador.

![Agregar nueva acción](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.es.png)

1. Selecciona la acción **Publicar tarjeta en un chat o canal**.

![Seleccionar acción Publicar tarjeta en un chat o canal](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.es.png)

1. Se necesita crear una referencia de conexión a Microsoft Teams con tu cuenta de usuario iniciada. Selecciona **Iniciar sesión**.

![Seleccionar iniciar sesión](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.es.png)

1. Selecciona tu cuenta de usuario y luego selecciona **Permitir acceso**.

![Seleccionar Permitir acceso](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.es.png)

1. Para los siguientes parámetros de entrada:

| Parámetro | Cómo configurarlo | Detalles |
|----------|--------------------|---------|
| **Publicar como** | Desplegable | Selecciona la opción `Flow bot` |
| **Publicar en** | Desplegable | Selecciona la opción `Canal` |
| **Equipo** | Desplegable | Selecciona un equipo disponible en tu entorno al que tengas acceso para completar este ejercicio de laboratorio |
| **Canal** | Desplegable | Selecciona un canal disponible en tu entorno al que tengas acceso para completar este ejercicio de laboratorio |

![Configurar parámetros de entrada](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.es.png)

1. A continuación, configuraremos el campo **Tarjeta adaptativa**. Selecciona el campo **Tarjeta adaptativa**.

![Seleccionar campo Tarjeta adaptativa](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.es.png)

1. Abre el archivo [Resume Table Updated JSON file](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), copia todo su contenido y pégalo en el campo de la tarjeta adaptativa.

![Copiar y pegar JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.es.png)

1. Similar a lo que hicimos en [Reclutar](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), vamos a reemplazar valores existentes en la carga útil JSON con valores reales o contenido dinámico.

Primero, actualicemos la URL para la propiedad `url` dentro de la propiedad `selectAction`. Esta URL será reemplazada con la URL de la vista del sistema de currículums en la aplicación modelo **Hiring Hub**. Esto permitirá al reclutador seleccionar la acción y ser dirigido a la vista del sistema de currículums en la aplicación modelo.

Resalta el valor actual de la URL y elimínalo.

![Seleccionar valor de URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.es.png)

1. En la aplicación modelo **Hiring Hub**, navega a la vista del sistema **Currículums** usando el menú del lado izquierdo y copia la URL. Luego, regresa al flujo de agente y pega la URL copiada en la propiedad **url** dentro de la propiedad `selectAction`.

![Copiar URL de vista del sistema de currículums](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.es.png)
1. Deberías ver lo siguiente donde lo resaltado en amarillo son los detalles de tu entorno de la aplicación basada en modelos **Hiring Hub**.

     | Parámetro | Valor | Explicación |
     |----------|------------|---------|
     | **Organization URI** | GUID | La URL de la organización del entorno Dataverse/Dynamics 365 |
     | **appid** | GUID | Para abrir una aplicación basada en modelos específica, se utiliza el parámetro de consulta appid o appname. En este caso, se utiliza appid |
     | **viewid** | GUID | El parámetro de consulta que es el id de la vista |

       ![Pegar URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.es.png)

1. A continuación, agregaremos valores de contenido dinámico para varias propiedades. Comencemos con el texto que mostrará la referencia del Número de Currículum de la fila que fue creada automáticamente por el disparador del evento.

      Selecciona el ícono **panel** para cargar el panel de acciones.

       ![Seleccionar ícono del panel](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.es.png)

1. Desplázate hacia abajo hasta la línea donde ves la propiedad `text` para `RESUME NUMBER PLACEHOLDER`. Resalta el valor del marcador de posición y elimínalo.

       ![Eliminar marcador de posición](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.es.png)

1. Haz clic entre las comillas dobles y selecciona el **ícono de rayo** o el **ícono fx** a la derecha.

      En la pestaña **Contenido dinámico**, selecciona el parámetro **ResumeNumber** y selecciona **Agregar**.

       ![Agregar parámetro ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.es.png)

1. El parámetro **ResumeNumber** ahora se agregará como contenido dinámico a la propiedad `text`.

       ![Contenido dinámico ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.es.png)

1. Repetiremos los mismos pasos para el `RESUME NAME PLACEHOLDER`. Desplázate hacia abajo hasta la línea donde ves la propiedad `text` para `RESUME NAME PLACEHOLDER`. Resalta el valor del marcador de posición y elimínalo.

       ![Marcador de posición del nombre del currículum](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.es.png)

1. Haz clic entre las comillas dobles y selecciona el **ícono de rayo** o el **ícono fx** a la derecha.

      En la pestaña **Contenido dinámico**, selecciona el parámetro **ResumeTitle** y selecciona **Agregar**.

       ![Agregar parámetro ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.es.png)

1. El parámetro **ResumeTitle** ahora se agregará como contenido dinámico a la propiedad `text`.

       ![Contenido dinámico ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.es.png)

1. Repetiremos los mismos pasos para el valor de **Due Date** que representa cuándo un reclutador debe revisar el currículum. Desplázate hacia abajo hasta la línea donde ves la propiedad `text` para `May 21, 2023`.

       ![Seleccionar Permitir acceso](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.es.png)

1. Elimina este valor de marcador de posición de fecha y haz clic entre las comillas dobles.

       ![Eliminar](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.es.png)

1. Selecciona el **ícono de rayo** o el **ícono fx** a la derecha y en la pestaña **Función**, ingresa la siguiente expresión y selecciona **Agregar**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Esta expresión utiliza dos funciones.

     | Función | Explicación |
     |----------|------------|
     | **addDays** | Agrega un número específico de días a una fecha dada y devuelve la fecha resultante en formato de cadena |
     | **utcNow** | Devuelve la fecha y hora actual en formato de Tiempo Universal Coordinado (UTC) como una cadena. |

      Para el valor utcNow, estamos formateando la fecha para que sea mes y día, seguido del año.

       ![Expresión Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.es.png)

      La expresión ahora se agregará a la propiedad `text`.

       ![Expresión Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.es.png)

1. Por último, actualizaremos la URL para la propiedad `url` dentro de la propiedad `actions` array al final del payload JSON. Esta URL de marcador de posición actual será reemplazada con la URL de la fila del currículum en la aplicación basada en modelos **Hiring Hub**. Esto permitirá al reclutador seleccionar la acción `Action.OpenURL` de la tarjeta adaptativa y ser dirigido al currículum en la aplicación basada en modelos.

       ![Eliminar marcador de posición de URL de Ver Currículum](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.es.png)

1. En la aplicación basada en modelos **Hiring Hub**, abre una fila en la vista del sistema **Resumes** usando el menú del lado izquierdo. La fila del currículum se cargará como un formulario en la aplicación basada en modelos.

      Copia la URL de la fila del currículum.

    ??? info "Cómo navegar de regreso a la aplicación basada en modelos **Hiring Hub** en caso de que la hayas salido/cerrado"

        1. Navega a [https://make.powerapps.com](https://make.powerapps.com) y asegúrate de estar en el entorno de desarrollo que estás utilizando para estos ejercicios de laboratorio, de lo contrario cámbialo.
        
        ![Navegar a make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.es.png)

        1. Selecciona **Apps** en el panel del menú del lado izquierdo y para la aplicación basada en modelos **Hiring Hub**, selecciona el ícono **Play** para cargarla en tu navegador.
        
        ![Seleccionar aplicación basada en modelos Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.es.png)

       ![Copiar URL de la fila del currículum](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.es.png)

1. Luego navega de regreso al flujo del agente, resalta el valor actual de la URL de marcador de posición y elimínalo.

       ![Eliminar marcador de posición de URL de fila del currículum](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.es.png)

1. Luego pega la URL copiada en la propiedad **url** dentro de la propiedad `url`.

       ![Pegar la URL copiada de la fila del currículum](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.es.png)

1. Deberías ver lo siguiente. Elimina el valor id `GUID` al final. Reemplazaremos este contenido dinámico - el parámetro **ResumeId**.

       ![Eliminar marcador de posición de URL de Ver Currículum](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.es.png)

1. Selecciona el **ícono de rayo** o **ícono fx** a la derecha.

      En la pestaña **Contenido dinámico**, selecciona el parámetro **ResumeId** y selecciona **Agregar**.

       ![Parámetro ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.es.png)

1. El **ResumeId** se agregará como contenido dinámico. Lo siguiente resaltado en amarillo son los detalles de tu entorno de la aplicación basada en modelos **Hiring Hub**.

     | Parámetro | Valor | Explicación |
     |----------|------------|---------|
     | **Organization URI** | GUID | La URL de la organización del entorno Dataverse/Dynamics 365 |
     | **appid** | GUID | Para abrir una aplicación basada en modelos específica, se utiliza el parámetro de consulta appid o appname. En este caso, se utiliza appid |
     | **id** | GUID | El parámetro de consulta que es el id de la fila del currículum |

       ![Contenido dinámico ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.es.png)

1. Hemos completado la configuración de la acción **Post card in a chat or channel** 👏🏻 Sal del panel de configuración de acciones seleccionando el ícono **x**.

       ![Cerrar panel](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.es.png)

1. Finalmente, configuraremos la última acción, **Respond to the agent**, enviando un texto de vuelta al agente para finalizar el procesamiento.

      En la acción **Respond to the agent**, selecciona **+Agregar una salida**.

       ![Seleccionar Agregar una salida](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.es.png)

1. Selecciona **Texto** como el tipo de salida.

       ![Seleccionar texto como tipo de salida](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.es.png)

1. Ingresa lo siguiente como el nombre de la salida.

       ![Salida de Fin de Conversación](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.es.png)

1. Ingresa lo siguiente como el valor de la salida.

       ```text
       Finished
       ```

       ![Valor de salida de Fin de Conversación](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.es.png)

1. Ahora hemos completado la configuración del flujo del agente. Selecciona **Guardar borrador** para guardar el flujo del agente. Aparecerá un mensaje de confirmación una vez guardado.

       ![Guardar borrador](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.es.png)

1. Antes de publicar el flujo del agente, necesitamos actualizar los detalles del flujo del agente. Selecciona la pestaña **Overview** y selecciona **Editar**.

      En el campo de nombre del flujo, ingresa lo siguiente.

       ```text
       Notify Teams Applicant channel
       ```      

      Luego, selecciona el ícono **Actualizar** para actualizar la descripción del flujo del agente usando IA.

      Luego selecciona **Guardar** para guardar los detalles actualizados del flujo del agente.

       ![Editar y guardar detalles](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.es.png)

1. Navega de regreso a la pestaña **Designer** y selecciona **Publicar** para publicar el flujo del agente. Aparecerá un mensaje de confirmación una vez guardado.

       ![Publicar flujo del agente](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.es.png)

1. Ahora el flujo del agente necesita ser agregado como una herramienta en el **Application Intake Agent**. Navega de regreso al **Hiring Agent** y selecciona la pestaña **Agents**, luego selecciona el **Application Intake Agent**.

       ![Seleccionar Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.es.png)

1. En la sección **Details** del agente, actualizaremos el campo **Description**. Copia lo siguiente y pégalo al final del texto de descripción.

       ```text
       y también notificar al canal de Teams Applicant
       ```

       ![Actualizar descripción del agente](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.es.png)

1. A continuación, agregaremos el flujo del agente como una herramienta. Desplázate hacia abajo y selecciona **+ Agregar**.

       ![Seleccionar Agregar](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.es.png)

1. Selecciona el flujo del agente creado anteriormente, **Notify Teams Applicant Channel**.

       ![Seleccionar flujo del agente](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.es.png)

1. Luego selecciona **Agregar y configurar**.

       ![Seleccionar Agregar y configurar](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.es.png)

1. En la sección **Inputs** del flujo del agente, los tres inputs que configuramos anteriormente en el flujo del agente son visibles. Por defecto, la configuración **Fill using** está configurada como **Rellenar dinámicamente con IA**. Mantendremos esta configuración tal como está, ya que el mensaje del disparador del evento (en la última acción, **Envía un mensaje al copiloto especificado para su procesamiento** - esto es pasos 38-44 de **Lab 3.1 - Automatizar la carga de currículums a Dataverse recibidos por correo electrónico**) contendrá los valores de los parámetros que la IA extraerá.

       ![Inputs del flujo del agente como herramienta](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.es.png)

1. Ahora que la herramienta ha sido agregada al **Application Intake Agent**, las instrucciones del agente necesitan ser actualizadas. Selecciona el ícono de **flecha hacia atrás** para regresar a la lista de agentes.

       ![Seleccionar ícono de flecha hacia atrás](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.es.png)

1. Selecciona el **Application Intake Agent** en la pestaña **Agents** del **Hiring Agent**.

       ![Seleccionar Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.es.png)

1. En el campo **Instructions**, ingresa una nueva línea después de las instrucciones `2.Post-Upload`. Copia y pega las siguientes instrucciones.

       ```text
       Proceso para la carga de currículums vía correo electrónico
       1. Cuando recibas un mensaje, **Envía [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" y [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" y [ResumeNumber (text_2)]= "R01026" a la herramienta "Notify Teams Applicant channel"** en el agente secundario "Application Intake Agent", llama [AGENT FLOW PLACEHOLDER]
       ```

       ![Actualizar instrucciones de Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.es.png)

1. Resalta el texto `[AGENT FLOW PLACEHOLDER]`.

       ![Resaltar marcador de posición](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.es.png)

1. Ingresa el carácter de barra diagonal, `/`, y selecciona la herramienta **Notify Teams Applicant Channel**.

       ![Seleccionar herramienta Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.es.png)
1. El flujo del agente ahora será invocado por el **Application Intake Agent** según las instrucciones, después de la última acción (**Envía un mensaje al copiloto especificado para su procesamiento**) en el disparador del evento que envía el mensaje con los valores de los parámetros de vuelta al agente.

      Selecciona **Guardar** para guardar las instrucciones actualizadas para el **Application Intake Agent**.

       ![Seleccionar Guardar](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.es.png)

1. Las instrucciones ahora se actualizarán una vez que el agente haya sido guardado.

       ![Instrucciones actualizadas](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.es.png)

1. Ahora necesitamos **Publicar** el **Hiring Agent**. Selecciona **Publicar** en la esquina superior derecha, y en el modal _Publicar este agente_ que aparece, selecciona **Publicar**.

       ![Publicar Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.es.png)

1. Una vez publicado, aparecerá un mensaje de confirmación indicando que el agente ha sido publicado.

       ![Mensaje de confirmación](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.es.png)

¡Ahora podemos probar el agente!

### Laboratorio 3.3 - Probar el disparador de eventos

1. Para ejecutar el disparador de eventos, se debe enviar un correo electrónico con un archivo PDF de currículum adjunto. En Outlook, redacta un nuevo mensaje de correo electrónico.

     | Componente del correo | Detalles |
     |----------|------------|
     | **Destinatario** | Usa tu cuenta de usuario iniciada como valor |
     | **Archivo adjunto** | Sube el archivo [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Cuerpo** | Copia y pega el siguiente texto como cuerpo del correo  |

       ```text
       Estimado/a Responsable de Contratación,

       Me dirijo a usted para expresar mi interés en el puesto de Ingeniero Senior de Power Platform en su organización. Con más de nueve años de experiencia entregando soluciones seguras y escalables en plataformas de nube de Microsoft, estoy seguro de que puedo contribuir eficazmente a su equipo.

       En mi rol más reciente como Ingeniero Líder de Power Platform, desarrollé una canalización automatizada para la recepción de currículums, reduciendo la clasificación manual y mejorando la capacidad de búsqueda. He entregado aplicaciones de gestión de casos de RRHH, introducido flujos conscientes de soluciones y implementado verificaciones de PR para mejorar los tiempos de despliegue. Mi experiencia incluye Power Apps, Power Automate, Power Pages, Dataverse y una gama de servicios de Microsoft 365, así como integración con Graph/REST APIs y Azure Functions.

       Anteriormente, desarrollé aprobaciones en Teams con tarjetas adaptativas, reduciendo los tiempos de aprobación al mismo día, y creé marcos robustos de manejo de errores. Mi experiencia también incluye la migración de flujos de trabajo heredados a Power Automate y la construcción de portales de autoservicio adoptados por cientos de empleados.

       Poseo un B.Sc. en Ciencias de la Computación y estoy certificado como Desarrollador de Power Platform (PL-400) y Arquitecto de Soluciones (PL-600). También soy apasionado por la mentoría y he sido voluntario en grupos locales de creadores.

       Por favor, encuentre adjunto mi CV para su consideración. Estaría encantado de tener la oportunidad de discutir cómo mis habilidades y experiencia se alinean con sus necesidades.

       Gracias por su tiempo y consideración.

       Atentamente,  
       Taylor Testperson
       ```

       **Envía** el correo una vez redactado.

       ![Redactar correo con archivo PDF adjunto](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.es.png)

1. En el portal de creación de Power Automate para el flujo del disparador de eventos, selecciona el icono de **Actualizar** para ver la ejecución del flujo que tuvo éxito para el correo enviado.

       ![Seleccionar icono de actualizar para ver ejecución del flujo](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.es.png)

1. Regresa a Copilot Studio en el **Hiring Agent** y selecciona la pestaña **Actividad**.

       ![Seleccionar pestaña Actividad](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.es.png)

1. La pestaña **Actividad** se cargará y mostrará todas las actividades del **Hiring Agent**. Habrá una actividad con el nombre **Automated** que tiene un estado de **Complete**. Esta actividad representa el disparador de eventos y el flujo del agente que fue invocado.

       ![Actividad completada](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.es.png)

1. Selecciona la actividad y selecciona el disparador de eventos en el mapa de actividad. En el panel lateral derecho, observa cómo los parámetros de entrada en el mensaje contienen los valores de los parámetros `Resume Id`, `Resume Title` y `Resume Number` de la fila de **Dataverse** que fue creada. Esto proviene de los valores de contenido dinámico configurados anteriormente en los pasos 18 - 27 de **Laboratorio 3.1 - Automatizar la carga de currículums a Dataverse recibidos por correo electrónico**.

       ![Disparador de eventos](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.es.png)

1. Navega de vuelta a la aplicación de modelo **Hiring Hub** y en la vista del sistema de **Resumes**, selecciona **Actualizar** para refrescar la vista. La fila recién creada para el currículum enviado por correo ahora estará listada, ya que fue creada a través del disparador de eventos.

       ![Fila de currículum creada](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.es.png)

1. Regresa a Copilot Studio y selecciona el flujo del agente **Notify Teams Applicant Channel** dentro del **Application Intake Agent** en el mapa de actividad. En el panel lateral derecho, observa cómo las entradas tienen valores de la fila de Dataverse. Esto proviene del mensaje enviado por la última acción (**Envía un mensaje al copiloto especificado para su procesamiento**) en el disparador de eventos que contiene los valores de los parámetros de la fila recién creada en Dataverse. Así es como podemos pasar valores de parámetros de disparadores de eventos a flujos de agentes.

       ![Seleccionar flujo del agente](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.es.png)

1. Finalmente, echemos un vistazo a la tarjeta adaptativa publicada en el canal de **Microsoft Teams**. En el canal, veremos la tarjeta adaptativa que muestra la información sobre la fila de currículum recién creada en Dataverse. Pasa el cursor sobre el hipervínculo al inicio de la tarjeta adaptativa, observa cómo la URL es la URL de la vista del sistema de Resumes que configuramos anteriormente en el JSON (pasos 15 - 19 de **Laboratorio 3.2 - Notificar a un canal de Teams usando una tarjeta adaptativa**) del payload de la tarjeta adaptativa.

       ![URL de la vista del sistema de la tabla de currículums en la tarjeta adaptativa](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.es.png)

1. Selecciona el hipervínculo y serás dirigido a la vista del sistema de Resumes en la aplicación de modelo **Hiring Hub** en tu navegador.

       ![Vista del sistema de currículums en la aplicación de modelo Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.es.png)

1. Regresa a la tarjeta adaptativa publicada en el canal de Microsoft Teams. Esta vez, pasa el cursor sobre **Ver Currículum**, que es la acción `Action.OpenURL` de la tarjeta adaptativa. Observa cómo la URL es la fila de currículum que configuramos anteriormente en el JSON (pasos 30 - 36 de **Laboratorio 3.2 - Notificar a un canal de Teams usando una tarjeta adaptativa**) del payload de la tarjeta adaptativa.

       ![URL de la fila de currículum en la tarjeta adaptativa](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.es.png)

1. Selecciona la acción y serás dirigido al formulario de la fila de currículum en la aplicación de modelo **Hiring Hub** en tu navegador.

       ![Fila de currículum en la aplicación de modelo Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.es.png)

## ✅ Misión Completa

¡Felicidades! 👏🏻 Excelente trabajo, Operativo.

✅ Disparador de eventos: has creado un disparador de eventos que pasa valores de parámetros de Dataverse a un flujo de agente.  
✅ Construiste un flujo de agente: consume los valores de parámetros de Dataverse para publicar una tarjeta adaptativa en un canal de Microsoft Teams y alertar al equipo de reclutamiento de RRHH.  
✅ Actualizaste las instrucciones del agente secundario: para invocar el flujo una vez que el disparador de eventos haya completado.

Esto permite que el **Hiring Agent** trabaje de manera autónoma cada vez que se reciban currículums como archivos adjuntos de correo electrónico y notifique al equipo de reclutamiento de RRHH para su revisión manual.

Este es el final de **Laboratorio 03 - Automatización de correos electrónicos de aplicaciones de candidatos**, selecciona el enlace a continuación para pasar a la siguiente lección.

⏭️ [Ir a la lección **Instrucciones de creación de agentes**](../04-agent-instructions/README.md)

## 📚 Recursos Tácticos

📖 [Haz que tu agente sea autónomo en Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)  

📖 [Agregar un disparador de eventos](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)  

📖 [Usar flujos de agentes con tu agente](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)  

📖 [Introducción a los disparadores de Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)  

📖 [Usar flujos de Power Automate con agentes](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)  

📖 [Prevención de pérdida de datos para Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)  

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por garantizar la precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.