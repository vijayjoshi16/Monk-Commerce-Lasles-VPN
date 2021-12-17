import { useState } from 'react';
import styled from 'styled-components';
import {Grid, Hidden} from '@material-ui/core';
import logo from '../../img/logo.png';

const NavbarComponent = styled.div`
    height:30px;
`;

const JumpLinks = styled.span`
    margin-top:15px;
    margin-left: 20px;
    color: #707581;
    display: inline-block;
`;

const SignInButton = styled.button`
    background-color: white;
    color: #22293e;
    outline: none;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    margin-left: 10px;
`

const SignUpButton = styled.button`
    background-color: white;
    color: #f75770;
    border: 1px solid #f75770;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    margin-left: 10px;
    height: 45px;
    width: 120px;
    padding: 10px;
`

const Navbar = ()=>{
    const [drawerOpen,setDrawerOpen] = useState(false);
    return(
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={4} lg={6}>
                    <img
                    style={{height:"50px"}} src={logo}/>
                </Grid>
                <Hidden smDown={true}>
                <Grid item md={8} lg={6}>
                    <Grid container>
                        <Grid item md={6} lg={6}>
                            <JumpLinks>Pricing</JumpLinks>
                            <JumpLinks>Testimonials</JumpLinks>
                        </Grid>
                        <Grid item md={6} lg={6}>
                            <SignInButton>Sign In</SignInButton>
                            <SignUpButton>Sign Up</SignUpButton>
                        </Grid>
                    </Grid>
                </Grid>
                </Hidden>
                
            </Grid>
            
        </div>
    )
}

export default Navbar;