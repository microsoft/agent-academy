<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6219479cf6fbf12caea739ca4564ca3f",
  "translation_date": "2025-10-21T17:34:37+00:00",
  "source_file": "SECURITY.md",
  "language_code": "my"
}
-->
<!-- BEGIN MICROSOFT SECURITY.MD V0.0.9 BLOCK -->
<!-- markdownlint-disable-next-line MD041 - Justification: Standard Microsoft Template -->
## လုံခြုံရေး

Microsoft သည် ၎င်း၏ software ထုတ်ကုန်များနှင့် ဝန်ဆောင်မှုများ၏ လုံခြုံရေးကို အလေးထားပါသည်။ ၎င်းတွင် GitHub အဖွဲ့အစည်းများမှတဆင့် စီမံခန့်ခွဲထားသော source code repository အားလုံးပါဝင်ပြီး [Microsoft](https://github.com/Microsoft), [Azure](https://github.com/Azure), [DotNet](https://github.com/dotnet), [AspNet](https://github.com/aspnet) နှင့် [Xamarin](https://github.com/xamarin) တို့ပါဝင်ပါသည်။

Microsoft ပိုင်ဆိုင်သော repository များတွင် [Microsoft ရဲ့ security vulnerability အဓိပ္ပါယ်](https://aka.ms/security.md/definition) ကို ဖြည့်ဆည်းသော လုံခြုံရေးအခက်အခဲတစ်ခုကို ရှာဖွေတွေ့ရှိသည်ဟု သင်ယုံကြည်ပါက အောက်တွင် ဖော်ပြထားသောအတိုင်း ကျွန်ုပ်တို့ထံ အကြောင်းကြားပါ။

## လုံခြုံရေးအခက်အခဲများ အကြောင်းကြားခြင်း

**GitHub public issues မှတဆင့် လုံခြုံရေးအခက်အခဲများကို အကြောင်းကြားမထားပါနှင့်။**

အစား Microsoft Security Response Center (MSRC) တွင် [https://msrc.microsoft.com/create-report](https://aka.ms/security.md/msrc/create-report) မှတဆင့် အကြောင်းကြားပါ။

Login မလုပ်ဘဲ တင်သွင်းလိုပါက [secure@microsoft.com](mailto:secure@microsoft.com) သို့ အီးမေးလ်ပို့ပါ။  မက်ဆေ့ကို PGP key ဖြင့် encrypt လုပ်နိုင်ပါက ကျွန်ုပ်တို့၏ [Microsoft Security Response Center PGP Key page](https://aka.ms/security.md/msrc/pgp) မှ download လုပ်ပါ။

သင် ၂၄ နာရီအတွင်း တုံ့ပြန်မှုရရှိရမည်ဖြစ်သည်။ တစ်စုံတစ်ခုကြောင့် မရရှိပါက သင်၏မူရင်းမက်ဆေ့ကို ကျွန်ုပ်တို့ရရှိခဲ့သည်ကို အတည်ပြုရန် အီးမေးလ်ဖြင့် ထပ်မံဆက်သွယ်ပါ။ အပိုဆောင်းအချက်အလက်များကို [microsoft.com/msrc](https://www.microsoft.com/msrc) တွင် ရှာဖွေနိုင်ပါသည်။

အောက်တွင် ဖော်ပြထားသော အချက်အလက်များ (သင်ပေးနိုင်သလောက်) ကို ထည့်သွင်းပါက အခက်အခဲ၏ သဘာဝနှင့် အကျယ်အဝန်းကို ပိုမိုနားလည်နိုင်ရန် ကူညီမည်ဖြစ်သည်-

* အခက်အခဲအမျိုးအစား (ဥပမာ buffer overflow, SQL injection, cross-site scripting, စသည်)
* အခက်အခဲဖြစ်ပေါ်နေသော source file(s) ၏ လမ်းကြောင်းအပြည့်အစုံ
* ထိခိုက်မှုရှိသော source code ၏ တည်နေရာ (tag/branch/commit သို့မဟုတ် direct URL)
* အခက်အခဲကို ပြန်လည်ဖြစ်ပေါ်စေရန် လိုအပ်သော အထူး configuration
* အခက်အခဲကို ပြန်လည်ဖြစ်ပေါ်စေရန် လိုက်နာရမည့် လုပ်ဆောင်မှုအဆင့်များ
* Proof-of-concept သို့မဟုတ် exploit code (ဖြစ်နိုင်ပါက)
* အခက်အခဲ၏ သက်ရောက်မှု၊ အခက်အခဲကို တိုက်ခိုက်သူက ဘယ်လိုအသုံးချနိုင်မည်ဆိုသည်ကို အပါအဝင်

ဤအချက်အလက်များသည် သင်၏ report ကို ပိုမိုလျင်မြန်စွာ စီစစ်နိုင်ရန် ကူညီမည်ဖြစ်သည်။

Bug bounty အတွက် အကြောင်းကြားနေပါက report အပြည့်အစုံဖြစ်ခြင်းသည် ပိုမိုမြင့်မားသော bounty award ရရှိနိုင်ရန် အထောက်အကူဖြစ်နိုင်ပါသည်။ ကျွန်ုပ်တို့၏ [Microsoft Bug Bounty Program](https://aka.ms/security.md/msrc/bounty) စာမျက်နှာတွင် လက်ရှိအစီအစဉ်များအကြောင်း အသေးစိတ်ကို ကြည့်ရှုပါ။

## အကြိုက်ဆုံးဘာသာစကားများ

ကျွန်ုပ်တို့သည် အီးမေးလ်ဆက်သွယ်မှုအားလုံးကို အင်္ဂလိပ်ဘာသာဖြင့် ရေးသားရန် အကြိုက်ဆုံးထားပါသည်။

## မူဝါဒ

Microsoft သည် [Coordinated Vulnerability Disclosure](https://aka.ms/security.md/cvd) ကို လိုက်နာပါသည်။

<!-- END MICROSOFT SECURITY.MD BLOCK -->

---

**အကြောင်းကြားချက်**:  
ဤစာရွက်စာတမ်းကို AI ဘာသာပြန်ဝန်ဆောင်မှု [Co-op Translator](https://github.com/Azure/co-op-translator) ကို အသုံးပြု၍ ဘာသာပြန်ထားပါသည်။ ကျွန်ုပ်တို့သည် တိကျမှုအတွက် ကြိုးစားနေသော်လည်း အလိုအလျောက် ဘာသာပြန်မှုများတွင် အမှားများ သို့မဟုတ် မမှန်ကန်မှုများ ပါဝင်နိုင်သည်ကို သတိပြုပါ။ မူရင်းဘာသာစကားဖြင့် ရေးသားထားသော စာရွက်စာတမ်းကို အာဏာတရ အရင်းအမြစ်အဖြစ် သတ်မှတ်သင့်ပါသည်။ အရေးကြီးသော အချက်အလက်များအတွက် လူက ဘာသာပြန်မှုကို အသုံးပြုရန် အကြံပြုပါသည်။ ဤဘာသာပြန်မှုကို အသုံးပြုခြင်းမှ ဖြစ်ပေါ်လာသော အလွဲအလွတ်များ သို့မဟုတ် အနားယူမှုမှားများအတွက် ကျွန်ုပ်တို့သည် တာဝန်မယူပါ။