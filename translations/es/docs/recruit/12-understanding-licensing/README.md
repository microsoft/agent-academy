<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-17T19:10:07+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "es"
}
-->
# 🚨 Misión 12: Entendiendo las Licencias

## 🕵️‍♂️ NOMBRE CLAVE: `OPERACIÓN CONOCE LO QUE DEBES`

> **⏱️ Ventana de Tiempo de la Operación:** `~15 minutos`

## 🎯 Resumen de la Misión

Bienvenido, Recluta. Antes de desplegar tus agentes en el campo, necesitas saber **cómo se mide, licencia y factura el uso**. Esta misión desglosa el modelo de facturación basado en mensajes, explica qué incluyen las licencias de Microsoft 365 Copilot y te muestra cómo planificar con tu estimador.

---

## 🎯 Objetivo: Comprender el Modelo Basado en Mensajes

Copilot Studio no cobra por usuario ni por función: te factura según **cuántos mensajes consumen tus agentes**. Un "mensaje" es una interacción entre tu agente y el usuario (o un sistema).

- 💬 Cada interacción del usuario con tu agente cuenta como al menos **1 mensaje**
- 🔄 Interacciones complejas (como grounding, IA generativa o flujos) consumen **múltiples mensajes**
- 💼 Pagas por los mensajes ya sea mediante **paquetes prepagados** o **pago por uso (PAYGO)**

---

## Opciones de Licencia

### 1. **Paquetes de Mensajes de Copilot Studio**

- Prepagado: **25,000 mensajes/mes por $200**
- Ideal para uso predecible: la capacidad se comparte entre el inquilino

### 2. **Pago por Uso (PAYGO)**

- Postpagado: **$0.01 por mensaje**
- Sin compromiso inicial; el uso se factura al final del mes a través de Azure

---

## ¿Qué pasa si tienes licencias de M365 Copilot?

Si tu equipo tiene **licencias de Microsoft 365 Copilot**, tus agentes **pueden operar sin costos adicionales para escenarios clave**:

- Respuestas clásicas, respuestas generativas, mensajes basados en gráficos y acciones básicas de agentes son **sin costo** para usuarios autenticados de M365 Copilot en aplicaciones como Teams y Outlook  
- Sin embargo: si habilitas funciones avanzadas como disparadores autónomos, flujos de agentes más allá de acciones básicas o usas canales/APIs externos, esos **consumen mensajes facturables**

| Escenario                                   | ¿Mensajes Adicionales Facturados?            |
|---------------------------------------------|----------------------------------------------|
| Usuario de M365 Copilot preguntando al agente en Teams | ❌ No facturado                              |
| Agente llamando a API externa o flujo       | ✅ Facturado (5 + mensajes)                  |
| Agente usando disparador autónomo o grounding | ✅ Facturado                                 |

---

## 🧮 Planifica con Precisión: Usa el Estimador

Antes de lanzar tu agente, utiliza nuestro **Estimador de Uso de Copilot Studio** para prever el consumo de mensajes en escenarios realistas:

[👉 Usa el Estimador de Uso de Copilot Studio](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Te permite:

- 🔢 Especificar tu **número de usuarios**
- ⚙️ Seleccionar **funciones del agente** (grounding, acciones, flujos, memoria)
- 📈 Estimar **mensajes totales por agente por mes**
- 🧠 Optimizar el diseño y evitar sorpresas en la facturación

!!! tip
    ✅ Úsalo temprano — y nuevamente después de construir — para comparar el uso esperado vs. el real.

---

## 💼 Escenario de Ejemplo

**Entorno**: Agente de mesa de ayuda de TI con grounding + un flujo de Power Automate  
**Sesiones**: 5 interacciones de usuario por sesión  
**Suposiciones**: grounding (10 mensajes) + acción (5 mensajes) + 5 respuestas generativas (10 mensajes)  
**Total**: ~25 mensajes por sesión  
**Escala**: 500 sesiones/mes = ~12,500 mensajes (½ paquete de mensajes)

---

## 🧠 Consejos Profesionales para Control de Costos

- Monitorea el uso a través del Centro de Administración de Power Platform
- Comienza en desarrollo/pruebas antes de ir en vivo
- Desactiva acciones y conectores no utilizados
- Usa **licencias de Microsoft 365 Copilot** cuando sea posible para uso interno
- Utiliza paquetes de mensajes cuando el uso sea predecible
- Usa el **Estimador de Uso de Copilot Studio** para prever el consumo

---

## 🏁 Misión Completa

Ahora entiendes:

- Cómo se calcula y factura el uso
- Cuándo M365 Copilot cubre el uso — y cuándo no
- Cómo prever y gestionar tu consumo de mensajes

🎓 Con este conocimiento, estás listo para avanzar y desplegar tus agentes **de manera eficiente e inteligente**

---

## 📚 Recursos Tácticos

Aprende más sobre licencias y facturación en Copilot Studio

- 📄 [Licencias y Tarifas de Mensajes de Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Guía de Licencias de Power Platform (Julio 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Gestión de Mensajes y Monitoreo de Capacidad](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Analíticas" />

---

**Descargo de responsabilidad**:  
Este documento ha sido traducido utilizando el servicio de traducción automática [Co-op Translator](https://github.com/Azure/co-op-translator). Aunque nos esforzamos por lograr precisión, tenga en cuenta que las traducciones automáticas pueden contener errores o imprecisiones. El documento original en su idioma nativo debe considerarse la fuente autorizada. Para información crítica, se recomienda una traducción profesional realizada por humanos. No nos hacemos responsables de malentendidos o interpretaciones erróneas que surjan del uso de esta traducción.