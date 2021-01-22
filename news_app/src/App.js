// import React, { Component } from 'react';
import React from 'react';
import './index.css';
import Header from './Header';
export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  // {API fetch}

  componentDidMount() {
    fetch('https://api.currentsapi.services/v1/latest-news?apiKey=GEMQB7YirpP3ZCtynSyNRQzyT2ZaNooOnVcLAqSESiFX5RoH')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        this.setState({
          news: data.news
        });
      })
      .then(json=>
        this.setState({
          isLaoded:true           // setting loading component
        })
      )
      .catch(err=> console.log(err))
  }

  render() {
    console.log(this.state)
    var {isLaoded}=this.state;
    if(!isLaoded){
      return(<h4>Loading....</h4>)
    }else{
      return (
        <>
        <Header/>
          {this.state.news.map((newsPanel,index)=>{
            return (
              <div key={newsPanel.id} className="card">         {/* news panel  */}
                    <div className="news-title">                                     
                        <p> {newsPanel.title} </p>                                   {/* News title*/}
                        <p className="cross">&times;</p>        {/* Close symbol*/} 
                    </div>

                    <div className="auth-date">           {/* Author & date published */}
                        <span className="auth"> {newsPanel.author.toUpperCase()} </span>
                        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        <span className="auth">{newsPanel.published.slice(0 , 19)}</span>
                    </div>

                    <div className="image">                             {/* News Image*/}
                     <div className="news-image">
                            <img src={newsPanel.image} alt="" />
                        </div>
                        <div className="right">
                            <p className="desc">{newsPanel.description} </p>     {/* News Description*/}
                            <p className="links">
                                <span className="refer">Referrence</span>
                                <br/>
                                <a href={newsPanel.url}>{newsPanel.url} </a>
                            </p>
                        </div>
                    </div>
                </div>



            )
          })}

        </>
      )
    }
  }
}