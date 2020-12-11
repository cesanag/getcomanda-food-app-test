import styled from "@emotion/styled";
import { Colors } from "assets/variables";

const Container = styled.div`
    height: 100%;
    position: sticky;
    position: -webkit-sticky;
    top: 59px;
    display: flex;
    flex-direction: column;
    background-color: ${Colors.darkGrey};
    box-shadow: -8px 12px 26px -10px black;
    flex: 0.25;
`
export default function MenuContainer(props) {
    return (
        <Container>
            {props.children}
        </Container>
    );
  }
        
    