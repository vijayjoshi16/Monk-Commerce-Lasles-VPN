import { useState } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import PlanCard from "./PlanCard";
import plans from "../../planData";

const PlanHeading = styled.h2`
    margin-top: 100px;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
`

const PlanText = styled.p`
    text-align: center;
    color: #656b78;
    max-width: 600px;
    margin: auto;
    font-size: 0.95rem;
`

const Plan = ()=>{
    const [selectedPlan, setSelectedPlan] = useState(2);

    const updateSelected = (index)=>{
        setSelectedPlan(index);
    }

    return(
        <div>
            <PlanHeading>Choose Your Plan</PlanHeading>
            <PlanText>Let's choose the package that is the best for you and explore it happily and cheerfuly.</PlanText>
            <Grid container>
                {
                    plans.map((plan,index)=>{
                        return(
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <PlanCard data={plan} 
                                selected={selectedPlan==index}
                                index={index}
                                selectFunction={updateSelected}
                                onClick={()=>{updateSelected(index)}}></PlanCard>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

export default Plan;