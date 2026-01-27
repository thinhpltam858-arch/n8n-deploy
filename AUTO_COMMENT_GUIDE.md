# Hướng dẫn Sử dụng Auto Comment Outreach

## 📋 Google Sheets Setup

### Bước 1: Tạo Sheet "Outreach Targets"

Mở Google Sheets (ID: `1HdvoIB0fBMDoJZh47sBEqDQsnEBGsH7kB8J03RJXXqo`) và tạo sheet mới tên **"Outreach Targets"** với cấu trúc:

| Cột | Tên | Mô tả | Ví dụ |
|-----|-----|-------|-------|
| A | URL | Link đến bài đăng/comment cần phản hồi | `https://www.facebook.com/groups/123/posts/456` |
| B | Nội dung gốc | Nội dung bài đăng (copy/paste) | "Học lái xe ở đâu tốt vậy các bác?" |
| C | Nguồn | Từ đâu (Group/Page name) | "Nhóm Tìm Việc Làm HN" |
| D | Đã comment? | Trạng thái | "Chưa" / "Rồi" |
| E | Comment đã đăng | Nội dung AI đã comment | (Tự động điền) |
| F | Thời gian | Khi nào comment | (Tự động điền) |

### Bước 2: Thêm Target URLs

Mỗi ngày, bạn chỉ cần:
1. Vào Groups/Pages tìm bài đăng liên quan học lái xe
2. Copy URL bài đăng
3. Paste vào cột A
4. Copy nội dung bài đăng vào cột B
5. Ghi nguồn vào cột C
6. **Để trống** cột D, E, F (hệ thống tự động)

---

## 🚀 Cách Hoạt động

### Tự động mỗi 2 giờ:

1. **Đọc Sheets** → Lấy danh sách URLs chưa comment
2. **Lọc** → Chỉ lấy những dòng "Đã comment?" = "Chưa"
3. **AI soạn** → Gemini AI tạo comment phù hợp với từng bài
4. **Delay ngẫu nhiên** → Chờ 30-120 giây (tự nhiên như người thật)
5. **Đăng comment** → Post lên Facebook
6. **Cập nhật Sheets** → Đánh dấu "Rồi" + lưu nội dung

---

## ⚙️ Rate Limiting (An toàn)

- ✅ **Mỗi 2 giờ chạy 1 lần**
- ✅ **Tối đa 10-15 URLs/ngày** (bạn tự kiểm soát số lượng thêm vào Sheets)
- ✅ **Delay 30-120s** giữa mỗi comment
- ✅ **Nội dung đa dạng** (AI tạo khác nhau mỗi lần)

---

## 📝 Ví dụ Thực tế

### Input (Bạn thêm vào Sheets):

| URL | Nội dung gốc | Nguồn | Đã comment? |
|-----|-------------|--------|-------------|
| https://fb.com/groups/123/posts/456 | "Học bằng B2 ở đâu rẻ nhất?" | Nhóm HN | Chưa |

### Output (AI tự động):

**Comment AI soạn:**
> "Dạ, nếu bạn chọn trung tâm học B2, mình khuyên bạn nên xem 3 điểm này nhé:
> 
> 1️⃣ Tỷ lệ đậu có cao không (quan trọng nhất!)
> 2️⃣ Thầy có tận tâm, không ép buộc không
> 3️⃣ Có cam kết học lại miễn phí nếu thi rớt không
> 
> Nhà mình học ở Tâm Thịnh thấy OK lắm, giá hợp lý và thầy dạy vui 😊 Bạn có thể tham khảo thêm nhé!"

**Sheets sau khi xử lý:**

| ... | Đã comment? | Comment đã đăng | Thời gian |
|-----|-------------|----------------|-----------|
| ... | Rồi | (nội dung trên) | 27/01/2026 12:30 |

---

## 🎯 Tips Tìm Target Posts

### Nơi tìm kiếm:

1. **Facebook Groups:**
   - "Tìm việc làm [Thành phố]"
   - "Mua bán xe [Thành phố]"
   - "Hỏi đáp học lái xe"
   - Groups sinh viên

2. **Keywords tìm:**
   - "học lái xe ở đâu"
   - "thi bằng lái bao nhiêu"
   - "trung tâm dạy lái tốt"
   - "cần bằng lái gấp"

3. **Best time to comment:**
   - Bài đăng mới (trong vòng 24h)
   - Bài có nhiều bình luận (hot topic)
   - Bài người đăng thật sự đang cần (không phải spam)

---

## ⚠️ Lưu ý Quan trọng

### ✅ NÊN:
- Chọn bài đăng THẬT SỰ liên quan
- Cho giá trị trước, mention Tâm Thịnh sau
- Bắt đầu với 3-5 posts/ngày
- Tăng dần nếu thấy hiệu quả

### ❌ KHÔNG:
- Spam cùng 1 Group nhiều lần
- Comment vào bài không liên quan
- Quá ráo riết bán hàng
- Vượt quá 15 comments/ngày

---

## 📊 Theo dõi Hiệu quả

**Metrics để xem:**
- Số lượng comment/ngày
- Số người reply lại comment của bạn
- Số inbox về Fanpage từ comments
- Tỷ lệ bị report (nếu có → dừng ngay)

**Mục tiêu:**
- Tuần 1-2: 3-5 comments/ngày (test)
- Tuần 3-4: 7-10 comments/ngày
- Từ tháng 2: 10-15 comments/ngày (stable)

---

## 🆘 Troubleshooting

### Lỗi: "Cannot post comment"
→ Kiểm tra permissions Facebook Token

### Lỗi: "Row not found"
→ Kiểm tra tên Sheet phải đúng "Outreach Targets"

### Comment không đa dạng
→ Thêm ngẫu nhiên vào AI prompt

---

**🌟 Chúc bạn tìm được nhiều khách hàng tiềm năng!**
