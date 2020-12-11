import styled from "@emotion/styled";
import { Colors, Fonts } from "assets/variables";

const ButtonContainer = styled.button`
    padding: 12px;
    color: ${Colors.lightGrey};
    background-color: ${Colors.darkGrey};
    border-bottom: 1px solid ${Colors.grey};
        &:hover {
            color:${Colors.midGrey};
        }
`
const ButtonText = styled.div`
    font-weight: ${Fonts.semibold};
    font-size: 18px;
    display: flex;
    justify-content: center;
    width: 100%;
`

export default function Button (props) {
    return (
            <ButtonContainer
                onClick={props.onButtonClick}>
                <ButtonText>
                    {props.buttonText}
                </ButtonText>
            </ButtonContainer>
    );
  }        
    