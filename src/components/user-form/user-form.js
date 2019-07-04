import React, {Component} from 'react';
import MaskedInput from 'react-text-mask';

import './user-form.css';

export default class UserForm extends Component {

    render() {
        return (
            <div className="user-div">
                <form className="user-form">
                    <label  htmlFor="fio"
                            className="el"
                    >Фамилия Имя Отчество</label>
                    <input  type="text" 
                            className="form-control el"
                            id="fio"
                            placeholder="ФИО"
                            required
                    />

                    <label  htmlFor="email"
                            className="el"
                    >Почта</label>
                    <input  type="email" 
                            className="form-control el"
                            id="email"
                            placeholder="Почта"
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
                            onChange={() => {}}
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
                    />

                    <input  type="submit"
                            className="btn btn-success el"
                    />
                </form>
            </div>
        );
    }
} 
