import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types';
import 'animate.css'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [article, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0);
    

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a7df729a314842e785fdac6dde42ffb8&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = ` ${props.category[0].toUpperCase() + props.category.slice(1)}: NewsApp`
        updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a7df729a314842e785fdac6dde42ffb8&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(article.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)

    };
    return (
        <>
            <h2 className='  text-center bg-dark text-white p-2 rounded' style={{marginTop:'50px'}}>{props.category ? props.category[0].toUpperCase() + props.category.slice(1) : 'NewsApp'}-Top Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={article.length}
                next={fetchMoreData}
                hasMore={article.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container my-3'>
                    <div className="row">
                        {

                            article.map((element) => {
                                return (

                                    <div className="col-md-4 " key={element.url} >
                                        <NewsItem

                                            title={element.title ? element.title : ""}
                                            imageUrl={element.urlToImage ? element.urlToImage : "https://static.toiimg.com/photo/msid-92982272.cms"}
                                            description={element.description ? element.description.slice(0, 88) : ""}
                                            newsUrl={element.url}
                                            publishedAt={element.publishedAt}
                                            author={element.author}
                                            sourceName={element.source.name}
                                        />
                                    </div>

                                )
                            })

                        }
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}
export default News;
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
}

// eslint-disable-next-line react/no-typos
News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string
}
