import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl } = this.props;
    return (
    <div className='my-3'>
      <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://i.pinimg.com/736x/5f/84/e4/5f84e4c54fa4a9cfb28abed3bd3ca810.jpg":imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
     </div>
  </div>
    )
  }
}

export default NewsItem
