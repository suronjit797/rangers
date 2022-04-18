import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';


const Blog = () => {

    const [search, setSearch] = useState([])
    const [posts, setPosts] = useState([])
    const [serarchPosts, setSerarchPosts] = useState([])

    useEffect(() => {
        fetch('json/question.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    useEffect(() => {
        setSerarchPosts(posts)
    }, [posts])



    const handelSearch = event => {
        event.preventDefault()
        const result = posts.filter(item => (item.answer).toLowerCase().includes(search.toLowerCase()))
        setSerarchPosts(result);

    }

    
    return (
        <div className='container'>
            <form className='d-flex mt-4' onSubmit={handelSearch}>
                <input
                    type="search"
                    className='form-control'
                    name="search" id="search"
                    placeholder='search your package'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button className="btn btn-success"> search </button>
            </form>



            {
                serarchPosts.length ?( 
                    serarchPosts.map((post, index) => <BlogCard key={post.id} index={index} post={post} />)
                    ):(
                        <p className="text-danger text-capitalize mt-4"> no data found </p>
                )
            }
        </div>
    );
};

export default Blog;