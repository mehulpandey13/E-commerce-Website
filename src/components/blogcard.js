import React from "react";
import { Link } from "react-router-dom";
const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="card-images">
                <img src="images/blogg.png" className="img-fluid w-100" alt=""/>
            </div>
            <div className="blog-content">
                <p className="date">7 Aug, 2023</p>
                <h5 className="title">A beautiful sunday morning reaissance</h5>
                <p className="description">
                    lorem isup dolor amet consectur adipisicing elit. atque
                    quaerat accusaumus officia vel temoribus est vitae ad consequatur
                    obcaecati enim suscipit maxime explicado quis odit, iste ex saepe 
                    ipsum illum!
                </p>
                <Link to="/" className="button">Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;