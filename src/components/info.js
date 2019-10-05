import React from 'react';

class Info extends React.Component{
    render(){
        var content = []
        for (let i=0; i<this.props.keyword.length; i++)
        {
            content.push(<p key={i} className="keywords" id={"word"+(i+1)}>{this.props.keyword[i]}</p>)
        }
        return(
            <div id="info">
                <div className="subtitles">
                    WHO I AM
                </div>
                <div className="wordmap">
                    {content}
                </div>
            </div>
        )
    }
}

export default Info