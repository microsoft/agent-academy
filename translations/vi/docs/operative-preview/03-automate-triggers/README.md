<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "75efaf515d5694d4fd549bfd6518901a",
  "translation_date": "2025-10-20T01:11:21+00:00",
  "source_file": "docs/operative-preview/03-automate-triggers/README.md",
  "language_code": "vi"
}
-->
# Nhiệm vụ 03: Thêm Trình Kích Hoạt Sự Kiện để hoạt động tự động

--8<-- "disclaimer.md"

## 🕵️‍♂️ MẬT DANH: `CHIẾN DỊCH ĐIỂM TÍN HIỆU`

> **⏱️ Thời gian thực hiện chiến dịch:** `~45 phút`

## 🎯 Tóm tắt nhiệm vụ

Chào mừng trở lại, Đặc vụ. Trong [Nhiệm vụ 02](../02-multi-agent/README.md) - bạn đã học cách xây dựng một tác nhân con Tiếp nhận Hồ sơ và một tác nhân Kết nối Chuẩn bị Phỏng vấn để mở rộng khả năng của Tác nhân Tuyển dụng chính.

Nhiệm vụ của bạn, nếu bạn chọn thực hiện, là **Chiến dịch Điểm Tín Hiệu** - đi sâu vào **trình kích hoạt sự kiện** - nâng cấp hệ thống tác nhân của bạn từ phản ứng sang **hoạt động tự động**. Bạn sẽ biến các tác nhân của mình từ việc chờ đợi đầu vào của con người sang chủ động phản hồi các sự kiện bên ngoài và thực hiện hành động thông minh mà không cần giám sát.

Hãy nghĩ về điều này như việc nâng cấp từ các tác nhân _trả lời câu hỏi_ sang các tác nhân _dự đoán nhu cầu_ và _hành động độc lập_. Thông qua trình kích hoạt sự kiện và quy trình làm việc tự động, Tác nhân Tuyển dụng của bạn sẽ phát hiện email hồ sơ đến, xử lý tệp đính kèm tự động, lưu dữ liệu vào Dataverse và thông báo cho nhóm tuyển dụng nhân sự của bạn qua Microsoft Teams - tất cả trong khi bạn tập trung vào các nhiệm vụ có giá trị cao hơn.

Chào mừng bạn đến với thế giới nơi tự động hóa gặp gỡ trí tuệ.

## 🔎 Mục tiêu

Trong nhiệm vụ này, bạn sẽ học:

1. Cách trình kích hoạt sự kiện cho phép hành vi tự động của tác nhân mà không cần tương tác của người dùng
1. Sự khác biệt giữa tác nhân tương tác và tác nhân tự động trong Copilot Studio
1. Cách tạo trình kích hoạt sự kiện để tự động xử lý tệp đính kèm email và tải tệp lên Dataverse
1. Cách xây dựng luồng tác nhân đăng thẻ thích ứng lên các kênh Teams để thông báo
1. Cách truyền dữ liệu giữa trình kích hoạt sự kiện và luồng tác nhân để tự động hóa từ đầu đến cuối

## 🤔 Trình kích hoạt sự kiện là gì?

Trước đây trong [Recruit](../../recruit/10-add-event-triggers/README.md), chúng ta đã học về trình kích hoạt sự kiện. Hãy cùng ôn lại nhanh điều này trong trường hợp bạn đã bỏ lỡ.

**Trình kích hoạt sự kiện** cho phép một tác nhân _hành động_ tự động khi có điều gì đó xảy ra trong hệ thống khác - không cần tin nhắn từ người dùng. Khi sự kiện được cấu hình xảy ra - chẳng hạn như “mục mới trong SharePoint,” “email mới,” “nhiệm vụ Planner được giao,” hoặc thậm chí là sự kiện lặp lại theo thời gian, một trình kết nối sẽ gửi một tải trọng kích hoạt đến tác nhân của bạn. Sau đó, tác nhân sẽ làm theo hướng dẫn của bạn để quyết định hành động hoặc chủ đề nào cần gọi.

### Đặc điểm chính

- **Kích hoạt tự động:**
      - Không giống như trình kích hoạt chủ đề bắt đầu khi người dùng nhập vào tác nhân, trình kích hoạt sự kiện được kích hoạt từ các sự kiện bên ngoài, cho phép hành vi chủ động.

- **Dựa trên tải trọng:**
      - Mỗi sự kiện cung cấp một tải trọng (biến + hướng dẫn tùy chọn) thông qua trình kết nối. Tác nhân sử dụng hướng dẫn bạn đã định nghĩa và tải trọng để chọn hành động tiếp theo.
      - Ví dụ _gọi một chủ đề_ hoặc _thực hiện các hành động được định nghĩa bởi Công cụ_.

- **Ví dụ có sẵn:**
      - Tệp hoặc mục được tạo trong SharePoint/OneDrive
      - Nhiệm vụ Planner được hoàn thành/được giao
      - Phản hồi Microsoft Forms được gửi
      - Lặp lại/lịch trình

    Tính khả dụng phụ thuộc vào chính sách dữ liệu của tổ chức bạn được cấu hình trong Power Automate.

- **Yêu cầu điều phối sinh tạo:**
      - Trình kích hoạt sự kiện chỉ khả dụng khi điều phối sinh tạo được kích hoạt cho tác nhân.

- **Chi phí/sử dụng:**
      - Mỗi lần kích hoạt được tính là một tin nhắn trong dung lượng của Copilot Studio.
      - Ví dụ, một sự kiện lặp lại 10 phút sẽ gửi một tin nhắn mỗi 10 phút.

- **Mô hình xác thực và thiết lập:**
      - Bạn thêm trình kích hoạt trong phần Tổng quan của tác nhân, dưới _Triggers_. Xác thực cho trình kết nối kích hoạt sử dụng tài khoản của người tạo tác nhân (“xác thực người tạo tác nhân”).
      - Bạn có thể chỉnh sửa các tham số và tải trọng của trình kích hoạt trong cổng tạo Power Automate.

- **Kiểm tra & quan sát:**
      - Bạn có thể kiểm tra trình kích hoạt từ bảng kiểm tra của tác nhân và kiểm tra hành vi với bản đồ hoạt động trước khi xuất bản.

!!! info "Tóm tắt nhanh cho nhà phát triển"

    Hãy nghĩ về trình kích hoạt sự kiện như **tín hiệu giống webhook** đẩy một tải trọng có cấu trúc vào tác nhân của bạn, cho phép nó _khởi động_ công việc và chuỗi hành động qua các hệ thống - mà không cần chờ người dùng yêu cầu.

### Trình kích hoạt chủ đề - sự khác biệt

Trước đây bạn đã học về trình kích hoạt chủ đề trong [Recruit](../../recruit/07-add-new-topic-with-trigger/README.md), tuy nhiên bạn có thể vẫn đang tự hỏi sự khác biệt giữa trình kích hoạt _chủ đề_ và trình kích hoạt _sự kiện_, và tại sao sự khác biệt này lại quan trọng để hiểu điều gì làm cho một tác nhân tự động.

Trình kích hoạt chủ đề kiểm soát _khi nào một chủ đề chạy_, thường là để phản hồi tin nhắn của người dùng.

- Trong điều phối sinh tạo, trình kích hoạt mặc định là **By agent** - trình lập kế hoạch chọn một chủ đề có tên/mô tả phù hợp nhất với tin nhắn của người dùng.
- Trong điều phối cổ điển, trình kích hoạt mặc định là **Phrases** - trình lập kế hoạch chọn một chủ đề khi một hoặc nhiều cụm từ kích hoạt phù hợp nhất với tin nhắn của người dùng.

Các loại trình kích hoạt khác bao gồm `Message received`, `Event received`, `Activity received`, `Conversation update`, `Invoke received`, `On redirect`, `Inactivity`, và `Plan complete`.

!!! info "Sự khác biệt cốt lõi"

    Trình kích hoạt chủ đề là _hoạt động hội thoại_ bắt đầu bên trong cuộc trò chuyện.
    
    Trình kích hoạt sự kiện là _sự kiện hệ thống_ bắt đầu được gửi qua các trình kết nối có thể chạy tác nhân mà không cần bất kỳ cuộc trò chuyện nào.

### Hướng dẫn nhanh về Trình kích hoạt chủ đề vs Trình kích hoạt sự kiện

- **Trình kích hoạt chủ đề:** Người dùng (hoặc hoạt động trò chuyện) nói/làm X ➡️ chạy Chủ đề T.
- **Trình kích hoạt sự kiện:** SharePoint/Planner/Email/Timer kích hoạt với tải trọng P ➡️ tác nhân đánh giá hướng dẫn ➡️ gọi Hành động/Chủ đề tương ứng.

## 🏓 Tác nhân tương tác vs Tác nhân tự động - so sánh

Bây giờ bạn đã biết sự khác biệt giữa trình kích hoạt sự kiện và trình kích hoạt chủ đề, hãy tiếp tục tìm hiểu sự khác biệt giữa tác nhân tương tác và tác nhân tự động.

Trong Copilot Studio, "tương tác" ám chỉ các tác nhân chủ yếu hoạt động qua **chủ đề** trong cuộc trò chuyện hoặc kênh. "Tự động" ám chỉ các tác nhân cũng sử dụng **trình kích hoạt sự kiện** để hoạt động mà không cần đầu vào của người dùng.

Bảng sau đây tóm tắt sự khác biệt và điểm tương đồng của chúng.

| Khía cạnh                           | Tác nhân tương tác     | Tác nhân tự động                                                                                              |
|-------------------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| Cách bắt đầu                        | Người dùng (hoặc hoạt động trò chuyện) kích hoạt một chủ đề. Ví dụ: By agent, Phrases, Message received.   | Trình kích hoạt sự kiện gửi tải trọng qua trình kết nối đến tác nhân. Ví dụ: SharePoint, Planner, email, lịch trình, v.v. |
| Sử dụng chính                       | Hỏi đáp, quy trình hướng dẫn, hành động theo yêu cầu trong trò chuyện - Teams, web, v.v.  | Hoạt động chủ động và tự động hóa nền - phản ứng với thay đổi hệ thống và sau đó thông báo, lưu trữ, hoặc điều phối nhiệm vụ. |
| Bề mặt kích hoạt                    | Trình kích hoạt chủ đề: By agent / Phrases / Message received / Activity types / Invoke / Inactivity / Plan complete | Thư viện trình kích hoạt sự kiện qua các trình kết nối; tải trọng bao gồm dữ liệu sự kiện + hướng dẫn tùy chọn. |
| Trình lập kế hoạch (điều phối sinh tạo) | Được sử dụng mạnh mẽ cho các trình kích hoạt By agent và Plan complete để chọn/chuỗi chủ đề. | Yêu cầu cho trình kích hoạt sự kiện; tác nhân sử dụng hướng dẫn + tải trọng để quyết định hành động/chủ đề nào cần gọi. |
| Ví dụ điển hình                     | Người dùng hỏi "Chính sách hoàn tiền của chúng tôi là gì?" → Chủ đề chạy, truy vấn kiến thức, phản hồi. | Nhiệm vụ Planner mới được giao → Trình kích hoạt sự kiện kích hoạt → Tác nhân đăng tin nhắn Teams, cập nhật bản ghi, hoặc gọi một chủ đề. |
| Đường dẫn thiết lập                 | Tạo chủ đề, định nghĩa loại trình kích hoạt, tạo hội thoại/hành động; xuất bản lên các kênh. | Thêm trình kích hoạt sự kiện (Overview → Triggers), xác thực trình kết nối với thông tin đăng nhập của người tạo tác nhân, cấu hình tải trọng/hướng dẫn; kiểm tra qua bảng kiểm tra; xuất bản. |
| Xác thực và quản lý                 | Chạy dưới ngữ cảnh kênh/xác thực; trình kích hoạt chủ đề phản hồi các hoạt động trò chuyện trong các kênh được phép. | Tính khả dụng của trình kích hoạt phụ thuộc vào chính sách dữ liệu Power Automate; trình kết nối chạy dưới tài khoản của người tạo tác nhân. |
| Quan sát                            | Kiểm tra chủ đề trong Copilot Studio, kiểm tra bản ghi hội thoại/hoạt động. | Sử dụng Test trigger và bản đồ hoạt động để xác nhận thực thi trước khi xuất bản, giám sát hoạt động sau khi xuất bản. |
| Tác động dung lượng                 | Mỗi tin nhắn của người dùng/phản hồi của tác nhân là một tin nhắn tiêu thụ dung lượng. | Mỗi lần kích hoạt sự kiện cũng là một tin nhắn, cộng với bất kỳ hành động tiếp theo nào. Ví dụ: một sự kiện lặp lại 10 phút = 6 tin nhắn/giờ |

