import styled from "styled-components";
import { Grid } from "@material-ui/core";

const Card = styled.div`
    padding:20px;
    border: 1.5px solid #b1b4bb;
    border-radius: 10px;
    max-width: 280px;
    height: 250px;
`;

const CustomerImage = styled.img`
    width: 35px;
    height: 35px;
    display: inline;
`

const CustomerName = styled.p`
    font-size: 0.9rem;
    margin-top:0px;
    text-align:left;
    margin-left:15px;
`
const CustomerLocation = styled.p`
    font-size: 0.75rem;
    color: #656b78;
    margin-top:-10px;
    text-align:left;
    margin-left:15px;
`

const ReviewText = styled.p`
    text-align: left;
    font-size: 0.9rem;
    line-height: 25px;
    color: #0c142b;
`

const TestimonialCard = (props)=>{
    return(
        <Card>
            <Grid container>
                <Grid item xs={2} sm={2} md={2} lg={2}>
                <CustomerImage src={props.data.img} />
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                <div>
                    <CustomerName>{props.data.name}</CustomerName>
                    <CustomerLocation>{props.data.location}</CustomerLocation>
                </div>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3}>
                    {props.data.rating} ⭐
                </Grid>
            </Grid>
            <ReviewText>
                {props.data.review}
            </ReviewText>
            
        </Card>
    )
}

export default TestimonialCard;