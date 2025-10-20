<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "66d1f5ea2cc33dc690a5fc4a8e2a666e",
  "translation_date": "2025-10-20T01:10:13+00:00",
  "source_file": "docs/operative-preview/04-agent-instructions/README.md",
  "language_code": "vi"
}
-->
# 🕵️‍♂️ Nhiệm vụ 04: Soạn thảo Hướng dẫn cho Tác nhân

--8<-- "disclaimer.md"

## 🕵️‍♂️ MẬT DANH: `CHIẾN DỊCH CHỈ THỊ BÍ MẬT`

> **⏱️ Thời gian thực hiện chiến dịch:** `~45 phút`

## 🎯 Tóm tắt nhiệm vụ

Đặc vụ, nhiệm vụ tiếp theo của bạn là **Chiến dịch Chỉ Thị Bí Mật** - làm chủ nghệ thuật giao tiếp và kiểm soát tác nhân thông qua các hướng dẫn và mô tả chính xác.

Nhiệm vụ của bạn, nếu bạn chấp nhận, là học các kỹ năng quan trọng để viết các hướng dẫn rõ ràng, có thể hành động, giúp các tác nhân của bạn đưa ra quyết định thông minh, sử dụng đúng công cụ và nguồn kiến thức, và hợp tác một cách liền mạch với các tác nhân khác. Bạn cũng sẽ làm chủ việc soạn thảo các mô tả chất lượng cao giúp các tác nhân hiểu rõ tài nguyên của họ và phản hồi với độ chính xác cao đối với các truy vấn của người dùng.

Hãy coi đây là khóa đào tạo nâng cao về tâm lý học và điều chỉnh hành vi của tác nhân. Cũng như một đặc vụ thực địa cần các thông số nhiệm vụ rõ ràng để thành công, các tác nhân AI của bạn cần các hướng dẫn được soạn thảo chuyên nghiệp để hành động với sự rõ ràng, chính xác và cung cấp thông tin giá trị trong các tình huống thực tế.

---

## 🔎 Mục tiêu

Hoàn thành nhiệm vụ này, bạn sẽ:

- **Làm chủ hướng dẫn**: Hiểu nghệ thuật và khoa học viết hướng dẫn cho tác nhân trong Copilot Studio  
- **Hướng dẫn chiến lược**: Học cách chỉ đạo tác nhân sử dụng công cụ, nguồn kiến thức, và hợp tác với các tác nhân khác  
- **Rõ ràng trong hoạt động**: Đảm bảo các tác nhân hành động với sự chính xác, minh bạch và hiệu quả  

---

## 📝 Viết Hướng dẫn cho Tác nhân

Viết hướng dẫn hiệu quả cho tác nhân là chìa khóa để đảm bảo hành vi của tác nhân thành công. Hướng dẫn được sử dụng bởi các tác nhân để:

- Quyết định công cụ, chủ đề, hoặc nguồn kiến thức nào cần sử dụng cho một truy vấn của người dùng hoặc kích hoạt tự động  
- Điền thông tin đầu vào cho bất kỳ công cụ nào dựa trên ngữ cảnh có sẵn  
- Tạo phản hồi cho người dùng cuối  

### Cách Hướng dẫn Hoạt động

Hướng dẫn phải dựa trên các công cụ, chủ đề, và nguồn kiến thức được cấu hình cho tác nhân của bạn. Tác nhân không thể thực hiện các hướng dẫn liên quan đến các tài nguyên mà họ không có. Ví dụ, nếu bạn hướng dẫn tác nhân tìm kiếm trong phần Câu hỏi thường gặp của một trang web, bạn phải thêm phần Câu hỏi thường gặp đó làm nguồn kiến thức.

Bạn có thể tham chiếu các công cụ, chủ đề, biến, hoặc biểu thức Power Fx cụ thể bằng cách sử dụng `/` trong hướng dẫn của mình. Điều này giúp tác nhân biết chính xác cần sử dụng gì và khi nào.

### Những gì cần bao gồm trong Hướng dẫn