### Khi nào sử dụng loại nào?

- Chọn **trình kích hoạt chủ đề (tương tác)** khi người dùng khởi động cuộc trò chuyện với tác nhân - FAQ, tiếp nhận hướng dẫn, hoặc nhiệm vụ kiểu lệnh trong trò chuyện. Trình kích hoạt By agent của trình lập kế hoạch giảm việc tạo cụm từ thủ công.
- Thêm **trình kích hoạt sự kiện (tự động)** khi tác nhân nên bắt đầu cuộc trò chuyện hoặc tự thực hiện hành động - khi có cập nhật trong SharePoint/Dataverse, email đến, hoặc theo lịch trình. Điều này chuyển bạn từ hoạt động phản ứng sang hoạt động chủ động.

## Mẹo & lưu ý cho nhà phát triển

1. **Kích hoạt điều phối sinh tạo** cho bất kỳ tác nhân nào bạn muốn làm tự động. Trình kích hoạt sự kiện sẽ không xuất hiện nếu không có điều này.

1. **Mô hình hóa tải trọng sớm.** Quyết định các trường tối thiểu mà tác nhân của bạn cần từ trình kích hoạt như `itemId`, `assignedTo`, `dueDate` và thêm hướng dẫn ngắn gọn để chỉ cho tác nhân hành động/chủ đề nào cần gọi dựa trên giá trị tải trọng.

1. **Phạm vi xác thực quan trọng.** Trình kích hoạt xác thực bằng tài khoản của người tạo tác nhân. Đảm bảo tài khoản đó có quyền trình kết nối phù hợp và tuân thủ chính sách dữ liệu Power Automate.

1. **Kiểm soát chi phí và tiếng ồn.** Các sự kiện lặp lại tần suất cao hoặc nguồn quá nhiều tin nhắn có thể tiêu thụ dung lượng nhanh chóng - điều chỉnh nếu có thể hoặc thêm điều kiện trong trình kích hoạt để lọc sự kiện.

1. **Kiểm tra trước khi xuất bản.** Sử dụng **Test trigger** và bản đồ hoạt động để theo dõi kế hoạch và các hành động được gọi - lặp lại hướng dẫn/tải trọng cho đến khi hành vi ổn định.

## 🧪 Phòng thí nghiệm 03 - Tự động hóa email ứng tuyển của ứng viên

Tiếp theo, chúng ta sẽ thêm một trình kích hoạt sự kiện vào **Tác nhân Tuyển dụng** và xây dựng một luồng tác nhân trong **Tác nhân Tiếp nhận Hồ sơ** con để xử lý thêm cho tính tự động.

### ✨ Kịch bản sử dụng

!!! info ""

    **Là một** Nhân viên Tuyển dụng Nhân sự

    **Tôi muốn** được thông báo khi một email với hồ sơ ứng tuyển đến hộp thư của tôi và được tự động tải lên Dataverse

    **Để tôi có thể** luôn được thông báo về các hồ sơ gửi qua email cho các ứng tuyển được tự động tải lên Dataverse

Chúng ta sẽ đạt được điều này bằng hai kỹ thuật

1. Một trình kích hoạt sự kiện khi email đến,
    1. Kiểm tra `contentType` của tệp bằng `PDF` làm loại định dạng.
    1. Trích xuất tệp và tải lên Dataverse bằng các hành động thông qua trình kết nối Dataverse.
    1. Sau đó gửi một lời nhắc đến tác nhân để xử lý thêm bằng cách truyền các tham số đầu vào từ các hành động Dataverse.

1. Một luồng tác nhân sẽ được thêm vào **Tác nhân Tiếp nhận Hồ sơ** con được gọi bởi lời nhắc trong trình kích hoạt sự kiện.
    1. Sử dụng các tham số đầu vào được truyền từ lời nhắc của trình kích hoạt sự kiện trong một thẻ thích ứng được đăng lên một kênh trong Microsoft Teams để thông báo cho nhóm Tuyển dụng Nhân sự. Thẻ thích ứng sẽ có liên kết đến hàng trong Dataverse sẽ được xem trong **Tác nhân Tuyển dụng**.

Hãy bắt đầu!

### ✨ Điều kiện tiên quyết để hoàn thành nhiệm vụ này

Bạn cần **một trong hai**:

