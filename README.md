@ React + Express.js + Typescript 세팅법
### Server 폴더내 설치
```
npm init -y
// ts-node, express 설치
npm install typescript ts-node @types/node @types/express --save-dev
npm install express
// nodemon 설치
npm install nodemon --save-dev
```
### tsconfig.json 파일 생성후 작성
```
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```
###  Client 폴더내 설치
```
npm install axios
```
###  package.json 추가
```
"scripts": {
  "start": "ts-node src/index.ts",
  "dev": "nodemon src/index.ts"
}
```
### 서버실행
```
npm start
npm run dev
```
