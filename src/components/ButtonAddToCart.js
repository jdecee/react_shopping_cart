import React, { Component } from 'react'

export default class ButtonAddToCart extends Component {
    render() {
        return (
            <div>
                <button className='btn btn-dark' onClick={() => this.props.incrementCount(this.props.step)}>+{this.props.step}</button>
            </div>
        )
    }
}