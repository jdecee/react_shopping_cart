import React, { Component } from 'react'

export default class KekambasDetail extends Component {
    render() {
        return (
            <div>
                <h7>{this.props.student.first_name} {this.props.strudent.last_name} - {this.props.student.id}</h7>
            </div>
        )
    }
}
