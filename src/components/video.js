import React from 'react';

class Video extends React.Component{
    constructor(){
        super()
        this.state={
          onPlay: [false, false, false]
        }
    }

    componentDidMount(){
        var myVid = document.getElementsByClassName("m_videos")

        for (let i=0; i<myVid.length; i++)
        {
            myVid[i].addEventListener("click",this.control.bind(this, i)) 
        }  
    }

    control(ind){
        var newstatus = this.state.onPlay
        newstatus[ind] = !newstatus[ind]
        this.setState({
            onPlay: newstatus
        })
        if(this.state.onPlay[ind])
        {
            document.getElementsByClassName("m_videos")[ind].play()
            document.getElementsByClassName("pause")[ind].style.display = "none"
        }
        else 
        {
            document.getElementsByClassName("m_videos")[ind].pause()
            document.getElementsByClassName("pause")[ind].style.display = "block"
        }
    }

    render(){
        return(
            <div id="video">
                <div className="subtitles">
                    Videos
                </div>
                <div className="video_title">
                    AnyGuess (Mini Program)
                </div>
                <div className="video_content">
                    <video className="m_videos" data-ind={0} width="50%" height="auto" loop preload="true" >
                        <source src={this.props.videos[0][0]} type="video/mp4"/>
                        <source src={this.props.videos[0][1]} type="video/webm"/>
                        Your browser does not support the video tag
                    </video>
                    <div className="pause" onClick={this.control.bind(this, 0)}><img className="sign" src={this.props.play} alt="PLAY"/></div>
                </div>
                <div className="video_title">
                    AnyHelper (Official Account)
                </div>
                <div className="video_content">
                    <video className="m_videos" data-ind={1} width="50%" height="auto" loop preload="true" >
                        <source src={this.props.videos[1][0]} type="video/mp4"/>
                        <source src={this.props.videos[1][1]} type="video/webm"/>
                        Your browser does not support the video tag
                    </video>
                    <div className="pause" onClick={this.control.bind(this, 1)}><img className="sign" src={this.props.play} alt="PLAY" /></div>
                </div>
                <div className="video_title">
                    Rocket Launch
                </div>
                <div className="video_content">
                    <video className="m_videos" data-ind={2} width="50%" height="auto" loop preload="true" >
                        <source src={this.props.videos[2][0]} type="video/mp4"/>
                        <source src={this.props.videos[2][1]} type="video/webm"/>
                        Your browser does not support the video tag
                    </video>
                    <div className="pause" onClick={this.control.bind(this, 2)}><img className="sign" src={this.props.play} alt="PLAY"/></div>
                </div>
                <div className="video_title">
                    MinePhone Demonstration
                </div>
                <div className="video_content">
                    <video className="m_videos" data-ind={3} width="100%" height="auto" loop preload="true" >
                        <source src={this.props.videos[3][0]} type="video/mp4"/>
                        <source src={this.props.videos[3][1]} type="video/webm"/>
                        Your browser does not support the video tag
                    </video>
                    <div className="pause" onClick={this.control.bind(this, 2)}><img className="sign" src={this.props.play} alt="PLAY"/></div>
                </div>
            </div>
        )
    }
}

export default Video