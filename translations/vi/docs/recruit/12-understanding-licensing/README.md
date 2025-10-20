<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "6f05e50f132514dcd264bd48fae3f1ef",
  "translation_date": "2025-10-20T00:49:41+00:00",
  "source_file": "docs/recruit/12-understanding-licensing/README.md",
  "language_code": "vi"
}
-->
# 🚨 Nhiệm vụ 12: Hiểu về Giấy phép

## 🕵️‍♂️ MẬT DANH: `CHIẾN DỊCH HIỂU RÕ NGHĨA VỤ`

> **⏱️ Thời gian thực hiện chiến dịch:** `~15 phút`

## 🎯 Tóm tắt nhiệm vụ

Chào mừng, Tân binh. Trước khi triển khai các tác nhân của bạn ra thực địa, bạn cần biết **cách đo lường, cấp phép và tính phí sử dụng**. Nhiệm vụ này sẽ giải thích mô hình tính phí dựa trên tin nhắn, những gì giấy phép Microsoft 365 Copilot bao gồm, và cách bạn lập kế hoạch với công cụ ước tính.

---

## 🎯 Mục tiêu: Hiểu rõ Mô hình Dựa trên Tin nhắn

Copilot Studio không tính phí theo người dùng hoặc tính năng—mà tính phí dựa trên **số lượng tin nhắn mà các tác nhân của bạn sử dụng**. Một “tin nhắn” là một tương tác giữa tác nhân của bạn và người dùng (hoặc hệ thống).

- 💬 Mỗi tương tác của người dùng với tác nhân của bạn được tính là ít nhất **1 tin nhắn**
- 🔄 Tương tác phức tạp (như grounding, AI tạo nội dung, hoặc flows) tiêu thụ **nhiều tin nhắn**
- 💼 Bạn thanh toán cho tin nhắn thông qua **gói trả trước** hoặc **trả sau theo mức sử dụng (PAYGO)**

---

## Các tùy chọn cấp phép

### 1. **Gói Tin nhắn Copilot Studio**

- Trả trước: **25,000 tin nhắn/tháng với giá $200**
- Phù hợp với mức sử dụng dự đoán được — dung lượng được chia sẻ trong toàn bộ tenant

### 2. **Trả Sau Theo Mức Sử Dụng (PAYGO)**

- Trả sau: **$0.01 mỗi tin nhắn**
- Không cần cam kết trước; mức sử dụng được tính phí vào cuối tháng qua Azure

---

## Nếu bạn có Giấy phép M365 Copilot?

Nếu đội của bạn có **giấy phép Microsoft 365 Copilot**, các tác nhân của bạn **có thể hoạt động mà không cần thêm chi phí cho các kịch bản chính**:

- Câu trả lời cơ bản, phản hồi tạo nội dung, tin nhắn dựa trên graph, và các hành động cơ bản của tác nhân được **miễn phí** cho người dùng M365 Copilot đã xác thực trong các ứng dụng như Teams và Outlook  
- Tuy nhiên: nếu bạn kích hoạt các tính năng nâng cao như triggers tự động, flows của tác nhân vượt quá các hành động cơ bản, hoặc sử dụng các kênh/API bên ngoài, những điều này sẽ **tiêu thụ tin nhắn tính phí**

| Kịch bản                                    | Tin nhắn bổ sung bị tính phí?                |
|---------------------------------------------|----------------------------------------------|
| Người dùng M365 Copilot hỏi tác nhân trong Teams | ❌ Không bị tính phí                          |
| Tác nhân gọi API hoặc flow bên ngoài        | ✅ Bị tính phí (5 + tin nhắn)                 |
| Tác nhân sử dụng trigger tự động hoặc grounding | ✅ Bị tính phí                                |

---

## 🧮 Lập kế hoạch chính xác: Sử dụng Công cụ Ước tính

Trước khi triển khai tác nhân của bạn, hãy sử dụng **Công cụ Ước tính Sử dụng Copilot Studio** để dự đoán mức tiêu thụ tin nhắn trong các kịch bản thực tế:

[👉 Sử dụng Công cụ Ước tính Sử dụng Copilot Studio](https://aka.ms/mcs-estimator){ .md-button .md-button--primary }

Công cụ này cho phép bạn:

- 🔢 Xác định **số lượng người dùng**
- ⚙️ Chọn **các tính năng của tác nhân** (grounding, actions, flows, memory)
- 📈 Ước tính **tổng số tin nhắn mỗi tác nhân mỗi tháng**
- 🧠 Tối ưu hóa thiết kế và tránh những bất ngờ về chi phí

!!! tip
    ✅ Sử dụng công cụ này sớm — và sau khi xây dựng — để so sánh mức sử dụng dự kiến và thực tế.

---

## 💼 Kịch bản mẫu

**Môi trường**: Tác nhân hỗ trợ IT với grounding + một flow Power Automate  
**Phiên làm việc**: 5 lượt tương tác của người dùng mỗi phiên  
**Giả định**: grounding (10 tin nhắn) + hành động (5 tin nhắn) + 5 phản hồi tạo nội dung (10 tin nhắn)  
**Tổng cộng**: ~25 tin nhắn mỗi phiên  
**Quy mô**: 500 phiên/tháng = ~12,500 tin nhắn (½ gói tin nhắn)

---

## 🧠 Mẹo chuyên nghiệp để kiểm soát chi phí

- Theo dõi mức sử dụng qua Power Platform Admin Center
- Bắt đầu trong môi trường phát triển/thử nghiệm trước khi triển khai chính thức
- Tắt các hành động và kết nối không sử dụng
- Sử dụng **giấy phép Microsoft 365 Copilot** khi có thể cho mục đích nội bộ
- Sử dụng gói tin nhắn khi mức sử dụng trở nên ổn định
- Sử dụng **Công cụ Ước tính Sử dụng Copilot Studio** để dự đoán mức sử dụng

---

## 🏁 Hoàn thành nhiệm vụ

Bạn đã hiểu:

- Cách tính toán và tính phí mức sử dụng
- Khi nào M365 Copilot bao phủ mức sử dụng — và khi nào không
- Cách dự đoán và quản lý mức tiêu thụ tin nhắn

🎓 Với kiến thức này, bạn đã sẵn sàng tiến lên và triển khai các tác nhân của mình **một cách hiệu quả và thông minh**

---

## 📚 Tài nguyên chiến thuật

Tìm hiểu thêm về cấp phép và tính phí trong Copilot Studio

- 📄 [Cấp phép & Mức phí Tin nhắn của Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing?WT.mc_id=power-170631-apdunnam)
- 📘 [Hướng dẫn Cấp phép Power Platform (Tháng 7 năm 2025)](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp//microsoft/bade/documents/products-and-services/en-us/bizapps/Power-Platform-Licensing-Guide-July-2025.pdf?WT.mc_id=power-170631-apdunnam)
- 📊 [Quản lý Tin nhắn & Giám sát Dung lượng](https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-messages-capacity?WT.mc_id=power-170631-apdunnam)

<!-- markdownlint-disable-next-line MD033 -->
<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/12-understanding-licensing" alt="Phân tích" />

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.