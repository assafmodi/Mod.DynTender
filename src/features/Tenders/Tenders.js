import React from "react";
import styled from "styled-components";



import TenderLists from "./TenderLists";
const TendersContainer = styled.div``;
const TenderHeading = styled.h4``;



const Tenders = ({ id }) => {

  return (
    <div>
      <TendersContainer>
        <TenderHeading><div>שלום אורח<div></div>רשימת המכרזים</div></TenderHeading>
       <TenderLists />
      </TendersContainer>
    </div>
  );
};

export default Tenders;
