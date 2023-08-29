import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {TabLink} from "../../../../components/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <Container>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <TabLink href="">{item}</TabLink>
                        </ListItem>

                    })}


                </ul>
            </Container>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

`
const ListItem = styled.li`
    
`
