import React from 'react';
import UserHeader from './UserHeader';
import {connectAsync, sequence} from 'iguazu';
import {fetchPosts, fetchUsers, testPosts} from '../actions';
import {queryCollection} from '../iguazu-rest/actions/query';
import {loadPosts, loadUsers} from '../actions/loadPosts';
import _ from 'lodash';
import {connect} from 'react-redux';
import {compose} from 'redux';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    
    console.log(props);

    // const state = {
    //   posts: [],
    //   users: [],
    //   dispatch: {}
    // }

    

  }



  renderList() {
    // if (this.props.isLoading())
    //    return;
    console.log("333", this.props.posts);
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
                
            </div>
          </div>
        </div>
      );
    });
    
    
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
   
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//   users: (id) => dispatch(loadUsers(id)),
//   test: (users) => dispatch(testPosts(users))
//   }
// }

 function loadDataAsProps({store : {dispatch}}) {
   //this.dispatch = dispatch;
   return {
     posts: () => dispatch(loadPosts())

   }
 }
// function loadDataAsProps({store : {dispatch}}) {
//   const sequenceLoadFunctions = sequence([
//     { key: 'posts', handler: () => dispatch(loadPosts()) },
//     { key: 'users', handler: ({ posts }) => dispatch(loadUsers(posts)) }
//   ]);

//   return {
//     ...sequenceLoadFunctions
//   };
// }

// const hocChain = compose(
//   connect(
//     null,
//     mapDispatchToProps
//   ),
//   connectAsync({ loadDataAsProps })
// );

export default connectAsync({ loadDataAsProps })(PostList);
//export default hocChain(PostList);
