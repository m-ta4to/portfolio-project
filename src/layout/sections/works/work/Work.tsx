import React from 'react';
import styled from "styled-components";
import {TabLink} from "../../../../components/Link";
import {Theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}
export const Work = (props:WorkPropsType) =>  {
    return (
        <StyledWork>
            <ImageWrapper>
            <Image src={props.src} alt=""/>
                <Button>View Project</Button>
            </ImageWrapper>
            <Description>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <TabLink href={"#"}>demo</TabLink>
            <TabLink href={"#"}>code</TabLink>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${Theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;
  ${TabLink} {
    padding: 10px 0;
    
    &+ ${TabLink}{
      margin-left: 20px;
    }
    
  }
`
const Image = styled.img `
width: 100%;
  height: 260px;
  object-fit: cover;
`



const Description = styled.div`
    padding: 25px 20px;
  `
const Title = styled.h3`

`
const Text = styled.p`
margin: 14px 0 10px;

`
const ImageWrapper = styled.div`
position: relative;
  &:hover{
    ${Button}{
    opacity: 1;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
  }
  }
${Button}{
  opacity: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  &::before{
    width: 100%;
    height: 100%;
  }
}
`