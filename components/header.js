import styled from "@emotion/styled";
import { Colors, Fonts } from "assets/variables";
import {Copy} from 'assets/copy';
import IconLogo from 'assets/icon/icon-logo.svg';

const Container = styled.div`
    background-color: ${Colors.darkGrey};
    display: flex;
    justify-content: space-between;
    box-shadow: -8px 12px 26px -10px ${Colors.blackOpaque};
    z-index: 99999;
    padding: 10px;
`
const ContainerLeft = styled.div`
    display: flex;
`
const Img = styled.img`
    align-self:center;
`
const Text = styled.div`
    display: flex;
    color: ${Colors.white};
    align-self:center;
    margin: 0 25px;
`
const ContainerRight = styled.div`
`
const MenuButton = styled.div`
    color: ${Colors.darkGrey};
    padding: 10px;
    font-weight: ${Fonts.bold};
    border-radius: 10px;
    background-color: ${Colors.lightGrey};
`

export default function Header(props) {
    return (

        <Container
            onClick={props.onButtonClick}>
            <ContainerLeft>
                <Img src={IconLogo} />
                 
                <Text>
                    {Copy.company}
                </Text>
            </ContainerLeft>
            <ContainerRight>
                <MenuButton>
                    Menu
                </MenuButton>
            </ContainerRight>

        </Container>
    );
  }
        
    