import { useEffect, useState, React } from "react";
import "../routes/Login.css";

function Login() {
  const pictureLength = 7; //이미지마지막숫자
  const randomNumber = Math.floor(Math.random() * pictureLength + 1);
  console.log(randomNumber);
  return (
    <div className="body">
      <img
        className="backGroundImg"
        src={require(`../img/background/${randomNumber}.jpg`)}
        alt="logo image"
      />
      <a href="/movie">영화리스트</a>
    </div>
  );
}

export default Login;
