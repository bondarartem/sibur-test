import React, { Component } from 'react';
import Pager from 'react-bootstrap/Pager';

import ReactPageScroller from 'react-page-scroller';

import HeadBlock from '../head-block';
import MainBlock from '../main-block';
import UserForm from '../user-form';
import Header from '../header';

import './app.css';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {currentPage: 1};
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    getPagesNumbers = () => {

        const pageNumbers = [];

        const pageTitles = [
            'Начало',
            'Середина',
            'Форма'
        ];

        for (let i = 1; i <= 3; i++) {

            let className = '';

            if (i===this.state.currentPage) {
                className += 'cur-item';
            }

            pageNumbers.push(
                <div 
                    key={i*10}
                    className='pager-item-container'>
                    <Pager.Item 
                                key={i} 
                                eventKey={i - 1} 
                                onSelect={this.goToPage}
                                className={className}>{pageTitles[i-1]}</Pager.Item>
                </div>
            )
        }

        return [...pageNumbers];
    };

    render() {
        const pagesNumbers = this.getPagesNumbers();

        return <React.Fragment>
                <div className="bg"></div>
                <div className="blocks">
                    <Header goToPage={this.goToPage}/>
                    <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                        <HeadBlock />
                        <MainBlock />
                        <UserForm />
                    </ReactPageScroller>
                    <Pager className="choose-block" bsSize="large">
                        {pagesNumbers}
                    </Pager>
                </div>
        </React.Fragment>
    }
    

}
