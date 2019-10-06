import React from 'react';
import Feedback from "./feedback.js"

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            comments: this.props.comments
        };
    }

    componentWillReceiveProps({comments})
    {
        this.setState({
            comments: comments
        })
    }

    add(e){
        var ind = e.target.dataset.ind;
        this.props.record(ind)
    }

    render() {
        var comments = []
        for(let i=0; i<this.state.comments.length; i++)
        {
            comments.push(            
            <div key={i} className="comment">
                <div style={{ float: 'left', maxWidth: '90%' }}>
                    <p className="text">{this.state.comments[i].content}</p>
                </div>
                <div style={{ float: 'right', }}>
                    <button className="like" data-ind={i}
                        onClick={this.add.bind(this)}>
                        <span role="img" data-ind={i}>❤️</span>  {this.state.comments[i].likes}
                    </button><br/>
                    <p>{this.state.comments[i].date + " by "+this.state.comments[i].user.nickname + "  ||"}</p>
                </div>
            </div>)
        }
        return (
            <div id="commentArea">
                <div className="subtitles">
                    Comments
                </div>
               {comments}
               <Feedback record={(text, post_string)=>{this.props.submit(text, post_string)}}/>
            </div>
        );
    }
}
export default Comment;