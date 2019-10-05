import React from 'react';

class Skills extends React.Component{
    render(){
        var content = []
        for (let i=0; i<this.props.keyword.length; i++)
        {
            content.push(<p key={i} className="keywords" id={"skill"+(i+1)}>{this.props.keyword[i]}</p>)
        }
        return(
            <div id="skills">
                <div className="subtitles">
                    WHAT I KNOW
                </div>
                <div className="wordmap">
                    {content}
                </div>
            </div>
        )
    }
}

export default Skills