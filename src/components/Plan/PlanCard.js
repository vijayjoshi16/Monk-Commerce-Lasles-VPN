import styled from "styled-components";
import plan from '../../img/plan.png';
import tick from '../../img/tick.png';

const PlanCard = styled.div`
    position: relative;
    padding: 30px;
    border: 1.625px solid ;
    border-radius: 7.5px;
    margin: 30px;
    min-height: 600px;
    border-color:${props => props.selected ? "#f53838" : "#b1b4bb"};
`

const PlanImage = styled.img`
    width: 70%;
    height: 160px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const PlanName = styled.h3`
    text-align:center;
    font-size: 1rem;
`

const DescriptionList = styled.div`
    color: #7c818c;
    margin: 20px;
    margin-top: 40px;
    
`

const TickImage = styled.img`
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-top: 10px;
`;

const FeatureText = styled.p`
    display: inline;
    margin-left: 20px;
    font-size: 0.75rem;
`

const PlanSelect = styled.div`
    text-align:center;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
`;

const PlanPrice = styled.h4`
    font-size: 1.25rem;
    display: inline;
`

const PlanTerm = styled.p`
    color:#4f5665;
    display: inline;
`
const SelectButton = styled.button`
    color: ${props => props.selected ? "white" : "#f53838"};
    background-color: ${props => props.selected ? "#f53838" : "white"};
    border: 2px solid #f53838;
    margin-top: 20px;
    width: 150px;
    height: 40px;
    border-radius: 25px;
    font-weight: 600;
    box-shadow: 0 10px 10px -2px #fdcfcf;
    cursor: pointer;
`

export default function(props){
    return(
        <PlanCard selected = {props.selected}>
            <PlanImage src={plan}></PlanImage>
            <PlanName>{props.data.name}</PlanName>
            <DescriptionList>
                {
                    props.data.featuers.map((feature)=>{
                        return(
                            <div>
                                <TickImage src={tick} />
                                <FeatureText>
                                {feature}
                                </FeatureText>
                            </div>
                            
                        )
                    })
                }
            </DescriptionList>
            <PlanSelect>
                <PlanPrice>{props.data.price}</PlanPrice>
                <PlanTerm>{props.data.per}</PlanTerm>
                <br></br>
                <SelectButton
                selected = {props.selected}
                onClick={()=>{props.selectFunction(props.index)}}>
                    Select
                </SelectButton>
            </PlanSelect>
            
        </PlanCard>
    )
};