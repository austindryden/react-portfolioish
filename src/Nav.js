import React from 'react';
import {Link} from 'react-router-dom';


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
                        {this.props.links.map((item, index) =>{
                            return(
                                
                                <li key={index}><Link to={item.path}>{item.text}</Link></li>
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