import React from 'react';

const Header = () => {
    return (
        <section className="header sticky-top mb-5">
        <nav id="navbar" className="navbar text-center navbar-expand-md">
            <div className="container">
                <a className="nav-link active px-3  text-dark" href="#navbar">
                <h2>Country Information</h2>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto  mb-lg-0 nav justify-content-end">
                <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3  text-dark"  href="#navbar">
                            <h5  className="text-white">Country</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3  text-dark"  href="#navbar">
                            <h5  className="text-white">City</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3  text-dark"  href="#navbar">
                            <h5  className="text-white">Language</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3  text-dark"  href="#navbar">
                            <h5  className="text-white">Population</h5>
                            </a>
                        </span>
                    </li>
                    <li className="nav-item pt-2">
                        <span>
                            <a className="nav-link active px-3  text-dark"  href="#navbar">
                            <h5 className="text-white">Help</h5>
                            </a>
                        </span>
                    </li>
                   
                </ul>
                </div>
            </div>
        </nav>
    </section>
    );
};

export default Header;