import React, {Component} from 'react';
import logo from '../../images/logo.png';

import './header.css';

export default class Header extends Component {
    
    
    render() {
        const {goToPage} = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <img src={logo} className="navbar-brand" alt="СИБУР" />
                <ul className="navbar-nav mr-auto navbar-ul">
                    <li className="nav-item">
                        <button className="btn btn-link" onClick={() =>goToPage(0)}>Работай в большой команде</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-link" onClick={() =>goToPage(1)}>Что мы ждём и предлагаем</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-link" onClick={() =>goToPage(2)}>Заполни анкету</button>
                    </li>
                </ul>
            </nav>
        );
    }
}
