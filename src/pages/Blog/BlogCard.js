import React from 'react';

const BlogCard = ({ index, post }) => {
    return (
        <div>
            <div className="row my-4 g-5 blog_row">
                <div className={`col-md-4 ${ index % 2 === 0 ? 'order-1' : 'order-2' }`}>
                    <img className=' rounded' src={post.images} alt="" />
                </div>
                <div className={`col-md-8 ${ index % 2 === 0 ? 'order-2' : 'order-1' }`}>
                    <h3 className='text-capitalize mb-3'> {post.question}?</h3>
                    <p className='text-justify'> {post.answer} </p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;