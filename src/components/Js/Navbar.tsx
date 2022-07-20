import React, {useState} from 'react';
import {Link} from 'react-scroll';
import '../Css/Navbar.css';

function Navbar() {

    // Responsive Menu

    const [showMenu, setShowMenu] = useState(false);

    // Navigation Links

    const NavList = [
        {name:"Home", icon:"fa fa-home", section:"home"},
        {name:"Services", icon:"fa fa-boxes", section:"services"},
        {name:"Skills", icon:"fa fa-user-secret", section:"skills"},
        {name:"Projects", icon:"fa fa-laptop-code", section:"projects"},
    ];

    interface NavLinkProps {
        linkName: string;
        linkIcon: string;
        linkSection:string;
    }

    const NavLink = (props: NavLinkProps) => {
        return(
            <Link 
                activeClass="link-active" 
                className='nav-link'
                to={props.linkSection}
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500} 
            >
                <i className={props.linkIcon} />
                {props.linkName}
            </Link>
        );
    }

    // Navigation Socials

    const socialList = [
        {
            name:"Facebook", 
            icon: "fa fa-facebook-official", 
            link: "https://www.facebook.com/markjimwelllindayao.lagarta/"
        },
        {
            name:"Github", 
            icon: "fa fa-github", 
            link: "https://github.com/Chillpill23"
        },
    ]

    interface NavSocialProps {
        socialIcon: string;
        socialName: string;
        socialLink: string;
    }

    const NavSocial = (props: NavSocialProps) => {
        return (
            <div className='social-link'>
                <a href={props.socialLink} target="_blank" data-name = {props.socialName}>
                   <i className={props.socialIcon} />
                </a>
            </div>
        );
    }

    return (
    <>
        <nav className="navbar-container">
            <div className='navbar-menu' onClick={() => setShowMenu(!showMenu)}>
                <i className={showMenu ? 'fa fa-times' : 'fa fa-bars'} />
            </div>

            <div className="navbar-logo">
                <img src={require('../Images/Logo.png')} />
                <span className='logo-name'>LAGARTA</span>
            </div>
            
            <div className={showMenu ? "navbar-links menu-active" : "navbar-links menu-inactive"}>
                {NavList.map(nav => (
                    <NavLink key={nav.name}
                        linkName={nav.name}
                        linkIcon={nav.icon}
                        linkSection={nav.section}
                    />
                ))}
            </div>

            <div className="navbar-social">
                {socialList.map(nav => (
                    <NavSocial key={nav.name}
                        socialName = {nav.name}
                        socialIcon = {nav.icon}
                        socialLink = {nav.link}
                    />
                ))}

                <div className='social-link' >
                    <a href='' data-name="0999 186 7054" title='Click to Copy' onClick={(e) => navigator.clipboard.writeText("09991867054")}>
                        <i className='fa fa-phone-alt' />
                    </a>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar