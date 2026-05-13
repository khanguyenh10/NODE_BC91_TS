# Swagger 
## hướng dẫn 
https://viblo.asia/p/thiet-lap-swagger-ui-cuc-bo-chi-trong-5-phut-huong-dan-cho-phat-trien-api-an-toan-zXRJ8NP2VGq
## các bước cài
- download git clone https://github.com/swagger-api/swagger-ui.git
- npm install -g http-server
- truy cập vào dist
    - cd swagger-ui/dist
    - http-server --cors
- tạo file swagger.yaml để viết đặt tả như sau:
```yaml
openapi: 3.0.0
info:
  title: API Mẫu
  version: 1.0.0
paths:
  /hello:
    get:
      summary: API trả về lời chào
      responses:
        '200':
          description: Phản hồi thành công
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string

```