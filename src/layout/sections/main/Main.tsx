import React from 'react';
import photo from "../../../assets/images/my_photo.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';



export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
            <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                <div>
                    <S.Greeting>Hi There</S.Greeting>
                    <S.Name>I am <span>Marina </span></S.Name>
                    {/*<S.MainTitle>A Web Developer.</S.MainTitle>*/}
                    <S.MainTitle>
                        <p>A Web Developer.</p>
                        <Typewriter
                            options={{
                                strings: ["A Web Developer."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </S.MainTitle>
                </div>
                <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={500}
                    glareEnable={true}
                    glareMaxOpacity={0.45}
                    scale={1.02}>
                   <S.PhotoWrapper>
                   <S.Photo src={photo} alt=" "/>
                   </S.PhotoWrapper>
                </Tilt>
            </FlexWrapper>
            </Container>
        </S.Main>
    );
};

