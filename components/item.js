import styled from "@emotion/styled";
import { Colors, Fonts } from "assets/variables";
import imgplaceholdergrey from "assets/icon/icon-imgplaceholdergrey.svg"

const Container = styled.div`
    flex-grow: 1;
    box-shadow: -8px 12px 26px -10px ${Colors.blackOpaque};
    flex-direction: row;
    background-color: ${Colors.white};
    text-align: center;
    display: flex;
    height: 50vh;
    position: relative;
    justify-content: center;
`
const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    position: absolute;
    z-index: 9999;
    flex-direction: column;
    align-self: center;
`
const ButtonsContentainer = styled.div`
    display: flex;
`
const ItemTitle = styled.div`
    display: flex;
    font-size: ${Fonts.giant};
    color: ${Colors.lightGrey};
    border-radius: 15px;
    font-weight: ${Fonts.bold};
    align-self: center;
    align-items: center;
    text-align: center;
    padding: 15px;
    justify-content: center;
    z-index: 999;
    text-shadow:0px 2px ${Colors.darkGrey};
    -webkit-text-stroke: .5px ${Colors.darkGrey};    
    font-size:35px;
    color: ${Colors.white};   
`
const Button = styled.button`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    align-self: center;
    align-content: center;
    text-align: center;
    font-size: ${Fonts.big};
    color: ${Colors.darkGrey};
    font-weight: 700;
    padding: 10px;
    background-color: ${Colors.lightGrey};
`
const Img = styled.img`
    background: ${Colors.lightLightGrey} ${imgplaceholdergrey} no-repeat center;
    width: 100%;
    object-fit: cover;
    object-position: top;
    filter: brightness(90%)
`
const DescriptionContainer = styled.div`
    display: none;
    position: absolute;
    background-color: $light-grey;
    align-self: center;
    z-index: 9999;
    max-height: 30vh;
    overflow: auto;
    box-shadow: -8px 12px 26px -10px $black-opaque;
    padding: 15px;
`
const DescriptionContainerCloseButton = styled.div`
    font-size: ${Fonts.medium};
    line-height: ${Fonts.giant};
    color: ${Colors.lightGrey};
    position: absolute;
    white-space: normal; 
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
    font-weight: ${Fonts.bold};
    float: right;
    background-color: ${Colors.darkGrey};
`
const Description = styled.div`
    font-size: ${Fonts.big};
    line-height: 25px;
    color: ${Colors.darkGrey};
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    white-space: nowrap;
    text-overflow: ellipsis;
`


export default function Item({title, img, description }) {
    return (
            <Container>
                <DetailsContainer>
                    <ItemTitle>
                        {title}
                    </ItemTitle>
                    <ButtonsContentainer>
                        <Button>
                            Info
                        </Button> 
                    </ButtonsContentainer>
                </DetailsContainer>
                    
                    <Img src={img?.formats?.small?.url} />
                    <DescriptionContainer>
                         <DescriptionContainerCloseButton>
                             X
                         </DescriptionContainerCloseButton>
                        <Description>
                         
                            <h1>
                                {title}
                            </h1>
                            <p>
                                {description}
                            </p>
                                                   
                        </Description>
                    </DescriptionContainer>

            </Container>
    )
  }
        
    