import React from 'react';
import photo from "../../../assets/images/my_photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';



export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                <div>
                    <S.Greeting>Hi There</S.Greeting>
                    <S.Name>I am <span>Marina </span></S.Name>
                    <S.MainTitle>A Web Developer.</S.MainTitle>
                </div>
                <S.PhotoWrapper>
                <S.Photo src={photo} alt=" "/>
            </S.PhotoWrapper>
            </FlexWrapper>
            </Container>
        </S.Main>
    );
};

