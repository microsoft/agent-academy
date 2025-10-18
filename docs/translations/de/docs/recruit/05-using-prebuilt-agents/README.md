<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "8e2c64a7f9303e58329ec8bb468c80b4",
  "translation_date": "2025-10-17T18:53:48+00:00",
  "source_file": "docs/recruit/05-using-prebuilt-agents/README.md",
  "language_code": "de"
}
-->
# 🧰 Mission 05: Verwendung eines vorgefertigten Agenten  

## 🕵️‍♂️ CODENAME: `OPERATION SICHERE REISEN`

> **⏱️ Zeitfenster der Operation:** `~30 Minuten`

🎥 **Schauen Sie sich die Anleitung an**

[![Vorgefertigter Agent Video Thumbnail](../../../../../translated_images/video-thumbnail.234ee62d2e4e837a7401776b5f092e5d5819f46a2e2859a92654b38f1381789f.de.jpg)](https://www.youtube.com/watch?v=NmXsx8WjWuM "Schauen Sie sich die Anleitung auf YouTube an")

## 🎯 Missionsbeschreibung

Willkommen zu Ihrer nächsten Mission in der Copilot Studio Agent Academy. Sie werden die Welt der **vorgefertigten Agenten** erkunden – intelligente, zweckorientierte Agenten, die von Microsoft entwickelt wurden, um Ihre Implementierung zu beschleunigen und den Mehrwert zu steigern.

Anstatt von Grund auf neu zu beginnen, bieten vorgefertigte Agenten (auch **Agentenvorlagen** genannt) Ihnen einen Vorsprung, indem sie einsatzbereite Szenarien bereitstellen, die Sie in wenigen Minuten anpassen und implementieren können.

In dieser Mission werden Sie den **Sichere Reisen**-Agenten bereitstellen – einen Agenten, der Ihren Nutzern hilft, sich auf Geschäftsreisen vorzubereiten, Unternehmensrichtlinien zu verstehen und die Planung zu vereinfachen.

---

## 🧭 Ziele

Ihre Ziele für diese Mission sind:

1. Verstehen, was vorgefertigte Agenten sind und warum sie wichtig sind  
1. Bereitstellen der **Sichere Reisen**-Agentenvorlage  
1. Anpassen der Antworten und Inhalte des Agenten  
1. Testen und Veröffentlichen des Agenten  

---

## 🧠 Was sind vorgefertigte Agenten?

Vorgefertigte Agenten sind einsatzbereite KI-Agenten, die von Microsoft entwickelt wurden und:

- Häufige Geschäftsanforderungen adressieren (wie Reisen, Personalwesen, IT-Support)
- Vollständig funktionierende Themen, Auslöser, Anweisungen und Beispielwissen enthalten
- Bearbeitet, erweitert und mit Ihren eigenen Daten verknüpft werden können

Diese Agenten sind perfekt, um schnell zu starten oder zu lernen, wie Agenten strukturiert sind.

---

## 🧪 Lab 05: Schnell mit einem vorgefertigten Agenten starten

Wir werden nun lernen, wie man einen vorgefertigten Agenten auswählt und anpasst.

- [5.1 Copilot Studio starten](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.2 Die Sichere Reisen Agentenvorlage auswählen](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.3 Den Agenten anpassen](../../../../../docs/recruit/05-using-prebuilt-agents)
- [5.4 Testen und Veröffentlichen](../../../../../docs/recruit/05-using-prebuilt-agents)

Wir bleiben bei dem Beispiel von früher, bei dem wir eine Lösung in der dedizierten Copilot Studio-Umgebung erstellen, um unseren IT-Helpdesk-Agenten zu entwickeln.

Legen wir los!

### 5.1 Copilot Studio starten

1. Navigieren Sie zu [https://copilotstudio.microsoft.com](https://copilotstudio.microsoft.com)

1. Melden Sie sich mit Ihrem Microsoft 365 Arbeits- oder Schulkonto an

!!! warning
    Sie müssen sich in einem Tenant befinden, in dem Copilot Studio aktiviert ist. Wenn Sie Copilot Studio nicht sehen, kehren Sie zu [Mission 00](../00-course-setup/README.md) zurück, um Ihre Einrichtung abzuschließen.

### 5.2 Die Sichere Reisen Agentenvorlage auswählen

1. Klicken Sie auf der Startseite von Copilot Studio auf **+ Erstellen**
    ![Einen Agenten erstellen](../../../../../translated_images/create.ef22dd3e758823e9f17d69ef07c7db6fef8cbc00dd944ac65842bd3bd9f16efd.de.png)

1. Scrollen Sie nach unten zum Abschnitt **Mit einer Agentenvorlage starten**

1. Finden und wählen Sie **Sichere Reisen**

    ![Sichere Reisen Vorlage auswählen](../../../../../translated_images/choose_template.01c90e72076da7f14a9c93120dec6932b57a109a506823dd3b195d8f610afb07.de.png)

1. Beachten Sie, dass die Vorlage bereits mit einer Beschreibung, Anweisungen und Wissen vorab geladen ist.

    ![Die Vorlage überprüfen](../../../../../translated_images/template-setup.0b2f5a8dd8c3e7e305d24461df3065a4ec435d3300df75287891830a9b91b974.de.png)

1. Klicken Sie auf **Erstellen**

    ![Einen Agenten erstellen](../../../../../translated_images/create-agent-setup.3383d353508b5e33593bd2961c1fbea29568a49868356844ab4cffdad584a655.de.png)

Dies erstellt einen neuen Agenten in Ihrer Umgebung basierend auf der Konfiguration von Sichere Reisen.

### 5.3 Den Agenten anpassen

Nachdem der Agent erstellt wurde, passen wir ihn nun an Ihre Organisation an:

1. Wählen Sie **Generative KI aktiviert**, um die generative KI-Funktion zu aktivieren, damit sie die in der Vorlage bereitgestellten Anweisungen nutzen kann.

    ![Generative Antworten aktivieren](../../../../../translated_images/gen-answers.7e91d692123771a60b0b944956472a1323857f61ffa2c32231f12eeb9bec341c.de.png)

1. Nun statten wir den Agenten mit einer zusätzlichen Wissensquelle aus, damit er Fragen zu Reisen in Europa beantworten kann. Scrollen Sie dazu nach unten zum Abschnitt **Wissen** und wählen Sie **Wissen hinzufügen**

    ![Wissen hinzufügen](../../../../../translated_images/knowledge.d85f70ad6cffe8700b2f33f76633c1c37ce45a960a33e42b3b48eca2759449b5.de.png)

1. Wählen Sie **Öffentliche Websites**

    ![Eine öffentliche Website hinzufügen](../../../../../translated_images/public-website.cb547b2284c409058bbe7e0a46e503f2368911b0781eec530b9ae63cd174e0b9.de.png)

1. Fügen Sie im Texteingabefeld **<https://european-union.europa.eu/>** ein und wählen Sie **Hinzufügen**

    ![Die Website hinzufügen](../../../../../translated_images/paste-add.bb80b0f0f9bcd47dfbf00ebcb0a5386fa892be795c2eee74a8348c0d2a6ab5ae.de.png)

1. Wählen Sie **Zum Agenten hinzufügen**

    ![Zum Agenten hinzufügen](../../../../../translated_images/add-to-agent.f139c87c5a79ddaa1eef244a93f76c6451c1374dbbf189c23ce24c49a65d6073.de.png)

### 5.4 Testen und Veröffentlichen

1. Klicken Sie oben rechts auf **Testen**, um das Testfenster zu starten  

1. Probieren Sie Phrasen wie:

    - `„Brauche ich ein Visum, um von den USA nach Amsterdam zu reisen?“`
    - `„Wie lange dauert es, einen US-Pass zu bekommen?“`
    - `„Wo ist die nächste US-Botschaft in Valencia, Spanien?“`

1. Bestätigen Sie, dass der Agent mit genauen und hilfreichen Informationen antwortet, und beobachten Sie die Aktivitätskarte, um zu sehen, woher die Informationen stammen.

    ![Zum Agenten hinzufügen](../../../../../translated_images/response-passport.e91b05c561f49cf5edbbdc6d7a61fffdcc4ad3d413bd17b09cca3f521a578be8.de.png)

1. Wenn Sie bereit sind, klicken Sie auf **Veröffentlichen**

    ![Zum Agenten hinzufügen](../../../../../translated_images/publish-1.0685cfdf10e365ee58a8d0160c5bab81aef8fa5fbd2eb65535d568f611532637.de.png)

1. Wählen Sie im Dialogfeld erneut **Veröffentlichen**
    ![Zum Agenten hinzufügen](../../../../../translated_images/publish-2.9c3964d72347088eeaaf8c137921d5b67c9962bce0ad067f89e8999f75299aa2.de.png)

1. Optional können Sie den Agenten mit der integrierten **Kanäle**-Funktion zu Microsoft Teams hinzufügen.

!!! note "🧳 Bonusziel"
    Versuchen Sie, den Sichere Reisen Agenten mit einer SharePoint-Seite oder einer FAQ-Datei zu verknüpfen, um ihn relevanter für die Reisebestimmungen Ihres Unternehmens zu machen.

## ✅ Mission abgeschlossen

Sie haben nun erfolgreich:

- Einen vorgefertigten Microsoft-Agenten bereitgestellt  
- Den Agenten angepasst  
- Ihre eigene Version der **Sichere Reisen**-Agentenvorlage getestet und veröffentlicht

⏭️ [Weiter zur Lektion **Einen benutzerdefinierten Agenten von Grund auf erstellen**](../06-create-agent-from-conversation/README.md).

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/05-using-prebuilt-agents" alt="Analytics" />

---

**Haftungsausschluss**:  
Dieses Dokument wurde mit dem KI-Übersetzungsdienst [Co-op Translator](https://github.com/Azure/co-op-translator) übersetzt. Obwohl wir uns um Genauigkeit bemühen, beachten Sie bitte, dass automatisierte Übersetzungen Fehler oder Ungenauigkeiten enthalten können. Das Originaldokument in seiner ursprünglichen Sprache sollte als maßgebliche Quelle betrachtet werden. Für kritische Informationen wird eine professionelle menschliche Übersetzung empfohlen. Wir übernehmen keine Haftung für Missverständnisse oder Fehlinterpretationen, die sich aus der Nutzung dieser Übersetzung ergeben.