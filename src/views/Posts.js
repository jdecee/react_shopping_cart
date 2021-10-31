import React, { useState, useEffect } from 'react'
import PostDetail from '../components/PostDetail';


export default function Posts (props){
    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        fetch(`https://kekambas-bs.herokuapp.com/posts`)
        .then(res => res.json())
        .then(data => setPosts(data))
    })

        // const handleform = (e) => {
        //     e.preventDefault();
        //     const seasonInput = e.target.season.value
        //     const roundInput = e.target.round.value
        //     setSeason(seasonInput);
        //     setRound(roundInput);
        // }

        return (
            <div>
                This is the Posts Page.
                {posts.length ?                
                <table className='table table-dark table-striped'>
                    <thead>
                        <tr>
                            <td>Body</td>
                            <td>Date_Created</td>
                            <td>Id</td>
                            <td>Title</td>
                            <td>First Name</td>
                            <td>Id</td>
                            <td>Last Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((p,i) => <PostDetail key={i} post={p} />)}
                    </tbody>
                </table>
                : null}
            </div>
    )
}
