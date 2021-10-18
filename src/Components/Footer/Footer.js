import React from 'react';
import { Nav } from 'react-bootstrap';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer-area'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-4 py-5 '>
                    <div className="col">
                        <img className='' src="https://healsoul.thememove.com/wp-content/uploads/2018/10/logo-light-2.png" alt="" />
                    </div>
                    <div className="col">
                        <h4>Pages</h4>
                        <ul className='footer-menu'>
                            <li><Nav.Link href="/home">Home</Nav.Link></li>
                            <li><Nav.Link href="/services">Services</Nav.Link></li>
                            <li><Nav.Link href="/about">About</Nav.Link></li>
                            <li><Nav.Link href="/contact">Contact</Nav.Link></li>
                        </ul>
                    </div>
                    <div className="col ">
                        <h2>Social Links</h2>
                    </div>
                    <div className="col ">
                        <h2>Social Links</h2>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;