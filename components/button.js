import styled from "@emotion/styled";
import { Colors, Fonts } from "assets/variables";

const Container = styled.button`
  display: flex;
  padding: 10px;
  margin: 5px;
  justify-content: center;
  align-self: auto;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  &:hover {
    background-color: ${Colors.lightLightGrey};
    color: ${Colors.midGrey};
    border: 1px solid ${Colors.midGrey};
  }
  @media (max-width: 1000px) {
    flex: 1;
  }
`;
const Text = styled.div`
  display: flex;
  align-self: center;
`;

function Button({ onButtonClick, children, text, icon, ...props }) {
  return (
    <Container {...props} onClick={onButtonClick}>
      <Text>{children}</Text>
    </Container>
  );
}

export default Button;
