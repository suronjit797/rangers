import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
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

    const handelSearch = event =>{
        event.preventDefault()
        // let ind = posts.question.toLowerCase().include(search.toLowerCase())

    }

    if (!serarchPosts.length) {
        return (
            <div className='spinner_body' >
                <Spinner animation="grow" variant="warning" />
            </div>
        );
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
                    onChange={e=>setSearch(e.target.value)}
                />
                <button className="btn btn-success"> search </button>
            </form>



            {
                serarchPosts.map((post, index) => <BlogCard key={post.id} index={index} post={post} />)
            }
        </div>
    );
};

export default Blog;