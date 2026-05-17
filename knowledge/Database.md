# Database

# Kiểu dữ liệu
| Kiểu dữ liệu | Ý nghĩa | Đặc điểm |
| :--- | :--- | :--- |
| **INT** | Số nguyên | ID, số lượng, (Ví dụ: 1, 100, -5 ) |
| **FLOAT** | Số thực | Điểm số, tọa độ (Ví dụ: 3.14, 9.5) |
| **BOOLEAN** | Đúng/Sai | Trạng thái bật/tắt (TRUE (1) hoặc FALSE (0)) |
| **DATE** | Ngày | YYYY-MM-DD (Ví dụ: 2023-12-25)  | 
| **DATETIME** | Ngày + Giờ | YYYY-MM-DD hh:mm:ss (Ví dụ: 2023-12-25 08:30:00)  | 
| **VARCHAR(255)** | Chuỗi ngắn | Tên, Email, Tiêu đề, tối đa n |
| **TEXT** | Chuỗi dài | Nội dung, mô tả |

## Lưu ý
- pass_word phải hash bằng: bcrypt hoặc argon2

# Mối quan hệ giữa các bảng
Khóa ngoại lun nằm trên bảng nhiều
Người dùng -> Đặt Phòng (1 - N): 1 user được đặt nhiều phòng
Phòng -> Đặt Phòng (1 - N): 1 phòng có nhiều lượt đặt
Người dùng -> Phòng ( N - N): 1 người dùng có nhiều phòng đã đặt, 1 phòng có nhiều người dùng đặt

Người dùng -> Bình Luận (1 - N): 1 người dùng viết nhiều bình luận
Phòng -> Bình Luận ( 1 - N): 1 phòng có nhiều bình luận
Vị trí -> Phòng ( 1 - N): 1 vị trí có nhiều phòng


