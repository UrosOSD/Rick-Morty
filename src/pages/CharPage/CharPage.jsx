import React, { Component } from 'react'
import "./CharPage.css"
import Header from "./../../components/Header/Header"

export class CharPage extends Component {
    render() {
        return (
            <div>
                <Header goToHomePage={this.props.goToHomePage}/>
                <div className="char">
                <img src={this.props.char.image} alt="rick"/>
                <h4>{this.props.char.name}</h4>
                </div>
            </div>
        )
    }
}

export default CharPage
