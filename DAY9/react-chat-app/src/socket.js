//클라이언트 io 객체 생성
import {io} from 'socket.io-client';

//서버 소켓 호출주소
const URL =  process.env.NODE_ENV  === "production" ? undefined : "http://localhost:3005";


console.log("클라리언트 socket.js 가 호출되었습니다.");

export const socket =io(URL,{
    autoConnect:false
});