- **Hoàn thành Nhiệm vụ 01 và Nhiệm vụ 02** và có Tác nhân Tuyển dụng sẵn sàng, **HOẶC**
- **Nhập giải pháp khởi đầu Nhiệm vụ 03** nếu bạn bắt đầu từ đầu hoặc cần bắt kịp. [Tải xuống Giải pháp Khởi đầu Nhiệm vụ 03](https://aka.ms/agent-academy)

!!! note "Nhập giải pháp và dữ liệu mẫu"
    Nếu bạn sử dụng giải pháp khởi đầu, hãy tham khảo [Nhiệm vụ 01](../01-get-started/README.md) để biết hướng dẫn chi tiết về cách nhập giải pháp và dữ liệu mẫu vào môi trường của bạn.

Bạn cũng cần quyền truy cập vào **Microsoft Teams** để hoàn thành bài tập phòng thí nghiệm thứ hai về việc đăng thẻ thích ứng lên Microsoft Teams.

### Phòng thí nghiệm 3.1 - Tự động tải hồ sơ lên Dataverse nhận qua email

1. Trong Tác nhân Tuyển dụng, cuộn xuống trong **tab Tổng quan** và chọn **+ Thêm trình kích hoạt**.

       ![Thêm trình kích hoạt vào tác nhân](../../../../../translated_images/3.1_01_AddTrigger.4d5f4d13a4a6b19fe9ff89e3a483601199d7643236d6df65ff81dfea76d1d443.vi.png)

1. Một danh sách các trình kích hoạt sẽ xuất hiện. Chọn **Khi một email mới đến (V3)** và chọn **Tiếp theo**.

       ![Chọn trình kích hoạt Khi một email mới đến (V3)](../../../../../translated_images/3.1_02_WhenANewEmailArrives.a250875915165d97c1af6eebba70f16fbfc845a37d4d354c9f35a55aa459035e.vi.png)

1. Bây giờ chúng ta sẽ thấy **Tên trình kích hoạt** và các tham chiếu kết nối **Đăng nhập** cho các ứng dụng được liệt kê.

       Đổi tên trình kích hoạt thành,
    
       ```text
       Khi một email mới đến từ ứng viên
       ```

       Đảm bảo bạn thấy dấu kiểm màu xanh lá cây bên cạnh mỗi tham chiếu kết nối của các ứng dụng được liệt kê. Nếu bạn không thấy dấu kiểm màu xanh lá cây, hãy đăng nhập qua dấu ba chấm (...) và chọn **+ Tham chiếu kết nối mới** để tạo một tham chiếu kết nối mới.

       ![Cập nhật chi tiết cho tên trình kích hoạt và kiểm tra tham chiếu kết nối](../../../../../translated_images/3.1_03_RenameTriggerName.3eb80b25bea5f874a51aab600ffd333359de3a981e41eed1b4fc7c8f27eef323.vi.png)

1. Bước cuối cùng là thiết lập các thuộc tính đầu vào của trình kích hoạt. Cập nhật các thuộc tính sau đây như sau,

     | Thuộc tính | Cách thiết lập | Chi tiết |
     |------------|----------------|----------|
     | **Bao gồm tệp đính kèm (Tùy chọn)** | Dropdown | Có |
     | **Bộ lọc tiêu đề (Tùy chọn)** | Nhập bằng bàn phím | Application |
     | **Chỉ với tệp đính kèm (Tùy chọn)** | Dropdown | Có |

       Chọn **Tạo trình kích hoạt**.

       ![Cấu hình đầu vào trình kích hoạt](../../../../../translated_images/3.1_04_ConfigureTriggerInputs.2151044f4953b31b40402c2a94fd63fb71fe8eede27a5cbf1d124d4300318446.vi.png)

1. Sau khi tạo, một thông báo xác nhận sẽ xuất hiện rằng trình kích hoạt đã được thêm vào tác nhân. Chọn **Đóng** và trình kích hoạt sẽ được liệt kê trong phần **Triggers**.
Chúng ta sẽ cập nhật trình kích hoạt sự kiện để thêm một số khả năng tự động hóa. Chọn **dấu ba chấm (...)** bên cạnh trình kích hoạt và chọn **Chỉnh sửa trong Power Automate**.

![Chọn Chỉnh sửa trong Power Automate](../../../../../translated_images/3.1_05_SelectEditInPowerAutomate.d298b51d7980cf2fd20a9d8193745aef4ce8097a4a2d33341e2dc159b9bfc099.vi.png)

1. Trình kích hoạt sau đó sẽ được tải dưới dạng luồng trong cổng tạo Power Automate. Những gì bạn đang thấy là trình thiết kế luồng trong cổng tạo Power Automate. Đây là nơi chúng ta có thể thêm logic và hành động để tự động hóa thêm. Trình kích hoạt sẽ xuất hiện ở đầu, tiếp theo là **Gửi một lời nhắc đến copilot được chỉ định để xử lý** như hành động cuối cùng trong luồng.

![Trình thiết kế luồng trong cổng tạo Power Automate](../../../../../translated_images/3.1_06_EditInPowerAutomate.f8967ace56354224574517f31a2a2ce0a5b5d3ab85bfb9ec6cf70e83ab1b8e6d.vi.png)

1. Theo mặc định, trình kích hoạt **Khi một email mới đến** trong Power Automate có thể xử lý nhiều email cùng lúc nếu có nhiều email đến, chỉ chạy luồng một lần cho cả nhóm.

Để đảm bảo luồng chạy riêng lẻ cho từng email, hãy bật cài đặt **Split On** trong cài đặt của trình kích hoạt và chọn `@triggerOutputs()?['body/value']` trong trường mảng thả xuống.

Khi **Split On** được bật và trường mảng được đặt thành `@triggerOutputs()?['body/value']`, luồng sẽ chạy riêng lẻ cho từng tin nhắn, ngay cả khi có nhiều tin nhắn đến cùng lúc.

![Bật cài đặt Split On trong trình kích hoạt](../../../../../translated_images/3.1_07_UpdateTriggerSettings.0f363c4f4655276732575fa795bf1ad1568df34d34b703c85073591cc8585609.vi.png)

1. Tiếp theo, chúng ta sẽ thêm một số logic để kiểm tra loại tệp đính kèm, chúng ta chỉ muốn tải lên các tệp đính kèm định dạng .PDF và không phải hình ảnh (có thể đến từ chữ ký email). Chọn biểu tượng **+** bên dưới trình kích hoạt và chọn **Control** trong phần **Công cụ tích hợp sẵn**.

![Chọn Control](../../../../../translated_images/3.1_08_Control.2fa6987b64ae20d5c8343d1b15937432ab6c893750c4b1427df56067023fd437.vi.png)

1. Chọn hành động **Condition**.

![Chọn hành động Condition](../../../../../translated_images/3.1_09_AddConditionAction.a7eec0b2a42d4a7c54bd305f0c480b72e3feec155a4e2468e12279082257f21f.vi.png)

1. Bây giờ chúng ta sẽ cấu hình điều kiện để kiểm tra xem loại tệp đính kèm có phải là .PDF hay không. Trong trường **Chọn một giá trị**, chọn biểu tượng **tia sét** hoặc biểu tượng **fx** ở bên phải.

1. Trong trường **Tìm kiếm**, nhập nội dung sau,

```text
content type
```

1. Sau đó chọn tham số **Attachments Content-Type** từ trình kích hoạt.

1. Tiếp theo, chọn **Thêm** để thêm đầu vào nội dung động vào tham số **Id** của hành động.

![Cấu hình hành động Condition](../../../../../translated_images/3.1_10_SetDynamicContentValue_V2.23c3d0438146a5ff0d695077e65a3b1c8b230b54c51ded8a099c6e99a948e9ed.vi.png)

1. Hãy tạm dừng ở đây một chút, bạn có thể đã nhận thấy rằng hành động **For each** tự động xuất hiện.

Chọn hành động **For each**. Hành động này đại diện cho việc lặp qua từng tệp đính kèm trong email, vì tham số **Attachments Content-Type** từ trình kích hoạt được liên kết với từng tệp đính kèm.

Bên dưới, nó là một mảng và đó là lý do tại sao hành động **For each** được tự động thêm vào khi chúng ta chọn tham số **Attachments Content-Type** trong hành động **Condition**.

Để tìm hiểu thêm về điều này, hãy mở rộng khối học bổ sung sau.

??? info "Học bổ sung: Hành động For each tự động xuất hiện"

🤔 **Tại sao "Apply to each" hoặc "For each" tự động xuất hiện?**

Khi bạn chọn một tham số (nội dung động) đại diện cho danh sách hoặc mảng các mục - ví dụ, danh sách tệp đính kèm, email hoặc hàng - Power Automate nhận ra rằng bạn có thể muốn xử lý từng mục riêng lẻ.

Để giúp bạn làm điều này, Power Automate tự động thêm một vòng lặp **“Apply to each”** (hoặc **For each**) xung quanh hành động của bạn. Điều này đảm bảo rằng hành động của bạn sẽ chạy một lần cho mỗi mục trong danh sách, thay vì cố gắng xử lý toàn bộ danh sách cùng một lúc (có thể gây ra lỗi).

🦋 **Ví dụ**

- Nếu bạn chọn "Attachments" từ một hành động trước đó (là một mảng), và cố gắng sử dụng nó trong một hành động yêu cầu một tệp đơn lẻ, Power Automate sẽ bao quanh hành động của bạn bằng một vòng lặp **"Apply to each"** (hoặc **For each**). 
- Bằng cách này, hành động của bạn sẽ chạy cho **mỗi tệp đính kèm** - từng cái một.

💡 **Điểm chính**

- **Tự động:** Vòng lặp xuất hiện tự động để giúp bạn xử lý từng mục trong một tập hợp.
- **Ngăn chặn lỗi:** Nếu không có vòng lặp, hành động của bạn có thể thất bại vì không thể xử lý nhiều mục cùng một lúc.
- **Gợi ý trực quan:** Đây là cách trực quan để hiển thị rằng luồng của bạn sẽ lặp lại hành động cho mỗi mục trong danh sách.

![Giải thích hành động For Each](../../../../../translated_images/3.1_11_ForEach.82bd7b62b815fdbcd67acff0a633137cf03175940c670361ea8669b0df892927.vi.png)

1. Tiếp theo, trong trường **Chọn một giá trị** khác, nhập nội dung sau,

```text
application/pdf
```

Điều này sẽ đảm bảo rằng đối với mỗi tệp đính kèm, nó sẽ kiểm tra định dạng phần mở rộng tệp là .PDF.

![EqualToValue](../../../../../translated_images/3.1_12_EqualToValue.66c107cb8105c1cd3d166b8a5bf690b8dfc30aa2bd2af83c438a9e44d1b544b0.vi.png)

1. Bây giờ chúng ta sẽ cấu hình đường dẫn **True** để trích xuất tệp từ email và tải nó lên bảng Dataverse **Resume**.

Thêm một hành động mới bên dưới trong đường dẫn **True** và tìm kiếm `html to text`. Chọn hành động **Html to text**.

Để tìm hiểu thêm về hành động **Html to text**, hãy mở rộng khối học bổ sung sau.

??? info "Học bổ sung: Hành động Html to text"

🤔 **Hành động "HTML to text" là gì?**

Hành động **HTML to text** trong Power Automate được sử dụng để chuyển đổi nội dung định dạng HTML thành văn bản thuần túy. Điều này đặc biệt hữu ích khi bạn nhận được dữ liệu (như email, nội dung web hoặc phản hồi API) chứa các thẻ HTML, và bạn muốn trích xuất chỉ văn bản có thể đọc được mà không có bất kỳ định dạng hoặc mã nào.

⚙️ **Nó hoạt động như thế nào?**

- **Đầu vào:** Bạn cung cấp một chuỗi nội dung HTML (ví dụ, nội dung email).
- **Đầu ra:** Hành động loại bỏ tất cả các thẻ HTML và chỉ trả về văn bản thuần túy.

👍🏻 **Khi nào bạn nên sử dụng nó?**

- Khi bạn muốn trích xuất văn bản có thể đọc từ email, trang web hoặc phản hồi API chứa HTML.
- Trước khi gửi nội dung đến các hệ thống không hỗ trợ định dạng HTML (như SMS, tin nhắn Teams hoặc cơ sở dữ liệu).
- Để làm sạch dữ liệu cho việc xử lý hoặc phân tích thêm.

🔭 **Nơi tìm thấy nó?**

- Trong Power Automate cho các luồng Agent, tìm kiếm hành động có tên `HTML to text`. Nó nằm trong trình kết nối **Data Operations**.

💡 **Điểm chính**

- Nó loại bỏ tất cả các thẻ HTML và chỉ để lại văn bản.
- Nó không giải thích hoặc thực thi các script/style - chỉ loại bỏ các thẻ.
- Hữu ích cho việc làm sạch dữ liệu và chuẩn bị nội dung cho các đầu ra văn bản thuần túy.

![Thêm hành động HTML to text](../../../../../translated_images/3.1_13_AddHTMLToTextAction.2aa9468b87dbeb847c083f24da0fe99438b39f826b13a70982ec255a97c2aa80.vi.png)

1. Tiếp theo, chúng ta cần tạo một tham chiếu kết nối mới cho hành động **Html to text** bằng cách chọn **Thêm mới**.

![Thêm tham chiếu kết nối mới](../../../../../translated_images/3.1_14_AddNewConnection.4a23546976b62e7f0e882ac1379950e5bfdcaa702070313cb84a1d22b06a79a7.vi.png)

1. Hành động bây giờ có thể được cấu hình. Hãy thêm tham số **Body** từ trình kích hoạt. Trong trường **Content**, chọn biểu tượng **tia sét** hoặc **fx icon** ở bên phải.

![Thêm nội dung động](../../../../../translated_images/3.1_15_AddDynamicContent.0624a9808f55b993efb6d00bf941a88389655e2ab9970ba2b9a1538272fe9643.vi.png)

1. Trong tab **Nội dung động**, tìm kiếm `body` và chọn tham số **Body**, sau đó chọn **Thêm**.

![Thêm tham số Body](../../../../../translated_images/3.1_16_AddDynamicContent.40b7eccc080c20513eed5663062b2a63d40d6482eaf2d42fe4e29cb94797f098.vi.png)

1. Chúng ta đã hoàn thành việc cấu hình hành động này, hãy thoát khỏi hành động bằng cách chọn hai dấu ngoặc kép («) chỉ về bên trái để thu nhỏ bảng điều khiển.

![Thu nhỏ bảng điều khiển hành động](../../../../../translated_images/3.1_17_CollapseAction.ca2c346efb58f8240372c3d145fa10ba609cab1c2075d7df1a9388c82fab79f5.vi.png)

1. Chúng ta sẽ thêm một hành động mới bằng cách chọn biểu tượng **+** bên dưới hành động **Html to text**, điều này sẽ tải bảng điều khiển để thêm các hành động. Chọn trình kết nối **Microsoft Dataverse**.

![Thêm hành động mới](../../../../../translated_images/3.1_18_AddDataverseAction.5f4be9eb96e22dac239e5545bab5ad9d08b138c2cbcbc700680f33445e132506.vi.png)

1. Chọn hành động **Thêm một hàng mới**.

![Thêm hành động Thêm một hàng mới](../../../../../translated_images/3.1_19_AddANewRow.48e0a3868821e59ed2a299ccb6a521af27b2430082381d48be38087be62c7c15.vi.png)

1. Đổi tên hành động bằng cách chọn **Dấu ba chấm (...)**, sao chép và dán nội dung sau làm tên,

```text
Thêm một hàng Resume mới
```

Đối với tham số **Tên bảng**, tìm kiếm `res` và chọn bảng **Resumes**.

![Đổi tên hành động và cấu hình tham số Tên bảng](../../../../../translated_images/3.1_20_RenameAndSelectResumesTable.89f8485653abb7fda1d6eb44210951f05a05ed6f7450a51895079dfd8e72c8bf.vi.png)

1. Tiếp theo, chọn trường **Tiêu đề Resume** và chọn biểu tượng **tia sét** hoặc **fx icon** ở bên phải.

![Cấu hình tham số Tiêu đề Resume](../../../../../translated_images/3.1_21_AddDynamicContent.9ee1f89420d5a4aa56797944166208f6e9b0ec67116625168fbcefb907850224.vi.png)

1. Trong tab **Hàm**, nhập biểu thức sau sử dụng hàm `item()`.

```text
item()?['name']
```

Để tìm hiểu thêm về hàm `item ()`, hãy mở rộng khối học bổ sung sau.

??? info "Học bổ sung: Hàm `item()`"

🤔 **Hàm `item()` là gì?**

- Khi bạn sử dụng hành động **Apply to each**, Power Automate sẽ đi qua từng phần tử trong một tập hợp (mảng).
- Nó thường được sử dụng bên trong các hành động như **Apply to each** (hoặc **For each**), **Select**, hoặc **Filter array**.

⚙️ **Nó hoạt động như thế nào?**

- `item()` là một hàm trả về phần tử hiện tại đang được xử lý trong một vòng lặp hoặc thao tác mảng.
- Bên trong vòng lặp đó, `item()` đề cập đến _phần tử hiện tại_ đang được xử lý.

📌 **Nơi bạn sử dụng nó?**

- **Apply to each:** để truy cập các thuộc tính của phần tử hiện tại.
- **Select:** để chuyển đổi từng phần tử trong một mảng.
- **Filter array:** để tham chiếu phần tử hiện tại đang được đánh giá.

🦋 **Ví dụ**

- Biểu thức bên trong vòng lặp:
       -  `item()?['Email']`
- Điều này lấy thuộc tính `Email` của phần tử hiện tại.

💡 **Điểm chính**

- `item()` là _nhạy cảm với ngữ cảnh_: nó luôn đề cập đến phần tử hiện tại trong vòng lặp hoặc thao tác mảng mà bạn đang thực hiện.
- Nếu bạn lồng các vòng lặp, bạn có thể sử dụng `items('LoopName')` để tham chiếu đến các phần tử trong một vòng lặp cụ thể.

Chọn **Thêm** để thêm biểu thức vào tham số **Tiêu đề Resume**.

![Thêm biểu thức cho tham số Tiêu đề Resume](../../../../../translated_images/3.1_22_ResumeTitleParameter.9e4fa71a5251cb899e7b09bcc3052eeda1e512841f929118eb9e2b1d232ecb07.vi.png)

1. Chúng ta vẫn cần cấu hình thêm một số tham số, chọn **Hiển thị tất cả** và trong trường **Thư giới thiệu**, chọn biểu tượng **tia sét** hoặc **fx icon** ở bên phải.

Trong tab **Hàm**, nhập biểu thức sau sử dụng cùng biểu thức trong [nhiệm vụ trước](../02-multi-agent/README.md).

```text
if(greater(length(body('Html_to_text')), 2000), substring(body('Html_to_text'), 0, 2000), body('Html_to_text'))
```

Biểu thức này kiểm tra xem _văn bản_ từ hành động **Html to text** có dài hơn 2000 ký tự hay không, và nếu có, chỉ trả về 2000 ký tự đầu tiên; nếu không, nó sẽ trả về toàn bộ văn bản.

![Thêm biểu thức cho tham số Thư giới thiệu](../../../../../translated_images/3.1_23_CoverLetterParameter.d2b521d6b37d05ac4760c91de2964b6d062585a333af6989d9ac0794a4139463.vi.png)

1. Biểu thức bây giờ sẽ được thêm vào trường **Thư giới thiệu**.

![Biểu thức được thêm vào tham số Thư giới thiệu](../../../../../translated_images/3.1_24_ExpressionForCoverLetter.3d18124b10b76bad92db61c529ae395b0bb05f3215e3b783771e76ef7677664e.vi.png)

1. Đối với trường **Địa chỉ email nguồn**, tìm kiếm `from` và chọn tham số **From** từ trình kích hoạt vì nó chứa giá trị địa chỉ email.

![Tham số Địa chỉ email nguồn](../../../../../translated_images/3.1_25_FromParameter.1ed1be46711f6705fb807996f6f1e873adc22e285186a851272e0cf3855487ef.vi.png)

1. Đối với trường **Ngày tải lên**, chọn biểu tượng **tia sét** hoặc **fx icon** ở bên phải. Trong tab **Hàm**, nhập biểu thức sau sử dụng hàm `utcNow()`.

```text
utcNow()
```

Để tìm hiểu thêm về hàm `utcNow`, hãy mở rộng khối học bổ sung sau.

??? info "Học bổ sung: Hàm `utcNow`"

🤔 **Hàm `utcNow()` là gì?**

- Hàm utcnow() trong Power Automate trả về ngày và giờ hiện tại theo Giờ Phối hợp Quốc tế (UTC) trong định dạng ISO 8601, như: `2025-09-23T04:32:14Z`

🦋 **Ví dụ**

- Biểu thức:
       -  `concat('Báo cáo được tạo vào ', utcnow())`
- Kết quả là:
       - Báo cáo được tạo vào `2025-09-23T04:32:14Z`

💡 **Điểm chính**
- **Không cần đối số (tham số đầu vào):** luôn cung cấp dấu thời gian UTC hiện tại.
   - **Trường hợp sử dụng**
       - Thêm dấu thời gian vào nhật ký hoặc tên tệp
       - So sánh thời gian hiện tại với các ngày khác
       - Lập lịch hoặc điều kiện dựa trên thời gian

![Tham số Ngày Tải lên](../../../../../translated_images/3.1_26_UploadDateParameter.21b0afc9807bf680c1c432066f1644d4d018cb4988ad0c0788b5186cea285e02.vi.png)

1. Chúng ta đã hoàn tất cấu hình hành động **Thêm một hàng Sơ yếu lý lịch mới**, giờ hãy thoát khỏi bảng điều khiển bằng cách thu gọn nó.

![Thoát khỏi bảng điều khiển hành động](../../../../../translated_images/3.1_27_CollapseAction.c033a86e4d8501b10fc454ba7f9c5e08d71d6d881fc72f58011152e1c5d7a7bb.vi.png)

1. Chúng ta sẽ thêm một hành động mới bằng cách chọn **biểu tượng +** bên dưới hành động **Thêm một hàng Sơ yếu lý lịch mới**, điều này sẽ tải bảng điều khiển để thêm hành động. Chọn lại trình kết nối **Microsoft Dataverse**.

![Thêm hành động Dataverse](../../../../../translated_images/3.1_28_AddDataverseAction.1af4dedc95001bfb56b0a642231e9c82b57459b10c68bf6fc177382339a0a221.vi.png)

1. Chọn hành động **Tải lên một tệp hoặc hình ảnh**.

![Thêm hành động Tải lên một tệp hoặc hình ảnh](../../../../../translated_images/3.1_29_AddUploadAFileOrAnImage.e40ab21b735e37bd1fdb5020b7433d1a2f01d6e387bc43a437e970c6e20ee779.vi.png)

1. Đổi tên hành động bằng cách chọn **Dấu ba chấm (...)**, sao chép và dán tên sau đây,

```text
Upload Resume File
```

![Đổi tên hành động](../../../../../translated_images/3.1_30_RenameAction.c316fdf225f88e5c3ee26649e672472829c3372c804b544a1372b0455937c204.vi.png)

1. Tiếp theo, chọn trường **Tên nội dung** và chọn **biểu tượng tia chớp** hoặc **biểu tượng fx** ở bên phải.

Trong **tab Hàm**, nhập biểu thức sau sử dụng hàm `item ()`. Điều này lấy thuộc tính `name` của mục hiện tại (tệp đính kèm).

```text
item()?['name']
```

![Cấu hình tham số Tên nội dung](../../../../../translated_images/3.1_31_ContentNameParameter.c6606773f1e82dbcea93d7c2f52dff7a2168f9f04d6b865f699f56d62a41d4ec.vi.png)

1. Đối với tham số **Tên bảng**, tìm kiếm `res` và chọn bảng **Resumes**.

![Cấu hình tham số Tên bảng](../../../../../translated_images/3.1_32_SelectResumesTable.6a00bf6d585002219003da47f6e1042dc67cbdb3fbaf7d959253550035e27520.vi.png)

1. Tiếp theo, chọn trường **ID hàng** và chọn **biểu tượng tia chớp** hoặc **biểu tượng fx** ở bên phải.

Tìm kiếm `ID` và chọn tham số **Resume** từ hành động _Thêm một hàng mới_ Dataverse vì nó chứa giá trị ID của hàng để tải lên tệp PDF.

Chọn **Thêm**.

![Chọn tham số ID hàng](../../../../../translated_images/3.1_33_RowIDParameter.9824c6b5ea5edf0ce018140c20431a97c2e750d61bcb787f67da260acb6a3838.vi.png)

1. Chọn trường **Tên cột** và chọn tùy chọn **Resume PDF**.

![Cấu hình tham số Tên cột](../../../../../translated_images/3.1_34_ColumnNameParameter.ef4f770cbd84cae5c15cfe06d1bdbe028d0c6d54a2286dab30769fa01c948b71.vi.png)

1. Chọn trường **Nội dung** và chọn **biểu tượng tia chớp** hoặc **biểu tượng fx** ở bên phải.

Trong **tab Hàm**, nhập biểu thức sau sử dụng hàm `item ()`. Điều này lấy thuộc tính `contentBytes` của mục hiện tại (tệp đính kèm). `contentBytes` đề cập đến dữ liệu nhị phân thô của tệp hoặc tệp đính kèm, được mã hóa dưới dạng chuỗi Base64.

```text
item()?['contentBytes']
```

1. Chúng ta đã hoàn tất cấu hình hành động này, giờ hãy thoát khỏi hành động bằng cách chọn hai dấu ngoặc kép («) chỉ sang trái để thu gọn bảng điều khiển.

![Thu gọn bảng điều khiển hành động](../../../../../translated_images/3.1_36_CollapseAction.1813a7219f0f37b87f80c2cd9f5a9626c3a320858d08a0e62cf14736f97db4c6.vi.png)

1. Tiếp theo, chọn **Gửi một lời nhắc đến copilot được chỉ định để xử lý**, sau đó kéo và thả hành động này xuống dưới hành động **Upload Resume File** trong đường dẫn _True_ của điều kiện.

![Kéo và thả hành động trong đường dẫn True](../../../../../translated_images/3.1_37_DragAndDropAction.57dc2e9f9d25ed892a4fc072a72c55eca6c38e313ab48fb9db37e9371995440f.vi.png)

1. Chọn **Gửi một lời nhắc đến copilot được chỉ định để xử lý** để cấu hình nó.

![Chọn hành động](../../../../../translated_images/3.1_38_SelectAction.d125bdf661f66b6397542c75efbc6a78b8c4862e03dce4002776c251f1c48382.vi.png)

1. Trong trường **Nội dung/Tin nhắn**, chọn toàn bộ nội dung trường và xóa/xóa nó.

![Xóa tham số Nội dung](../../../../../translated_images/3.1_39_ClearBodyParameter.6a345b2e5dbe5510184d7bae7cd406b8cec72c714f34bb40e30741e445a491c0.vi.png)

1. Sao chép và dán văn bản sau vào trường **Nội dung/Tin nhắn** và làm nổi bật `RESUME ID PLACEHOLDER`.

```text
Send [ResumeId (text)] = "RESUME ID PLACEHOLDER" and [ResumeTitle (text_1)] = "RESUME TITLE PLACEHOLDER" and [ResumeNumber (text_2)]= "RESUME NUMBER PLACEHOLDER" to the Tool "Notify Teams Applicant channel" in the child agent "Application Intake Agent"
```

![Thay thế văn bản Placeholder ID Sơ yếu lý lịch](../../../../../translated_images/3.1_40_ReplaceResumeIDPlaceholder.eb61590503cb37d89121aaed6d979a4272aa30c87700206e04db8005e60b294f.vi.png)

1. Chọn **biểu tượng tia chớp** hoặc **biểu tượng fx** ở bên phải.

Tìm kiếm `resume` và chọn tham số **Resume** từ hành động _Thêm một hàng mới Dataverse_ vì nó chứa giá trị `ID` của hàng Sơ yếu lý lịch được tạo.

Chọn **Thêm**.

![Chọn tham số Resume](../../../../../translated_images/3.1_41_SelectResumeParameter.61c4457c33e5d1b596169857535bfc560ef677264f8798e9148ceac999eeaeb9.vi.png)

1. Làm nổi bật `RESUME TITLE PLACEHOLDER`. Chọn **biểu tượng tia chớp** hoặc **biểu tượng fx** ở bên phải.

Tìm kiếm `title` và chọn tham số **Resume Title** từ hành động _Thêm một hàng mới Dataverse_ vì nó chứa giá trị `resume title` của hàng Sơ yếu lý lịch được tạo.

Chọn **Thêm**.

![Chọn tham số Resume](../../../../../translated_images/3.1_42_SelectResumeTitleParameter.6c887607128f928da15c4cf6c22254d0473bc22514aa883462fd812bf14245e0.vi.png)

1. Làm nổi bật `RESUME NUMBER PLACEHOLDER`. Chọn **biểu tượng tia chớp** hoặc **biểu tượng fx** ở bên phải.

Tìm kiếm `resume number` và chọn tham số **Resume Number** từ hành động _Thêm một hàng mới Dataverse_ vì nó chứa giá trị `Resume Number` của hàng Sơ yếu lý lịch được tạo.

Chọn **Thêm**.

![Chọn tham số Resume](../../../../../translated_images/3.1_43_SelectResumeNumberParameter.ca19197525250483a7e94598b621072b47ebdf5deb939e1387c979e807ddc554.vi.png)

1. Chúng ta đã hoàn tất cấu hình hành động này và luồng tác nhân của chúng ta 🙌🏻 Bạn đang làm rất tốt! Bây giờ hãy lưu luồng kích hoạt sự kiện của chúng ta bằng cách chọn **Lưu bản nháp**.

![Lưu bản nháp](../../../../../translated_images/3.1_44_SaveDraft.0c9eee19f0c7cb8483b8d31bc17e1dd54075352d22f0f44603a9d52b52429188.vi.png)

1. Bây giờ chúng ta cần chỉnh sửa chi tiết của luồng tác nhân, chọn **Quay lại**.

![Chọn Quay lại](../../../../../translated_images/3.1_45_Back.3f85535977bdb02231a0fdb8465e0e8b7d86fd5342ff933e4ae8bf9610279989.vi.png)

1. Chọn **Chỉnh sửa** trong phần **Chi tiết** và cập nhật **Kế hoạch** thành tùy chọn **Copilot Studio**.

Chọn **Lưu**.

![Thay đổi kế hoạch Copilot Studio](../../../../../translated_images/3.1_46_ChangePlanDetails.6ab15f1f8bd9ebe55b2c1576c3495f47d1a29d7435e343d4c590e46647601269.vi.png)

1. Một hộp thoại sẽ xuất hiện yêu cầu bạn xác nhận chuyển sang kế hoạch Copilot Studio. Chọn **Xác nhận**.

![Xác nhận thay đổi kế hoạch Copilot Studio](../../../../../translated_images/3.1_47_ConfirmCopilotStudioPlan.bc6ab52e7c982127154b0fb743f85ff9cc05dcab944dffc9485bdbcbe0811397.vi.png)

1. Kế hoạch hiện đã được cập nhật thành **Copilot Studio**. Chọn **Chỉnh sửa** vì chúng ta cần xuất bản luồng kích hoạt sự kiện cho tác nhân của chúng ta.

![Chỉnh sửa luồng](../../../../../translated_images/3.1_48_PlanChangedAndEdit.3c3207766a648817f7a7878c3a6f684cf41cdceea4dca8f6fc43b7315c8dd648.vi.png)

1. Chọn **Xuất bản**.

![Xuất bản](../../../../../translated_images/3.1_49_Publish.38ff814cfce6b3be1076cafb0c28e4e344f75d8cd4117fabed13ad361d4fde3f.vi.png)

Hoan hô! Luồng kích hoạt sự kiện hiện đã được xuất bản 😃

![Đã xuất bản](../../../../../translated_images/3.1_50_Published.449e7867f7b027ae8a524c749357a1b931955062828bacc3b5a51e979755ef4a.vi.png)

Hãy tiếp tục tạo một luồng tác nhân mới sẽ được gọi bởi **Intake Application Agent** con.

### Bài thực hành 3.2 - Thông báo một kênh Teams bằng thẻ thích ứng

Bây giờ chúng ta sẽ tạo một luồng tác nhân mới cho **Intake Application Agent** con sử dụng các giá trị được truyền bởi kích hoạt sự kiện, để đăng một thẻ thích ứng lên kênh Teams. Thẻ thích ứng này sẽ thông báo cho nhóm tuyển dụng HR về tệp PDF đã được tải lên tự động để họ có thể xem xét.

Hãy bắt đầu!

1. Trong **Hiring Agent**, chọn tab **Agents** và chọn **Application Intake Agent**.

![Chọn Application Intake Agent](../../../../../translated_images/3.2_01_SelectApplicationIntakeAgent.0e9dd3da5c52e9f59ab3a4545c01897ad830853b650ec42f7f8424aa530e0409.vi.png)

1. Cuộn xuống **Tools** và chọn **+ Thêm**.

![Thêm Công cụ](../../../../../translated_images/3.2_02_AddNewTool.7c62275fd9f28cdc1923ea056a148171048dc568ff78056958fd54862133f90e.vi.png)

1. Hộp thoại **Thêm công cụ** sẽ xuất hiện. Chọn **+ Công cụ mới**.

![Chọn Công cụ mới](../../../../../translated_images/3.2_03_SelectNewTool.215e7637a9f065a3799a1ecf248eed1e859f201d2dfdfab71a7c1dc18e454e2d.vi.png)

1. Chọn **Luồng tác nhân**.

![Chọn Luồng tác nhân](../../../../../translated_images/3.2_04_SelectAgentFlow.7bc12b3435efccc0cfee8f563640562f87d173b436b3313a3d1256fe35024907.vi.png)

1. **Trình thiết kế luồng tác nhân** sẽ tải tiếp theo. Trong kích hoạt **Khi một tác nhân gọi luồng**, chọn **+ Thêm đầu vào**.

![Chọn thêm đầu vào](../../../../../translated_images/3.2_05_SelectAddAnInput.f3dc8465f490929baccb0f2dc72b50629b1435ff8a3861f7974885d1d36cdeb1.vi.png)

1. Chọn **Văn bản** làm loại đầu vào của người dùng.

![Chọn Văn bản](../../../../../translated_images/3.2_06_SelectText.93585b4af8c4e277c11c2052b638e249508a24a075987026a6ec346e75184217.vi.png)

1. Trong trường văn bản đầu vào, sao chép và dán tên tham số đầu vào sau đây.

```text
ResumeId
```

![Đầu vào ResumeId](../../../../../translated_images/3.2_07_ResumeIdInput.a9e127e343856d6c6d45dd1251cade0503bad9484bc563c02155390951b1faa5.vi.png)

1. Lặp lại các bước tương tự để thêm đầu vào văn bản thứ hai. Sao chép và dán tên tham số đầu vào sau đây.

```text
ResumeTitle
```

![Đầu vào ResumeTitle](../../../../../translated_images/3.2_08_ResumeTitleInput.c71ecd364a974a93abb0de876807c2e9bde59fcea6df317babeb20764b636f26.vi.png)

1. Lặp lại các bước tương tự để thêm đầu vào văn bản thứ ba. Sao chép và dán tên tham số đầu vào sau đây.

```text
ResumeNumber
```
![Đầu vào ResumeNumber](../../../../../translated_images/3.2_09_ResumeNumberInput.a6c060000354deab51dffef3c1ad9f13378cfeabdafdb7a33c2a591bfd044709.vi.png)

1. Nhớ lại cách chúng ta đã thêm một thẻ thích ứng trong [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request) trong một Chủ đề cho tác nhân của chúng ta? Lần này, chúng ta sẽ thêm một thẻ thích ứng trong luồng tác nhân. Bây giờ chúng ta sẽ thêm một hành động khác vào luồng tác nhân của mình để đăng một thẻ thích ứng lên kênh Teams.

Chọn **biểu tượng +** bên dưới kích hoạt.

![Thêm hành động mới](../../../../../translated_images/3.2_10_AddNewAction.4474a2150991cac246d5e4091a74ba91e76e1c5bafa34ad985a8567c09dcdd35.vi.png)

1. Chọn hành động **Đăng thẻ trong trò chuyện hoặc kênh**.

![Chọn hành động đăng thẻ trong trò chuyện hoặc kênh](../../../../../translated_images/3.2_11_SelectPostCardInAChatOrChannel.97de43ed1c883b14d0150ae65efaa90f53f0815bdf57ec10e0e22cbd3e22ce06.vi.png)

1. Một tham chiếu kết nối đến Microsoft Teams cần được tạo bằng tài khoản người dùng đã đăng nhập của bạn. Chọn **Đăng nhập**.

![Chọn đăng nhập](../../../../../translated_images/3.2_12_SignInToCreateConnectionReference.2297f8b702d71508f1b21a3ed4046df4846dc03b13932a20e5c445403559ac1f.vi.png)

1. Chọn tài khoản người dùng của bạn và sau đó chọn **Cho phép truy cập**.

![Chọn Cho phép truy cập](../../../../../translated_images/3.2_13_AllowAccess.31cbf82606d75231108bd4f2bfeafffda3cd7e7e760cd46004c2705afe050aaf.vi.png)

1. Đối với các tham số đầu vào sau,

| Tham số | Cách thiết lập | Chi tiết |
|----------|------------|---------|
| **Đăng dưới dạng** | Dropdown | Chọn tùy chọn `Flow bot` |
| **Đăng trong** | Dropdown | Chọn tùy chọn `Channel` |
| **Đội nhóm** | Dropdown | Chọn một đội nhóm có sẵn trong môi trường của bạn mà bạn có quyền truy cập để hoàn thành bài thực hành này |
| **Kênh** | Dropdown | Chọn một kênh có sẵn trong môi trường của bạn mà bạn có quyền truy cập để hoàn thành bài thực hành này |

![Cấu hình tham số đầu vào](../../../../../translated_images/3.2_14_ConfigureParameters.8c21924f90db3acaa33d4e35ef43c70556ba4cc37207a195ac654e55a43400a6.vi.png)

1. Tiếp theo, chúng ta sẽ cấu hình trường **Thẻ thích ứng**. Chọn trường **Thẻ thích ứng**.

![Chọn trường Thẻ thích ứng](../../../../../translated_images/3.2_15_SelectAdaptiveCardParameter.65323056be6174d2eed7422650aaa70fc16396148f90b8af1801110d7a30d66f.vi.png)

1. Mở [Tệp JSON Cập nhật Bảng Sơ yếu lý lịch](../../../../../docs/operative-preview/03-automate-triggers/assets/3.2_ResumeTableUpdated.json), sao chép toàn bộ nội dung của nó và dán vào trường Thẻ thích ứng.

![Sao chép và dán JSON](../../../../../translated_images/3.2_16_JSON.f022097fb7139bd12514abb8fdc518309ea940f005cc94a11ba159359cde784b.vi.png)

1. Tương tự như những gì chúng ta đã làm trong [Recruit](../../recruit/08-add-adaptive-card/README.md#81-create-a-new-topic-with-an-adaptive-card-for-user-to-submit-their-request), chúng ta sẽ thay thế các giá trị hiện có trong payload JSON bằng các giá trị thực tế hoặc nội dung động.

Đầu tiên, hãy cập nhật URL cho thuộc tính `url` trong thuộc tính `selectAction`. URL này sẽ được thay thế bằng URL của chế độ xem hệ thống Resumes trong ứng dụng **Hiring Hub** model-driven. Điều này sẽ cho phép Nhà tuyển dụng chọn hành động và được chuyển hướng đến chế độ xem hệ thống Resumes trong ứng dụng model-driven.

Làm nổi bật giá trị URL hiện tại và xóa nó.

![Chọn giá trị URL](../../../../../translated_images/3.2_17_SystemViewURL.5e51fd894ac916f436107c7b668d66ca87ca8bdfd7affeb7dae1b10fa8ff5afb.vi.png)

1. Trong ứng dụng **Hiring Hub** model-driven, điều hướng đến chế độ xem hệ thống **Resumes** bằng menu bên trái và sao chép URL. Sau đó, quay lại luồng tác nhân và dán URL đã sao chép vào thuộc tính **url** trong thuộc tính `selectAction`.

![Sao chép URL chế độ xem hệ thống Resumes](../../../../../translated_images/3.2_18_CopyResumesSystemViewURL.14d9f55c7db15977a12dfe2a5df95aab5cf241e646b08f9838cff31aaa27a381.vi.png)
1. Bạn sẽ thấy thông tin sau đây, phần được tô vàng là chi tiết môi trường của ứng dụng điều khiển mô hình **Hiring Hub**.

     | Tham số | Giá trị | Giải thích |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL của tổ chức môi trường Dataverse/Dynamics 365 |
     | **appid** | GUID | Để mở một ứng dụng điều khiển mô hình cụ thể, tham số truy vấn appid hoặc appname được sử dụng. Trong trường hợp này, appid được sử dụng |
     | **viewid** | GUID | Tham số truy vấn là id của chế độ xem |

       ![Dán URL](../../../../../translated_images/3.2_19_PasteURL.41f3fdd66190c8ba478857f91c90eb05ee9621243bda7b7ad26eb5802b8e970d.vi.png)

1. Tiếp theo, chúng ta sẽ thêm các giá trị nội dung động cho một số thuộc tính. Bắt đầu với văn bản hiển thị tham chiếu Số Hồ Sơ của hàng được tạo tự động bởi trình kích hoạt sự kiện.

      Chọn biểu tượng **panel** để tải bảng hành động.

       ![Chọn biểu tượng panel](../../../../../translated_images/3.2_20_SelectPannelIcon.786a4147ba12e0e62648c66f14fb2b9a7f89b27c3a610f43420e31cb0c9fb5da.vi.png)

1. Cuộn xuống dòng nơi bạn thấy thuộc tính `text` cho `RESUME NUMBER PLACEHOLDER`. Tô sáng giá trị placeholder và xóa nó.

       ![Xóa placeholder](../../../../../translated_images/3.2_21_DeleteResumeNumberPlaceholder.6ffd7a5a073f9d9a11e0e119c87e827243de237f70ebc3ab37dfdd36de615130.vi.png)

1. Nhấp vào giữa dấu ngoặc kép và chọn biểu tượng **tia sét** hoặc biểu tượng **fx** ở bên phải.

      Trong tab **Dynamic Content**, chọn tham số **ResumeNumber** và nhấn **Add**.

       ![Thêm tham số ResumeNumber](../../../../../translated_images/3.2_22_SelectResumeNumberParameter.de5a6eecb3ee092441d841ad137dfecd9f8d503a370ff60eb5ccdc0267e37df0.vi.png)

1. Tham số **ResumeNumber** sẽ được thêm vào như nội dung động cho thuộc tính `text`.

       ![Nội dung động ResumeNumber](../../../../../translated_images/3.2_23_ResumeNumberDynamicContent.129a566ac6e9d448b268b828da5766a7056779ac167f65b498e2ca21d703b7f0.vi.png)

1. Chúng ta sẽ lặp lại các bước tương tự cho `RESUME NAME PLACEHOLDER`. Cuộn xuống dòng nơi bạn thấy thuộc tính `text` cho `RESUME NAME PLACEHOLDER`. Tô sáng giá trị placeholder và xóa nó.

       ![Resume Name Placeholder](../../../../../translated_images/3.2_24_ResumeNamePlaceholder.6c879b99ae375892f7e0a511bfedd5fa9e60a8dea71ea2a44c2a7a04c8389f43.vi.png)

1. Nhấp vào giữa dấu ngoặc kép và chọn biểu tượng **tia sét** hoặc biểu tượng **fx** ở bên phải.

      Trong tab **Dynamic Content**, chọn tham số **ResumeTitle** và nhấn **Add**.

       ![Thêm tham số ResumeTitle](../../../../../translated_images/3.2_25_SelectResumeTitleParameter.18c769bbd2c60e362a56f6055e151ed6287903cb625addcdfbb43044828d7378.vi.png)

1. Tham số **ResumeTitle** sẽ được thêm vào như nội dung động cho thuộc tính `text`.

       ![Nội dung động ResumeTitle](../../../../../translated_images/3.2_26_ResumeTitleDynamicContent.7219e078f71fc0d5d4a6bb228ba2d53f0898ba26a27c5eb859df90d12dd52c70.vi.png)

1. Chúng ta sẽ lặp lại các bước tương tự cho giá trị **Due Date** đại diện cho thời điểm nhà tuyển dụng cần xem xét hồ sơ. Cuộn xuống dòng nơi bạn thấy thuộc tính `text` cho `May 21, 2023`.

       ![Chọn Allow access](../../../../../translated_images/3.2_27_DueDatePlaceholder.17c6003cc9ec1141b0aeb5cde203098a7f5534fa11f01a3cbffb66206ed1633a.vi.png)

1. Xóa giá trị placeholder ngày này và nhấp vào giữa dấu ngoặc kép.

       ![Xóa](../../../../../translated_images/3.2_28_DeleteDueDatePlaceholder.9a3df55fb3c9ed72e61e0a60dc3344335b0444ff537c9fb51036b0442a85d268.vi.png)

1. Chọn biểu tượng **tia sét** hoặc biểu tượng **fx** ở bên phải và trong tab **Function**, nhập biểu thức sau và nhấn **Add**.

       ```text
       addDays(utcNow(), 3, 'MMM dd, yyyy')
       ```

      Biểu thức này sử dụng hai hàm.

     | Hàm | Giải thích |
     |----------|------------|
     | **addDays** | Thêm một số ngày cụ thể vào một ngày cho trước và trả về ngày kết quả dưới dạng chuỗi |
     | **utcNow** | Trả về ngày và giờ hiện tại theo định dạng Giờ Phối hợp Quốc tế (UTC) dưới dạng chuỗi. |

      Đối với giá trị utcNow, chúng ta định dạng ngày thành tháng và ngày, sau đó là năm.

       ![Biểu thức Due Date](../../../../../translated_images/3.2_29_01_ExpressionDueDate.a4fa31985f5500971f2fc6da0e81e008af12be19d54a30a240764b74a4b2dbcb.vi.png)

      Biểu thức sẽ được thêm vào thuộc tính `text`.

       ![Biểu thức Due Date](../../../../../translated_images/3.2_29_02_ExpressionDueDate.6159288450731c7b09628af70f0c9a6d92590ca7c7e39e8a524ae8af7c511f2c.vi.png)

1. Cuối cùng, chúng ta sẽ cập nhật URL cho thuộc tính `url` trong thuộc tính mảng `actions` ở cuối payload JSON. URL placeholder hiện tại sẽ được thay thế bằng URL của hàng Hồ Sơ trong ứng dụng điều khiển mô hình **Hiring Hub**. Điều này sẽ cho phép nhà tuyển dụng chọn hành động `Action.OpenURL` của thẻ thích ứng và được chuyển hướng đến Hồ Sơ trong ứng dụng điều khiển mô hình.

       ![Xóa View Resume URL placeholder](../../../../../translated_images/3.2_30_ViewResumeURLPlaceholder.f27af6cadfb54fb977f0b46ea3ec42ee0638d38ebc5d294eff5da52abf9d4a1b.vi.png)

1. Trong ứng dụng điều khiển mô hình **Hiring Hub**, mở một hàng trong chế độ xem hệ thống **Resumes** bằng cách sử dụng menu bên trái. Hàng hồ sơ sẽ được tải dưới dạng biểu mẫu trong ứng dụng điều khiển mô hình.

      Sao chép URL của hàng Hồ Sơ.

    ??? info "Cách điều hướng trở lại ứng dụng điều khiển mô hình **Hiring Hub** nếu bạn đã thoát/đóng nó"

        1. Truy cập [https://make.powerapps.com](https://make.powerapps.com) và đảm bảo bạn đang ở trong môi trường nhà phát triển mà bạn đang sử dụng cho các bài tập này, nếu không hãy chuyển sang nó.
        
        ![Truy cập make.powerapps.com](../../../../../translated_images/3.2_31_Note_01_BrowseToURL.a13dfc8b05a0b34f3a4c853f3d3e418864176b52b1b40c069da7712af5562aa5.vi.png)

        1. Chọn **Apps** trong bảng menu bên trái và đối với ứng dụng điều khiển mô hình **Hiring Hub**, chọn biểu tượng **Play** để tải nó trong trình duyệt của bạn.
        
        ![Chọn ứng dụng điều khiển mô hình Hiring Hub](../../../../../translated_images/3.2_31_Note_02_HiringHubApp.a09b6ea28b4fea8932809cb847cb0ea3d8faeb7b7b5604852de1f46ab1e9741b.vi.png)

       ![Sao chép URL hàng Hồ Sơ](../../../../../translated_images/3.2_31_CopyResumeURL.f6156f8792526129c2613922f0137221b2944fa8ffe7c04766d710521ad8765b.vi.png)

1. Sau đó điều hướng trở lại luồng tác nhân, tô sáng giá trị URL placeholder hiện tại và xóa nó.

       ![Xóa URL placeholder hàng Hồ Sơ](../../../../../translated_images/3.2_32_SelectResumeURLPlaceHolder.8db783de292428eaa8937242eba4a54ebb1df7bf4c1bc9391b016ee545fb2b9f.vi.png)

1. Sau đó dán URL đã sao chép vào thuộc tính **url** trong thuộc tính `url`.

       ![Dán URL hàng Hồ Sơ đã sao chép](../../../../../translated_images/3.2_33_PasteResumeRowURL.d7ba92493d7597b89f75e2f17f76846ac17a9ba89c2e36729dc6b5dc1599b047.vi.png)

1. Bạn sẽ thấy thông tin sau đây. Xóa giá trị id `GUID` ở cuối. Chúng ta sẽ thay thế nội dung động này - tham số **ResumeId**.

       ![Xóa View Resume URL placeholder](../../../../../translated_images/3.2_34_DeleteViewResumePlaceholderURL.7b26209eaeef6dc0a21b16140d05fe2f0e38de5f714575edd24d21dded58102a.vi.png)

1. Chọn biểu tượng **tia sét** hoặc biểu tượng **fx** ở bên phải.

      Trong tab **Dynamic Content**, chọn tham số **ResumeId** và nhấn **Add**.

       ![Tham số ResumeId](../../../../../translated_images/3.2_35_ResumeIdParameter.3dc710a7f5216944387f4d5f82c0a372eee23ee5259dec04147ad00e9c454d7d.vi.png)

1. Tham số **ResumeId** sẽ được thêm vào như nội dung động. Phần được tô vàng sau đây là chi tiết môi trường của ứng dụng điều khiển mô hình **Hiring Hub**.

     | Tham số | Giá trị | Giải thích |
     |----------|------------|---------|
     | **Organization URI** | GUID | URL của tổ chức môi trường Dataverse/Dynamics 365 |
     | **appid** | GUID | Để mở một ứng dụng điều khiển mô hình cụ thể, tham số truy vấn appid hoặc appname được sử dụng. Trong trường hợp này, appid được sử dụng |
     | **id** | GUID | Tham số truy vấn là id của hàng Hồ Sơ |

       ![Nội dung động ResumeId](../../../../../translated_images/3.2_36_ResumeIdDynamicContent.a1a40dfb4a83b60f1b75b02160890e3fec41c2c7df8adf32e02d652a57c1ee87.vi.png)

1. Chúng ta đã hoàn thành việc cấu hình hành động **Post card in a chat or channel** 👏🏻 Thoát khỏi bảng cấu hình hành động bằng cách chọn biểu tượng **x**.

       ![Đóng bảng](../../../../../translated_images/3.2_37_CloseActionPanel.23d07107381411aa9494ef36fb240682a0727a63e6f15082074b34a1defd517b.vi.png)

1. Cuối cùng, chúng ta sẽ cấu hình hành động cuối cùng, **Respond to the agent**, bằng cách gửi một văn bản trở lại cho tác nhân để kết thúc xử lý.

      Trong hành động **Respond to the agent**, chọn **+Add an output**.

       ![Chọn Add an output](../../../../../translated_images/3.2_38_AddAnOutput.de1a0e49033cb077eb5d2c226152bbb06dc12fb95d0496c69d469eecdb46c0ae.vi.png)

1. Chọn **Text** làm loại đầu ra.

       ![Chọn text làm loại đầu ra](../../../../../translated_images/3.2_39_SelectText.4e1e82c35fe9d1b569b668092d405aa9b0c81fbe67e7de68a660f2083ed3afdd.vi.png)

1. Nhập nội dung sau đây làm tên của đầu ra.

       ![Đầu ra Kết thúc Cuộc hội thoại](../../../../../translated_images/3.2_40_EndConversationOutput.e392b58847d8439443c89459fccbbd88d4ea5e5fa562749b77407c46b9ff4ca4.vi.png)

1. Nhập nội dung sau đây làm giá trị cho đầu ra.

       ```text
       Finished
       ```

       ![Giá trị đầu ra Kết thúc Cuộc hội thoại](../../../../../translated_images/3.2_41_EndConversationOutputValue.2cb836900ee9fca802926676e613b077938f1106cc16e77ddd77af64ce92dcc8.vi.png)

1. Chúng ta đã hoàn thành việc cấu hình luồng tác nhân. Chọn **Save draft** để lưu luồng tác nhân. Một thông báo xác nhận sẽ xuất hiện sau khi lưu.

       ![Lưu bản nháp](../../../../../translated_images/3.2_42_SaveDraft.1bb26eec40faf5d2c244d93f869344915e90423623e07e02cac2c1f8c73d1a4a.vi.png)

1. Trước khi xuất bản luồng tác nhân, chúng ta cần cập nhật chi tiết cho luồng tác nhân. Chọn tab **Overview** và chọn **Edit**.

      Trong trường tên luồng, nhập nội dung sau đây.

       ```text
       Notify Teams Applicant channel
       ```      

      Sau đó, chọn biểu tượng **Refresh** để cập nhật mô tả của luồng tác nhân bằng AI.

      Sau đó chọn **Save** để lưu chi tiết đã cập nhật cho luồng tác nhân.

       ![Chỉnh sửa và lưu chi tiết](../../../../../translated_images/3.2_43_EditDetails.f0c9b53a9c1b29e4aa3c34774680559ae9173f77b3a37817bab2296b77ffcca7.vi.png)

1. Điều hướng trở lại tab **Designer** và chọn **Publish** để xuất bản luồng tác nhân. Một thông báo xác nhận sẽ xuất hiện sau khi lưu.

       ![Xuất bản luồng tác nhân](../../../../../translated_images/3.2_44_PublishAgentFlow.3014e6de5e53aa5fc2021bf6e11b901c4990b4fbb4d4cee33cc6d5b6cc641ed8.vi.png)

1. Luồng tác nhân bây giờ cần được thêm vào như một công cụ trong **Application Intake Agent**. Điều hướng trở lại **Hiring Agent** và chọn tab **Agents**, sau đó chọn **Application Intake Agent**.

       ![Chọn Application Intake Agent](../../../../../translated_images/3.2_45_ApplicationIntakeAgent.0446b1762d0f499e880e7984f59669639193566f72539cd4fba5c62cd1fe8726.vi.png)

1. Trong phần **Details** của tác nhân, chúng ta sẽ cập nhật trường **Description**. Sao chép nội dung sau đây và dán vào cuối văn bản mô tả.

       ```text
       and also notify the Teams Applicant channel
       ```

       ![Cập nhật mô tả của Application Intake Agent](../../../../../translated_images/3.2_46_UpdateAgentDescription.56344699cd3cc5e417e8f95362ed2288d0c0391f33bd98872e7e008a545175f0.vi.png)

1. Tiếp theo, chúng ta sẽ thêm luồng tác nhân như một công cụ. Cuộn xuống và chọn **+ Add**.

       ![Chọn Add](../../../../../translated_images/3.2_47_AddTools.c7557e272bd731129dffe9edebba3b04170d27806aaa14fffbe3d66b7b61808b.vi.png)

1. Chọn luồng tác nhân đã tạo trước đó, **Notify Teams Applicant Channel**.

       ![Chọn luồng tác nhân](../../../../../translated_images/3.2_48_NotifyTeamsApplicantChannelAgentFlow.5985f570786edef4eac93455f7a07978c0daf54e1371660bfd56a4c16b6aaf79.vi.png)

1. Tiếp theo, chọn **Add and configure**.

       ![Chọn Add and configure](../../../../../translated_images/3.2_49_AddAndConfigure.c2d6cccfa9e4bb23ff58b615ad16d0b3ade4ef867b73b9196a45df6990d8072f.vi.png)

1. Trong phần **Inputs** của luồng tác nhân, ba đầu vào mà chúng ta đã cấu hình trước đó trong luồng tác nhân sẽ hiển thị. Theo mặc định, cấu hình **Fill using** được đặt thành **Dynamically fill with AI**. Chúng ta sẽ giữ nguyên cài đặt này vì lời nhắc từ trình kích hoạt sự kiện (trong hành động cuối cùng, **Sends a prompt to the specified copilot for processing** - đây là các bước 38-44 của **Lab 3.1 - Automate uploading resumes to Dataverse received by email**) sẽ chứa các giá trị tham số mà AI sẽ trích xuất.

       ![Đầu vào công cụ luồng tác nhân](../../../../../translated_images/3.2_50_Inputs.9fbb57b83b533d5a60f957505bb1e5430886ec9e6c70c10ed1c641d6b33fcc21.vi.png)

1. Bây giờ công cụ đã được thêm vào **Application Intake Agent**, hướng dẫn của tác nhân cần được cập nhật. Chọn biểu tượng **mũi tên quay lại** để trở về danh sách các tác nhân.

       ![Chọn biểu tượng mũi tên quay lại](../../../../../translated_images/3.2_51_SelectBack.6a9a55176d931895777822d3f9276d5d12ffe379a8860dd521e1c895e8188bba.vi.png)

1. Chọn **Application Intake Agent** trong tab **Agents** của **Hiring Agent**.

       ![Chọn Application Intake Agent](../../../../../translated_images/3.2_52_SelectApplicationIntakeAgent.039140313422e833389fd134b3a70a0eed11ba175ede5dbdc4abcce6004c7d2d.vi.png)

1. Trong trường **Instructions**, nhập một dòng mới sau hướng dẫn `2.Post-Upload`. Sao chép và dán hướng dẫn sau đây.

       ```text
       Process for Resume Upload via Email
       1. When you receive a message, **Send [ResumeId (text)] = "1680265f-5793-f011-b41b-7c1e525be9f7" and [ResumeTitle (text_1)] = "TAYLOR TESTPERSON (FICTITIOUS).pdf" and [ResumeNumber (text_2)]= "R01026" to the Tool "Notify Teams Applicant channel"** in the child agent "Application Intake Agent", call [AGENT FLOW PLACEHOLDER]
       ```

       ![Cập nhật hướng dẫn của Application Intake Agent](../../../../../translated_images/3.2_53_PasteCopiedInstructions.f24ed715e907cf023449a54b894354ca1252b198e9be694eec2875f7f647f9c2.vi.png)

1. Tô sáng văn bản `[AGENT FLOW PLACEHOLDER`.

       ![Tô sáng placeholder](../../../../../translated_images/3.2_54_HighlightPlaceholder.6c3fcac3c8f4fb6e5cce2dbd6b6548b84652d009e20fa4a01183a9a1b42b24fb.vi.png)

1. Nhập ký tự dấu gạch chéo, `/`, và chọn công cụ **Notify Teams Applicant Channel**.

       ![Chọn công cụ Notify Teams Applicant Channel](../../../../../translated_images/3.2_55_NotifyTeamsApplicatnChannelTool.2e3dd1e9ee9b2dfe10e1f2feb7e3b74b08856ce3afb16dafae1f2c4b73da904f.vi.png)
1. Luồng tác nhân bây giờ sẽ được kích hoạt bởi **Application Intake Agent** theo hướng dẫn, sau hành động cuối cùng (**Gửi một lời nhắc đến copilot được chỉ định để xử lý**) trong trình kích hoạt sự kiện gửi lời nhắc chứa các giá trị tham số trở lại cho tác nhân.

      Chọn **Save** để lưu các hướng dẫn đã cập nhật cho **Application Intake Agent**.

       ![Chọn Save](../../../../../translated_images/3.2_56_Save.6abb0131f96b20d3753b5990313eaea6a237bef2bf0e2103a2ee5ba570fd7c04.vi.png)

1. Các hướng dẫn sẽ được cập nhật sau khi tác nhân được lưu.

       ![Hướng dẫn đã được cập nhật](../../../../../translated_images/3.2_57_InstructionsUpdated.5bfbfe2ca1da16284358a9917246bd8676cd6c095839ed1c69361d992cacd2b3.vi.png)

1. Bây giờ chúng ta cần **Publish** **Hiring Agent**. Chọn **Publish** ở góc trên bên phải, và trong cửa sổ _Publish this agent_ xuất hiện, chọn **Publish**.

       ![Publish Hiring Agent](../../../../../translated_images/3.2_58_PublishAgent.e7ec81c81b735de0cd11516aa944c759ea510e2b0bc9acf9f00d42d788896991.vi.png)

1. Sau khi được xuất bản, một thông báo xác nhận sẽ xuất hiện rằng tác nhân đã được xuất bản.

       ![Thông báo xác nhận](../../../../../translated_images/3.2_59_AgentPublished.d15e01232544cf08943260dfbf61c92339dbd187620349e7c5a43add4796ed12.vi.png)

Bây giờ chúng ta có thể kiểm tra tác nhân!

### Lab 3.3 - Kiểm tra trình kích hoạt sự kiện

1. Để thực thi trình kích hoạt sự kiện, cần gửi một email kèm theo tệp PDF hồ sơ. Trong Outlook, soạn một email mới.

     | Thành phần Email | Chi tiết |
     |----------|------------|
     | **Người nhận** | Sử dụng tài khoản người dùng đã đăng nhập của bạn làm giá trị |
     | **Tệp đính kèm** | Tải lên tệp [TAYLOR TESTPERSON (FICTITIOUS)](../../../../../docs/operative-preview/test-data/resumes/TAYLOR%20TESTPERSON%20(FICTITIOUS).pdf) |
     | **Nội dung** | Sao chép và dán nội dung sau đây vào phần nội dung email |

       ```text
       Dear Hiring Manager,

       I am writing to express my interest in the Senior Power Platform Engineer position at your organization. With over nine years of experience delivering secure and scalable solutions on Microsoft cloud platforms, I am confident in my ability to contribute effectively to your team.

       In my most recent role as Lead Power Platform Engineer, I developed an automated resume-intake pipeline, reducing manual triage and improving searchability. I have delivered HR case management applications, introduced solution-aware flows, and implemented PR checks to enhance deployment lead times. My expertise includes Power Apps, Power Automate, Power Pages, Dataverse, and a range of Microsoft 365 services, as well as integration with Graph/REST APIs and Azure Functions.

       Previously, I developed Teams approvals with adaptive cards, cutting approval times to the same day, and created robust error-handling frameworks. My background also includes migrating legacy workflows to Power Automate and building self-service portals adopted by hundreds of employees.

       I hold a B.Sc. in Computer Science and am certified as a Power Platform Developer (PL-400) and Solution Architect (PL-600). I am also passionate about mentoring and have volunteered with local maker groups.

       Please find my CV attached for your consideration. I would welcome the opportunity to discuss how my skills and experience align with your needs.

       Thank you for your time and consideration.

       Kind regards,
       Taylor Testperson
       ```

       **Gửi** email sau khi soạn xong.

       ![Soạn email với tệp PDF đính kèm](../../../../../translated_images/3.3_01_ComposeEmailWithAttachment.eccba1bbcc276b4373277b193a66d8818b712c6ab9468ee12902545522b670f7.vi.png)

1. Trong cổng Power Automate maker cho luồng trình kích hoạt sự kiện, chọn biểu tượng **Refresh** để xem luồng đã chạy thành công cho email đã gửi.

       ![Chọn biểu tượng refresh để xem luồng chạy](../../../../../translated_images/3.3_02_FlowRun.0e99756ebc5fba371dc72719b0619736626934461e58db2dc153535cbabcc1e8.vi.png)

1. Quay lại Copilot Studio trong **Hiring Agent**, chọn tab **Activity**.

       ![Chọn tab Activity](../../../../../translated_images/3.3_03_SelectActivity.11d78735a8a2a1f64443d285deb47f2bacc5bd53ded039791215f9465dbc3f76.vi.png)

1. Tab **Activity** sẽ tải và hiển thị tất cả các hoạt động của **Hiring Agent**. Sẽ có một hoạt động với giá trị tên là **Automated** và trạng thái là **Complete**. Hoạt động này đại diện cho trình kích hoạt sự kiện và luồng tác nhân đã được kích hoạt.

       ![Hoạt động hoàn thành](../../../../../translated_images/3.3_04_StatusComplete.dbe14ffb9414b0f4d869841426c4ca595d7a664bf13f4b5e2e29a4e251b9064c.vi.png)

1. Chọn hoạt động, và chọn trình kích hoạt sự kiện trong bản đồ hoạt động. Ở bảng bên phải, chú ý cách các tham số đầu vào trong lời nhắc chứa các giá trị tham số `Resume Id`, `Resume Title` và `Resume Number` từ hàng **Dataverse** đã được tạo. Đây là từ các giá trị nội dung động được cấu hình trước đó trong các bước 18 - 27 của **Lab 3.1 - Tự động tải lên hồ sơ vào Dataverse nhận qua email**.

       ![Trình kích hoạt sự kiện](../../../../../translated_images/3.3_05_EventTrigger.cbd73cd43a79e88e782d1e47ac8ddacdbe30d582a4da61a31010f44a9dacdd12.vi.png)

1. Quay lại ứng dụng mô hình **Hiring Hub** và trong chế độ xem hệ thống **Resumes**, chọn **Refresh** để làm mới chế độ xem. Hàng mới được tạo cho hồ sơ đã được gửi qua email bây giờ sẽ được liệt kê vì nó đã được tạo thông qua trình kích hoạt sự kiện.

       ![Hàng hồ sơ được tạo](../../../../../translated_images/3.3_06_ResumeRowCreated.9ab850d8d7c066aad8531409b00a4de5f214b4d8d209d39fa0d493d5c55e041d.vi.png)

1. Quay lại Copilot Studio và chọn luồng tác nhân **Notify Teams Applicant Channel** trong **Application Intake Agent** trong bản đồ hoạt động. Ở bảng bên phải, chú ý cách các đầu vào có giá trị từ hàng Dataverse. Đây là từ lời nhắc được gửi bởi hành động cuối cùng (**Gửi một lời nhắc đến copilot được chỉ định để xử lý**) trong trình kích hoạt sự kiện chứa các giá trị tham số từ hàng Dataverse mới được tạo. Đây là cách chúng ta có thể truyền các giá trị tham số từ trình kích hoạt sự kiện đến các luồng tác nhân.

       ![Chọn luồng tác nhân](../../../../../translated_images/3.3_07_NotifyTeamsApplicantChannel.9b6c4654197efca9c88dde72cfb38812038ef5f6bdce8c309046c02643092bb6.vi.png)

1. Cuối cùng, hãy xem thẻ thích ứng được đăng lên kênh trong **Microsoft Teams**. Trong kênh, chúng ta sẽ thấy thẻ thích ứng hiển thị thông tin về hàng Hồ sơ mới được tạo trong Dataverse. Di chuột qua liên kết ở đầu thẻ thích ứng, chú ý cách URL là URL chế độ xem hệ thống Resumes mà chúng ta đã cấu hình trước đó trong JSON (các bước 15 - 19 của **Lab 3.2 - Thông báo một kênh Teams bằng thẻ thích ứng**) payload của thẻ thích ứng.

       ![Thẻ thích ứng URL chế độ xem bảng Resumes](../../../../../translated_images/3.3_08_AdaptiveCardResumeTableURL.5a59821d60c8698e5c9e4746806b975bbdf3c4400dc0bb02a53f350bdea569e9.vi.png)

1. Chọn liên kết, và bạn sẽ được chuyển đến chế độ xem hệ thống Resumes trong ứng dụng mô hình **Hiring Hub** trên trình duyệt của bạn.

       ![Chế độ xem hệ thống Resumes trong ứng dụng mô hình Hiring Hub](../../../../../translated_images/3.3_09_ResumeTableSystemView.81f52ab85aadda7d9131ced31d024fb4b411ccf600dd230d9d7e931c476e271c.vi.png)

1. Quay lại thẻ thích ứng được đăng lên kênh trong Microsoft Teams. Lần này, di chuột qua **View Resume**, đây là hành động `Action.OpenURL` của thẻ thích ứng. Chú ý cách URL là hàng Resumes mà chúng ta đã cấu hình trước đó trong JSON (các bước 30 - 36 của **Lab 3.2 - Thông báo một kênh Teams bằng thẻ thích ứng**) payload của thẻ thích ứng.

       ![Thẻ thích ứng URL hàng Resumes](../../../../../translated_images/3.3_10_AdaptiveCardResumeRowURL.2063a075c2d4adec27dfcc2ea4c01a385d791e0c4fc127caba912bde14bf77d6.vi.png)

1. Chọn hành động, và bạn sẽ được chuyển đến biểu mẫu hàng Resumes trong ứng dụng mô hình **Hiring Hub** trên trình duyệt của bạn.

       ![Hàng Resumes trong ứng dụng mô hình Hiring Hub](../../../../../translated_images/3.3_11_ResumeRow.6f051ed512d396712a04ee98319d6643516e0bbfbf8a9de07d3df7d264563b9c.vi.png)

## ✅ Hoàn thành nhiệm vụ

Chúc mừng! 👏🏻 Làm tốt lắm, Chiến binh.

✅ Trình kích hoạt sự kiện: bạn đã tạo một trình kích hoạt sự kiện truyền các giá trị tham số Dataverse đến một luồng tác nhân.  
✅ Xây dựng luồng tác nhân: sử dụng các giá trị tham số Dataverse để đăng một thẻ thích ứng lên kênh trong Microsoft Teams nhằm thông báo cho đội ngũ tuyển dụng nhân sự.  
✅ Cập nhật hướng dẫn tác nhân con: để kích hoạt luồng sau khi trình kích hoạt sự kiện hoàn thành.

Điều này cho phép **Hiring Agent** hoạt động tự động bất cứ khi nào nhận được hồ sơ dưới dạng tệp đính kèm email và thông báo cho đội ngũ tuyển dụng nhân sự để xem xét thủ công.

Đây là phần kết thúc của **Lab 03 - Tự động hóa email ứng tuyển của ứng viên**, chọn liên kết dưới đây để chuyển sang bài học tiếp theo.

⏭️ [Chuyển đến bài học **Authoring Agent Instructions**](../04-agent-instructions/README.md)

## 📚 Tài nguyên chiến thuật

📖 [Làm cho tác nhân của bạn tự động trong Copilot Studio](https://learn.microsoft.com/training/modules/autonomous-agents-online-workshop/?WT.mc_id=power-188561-ebenitez)

📖 [Thêm một trình kích hoạt sự kiện](https://learn.microsoft.com/microsoft-copilot-studio/authoring-trigger-event?WT.mc_id=power-188561-ebenitez)

📖 [Sử dụng luồng tác nhân với tác nhân của bạn](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow?WT.mc_id=power-188561-ebenitez)

📖 [Giới thiệu về trình kích hoạt Power Automate](https://learn.microsoft.com/power-automate/triggers-introduction?WT.mc_id=power-188561-ebenitez)

📖 [Sử dụng luồng Power Automate với tác nhân](https://learn.microsoft.com/microsoft-copilot-studio/advanced-flow-create?WT.mc_id=power-188561-ebenitez)

📖 [Ngăn ngừa mất dữ liệu cho Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention?WT.mc_id=power-188561-ebenitez)

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.