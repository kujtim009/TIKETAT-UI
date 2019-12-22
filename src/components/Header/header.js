import React, { Component } from 'react';
import classes from '../Header/header.module.css';


class Header extends Component {

    state = {
        redirect: false
    }


    componentDidMount(){
        console.log("HEADER.JS DID MOUNT", this.props.isadmin);
         }

    clearStorage = (e) => {
        e.preventDefault();
        console.log('LINK WAS CLICKED');
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        document.location.href = '/';
    }


    render() {
        const showAdminLinks = (this.props.isadmin)?<React.Fragment><li><a href="/#" onClick={this.props.showshitja}>Shitja</a></li><li><a href="/#" onClick={this.props.showsetup}>Regullimet</a></li></React.Fragment>:null;
   
            return (
                
                <div>
                   
                    <ul>
                        <li><a href="#home">Home</a></li>
                        
                        <li><a href="/#" onClick={this.props.showsits}>Ulset</a></li>
                        {showAdminLinks}
                        <li style={{float:'right'}}><a className={classes.active} onClick={this.clearStorage} href="/#">Log out</a></li>
                        <li style={{float:'right'}}><a href="/#">Hello {this.props.username}</a></li>
                        </ul>
                </div>
            )

        }
    
}




export default Header