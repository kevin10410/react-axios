import React, { Component } from 'react';
import { getPost } from '../../api/postsService';

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

    componentDidUpdate() {
        const { selectedPostId } = this.props;

        this.isNeedToFetchPost(selectedPostId)
            && this.updatePostContent(selectedPostId);
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
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        return post;
    }
}

export default FullPost;