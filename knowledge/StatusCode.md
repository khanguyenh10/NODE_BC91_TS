```js
    // 200: success thành công
    // 201: created tạo mới thành công (thường dùng 200 cho tất cả các trường hợp thành công, nhưng nếu muốn phân biệt rõ ràng thì có thể dùng 201 cho tạo mới)

    // 400: Bad request lỗi client gửi tham số không hợp lệ (tìm trong csdl không có trên backend thì trả về 400)

    // 404: Not found không tìm thấy tài nguyên (tìm trong csdl có nhưng đã bị xóa thì trả về 404)

    // 401: Unauthorized lỗi xác thực (gửi lên mà không có token hoặc token hết hạn thì trả về 401) - chưa đăng nhập nên không gọi được api đó (token hết hạn, token fake, không có token)

    // 403: Forbidden lỗi phân quyền (đăng nhập rồi nhưng không có quyền truy cập vào api đó thì trả về 403) - có đăng nhập nhưng chưa đủ quyền

    // 500: Internal server error lỗi từ phía server (lỗi code, lỗi server, lỗi database,...) - lỗi xảy ra trên server nhưng chưa xử lý nguyên nhân có thể do frontend gửi dữ liệu không hợp lệ mà backend chưa có code xử lý, hoặc do lỗi logic backend 
    // => Đối với FE dev thì nên trao đổi nhỏ nhẹ với BE để tìm cách giải quyết vấn đề tuy nhiên kiểm tra bằng postman truóc hoặc swagger
```