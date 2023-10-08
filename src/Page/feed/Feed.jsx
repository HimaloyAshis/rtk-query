import React from 'react';
import { useGetPostsByIdQuery, useGetPostsQuery } from '../../Redux/features/api/baseApi';
import Posts from '../Post/Posts';

const Feed = () => {

    // const { data: posts, isLoading, isError, error } = useGetPostsQuery()

    const {data: posts , isLoading, isError, error} = useGetPostsByIdQuery(1)

    if(isLoading){
        <p className='text-9xl text-zinc-300'>Loading  ....</p>
    }

    if(!isLoading && isError){
        <p className='text-9xl text-zinc-300'>something went wrong</p>

    }

    return (
        <div>
            <h1>Feed</h1>
            <div className='flex flex-col gap-3'>
                {/* {
                    posts?.map(post => 
                    
                    )
                } */}
                <Posts  post={posts}>
                        
                        </Posts>
            </div>
        </div>
    );
};

export default Feed;