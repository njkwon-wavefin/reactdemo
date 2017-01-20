import React, { Component } from 'react';
import { Item, CastList, TrailerList} from '../components';
import { fetchData } from '../utils';
import { URL_DETAIL, URL_CAST, URL_VIDEO, API_KEY, CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';

export default class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie:{},
      casts:[],
      trailers:[]
    };
  }

  componentDidMount() {
    var url_movie = URL_DETAIL + this.props.params.id + API_KEY;
    var url_casts = URL_DETAIL + this.props.params.id + URL_CAST + API_KEY;
    var url_trailers = URL_DETAIL + this.props.params.id + URL_VIDEO + API_KEY;

    fetchData(url_movie)
    .then(data => this.setState({movie:data}) );

    fetchData(url_casts)
    .then(data => {
      return data.cast;
    }).then(data => {
      this.setState({casts:data.slice(0,CAST_MAX_NUM)});
    });

    fetchData(url_trailers)
    .then(data => {
      return data.results;
    }).then(data => {
      var youtubeTrailers = data.filter(function(trailer){
        return trailer.site == 'YouTube';
      });
      this.setState({trailers:youtubeTrailers.slice(0,TRAILER_MAX_NUM)});
    });

  }

  render() {
    if(Object.keys(this.state.movie).length !== 0) {
      return(
        <div>
          <Item item={this.state.movie} />
          <CastList data={this.state.casts} />
          <TrailerList data={this.state.trailers} />
        </div>
      );
    }else{
      return <div>loading...</div>
    }
  }

}
