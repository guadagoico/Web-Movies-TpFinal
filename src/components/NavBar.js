import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Home } from '@styled-icons/feather/Home';
import { Video } from '@styled-icons/feather/Video';
import { Tv } from '@styled-icons/feather/Tv';
import { Search } from '@styled-icons/feather/Search';



const HomeIcon = styled(Home)`
color: rgb(220, 221, 222);
height: 35px;
margin: 15px;
active: rgb(33, 150, 243);
`
const VideoIcon = styled(Video)`
color: rgb(220, 221, 222);
height: 35px;
margin: 15px;
active: rgb(33, 150, 243);
`
const TvIcon = styled(Tv)`
color: rgb(220, 221, 222);
height: 35px;
margin: 15px;
::active: rgb(33, 150, 243);
`
const SearchIcon = styled(Search)`
color: rgb(220, 221, 222);
height: 35px;
margin: 15px;
::active: rgb(33, 150, 243);`



const NavBar = () => {

    return (

        <Link to="/"><HomeIcon /></Link>
        <Link to="/movies"><VideoIcon /></Link>
        <Link to="/series"><TvIcon /></Link>
         
 
     )
}

export default NavBar