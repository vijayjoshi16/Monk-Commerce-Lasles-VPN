import { Grid } from "@material-ui/core";
import styled from "styled-components";
import logo from '../../img/logo.png';

const FooterContainer = styled.div`
    margin:30px;
`

const FooterImage = styled.img`
    width: 200px;
    height: 60px;
`

const FooterText = styled.p`
    color: #656b78;
    max-width: 320px;
    line-height: 30px;
    font-size: 0.90rem;
`

const CopyrightText = styled.p`
    color: #c2c6cf;
    margin-top: 30px;
`;

const SectionHeading = styled.h3`
    margin-bottom:40px;
`;

const Footer = ()=>{
    return(
        <FooterContainer>
            <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <FooterImage src={logo} />
                    <FooterText><strong>LaslesVPN</strong> is a private virtual network that has unique features and has high security.</FooterText>
                    <CopyrightText>©2020LaslesVPN</CopyrightText>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Grid container>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <SectionHeading>Product</SectionHeading>
                            <FooterText>Download</FooterText>
                            <FooterText>Pricing</FooterText>
                            <FooterText>Locations</FooterText>
                            <FooterText>Server</FooterText>
                            <FooterText>Countries</FooterText>
                            <FooterText>Blog</FooterText>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <SectionHeading>Engage</SectionHeading>
                            <FooterText>LaslesVPN?</FooterText>
                            <FooterText>FAQ</FooterText>
                            <FooterText>Tutorials</FooterText>
                            <FooterText>About Us</FooterText>
                            <FooterText>Privacy Policy</FooterText>
                            <FooterText>Terms of Service</FooterText>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4}>
                            <SectionHeading>Earn Money</SectionHeading>
                            <FooterText>Affiliate</FooterText>
                            <FooterText>Become Partner</FooterText>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </FooterContainer>
    )
}

export default Footer;