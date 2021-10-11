import React, { Component } from 'react'
import { NewsItem } from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    capitalizeFirstLetter= (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

    static defaultProps = {
        pageSize: 15,
        country: 'in',
        category: 'general',
        apiKey: 'f726607cf9ce4c5c83444169551334a2'
    }

    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string,
        apiKey: PropTypes.any
    }
    constructor(props) {
        super(props);
        console.log('hello from news component');
        this.state = {
            /* articles: this.articles */
            articles: [],
            loading: false,
            page: 1,
            totalResults: null
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - News port`
    }

    componentDidMount = async () => {
        this.updateNews();
        /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f726607cf9ce4c5c83444169551334a2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false }); */
    }

    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f726607cf9ce4c5c83444169551334a2&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handlePrevClick = async () => {
        this.setState({page: this.state.page - 1 })
        /* let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f726607cf9ce4c5c83444169551334a2&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        }); */
        this.updateNews();
    }

    handleNextClick = async () => {
        /* if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 10))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f726607cf9ce4c5c83444169551334a2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })
        } */
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center my-4">News port- Top {this.capitalizeFirstLetter(this.props.category)} Headline</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-3 col-md-4" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title : ''}
                                description={element.description ? element.description : ''}
                                newsUrl={element.url}
                                imageUrl={element.urlToImage ? element.urlToImage : 'https://via.placeholder.com/250'}
                                author={element.author}
                                date={element.publishedAt}
                                sourceName={element.source.name} />
                        </div>

                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button
                        className="btn btn-dark"
                        disabled={this.state.page <= 1}
                        onClick={this.handlePrevClick}
                    >
                        &larr; Previous
                    </button>
                    <span className="badge bg-dark rounded-pill p-3">{this.state.page}</span>
                    <button className="btn btn-dark"
                        disabled={this.state.page > Math.ceil(this.state.totalResults / 10)}
                        onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
