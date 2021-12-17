import { useState } from 'react';
import styled from 'styled-components';
import {Grid, Hidden} from '@material-ui/core';
import logo from '../../img/logo.png';
import { SwipeableDrawer } from '@material-ui/core';
import { useMediaQuery } from 'react-responsive';

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

const Drawer = styled.div`
    padding: 30px;
    min-width: 200px;
    text-align: center;
`

const MenuButton = styled.button`
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #f75770;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 50%;
`

const MenuDash = styled.div`
    height: 4px;
    width: 25px;
    background-color: black;
    margin-top: 2px;
`

const Navbar = ()=>{
    const [drawerOpen,setDrawerOpen] = useState(false);
    const isSmall = useMediaQuery({
        maxWidth: "959.5px"
    });
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
            <SwipeableDrawer
            open={drawerOpen}
            onOpen={()=>{setDrawerOpen(true)}}
            onClose={()=>{setDrawerOpen(false)}}
            >   <Drawer>
                <JumpLinks>Pricing</JumpLinks>
                <br></br>
                <br></br>
                <JumpLinks>Testimonials</JumpLinks>
                <br></br>
                <br></br>
                <br></br>
                <SignInButton>Sign In</SignInButton>
                <br></br>
                <br></br>
                <br></br>
                <SignUpButton>Sign Up</SignUpButton>
                </Drawer>
            </SwipeableDrawer>
            {
                isSmall
                ?
                <MenuButton
                onClick={()=>{setDrawerOpen(true)}}
                >
                    <MenuDash></MenuDash>
                    <MenuDash></MenuDash>
                    <MenuDash></MenuDash>
                </MenuButton>
                :
                <></>
            }
        </div>
    )
}

export default Navbar;