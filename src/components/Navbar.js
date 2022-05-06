import React from 'react';

export default class Navbar extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            navbarMenuMobileActive: false
        }
        this.hdlClickedNavbarMenu = this.hdlClickedNavbarMenu.bind(this)
        this.hdlClickedNavbarMenuClose = this.hdlClickedNavbarMenuClose.bind(this)
    }

    hdlClickedNavbarMenu(){
        this.setState({
            navbarMenuMobileActive: !this.state.navbarMenuMobileActive
        })
    }

    hdlClickedNavbarMenuClose(){
        this.setState({
            navbarMenuMobileActive: false
        })
    }

    render(){
        const {navbarMenuMobileActive} = this.state;
        return(
            <>
            <nav className="navbar-wrapper">
                <div className="container">
                    <div className="navbar">
                        <a href="#lakehouse" className="navbar-logo">
                            <img src="/images/logo/logo.png" />
                        </a>
                        <div onClick={this.hdlClickedNavbarMenu} className="navbar-hambuger">
                            <i className="fas fa-bars"></i>
                        </div>
                        <ul className={`navbar-menu ${navbarMenuMobileActive?'navbar-menu-active':''}`}>
                            <div className="close-menu" onClick={this.hdlClickedNavbarMenuClose}>
                                <i className="fas fa-times"></i>
                            </div>
                            <li className="nav-item">
                                <a href="#lakehouse" onClick={this.hdlClickedNavbarMenuClose}>LAKEHOUSE</a>
                            </li>
                            <li className="nav-item">
                                <a href="#service" onClick={this.hdlClickedNavbarMenuClose}>SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a href="#room" onClick={this.hdlClickedNavbarMenuClose}>ROOM</a>
                            </li>
                            <li className="nav-item">
                                <a href="#prize" onClick={this.hdlClickedNavbarMenuClose}>PRICE</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" onClick={this.hdlClickedNavbarMenuClose}>ABOUT US</a>
                            </li>
                            <div className="shadow" onClick={this.hdlClickedNavbarMenuClose}></div>
                        </ul>
                        <div className={`navbar-social ${navbarMenuMobileActive?'navbar-social-active':''}`}>
                            <a href="/" target="_blank"> 
                                <i className="fab fa-line"></i>
                            </a>
                            <a href="/" target="_blank">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#contact" onClick={this.hdlClickedNavbarMenuClose} className="btn-contact">CONTACT</a>
                        </div>
                    </div>
                </div>
            </nav>
            </>
        );
    }
}