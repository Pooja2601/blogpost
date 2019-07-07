import React,{Component} from 'react';
import {connect} from 'react-redux';



class PostForm extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        const title=this.getTitle.value;
        const message=this.getMessage.value;
        const data={
            id:new Date(),
            title,
            message,
            editing:false
        }
        console.log(data);
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getTitle.value="";
        this.getMessage.value="";
    }
    render(){
        return(
            <div>
            <div className="post-container">
            <h1 className="post-heading">Create Blog</h1>
           
            <form className="form" onSubmit={this.handleSubmit}>
            <input required type="text" placeholder="Enter Post Title" ref={(input)=>this.getTitle=input}/><br/><br/>
            <textarea required row="6" col="30" placeholder="Enter Post" ref={(input)=>this.getMessage=input}/><br/><br/>
            <button>Post</button>
            </form>
            </div>
            </div>
        )
    }
}
export default connect()(PostForm);