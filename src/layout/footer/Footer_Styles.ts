import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Font} from "../../styles/Common";


const Footer = styled.footer`
  background-color: ${Theme.colors.primaryBg};
 padding: 40px 0;
`
const Name = styled.span`
  ${Font({family: '"Josefine Sans",sans-serif', weight: 700, Fmax: 22, Fmin: 16 })}
  letter-spacing: 3px;
  
`
const SocialList = styled.ul`
display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;
    
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Theme.colors.accent};
  
  &:hover{
    color: ${Theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small`

  font-size: 12px;
  font-weight: 400;
  text-align: center;
  opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}