- Thêm hướng dẫn cho các trường hợp bạn muốn hướng dẫn lựa chọn của tác nhân, đặc biệt khi có thể xảy ra sự mơ hồ.  
- Sử dụng hướng dẫn để đặt ra các giới hạn, chẳng hạn như hạn chế chủ đề hoặc chỉ định định dạng phản hồi.  
- Đưa ra gợi ý để điền thông tin đầu vào cho công cụ, ví dụ: "Sử dụng địa chỉ email từ trường liên hệ của khách hàng tiềm năng khi giúp người dùng soạn thảo email."  
- Chỉ định cách phản hồi nên được định dạng, ví dụ: "Luôn đưa ra phản hồi về trạng thái đơn hàng dưới dạng bảng."  
- Sử dụng các ràng buộc để giới hạn hành động của tác nhân, ví dụ: "Chỉ phản hồi các yêu cầu liên quan đến quyền lợi nhân viên."  

### Ví dụ Thực tế

- "Chỉ sử dụng tài liệu Câu hỏi thường gặp nếu câu hỏi không liên quan đến Giờ làm việc, Cuộc hẹn, hoặc Thanh toán."  
- "Chỉ sử dụng chủ đề tạo vé để tạo vé; đối với các yêu cầu khác liên quan đến sửa lỗi, sử dụng chủ đề khắc phục sự cố."  
- "Luôn đưa ra phản hồi về trạng thái đơn hàng dưới dạng bảng."  

### Kiểm tra và Tinh chỉnh

- Sau khi chỉnh sửa hướng dẫn, sử dụng bảng kiểm tra để xác thực hành vi của tác nhân.  
- Cập nhật và xuất bản các thay đổi khi cần thiết.  

### Hướng dẫn Nâng cao

- Đánh số hoặc liệt kê các hướng dẫn của bạn và chỉ định rằng chúng phải được tuân theo theo thứ tự.  
- Sử dụng định dạng markdown để dễ đọc và giúp AI tạo nội dung từ hướng dẫn của bạn.  
- Nếu bạn muốn tác nhân của mình rất cụ thể, hãy cân nhắc tạo một chủ đề cho trường hợp sử dụng đó.  
- Sử dụng tên chính xác cho các công cụ và chủ đề trong hướng dẫn để tránh nhầm lẫn.  

### An toàn và Kiểm duyệt

- Hạn chế công cụ mà tác nhân nên sử dụng khi tham chiếu nguồn kiến thức.  
- Hạn chế các tham số nên được sử dụng cho công cụ (ví dụ: chỉ gửi email cho danh sách cá nhân được chỉ định).  
- Sử dụng hướng dẫn để bảo vệ chống lại hành vi không mong muốn hoặc các vấn đề lọc nội dung.  

---

## ✍️ Soạn thảo Mô tả cho Công cụ, Chủ đề, và Tác nhân

Mô tả chất lượng cao là yếu tố thiết yếu cho sự phối hợp tạo nội dung. Tác nhân của bạn sử dụng các mô tả này để chọn đúng công cụ, chủ đề, và tác nhân để phản hồi các truy vấn và kích hoạt của người dùng. Hãy tuân theo các thực hành tốt nhất sau:

- **Sử dụng ngôn ngữ đơn giản, trực tiếp**: Tránh thuật ngữ chuyên ngành, tiếng lóng, hoặc các thuật ngữ kỹ thuật quá mức. Viết bằng giọng chủ động và thì hiện tại.  
- **Cụ thể và liên quan**: Bao gồm các từ khóa liên quan đến chức năng và ý định của người dùng. Đảm bảo mô tả phân biệt rõ ràng các công cụ hoặc chủ đề tương tự để tránh nhầm lẫn.  
- **Ngắn gọn và thông tin**: Giới hạn mô tả trong một hoặc hai câu. Tóm tắt những gì công cụ, chủ đề, hoặc tác nhân làm và lợi ích của nó đối với người dùng.  
- **Sử dụng tên độc đáo, mô tả**: Tránh các tên chung chung. Ví dụ, sử dụng "Dự báo thời tiết cho ngày mai" thay vì chỉ "Thời tiết".  
- **Liệt kê các hành động hoặc cân nhắc**: Sử dụng danh sách gạch đầu dòng hoặc đánh số để rõ ràng khi mô tả nhiều tính năng hoặc bước.  
- **Kiểm tra sự trùng lặp**: Nếu nhiều chủ đề có mô tả tương tự, tác nhân của bạn có thể gọi tất cả chúng. Kiểm tra và chỉnh sửa để tránh trùng lặp.  

