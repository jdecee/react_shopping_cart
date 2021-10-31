import React, { Component } from 'react'

export default class PostDetail extends Component {
    render() {
        const post = this.props.post
        return (
            <tr>
                <td>{post.body}</td>
                <td>{post.date_created}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.user.first_name}</td>
                <td>{post.user.id}</td>
                <td>{post.user.last_name}</td>
            </tr>
        )
    }
}