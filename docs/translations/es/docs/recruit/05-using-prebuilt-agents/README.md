<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-17T18:53:24+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "es"
}
-->
# 🧰 Misión 05: Usando un Agente Preconstruido  

## 🕵️‍♂️ NOMBRE CLAVE: `OPERACIÓN VIAJES SEGUROS`

> **⏱️ Duración de la Operación:** `~30 minutos`

🎥 **Mira la Guía**

[![Miniatura del video del agente preconstruido](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.es.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Mira la guía en YouTube")

## 🎯 Resumen de la Misión

Bienvenido a tu próxima misión en la Academia de Agentes de Copilot Studio. Estás a punto de explorar el mundo de los **agentes preconstruidos**: agentes inteligentes y con propósito creados por Microsoft para acelerar tu implementación y reducir el tiempo necesario para obtener resultados.

En lugar de construir desde cero, los agentes preconstruidos (también llamados **plantillas de agentes**) te dan una ventaja inicial al proporcionar escenarios listos para usar que puedes personalizar e implementar en minutos.

En esta misión, desplegarás el agente **Viajes Seguros**—un agente que ayuda a tus usuarios a prepararse para viajes de negocios, entender las políticas de la empresa y simplificar la planificación.

---

## 🧭 Objetivos

Tus metas para esta misión son:

1. Entender qué son los agentes preconstruidos y por qué son importantes  
1. Desplegar la plantilla del agente **Viajes Seguros**  
1. Personalizar las respuestas y el contenido del agente  
1. Probar y publicar el agente  

---

## 🧠 ¿Qué son los Agentes Preconstruidos?

Los agentes preconstruidos son agentes de inteligencia artificial listos para usar creados por Microsoft que:

- Abordan necesidades comunes de negocios (como viajes, recursos humanos, soporte técnico)
- Incluyen temas completamente funcionales, frases de activación, instrucciones y conocimiento de muestra.
- Pueden ser editados, ampliados y adaptados con tus propios datos

Estos agentes son perfectos para comenzar rápidamente o aprender cómo están estructurados los agentes.

---

## 🧪 Laboratorio 05: Comienza rápidamente con un agente preconstruido

Ahora aprenderemos cómo seleccionar un agente preconstruido y personalizarlo.

- [5.1 Iniciar Copilot Studio](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Elegir la Plantilla del Agente Viajes Seguros](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Personalizar el Agente](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Probar y Publicar](../../../../../docs/recruit/05-using-prebuilt-agents)

Seguiremos con el ejemplo anterior, donde crearemos una solución en el entorno dedicado de Copilot Studio para construir nuestro agente de soporte técnico.

¡Comencemos!

### 5.1 Iniciar Copilot Studio

1. Navega a [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Inicia sesión con tu cuenta de trabajo o escuela de Microsoft 365

!!! warning
    Debes estar en un tenant donde Copilot Studio esté habilitado. Si no ves Copilot Studio, revisa [Misión 00](../00-course-setup/README.md) para completar tu configuración.

### 5.2 Elegir la Plantilla del Agente Viajes Seguros

1. Desde la página principal de Copilot Studio, haz clic en **+ Crear**
    ![Crear un agente](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.es.png)

1. Desplázate hacia abajo hasta la sección **Comenzar con una plantilla de agente**

1. Encuentra y selecciona **Viajes Seguros**

    ![Elegir plantilla de viajes seguros](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.es.png)

1. Observa que la plantilla viene precargada con una descripción, instrucciones y conocimiento.

    ![Revisar la plantilla](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.es.png)

1. Haz clic en **Crear**

    ![Crear un agente](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.es.png)

Esto creará un nuevo agente en tu entorno basado en la configuración de Viajes Seguros.

### 5.3 Personalizar el Agente

Ahora que el agente está creado, vamos a adaptarlo a tu organización:

1. Selecciona **Habilitar IA generativa** para activar la función de IA generativa y que pueda usar las instrucciones proporcionadas en la plantilla.

    ![Habilitar respuestas generativas](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.es.png)

1. Ahora equiparemos al agente con una fuente de conocimiento adicional para que pueda responder preguntas sobre viajes en Europa. Para hacerlo, desplázate hacia abajo hasta la sección **conocimiento** y selecciona **Agregar conocimiento**

    ![Agregar conocimiento](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.es.png)

1. Selecciona **Sitios web públicos**

    ![Agregar un sitio web público](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.es.png)

1. En el campo de texto, pega **<https://european-union.europa.eu/>** y selecciona **Agregar**

    ![Agregar el sitio web](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.es.png)

1. Selecciona **Agregar al agente**

    ![Agregar al agente](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.es.png)

### 5.4 Probar y Publicar

1. Haz clic en **Probar** en la esquina superior derecha para abrir la ventana de prueba  

1. Prueba frases como:

    - `“¿Necesito una visa para viajar de EE.UU. a Ámsterdam?”`
    - `“¿Cuánto tiempo tarda en obtenerse un pasaporte estadounidense?”`
    - `“¿Dónde está la embajada de EE.UU. más cercana en Valencia, España?”`

1. Confirma que el agente responde con información precisa y útil, y observa el Mapa de Actividad para ver de dónde obtuvo la información.

    ![Agregar al agente](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.es.png)

1. Cuando estés listo, haz clic en **Publicar**

    ![Agregar al agente](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.es.png)

1. Selecciona **Publicar** nuevamente en el cuadro de diálogo
    ![Agregar al agente](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.es.png)

1. Opcionalmente, agrega el agente a Microsoft Teams usando la función integrada de **Canales**.

!!! note "🧳 Objetivo Adicional"
    Intenta conectar el agente Viajes Seguros con un sitio de SharePoint o un archivo de preguntas frecuentes para hacerlo más relevante a las políticas de viaje de tu empresa.

## ✅ Misión Completa

Ahora has logrado:

- Desplegar un agente preconstruido de Microsoft  
- Personalizar el agente  
- Probar y publicar tu propia versión de la plantilla del agente **Viajes Seguros**

⏭️ [Avanza a la lección **Crear un agente personalizado desde cero**](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analítica" />

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que surjan del uso de esta traducción.