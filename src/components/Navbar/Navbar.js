import { useState } from 'react';
import styled from 'styled-components';
import {Grid} from '@material-ui/core';
import logo from '../../img/logo.png';

const NavbarComponent = styled.div`
    height:"30px"
`

const Navbar = ()=>{
    const [drawerOpen,setDrawerOpen] = useState(false);
    return(
        <div>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img
                    style={{height:"50px"}} src={logo}/>
                </Grid>
                <Grid item xs={0} sm={0} md={6} lg={6}>
                    <Grid container>
                        <Grid item md={6} lg={6}>
                            <span>Pricing</span>
                            <span>Testimonials</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Navbar;