import React from 'react'
import 'animate.css'

const NewsItem =(props)=> {

        let { title, description, imageUrl, newsUrl, publishedAt, author,sourceName } = props;
        return (
            <div className='my-3'>
                <div className="card" >
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex: '1'}}> {sourceName}</span>
                    <img src={imageUrl} className="card-img-top" style={{ height: "176px" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'}</small></p>
                        <p className="card-text"><small className="text-muted"> On {new Date(publishedAt).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer" >Read More</a>

                    </div>
                </div>
            </div>
        )
}
export default NewsItem
