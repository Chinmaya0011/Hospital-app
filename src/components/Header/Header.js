import React from 'react';
import './Header.css';
import careNexusLogo from './careNexus-removebg-preview.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
    return (
        <header className="header-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={careNexusLogo} alt="Hospital Logo" className="logo-img" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/services" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li><a className="dropdown-item" href="/service1">Emergency</a></li>
                                    <li><a className="dropdown-item" href="/service2">Ambulance</a></li>
                                    <li><a className="dropdown-item" href="/service3">Hospital Facility</a></li>
                                    <li><a className="dropdown-item" href="/service4">Radiology</a></li>
                                    <li><a className="dropdown-item" href="/service5">Surgery</a></li>
                                    <li><a className="dropdown-item" href="/service6">Cardiology</a></li>
                                    {/* Add more service options */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/departments" id="departmentsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Departments
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="departmentsDropdown">
                                    <li><a className="dropdown-item" href="/department/dentist">Dentistry</a></li>
                                    <li><a className="dropdown-item" href="/department/orthopedics">Orthopedics</a></li>
                                    <li><a className="dropdown-item" href="/department/ophthalmology">Ophthalmology</a></li>
                                    <li><a className="dropdown-item" href="/department/neurology">Neurology</a></li>
                                    <li><a className="dropdown-item" href="/department/dermatology">Dermatology</a></li>
                                    {/* Add more department options */}
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/doctors">Doctors</a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="/blog">Blog</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Other header content */}
        </header>
    );
};

export default Header;
