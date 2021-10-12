import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, sourceName } = props;
    return (

        <div className="card m-2">
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: '0'
            }
            }>

                <span className="badge rounded-pill bg-danger" style={{ left: '80%' }}>
                    {sourceName.slice(0, 30)}
                </span>
            </div>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
            </div>
            <div className="card-footer d-flex flex-column">
                <small className="text-muted"> <strong>Author :</strong> {author ? author : 'unknown'}</small>
                <small className="text-muted"> <strong>Published on :</strong> {new Date(date).toGMTString()} </small>
            </div>
        </div>

    )

}

export default NewsItem
