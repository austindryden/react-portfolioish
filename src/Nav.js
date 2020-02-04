import React from 'react';

class Nav extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            isOpen: true
        }
    }
    
    render(){
        return(
                <React.Fragment>
                    <a onClick={this._toggleMenu}>burger</a>
                    {this.state.isOpen ? 
                    <ul>
                        {this.props.links.map((link, index) =>{
                            return(
                                <li key={index}>{link}</li>
                            )
                        })}
                    
                    </ul>
                    
                    : ''
                    }
                </React.Fragment>
      
            
        )
    }

    _toggleMenu = () => {
        this.setState({
            isOpen:!this.state.isOpen
        })}
}

export default Nav;