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
                            <i class="ri-facebook-box-fill"></i>
                        </Link>
                        <Link to={"/"}>
                            <i className="ri-twitter-x-fill"></i>
                        </Link>
                        <Link to={"/"}>
                            <i class="ri-linkedin-box-fill"></i>
                        </Link>
                        <Link to={"/"}>
                            <i class="ri-github-fill"></i>
                        </Link>
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        <h4>projects</h4>
                        <Link to={"/"}>changelog</Link>
                        <Link to={"/"}>startup</Link>
                        <Link to={"/"}>licence</Link>
                        <Link to={"/"}>all verion</Link>
                    </div>
                    <div>
                        <h4>projects</h4>
                        <Link to={"/"}>changelog</Link>
                        <Link to={"/"}>startup</Link>
                        <Link to={"/"}>licence</Link>
                        <Link to={"/"}>all verion</Link>
                    </div>
                    <div>
                        <h4>projects</h4>
                        <Link to={"/"}>changelog</Link>
                        <Link to={"/"}>startup</Link>
                        <Link to={"/"}>licence</Link>
                        <Link to={"/"}>all verion</Link>
                    </div>
                    <div>
                        <h4>projects</h4>
                        <Link to={"/"}>changelog</Link>
                        <Link to={"/"}>startup</Link>
                        <Link to={"/"}>licence</Link>
                        <Link to={"/"}>all verion</Link>
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
