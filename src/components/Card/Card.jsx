import React, { Component } from 'react'
import "./Card.css"

export class Card extends Component {
    render() {
        return (

            <div onClick={() => this.props.fetchCharacter(this.props.card.id)} className='card'>
                <img src={this.props.card.image} />
                <h4>{this.props.card.name}</h4>
            </div>
        )
    }
}

export default Card
