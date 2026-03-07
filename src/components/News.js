import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

   constructor(){
    super();
    this.state = {
        articles: [],
        loading: false,
        page: 1

    }
  }

  async componentDidMount(){
     console.log("cdm")
     let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9731ecdefab481e9257bd6e85ac6999&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading: true})
     let data = await fetch(url);
     let parseData = await data.json()
     console.log(parseData);
     this.setState({
      articles: parseData.articles, 
      totalResults: parseData.totalResults,
      loading: false
    })

   }

    handlePrevClick= async() => {
    console.log("Previous")

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9731ecdefab481e9257bd6e85ac6999&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
     let data = await fetch(url);
     let parseData = await data.json()
     console.log(parseData);
     this.setState({
        page: this.state.page-1,
        articles: parseData.articles,
       // totalResults: parseData.totalResults,
        loading: false
     })
   }

   handleNextClick= async() => {
     console.log("Next");

     if(!(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9731ecdefab481e9257bd6e85ac6999&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
     this.setState({loading: true})
     let data = await fetch(url);
     let parseData = await data.json()
     console.log(parseData);
     this.setState({
        page: this.state.page+1,
        articles: parseData.articles,
       // totalResults: parseData.totalResults,
        loading: false
     })
    }
   }

  render() {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey-Top Headlines</h1>
       {this.state.loading && <Spinner/>}
        <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return  <div className="col-md-4" key ={element.url}>
                    <NewsItem  title= {element.title?element.title:""}description=  {element.description?element.description:""}imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
        </div> 

         <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-3 mx-2" onClick={this.handlePrevClick}>  &larr; Previous</button>
            <button disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark my-3 mx-2" onClick={this.handleNextClick}>Next  &rarr;</button>
         </div>


      </div>
    )
  }

}
