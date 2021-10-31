import React, { Component } from 'react'
import KekambasDetail from '../components/KekambasDetail';

export default class Kekambas extends Component {
    constructor(props){
        super(props);
        this.state = {
            students: []
        }
    }

    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => this.setState({
                students: data
            }))
    }
    render() {
        return (
            <div>
                {this.state.students.map((s,i) => <KekambasDetail key={i} student={s} />)}
            </div>
        )
    }
}
