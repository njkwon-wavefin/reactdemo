import React, { Component } from 'react';
import { StarInfo, CastList, TrailerList, Poster} from '../components';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import { fetchStarDetail } from '../actions';

class StarDetail extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchStarDetail(this.props.params.id));
  }

  render() {
    const {star} = this.props;
    console.log('star: ' + star);

    if(star.hasOwnProperty('id')) {
      return(
        <Grid fluid={false}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Poster id={star.id} path={star.profile_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <StarInfo star={star}/>
            </Col>
          </Row>
          <Row>

          </Row>
        </Grid>
      );
    } else
      return null;

  }
}

function mapStateToProps(state){
  const {starDetail} = state;
  const {item: star} = starDetail;

  return {star}
}

export default connect(mapStateToProps)(StarDetail);
