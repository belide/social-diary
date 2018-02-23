import React from 'react';
import moment from 'moment';
import Interweave from 'interweave';
import { connect } from 'react-redux';

const ReadStoryPage = props => (
  <div>
    <h2>{props.blog.title}</h2>
    <div>
      {props.blog.uName} {' | '}
      {moment(props.blog.postedAt).format('DD MMM YYYY')}
    </div>
    <Interweave tagName="p" content={props.blog.body} />
  </div>
);

const mapStateToProp = (state, props) => {
  const blog = state.blogs.find(e => e.id === props.match.params.id);
  return { blog };
};

export default connect(mapStateToProp)(ReadStoryPage);
