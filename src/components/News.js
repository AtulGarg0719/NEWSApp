import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    /*articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": "BBC Sport",
            "title": "Shane Warne memorial - watch & follow updates",
            "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
            "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
            "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
            "publishedAt": "2022-03-30T08:22:26.498888Z",
            "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ];*/
    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general',



    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            // article : this.articles
            article: [],
            page: 1,
            loading: false,
            totalArticles: 0,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
    }
    async updateNews() {
        this.props.setProgress(0);
        
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let jsondata = await data.json();
        this.setState({
            article: jsondata.articles,
            totalArticles: jsondata.totalResults,
            loading: false
        })
        this.props.setProgress(100);

    }
    async componentDidMount() {

        // new api = https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f22008b70d184ed384b0e0b3f0f8a86f
        // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading:true});
        // let data = await fetch(url);
        // let jsondata = await data.json();
        // console.log(jsondata);
        // this.setState({
        //     article:jsondata.articles,
        //     totalArticles:jsondata.totalResults,
        //     loading:false
        // })
        this.updateNews();
    }
    // handelPervNews = async()=>{
    //     // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;

    //     // this.setState({loading:true});
    //     // let data = await fetch(url);
    //     // let jsondata = await data.json();
    //     // this.setState({
    //     //     page:this.state.page-1,
    //     //     article:jsondata.articles,
    //     //     loading:false,
    //     // })
    //     this.setState({page:this.state.page-1});
    //     this.updateNews();
    // }
    // handelNextNews = async()=>{ 
    //     if(this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize)){

    //     }else{
    //         // let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //         // this.setState({loading:true});
    //         // let data = await fetch(url);
    //         // let jsondata = await data.json();
    //         // this.setState({
    //         //     page:this.state.page+1,
    //         //     article:jsondata.articles,
    //         //     loading:false,
    //         // })
    //         this.setState({page:this.state.page+1});
    //         this.updateNews();
    //     }
    // }
    fetchMoreData = async () => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 });
        let data = await fetch(url);
        let jsondata = await data.json();
        this.setState({
            article: this.state.article.concat(jsondata.articles),
            totalArticles: jsondata.totalResults,
        })
    };
    render() {
        return (
            <>
                <h1 className='text-center' style={{marginTop:'100px'}}>News App - Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.article.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.article.length !== this.state.totalArticles}
                    loader={<Spinner />}
                >
                    <div className='container'>
                        <div className='row mx-auto'>

                            {this.state.article.map((element) => {
                                return <div className='col-md-4 my-2' key={element.url}>
                                    <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}

                            {/* {!this.state.loading && this.state.article.map((element)=>{
                                return <div className='col-md-4 my-2' key={element.url}> 
                                <NewsItem  title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                                </div>
                            })} */}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className='div d-flex justify-content-between my-2'>
                    <button type="button" onClick={this.handelPervNews} disabled={this.state.page<=1} className="btn btn-dark">&larr; Previous</button>
                    <button type="button" onClick={this.handelNextNews} disabled={this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} className="btn btn-dark">Next &rarr;</button>
                    </div> 
                */}

            </>
        )
    }
}

export default News
