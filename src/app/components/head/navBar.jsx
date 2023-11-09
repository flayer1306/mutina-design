import React from 'react';

export const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">ПРОЕКТЫ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">УСЛУГИ И СТОИМОСТЬ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ЭТАПЫ ПРОЕКТИРОВАНИЯ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">КОНТАКТЫ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <img src='/images/Главная.jpg' alt='картинка'/>
        </div>
    )
}