import React, { Component } from 'react';
import {Pagination} from 'react-bootstrap';

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
            '',
            '',
            ''
        ];

        for (let i = 1; i <= 3; i++) {
            pageNumbers.push(
                    <Pagination.Item 
                                key={i} 
                                onClick={this.goToPage.bind(this, i-1)}
                                active={i === this.state.currentPage}>
                                {pageTitles[i-1]}</Pagination.Item>
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
                    <Pagination className="choose-block">{pagesNumbers}</Pagination>
                </div>
        </React.Fragment>
    }
    

}
