import React, {Component} from 'react';
import MaskedInput from 'react-text-mask';
import { Alert } from 'react-bootstrap';

import './user-form.css';

export default class UserForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            fio:'',
            phone:'',
            email:'',
            about:'',
            showAlert: false
        }

        this.handleFioChange = this.handleFioChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
        this.showData = this.showData.bind(this);
        this.capitalizeText = this.capitalizeText.bind(this);
        this.hideData = this.hideData.bind(this);
    };

    handleFioChange (event) {
        const value = this.capitalizeText(event.target.value);
        
        this.setState({fio: value});
    }
    handleEmailChange (event) {
        this.setState({email: event.target.value});
    }
    handlePhoneChange (event) {
        this.setState({phone: event.target.value});
    }
    handleAboutChange (event) {
        this.setState({about: event.target.value});
    }

    showData (event) {
            const obj = this.refs.userForm;
            if (obj.checkValidity())
            {
                    event.preventDefault();
                    this.setState({showAlert: true});
            }   

    }

    hideData (event) {
        this.setState({showAlert: false});
        event.preventDefault();
    }

    capitalizeText (str) {
            return str.replace(/\w\S*/g, function (txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
    }

    

    render() {

        return (
            <div className="user-div">
                <form className="user-form" ref="userForm">
                    <label  htmlFor="fio"
                            className="el"
                    >Фамилия Имя Отчество</label>
                    <input  type="text" 
                            className="form-control el"
                            id="fio"
                            placeholder="ФИО"
                            onChange={this.handleFioChange}
                            required
                    />

                    <label  htmlFor="email"
                            className="el"
                    >Почта</label>
                    <input  type="email" 
                            className="form-control el"
                            id="email"
                            placeholder="Почта"
                            onChange={this.handleEmailChange}
                            required
                    />
                    
                    <label  htmlFor="phone"
                            className="el"
                    >Телефон</label>
                    <MaskedInput
                            mask={['+','7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            className="form-control el"
                            placeholder="Введите телефон"
                            guide={false}
                            id="phone"
                            onBlur={() => {}}
                            onChange={this.handlePhoneChange}
                            minLength="18"
                            maxLength="18"
                            required
                    />

                    <label  htmlFor="about"
                            className="el"
                    >О себе</label>
                    <textarea 
                            type="text"
                            className="form-control el"
                            id="about"
                            placeholder="Если хотите сообщить нам дополнительную информацию о себе, напишите ее здесь."
                            onChange={this.handleAboutChange}
                    />

                    <button 
                            className="btn btn-success el"
                            onClick={this.showData}
                    >Отправить</button>

                </form>
                <div className="alert">
                        <Alert show={this.state.showAlert} variant="success">
                                <Alert.Heading>Все успешно!</Alert.Heading>
                                <ul><li>
                                        Ваши ФИО: {this.state.fio}
                                </li>
                                <li>
                                        Ваш Email: {this.state.email}
                                </li>
                                        <li>
                                        Ваш телефон: {this.state.phone}
                                        </li>
                                        <li>
                                        {this.state.about===''?'': 'О вас: ' + this.state.about}
                                        </li>
                                </ul>
                                <hr />
                                <div className="d-flex justify-content-end">
                                        <button onClick={this.hideData} variant="outline-success"
                                                className="btn btn-primary">
                                                Закрыть
                                        </button>
                                </div>
                        </Alert>
                </div>
            </div>
        );
    }
} 
