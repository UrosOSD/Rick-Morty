import React, { Component } from 'react'
import Header from "./../../components/Header/Header"
import Card from "./../../components/Card/Card"
import "./Homepage.css"

export class Homepage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="pages">
                    <button className="pageNumber" onClick={() => this.props.prevPage()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button className={this.props.renderedPage === 1 ? 'pageNumber active' : 'pageNumber'} onClick={(e) => this.props.clickPage(e)}>1</button>
                    <button className={this.props.renderedPage === 2 ? 'pageNumber active' : 'pageNumber'} onClick={(e) => this.props.clickPage(e)}>2</button>
                    <button className={this.props.renderedPage === 3 ? 'pageNumber active' : 'pageNumber'} onClick={(e) => this.props.clickPage(e)}>3</button>
                    <button className={this.props.renderedPage === 4 ? 'pageNumber active' : 'pageNumber'} onClick={(e) => this.props.clickPage(e)}>4</button>
                    <div className={this.props.renderedPage > 4 ? 'pageNumber active' : 'pageNumber'}>...{this.props.renderedPage > 4 && this.props.renderedPage}</div>
                    <button className="pageNumber" onClick={() => this.props.nextPage()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className='cards-box'>
                    {this.props.data.map(e => <Card key={e.id} card={e} fetchCharacter={this.props.fetchCharacter} />)}
                </div>
            </div>
        )
    }
}

export default Homepage
