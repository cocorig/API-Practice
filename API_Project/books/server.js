const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const axios = require("axios");

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}));
// app.use(morgan("dev"));
// app.use(cors({ origin: true, credentials: true })); // cors 허용


const database = [
  {id:1, title: '글1'},
  {id:2, title: '글2'},
  {id:3, title: '글3'}
]
// REST API 
// 생성 : POST
// 수정 : PUT ,PATCH
// 삭제 : DELETE

// 잘 요청받았으면 응답 , 서버에 보내기
app.get('/', function(req,res){
  res.sendFile(__dirname + '/main.html')
});

// 특정id값만 가져오기
app.get('/database/:id', function(req,res){
    const id = req.params.id; // 여기는 문자타입
    const data = database.find((el)=> el.id === Number(id)); // 여기 id는 숫자
    res.send(data);
});

// 서버로 GET요청 (Read)
// 누군가가 이 경로로 방문을하면 관련된 안내문을 띄우자
app.get('/database', function(req,res){// 경로에따라 원하는 페이지를 응답하는게 서버의 역할 중 하나
  res.send(database);
});


//  body이용 , req에 body이용 -> express에 바디파서 추가
app.post('/database', function(req,res){
  const title =  req.body.title;
  database.push({
    id: database.length + 1,
    title,
  });
  res.send('값 추가가 정상적으로 완료되었습니다.');
})

app.listen(8080, function(){
  console.log('server on!');
})


app.get('/database/:id', function(req,res){
  const id = req.params.id; // 여기는 문자타입
  const data = database.find((el)=> el.id === Number(id)); // 여기 id는 숫자
  res.send(data);
});

// 값 수정하기
app.put('/database', function(req,res){
  const id =  req.body.id;
  const title = req.body.title;
  database[id - 1].title = title;
  res.send('값 수정 정상적으로 완료되었습니다.');
})


// 값 삭제하기
app.delete('/database', function(req,res){
  const id =  req.body.id;
  database.splice(id - 1, 1);
  res.send('값 삭제가 정상적으로 완료되었습니다.');
})
// ejs , pug
// app.get('/', function(req,res){
//   res.render(__dirname + '/main.html')
// });
// 서버자동화  npm install -g nodemon

