<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-17T19:26:42+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "es"
}
-->
# 🕵️‍♂️ Misión 04: Instrucciones para Agentes Autores

--8<-- "disclaimer.md"

## 🕵️‍♂️ NOMBRE CLAVE: `OPERACIÓN DIRECTIVA SECRETA`

> **⏱️ Ventana de Tiempo de la Operación:** `~45 minutos`

## 🎯 Resumen de la Misión

Agente, tu próxima asignación es **Operación Directiva Secreta**: dominar el arte de la comunicación y el control de agentes mediante instrucciones y descripciones precisas.

Tu misión, si decides aceptarla, es aprender las habilidades críticas para redactar instrucciones claras y accionables que guíen a tus agentes a tomar decisiones inteligentes, usar las herramientas y fuentes de conocimiento adecuadas, y colaborar sin problemas con otros agentes. También dominarás la habilidad de crear descripciones de alta calidad que ayuden a los agentes a comprender sus recursos y responder con precisión quirúrgica a las consultas de los usuarios.

Considera esto como tu entrenamiento avanzado en psicología de agentes y modificación de comportamiento. Así como un operativo de campo necesita parámetros claros para tener éxito, tus agentes de IA requieren instrucciones expertamente diseñadas para actuar con claridad, precisión y proporcionar inteligencia valiosa en escenarios del mundo real.

---

## 🔎 Objetivos

Al completar esta misión, lograrás:

- **Dominio de Instrucciones**: Comprender el arte y la ciencia de redactar instrucciones para agentes en Copilot Studio  
- **Guía Estratégica**: Aprender a dirigir a los agentes para usar herramientas, fuentes de conocimiento y colaborar con otros agentes  
- **Claridad Operativa**: Asegurar que tus agentes actúen con precisión, transparencia y eficiencia  

---

## 📝 Redacción de Instrucciones para Agentes

Escribir instrucciones efectivas para agentes es clave para un comportamiento exitoso. Las instrucciones son utilizadas por los agentes para:

- Decidir qué herramienta, tema o fuente de conocimiento usar para una consulta de usuario o un disparador autónomo  
- Completar entradas para cualquier herramienta basándose en el contexto disponible  
- Generar una respuesta para el usuario final  

### Cómo Funcionan las Instrucciones

Las instrucciones deben estar basadas en las herramientas, temas y fuentes de conocimiento configurados para tu agente. Los agentes no pueden actuar sobre instrucciones para recursos que no tienen. Por ejemplo, si instruyes a tu agente para buscar en las preguntas frecuentes de un sitio web, debes agregar esas preguntas frecuentes como una fuente de conocimiento.

Puedes referenciar herramientas específicas, temas, variables o expresiones de Power Fx usando `/` en tus instrucciones. Esto ayuda al agente a saber exactamente qué usar y cuándo.

### Qué Incluir en las Instrucciones

- Agrega instrucciones para casos en los que desees guiar las elecciones del agente, especialmente cuando pueda haber ambigüedad.  
- Usa instrucciones para establecer límites, como restringir temas o especificar formatos de respuesta.  
- Da pistas para completar entradas de herramientas, por ejemplo: "Usa la dirección de correo electrónico del campo de contacto del cliente potencial al ayudar al usuario a redactar un correo electrónico."  
- Especifica cómo deben formatearse las respuestas, por ejemplo: "Siempre da respuestas sobre el estado de pedidos en formato de tabla."  
- Usa restricciones para limitar las acciones del agente, por ejemplo: "Responde solo a solicitudes sobre beneficios para empleados."  

### Ejemplos Prácticos

- "Usa los documentos de preguntas frecuentes solo si la pregunta no está relacionada con Horarios, Citas o Facturación."  
- "Usa el tema de creación de tickets solo para crear tickets; para otras solicitudes relacionadas con solucionar problemas, usa el tema de resolución de problemas."  
- "Siempre da respuestas sobre el estado de pedidos en formato de tabla."  

### Pruebas y Refinamiento

- Después de editar las instrucciones, usa el panel de prueba para validar el comportamiento del agente.  
- Actualiza y publica los cambios según sea necesario.  

### Guía Avanzada

- Numera o utiliza listas con viñetas en tus instrucciones y especifica que deben seguirse en orden.  
- Usa formato markdown para mejorar la legibilidad y ayudar a la IA generativa a procesar tus instrucciones.  
- Si deseas que tu agente sea muy específico, considera crear un tema para ese caso de uso.  
- Usa nombres exactos para herramientas y temas en las instrucciones para evitar confusiones.  

