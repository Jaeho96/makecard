import React from "react";
import styled from "styled-components";

const LeftbarPositioner = styled.div`
  width: 7rem;
  height: 100vh;
  border: solid green;
`;

const LeftbarHeader = styled.div`
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: solid;
`;

function Sidebar() {
  return (
    <LeftbarPositioner>
      <LeftbarHeader>MY SPACE</LeftbarHeader>
    </LeftbarPositioner>
  );
}

export default Sidebar;
