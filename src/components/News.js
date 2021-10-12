import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(null);

    // document.title = `${this.capitalizeFirstLetter(props.category)} - News port`
    /* constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: null
        }

    } */

    /* componentDidMount = async () => {
        this.updateNews();
    } */

    useEffect(() => {
        updateNews();
    }, [])

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        /* this.setState({ loading: true }); */
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(40);
        let parsedData = await data.json();
        props.setProgress(70);
        /* this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false }); */
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    const handlePrevClick = async () => {
        /* this.setState({ page: page - 1 })
        this.updateNews(); */

        setPage(page - 1);
        updateNews();
    }

    const handleNextClick = async () => {
        /* this.setState({ page: page + 1 });
        this.updateNews(); */

        setPage(page + 1);
        updateNews();
    }

    const fetchMoreData = async () => {
        /* this.setState({page: page + 1}); */
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }

    return (
        <div>
            <h1 className="text-center my-4" style={{marginTop: '4rem'}}>News port- Top {capitalizeFirstLetter(props.category)} Headline</h1>
            {/* {loading && <Spinner />} */}

            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title : ''}
                                    description={element.description ? element.description : ''}
                                    newsUrl={element.url}
                                    imageUrl={element.urlToImage ? element.urlToImage : 'https://via.placeholder.com/200'}
                                    author={element.author}
                                    date={element.publishedAt}
                                    sourceName={element.source.name} />
                            </div>

                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}

News.defaultProps = {
    pageSize: 15,
    country: 'in',
    category: 'general',
    apiKey: ''
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
    apiKey: PropTypes.any
}

export default News
