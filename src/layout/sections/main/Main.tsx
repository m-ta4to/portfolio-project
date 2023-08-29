import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/my_photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Marina</h2>
                    <h1>A Web Developer.</h1>
                </div>
                <Photo src={photo} alt=" "/>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #efefc3;
`

const Photo = styled.img`
            width: 350px;
            height: 430px;
            object-fit: cover;
               `

