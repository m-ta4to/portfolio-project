import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {Font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${Font({family: '"Josefin Sans", sans-serif', weight: 600, Fmax: 36, Fmin: 30})}
  
  text-align: center;
  letter-spacing: 5px;
  margin-bottom: 90px;
  
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${Theme.colors.accent};
    
    position: absolute;
    left: 50%;
    bottom: -30%;
    transform: translateX(-50%);
    
    @media ${Theme.media.mobile} {
      bottom: -24px;
    }
  }
`
