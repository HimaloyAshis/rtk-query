import React from 'react';
import { useGetPostsQuery } from '../../Redux/features/api/baseApi';
import Posts from '../Post/Posts';

const Feed = () => {

    const { data: posts, isLoading, isError, error } = useGetPostsQuery()

    console.log(posts)

    return (
        <div>
            <h1>Feed</h1>
            <div className='flex flex-col gap-3'>
                {
                    posts?.map(post => <Posts key={post.id} post={post}></Posts>)
                }
            </div>
        </div>
    );
};

export default Feed;