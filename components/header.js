import styled from "@emotion/styled";
import { Colors } from "assets/variables";
import {Copy} from 'assets/copy';
import Link from "next/link";


import IconLogo from 'assets/icon/icon-logo.svg';
import Button from 'components/button'

import logout from "authentication/logout";
import useAuth from "authentication/useAuth";

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
    display: flex;
`

export default function Header(props) {
    const { data, isLogged } = useAuth();

    return (

        <Container
            onClick={props.onButtonClick}>

            <ContainerLeft>
                <Img src={IconLogo} />

            </ContainerLeft>

            <ContainerRight>

                {isLogged && (
                <>
                    <Text>{data.username}</Text>
                    <Button
                    color={Colors.white}
                    bgColor={Colors.red}
                    borderColor={Colors.red} 
                    onButtonClick={logout}
                    >
                        Logout
                    </Button>
                </>
                )}
                {!isLogged && (
                    <Link href="/login">
                        <a>
                        <Button
                        color={Colors.lightGrey}
                        bgColor={Colors.darkGrey}
                        borderColor={Colors.darkGrey} 
                        >
                            Login
                        </Button>
                        </a>
                    </Link>
                )}
                <Button
                        color={Colors.darkGrey}
                        bgColor={Colors.lightGrey}
                        borderColor={Colors.lightGrey}
                    >
                        Menu
                    </Button>
            </ContainerRight>

        </Container>
    );
  }
        
    