import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/my_photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Marina</h2>
                    <h1>A Web Developer.</h1>
                </div>
                <Photo src={photo} alt=" "/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
min-height: 100vh;
  background-color: beige;
`

const Photo = styled.img`
            width: 350px;
            height: 430px;
            object-fit: cover;
               `

