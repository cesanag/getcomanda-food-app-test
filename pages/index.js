//Import React
import styled from "@emotion/styled";
import { Colors } from "assets/variables";
import React, { useEffect, useState } from 'react';


//Import Components
import Header from 'components/header';
import Item from 'components/item';
import Button from 'components/button'

//Import Services
import { getAllItems } from 'services/items';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  display:flex;
  justify-self: center;
  background-color: ${Colors.darkGrey}
`
const MenuContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.darkGrey};
    box-shadow: -8px 12px 26px -10px black;
    flex: 0.25;
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`


export default function AppFrontend() {

  const [items, setItems] = useState ([]);
  useEffect(() => {
    getAllItems().then(
      items => setItems([...items])
      )
  }, 
   []
  )
  return (
    <Container>
        <Header />
      <Content>
       
        <MenuContainer>
              <Button
                color={Colors.white}
                bgColor={Colors.darkGrey}
                borderColor={Colors.darkGrey}
              >
              Colada
              </Button>
              <Button
                color={Colors.white}
                bgColor={Colors.darkGrey}
                borderColor={Colors.darkGrey}
              >
              Exotic
              </Button>
              <Button
                color={Colors.white}
                bgColor={Colors.darkGrey}
                borderColor={Colors.darkGrey}
              >
              On the rocks
              </Button>
              <Button
                color={Colors.white}
                bgColor={Colors.darkGrey}
                borderColor={Colors.darkGrey}
              >
              Sour
              </Button>
              
              <Button
                color={Colors.white}
                bgColor={Colors.darkGrey}
                borderColor={Colors.darkGrey}
              >
              Sparkling
              </Button>
              <Button
                color={Colors.white}
                bgColor={Colors.darkGrey}
                borderColor={Colors.darkGrey}
              >
              Analcolici
              </Button>
             
        </MenuContainer>
      
        <ItemContainer>
            {
            items.map((element, index) => (
              <Item {...element}/>
            ))
          }
        </ItemContainer>
      </Content>
    </Container>
  );
}