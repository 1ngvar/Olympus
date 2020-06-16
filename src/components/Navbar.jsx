import React from 'react';
import styles from './Navbar.module.css';
// console.log(styles);

const Navlink = (props) => {
    // console.log(props);
    let linkActive = '';
    if (props.state === "active") linkActive = styles.active;

    return (
        <div className={`${styles.item} ${linkActive}`}>
            <a>{props.title}</a>
        </div>
    );
}

const Navbar = () => {
    return <nav className={styles.nav}>
        <Navlink title="Profile" />
        <Navlink title="Messages" state="active"/>
        <Navlink title="News" />
        <Navlink title="Music" />
        <Navlink title="Settings" />
    </nav>
}

export default Navbar;