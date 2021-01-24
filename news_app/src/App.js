// import React, { Component } from 'react';
import React from 'react';
import './index.css';
import Header from './Header';
import News from './News';
import Filter from './Filter';
export default class Newsapp extends React.Component {
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
    // console.log(this.state)
    // var {isLaoded}=this.state;
    // if(!isLaoded){
    //   return(<h4>Loading....</h4>)
    // }else{
      return (
        <>
        <Header/>
        <Filter />
        <News/>

        </>
      )
    }
  }
