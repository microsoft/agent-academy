<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "610b0181a64c306bc9a853fd974bc924",
  "translation_date": "2025-10-18T03:28:19+00:00",
  "source_file": "docs/operative-preview/09-deep-reasoning/README.md",
  "language_code": "ja"
}
-->
# 深い推論を活用して候補者の適性評価と面接準備を行う

--8<-- "disclaimer.md"

## 理論

- 深い推論とは何かを説明する
- それを活用する方法について話す（エージェント自体で使用する場合やプロンプトで使用する場合）
- どのような場合に使用するかについて話す

## 実践

面接準備エージェントでは、深い推論を使用します。この場合、以下の点について推論を行います：

- 面接の質問（面接中に焦点を当てるべきギャップがあるかどうか）
- 会社適性に関するプロンプトの結果（この候補者が会社の価値観にどのように一致しているかのテキスト + スコア）
- 役割適性に関するプロンプトの結果（この候補者が役割の要件にどのように一致しているかのテキスト + スコア）

これは、学習者が前のレッスンで学んだ高度な指示を適用する絶好の機会です。

[複雑なタスクのための深い推論モデルを追加する（プレビュー） - Microsoft Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/authoring-reasoning-models)  
[https://learn.microsoft.com/ai-builder/prompt-modelsettings](https://learn.microsoft.com/ai-builder/prompt-modelsettings)

---

**免責事項**:  
この文書はAI翻訳サービス[Co-op Translator](https://github.com/Azure/co-op-translator)を使用して翻訳されています。正確性を追求しておりますが、自動翻訳には誤りや不正確な部分が含まれる可能性があります。元の言語で記載された文書を正式な情報源としてご参照ください。重要な情報については、専門の人間による翻訳を推奨します。この翻訳の利用に起因する誤解や誤認について、当方は一切の責任を負いません。