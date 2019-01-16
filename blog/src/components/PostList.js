import React from 'react';
import UserHeader from './UserHeader';
import {connectAsync} from 'iguazu';
import {queryCollection} from 'iguazu-rest';

class PostList extends React.Component {

 
  renderList() {
 
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    }); 
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

function loadDataAsProps({store : {dispatch}}) {
  return {
     posts: () => dispatch(queryCollection({ resource:  'posts' }))
  }
}


export default connectAsync({loadDataAsProps})(PostList);