### Seguridad y Moderación

- Limita qué herramientas debe usar el agente al referenciar fuentes de conocimiento.  
- Limita qué parámetros deben usarse para las herramientas (por ejemplo, solo enviar correos electrónicos a una lista específica de individuos).  
- Usa instrucciones para proteger contra comportamientos no deseados o problemas de filtrado de contenido.  

---

## ✍️ Redacción de Descripciones para Herramientas, Temas y Agentes

Las descripciones de alta calidad son esenciales para la orquestación generativa. Tu agente utiliza estas descripciones para seleccionar las herramientas, temas y agentes adecuados para responder a las consultas y disparadores de los usuarios. Sigue estas mejores prácticas:

- **Usa un Lenguaje Simple y Directo**: Evita jerga, términos técnicos innecesarios o lenguaje informal. Escribe en voz activa y tiempo presente.  
- **Sé Específico y Relevante**: Incluye palabras clave relacionadas con la funcionalidad y la intención del usuario. Asegúrate de que las descripciones diferencien claramente herramientas o temas similares para evitar ambigüedades.  
- **Mantén las Descripciones Cortas e Informativas**: Limita las descripciones a una o dos oraciones. Resume lo que hace la herramienta, tema o agente y cómo beneficia al usuario.  
- **Usa Nombres Únicos y Descriptivos**: Evita nombres genéricos. Por ejemplo, usa "Pronóstico del Tiempo para Mañana" en lugar de solo "Clima".  
- **Lista de Acciones o Consideraciones**: Usa listas con viñetas o numeradas para mayor claridad al describir múltiples características o pasos.  
- **Prueba para Evitar Superposición**: Si varios temas tienen descripciones similares, tu agente podría invocarlos todos. Prueba y revisa para evitar superposiciones.  

!!! example "Ejemplos de Buenas y Malas Descripciones"
    **Buena:** Este tema proporciona información meteorológica para cualquier ubicación en el mundo para el día siguiente. Proporciona la temperatura. No obtiene el clima actual de hoy.  
    **Mala:** Esta herramienta puede responder preguntas. *(Demasiado vaga)*  

---

## 🛠️ Mejores Prácticas para Instrucciones y Descripciones

Para que tus instrucciones y descripciones sean realmente efectivas, ten en cuenta estos principios:

- Usa voz activa y tiempo presente (por ejemplo, "Esta herramienta proporciona información meteorológica").  
- Evita jerga, lenguaje informal o términos técnicos innecesarios, a menos que sean necesarios para la audiencia.  
- Usa listas con viñetas o numeradas para separar acciones, características o consideraciones.  
- Incluye palabras clave que coincidan con la intención del usuario y la funcionalidad de la herramienta o tema.  
- Asegúrate de que los nombres y descripciones de recursos similares sean distintos para evitar confusión y superposición.  

---

## 🗂️ Estructura Ejemplo de Instrucciones

Al redactar instrucciones, considera la siguiente estructura para mayor claridad y completitud:

1. **Resumen**: Describe brevemente la misión y el rol del agente  
1. **Pasos del Proceso**: Enumera los pasos principales que debe seguir el agente  
1. **Puntos de Colaboración**: Indica cuándo llamar a otros agentes o usar herramientas específicas  
1. **Seguridad y Moderación**: Incluye cualquier requisito de cumplimiento o seguridad  
1. **Bucle de Retroalimentación**: Especifica cómo el agente debe recopilar retroalimentación o escalar problemas  

---

## 🧪 Laboratorio: Redacción de Instrucciones para Agentes

*Contenido del laboratorio próximamente...*

---

## 🎉 Misión Completa

¡Misión 04 completada! Ahora tienes:

✅ **Dominio de Instrucciones**: Aprendiste a redactar instrucciones claras y accionables para agentes  
✅ **Guía Estratégica**: Dirigiste a los agentes para usar herramientas y colaborar eficazmente  
✅ **Claridad Operativa**: Aseguraste que los agentes actúen con precisión y transparencia  

Lo siguiente es [Misión 05](../05-agent-responses/README.md): Personalización de respuestas de agentes para un impacto máximo.

---

## 📚 Recursos Tácticos

📖 [Microsoft Copilot Studio - Redacción de Instrucciones](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Guía para el Modo Generativo](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que surjan del uso de esta traducción.