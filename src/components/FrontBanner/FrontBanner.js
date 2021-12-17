import styled from "styled-components";
import { Grid } from "@material-ui/core";
import banner from '../../img/banner.png';

const FrontImage = styled.img`
    height: 100%;
    width: 100%;
`

const BannerContent = styled.div`
    padding: 30px;
    margin: auto;
`

const BannerHeading = styled.h1`
    font-size: 2.75rem;
    font-weight: 100;
    line-height: 55px;
`

const BannerDescription = styled.p`
    color: #737884;
    line-height: 25px;
`

const EmphasizedText = styled.span`
    font-weight: 600;
`

const GetStartedButton = styled.button`
    width: 200px;
    height: 50px;
    color: white;
    border: none;
    border-radius: 10px;
    background-color: #f53838;
    outline: none;
    font-weight: 800;
    margin-left: 30px;
    box-shadow: 0 10px 10px -2px #fdcfcf;
`

const FrontBanner = ()=>{
    return(
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <BannerContent>
                <BannerHeading>Want anything to be easy with <EmphasizedText>LaslesVPN.</EmphasizedText></BannerHeading>
                <BannerDescription>Provide a network for all your needs wth ease and fun using <EmphasizedText>LaslesVPN.</EmphasizedText> discover interesting features from us.</BannerDescription>
                </BannerContent>
                <GetStartedButton>Get Started</GetStartedButton>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <FrontImage src={banner} />
            </Grid>
        </Grid>
    )
}

export default FrontBanner;