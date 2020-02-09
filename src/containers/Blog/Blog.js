import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import { getAllPosts } from '../../api/postsService';

class Blog extends Component {
    state = {
        allPosts: [],
        selectedPostId: null,
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
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;