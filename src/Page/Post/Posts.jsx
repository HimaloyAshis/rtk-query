import React from 'react';

const Posts = ({post}) => {

    console.log(post)
    return (
        <div className='bg-zinc-800 p-6 py-10 rounded-md mx-3 text-zinc-200'>
            <p>{post?.body}</p>
        </div>
    );
};

export default Posts;