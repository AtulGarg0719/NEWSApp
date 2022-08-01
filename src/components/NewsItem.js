import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgurl,newsUrl,date,author,source} = this.props;
    return (
      <div>
            <div className="card" >
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:"95%"}}>{source}
  </span>
                <img src={imgurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text"><small className="text-muted">By:- {!author ? 'Unknown' : author} At {new Date(date).toGMTString()}</small></p>
                    <a  rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
                </div>
            </div>
            
      </div>
    )
  }
}

export default NewsItem
