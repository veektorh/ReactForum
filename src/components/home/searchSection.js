import React from 'react'

const SearchSection = () => {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container hero-forum has-text-centered">
                        <h1 className="title">
                            Forum Stack
              </h1>
                        <h2 className="subtitle">
                            all tech addicts can ask here :)
              </h2>
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input className="input is-medium" type="text" placeholder="Find a great content" />
                            </p>
                            <p className="control">
                                <a className="button is-medium is-info">
                                    Search
                  </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <br />
        </div>
    )
}

export default SearchSection
