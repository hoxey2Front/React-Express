import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

// CORS 옵션 설정
const corsOptions = {
  origin: 'http://localhost:5173', // 허용할 도메인
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 허용할 HTTP 메서드
  credentials: true, // 쿠키 사용 허용
  optionsSuccessStatus: 204, // 옵션 요청에 대한 성공 상태 코드
};

// CORS 설정 추가
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.json(['apple', 'banana', 'melon']);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
