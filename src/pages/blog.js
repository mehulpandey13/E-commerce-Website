import React from "react";
import BreadCrumb from "../components/breadcrumb";
import Meta from "../components/meta";
import BlogCard from "../components/blogcard";
const Blog = () => {
    return(
        <>
        <Meta title={"Blogs"}/>
        <BreadCrumb title="Blogs"/>
        <div className="blog-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                    <div className="filter-card mb-3">
                            <h3 className="filter-title">
                                Shop by categories
                            </h3>
                            <div>
                                 <ul>
                                    <li>Cereals</li>
                                    <li>Pulses</li>
                                    <li>Spices</li>
                                    <li>Fruits</li>
                                    <li>Vegetables</li>
                                    <li>Agro Products</li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-6">
                                <BlogCard/>
                            </div>
                            <div className="col-6">
                                <BlogCard/>
                            </div>
                            <div className="col-6">
                                <BlogCard/>
                            </div>
                            <div className="col-6">
                                <BlogCard/>
                            </div>
                            <div className="col-6">
                                <BlogCard/>
                            </div>
                            <div className="col-6">
                                <BlogCard/>
                            </div>
                            <div className="col-6">
                                <BlogCard/>
                            </div>
                            <div className="col-6">
                                <BlogCard/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Blog;