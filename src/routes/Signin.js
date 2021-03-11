import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo192.png";

function Signin() {
  return (
    <div className="Main-sign">
      <div className="sign-logo">
        <img src={Logo} alt="로고" width="246px" height="162px" />
      </div>
      <div className="sign-text">
        <p> 지금 회원가입하시면 </p>
        <p> 명함이 5초만에 뚝딱!</p>
      </div>
      <Link to="/signin" className="sign-btn">
        카카오톡으로 회원가입
      </Link>
      <Link to="/signin" className="sign-btn2">
        이미 가입하셨다면, 바로 로그인하기
      </Link>
    </div>
  );
}

export default Signin;
