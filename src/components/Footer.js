import React from 'react'
import PropTypes from 'prop-types';

const Footer = () => {

    
    // const {title,website,address,postcode} = props;
    const nickname = <p>Cappuccino</p>
    return (
        <>
            <footer className="container">
                <p> © Passakorn Yongbantom 2000 - {new Date().getFullYear()} </p>
            </footer>
        </>
        )
    }

export default Footer;