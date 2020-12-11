//Import React
import styled from "@emotion/styled";
import { Colors, Fonts } from "assets/variables";
import React, { useState } from 'react';
import img0 from 'assets/image/img0.jpg'
import img1 from 'assets/image/img1.jpg'
import img2 from 'assets/image/img2.jpg'


//Import ReusableComponents
import Header from 'components/header';
import Item from 'components/item';
import MenuContainer from 'components/menuContainer';
import Button from 'components/button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Content = styled.div`
  position: relative;
  display:flex;
  flex-direction: row;
  justify-self: center;
  background-color: ${Colors.darkGrey}
`


export default function AppFrontend() {

  return (
    <Container>
        <Header 
        />

      <Content>
       
        <MenuContainer>
              <Button
                buttonText="Colada"
              />
              <Button
                buttonText="Exotic"
              />
              <Button
                buttonText="On the Rock"
              />
              <Button
                buttonText="Sour"
              />
              <Button
                buttonText="Sparkling"
              />
                <Button
                buttonText="Analcolici"
              />
        </MenuContainer>
      
        <div className="panel-container">
          <Item
            img={img0}
            text="Black Mamba"
            />
          <Item
            img={img1}
            text="Lick the Rainbow"
            />
          <Item
            img={img2}
            text="Red on the Sexy Beach"
            />
        </div>
      </Content>
    </Container>
  );
}