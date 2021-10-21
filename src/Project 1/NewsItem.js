import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, imgurl, newsurl, id, author, date} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgurl} style={{height: "200px"}} className="card-img-top" alt="..."/>
                    <p className="card-text px-2"><small className="text-muted">By: {author?author:"Unknown"} <br/>On: {new Date(date).toDateString()}</small></p>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`heading${id}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                        <strong>{title}</strong>
                        </button>
                        </h2>
                        <div id={`collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`heading${id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        <p className="card-text">{description}</p>
                        <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
