import React, { Component } from 'react';
import { placeInfo, reviews, detailInfo, news } from '../data'


const InfoContext = React.createContext();


class InfoProvider extends Component {

  state = {
    info: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news
  }


  render() {
    return (
      <InfoContext.Provider value={{
        info: this.state.info,
        reviews: this.state.reviews,
        detailInfo: this.state.detailInfo,
        news: this.state.news,
        name: this.state.name,
        avatar: this.state.avatar,
        comment: this.state.comment,
        headerText: this.state.headerText,
        headerTitle: this.state.headerTitle,
        maps: this.state.maps,
        headerSubTitle: this.state.headerSubTitle
      }}>
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}


const InfoConsumer = InfoContext.Consumer;


export { InfoProvider, InfoConsumer };