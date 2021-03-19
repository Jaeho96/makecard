import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo192.png";

const { Kakao } = window;

function Signin() {
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      scope: "profile, account_email, gender",
      success: function (authObj) {
        console.log(authObj); //토큰

        Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const account = res.kakao_account; //사용자 정보
            console.log(account);
          },
        });
      },
    });
  };

  return (
    <div className="Main-sign">
      <div className="sign-logo">
        <img src={Logo} alt="로고" width="246px" height="162px" />
      </div>

      <div className="sign-text">
        <p> 지금 회원가입하시면 </p>
        <p> 명함이 5초만에 뚝딱!</p>
      </div>
      <button className="sign-btn" onClick={kakaoLoginClickHandler}></button>

      <Link to="/signin" className="sign-btn2">
        이미 가입하셨다면, 바로 로그인하기
      </Link>
    </div>
  );
}

export default Signin;
