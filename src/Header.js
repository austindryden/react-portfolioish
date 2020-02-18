import React from 'react';
import Nav from './Nav';

function Header({content, headerLinks}){
    console.log(headerLinks);
    return(
        <header>
            {/* <Nav links={headerLinks} /> */}
            <h1>{content}</h1>
        </header>
    );
}

export default Header;