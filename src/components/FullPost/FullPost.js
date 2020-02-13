import React, { Component } from 'react';
import { getPost, deletePost } from '../../api/postsService';

import './FullPost.css';

class FullPost extends Component {
    state = {
        postContent: null,
    }

    isNeedToFetchPost = (selectedPostId) => {
        return selectedPostId !== null
            && (this.state.postContent === null
            || selectedPostId !== this.state.postContent.id);
    }

    updatePostContent = async (postId) => {
        const postContent = await getPost(postId)
            .then(res => res.data)
            .catch(() => null);

        this.setState({ postContent });        
    }

    deletePostHandler = async (postId) => {
        await deletePost(postId)
          .then(res => res.data)
          .then(data => { console.log(data); })
          .catch(err => { console.log(err); });
    }

    componentDidUpdate() {
        const id = parseInt(this.props.match.params.id, 10);

        this.isNeedToFetchPost(id)
            && this.updatePostContent(id);
    }

     render () {
        const post = this.state.postContent === null
            ? <p
                style = {{ textAlign: "center" }}
                >Please select a Post!</p>
            : (
                <div className="FullPost">
                    <h1>{ this.state.postContent.title }</h1>
                    <p>{ this.state.postContent.body }</p>
                    <div className="Edit">
                        <button className="Delete"
                            onClick = { () => { this.props.deletePost(this.props.selectedPostId)} }
                        >Delete</button>
                    </div>
                </div>
            );
        return (
            <section>
                { post }
            </section>
        );
    }
}

export default FullPost;