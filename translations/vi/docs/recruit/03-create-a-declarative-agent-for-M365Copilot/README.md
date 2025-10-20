<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "723c35983c8885e2ad1698305c040745",
  "translation_date": "2025-10-20T00:31:37+00:00",
  "source_file": "docs/recruit/03-create-a-declarative-agent-for-M365Copilot/README.md",
  "language_code": "vi"
}
-->
# 🚨 Nhiệm vụ 03: Triển khai Đại lý Khai báo cho Microsoft 365 Copilot

## 🕵️‍♂️ MẬT DANH: `OPERATION COPILOT EXTENSION`

> **⏱️ Thời gian thực hiện nhiệm vụ:** `~60 phút`

🎥 **Xem video hướng dẫn**

[![Hình thu nhỏ video Tạo Đại lý Khai báo](../../../../../translated_images/video-thumbnail.3405ba2c516e48afc544f051cc0ddf43eaee2f01cf32af9c02aa8c5e6968a38b.vi.jpg)](https://www.youtube.com/watch?v=BVNUmLXFCq8 "Xem video hướng dẫn trên YouTube")

## 🎯 Tóm tắt nhiệm vụ

Chào mừng bạn đến với nhiệm vụ thực địa đầu tiên, Nhà sáng tạo Đại lý. Bạn đã được chọn để thiết kế, trang bị và triển khai một Đại lý Khai báo—một nhân viên chuyên biệt được tích hợp trực tiếp vào Microsoft 365 Copilot và Microsoft Teams.

Không giống như các đại lý truyền thống, đại lý khai báo hoạt động với một nhiệm vụ được xác định (hướng dẫn), công cụ (lời nhắc/kết nối), và quyền truy cập chiến lược vào nguồn thông tin nội bộ (các nguồn kiến thức như SharePoint, Dataverse, và nhiều hơn nữa). Nhiệm vụ của bạn là xây dựng đại lý này bằng Microsoft Copilot Studio—một trung tâm điều khiển không cần mã nơi kỹ năng và mục đích của đại lý được hiện thực hóa.

Hãy bắt đầu.

## 🔎 Mục tiêu

Trong nhiệm vụ này, bạn sẽ học:

1. Hiểu đại lý khai báo là gì và cách chúng mở rộng Microsoft 365 Copilot với các khả năng tùy chỉnh
1. So sánh Microsoft Copilot Studio và trình tạo đại lý Copilot Studio để xây dựng đại lý khai báo
1. Tạo một đại lý khai báo bằng ngôn ngữ tự nhiên thông qua trải nghiệm tạo hội thoại
1. Thêm các lời nhắc AI làm công cụ để nâng cao kiến thức chuyên môn và khả năng giải quyết vấn đề của đại lý
1. Xuất bản và kiểm tra đại lý khai báo của bạn trong Microsoft 365 Copilot và Microsoft Teams

## 🕵🏻‍♀️ Đại lý khai báo cho Microsoft 365 Copilot là gì?

Đại lý khai báo là phiên bản tùy chỉnh của Microsoft 365 Copilot. Bạn có thể tùy chỉnh Microsoft 365 Copilot để đáp ứng các nhu cầu kinh doanh cụ thể bằng cách cung cấp hướng dẫn để hỗ trợ một quy trình cụ thể, kết nối với kiến thức doanh nghiệp và sử dụng các công cụ để mở rộng khả năng. Điều này cho phép các tổ chức tạo ra trải nghiệm cá nhân hóa với chức năng cao hơn cho người dùng của họ.

## 🤔 Tại sao tôi nên sử dụng Microsoft Copilot Studio để xây dựng một đại lý khai báo?

Là một nhà sáng tạo, có thể bạn đã khám phá [trình tạo đại lý Copilot Studio](https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-studio-agent-builder?WT.mc_id=power-172614-ebenitez) trong Microsoft 365 Copilot và bạn có thể đang tự hỏi _tại sao lại xây dựng một đại lý khai báo trong Microsoft Copilot Studio?_

Microsoft Copilot Studio cung cấp một bộ công cụ và tính năng toàn diện cho các đại lý khai báo vượt xa giới hạn của trình tạo đại lý Copilot Studio. Tương tự như trình tạo đại lý Copilot Studio, bạn không cần biết lập trình hoặc phát triển phần mềm để xây dựng trong Microsoft Copilot Studio. Hãy phân tích sâu hơn để hiểu sự khác biệt giữa trình tạo đại lý Copilot Studio và Copilot Studio trong việc xây dựng các đại lý khai báo.

### So sánh tính năng

Bảng sau đây nêu bật sự khác biệt khi xây dựng một đại lý khai báo trong trình tạo đại lý Copilot Studio và Copilot Studio.

| Tính năng                   | Trình tạo đại lý Copilot Studio trong Microsoft 365 Copilot                          | Mở rộng Microsoft 365 Copilot trong Copilot Studio                                |
|---------------------------|-------------------------------------------------------|------------------------------------------------------------|
| **Kiến thức**       | Web, SharePoint, trò chuyện Microsoft Teams, email Outlook, kết nối Copilot     | Tìm kiếm web (qua Bing), SharePoint, Dataverse, Dynamics 365, kết nối Copilot  |
| **Công cụ**       | Trình thông dịch mã, trình tạo hình ảnh     | 1400+ kết nối Power Platform, kết nối tùy chỉnh, lời nhắc, sử dụng máy tính, REST API, Giao thức Ngữ cảnh Mô hình   |
| **Lời nhắc khởi đầu**         | Cấu hình lời nhắc để người dùng bắt đầu nhanh chóng   | Cấu hình lời nhắc để người dùng bắt đầu nhanh chóng  |
| **Kênh**           | Đại lý chỉ được xuất bản lên Microsoft 365 Copilot     | Đại lý được xuất bản lên Microsoft 365 Copilot và Microsoft Teams      |
| **Quyền chia sẻ**         | Người dùng chỉ là người xem    | Người dùng có thể là người chỉnh sửa hoặc người xem   |

Có nhiều khả năng hơn được cung cấp cho các đại lý khai báo được xây dựng trong Microsoft Copilot Studio mà chúng ta sẽ tìm hiểu tiếp theo.

!!! tip
    - Để tìm hiểu thêm về trình tạo đại lý Copilot Studio, hãy truy cập [Copilot Developer Camp: Lab MAB1 - Xây dựng đại lý đầu tiên của bạn](https://microsoft.github.io/copilot-camp/pages/make/agent-builder/01-first-agent/)
    - Để phát triển chuyên sâu mở rộng đại lý khai báo vượt ra ngoài trình tạo đại lý Copilot Studio cho Microsoft 365 Copilot, hãy truy cập [Copilot Developer Camp: Lab MAB1 - Xây dựng đại lý đầu tiên của bạn](https://microsoft.github.io/copilot-camp/pages/extend-m365-copilot/)

### Mở rộng Microsoft 365 Copilot với các đại lý khai báo được xây dựng trong Copilot Studio

Hãy mở rộng những gì chúng ta đã học từ bảng so sánh tính năng.

#### Tùy chỉnh

- **Hướng dẫn chi tiết**: Bạn có thể cung cấp hướng dẫn chi tiết và khả năng để xác định mục đích và hành vi của đại lý một cách chính xác.
  - Điều này bao gồm việc sử dụng các công cụ chỉ bằng ngôn ngữ tự nhiên.

- **Truy cập kiến thức doanh nghiệp**: Cho phép truy cập vào kiến thức doanh nghiệp mà vẫn tôn trọng quyền của người dùng.
  - Tích hợp SharePoint
  - Tích hợp Dataverse
  - Tích hợp Dynamics 365
  - Các kết nối Microsoft 365 Copilot được kích hoạt bởi quản trị viên tổ chức của bạn

   ![Tùy chỉnh](../../../../../translated_images/3.0_01_Customization.b8e31d7637b02ec72f4bbb3b25a5ae6339af4424d212a6120ca2c437bb5cf150.vi.png)

#### Khả năng nâng cao

- **Tích hợp với các dịch vụ bên ngoài**: Cho phép bạn chọn từ hơn 1400+ kết nối Power Platform tích hợp với các dịch vụ bên ngoài, cung cấp các chức năng phức tạp và mạnh mẽ hơn.
  - Ví dụ bao gồm [docusign](https://learn.microsoft.com/connectors/docusign/?WT.mc_id=power-172614-ebenitez), [ServiceNow](https://learn.microsoft.com/connectors/service-now/?WT.mc_id=power-172614-ebenitez), [Salesforce](https://learn.microsoft.com/connectors/salesforce/?WT.mc_id=power-172614-ebenitez), [SAP](https://learn.microsoft.com/connectors/sap/?WT.mc_id=power-172614-ebenitez) và nhiều hơn nữa
  - Ngoài ra, bạn cũng có thể tận dụng các máy chủ Giao thức Ngữ cảnh Mô hình và REST API trực tiếp trong đại lý khai báo của mình

- **Lời nhắc AI**: Sử dụng lời nhắc để phân tích và chuyển đổi văn bản, tài liệu, hình ảnh và dữ liệu bằng ngôn ngữ tự nhiên và lý luận AI.
  - Chọn mô hình trò chuyện, chọn từ Cơ bản (Mặc định), Tiêu chuẩn, Cao cấp
  - Tùy chọn sử dụng mô hình Azure AI Foundry của riêng bạn để làm nền tảng cho lời nhắc

- **Nhiều tùy chọn cấu hình triển khai hơn**: Chọn kênh và xác định quyền người dùng.
  - Xuất bản lên Microsoft Teams, giao diện người dùng quen thuộc cho người dùng của bạn để nhanh chóng áp dụng
  - Quyền chỉnh sửa của người dùng có thể được chia sẻ để tránh phụ thuộc vào một người sở hữu đại lý

   ![Tùy chỉnh](../../../../../translated_images/3.0_02_AdvancedCapabilities.567f1ad30242874e1fef898b809026bfa893c5758f15366e1ba71587f8ff4784.vi.png)

Tóm lại, các đại lý khai báo trong Microsoft Copilot Studio cho phép tùy chỉnh Microsoft 365 Copilot để phù hợp với nhu cầu kinh doanh thông qua việc tích hợp hệ thống kiến thức doanh nghiệp, công cụ kết nối với các dịch vụ bên ngoài hoặc mô hình AI GPT.

## 🧪 Phòng thí nghiệm 03: Xây dựng đại lý khai báo trong Microsoft Copilot Studio cho Microsoft 365 Copilot

Tiếp theo, chúng ta sẽ học cách xây dựng một đại lý khai báo cho trường hợp sử dụng "Doanh nghiệp đến Nhân viên" (Business-to-Employee), đóng vai trò như một **đại lý hỗ trợ kỹ thuật IT**.

- [3.1 Tạo một đại lý khai báo](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.2 Tạo và thêm lời nhắc cho đại lý khai báo của bạn](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.3 Cập nhật hướng dẫn và kiểm tra đại lý khai báo của bạn](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)
- [3.4 Xuất bản đại lý khai báo của bạn lên Microsoft 365 Copilot và Microsoft Teams](../../../../../docs/recruit/03-create-a-declarative-agent-for-M365Copilot)

!!! note
    Phòng thí nghiệm này sẽ hướng dẫn các bước để thêm một Lời nhắc làm công cụ. Các bài học tiếp theo sẽ đi sâu vào việc thêm các nguồn kiến thức và các công cụ khác có sẵn. Đơn giản hóa để bạn dễ học 😊

### 👩🏻‍💼 Hiểu về Doanh nghiệp đến Nhân viên (B2E)

Doanh nghiệp đến Nhân viên (B2E) đề cập đến các tương tác và dịch vụ mà một doanh nghiệp cung cấp trực tiếp cho nhân viên của mình. Trong bối cảnh của một đại lý, điều này có nghĩa là sử dụng các khả năng tiên tiến của Copilot Studio để hỗ trợ và nâng cao trải nghiệm làm việc của nhân viên trong tổ chức.

### ✨ Kịch bản sử dụng

**Là một** nhân viên

**Tôi muốn** nhận được sự hỗ trợ nhanh chóng và chính xác từ đại lý hỗ trợ kỹ thuật IT cho các vấn đề như sự cố thiết bị, khắc phục sự cố mạng, cài đặt máy in

**Để tôi có thể** duy trì năng suất và giải quyết các vấn đề kỹ thuật mà không bị trì hoãn

Hãy bắt đầu!

### Điều kiện tiên quyết

- Nhà sáng tạo phải có quyền tạo và truy cập vào môi trường Copilot Studio.

!!! note "Lưu ý về giấy phép"
    Phòng thí nghiệm này sẽ hướng dẫn các bước để thêm một Lời nhắc làm công cụ. Các bài học tiếp theo sẽ đi sâu vào việc thêm các nguồn kiến thức và các công cụ khác có sẵn. Đơn giản hóa để bạn dễ học 😊
  
    Bạn không cần giấy phép người dùng Microsoft 365 Copilot để xuất bản đại lý khai báo của mình được xây dựng trong Copilot Studio lên Microsoft 365 Copilot. Tuy nhiên **người dùng** của _đại lý khai báo đã xuất bản_ trong Microsoft 365 Copilot cần có giấy phép người dùng Microsoft 365 Copilot.

### 3.1 Tạo một đại lý khai báo

!!! warning "Các câu hỏi của Copilot có thể khác nhau giữa các phiên"

    Trải nghiệm tạo hội thoại của Copilot có thể thay đổi mỗi lần, các câu hỏi được cung cấp để hướng dẫn có thể hơi khác so với trước đây.

1. Truy cập [https://copilotstudio.microsoft.com/](https://copilotstudio.microsoft.com/) và đăng nhập bằng thông tin đăng nhập của bạn. Đảm bảo chuyển sang môi trường mà bạn đang sử dụng cho các phòng thí nghiệm này.

1. Chọn **Agents** từ menu và chọn **Copilot for Microsoft 365**.

       ![Copilot for Microsoft 365](../../../../../translated_images/3.1_02_CopilotForM365.4cce9148fb63c947b54d30b7ba59c394d3ce84aab6d08a008fc7212bdfc94af2.vi.png)

1. Tiếp theo, chúng ta sẽ tạo một đại lý khai báo bằng cách chọn **+ Add** agent.

       ![Add Agent](../../../../../translated_images/3.1_03_AddAgent.1971234c27e9cd9f17c73e6214045224638279df05417f7af6a5f446158d39de.vi.png)

1. Sau đó, chúng ta sẽ thấy trải nghiệm tạo hội thoại tải lên, nơi chúng ta có thể trò chuyện bằng ngôn ngữ tự nhiên với Copilot để mô tả đại lý khai báo mà chúng ta muốn xây dựng và sử dụng các câu hỏi được cung cấp để hướng dẫn.

       Hãy nhập một mô tả chi tiết bao gồm các nội dung sau,  
       - nhiệm vụ của đại lý  
       - loại câu hỏi mà nó có thể xử lý  
       - định dạng của phản hồi  
       - mục tiêu của đại lý  
    
       ```text
       Bạn là một chuyên gia IT có kỹ năng cao và kinh nghiệm trong nhiều hệ thống máy tính, mạng và an ninh mạng. Bạn có khả năng chẩn đoán và giải quyết các vấn đề kỹ thuật, giải thích các giải pháp một cách rõ ràng và dễ hiểu cho người dùng ở mọi cấp độ kỹ thuật, và cung cấp hướng dẫn về các thực hành tốt nhất. Bạn nên ngắn gọn và thông tin, sử dụng hướng dẫn từng bước với các dấu đầu dòng khi cần thiết. Mục tiêu của bạn là giúp người dùng hiểu vấn đề và cách giải quyết nó một cách hiệu quả.
       ```
    
       ![Create Prompt](../../../../../translated_images/3.1_04_CreatePrompt.089a4778ab7e652d18695bb2e792db64e2754c8140d5fd63e76b9eefb52bdf13.vi.png)

1. Sau khi gửi lời nhắc, một cập nhật đáng chú ý sẽ xuất hiện ở bảng bên phải với các chi tiết và hướng dẫn của đại lý như được định nghĩa bởi lời nhắc. Tiếp theo, bạn sẽ được yêu cầu xác nhận tên của đại lý và Copilot sẽ gợi ý một tên.

       Nhập `yes` để chấp nhận tên được gợi ý hoặc nhập một tên khác như sau,
    
       ```text
       Contoso Tech Support Pro
       ```
    
       ![Instructions updated](../../../../../translated_images/3.1_05_InstructionsUpdated.110cd93fa69ba2627e59aef2c555eebe7f91a85880b094cde9205b2069991a9d.vi.png)

    !!! warning "Nhắc nhở: Các câu hỏi của Copilot có thể khác nhau giữa các phiên"

        Trải nghiệm tạo hội thoại của Copilot có thể thay đổi mỗi lần, các câu hỏi được cung cấp để hướng dẫn có thể hơi khác so với trước đây.

1. Tên của đại lý đã được cập nhật như thấy ở bảng bên phải. Chúng ta được yêu cầu tinh chỉnh hướng dẫn cho đại lý. Những gì Copilot gợi ý nghe có vẻ tuyệt vời nên chúng ta sẽ yêu cầu nó sử dụng các gợi ý của chính nó. Nhập nội dung sau,

      ```text
      Focus on the IT issues and scenarios you've identified
      ```

      ![Name updated](../../../../../translated_images/3.1_06_NameUpdated.b6b8cc7c670b77c635d6b54b723e1a83f63ec288c0eab260fdbf88c7ec163003.vi.png)

1. Tiếp theo, chúng ta sẽ được hỏi liệu có muốn thêm bất kỳ trang web công khai hoặc kiến thức nào không. Chúng ta sẽ trả lời `No` vì chỉ thêm một lời nhắc cho đại lý khai báo trong phòng thí nghiệm này. Các phòng thí nghiệm tiếp theo trong các bài học tương lai sẽ đề cập đến các nguồn kiến thức.

      ![No websites or knowledge sources added](../../../../../translated_images/3.1_07_KnowledgeSources.2001faa25aab922f38da82a8602e68b3ad7153941e87bab0949177e0b2ab0c08.vi.png)

1. Sau đó, chúng ta sẽ thấy phản hồi từ Copilot rằng chúng ta đã hoàn thành việc cấu hình đại lý của mình bằng trải nghiệm tạo hội thoại của Copilot. Tuy nhiên, hãy tinh chỉnh thêm bằng cách nêu rõ rằng nó nên ngắn gọn và thông tin với các dấu đầu dòng, sử dụng sự đồng cảm trong giao tiếp, và yêu cầu phản hồi sau khi cung cấp giải pháp.

    ```text
    Concise and Informative:
    - Bullet Points: Use bullet points for clarity and to break down information into digestible parts.
    - Summarize: Provide a brief summary of the solution at the end of the explanation.
   
    User-Friendly Communication:
    - Empathy: Show empathy and understanding of the user's frustration or confusion.
    - Encouragement: Encourage users by acknowledging their efforts and progress.
   
    Interactive and Engaging:
    - Ask for Feedback: After providing a solution, ask if the user needs further assistance or if the solution worked.
    ```

      ![Update agent instructions](../../../../../translated_images/3.1_08_FurtherRefinements.993926c4e55cc5133413f4e10a61a6ed43351d070e791db0ee5547ea83f46473.vi.png)

1. Copilot xác nhận rằng các hướng dẫn đã được cập nhật. Nhấp vào **Create** để tạo đại lý khai báo cho Microsoft 365 Copilot.

      ![Create agent](../../../../../translated_images/3.1_09_CreateDeclarativeAgent.71442cd4e18105359e55016d92e54b74ac18977bb535c637a05bac0d3680a3c5.vi.png)

    !!! warning "Nhắc nhở: Các câu hỏi của Copilot có thể khác nhau giữa các phiên"

        Trải nghiệm tạo hội thoại của Copilot có thể thay đổi mỗi lần, các câu hỏi được cung cấp để hướng dẫn có thể hơi khác so với trước đây.

1. Khi đại lý đã được tạo, bạn sẽ thấy các chi tiết của đại lý bao gồm mô tả và các hướng dẫn được định nghĩa trong trải nghiệm tạo hội thoại của Copilot.
![Chi tiết về Agent](../../../../../translated_images/3.1_10_01_AgentDetails.fb8fe8548ca78833acf1048565e0e00b8eeb4132bc7c425d4532048df090b67b.vi.png)

Cuộn xuống bảng điều khiển và bạn sẽ thấy các khả năng như thêm kiến thức, kích hoạt tìm kiếm web (qua Bing), các gợi ý khởi đầu và chi tiết xuất bản của agent khai báo cho Microsoft 365 Copilot. Các gợi ý khởi đầu cũng sẽ hiển thị trong bảng kiểm tra ở phía bên phải. Người dùng có thể chọn các gợi ý khởi đầu này để bắt đầu tương tác với agent.

![Gợi ý được đề xuất](../../../../../translated_images/3.1_10_02_SuggestedPrompts.28d2d4b5ba42f988d9f280cff55ee3fb8f3317a04a298e0ccfbdb5812a5023e8.vi.png)

1. Trong phần Chi tiết của agent, bạn cũng có thể thay đổi biểu tượng của agent. Chọn **Edit**.

![Chỉnh sửa chi tiết](../../../../../translated_images/3.1_11_01_EditDetails.ae1ac52a9966c28edb74ee2884ca25e465eda7342d098446b9c7c62f2268cbf0.vi.png)

Tại đây, bạn có thể thay đổi biểu tượng và màu nền. Chọn **Save** và sau đó chọn **Save** một lần nữa để cập nhật chi tiết của agent.

![Thay đổi biểu tượng](../../../../../translated_images/3.1_11_02_ChangeIcon.1d0b6fa41429d8e8576d0288a1c900ce01b203eb7a86d728b9f46b7685d3c5f2.vi.png)

1. Hãy thử nghiệm nhanh với agent mà chúng ta vừa tạo. Chọn một trong các **Gợi ý khởi đầu** trong bảng kiểm tra ở phía bên phải.

![Kiểm tra gợi ý khởi đầu](../../../../../translated_images/3.1_12_TestUsingStarterPrompt.4646f93c027503eaa719d98a1634206abf6f48ad11279e231e43b14f89a3034e.vi.png)

1. Agent của chúng ta sẽ phản hồi. Lưu ý cách nó tuân theo hướng dẫn bằng cách cung cấp các điểm chính dưới dạng các phần dễ hiểu và sử dụng sự đồng cảm trong phản hồi của mình.

Nếu bạn cuộn xuống cuối tin nhắn, hãy chú ý cách nó cũng yêu cầu phản hồi sau khi cung cấp giải pháp như đã được hướng dẫn.

![Phản hồi từ kiểm tra](../../../../../translated_images/3.1_13_TestResponse.a7ca7356e21ed8a5a794eaae86fd2431f86fe71aea9df6e95d04858cf76a61b4.vi.png)

Chỉ trong vài phút, bạn đã thêm một agent khai báo cho Microsoft 365 Copilot trong Copilot Studio 🙌🏻

Tiếp theo, chúng ta sẽ học cách thêm một công cụ vào agent của mình, chúng ta sẽ tạo một gợi ý.

### 3.2 Tạo và thêm gợi ý cho agent khai báo của bạn

1. Cuộn xuống phần **Tools** và chọn **+ Add tool**

![Thêm công cụ](../../../../../translated_images/3.2_01_AddTool.4c788e69f1ab437eb030de94bac204193f9c5e945873755f4fe7b9e62a846db3.vi.png)

1. Hộp thoại Tools sẽ xuất hiện và danh sách các kết nối Power Platform được hiển thị. Để thêm một Gợi ý, chọn **+ New tool**.

![Công cụ mới](../../../../../translated_images/3.2_02_NewTool.34502593943d37ea113a4c47b419be037906d968cf28c628041810b0bbb9c842.vi.png)

1. Một danh sách các công cụ khác sẽ được hiển thị - Gợi ý, Kết nối tùy chỉnh, REST API và Model Context Protocol. Nếu tổ chức của bạn đáp ứng [yêu cầu sử dụng máy tính](https://learn.microsoft.com/microsoft-copilot-studio/computer-use?tabs=new#requirements/?WT.mc_id=power-172614-ebenitez), điều này cũng sẽ xuất hiện trong danh sách. Chọn **Prompt**.

![Chọn gợi ý](../../../../../translated_images/3.2_03_SelectPrompt.167f376cc35bd3b58a2ddcb6e1fb2fa5f7328c8da549c3caffbdfa1ed792e8f6.vi.png)

1. Nhập tên cho gợi ý. Hãy đặt tên cho gợi ý của chúng ta là `IT Expert`.

![Nhập tên](../../../../../translated_images/3.2_04_NamePrompt.67178a4b79333994794e77a58448f1f1f80227fdbc16b21a4b88bc0b905b33aa.vi.png)

1. Chọn **biểu tượng mũi tên** bên cạnh **Model** để xem các mô hình trò chuyện khác nhau mà bạn có thể chọn. Theo mặc định, mô hình **Basic GPT-4.1 mini** được chọn và bạn cũng có tùy chọn sử dụng mô hình của riêng mình thông qua Azure AI Foundry Models. Chúng ta sẽ giữ nguyên mô hình mặc định đã chọn.

![Thay đổi mô hình](../../../../../translated_images/3.2_05_ChangeModel.8a75ced775c7a4cffa706207974fdb262fb706f80b5ca021bbcf2efa7319e460.vi.png)

1. Tiếp theo, chúng ta sẽ cung cấp hướng dẫn cho gợi ý của mình. Có 3 phương pháp mà bạn có thể chọn:

   - Sử dụng Copilot để tạo hướng dẫn dựa trên mô tả của bạn về những gì bạn muốn gợi ý thực hiện.
   - Sử dụng mẫu có sẵn từ thư viện gợi ý để tạo gợi ý.
   - Tự nhập hướng dẫn của riêng bạn.

1. Hãy thử sử dụng Copilot để tạo hướng dẫn dựa trên mô tả đã nhập. Nhập nội dung sau vào trường Copilot và gửi.

      ```text
      I need an IT expert that can help answer questions related to networking, computer systems, user devices and anything else IT related
      ```

![Bắt đầu với Copilot](../../../../../translated_images/3.2_06_UseCopilot_EnterPrompt.844ae5bc3ea5b59016da38ea8563e2554cdb82d6d2185c080c4a263b595eb2d0.vi.png)

1. Copilot sẽ bắt đầu tạo một gợi ý cho chúng ta.

![Copilot tạo gợi ý](../../../../../translated_images/3.2_07_CopilotDraftingPrompt.ae455082f5d3ed62c586e140b4d5a8a3e822f0b86da01aa61ebb722fc7453310.vi.png)

1. Bản hướng dẫn nháp do Copilot tạo sẽ xuất hiện.

![Hướng dẫn nháp do Copilot tạo](../../../../../translated_images/3.2_08_CopilotGeneratedInstructions.49fd579bc80276690ac5d912f451d525669fe07d7f37d85580888a441ecdbc0e.vi.png)

1. Cuộn xuống cuối hướng dẫn và bạn sẽ thấy tham số đầu vào của người dùng đã được Copilot định nghĩa. Sau đó, bạn có tùy chọn:
   - Giữ lại hướng dẫn nháp đã tạo.
   - Làm mới hướng dẫn nháp bằng Copilot.
   - Xóa hướng dẫn nháp.

   Xóa hướng dẫn nháp bằng cách chọn biểu tượng **thùng rác** và chúng ta sẽ thử thư viện gợi ý tiếp theo.

![Hướng dẫn gợi ý](../../../../../translated_images/3.2_09_Options.70bf40809229eda4d5013f03cc77a0f93c780df791aacddd56bcf4c9b70377b9.vi.png)

1. Chọn liên kết **prompt template**.

![Chọn mẫu gợi ý](../../../../../translated_images/3.2_10_SelectPromptLibrary.dacbf227258c997904b33db61240a4379300599fe2c5a08e0cb588d3530a6bfe.vi.png)

1. Bạn sẽ thấy danh sách các mẫu gợi ý để chọn. Đây là từ [Thư viện gợi ý Power Platform](https://aka.ms/power-prompts).

![Thư viện gợi ý](../../../../../translated_images/3.2_11_PromptLibrary.67d20018c8a75228f385e6bcda52e0e4867f84696fac1ef14bc190e203fe87a1.vi.png)

1. Tìm kiếm gợi ý `IT expert` và chọn nó.

![Chọn gợi ý IT expert](../../../../../translated_images/3.2_12_ITExpertPrompt.a9c5f4a7b5f82691c77074e4bdf6a236f3e934d4a5604ace2ff2196b01d35ecd.vi.png)

1. Gợi ý sẽ được thêm vào dưới dạng hướng dẫn với tham số đầu vào được định nghĩa bởi mẫu gợi ý. Tương tự như cách chúng ta cung cấp hướng dẫn cho agent trong trải nghiệm tạo hội thoại với Copilot, mẫu gợi ý này phác thảo:
   - một nhiệm vụ,
   - loại câu hỏi mà nó có thể xử lý,
   - và định dạng phản hồi cùng mục tiêu của gợi ý.

![Hướng dẫn gợi ý](../../../../../translated_images/3.2_13_ITExpertPromptInstructions.3d2bde84982eddb06f9fa627377316e2090e5a83f3a41669cc8f5a8b5615a3b3.vi.png)

1. Xóa hướng dẫn và chúng ta sẽ thử nhập hướng dẫn thủ công. Chúng ta sẽ sử dụng [gợi ý IT Expert](https://adoption.microsoft.com/sample-solution-gallery/sample/pnp-powerplatform-prompts-it-expert/) từ [Thư viện gợi ý Power Platform](https://aka.ms/power-prompts). Sao chép và dán gợi ý.

    ```text
    I want you to act as an IT Expert. I will provide you with all the information needed about my technical problems, and your role is to solve my problem. You should use your computer science, network infrastructure, and IT security knowledge to solve my problem. Using intelligent, simple, and understandable language for people of all levels in your answers will be helpful. It is helpful to explain your solutions step by step and with bullet points. Try to avoid too many technical details, but use them when necessary. I want you to reply with the solution, not write any explanations. My problem is [Problem]
    ```

![Hướng dẫn gợi ý](../../../../../translated_images/3.2_14_PromptInstructions.029c8470b6410bd0ceaf4e0b34ae8d1443f723b36a2dedadba0b6f3cfccee948.vi.png)

1. Tiếp theo, chúng ta có thể định nghĩa các tham số đầu vào của người dùng cho gợi ý của mình. Đây có thể là văn bản và hình ảnh, cùng dữ liệu mẫu để kiểm tra. Cũng có khả năng liên kết gợi ý với kiến thức từ các bảng Dataverse. Trong bài tập này, chúng ta chỉ có một đầu vào của người dùng cần định nghĩa, đó là đầu vào vấn đề. Hiện tại, đây là một chỗ giữ chỗ trong gợi ý của chúng ta là `[Problem]`. Bây giờ chúng ta sẽ cấu hình đầu vào này bằng cách nhập ký tự `/` hoặc chọn **+Add content** và sau đó chọn **Text**.

![Đầu vào văn bản](../../../../../translated_images/3.2_15_AddContent.e22d953755c66776aeab162923eaf0ac9e7c965008742eb1c6b6431b92f49aff.vi.png)

1. Bây giờ chúng ta có thể nhập tên cho tham số đầu vào và dữ liệu mẫu.

   Nhập nội dung sau làm tên:

    ```text
    problem input
    ```

   Nhập nội dung sau làm dữ liệu mẫu:

    ```text
    My laptop gets an error with a blue screen
    ```

   Sau đó chọn **Close**.

![Cấu hình đầu vào vấn đề](../../../../../translated_images/3.2_16_NameSampleData.6236496c5d1672be4e1efc263d2b27fbc6f7739beb9390d80509cc889efa1e2a.vi.png)

1. Tham số đầu vào vấn đề sẽ được thêm vào hướng dẫn với dữ liệu mẫu đã cấu hình. Bây giờ chúng ta có thể kiểm tra gợi ý của mình!

![Đầu vào vấn đề đã được thêm](../../../../../translated_images/3.2_17_InputAdded.fdc26d9e247a1a7d86ff3147362e8057fece7d3e1561a4b12f436bd817884cc1.vi.png)

1. Chọn **Test** để kiểm tra gợi ý.

![Kiểm tra hướng dẫn](../../../../../translated_images/3.2_18_SelectTest.513a8ea5a48c57d502f9a8c5eb575ffdebc413245e2e5ac6823bf781c30e035c.vi.png)

1. Phản hồi sẽ hiển thị. Lưu ý cách phản hồi cung cấp các tiêu đề với các điểm chính theo hướng dẫn. Cuộn xuống và xem xét phần còn lại của phản hồi từ mô hình.

![Phản hồi từ mô hình](../../../../../translated_images/3.2_19_ModelResponse.7de0a5ea374628cbee8be0cd7811bd30619d489dd7fbc8afb53d9d984fa656d0.vi.png)

1. Trước khi lưu gợi ý của mình, hãy tìm hiểu về các cài đặt có thể cấu hình cho gợi ý này. Chọn biểu tượng **ellipsis (...)**.

![Cài đặt gợi ý](../../../../../translated_images/3.2_20_PromptSettings.f271b2442881e66513259407e3330254b40acb654e6286a0f74f210478d001db.vi.png)

1. Tại đây, chúng ta sẽ thấy ba cài đặt có thể cấu hình:

   - **Temperature**: Nhiệt độ thấp dẫn đến kết quả dự đoán, trong khi nhiệt độ cao cho phép các phản hồi đa dạng hoặc sáng tạo hơn.
   - **Record retrieval**: Xác định số lượng bản ghi được truy xuất cho các nguồn kiến thức của bạn.
   - **Include links in the response**: Khi được chọn, phản hồi sẽ bao gồm các liên kết trích dẫn cho các bản ghi được truy xuất.

   Chọn biểu tượng **X** để thoát khỏi Cài đặt.

![Cấu hình cài đặt](../../../../../translated_images/3.2_21_ConfigureSettings.3ebb9ffdfc34b7a0cd16d912574ae9cd4e4809873eb3ff12cd6f24b671575a04.vi.png)

1. Chọn **Save** để lưu gợi ý.

![Lưu gợi ý](../../../../../translated_images/3.2_22_SavePrompt.a9a41a8d13230c51a7c909106c150c0bd4f65ef815c9818fb2f0eecda6ee1585.vi.png)

1. Tiếp theo, chọn **Add to agent** để thêm gợi ý vào agent khai báo của chúng ta.

![Hướng dẫn gợi ý](../../../../../translated_images/3.2_23_AddToAgent.7ae508e48025742d0f32eed323deb3ffe4f6c9e53609ba638ccc3864d25d05b8.vi.png)

1. Gợi ý sẽ xuất hiện dưới phần Tools 🙌🏻

![Gợi ý đã được thêm](../../../../../translated_images/3.2_24_PromptAdded.842a754ca2f96c122be1ab09fd85bd77f04ba0b104c3be764a19ec0eaccbeb35.vi.png)

Tiếp theo, chúng ta sẽ cập nhật hướng dẫn để kích hoạt gợi ý và kiểm tra agent khai báo của mình.

### 3.3 Cập nhật hướng dẫn và kiểm tra agent khai báo của bạn

1. Cuộn lên phần **Details** và chọn **Edit**. Điều này sẽ cho phép các trường có thể chỉnh sửa.

![Chọn Edit](../../../../../translated_images/3.3_01_EditInstructions.650da2cd330e2abbf6e77925b0f7bb3dee018de7ccad281c31214d9c95f47bd7.vi.png)

1. Bây giờ chúng ta có thể cập nhật hướng dẫn để kích hoạt gợi ý bằng cách tham chiếu tên của gợi ý. Xóa hướng dẫn, sau đó sao chép và dán nội dung sau.

      ```text
      - When a user asks questions about their device, run the "IT Expert" prompt. Use their question as the problem input of the "IT Expert" prompt.
      ```

   Lưu ý cách câu cuối cùng hướng dẫn agent sử dụng câu hỏi được người dùng hỏi làm giá trị cho tham số đầu vào vấn đề. Agent sẽ sử dụng câu hỏi làm đầu vào vấn đề cho gợi ý. Tiếp theo, chọn **Save**.

![Cập nhật hướng dẫn để kích hoạt gợi ý](../../../../../translated_images/3.3_02_UpdateInstructionsWithPrompt.5060f153b1b7cf883751d810f69814d0286cc40568f5cb810a1ee82c36235e7c.vi.png)

1. Bây giờ chúng ta đã sẵn sàng kiểm tra hướng dẫn đã cập nhật của agent khai báo. Chọn biểu tượng **refresh** trong bảng kiểm tra.

![Chọn biểu tượng refresh](../../../../../translated_images/3.3_03_RefreshTestPane.dc6058feab088db4abf25b950466a2e6f5a23b97d3d9eacb65c913a012e7779b.vi.png)

1. Tiếp theo, nhập gợi ý sau đây và gửi.

```text
Bạn có thể giúp tôi không, laptop của tôi đang gặp màn hình xanh
```

![Thực hiện kiểm tra](../../../../../translated_images/3.3_04_PerformTest.ca63a96e11176eab6d3fc348546bc41beb49dcaeeefe3262991aa11a250ce16e.vi.png)

1. Agent kích hoạt gợi ý và phản hồi.

![Hướng dẫn gợi ý](../../../../../translated_images/3.3_05_ModelResponse.bb159090f70aae7a62183a9316ebb9894eb2fe7cfe3c53d3fa81e9e5ab68180a.vi.png)

Bây giờ chúng ta sẽ xuất bản agent khai báo của mình 😃

### 3.4 Xuất bản agent khai báo của bạn lên Microsoft 365 Copilot và Microsoft Teams

1. Chọn **Publish**.

![Xuất bản agent](../../../../../translated_images/3.4_01_PublishAgent.48430d1c1c3914189d335ae840394e2761f3349a609785d4f05b2b91b10e5c27.vi.png)

1. Một hộp thoại sẽ xuất hiện hiển thị các Kênh và chi tiết xuất bản có thể được cập nhật.

   - Kênh: Agent sẽ được xuất bản lên Microsoft 365 Copilot và Microsoft Teams.
   - Thông tin ứng dụng agent: Đây là những gì sẽ hiển thị khi người dùng thêm agent vào Microsoft 365 Copilot hoặc Microsoft Teams. Đây là các trường có thể được cập nhật khi cần.

![Chi tiết ứng dụng agent](../../../../../translated_images/3.4_02_ConfigurePublishingAgentDetails.12d6876889ca99dd5811b6442254945b1028bdbfac555d095ccfd9aa55ee7211.vi.png)

1. Ví dụ, bạn có thể cập nhật **Mô tả ngắn**, **Mô tả dài**, **Tên nhà phát triển** với tên của bạn.

!!! tip
    Nếu bạn không thấy tất cả các trường hiển thị trên trình duyệt của mình, hãy thử thu nhỏ ví dụ: 75%

Chọn **Publish**. Copilot Studio sau đó sẽ bắt đầu xuất bản agent.

![Xuất bản agent](../../../../../translated_images/3.4_03_UpdatePublishingAgentDetails.9b80137a3273ead50d00149cc52b3e3efa0feeb415723d68bf617147710f58ed.vi.png)

1. Khi việc xuất bản hoàn tất, chúng ta sẽ thấy [Tùy chọn khả dụng](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions#set-availability-options/?WT.mc_id=power-172614-ebenitez) của agent.

| Tùy chọn khả dụng | Mô tả |
| ---------- | ---------- |
| Share Link | Sao chép liên kết để phân phối với người dùng được chia sẻ để mở agent trong Microsoft 365 Copilot |
| Show to my teammates and shared users | Cho phép bạn cấp quyền truy cập cho người khác tham gia vào việc tạo agent, hoặc cho các nhóm bảo mật để cấp quyền truy cập cho họ sử dụng agent trong Microsoft 365 Chat hoặc Microsoft Teams. |
| Show to everyone in my org | Gửi đến quản trị viên tenant để thêm vào danh mục tổ chức cho tất cả người dùng tenant thêm agent. Agent sẽ hiển thị dưới Built by your org trong Microsoft 365 Copilot và trong Microsoft Teams |
| Download as a .zip | Tải xuống dưới dạng tệp zip để tải lên như một ứng dụng tùy chỉnh trong Microsoft Teams |

![Tùy chọn khả dụng](../../../../../translated_images/3.4_04_AvailabilityOptions.7a7189f3e79617b041b78984a4eb862429bd6bb5584f0fa9b72e68b34bc5f051.vi.png)

1. Hãy xem cách chia sẻ agent. Chọn **Show to my teammates and shared users**. Một bảng điều khiển sẽ xuất hiện nơi bạn có thể tìm kiếm người dùng mà bạn muốn chia sẻ agent bằng cách nhập tên, email hoặc nhóm bảo mật của họ. Bạn có thể xem lại danh sách này bất cứ lúc nào để chỉnh sửa ai có quyền truy cập vào agent.

   Cũng có hai hộp kiểm:
   - _Gửi lời mời qua email cho người dùng mới_ - người dùng mới sẽ nhận được lời mời qua email.
   - _Hiển thị trong Built with Power Platform_ - agent trở nên khả dụng trong phần Built with Power Platform của cửa hàng ứng dụng Teams.
Để biết thêm chi tiết, hãy tham khảo [Kết nối và cấu hình một agent cho Teams và Microsoft 365](https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams/?WT.mc_id=power-172614-ebenitez).

Chọn **Hủy** hoặc biểu tượng **X** để thoát khỏi bảng.

![Chia sẻ agent](../../../../../translated_images/3.4_05_ShareAgent.991664ebeb3f292f7afaaf9dc45f6f09c5adff34b3f178fbe2f569a5a4d75855.vi.png)

1. Chọn **Sao chép** và dán liên kết vào một tab trình duyệt mới.

![Sao chép liên kết](../../../../../translated_images/3.4_06_CopyLink.1e048be824c352cf1af678a1f6425e21aff9d1768fcb2f2e6dfb243cba1dc776.vi.png)

1. Microsoft 365 Copilot sẽ tải và một cửa sổ sẽ xuất hiện với thông tin chi tiết về ứng dụng agent. Lưu ý cách tên nhà phát triển, mô tả ngắn và mô tả dài được hiển thị. Đây là thông tin từ chi tiết xuất bản đã được cập nhật ở bước trước.

Chọn **Thêm**.

![Tùy chọn khả dụng](../../../../../translated_images/3.4_07_AgentAppDetails.0f2825b7cbd2d29e70fb7351d5053d65c0cee31bfb3c238338df54ca0de384ad.vi.png)

1. Agent khai báo của chúng ta sẽ tải tiếp theo. Chúng ta có thể thấy các gợi ý bắt đầu để chọn, giúp người dùng nhanh chóng tìm kiếm sự hỗ trợ ngay lập tức.

Chọn một trong các gợi ý bắt đầu. Trong các gợi ý bắt đầu của tôi, tôi sẽ chọn gợi ý **Hỗ trợ cài đặt phần mềm**, gợi ý này sẽ tự động điền trước trường tin nhắn Copilot. Gửi câu hỏi đến Copilot.

![Chọn gợi ý bắt đầu](../../../../../translated_images/3.4_08_SelectStarterPrompt.49a14ca6d01b1814872e874c9e58b2b179f5cb755bc1061a509441fd4e6fa7e9.vi.png)

1. Chọn **Luôn cho phép** để cấp quyền cho agent khai báo của bạn gọi gợi ý IT Expert.

![Chọn luôn cho phép](../../../../../translated_images/3.4_09_AlwaysAllow.b6561f2d7b0b91bb8ad534df057ada512c9d877a0388dbdbe36916f55955b5cd.vi.png)

1. Agent sau đó sẽ gọi gợi ý **IT Expert** của chúng ta và chúng ta sẽ thấy phản hồi từ mô hình được trả về dưới dạng tin nhắn trong agent khai báo của chúng ta.

![Phản hồi](../../../../../translated_images/3.4_10_01_Response.0820217c919d198f59831822b4f2ee60e692d2880e64de709fde3c566f90c466.vi.png)

Cuộn xuống để xem chi tiết đầy đủ của phản hồi.

![Phản hồi](../../../../../translated_images/3.4_10_02_Response.5baaf06380965beef61c117a925cd4ae64e451b6cd97290da3d929d738add6c8.vi.png)

1. Nhưng _làm thế nào chúng ta biết_ agent khai báo đã gọi gợi ý? 👀 Đây là một mẹo!

!!! tip
Bạn có thể kiểm tra và gỡ lỗi các agent trong Microsoft 365 Copilot bằng cách bật [chế độ nhà phát triển](https://learn.microsoft.com/microsoft-365-copilot/extensibility/debugging-copilot-agent#use-developer-mode-in-copilot-chat/?WT.mc_id=power-172614-ebenitez).

Nhập nội dung sau vào trường tin nhắn Copilot và gửi.

    ```text
    -developer on
    ```

Một tin nhắn xác nhận sẽ xuất hiện để cho bạn biết chế độ nhà phát triển đã được bật.

![Chế độ nhà phát triển được bật](../../../../../translated_images/3.4_11_DeveloperModeEnabled.81ed6a62e5771bf59d17d94b15beb3c696a177d70616795836cff2024baa0139.vi.png)

1. Gửi câu hỏi sau để gọi gợi ý.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Nhập câu hỏi](../../../../../translated_images/3.4_12_EnterQuestion.bb41817937dd3d864aa120a668d2d7ddaedd5025a201d9579ff4d97dd4bb6a92.vi.png)

1. Chúng ta sẽ thấy phản hồi từ mô hình của gợi ý **IT Expert** được trả về dưới dạng tin nhắn. Cuộn xuống cuối tin nhắn và một thẻ với thông tin gỡ lỗi sẽ được hiển thị.

Mở rộng **Thông tin gỡ lỗi agent** bằng cách chọn nó.

![Thông tin gỡ lỗi agent](../../../../../translated_images/3.4_13_AgentDebuggingInfo.a7765c7594922e6842268dd05b4de1aeb6b1725e69de7f2b00e80dc1c4804940.vi.png)

1. Tại đây bạn sẽ tìm thấy thông tin về metadata của agent xảy ra trong thời gian chạy.

![Thông tin gỡ lỗi agent mở rộng](../../../../../translated_images/3.4_14_01_ReviewAgentDebugInfo.8cb4e7f64da4f124859cc4401b8d1f9fa6eec34b6ec3174606adf153aaf80b23.vi.png)

Trong trường hợp sử dụng của chúng ta, chúng ta sẽ tập trung vào phần _Actions_

- **Matched actions** làm nổi bật trạng thái hiện tại của các chức năng được tìm thấy trong quá trình tìm kiếm của ứng dụng.
- **Selected actions** làm nổi bật trạng thái hiện tại của các chức năng được chọn để chạy dựa trên quá trình ra quyết định của ứng dụng.

![Thông tin gỡ lỗi agent mở rộng](../../../../../translated_images/3.4_14_02_ReviewAgentDebugInfo.7b3143a8001067974eeb47b0740b9c9fab5af4b5348b04d09bfcc0885b19ab27.vi.png)

Vì vậy, tại đây chúng ta có thể thấy bộ điều phối agent đã chọn gọi gợi ý IT Expert theo hướng dẫn của agent khai báo của chúng ta. Điều này được nêu rõ hơn trong phần _Executed Actions_, phần này cũng cho chúng ta biết rằng gợi ý đã được gọi thành công.

![Xem thông tin gỡ lỗi agent](../../../../../translated_images/3.4_14_03_ReviewAgentDebugInfo.d71e86364cd014b4d0bd80d3298be28946066e19fbaec53cb6e4f34f6df744fb.vi.png)

1. Để tắt chế độ nhà phát triển, nhập nội dung sau vào trường tin nhắn Copilot và gửi.

    ```text
    -developer off
    ```

Một tin nhắn xác nhận sẽ xuất hiện để cho bạn biết chế độ nhà phát triển đã bị tắt. Tuyệt vời, bây giờ bạn đã biết cách xác minh liệu agent khai báo của bạn trong Microsoft 365 Copilot có gọi gợi ý của bạn hay không 🌞

![Chế độ nhà phát triển bị tắt](../../../../../translated_images/3.4_15_DeveloperModeDisabled.405f17682964ef7c1f4b1eec8c6aee939e7dabcec3b8b3721f2fc3890a5fc20d.vi.png)

1. Bây giờ chúng ta sẽ kiểm tra agent của mình trong Microsoft Teams. Điều hướng đến **Apps** bằng menu bên trái và chọn **Teams** trong phần _Apps_.

![Chọn Teams trong Apps](../../../../../translated_images/3.4_16_NavigateToApps.c9747b0f44570fe737aeac7defe5d0125d693aff384e03b864453da70b0c6206.vi.png)

1. Microsoft Teams sau đó sẽ tải trong một tab trình duyệt mới và chúng ta sẽ được trình bày với các điều khoản sử dụng của Microsoft 365 Copilot, chọn **Đồng ý**.

![Chọn Đồng ý](../../../../../translated_images/3.4_17_Agree.3777ebcf791edd12825395218770987d5b25338b21ab41b7bd7e40b97468ba32.vi.png)

1. Microsoft 365 Copilot sau đó sẽ tải mặc định, với bảng bên phải liệt kê tất cả các agent có sẵn của bạn, bao gồm agent khai báo **Contoso Tech Support Pro**.

![Microsoft 365 Copilot trong Teams](../../../../../translated_images/3.4_18_CopilotAgentsInTeams.8525ff1d3c3eaeeed7f66e1b8206ba5eb559840c8f29f3e4e8905a8e5d626856.vi.png)

1. Chọn **biểu tượng dấu chấm lửng (...)** trên menu bên trái. Tìm kiếm **Contoso Tech Support Pro** trong trường tìm kiếm hoặc nếu bạn thấy agent, hãy chọn nó.

Bạn cũng có thể nhấp chuột phải để **Ghim** agent để truy cập nhanh trên menu bên trái trong Microsoft Teams.

![Chọn và ghim agent](../../../../../translated_images/3.4_19_SelectAndPinAgentFromApps.ad59bff56f9e09660976e8210f339d0d2ce49856e4015a7258552d652195e62f.vi.png)

1. Sau đó chúng ta sẽ thấy agent của mình tải. 1. Tiếp theo, hãy kiểm tra agent của chúng ta. Nhập gợi ý sau và gửi.

    ```text
    Can you help me, my laptop is encountering a blue screen
    ```

![Ghim agent](../../../../../translated_images/3.4_20_EnterQuestion.e00b73e4c776c7c758144070d19d7a2b11a6733dc3bc31a7f5b6b8e9c47340df.vi.png)

1. Một phản hồi từ mô hình của gợi ý sẽ được hiển thị.

![Phản hồi trong Teams](../../../../../translated_images/3.4_21_AgentInTeamsResponse.a86243f9b0a94fe889462afc0180d2c97d71ff484113bc70c8cccf642db7035e.vi.png)

Chỉ trong vài phút, bạn đã học cách xuất bản agent khai báo của mình và kiểm tra nó trong Microsoft 365 Copilot và Microsoft Teams 😊

## ✅ Hoàn thành nhiệm vụ

Chúc mừng! 👏🏻 Bạn đã xây dựng một agent khai báo trong Copilot Studio, nơi bạn đã thêm một gợi ý, hướng dẫn agent sử dụng gợi ý và cách kiểm tra + xuất bản agent của bạn lên Microsoft 365 Copilot và Microsoft Teams.

Agent của bạn hiện đã sẵn sàng hoạt động—sẵn sàng hỗ trợ, khắc phục sự cố và phục vụ người dùng nội bộ theo yêu cầu.

Đây là phần kết thúc của **Lab 03 - Xây dựng một agent khai báo trong Microsoft Copilot Studio cho Microsoft 365 Copilot**, chọn liên kết dưới đây để chuyển sang bài học tiếp theo.

⏭️ [Chuyển đến bài học **Tạo một giải pháp mới**](../04-creating-a-solution/README.md)

Cho đến lần sau, hãy luôn sắc bén. Tương lai của công việc doanh nghiệp chạy qua các agent—và bây giờ bạn đã biết cách xây dựng một agent.

## 📚 Tài nguyên chiến thuật

🔗 [Xây dựng agent khai báo trong Microsoft Copilot Studio cho Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-copilot-studio/microsoft-copilot-extend-copilot-extensions?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Thêm gợi ý](https://learn.microsoft.com/ai-builder/create-a-custom-prompt?context=%2Fmicrosoft-365-copilot%2Fextensibility%2Fcontext/?WT.mc_id=power-172614-ebenitez)

🔗 [Chia sẻ agent với người dùng khác](https://learn.microsoft.com/microsoft-copilot-studio/admin-share-bots/?WT.mc_id=power-172614-ebenitez)

📺 [Xây dựng gợi ý cho agent của bạn](https://aka.ms/ai-in-action/copilot-studio/ep3)

<img src="https://m365-visitor-stats.azurewebsites.net/agent-academy/recruit/03-create-a-declarative-agent-for-M365Copilot" alt="Phân tích" />

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, nên sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.