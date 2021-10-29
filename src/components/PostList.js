import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions'

class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    renderList(){
        return(
            this.props.posts.map(post=>{
                return (
                    <div className="card col-lg-3 col-md-4 col-xs-12" key={post.id} style={{marginBottom: "20px", border: "none"}}>
                        <div className="card-body" style={{marginLeft: "10px", boxShadow: "2px 2px 0 #D3D3D3", border: "1px solid gray"}}>
                            <h5 className="card-title">
                                 {post.title}
                            </h5>
                            <p className="card-text">
                                {post.body}
                            </p>
                        </div>
                    </div>
                )
            }))
    }
    render() { 
        return( 
        <div className="row">
            {this.renderList()}
        </div>);
    }
}

const mapStateToProps =(state)=>{
    return {posts: state.posts}
}
 
export default connect(mapStateToProps, {fetchPosts})(PostList);