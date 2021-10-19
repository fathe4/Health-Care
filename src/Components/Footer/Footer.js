import React from 'react';
import { Button, FormControl, InputGroup, Nav } from 'react-bootstrap';
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer-area'>
            <div className='container'>
                <div className='row row-cols-1 row-cols-md-4 py-5 '>
                    <div className="col">
                        <h2>Health <i className='primary-color'>Care</i></h2>
                        <hr />
                        <p>Our institute provides care for our region’s most precious resource: human. We care for the growing needs of our community. We build systems for providing health services for individuals, families, communities and populations in general, and not just patients.</p>
                    </div>
                    <div className="col">
                        <h2>Pages</h2>
                        <hr />
                        <ul className='footer-menu'>
                            <li><Nav.Link href="/home">Home</Nav.Link></li>
                            <li><Nav.Link href="/services">Services</Nav.Link></li>
                            <li><Nav.Link href="/about">About</Nav.Link></li>
                            <li><Nav.Link href="/contact">Contact</Nav.Link></li>
                        </ul>
                    </div>
                    <div className="col ">
                        <h2>Social Links</h2>
                        <hr />
                        <i class="fab fa-facebook-square fs-1"></i>
                        <i class="fab fa-instagram fs-1 mx-4"></i>
                        <i class="fab fa-twitter fs-1"></i>
                    </div>
                    <div className="col ">
                        <h2>Newsletter</h2>
                        <hr />
                        <p>Subscribe us for daily updates.</p>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter your email"
                                type='email'

                            />
                            <Button className='contact-btn py-2 px-3' id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;