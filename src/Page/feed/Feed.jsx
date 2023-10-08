import React from 'react';
import { useGetPostsByIdQuery, useGetPostsQuery, useSetPostMutation } from '../../Redux/features/api/baseApi';
import Posts from '../Post/Posts';
import { useForm } from 'react-hook-form';

const Feed = () => {

    // const { data: posts, isLoading, isError, error } = useGetPostsQuery()
    const { register, handleSubmit } = useForm()

    const { data: posts, isLoading, isError, error } = useGetPostsByIdQuery(1) // object destructure by name

    const [setPost, { data: postData }] = useSetPostMutation() //an array destructure by position  // useSetPostMutation return  an array in which would have two parameter 1st is function (setPost) 2nd is object like above.

    console.log(postData)

    const onSubmit = (data) => {

        setPost({title:'all is well', body:data.post, userId: 4343})
    }

    if (isLoading) {
        <p className='text-9xl text-zinc-300'>Loading  ....</p>
    }

    if (!isLoading && isError) {
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
                <form className='flex gap-1 mx-3' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" className='w-full rounded-md p-3  bg-zinc-800 text-zinc-300' {...register('post')} />

                    <button className=' p-2 rounded-md bg-zinc-800 text-zinc-300' type="submit">post</button>

                </form>
                <Posts post={posts}>

                </Posts>
            </div>
        </div>
    );
};

export default Feed;