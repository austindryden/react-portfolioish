import React from 'react';


class Nav extends React.Component{
    
    constructor(props){
        super(props);


    }
    
    
    render(){
        return(
            <div id="navbar">
                <ul>
                    {this.props.links.map((link, index) =>{
                        return(
                            <li key={index}>{link}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}




export default Nav;