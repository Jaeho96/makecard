import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../Components/Sidebar";

//명함 만들기 main 화면
const MakemainPositioner = styled.div`
  display: flex;
`;
// 출력폼
const Outputform = styled.div`
  border-style: solid;
  width: 50%;
  height: 100vh;
  margin-top: 1rem;
`;

// 입력폼
const Inputform = styled.div`
  border-style: solid;
  width: 50%;
  height: 100vh;
  margin-top: 1rem;
`;
// 명함 컬러 선택하기
const Cololselector = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  flex-wrap: wrap;
`;

const Colorbuttons = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// 기본 정보 입력하기
const Basicinfo = styled.div`
  display: flex;
  border-style: solid;
  height: 50px;
  justify-content: center;
  font-size: 20px;
  margin-top: 1rem;
  border-style: solid;
  flex-wrap: wrap;
`;

const Basicinfoinputs = styled.div`
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
`;

const Basicinput = styled.input`
  width: 82%;
  margin-left: 1rem;
`;

function Myspace() {
  // const [color, setColor] = useState("");
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // console.log(color, "색상");
  // console.log(name, "이름");
  // console.log(mail, "메일");

  const [values, setValues] = useState({ color: "", name: "", mail: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  console.log(values);

  return (
    <MakemainPositioner>
      <Sidebar />
      <Outputform> 안녕 </Outputform>

      <Inputform>
        <Cololselector>
          명함 컬러 선택하기
          <Colorbuttons>
            <button name="color" value="red" onClick={handleClick}>
              빨강
            </button>
            <button name="color" value="orange" onClick={handleClick}>
              주황
            </button>
            <button name="color" value="yellow" onClick={handleClick}>
              노랑
            </button>
            <button name="color" value="blue" onClick={handleClick}>
              파랑
            </button>
          </Colorbuttons>
        </Cololselector>
        <Basicinfo>기본 정보 입력하기</Basicinfo>
        <Basicinfoinputs>
          이름
          <Basicinput
            type="text"
            name="name"
            value={values.name}
            placeholder="이름을 입력하세요"
            onChange={handleChange}
          />
          메일주소
          <Basicinput
            type="text"
            name="mail"
            value={values.mail}
            placeholder="e-mail을 입력하세요"
            onChange={handleChange}
          />
        </Basicinfoinputs>
      </Inputform>
    </MakemainPositioner>
  );
}

export default Myspace;
