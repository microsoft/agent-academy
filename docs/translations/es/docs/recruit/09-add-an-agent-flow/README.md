<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "cc4afa4a5a11c9d03896decfbcbd4060",
  "translation_date": "2025-10-17T19:00:44+00:00",
  "source_file": "docs/recruit/09-add-an-agent-flow/README.md",
  "language_code": "es"
}
-->
# 🚨 Misión 09: Agrega un flujo de agente a tu Tema para automatización

## 🕵️‍♂️ NOMBRE EN CLAVE: `OPERACIÓN POTENCIA AUTOMÁTICA`

> **⏱️ Ventana de Tiempo de la Operación:** `~30 minutos`  

🎥 **Mira el Tutorial**

[![Miniatura del video de flujo de agente](../../../../../translated_images/video-thumbnail.ede12df9aaebcc8996680c8b6555d309b53bdf33d1b0165cae3b5173a6bcdd73.es.jpg)](https://www.youtube.com/watch?v=vtLZJT3eBXg "Mira el tutorial en YouTube")

## 🎯 Resumen de la Misión

Tu agente ahora puede conversar con los usuarios y proporcionar información, pero la verdadera excelencia operativa requiere que tu agente tome acción. Esta misión transformará tu agente conversacional en una potencia de automatización al equiparlo con flujos de agente.

Al final de la misión, habrás creado una automatización completa de solicitud de dispositivos que captura la entrada del usuario a través de una tarjeta adaptativa, recupera datos de SharePoint, envía notificaciones a los gerentes por correo electrónico y proporciona retroalimentación fluida al usuario, todo orquestado por tu agente mediante una automatización inteligente de flujo de trabajo.

## 🔎 Objetivos

En esta misión, aprenderás:

1. Entender qué son los flujos de agente y cómo se diferencian de los flujos en la nube de Power Automate para automatización.
1. Aprender las características clave que hacen que los flujos de agente sean poderosos, incluyendo acciones de IA y creación de lenguaje natural.
1. Explorar el diseñador de flujos de agente y cómo usar expresiones para manejar datos dinámicos.
1. Crear una automatización completa de solicitud de dispositivos que integre datos de SharePoint y notificaciones por correo electrónico.

## 🤔 ¿Qué es un flujo de agente?

Los flujos de agente son una forma poderosa de automatizar tareas repetitivas e integrar tus aplicaciones y servicios. Piensa en ellos como flujos de trabajo estructurados, paso a paso, que tu agente puede ejecutar para automatizar tareas o conectarse con otras aplicaciones y servicios. Puedes considerarlos como mini flujos que ayudan a tu agente a hacer cosas como enviar notificaciones, actualizar registros o responder a eventos.

A diferencia de los agentes autónomos que usan IA para tomar decisiones en tiempo real, los flujos de agente son **flujos de trabajo deterministas** - lo que significa que siguen el mismo camino cada vez, asegurando resultados consistentes y confiables.

En términos simples:

- Ayudan a tu agente a _hacer cosas_, no solo a _decir cosas_ a los usuarios.
- Son reutilizables en temas y agentes, y pueden ser activados por mensajes de usuario, eventos u otras aplicaciones y servicios.

## 🙋🏽 Sí, pero ¿cómo se diferencian de los flujos en la nube de Power Automate?

Tanto los flujos de agente como los flujos en la nube de Power Automate ayudan a automatizar tareas. Están diseñados para propósitos diferentes y funcionan de maneras distintas.

### 🤖 Flujos de agente en Copilot Studio

**Para qué sirven:**

- Diseñados para agentes conversacionales y autónomos (mediante instrucciones de agente) en Copilot Studio.
- Enfocados en automatización inteligente impulsada por IA que interactúa con sistemas empresariales.

**Por qué son útiles:**

- Fáciles de construir y gestionar directamente en Copilot Studio.
- Ideales para automatizar tareas que ocurren _durante la conversación_ con los usuarios, como enviar una solicitud de permiso.
- No necesitas una licencia separada de Power Automate, ya que la facturación se basa en el uso dentro de Copilot Studio. Esto puede ahorrar tiempo y costos para equipos empresariales.

**Limitaciones:**

- No puedes compartirlos, copiarlos ni asignar co-propietarios.
- Los flujos de agente solo son visibles y utilizables dentro de Copilot Studio.
- Actualmente, los disparadores de eventos para agentes pueden ser editados en el portal de creación de Power Automate.

### ☁️ Flujos en la nube de Power Automate

**Para qué sirven:**

- Diseñados para automatización de propósito general en muchas aplicaciones y servicios.
- Pueden funcionar de manera independiente o junto con flujos de agente.

**Por qué son útiles:**

- Ofrecen una amplia gama de conectores.
- Ideales para automatizar procesos fuera de los agentes.
- Pueden ser compartidos, reutilizados y gestionados entre equipos.

**Requisitos:**

- Necesitas una licencia de Power Automate para utilizarlos.

### 📗 Resumen

| Usa esto | Cuando quieras |
| :- | :- |
| Flujos de agente | Automatizar tareas dentro de un agente, usar IA y mantener todo en Copilot Studio |  
| Flujos en la nube de Power Automate | Automatizar entre aplicaciones y servicios, o construir flujos fuera de los agentes |

## 👍🏻 Por qué usar flujos de agente

Los flujos de agente siempre siguen un camino fijo: hacen lo mismo cada vez que reciben la misma entrada.

Esto los hace:

- **Confiables** - puedes confiar en que se comportarán de la misma manera cada vez.
- **Predecibles** - sabes qué resultado esperar cuando el flujo se ejecuta.
- **Basados en reglas** - siguen pasos que tú defines.

Otros beneficios son:

- **Automatización** - permite que tu agente maneje tareas repetitivas como enviar formularios o notificaciones.
- **Conectados** - se integran con más de 1400 conectores como ServiceNow, SharePoint, Salesforce. También puedes construir tu propio conector personalizado.
- **Altamente integrados** - los flujos de agente son parte de la lógica del agente, se activan directamente por mensajes de usuario o acciones en la conversación.
- **Escalabilidad** - reutiliza flujos en múltiples agentes o escenarios.
- **Sin código o con poco código** - puedes construir flujos usando lenguaje natural o un diseñador visual.
- **Plataforma todo-en-uno** - puedes diseñar, probar y desplegar flujos de agente en un solo lugar - Copilot Studio. No necesitas cambiar entre plataformas.

## 🏄🏻‍♂️ ¿Cómo mejoran los flujos de agente a tu agente?

Los flujos de agente amplían lo que tu agente puede hacer más allá de "chatear" con los usuarios. Le permiten tomar acción e interactuar con sistemas.

Supongamos que trabajas en un departamento de finanzas y recibes muchas facturas de proveedores. Normalmente, alguien tiene que leer cada factura, extraer los detalles importantes - el monto, la fecha, quién la envió, y verificar si todo coincide con tus registros. Luego enviarla a la persona adecuada para su aprobación. Esto lleva tiempo y esfuerzo.

Con los flujos de agente en Copilot Studio, puedes automatizar este proceso. Tan pronto como llega la factura, el agente:

1. Lee el documento usando procesamiento inteligente de documentos para encontrar la información clave.
1. Verifica los detalles contra tus datos empresariales para asegurarse de que todo esté correcto.
1. La envía para aprobación a la persona adecuada.

Esto ahorra tiempo, reduce errores y hace que todo el proceso sea mucho más fluido.

### Piensa en ello de esta manera

- **Agentes**: los tomadores de decisiones inteligentes.
- **Flujos de agente**: los ejecutores confiables.

### Por qué importa

- Obtienes lo mejor de ambos mundos: automatización confiable e IA flexible.
- Es fácil construir y actualizar flujos a medida que cambian las necesidades de tu negocio.
- Puedes escalar la automatización entre equipos.

## 🔌 Características clave que hacen que los flujos de agente sean poderosos

1. **Creación de lenguaje natural**
    - Puedes describir lo que quieres que haga el flujo en inglés sencillo.
    - Copilot entiende tu intención y construye el flujo por ti.
    - No necesitas escribir código - solo explica tu idea.

1. **Acciones de IA**

    Usa IA para:

    - Leer y entender documentos o imágenes.
    - Resumir contenido largo en respuestas cortas y útiles.
    - Hacer recomendaciones o decisiones inteligentes.

1. **Acciones generativas**
    - Permiten que el flujo se adapte en tiempo real.
    - El agente puede planificar y ajustar pasos según la información cambiante.

1. **Acciones de integración**
    - Conecta tu flujo con otras herramientas como Outlook, Microsoft Teams, ServiceNow, SharePoint y otras aplicaciones y servicios, a través de más de 1400 conectores integrados o tu propio conector personalizado.
    - Esto ayuda a tu agente a trabajar con las aplicaciones que tu equipo ya utiliza.

1. **Intervención humana**
    - Agrega pasos de aprobación donde una persona necesita revisar o confirmar algo.
    - [Aprobaciones avanzadas](https://learn.microsoft.com/microsoft-copilot-studio/flows-advanced-approvals?WT.mc_id=power-172621-ebenitez) soporta recordatorios, delegación y aprobaciones en múltiples etapas.

## ⚙️ Cómo funcionan

1. **Disparador**

    Un evento inicia el flujo - como un usuario haciendo una pregunta, invocando el flujo desde un tema, un horario programado, o un evento que ocurre en otro sistema.

1. **Acciones**

    Estos son los pasos que el agente sigue a continuación - enviar un correo electrónico, llamar a una API, actualizar un ticket en ServiceNow.

## 🧶 Cómo crear un flujo de agente

1. **Lenguaje natural**: describe lo que quieres que haga el agente, y Copilot lo construye por ti.
1. **Lienzo del diseñador**: arrastra y suelta acciones, condiciones y bucles en el diseñador de flujos de agente para construir tu flujo de agente.

## 🎨 ¿Qué es el diseñador de flujos de agente?

Es una herramienta visual en Copilot Studio que te ayuda a construir, editar y gestionar flujos de agente que proporcionan instrucciones paso a paso que tu agente sigue para completar tareas. Está diseñado para ser fácil de usar, incluso si eres nuevo en los flujos de agente.

### Características clave del diseñador de flujos de agente

1. **Lienzo visual**
    - Puedes ver todo tu flujo dispuesto como un diagrama.
    - Fácilmente haz zoom, ajusta la vista o usa un minimapa para navegar por flujos grandes.

1. **Agregar y eliminar acciones**
    - Haz clic en el botón _más (+)_ para agregar una nueva acción como enviar un mensaje o actualizar un elemento en una lista de SharePoint.
    - Puedes buscar acciones de conectores y configurarlas a través de sus ajustes.
    - Para eliminar una acción, haz clic en los _tres puntos (⋮)_ y selecciona _Eliminar_.

1. **Verificar parámetros**
    - Haz clic en cualquier acción para ver o editar sus ajustes llamados _parámetros_.
    - Puedes ingresar valores manualmente o usar _expresiones_ para hacerlos dinámicos.

1. **Historial de versiones**
    - Cada vez que guardas tu flujo, se registra una versión.
    - Puedes regresar y ver o restaurar versiones anteriores si es necesario.

1. **Verificación de errores**
    - El _Verificador de Flujos_ resalta cualquier error.
    - Todos los errores deben resolverse antes de publicar tu flujo.

1. **Publicar y probar**
    - Una vez que tu flujo esté libre de errores, publícalo para hacerlo activo.
    - Usa la función _Probar_ para ejecutar tu flujo manual o automáticamente, y verifica si funciona como se espera.

### Por qué usar el diseñador de flujos de agente

- **Visual e intuitivo** - puedes construir flujos arrastrando y haciendo clic.
- **Seguro para experimentar** - el historial de versiones te permite deshacer cambios.
- **Pruebas integradas** - te ayuda a asegurarte de que todo funcione antes de activarlo.

## 🔤 Mencionaste _expresiones_ - ¿qué son las expresiones?

Las expresiones son pequeñas fórmulas o comandos que ayudan a tu flujo de agente a trabajar con datos. Las usas para calcular valores, dar formato a texto, tomar decisiones o extraer información específica de las entradas.

### Por qué usar expresiones

Las expresiones te permiten:

- **Personalizar cómo se manejan los datos** - combinar nombres, dar formato a fechas.
- **Tomar decisiones** - si un valor es mayor que 10, hacer algo.
- **Transformar datos** - cambiar texto a minúsculas, extraer parte de una cadena.
- **Automatizar lógica** - sin escribir código completo.

### ¿Cómo se ven las expresiones?

Las expresiones usan funciones. Voy a tomar prestada una explicación de lo que son las funciones del ex-MVP de Microsoft, Jerry Weinstock.

!!! quote
    Las funciones son lógica incorporada para transformar tus datos ya sea mediante operaciones simples o complejas en tu expresión.

Las funciones te permiten construir expresiones sin necesidad de escribir código.

La forma en que me gusta describirlo es que una función en los flujos de agente es similar a las funciones de Excel. Puedes realizar una operación en los datos para transformarlos en un resultado deseado. Al construir tu fórmula en Excel seleccionas tu valor de entrada desde las celdas en una tabla o un rango, y luego aplicas funciones para manipular la salida de datos. Un ejemplo es usar la función `COUNT` para calcular el número de celdas que contienen números de un rango.

En los flujos de agente, en lugar de referenciar datos desde celdas en una tabla, estás referenciando salidas de datos desde el disparador o acciones al construir tus expresiones. Continuando con el ejemplo anterior, usa la función `length` para obtener el número de elementos devueltos desde la acción del conector _Obtener elementos_ de SharePoint.

### Por qué importan las funciones

Usar funciones hace que tus flujos de agente sean:

- **Más inteligentes** - pueden reaccionar a diferentes entradas o condiciones.
- **Flexibles** - puedes personalizar cómo se manejan los datos.
- **Eficientes** - evitas pasos manuales al automatizar lógica.

### Funciones más útiles

Las siguientes son funciones comunes usadas en los flujos de agente. Para la lista completa de funciones, dirígete a la [guía de referencia](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez).

#### 🔡 Texto

- `concat()` - Une dos o más fragmentos de texto.
      - Ejemplo: `concat('Hola ', firstName)` → “Hola Juan”

- `toLower()` / `toUpper()` - Cambia texto a minúsculas o mayúsculas.
      - Útil para estandarizar entradas.

- `substring()` - Extrae parte de una cadena.
      - Ejemplo: Obtén las primeras 3 letras de un nombre.

- `trim()` - Elimina espacios al principio y al final del texto.

#### 🔢 Matemáticas y números

- `add()`, `sub()`, `mul()`, `div()` - Operaciones matemáticas básicas.
      - Ejemplo: `add(5, 3)` - el resultado es 8

#### 📅 Fecha y hora

- `utcNow()` - Obtiene la fecha y hora actual en UTC.
      - Ideal para marcas de tiempo.

- `addDays()`, `addHours()` - Agrega tiempo a una fecha.
- Ejemplo: `addDays(utcNow(), 7)` genera una fecha 7 días a partir de ahora.

- `formatDateTime()` - Formatea una fecha en una cadena legible.
      - Ejemplo: Lunes, 7 de julio de 2025

#### ✅ Lógica

- `if()` - Ejecuta un valor si es verdadero, otro si es falso.
      - Ejemplo: `if(score > 50, 'Aprobado', 'Reprobado')`

- `equals()` - Verifica si dos valores son iguales.

- `and()`, `or()`, `not()` - Combina múltiples condiciones.

#### 🪣 Otras funciones útiles

- `coalesce()` - Devuelve el primer valor no vacío.
      - Útil para valores predeterminados o de respaldo.

- `guid()` - Genera un ID único.
      - Útil para seguimiento o registro.

- `length()` - Cuenta cuántos caracteres o elementos hay en una cadena o arreglo.

## ⭐ Mejores prácticas

Aquí tienes algunas mejores prácticas para construir flujos de agentes en Copilot Studio.

1. **Comienza simple y construye gradualmente**

    - Empieza con una tarea pequeña y clara, como enviar un mensaje.
    - Agrega más pasos después de probar lo básico de tu automatización.

1. **Usa nombres de acciones claros y descriptivos**

    - Etiqueta cada paso claramente para que tú y tu equipo entiendan lo que hace.
    - Ejemplo: en lugar del nombre predeterminado "Actualizar elemento" para la acción del conector de SharePoint, renómbralo según lo que está actualizando, como "Actualizar estado del dispositivo".

1. **Verifica errores antes de publicar**

    - Usa el **verificador de flujo** para encontrar y corregir problemas.
    - No puedes publicar flujos si hay errores, así que intenta resolverlos cuando ocurran.

1. **Prueba tu flujo exhaustivamente**

    - Solo porque se guarde y publique no significa que funcione como se espera.
    - Usa la función _Probar_ para ejecutar tu flujo manual o automáticamente y verifica los resultados.

1. **Usa el Historial de Versiones**

    - Guarda tu flujo con frecuencia para poder regresar a versiones anteriores si es necesario.
    - Puedes ver y restaurar versiones previas usando el panel de _Historial de Versiones_.

1. **Usa parámetros y expresiones sabiamente**

    - Al configurar acciones, usa parámetros para hacer tu flujo dinámico.
    - Puedes ingresar valores manualmente o usar expresiones para calcularlos, o combinarlos con valores de acciones anteriores usando el selector de _contenido dinámico_.

1. **Elimina acciones no utilizadas**

    - Si agregas una acción y luego decides que no la necesitas, elimínala para mantener tu flujo limpio.

## 🧪 Laboratorio 09 - Agregar un flujo de agente para automatización y mejorar las capacidades del tema

Ahora aprenderemos cómo mejorar nuestro tema con tarjetas adaptativas y utilizando funcionalidades avanzadas de temas y nodos.

- [9.1 Crear un flujo de agente](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.2 Agregar flujo de agente al tema](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.3 Actualizar el tema Solicitar dispositivo con varios nodos para una mejor experiencia de usuario](../../../../../docs/recruit/09-add-an-agent-flow)
- [9.4 Probar el agente usando varios escenarios](../../../../../docs/recruit/09-add-an-agent-flow)

### ✨ Caso de uso

**Como** gerente de un empleado

**Quiero** recibir solicitudes de dispositivos

**Para que** pueda revisar el dispositivo solicitado por el empleado.

¡Comencemos!

### Requisitos previos

1. **Lista de SharePoint**

    Usaremos la lista de **Dispositivos** de SharePoint creada en [Lección 00 - Configuración del curso - Paso 3: Crear un nuevo sitio de SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    Si no has configurado la lista de **Dispositivos** de SharePoint, regresa a [Lección 00 - Configuración del curso - Paso 3: Crear un nuevo sitio de SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

1. **Agente de soporte técnico de Contoso**

    Usaremos el mismo agente creado previamente en [Lección 06 - Crear un agente personalizado usando lenguaje natural con Copilot y conectándolo con tus datos](../06-create-agent-from-conversation/README.md).

### 9.1 Crear un flujo de agente

En este ejercicio, crearemos un flujo de agente que recupere el elemento de SharePoint del dispositivo seleccionado y envíe un correo electrónico a un gerente con los detalles del dispositivo.

1. En el tema **Solicitar dispositivo**, desplázate hacia abajo hasta el nodo **Preguntar con tarjeta adaptativa** y agrega un nuevo nodo. Selecciona **Agregar una herramienta** y en la pestaña **Herramientas básicas** del panel emergente, selecciona **Nuevo flujo de agente**.

    ![Agregar nuevo flujo de agente](../../../../../translated_images/9.1_01_AddNewAgentFlow.2b9078604a054d1f022f9c73adaf10fe430e81875ec8717a7f70ef7b05f11c15.es.png)

1. El **Diseñador de flujos de agente** se cargará con un disparador y una acción.

    - **Disparador** - Cuando un agente llama al flujo
        - Esto activará un flujo desde un agente de Copilot Studio.

    - **Acción** - Responder al agente
        - Esto envía una respuesta que puede contener valores de salida de vuelta al agente de Copilot Studio.

    Selecciona el disparador.

    ![Seleccionar el disparador](../../../../../translated_images/9.1_02_SelectTrigger.92dc20442add764c8aa4b7f737f28416a3223e4471562462ed6dcba2dc7c7936.es.png)

1. A continuación, agregaremos varios insumos para el flujo de agente.

    - `DeviceSharePointId` - esto almacenará el valor, ID, del elemento de SharePoint. Este valor de ID es una salida del nodo Preguntar con tarjeta adaptativa donde el usuario seleccionó el dispositivo.

    - `User` - este será el nombre del usuario que provendrá de una variable del sistema del agente.

    - `AdditionalComments` - este será el comentario ingresado por el usuario, que es una salida del nodo Preguntar con tarjeta adaptativa.

    Primero agregaremos el `DeviceSharePointId` como un insumo para nuestro disparador. Selecciona **+ Agregar un insumo**.

    ![Agregar un insumo](../../../../../translated_images/9.1_03_AddInput.fd1e0a99ecb5e20f3a518cb23fc0d22c6db1435c5ffb2e183fce3b8a056287bb.es.png)

1. Para el tipo de insumo del usuario, selecciona **Texto**.

    ![Seleccionar Texto](../../../../../translated_images/9.1_04_SelectText.47ca776822ec5a6c1339c012d51e0eb6eac6bf8315d4ac6f25498b10ada16df9.es.png)

1. Para el nombre del insumo, ingresa lo siguiente.

    ```text
    DeviceSharePointId
    ```

    ![Insumo DeviceSharePointId](../../../../../translated_images/9.1_05_DeviceSharePointIdInput.caf77f8eb60a1b8649ea8b0abf05dfce9fa4bef9d9c465cd8906395e5b44842e.es.png)

1. Ahora agregaremos el segundo insumo, `User`. Repite los mismos pasos, selecciona **+ Agregar un insumo** y selecciona **Texto**.

    ![Agregar un insumo](../../../../../translated_images/9.1_06_AddInput.3ca4bff9991b6e8a331bd909ff58038387696ce7b6ee7a932a88316aff41bc57.es.png)

1. Para el nombre del insumo, ingresa lo siguiente.

    ```text
    User
    ```

    ![Insumo User](../../../../../translated_images/9.1_07_UserInput.16b2405f2d5744ea14a6a67b69539ba24719aaf642ddfc2b281e784d74d8c1ea.es.png)

1. Ahora agregaremos el tercer insumo, `AdditionalComments`. Repite los mismos pasos, selecciona **+ Agregar un insumo** y selecciona **Texto**.

    ![Agregar un insumo](../../../../../translated_images/9.1_08_AddInput.4685bb77618e6d9cfca7a42a0945d10f59825b1ca42de372dcf07c9170451680.es.png)

1. Para el nombre del insumo, ingresa lo siguiente.

    ```text
    AdditionalComments
    ```

    ![Insumo AdditionalComments](../../../../../translated_images/9.1_09_AdditionalComments.a4587b59b85450ca0566615c9473132dd6447e6c7513e4926942655aa0e80195.es.png)

1. Para el insumo `AdditionalComments`, lo actualizaremos para hacerlo opcional. Selecciona el **icono de elipsis (...)** y selecciona **Hacer que el campo sea opcional**.

    ![Hacer que el campo sea opcional](../../../../../translated_images/9.1_10_Optional.753bd03817c2eb37bb44a7bfd7d29314aa7109cde02e3f619c01c42bc9170b71.es.png)

1. ¡Buen trabajo! El disparador ahora está configurado, continuemos. Selecciona el **icono más +** debajo del disparador para insertar una nueva acción.

    ![Agregar acción](../../../../../translated_images/9.1_11_AddAction.86c14acd1ce22e99b7244e0001f0039362ff6ac3efafe03956788aaa31e705af.es.png)

1. Aparecerá el **Panel de acciones** donde puedes ver acciones de más de 1400 conectores integrados a servicios de Microsoft y terceros. En el **campo de búsqueda** ingresa lo siguiente,

    ```text
    Get item
    ```

    Se mostrará una lista de acciones en los resultados de búsqueda. Selecciona la acción **Obtener elemento** del conector **SharePoint**.

    ![Acción Obtener elemento](../../../../../translated_images/9.1_12_AddGetItemAction.434cdcb822e1f72993fc4a0c0ad753e1220456f9dab8fc307d42f5711071d45b.es.png)

1. Ahora podemos comenzar a configurar la acción **Obtener elemento**.

    Selecciona el **icono de elipsis (...)** en la acción **Obtener elemento**.

    ![Seleccionar elipsis](../../../../../translated_images/9.1_13_SelectEllipsis.88bf304067f3103825f183f8962634af831460541290533e5670f4c014a97c46.es.png)

1. Selecciona **Renombrar**.

    ![Seleccionar Renombrar](../../../../../translated_images/9.1_14_SelectRename.74d99c883418b7dbf58758304976cac1d0f2afd30e4cd1992830f00775a46b18.es.png)

1. Renombra la acción como,

    ```text
    Get Device
    ```

    ![Renombrar acción](../../../../../translated_images/9.1_15_RenameAction.ff64b79f6e6603ae89f272f91d84ff4432c04ba103c401a2808a767e3ceb5617.es.png)

1. En el campo **Dirección del sitio**, selecciona la **Dirección del sitio** del sitio de SharePoint Contoso IT creado en [Lección 00 - Configuración del curso - Paso 3: Crear un nuevo sitio de SharePoint](../00-course-setup/README.md#step-4-create-new-sharepoint-site).

    En el campo **Nombre de la lista**, selecciona la lista de SharePoint **Dispositivos**.

    ![Parámetros de entrada](../../../../../translated_images/9.1_16_SharePointSiteAndListParameters.af6e0b112eb4bfb210f9259da02b459097a06307afa6ca269cb33aa9ecc1c1e4.es.png)

1. En el campo **Id**, selecciona el **icono de rayo** o **icono fx** a la derecha.

    ![Selector de contenido dinámico](../../../../../translated_images/9.1_17_InsertExpressionIcon.6e250bb84e7b8884de7b2052005f7ff3cd95f2c28671d2da7965001b3f621902.es.png)

1. En la pestaña **Contenido dinámico** del panel emergente, ingresa lo siguiente,

    ```text
    sharepoint
    ```

    Los resultados de búsqueda mostrarán los parámetros de entrada que coinciden con el valor buscado. Selecciona el parámetro **DeviceSharePointId** del disparador.

    Luego, selecciona **Agregar** para agregar el insumo de contenido dinámico en el parámetro **Id** de la acción.

    ![Seleccionar insumo DeviceSharePointId](../../../../../translated_images/9.1_18_DeviceSharePointId.b9be8e7c3c6b0ab710a8f662e62a0ec0133a530f6877b6cea3c48acc8022fec5.es.png)

1. El insumo de contenido dinámico del disparador ahora está referenciado en el parámetro **Id** de la acción. Vamos a actualizar uno de los parámetros avanzados a continuación. Selecciona **Mostrar todo** para ver los parámetros avanzados.

    ![Ver parámetros avanzados](../../../../../translated_images/9.1_19_AdvancedParameters.4bb8e0c11e7864625ad6c30ab1b9021d367cd77374c56985df7b3d43845a1883.es.png)

1. El parámetro **Limitar columnas por vista** se mostrará y, por defecto, está configurado en **Usar todas las columnas (No limitar)**. Actualizaremos este valor a una vista para limitar las columnas devueltas en la respuesta de la acción. Selecciona el parámetro **Limitar columnas por vista** para ver la lista de vistas.

    ![Seleccionar parámetro](../../../../../translated_images/9.1_20_LimitColumnsByView.4d30f532f1e1033323d39df5c9b8e803788ea785ed58de2efca2faa5df4b26fc.es.png)

1. Selecciona la vista **Todos los elementos**.

    ![Seleccionar vista Todos los elementos](../../../../../translated_images/9.1_21_SelectView.d180e83d5e62f5fb6994a7071d5e6ce8f88143d8cc833cb55b208c6fee41bc02.es.png)

1. Selecciona el **icono más +** debajo de la acción _Obtener dispositivo_ para insertar una nueva acción.

    ![Agregar nueva acción](../../../../../translated_images/9.1_22_AddAnAction.904b79142347fe927168036ade55d842fa088deef53710944272c681421e0e84.es.png)

1. En el campo de búsqueda ingresa lo siguiente,

    ```text
    send an email
    ```

    Se mostrará una lista de acciones en los resultados de búsqueda. Selecciona la acción **Enviar un correo electrónico (V2)** del conector **Office 365 Outlook**.

    ![Acción Enviar un correo electrónico](../../../../../translated_images/9.1_23_SendAnEmail.f1019365131658b0e71b5b58b57d7d8b3f3a0c670ddb3cca0838bf0b4f8cd354.es.png)

1. A continuación, necesitamos crear una conexión para la acción del conector. Selecciona **Iniciar sesión**.

    ![Crear conexión](../../../../../translated_images/9.1_24_CreateConnection.9e968ad4de9d13d81e95779c4fa60809fd40de5f65dbd014f1dc39663c935806.es.png)

1. Selecciona tu cuenta de usuario iniciada.

    ![Seleccionar cuenta de usuario](../../../../../translated_images/9.1_25_SelectUserAccount.f3c96ac1a377c4b42a6301ba38c21469eb7bd3f48633f04200f1610902f8bdbe.es.png)

1. Selecciona **Permitir acceso**. Ahora se ha creado una conexión.

    ![Seleccionar permitir acceso](../../../../../translated_images/9.1_26_AllowAccess.1abcaea31b9846279cafafd7160baea6bec60cdfac8224df7082ceee3ef22a26.es.png)

1. Renombra la acción como lo siguiente,

    ```text
    Send an email to manager
    ```

    A continuación, definamos los parámetros de entrada de nuestra acción.

    Para el parámetro de entrada **Para**, selecciona tu dirección de correo electrónico. Normalmente, esto sería la dirección de tu gerente o usaríamos otra acción que obtenga la dirección de tu gerente según tu perfil de Entra ID, pero para el propósito de esta lección, selecciona tu propia dirección.

    Para el parámetro de entrada **Asunto**, ingresa lo siguiente,

    ```text
    Request type: new device
    ```

    Para el parámetro de entrada **Cuerpo**, ingresa lo siguiente,

    ```text
    Hi,

    New device requested from

    Manufacturer:
    Model:
    Link to item in SharePoint
    Additional comments from:

    This is an automated email from Contoso Helpdesk Copilot
    ```

    ![Renombrar acción y configurar entradas](../../../../../translated_images/9.1_27_RenameAndConfigureParameters.c3d29a3481fb5c0240cca85db4119387e6b750546ed12e2af4a9ac62d7454f89.es.png)

1. A continuación, actualizaremos el parámetro de entrada **Cuerpo** con referencias al contenido dinámico del **disparador** o la acción **Obtener elemento**. Ingresa un espacio después de la segunda línea, ya que insertaremos el nombre del usuario desde el insumo del disparador, **User**.

    Selecciona el **icono de rayo** o **icono fx** a la derecha.

    ![Agregar insumo User como contenido dinámico](../../../../../translated_images/9.1_28_AddUserInput.f38d3df648faef75f1985bdcc23db16e197ccb1ddc015210c43bbb2569fcf654.es.png)

1. En la pestaña **Contenido dinámico** del panel emergente, selecciona el insumo **User** del disparador.

    Selecciona **Agregar** para agregar el insumo de contenido dinámico **User** en el parámetro **Cuerpo** de la acción.

    ![Seleccionar insumo User](../../../../../translated_images/9.1_29_SelectUserInput.4efc79f52d74fa7ae13132ea13f7d51b3f4aab6413afc41a8354c5e59852b9fc.es.png)
1. El contenido dinámico del disparador ahora se referencia en el parámetro **Body** de la acción. Repetiremos lo mismo para las líneas restantes en el cuerpo del mensaje de correo electrónico.

    ![Entrada del usuario añadida](../../../../../translated_images/9.1_30_UserInputAdded.905ec0489e4f1bbe7cc071826050834aa1e5acf53f8a65ad59532ea13b81c607.es.png)

1. Haz clic en el espacio junto a `Manufacturer:`. Selecciona el **icono de rayo** o el **icono fx** a la derecha.

    En la pestaña **Dynamic content** del panel emergente, introduce lo siguiente en el campo de búsqueda,

    ```text
    manufacturer
    ```

    Selecciona la entrada **Manufacturer value** del disparador y selecciona **Add**.

    ![Añadir entrada Manufacturer value como contenido dinámico](../../../../../translated_images/9.1_31_ManufacturerValueAdded.db2cf35a35a20590d80d7f0191d771a045bf55e40ce98982d0e099588e260712.es.png)

1. Haz clic en el espacio junto a `Model:`. Selecciona el **icono de rayo** o el **icono fx** a la derecha.

    En la pestaña **Dynamic content** del panel emergente, introduce lo siguiente en el campo de búsqueda,

    ```text
    model
    ```

    Selecciona la entrada **Model** de la acción **Get item** y selecciona **Add**.

    ![Añadir entrada Model como contenido dinámico](../../../../../translated_images/9.1_32_ModelAdded.ff9d858648ddb85fe70eaaafa6e23d0560500e7327ccb29ee56ecac0d8d36cab.es.png)

1. Para el texto `Link to item in SharePoint`, actualizaremos esto para que sea un hipervínculo en el cuerpo del mensaje de correo electrónico. Haz clic al principio de la línea y selecciona el **icono de rayo** o el **icono fx** a la derecha.

    ![Añadir contenido dinámico](../../../../../translated_images/9.1_33_AddDynamicContent.c662d682377af82adc52de18e05baf9b6aa5a972882dcf6274f3979f14641627.es.png)

1. Haz clic después de la etiqueta HTML de anclaje y selecciona el **icono de rayo** o el **icono fx** a la derecha.

    En la pestaña **Dynamic content** del panel emergente, introduce lo siguiente en el campo de búsqueda,

    ```text
    link to item
    ```

    Selecciona la entrada **Link to item** de la acción **Get item** y selecciona **Add**.

    ![Añadir Link to item como contenido dinámico](../../../../../translated_images/9.1_34_AddLinkToItem.6827bd3bad484f7382d060435bb0ef45e9bb1c3ad4774529559bb4c5f9bbca8c.es.png)

1. Necesitamos cambiar al editor HTML seleccionando el icono **&lt;/&gt;**.

    ![Añadir entrada del usuario](../../../../../translated_images/9.1_35_ToggleCodeView.ae3a9caf213f2c6366487e10092ad1fad3494f110936219258d842c23e7f46d9.es.png)

1. El editor HTML ahora está habilitado. Haz clic antes del texto `Link to item in SharePoint`, añade una etiqueta HTML de anclaje para crear un hipervínculo. Copia y pega lo siguiente.

    ```text
    <a href="
    ```

    ![Etiqueta HTML](../../../../../translated_images/9.1_36_AddHTMLTag.146220ae5c33eaf9915c393c37d62b9d4b258413e9f4dc42a1ab005437669443.es.png)

1. La entrada de contenido dinámico de **Link to item** ahora se referencia en el parámetro **Body**. Haz clic después de la entrada **Link to item**, copia y pega lo siguiente.

    ```text
    ">
    ```

    ![Etiqueta HTML](../../../../../translated_images/9.1_37_AddHTMLTag.48f73b302f6a84bb6a51e0666fd30baf1f8d9d906947d44dc4095ededed18a2d.es.png)

1. Haz clic después del texto `Link to item in SharePoint`, cierra la etiqueta HTML de anclaje. Copia y pega lo siguiente.

    ```text
    </a>
    ```

    ![Etiqueta HTML](../../../../../translated_images/9.1_38_AddHTMLTag.47d2f0521e6aba9d609bfe65d86ebae5786e4ad5465fefb7ae0370db6e924c96.es.png)

1. Selecciona el icono **&lt;/&gt;** para cambiar la vista de código.

    ![Desactivar vista de código](../../../../../translated_images/9.1_39_ToggleCodeView.88606eb37d702a686904b2dd8943fcf144cec462b37ee781e8ee0415e62bd951.es.png)

1. Luego vuelve a seleccionar el icono **&lt;/&gt;** para cambiar nuevamente a la vista de código.

    ![Volver a la vista de código](../../../../../translated_images/9.1_40_ToggleCodeViewAgain.32da9b9804adbbfaf8d85bdaa6fa51d2ae5fc1fbb97f75084813972c66d0c4d9.es.png)

1. Observa cómo hay varios caracteres extra `&lt;br&gt;`. Elimina estos caracteres.

    ![Eliminar caracteres](../../../../../translated_images/9.1_41_DeleteCharacters.f1ef3830b186c2cd9974ea05e336c83c0706d72ab1010d06283716dc4e982875.es.png)

1. Hemos terminado de añadir un hipervínculo al cuerpo de nuestro mensaje de correo electrónico 😎 Selecciona el icono **&lt;/&gt;** para cambiar la vista de código.

    ![Etiqueta HTML ordenada](../../../../../translated_images/9.1_42_HTMLTagTidiedUp.1b27fa2c4dc65c3f1a7151abcf6e388f64cb83745b10cd22769c1f9af3421fc6.es.png)

1. Haz clic después del texto `Additional comments from` antes del carácter de dos puntos y selecciona el **icono de rayo** o el **icono fx** a la derecha.

    ![Añadir parámetro del usuario](../../../../../translated_images/9.1_43_AddUserInput.6f0d26739c1b9039383aa37cc46fa1149a269bd4268fb54b897d144afc49c515.es.png)

1. En la pestaña **Dynamic content** del panel emergente, introduce lo siguiente en el campo de búsqueda,

    ```text
    user
    ```

    Selecciona el parámetro **User** del disparador y selecciona **Add**.

    ![Añadir parámetro User como contenido dinámico](../../../../../translated_images/9.1_44_AddUserDynamicContent.bb7c76e92650001207712b3447d3275d584f3ebf739034369869c3facf38eacf.es.png)

1. Ahora vamos a insertar una expresión que mostrará el valor de Additional Comments si el usuario lo proporciona en el nodo **Ask an adaptive card**, de lo contrario mostrará "None" si el usuario no proporciona comentarios.

    Haz clic después de los dos puntos y selecciona el **icono de rayo** o el **icono fx** a la derecha.

    ![Añadir expresión](../../../../../translated_images/9.1_45_AddExpression.c4c92dc4a56fab75c78ec2c5087682521e562264c1710c8dfaa24134adc3a112.es.png)

1. En la pestaña **Function** del panel emergente y en el campo de expresión superior, introduce lo siguiente,

    ```text
    if(empty())
    ```

    Esta expresión utiliza la función `if` para una declaración if-else.

    La siguiente función utilizada es `empty`, que verifica si existe o no un valor en un parámetro de cadena. El parámetro de cadena que se debe referenciar es el valor del parámetro de entrada `AdditionalComments` del disparador.

    ![Si está vacío](../../../../../translated_images/9.1_46_IfEmptyFunctions.95d21ad01f6f7c290cb8d5a57ccbca9c9532df7ce57f800554dea541d503ddc6.es.png)

1. A continuación, haz clic **dentro de los paréntesis** después de la función `empty`. Vamos a insertar el parámetro de entrada `AdditionalComments` del disparador.

    Selecciona la pestaña **Dynamic content**. Introduce lo siguiente en el campo de búsqueda,

    ```text
    Additional
    ```

    Desplázate hacia abajo en el panel y selecciona la entrada **AdditionalComments** del disparador. El parámetro ahora se añadirá como un parámetro de cadena en la expresión.

    ![Añadir AdditionalComments como contenido dinámico](../../../../../translated_images/9.1_47_AdditionalCommentsDynamicContent.f9632f09779888c18a58df8e97ef677ed885b0eaa88c252b13b22c0e4c67495b.es.png)

1. A continuación, definiremos la lógica **_true_**, donde si el parámetro de cadena `AdditionalComments` está vacío, entonces queremos mostrar una cadena (texto) de `None`.

    Después del paréntesis que encierra el parámetro de cadena, introduce lo siguiente,

    ```text
    , 'None',
    ```

    ![Lógica verdadera](../../../../../translated_images/9.1_48_None.31978299f29e07ef3257eedd5dcee09c8675f8b3f61aea8102900118e0b6ca70.es.png)

1. Finalmente, definiremos la lógica **_false_**, donde si el parámetro de cadena `AdditionalComments` no está vacío, entonces queremos mostrar el valor del parámetro de entrada **AdditionalComments** de nuestro disparador.

    > Recordatorio: este valor será del campo Additional Comments de la tarjeta adaptativa en el nodo **Ask with adaptive card** en el tema **Request device**.

    Después de la coma después de nuestra lógica **_true_**, selecciona la pestaña **Dynamic content**. Introduce lo siguiente en el campo de búsqueda,

    ```text
    Additional
    ```

    Desplázate hacia abajo en el panel y selecciona la entrada **AdditionalComments** del disparador. El parámetro ahora se añadirá como un parámetro de cadena en la expresión.

    Ahora añádelo a nuestro parámetro **Body** seleccionando **Add**.

    ![Lógica falsa](../../../../../translated_images/9.1_49_AdditionalCommentsDynamicContent.d42c7fc29f65d901bb26dcbc13408c387633ea185cdd79c35d6439231b7363d5.es.png)

1. ¡Excelente, nuestra expresión está completa! La expresión ahora se ha añadido al parámetro **Body**. Por último, formatea la última línea en cursiva.

    ![Cursiva](../../../../../translated_images/9.1_50_Italics.a0c01aa33ef4e83167e1fbc21c1d833f95addd60c8f531411cf9c58a96a31b02.es.png)

1. Ahora vamos a actualizar la acción **Respond to the agent** para enviar el valor del parámetro **Model value** de la acción **Get item** de vuelta al agente.

    Mantén presionado el botón izquierdo del ratón y mueve hacia arriba dentro del diseñador para ver la acción **Respond to the agent**.

    Selecciona la acción **Respond to the agent** y selecciona la salida **Text** como tipo.

    ![Seleccionar salida de texto](../../../../../translated_images/9.1_51_RespondToTheAgentAction.4c682a440e19a0fcd6d6f51ef9cdbfe76f482a39d635b8905d9b0cbbf33d945f.es.png)

1. Introduce lo siguiente como el nombre de la salida.

    ```text
    ModelValue
    ```

    ![Salida ModelValue](../../../../../translated_images/9.1_52_ModelValueInput.20609429eb323281051607b090319adc5315c0245c7d61158eb119714fe4318f.es.png)

1. Selecciona el campo de valor y selecciona el **icono de rayo** o el **icono fx** a la derecha.

    ![Insertar expresión](../../../../../translated_images/9.1_53_InsertDynamicContent.108ba565696f9f52d742323e0f4c46c308f322ac4bd67802e3196430155c7443.es.png)

1. En la pestaña **Dynamic content** del panel emergente, introduce lo siguiente en el campo de búsqueda,

    ```text
    model
    ```

    Selecciona el parámetro **Model** de la acción **Get item** y selecciona **Add**.

    ![Añadir parámetro Model como contenido dinámico](../../../../../translated_images/9.1_54_ModelParameter.f231fd0ec089ac6b9ac1b7fd2e6a60a35b08484ed10b0098cff6b3ce0c7760cb.es.png)

1. El parámetro **Model** ahora es el valor de la salida de texto. Selecciona **Save draft** para guardar nuestro flujo del agente.

    Hemos completado nuestro flujo del agente 👏🏻

    ![Seleccionar guardar borrador](../../../../../translated_images/9.1_55_SaveDraftAgentFlow.5ab97895a901458362881fc9ee576762bdb0883b37a6cbd7a631ddc2750705af.es.png)

1. Hagamos una última actualización a nuestro flujo del agente antes de publicarlo. Selecciona la pestaña **Overview** y selecciona **Edit**.

    ![Seleccionar Editar](../../../../../translated_images/9.1_56_EditAgentFlowDetails.023e8149284b9ae79dd3d95f574ff90bbcc1cc4a9fff4be56664ccbe0698f310.es.png)

1. Para el **Flow name**, copia y pega lo siguiente.

    ```text
    Send device request email
    ```

    Para la **Description**, selecciona el **icono de actualización** para usar IA y generar automáticamente una descripción basada en el disparador y las acciones en el flujo del agente.

    Selecciona **Save** para guardar el nombre y la descripción actualizados del flujo del agente.

    ![Renombrar, añadir descripción y guardar detalles](../../../../../translated_images/9.1_57_RenameAndDescription.57a190396550bf998d62c49ca359b66211ae50042ac5f8739b32f8b9bc292607.es.png)

1. Selecciona la pestaña **Designer** y selecciona **Publish** para publicar el flujo del agente para que pueda añadirse como un nodo en el tema **Request device**.

    ![Publicar](../../../../../translated_images/9.1_58_Publish.8f43271718c662deee7afea6fb283f64005b277b3a62086e6d91cc0c3ac4f79c.es.png)

1. Aparecerá un mensaje de confirmación en breve para confirmar que el flujo del agente se ha publicado.

    ![Mensaje de confirmación](../../../../../translated_images/9.1_59_Confirmation.d406bde76c31b27f794d5742c992b8c84283f46b2e54524f1e500d0688a33716.es.png)

### 9.2 Añadir flujo del agente al tema

Ahora añadamos el flujo del agente al tema **Request device**.

1. Selecciona **Agents** en el menú del lado izquierdo y selecciona **Contoso Helpdesk Agent**.

    ![Seleccionar Agents](../../../../../translated_images/9.2_01_SelectAgent.b8a6fd3a8970d6b0c8e78bf0a5411257206612d53acdf9b44f78b2c9c2fe91fc.es.png)

1. Selecciona la pestaña **Topics**.

    ![Seleccionar pestaña Topics](../../../../../translated_images/9.2_02_SelectTopics.3e8618aba5f4a1ddf3dee726b6da9a66ed89d04a2e8ca36b52112a6675c2885c.es.png)

1. Selecciona el tema **Request device**.

    ![Seleccionar tema Request device](../../../../../translated_images/9.2_03_SelectRequestDevice.df10472702258708b3d069e718e695b9fcabc61d42901d524dc302a03b3fa4a9.es.png)

1. Desplázate hacia abajo hasta el nodo **Ask with adaptive card** y añade un nuevo nodo.

    Selecciona **Add a tool** y en la pestaña **Basic tools** del panel emergente, selecciona el flujo del agente **Send device request email** que creamos y publicamos recientemente.

    ![Seleccionar flujo del agente](../../../../../translated_images/9.2_04_SelectAgentFlow.15deca87db95fff1c9d904855d237d22a72c260adf3343d9e78695f07c42a8e0.es.png)

1. Para las entradas del disparador de nuestro flujo del agente, necesitamos seleccionar las salidas de variables del nodo **Ask with adaptive card**.

    Selecciona el **icono de elipsis (...)** para la entrada **DeviceSharePointId**.

    ![Seleccionar variable](../../../../../translated_images/9.2_05_SelectVariable.8fe53cbc0f950f732b9e9002b21d8762ddfe74fb601d61c2a5119e32383450a2.es.png)

1. Selecciona la variable **deviceSelectionId**, que es una de las salidas definidas en el nodo **Ask with adaptive card**.

    ![Seleccionar variable deviceSelectionId](../../../../../translated_images/9.2_06_SelectdeviceSelectionIdVariable.67c0091e0de9442d3cffbfe3b2cace8d76be37ea67815ddfc99af03ae4b37391.es.png)

1. A continuación, selecciona el **icono de elipsis (...)** para la entrada **User**.

    ![Seleccionar Variable](../../../../../translated_images/9.2_07_SelectVariable.bf851128bec5e0255c6cf361a837ce9701d0afac84ed3d5b89665d111a098386.es.png)

1. Selecciona la pestaña **System** en el panel emergente de variables y selecciona **User.DisplayName**. Esta variable almacena el nombre para mostrar del usuario interno que interactúa con el agente.

    ![Seleccionar variable del sistema User.DisplayName](../../../../../translated_images/9.2_08_SelectUser.DisplayNameVariable.926a2a7560402fbd7b224e2bf0ff11df9e5612803b7ce51e36f58201a09bbfd7.es.png)

1. A continuación, selecciona el **icono de mayor que** para **Advanced inputs** para expandir y ver la entrada **AdditionalComments**.

    ![Expandir entradas avanzadas](../../../../../translated_images/9.2_09_ExpandAdvancedInputs.bded22f83fe4eb21237daa254725e12a81ea75be34bcb0e8ab322037a4e6f418.es.png)

1. Selecciona el **icono de elipsis (...)** para la entrada AdditionalComments.

    ![Seleccionar Variable](../../../../../translated_images/9.2_10_SelectVariable.86286cc06323e65fb3874b9fd0ea62d140b9e9b9a2b5116d667192a6dca3815f.es.png)

1. Selecciona la pestaña **Formula** y el icono de expandir en el panel emergente de variables, ya que usaremos una expresión Power Fx.

    ![Pestaña Formula](../../../../../translated_images/9.2_11_SelectFormulaAndExpandIcon.3fcd07bfccc4f0779a5d26313b571e60be792da7fd28e937b3e888f8aaeda7e0.es.png)

1. Similar a la expresión en el flujo del agente que realiza una verificación condicional usando la función _if_, pero esta vez
    - usando funciones de Power Fx,
    - e insertando ya sea ningún valor o el valor de la variable de salida `commentsId` del nodo **Ask with adaptive card**.

    Introduce las siguientes funciones en el campo Power Fx,

    ```text
    If(IsBlank())
    ```

Esta expresión utiliza la función `If` para una declaración if-else.

La siguiente función utilizada es `IsBlank`, que verifica si existe o no un valor en un parámetro de cadena. El parámetro de cadena que se referenciará es la variable de salida `commentsId` del nodo **Preguntar con tarjeta adaptativa**.

![Funciones If y IsBlank](../../../../../translated_images/9.2_12_IfIsBlank.07f7516c7e1f7579239a8b3833d64a14eb88dc245cae714b3e07d6298e907d51.es.png)

1. A continuación, haz clic **dentro de los paréntesis** después de la función `IsBlank`. Vamos a insertar la variable de salida `commentsId` del nodo **Preguntar con tarjeta adaptativa**.

   Ingresa lo siguiente dentro de los paréntesis,

    ```text
    Topic.commentsId
    ```

   Y agrega una coma después del paréntesis.

   ![Referenciar variable de salida commentsId](../../../../../translated_images/9.2_13_Topic.commentsId.1a04dc190dac334ebf6c4dbc1b6df1aad2e4bbdeeb3ef960871e93614381f079.es.png)

1. Ahora definiremos la lógica:

   - cuando **_true_** - si el parámetro de cadena `Topic.commentsId` está vacío, entonces no queremos insertar ningún valor.
   - cuando **_false_** - si el parámetro de cadena `Topic.commentsId` no está vacío, entonces insertamos el valor de la variable commentsId.

   Después del paréntesis que encierra el parámetro de cadena, ingresa lo siguiente,

    ```text
    "", Topic.commentsId)
    ```

   La expresión de Power Fx debería ser la siguiente,

    ```text
    If(IsBlank(Topic.commentsId), "", Topic.commentsId)
    ```

   ¡Buen trabajo, nuestra expresión está completa! 🙌🏻 Ahora selecciona **Insertar** para establecer el parámetro de entrada del flujo del agente en la expresión de Power Fx.

   ![Expresión de Power Fx](../../../../../translated_images/9.2_14_PowerFxExpression.80e76ea59bdb8f131d26edf2657923f4af9000768d44b06c0947115fd218698e.es.png)

1. **Guarda** el tema.

### 9.3 Actualizar el tema Solicitar dispositivo con varios nodos para una mejor experiencia de usuario

A continuación, agregaremos dos nodos más:

- **Enviar un mensaje** - esto actuará como un mensaje de confirmación que hace referencia al dispositivo seleccionado y que su solicitud ha sido enviada.

- **Gestión de temas** - para cerrar la conversación, redirigiremos al nodo **Fin de la conversación**.

¡Comencemos!

1. Selecciona el **icono más +** debajo del nodo de flujo del agente y selecciona el nodo **Enviar un mensaje**.

   ![Agregar nodo enviar un mensaje](../../../../../translated_images/9.3_01_AddSendAMessageNode.ac4111729a2602f8301ecffbcb263d692ecb43478aa9da63cae0dd58160f56c8.es.png)

1. Ingresa lo siguiente en el campo de mensaje,

    ```text
    Thanks
    ```

   Luego selecciona **Insertar variable** ya que haremos referencia al nombre del usuario.

   ![Insertar variable](../../../../../translated_images/9.3_02_InsertVariable.c5c9ebce61d1f442413d05f4437f74ee1d9c3a8c2ab696244937c56b5171f310.es.png)

1. Selecciona la pestaña **Sistema** y busca `User` en el campo de búsqueda. Selecciona la variable **User.DisplayName**.

   ![Seleccionar variable del sistema](../../../../../translated_images/9.3_03_SelectSystemVariable.47cfac2f3a727dbaf32ae960cbafe43ce9ed00f73edf01ac6d48e5b2b167e5fc.es.png)

1. Ingresa lo siguiente en el campo de mensaje,

    ```text
    . Your selected device,
    ```

   Luego selecciona **Insertar variable** y esta vez en la pestaña **Personalizado**, selecciona la variable **ModelValue**.

   Luego ingresa lo siguiente para completar el mensaje.

    ```text
    , has been submitted and will be reviewed by your manager.
    ```

   El mensaje debería verse como el siguiente.

   ![Enviar mensaje](../../../../../translated_images/9.3_04_SendAMessage.3f6c4b5e53da9c7f9fcf9d0c453a9b65e44e35ea4c1124947fb638d0b682d96d.es.png)

1. Por último, selecciona el **icono más +** debajo del nodo **Enviar un mensaje** y selecciona **Gestión de temas**, seguido de **Ir a otro tema** y selecciona **Fin de la conversación**.

   ![Gestión de temas](../../../../../translated_images/9.3_05_EndOfConversation.3c6c96d03b29a4d0904dea09d96c62d6ad450fe60dd8d6b2fe9d31681d6cb147.es.png)

1. **Guarda** el tema.

   ![Guardar](../../../../../translated_images/9.3_06_SaveTopic.8c9201fabce9f41af03d9f1beb9ce321e4ee9880a94edabe58b592bffebda80a.es.png)

### 9.4 Probar el agente usando varios escenarios

¡Buen trabajo!!! 😁 Ahora podemos probar nuestro agente.

#### 9.4.1 Solicitar un dispositivo y agregar un comentario en la tarjeta adaptativa

1. **Actualiza** el panel de prueba, selecciona el icono **mapa de actividades** e ingresa lo siguiente como mensaje para el agente.

    ```text
    I need a laptop
    ```

   ![Probar agente](../../../../../translated_images/9.4_01_TestAgent_RequestDevice_Yes.e73a5076dcd7179901dc0536624a039e372e405a6aac7ab89a632ce81bacdc2e.es.png)

1. El agente activa el tema **Dispositivos disponibles** y responde con la lista de dispositivos disponibles. Ingresaremos lo siguiente como respuesta a la pregunta de si queremos solicitar un dispositivo.

    ```text
    Yes
    ```

   ![Sí](../../../../../translated_images/9.4_02_RequestDevice_Yes.25c34743bc168fde33f91743316e7bad87ee0e47150c93e9b82c4662404dcaba.es.png)

1. Observa cómo el agente invocó el tema **Solicitar dispositivo** según las instrucciones del agente y que la tarjeta adaptativa ahora se muestra en el mensaje del agente.

   Selecciona el dispositivo **Surface Laptop 15** y agrega lo siguiente como comentario.

    ```text
    I need 16GB of RAM please
    ```

   ![Seleccionar dispositivo y agregar comentario](../../../../../translated_images/9.4_03_SelectDeviceAndEnterComment.570ea590309bf97edc40c6f7b53dbdc1174365860d8e8a4c32cfb7f1837621c2.es.png)

1. Desplázate hacia abajo hasta que veas el botón **Enviar solicitud** y selecciónalo para enviar la tarjeta adaptativa al agente.

   ![Enviar solicitud](../../../../../translated_images/9.4_04_SubmitRequest.ce3f4f44b90243a18dbfb401548b9b3cefd3ea17d8293a1bc3377323e3449da9.es.png)

1. Selecciona **Permitir** para que el agente use tus credenciales para la autenticación de conexión de las dos acciones del conector.

   ![Permitir](../../../../../translated_images/9.4_05_SelectAllow.f7b5bda068fbaee83dcb1cff03a52c946fb4d879137c55f4e5f9eb3953985e0e.es.png)

1. El agente mostrará el mensaje de confirmación que incluye el modelo seleccionado, seguido de la redirección al tema **Fin de la conversación**. ¡Genial!

   ![Solicitud enviada](../../../../../translated_images/9.4_06_RequestSubmitted.1d4d2e9afbc222a5ba79a4c254e7b2364d6eafc1a200ad6ac0aa142f9f10642d.es.png)

1. Selecciona **Sí** para verificar el resto del tema **Fin de la conversación**.

   ![Seleccionar Sí](../../../../../translated_images/9.4_07_RedirectNode.e7b1390e4eafe8c2c815fc8ce7fdda56617d9fbeccb0d59423ad2899a8e5f897.es.png)

1. A continuación, califica la experiencia seleccionando cualquiera de las estrellas en la tarjeta de escala de calificación.

   El agente procederá al último nodo **Pregunta** en el tema **Fin de la conversación**. Selecciona **No**.

   ![Tema Fin de la conversación](../../../../../translated_images/9.4_08_EndOfConversation.b35507f7f561633c0cb3b6c15dc007ae4197a72d58afd8ae616bea439bd6e148.es.png)

1. El tema se completará y se mostrará un mensaje final en el panel de prueba.

   ![Tema Fin de la conversación](../../../../../translated_images/9.4_09_EndOfConversation.438891b82e322b8a2648533200fbcd01c660ab049223b0920cdd0fbfcdeeb888.es.png)

1. Revisa tu bandeja de entrada de tu cuenta de correo electrónico para revisar el correo enviado al gerente por el flujo del agente. Puedes ver los detalles del dispositivo seleccionado y la nota ingresada en la tarjeta adaptativa.

   ![Correo recibido](../../../../../translated_images/9.4_10_ReviewEmailMessageWithComment.b0138b0bb9d08aacbd8bbb02fdb633a6796b4131cf8d83212adeabaa1ce04a18.es.png)

1. Haz clic en el hipervínculo y el navegador debería cargar el elemento de SharePoint del dispositivo. ¡Súper!

   ![Hacer clic en el enlace del correo](../../../../../translated_images/9.4_11_SelectLinkInEmail.2179f17165b61ba1e8aee68e8de4c752d64b0780ad86e0fe9054580d9c24e208.es.png)

#### 9.4.2 Solicitar un dispositivo y no agregar un comentario en la tarjeta adaptativa

Ahora probemos el escenario en el que no se ingresa un comentario.

1. Repite los mismos pasos de:

   - **Actualizar** el panel de prueba y seleccionar el icono **mapa de actividades**
   - Ingresar el mensaje, `Necesito una laptop`
   - Responder con `Sí` a la pregunta de solicitar un dispositivo

   ![Solicitar dispositivo](../../../../../translated_images/9.4_12_RequestDevice_Yes.1e369b8a52547fade4b84a4e36b399ee0692c6edbaa778ba90fe9c15cae75c5c.es.png)

1. Esta vez selecciona **Surface Laptop 13** como el dispositivo y no ingreses un comentario.

   ![Seleccionar dispositivo](../../../../../translated_images/9.4_13_SelectDevice.d9ad15d17de3f06fd948bd529f116f7c05bedf79c016180d8a1dd7e378322b0e.es.png)

1. **Enviar** la solicitud seleccionando el botón **Enviar solicitud**.

   ![Enviar solicitud](../../../../../translated_images/9.4_14_SubmitRequest.a783ad8460bfb4485cfd2e97db2c065d9d6bf803279e3bd1569fe3e93548a578.es.png)

1. Esta vez, el correo recibido en tu bandeja de entrada mostrará **Ninguno** como el comentario.

   ![Correo recibido](../../../../../translated_images/9.4_15_ReviewEmailMessage.137f35152c9da4b4a02bebec5f0cc9e55cfa25679770ace003aa19482ed0f3eb.es.png)

#### 9.4.3 No solicitar un dispositivo

Probemos el escenario final, que es no solicitar un dispositivo, y el tema **Adiós** debería ser invocado según las instrucciones del agente.

1. Repite los mismos pasos de:

   - **Actualizar** el panel de prueba y seleccionar el icono **mapa de actividades**
   - Ingresar el mensaje, `Necesito una laptop`
   - Esta vez responde con `No` a la pregunta de solicitar un dispositivo

   ![Probar agente](../../../../../translated_images/9.4_16_TestAgent_RequestDevice_No.85f205968f1d4083f20cc890a707748f8e06c01a19536cd299a13bdde2350de7.es.png)

1. El agente invocó el tema **Adiós** y se hace la pregunta definida en el tema.

   ![Tema Adiós invocado](../../../../../translated_images/9.4_17_Goodbye.05ee598a987237e02866647a9699b0efa7ac58d1f448497f956af2ee815cb961.es.png)

## ✅ Misión Completa

¡Felicidades! 👏🏻 Has aprendido cómo construir el flujo de tu agente y agregarlo a nuestro tema existente **Solicitar dispositivo**, y cómo redirigir al agente a otro tema.

Este es el final de **Laboratorio 09 - Agregar un flujo de agente para la automatización y mejorar las capacidades del tema**, selecciona el enlace a continuación para pasar a la siguiente lección. Ampliaremos el caso de uso de este laboratorio en el laboratorio de la siguiente lección.

⏭️ [Ir a la lección **Agregar disparadores de eventos - Habilitar capacidades autónomas del agente**](../10-add-event-triggers/README.md)

## 📚 Recursos Tácticos

🔗 [Presentando los flujos de agente: Transformando la automatización con flujos de trabajo centrados en IA](https://www.microsoft.com/microsoft-copilot/blog/copilot-studio/introducing-agent-flows-transforming-automation-with-ai-first-workflows/)

🔗 [Descripción general de los flujos de agente](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-172621-ebenitez)

🔗 [Usar flujos de agente con tu agente](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-172621-ebenitez)

🔗 [Lista de funciones en la guía de referencia](https://learn.microsoft.com/azure/logic-apps/workflow-definition-language-functions-reference?WT.mc_id=power-172621-ebenitez)

📺 [Flujos de Agente en Copilot Studio](https://www.youtube.com/watch?v=VJTKyk3Pr7s)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/09-add-an-agent-flow" alt="Analytics" />

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que surjan del uso de esta traducción.