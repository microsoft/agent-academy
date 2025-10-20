<!--
CO_OP_TRANSLATOR_METADATA:
{
  "original_hash": "27c4d44f8372a12eff6e71e06276c22e",
  "translation_date": "2025-10-20T00:28:08+00:00",
  "source_file": "CONTRIBUTING.md",
  "language_code": "vi"
}
-->
# Đóng góp cho Học viện MCS Agent

Cảm ơn bạn đã quan tâm đến việc đóng góp cho Học viện MCS Agent! Hướng dẫn này sẽ giúp bạn thiết lập môi trường phát triển và hiểu các tiêu chuẩn tài liệu của chúng tôi.

## Tiêu chuẩn tài liệu

Chúng tôi tuân theo các tiêu chuẩn tài liệu của Microsoft để đảm bảo nội dung nhất quán và chất lượng cao. Để có hướng dẫn chi tiết về cách viết tài liệu hiệu quả, vui lòng tham khảo:

📖 **[Microsoft Docs Authoring Pack](https://learn.microsoft.com/en-us/contribute/content/how-to-write-docs-auth-pack)** - Hướng dẫn đầy đủ về cách viết tài liệu theo phong cách và tiêu chuẩn của Microsoft.

Tài liệu này bao gồm:

- Viết nội dung rõ ràng, ngắn gọn
- Sử dụng cú pháp markdown đúng cách
- Sử dụng thuật ngữ nhất quán
- Cấu trúc tài liệu hiệu quả
- Các thực hành tốt nhất về khả năng tiếp cận

## Kiểm tra định dạng Markdown

Chúng tôi sử dụng markdownlint để đảm bảo định dạng và chất lượng nhất quán trên tất cả tài liệu của mình. Điều này giúp duy trì tính dễ đọc và tiêu chuẩn chuyên nghiệp trong toàn bộ kho lưu trữ.

### Cài đặt markdownlint-cli2

Để chạy markdownlint cục bộ và khớp với quy trình làm việc trên GitHub của chúng tôi, hãy cài đặt markdownlint-cli2:

```powershell
npm install -g markdownlint-cli2
```

### Chạy markdownlint cục bộ

Sau khi cài đặt, bạn có thể chạy markdownlint trên tất cả các tệp markdown trong kho lưu trữ:

```powershell

# Scan all markdown files in the repository
markdownlint-cli2 "**/*.md"

# Scan a specific file
markdownlint-cli2 "docs/recruit/README.md"

# Auto-fix issues that can be automatically resolved in the docs directory
markdownlint-cli2 --fix "**/*.md"
```

### Cấu hình

Cấu hình markdownlint của chúng tôi được định nghĩa trong `.markdownlint.jsonc` tại thư mục gốc của kho lưu trữ. Cấu hình này:

- Vô hiệu hóa kiểm tra độ dài dòng (MD013) vì chúng tôi chưa định nghĩa tiêu chuẩn
- Cho phép tiêu đề trùng lặp chỉ trong các phần con (MD024) cho các phần mẫu thông thường
- Vô hiệu hóa kiểm tra tiền tố danh sách có thứ tự (MD029) trên toàn cầu do nội dung thụt lề làm đặt lại số thứ tự
- Cho phép sử dụng khối mã cho văn bản (MD046)

### Thêm ngoại lệ nội tuyến cho các quy tắc markdownlint

Mặc dù cấu hình toàn cầu của chúng tôi xử lý hầu hết các trường hợp thông thường, bạn có thể gặp phải các tình huống cần thêm ngoại lệ nội tuyến cho các quy tắc markdownlint cụ thể trong từng tệp. Dưới đây là các ví dụ về cách thực hiện điều này:

#### Tùy chọn 1: Bỏ qua dòng tiếp theo

```markdown
<!-- markdownlint-disable-next-line MD029 -->
6. This list item will ignore MD029 (note: starts with 6 instead of 1)

<!-- markdownlint-disable-next-line MD013 -->
This is a very long line that would normally trigger the line length rule but will be ignored for this specific line.
```

#### Tùy chọn 2: Bỏ qua một phạm vi cụ thể

```markdown
<!-- markdownlint-disable MD029 -->
1. First item
5. Fifth item (skips numbers but won't trigger MD029)
10. Tenth item
<!-- markdownlint-enable MD029 -->

<!-- markdownlint-disable MD013 -->
Multiple very long lines that exceed the character limit
can be placed between disable and enable comments
<!-- markdownlint-enable MD013 -->
```

#### Tùy chọn 3: Bỏ qua toàn bộ tệp

```markdown
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD013 -->
```

> Đặt các dòng này ở đầu tệp markdown của bạn để vô hiệu hóa các quy tắc cụ thể cho toàn bộ tài liệu

### Khi nào nên sử dụng ngoại lệ nội tuyến

Bạn có thể cần ngoại lệ cho các quy tắc markdownlint khác nhau khi:

1. **MD029 (Đánh số danh sách có thứ tự)**: Tiếp tục danh sách đánh số sau nội dung khác, đánh số có chủ ý không bắt đầu từ 1, hoặc nội dung lồng ghép phức tạp
2. **MD013 (Độ dài dòng)**: Ví dụ mã, URL, hoặc nội dung kỹ thuật không thể chia nhỏ hợp lý
3. **MD033 (HTML nội tuyến)**: Khi bạn cần các phần tử HTML cụ thể để định dạng mà không thể đạt được bằng markdown
4. **MD041 (Tiêu đề dòng đầu tiên)**: Các tệp mẫu hoặc tài liệu cố ý không bắt đầu bằng tiêu đề

### Thực hành tốt nhất

1. **Sử dụng ngoại lệ một cách tiết kiệm**: Chỉ thêm ngoại lệ khi cần thiết để làm rõ tài liệu
2. **Bình luận về ngoại lệ của bạn**: Khi sử dụng ngoại lệ, hãy cân nhắc thêm một bình luận ngắn giải thích lý do
3. **Ưu tiên `markdownlint-disable-next-line`**: Điều này chính xác hơn so với việc vô hiệu hóa toàn bộ phần
4. **Chạy linter trước khi cam kết**: Luôn chạy `markdownlint-cli2 "**/*.md"` trước khi gửi thay đổi

> **Mẹo:** Bạn có thể nhanh chóng chạy cả kiểm tra markdownlint và cSpell trên các tệp markdown của mình bằng script PowerShell `scripts/validate-markdown.ps1` được cung cấp. Script này giúp tự động hóa các kiểm tra định dạng và chính tả phổ biến để đảm bảo đóng góp của bạn đáp ứng các hướng dẫn của chúng tôi.

Bạn có thể chạy nó từ thư mục gốc của kho lưu trữ bằng PowerShell:

```powershell
./scripts/validate-markdown.ps1
```

### Lỗi markdownlint phổ biến và cách khắc phục

- **MD036**: Sử dụng tiêu đề đúng cách (`## Tiêu đề`) thay vì nhấn mạnh (`**Văn bản in đậm**`)
- **MD007**: Sửa lỗi thụt lề danh sách không có thứ tự (sử dụng 2 khoảng trắng, không phải 4)
- **MD022**: Thêm dòng trống trước và sau tiêu đề
- **MD032**: Thêm dòng trống trước và sau danh sách
- **MD009**: Loại bỏ khoảng trắng thừa ở cuối dòng

### Quy trình làm việc trên GitHub

Kho lưu trữ của chúng tôi bao gồm một quy trình làm việc trên GitHub tự động chạy markdownlint trên tất cả các yêu cầu kéo. Quy trình làm việc:

- Sử dụng cùng công cụ markdownlint-cli2 mà bạn có thể chạy cục bộ
- Loại trừ các tệp `SUPPORT.md`, `SECURITY.md`, và `CODE_OF_CONDUCT.md`
- Sử dụng cấu hình `.markdownlint.jsonc` của chúng tôi
- Báo cáo các vấn đề dưới dạng cảnh báo, cho phép các yêu cầu kéo được hợp nhất trong khi làm nổi bật các cơ hội định dạng

### Tiện ích mở rộng markdownlint cho VS Code

Nếu bạn sử dụng VS Code, chúng tôi khuyến nghị cài đặt [tiện ích mở rộng markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) để kiểm tra định dạng markdown theo thời gian thực:

1. **Cài đặt tiện ích mở rộng** - Tìm kiếm "markdownlint" của David Anson trong thị trường tiện ích mở rộng của VS Code
2. **Cấu hình tự động** - Tiện ích mở rộng sẽ tự động sử dụng tệp cấu hình `.markdownlint.jsonc` của bạn
3. **Phản hồi theo thời gian thực** - Xem các gạch chân lượn sóng trên các vấn đề định dạng markdown khi bạn gõ
4. **Sửa lỗi nhanh** - Sử dụng `Ctrl+.` (Cmd+. trên Mac) để xem các sửa lỗi tự động có sẵn cho nhiều vấn đề
5. **Bảng vấn đề** - Xem tất cả các vấn đề markdown trong bảng Vấn đề của VS Code

Điều này cung cấp phản hồi ngay lập tức khi viết, giúp bạn dễ dàng tuân thủ các tiêu chuẩn markdown trước khi cam kết thay đổi.

## Kiểm tra chính tả

Chúng tôi sử dụng cSpell (Code Spell Checker) để duy trì sự nhất quán về chính tả trên tất cả tài liệu của mình. Điều này giúp đảm bảo chất lượng chuyên nghiệp và giảm thiểu lỗi chính tả trong toàn bộ kho lưu trữ.

### Cài đặt cSpell

Để chạy cSpell cục bộ, hãy cài đặt nó toàn cầu:

```powershell
npm install -g cspell
```

### Chạy cSpell cục bộ

Sau khi cài đặt, bạn có thể chạy cSpell để kiểm tra chính tả trong tài liệu:

```powershell
# Check all markdown files in the docs folder
cspell "docs/**/*.md"

# Check all markdown files in the repository
cspell "**/*.md"

# Check a specific file
cspell "docs/recruit/README.md"

# Show suggestions for misspelled words
cspell --show-suggestions "docs/**/*.md"

# Check with minimal output (cleaner display)
cspell --no-progress --no-summary "docs/**/*.md"
```

### Cấu hình

Cấu hình cSpell của chúng tôi được định nghĩa trong `cspell.json` tại thư mục gốc của kho lưu trữ. Cấu hình này:

- Bao gồm các từ tùy chỉnh cụ thể cho lĩnh vực của chúng tôi (Copilot, SharePoint, Dataverse, v.v.)
- Bỏ qua các loại tệp thông thường không cần kiểm tra chính tả (hình ảnh, tệp xây dựng)
- Đặt ngôn ngữ kiểm tra chính tả là tiếng Anh

### Thêm từ mới

Nếu bạn gặp một từ mà cSpell đánh dấu là sai chính tả nhưng thực tế là đúng (như tên sản phẩm, thuật ngữ kỹ thuật, hoặc danh từ riêng), bạn có thể thêm nó vào mảng `words` trong `cspell.json`:

```json
{
  "words": [
    "Contoso",
    "Dataverse",
    "YourNewWord"
  ]
}
```

### Tiện ích mở rộng cSpell cho VS Code

Nếu bạn sử dụng VS Code với [tiện ích mở rộng Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker), bạn có thể nhanh chóng thêm từ vào cấu hình của mình:

1. **Xem lỗi chính tả** - Tìm các gạch chân lượn sóng trên các từ sai chính tả
1. **Sử dụng Sửa lỗi nhanh** - Nhấp chuột phải vào từ được gạch chân hoặc sử dụng `Ctrl+.` (Cmd+. trên Mac)
1. **Thêm vào cấu hình** - Chọn "Spelling -> Add to cSpell configuration" từ menu ngữ cảnh
1. **Chọn vị trí** - Tiện ích mở rộng sẽ tự động thêm từ vào tệp `cspell.json` của bạn

Điều này nhanh hơn nhiều so với việc chỉnh sửa tệp cấu hình thủ công cho từng từ.

### Thực hành tốt nhất về chính tả

1. **Chạy kiểm tra chính tả trước khi cam kết**: Luôn chạy `cspell "docs/**/*.md"` trước khi gửi thay đổi
1. **Sửa lỗi chính tả thay vì bỏ qua**: Khi có thể, hãy sửa các lỗi chính tả thực tế thay vì thêm chúng vào danh sách từ
1. **Sử dụng thuật ngữ nhất quán**: Tuân thủ các tên sản phẩm và thuật ngữ kỹ thuật đã được thiết lập

## Xem trước tài liệu cục bộ với MkDocs

Chúng tôi sử dụng MkDocs với chủ đề Material để tạo trang web tài liệu của mình. Bạn có thể chạy nó cục bộ để xem trước các thay đổi của mình trước khi gửi yêu cầu kéo.

📖 **Tìm hiểu thêm**: [Tài liệu MkDocs](https://www.mkdocs.org/) | [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)

### Thiết lập môi trường Python trong VS Code

Chúng tôi khuyến nghị sử dụng môi trường ảo để cô lập các phụ thuộc cho dự án này. VS Code làm cho quá trình này trở nên dễ dàng và sẽ xử lý việc cài đặt Python nếu cần.

> **GitHub Codespaces**: Các hướng dẫn này hoạt động hoàn hảo trong GitHub Codespaces, nơi Python đã được cài đặt sẵn và môi trường VS Code đã sẵn sàng sử dụng.

📖 **Tìm hiểu thêm**: [Python trong VS Code](https://code.visualstudio.com/docs/languages/python) | [Môi trường Python trong VS Code](https://code.visualstudio.com/docs/python/environments)

#### Yêu cầu trước

**Cài đặt Tiện ích mở rộng Python**: Cài đặt [tiện ích mở rộng Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) của Microsoft từ thị trường tiện ích mở rộng của VS Code nếu bạn chưa cài đặt.

#### Thiết lập trong VS Code

1. **Tạo môi trường ảo**:
   - Mở Command Palette (`Ctrl+Shift+P` trên Windows/Linux, `Cmd+Shift+P` trên Mac)
   - Nhập "Python: Create Environment" và chọn nó
   - Chọn "Venv" (môi trường ảo)
   - Nếu không có trình thông dịch Python nào khả dụng, VS Code sẽ hướng dẫn bạn cài đặt Python
   - Chọn trình thông dịch Python của bạn (Python 3.8+)
   - VS Code sẽ tạo thư mục `.venv` và tự động kích hoạt nó

2. **Xác minh thiết lập**:
   - Mở một terminal tích hợp mới (`` Ctrl+Shift+` `` trên Windows/Linux, `` Cmd+Shift+` `` trên Mac, hoặc `View > Terminal`)
   - Bạn sẽ thấy `(.venv)` trong dấu nhắc của terminal
   - Chạy: `python --version` để xác minh

> **Lưu ý**: Mở một terminal mới đảm bảo môi trường Python được kích hoạt đúng cách. Nếu bạn muốn sử dụng môi trường Python hiện có thay vì tạo môi trường ảo mới, bạn có thể sử dụng "Python: Select Interpreter" từ Command Palette và chọn môi trường ưa thích của mình.

### Cài đặt MkDocs trong VS Code

Với môi trường Python của bạn được thiết lập trong VS Code, hãy cài đặt MkDocs và chủ đề Material:

1. **Mở terminal tích hợp của VS Code** (`Ctrl+`` ` hoặc `View > Terminal`)
2. **Đảm bảo môi trường ảo của bạn đang hoạt động** (bạn sẽ thấy `(.venv)` trong dấu nhắc)
3. **Cài đặt các gói**:

   ```bash
   pip install mkdocs mkdocs-material
   ```

### Chạy MkDocs trong VS Code

Để bắt đầu máy chủ phát triển cục bộ với tính năng tải lại nóng:

1. **Trong terminal tích hợp của VS Code**, chạy:

   ```bash
   mkdocs serve
   ```

2. **Trang web sẽ có sẵn tại**: `http://127.0.0.1:8000/agent-academy/`

### Xem trước trong Trình duyệt Đơn giản của VS Code

Để có trải nghiệm phát triển tốt nhất mà không cần rời khỏi VS Code:

1. **Khởi động máy chủ MkDocs** trong terminal tích hợp (như đã chỉ ra ở trên)
2. **Mở Trình duyệt Đơn giản**:
   - **Phương pháp 1**: Mở Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
   - Nhập "Simple Browser: Show" và chọn nó
   - Nhập URL: `http://127.0.0.1:8000/agent-academy/`

   - **Phương pháp 2**: Nhấp chuột phải vào URL trong đầu ra của terminal và chọn "Follow Link"

   - **Phương pháp 3**: Sử dụng `Ctrl+Click` (Windows) hoặc `Cmd+Click` (Mac) trên URL trong terminal

3. **Đặt vị trí trình duyệt**: Bạn có thể đặt Trình duyệt Đơn giản bên cạnh trình chỉnh sửa của mình để chỉnh sửa và xem trước song song

### Lợi ích của không gian làm việc VS Code

Làm việc hoàn toàn trong VS Code mang lại những lợi ích sau:

- **Terminal tích hợp**: Không cần chuyển đổi giữa các ứng dụng
- **Xem trước song song**: Chỉnh sửa markdown và xem thay đổi đồng thời  
- **Điều hướng liên kết**: Nhấp vào URL trong terminal để mở Trình duyệt Đơn giản
- **Tích hợp tiện ích mở rộng**: Tiện ích mở rộng Python, markdownlint, và cSpell hoạt động cùng nhau
- **Tích hợp Git**: Bảng điều khiển kiểm soát nguồn tích hợp để cam kết và yêu cầu kéo

### Tính năng tải lại nóng

Khi chạy `mkdocs serve`, bạn sẽ có:

- **Tự động làm mới**: Thay đổi bất kỳ tệp `.md` nào trong thư mục `docs/` sẽ tự động tải lại trình duyệt
- **Cập nhật cấu hình**: Thay đổi `mkdocs.yml` cũng kích hoạt việc xây dựng lại
- **Xem trước theo thời gian thực**: Xem định dạng, liên kết, và thay đổi nội dung của bạn ngay lập tức
- **Kiểm tra liên kết**: MkDocs sẽ cảnh báo bạn về các liên kết nội bộ bị hỏng

### Các lệnh MkDocs hữu ích trong VS Code

Chạy các lệnh này trong terminal tích hợp của VS Code:

```bash
# Start development server
mkdocs serve

# Build static site (for production)
mkdocs build

# Serve with strict mode (treats warnings as errors)
mkdocs serve --strict

# Show version
mkdocs --version
```

> **Mẹo:** Để xem trước tài liệu cục bộ với tất cả các phụ thuộc được kiểm tra, hãy sử dụng script PowerShell `scripts/serve-docs.ps1`.

### Lợi ích của việc xem trước cục bộ

- **Phản hồi ngay lập tức**: Xem cách markdown của bạn hiển thị với chủ đề Material
- **Kiểm tra liên kết**: Phát hiện các liên kết bị hỏng trước khi chúng được công khai
- **Kiểm tra điều hướng**: Xác minh nội dung của bạn xuất hiện trong các phần chính xác
- **Xem trước trên di động**: Kiểm tra cách nội dung của bạn hiển thị trên các kích thước màn hình khác nhau
- **Kiểm tra hiệu suất**: Đảm bảo hình ảnh và tài sản tải đúng cách

## Câu hỏi?

Nếu bạn có câu hỏi về định dạng markdown hoặc hướng dẫn đóng góp, vui lòng:

1. Xem lại hướng dẫn đóng góp này
1. Kiểm tra các vấn đề hiện có để tìm các câu hỏi tương tự
1. Mở một vấn đề mới

Chúc bạn đóng góp vui vẻ! 🚀

---

**Tuyên bố miễn trừ trách nhiệm**:  
Tài liệu này đã được dịch bằng dịch vụ dịch thuật AI [Co-op Translator](https://github.com/Azure/co-op-translator). Mặc dù chúng tôi cố gắng đảm bảo độ chính xác, xin lưu ý rằng các bản dịch tự động có thể chứa lỗi hoặc không chính xác. Tài liệu gốc bằng ngôn ngữ bản địa nên được coi là nguồn thông tin chính thức. Đối với thông tin quan trọng, chúng tôi khuyến nghị sử dụng dịch vụ dịch thuật chuyên nghiệp bởi con người. Chúng tôi không chịu trách nhiệm cho bất kỳ sự hiểu lầm hoặc diễn giải sai nào phát sinh từ việc sử dụng bản dịch này.