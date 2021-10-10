import React, { Component } from 'react'
import { NewsItem } from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        console.log('hello from news component');
        this.state = {
            /* articles: this.articles */
            articles: [],
            loading: false,
            page:1,
            totalResults: null
        }
    }

    componentDidMount = async() => {
        //this.fetchData();
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f726607cf9ce4c5c83444169551334a2&page=${this.state.page}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    fetchData = async ()=>{
        let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f726607cf9ce4c5c83444169551334a2&pageSize=10';
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f726607cf9ce4c5c83444169551334a2&page=${this.state.page - 1}&pageSize=10`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        });
    }

    handleNextClick = async() => {
        if(this.state.page + 1 > Math.ceil(this.state.totalResults/10)){

        } else{

            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f726607cf9ce4c5c83444169551334a2&page=${this.state.page + 1}&pageSize=10`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({articles: parsedData.articles,page: this.state.page + 1});
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-3 col-md-4 " key={element.url}>
                                    <NewsItem 
                                        title={element.title ? element.title : ''} 
                                        description={element.description ? element.description : ''} 
                                        newsUrl = {element.url} 
                                        imageUrl = {element.urlToImage ? element.urlToImage : 'https://via.placeholder.com/250'} />
                                </div>

                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button 
                        className="btn btn-dark" 
                        disabled={this.state.page <= 1 }
                        onClick={this.handlePrevClick} 
                        >
                            &larr; Previous
                    </button>
                    <span class="badge bg-dark rounded-pill p-3">{this.state.page}</span>
                    <button className="btn btn-dark"
                    disabled={this.state.page === Math.ceil(this.state.totalResults/10)}
                        onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
