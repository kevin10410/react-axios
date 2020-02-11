import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import { getAllPosts, deletePost } from '../../api/postsService';

class Blog extends Component {
    state = {
        allPosts: [],
        selectedPostId: null,
    }

    handleUpdateSelectedPost = (postId) => {
        const selectedPostId = postId;
        this.setState({ selectedPostId }); 
    }

    deletePostHandler = async (postId) => {
        await deletePost(postId)
            .then(res => res.data)
            .then(data => { console.log(data); })
            .catch(err => { console.log(err); });
    }

    componentDidMount = async () => {
        const allPosts = await getAllPosts()
            .then(res => res.data)
            .then(data => data.filter(post => post.id < 5))
            .catch(() => []);
        
        this.setState({ allPosts });
    }

    render () {
        return (
            <div>
                <section className="Posts">
                {
                    this.state.allPosts.map(post => (
                        <Post
                            key = { post.id }
                            title = { post.title }
                            author = 'OTree'
                            postId = { post.id }
                            updateSelectedPost = { this.handleUpdateSelectedPost }
                        />
                    ))
                }
                </section>
                <section>
                    <FullPost
                        deletePost = { this.deletePostHandler }
                        selectedPostId = { this.state.selectedPostId }
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;