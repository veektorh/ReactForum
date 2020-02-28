import React from 'react'

const Content = () => {
    return (
        <div>
            <div className="container">
                <div className="columns">
                    <div className="column is-three-quarters">
                        <div className="tabs forum">
                            <ul>
                                <li className="is-active"><a>All</a></li>
                                <li><a>Open</a></li>
                                <li><a>Solved</a></li>
                                <li><a>Popular</a></li>
                            </ul>
                        </div>
                        <div className="box forum">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image avatar is-64x64">
                                        <img src="/img/1.png" alt="Image" className="is-rounded" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content list-forum">
                                        <div className="is-pulled-right has-text-centered ">
                                            <a href="#" className="love">
                                                <span>
                                                    <i className="mdi mdi-heart-outline" />
                                                </span>
                                            </a>
                                            <span>15</span>
                                        </div>
                                        <p className="text-content">
                                            <a href="#">How to make great application with nuxtjs
                        <span className="solved" title="Solved">
                                                    <i className="mdi mdi-checkbox-marked-circle" />
                                                </span>
                                            </a>
                                        </p>
                                        <p className="tags-content">
                                            <a className="tag is-rounded is-primary">NuxtJS</a>
                                            <a className="tag is-rounded is-success">VueJS</a>
                                            <a className="tag is-rounded is-warning">JavaScript</a>
                                        </p>
                                        <p className="info-content">
                                            <a>
                                                <i className="mdi mdi-eye-outline" />
                                                <small>100k</small>
                                            </a>
                                            <a>
                                                <i className="mdi mdi-comment-text-multiple-outline" />
                                                <small>70</small>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            
                        </div>
                        <div className="box">
                            <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
                                <a className="pagination-previous">Previous</a>
                                <a className="pagination-next">Next page</a>
                                <ul className="pagination-list">
                                    <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                                    <li><span className="pagination-ellipsis">…</span></li>
                                    <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                                    <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                                    <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                                    <li><span className="pagination-ellipsis">…</span></li>
                                    <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <h5 className="title is-5"># POPULAR TAGS</h5>
                            <div className="tags">
                                <a className="tag is-rounded is-medium  is-primary">HTML</a>
                                <a className="tag is-rounded is-medium is-success">VueJS</a>
                                <a className="tag is-rounded is-medium is-warning">JavaScript</a>
                                <a className="tag is-rounded is-medium is-danger">Angular</a>
                                <a className="tag is-rounded is-medium is-link">React</a>
                                <a className="tag is-rounded is-medium  is-success">NodeJS</a>
                                <a className="tag is-rounded is-medium is-info">PHP</a>
                                <a className="tag is-rounded is-medium is-success">CSS</a>
                                <a className="tag is-rounded is-medium is-dark">DevOps</a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                            Copyright © 2018 - Design By <a target="_blank" href="https://nim4n136.github.io">NIM4N</a> FROM <b> <a target="_blank" href="https://iam-root.tech">IAMROOT TECH</a> </b>
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Content
