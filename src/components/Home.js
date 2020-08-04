import React, {Component} from 'react'
import axios from 'axios'

class Home extends Component {
    state = {
        post: []
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            this.setState({
                post: res.data.slice(0,10)
            })
        })
    }
    render(){
        const {post} = this.state
        const postList = post.length ? (
            post.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <span className='card-title'> 
                            {post.title}
                            </span>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : ( 
        <div className='center'>No posts yet</div>
        )
       
    return(
        <div className="container">
            <h4 className="center">This is the home page</h4>
            {postList}
        </div>
    )
}
}

export default Home