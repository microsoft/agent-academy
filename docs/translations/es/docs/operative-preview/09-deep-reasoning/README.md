<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "610b0181a64c306bc9a853fd974bc924",
  "translation_date": "2025-10-17T19:35:04+00:00",
  "source_file": "docs/operative-preview/09-deep-reasoning/README.md",
  "language_code": "es"
}
-->
# Aplicando razonamiento profundo para evaluar la adecuación del candidato y la preparación para entrevistas

--8<-- "disclaimer.md"

## Teoría

- Explica qué es el razonamiento profundo  
- Habla sobre las formas de usarlo (en el propio agente o en un prompt)  
- Habla sobre cuándo lo usarías  

## Laboratorio

Para el agente de preparación para entrevistas, utilizaremos razonamiento profundo. En este caso, razonaremos sobre los siguientes aspectos:

- Preguntas de entrevista (¿hay lagunas en las que debamos profundizar durante la entrevista?)  
- Resultado del prompt sobre adecuación a la empresa (texto sobre cómo este candidato se alinea con los valores de la empresa + puntuación)  
- Resultado del prompt sobre adecuación al rol (texto sobre cómo este candidato se alinea con los requisitos del rol + puntuación)  

Este es un excelente momento para aplicar las instrucciones avanzadas que los estudiantes han aprendido en la lección anterior.

[Agregar un modelo de razonamiento profundo para tareas complejas (vista previa) - Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-reasoning-models)  
[https://learn.microsoft.com/ai-builder/prompt-modelsettings](https://learn.microsoft.com/ai-builder/prompt-modelsettings)  

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que puedan surgir del uso de esta traducción.