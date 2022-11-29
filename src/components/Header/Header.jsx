import React, { Component } from 'react'
import "./Header.css"

export class Header extends Component {
    render() {
        return (
            <>
            <header>
                <div className="rick" onClick={this.props.goToHomePage}>
                Rick & Morty
                </div>
            </header>
            </>
        )
    }
}

export default Header