!!! example "Ví dụ Mô tả Tốt và Kém"
    **Tốt:** Chủ đề này cung cấp thông tin thời tiết cho bất kỳ địa điểm nào trên thế giới vào ngày hôm sau. Nó cung cấp nhiệt độ. Nó không lấy thông tin thời tiết hiện tại của hôm nay.  
    **Kém:** Công cụ này có thể trả lời câu hỏi. *(Quá mơ hồ)*  

---

## 🛠️ Thực hành Tốt nhất cho Hướng dẫn và Mô tả

Để làm cho hướng dẫn và mô tả của bạn thực sự hiệu quả, hãy ghi nhớ các nguyên tắc sau:

- Sử dụng giọng chủ động và thì hiện tại (ví dụ: "Công cụ này cung cấp thông tin thời tiết").  
- Tránh thuật ngữ chuyên ngành, tiếng lóng, hoặc các thuật ngữ kỹ thuật không cần thiết trừ khi cần thiết cho đối tượng.  
- Sử dụng danh sách gạch đầu dòng hoặc đánh số để phân tách các hành động, tính năng, hoặc cân nhắc.  
- Bao gồm các từ khóa phù hợp với ý định của người dùng và chức năng của công cụ hoặc chủ đề.  
- Đảm bảo tên và mô tả rõ ràng, khác biệt cho các tài nguyên tương tự để tránh nhầm lẫn và trùng lặp.  

---

## 🗂️ Cấu trúc Ví dụ cho Hướng dẫn

Khi viết hướng dẫn, hãy cân nhắc cấu trúc sau để đảm bảo rõ ràng và đầy đủ:

1. **Tổng quan**: Mô tả ngắn gọn về nhiệm vụ và vai trò của tác nhân  
1. **Các bước quy trình**: Liệt kê các bước chính mà tác nhân nên thực hiện  
1. **Điểm hợp tác**: Chỉ định khi nào cần gọi các tác nhân khác hoặc sử dụng công cụ cụ thể  
1. **An toàn và Kiểm duyệt**: Bao gồm bất kỳ yêu cầu tuân thủ hoặc an toàn nào  
1. **Vòng phản hồi**: Chỉ định cách tác nhân nên thu thập phản hồi hoặc nâng cấp vấn đề  

---

## 🧪 Phòng thí nghiệm: Soạn thảo Hướng dẫn cho Tác nhân

*Nội dung phòng thí nghiệm sẽ sớm được cập nhật...*

---

## 🎉 Hoàn thành Nhiệm vụ

Nhiệm vụ 04 đã hoàn thành! Bạn đã:

✅ **Làm chủ hướng dẫn**: Học cách viết hướng dẫn rõ ràng, có thể hành động cho tác nhân  
✅ **Hướng dẫn chiến lược**: Chỉ đạo tác nhân sử dụng công cụ và hợp tác hiệu quả  
✅ **Rõ ràng trong hoạt động**: Đảm bảo tác nhân hành động với sự chính xác và minh bạch  

Tiếp theo là [Nhiệm vụ 05](../05-agent-responses/README.md): Tùy chỉnh phản hồi của tác nhân để đạt hiệu quả tối đa.

---

## 📚 Tài nguyên Chiến thuật

📖 [Microsoft Copilot Studio - Soạn thảo Hướng dẫn](https://learn.microsoft.com/microsoft-copilot-studio/authoring-instructions)  
📖 [Hướng dẫn cho Chế độ Tạo nội dung](https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance)  

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.