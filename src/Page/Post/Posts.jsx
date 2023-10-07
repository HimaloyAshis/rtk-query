import React from 'react';

const Posts = ({post}) => {

    console.log(post)
    return (
        <div>
            <p>{post?.title}</p>
        </div>
    );
};

export default Posts;