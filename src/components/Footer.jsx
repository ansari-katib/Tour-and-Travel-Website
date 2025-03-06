import React from "react";
import "../components/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="top">
                    <div>
                        <h1>Travel</h1>
                        <p>Choose your Favourite destination.</p>
                    </div>

                    <div>
                        <Link to={"/"}>
                            <i className="ri-facebook-box-fill"></i>
                        </Link>
                        <Link to={"/"}>
                            <i className="ri-twitter-x-fill"></i>
                        </Link>
                        <Link to={"/"}>
                            <i className="ri-linkedin-box-fill"></i>
                        </Link>
                        <Link to={"/"}>
                            <i className="ri-github-fill"></i>
                        </Link>
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        <h4>Destinations</h4>
                        <Link to={"/"}>Kashmir</Link>
                        <Link to={"/"}>Manali</Link>
                        <Link to={"/"}>Assam</Link>
                        <Link to={"/"}>Rajasthan</Link>
                    </div>
                    <div>
                        <h4>Company Info</h4>
                        <Link to={"/about"}>About Us</Link>
                        <Link to={"/contact"}>Contact</Link>
                        <Link to={"/"}>Careers</Link>
                        <Link to={"/"}>Privacy Policy</Link>
                    </div>
                    <div>
                        <h4>Customer Service</h4>
                        <Link to={"/"}>Help Center</Link>
                        <Link to={"/"}>FAQ</Link>
                        <Link to={"/"}>Booking</Link>
                        <Link to={"/"}>Terms & Conditions</Link>
                    </div>
                    <div>
                        <h4>Follow Us</h4>
                        <Link to={"/"}>Instagram</Link>
                        <Link to={"/"}>Twitter</Link>
                        <Link to={"/"}>Facebook</Link>
                        <Link to={"/"}>LinkedIn</Link>
                    </div>
                </div>
                <div className="copy-right">
                    <p>
                        Copyright &copy; 2024, Travel All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;
