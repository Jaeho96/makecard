import React, { useState, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";
import css from "./App.css";

import NavigationUser from "./Components/NavigationUser";
import Navigation from "./Components/Navigation";
import Home from "./routes/Home";
import Myspace from "./routes/Myspace";
import Signin from "./routes/Signin";


function App() {
  const [user, setUser] = useState(null); 
  // login({username})의 함수를 통해 Signin.js에서 username을 가져와 setUser을 통해 상태관리
  const authenticated = user != null;  // 사용자 로그인 인증
  
  const login = ({username}) => setUser({username});
  const logout = () => setUser(null);
  
  console.log(user, 'user값');
  return (
    <>
      <HashRouter>
        {authenticated ? (  //사용자가 로그인 O
          <NavigationUser user={user} logout={logout}/> //사용자의 카카오 닉네임을 받아온 user(state)와 logout함수를 인자로 보내준다.
        ) : (               // 사용자가 로그인 X
          <Navigation />
        )}
        <Route path="/" exact={true} component={Home} />
        <Route path="/myspace/create" component={Myspace} />
        <Route 
        path="/signin" 
        render={props => (
          <Signin authenticated={authenticated} login={login} {...props} />
        )} // Signin을 렌더링할때 authenticated(사용자 로그인 여부)와 login(카카오 로그인 api에서 사용자 닉네임을 받아오기 위한 함수)를 인자로 보내준다.
        />
      </HashRouter>
    
    </>
  );
}

export default App;
