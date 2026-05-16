# Expressjs
- build dự án cực nhanh
- tốt độ ăn đứt mấy thằng còn lại
- còn NestJs thì viết bằng typescript , oop nên rất là lâu
- thân thiện lập trình viên frontend

```js
// setup
npm i express
```

## RestAPI
- API (Application Programing Interface) giao diện cho thiết bị giao tiếp với nhau
- Restful APIs
 - Thống nhất nguyên tắc thiết kế APIs
 - logic url endpoint phân tầng rõ ràng
 - có khả năng mở rộng

### Nguyên tac91 thiết kế
| url | method | mô tả | 
|-----|--------|-------|
| {{url}}/products | get | lấy danh sách sản phẩm |
| {{url}}/products/:id | get | lấy chi tiết sản phẩm |
| {{url}}/products | post | thêm sản phẩm |
| {{url}}/products/:id | put| cập nhật sản phẩm |
| {{url}}/products/:id | delete | xóa sản phẩm |


### Cấu trúc thư mục
- thống nhất nguyên tắc viết cod
- giúp dễ quản lý project hơn
- mở rộng dự án dễ dàng
- Gồm
    - Routers: xử lý url và method api
    - Controller : xử lý các req và res
    - Models: truy xuất dữ liệu từ database trả về hay nhận từ controller (Services)

### Middleware
    - Middleware: là func nằm giữa request và response
        - Controller cũng là 1 middleware nhưng ko có tham số next