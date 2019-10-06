import React from 'react';

class Intro extends React.Component{
    constructor(){
        super();
        this.state={
           introText: null,
           pos: 0,
           isPlaying: false
        }
    }

    amplifyMedia(mediaElem, multiplier) {
        var context = new (window.AudioContext || window.webkitAudioContext),
            result = {
              context: context,
              source: context.createMediaElementSource(mediaElem),
              gain: context.createGain(),
              media: mediaElem,
              amplify: function (multiplier) { result.gain.gain.value = multiplier; },
              getAmpLevel: function () { return result.gain.gain.value; }
            };
        result.source.connect(result.gain);
        result.gain.connect(context.destination);
        result.amplify(multiplier);
        return result;
    }

    componentDidMount() {
        setInterval(this.printLetter.bind(this), 100);
        var audio = new Audio (this.props.voice)
        audio.preload = "metadata"
        audio = this.amplifyMedia(audio, 5).media
        audio.muted = false
        this.setState({
            audio: audio
        })
    }

    printLetter() {
        var npos = this.state.pos + 1;
        if (npos >= this.props.introduction.length - 1)
        {
            this.setState({
               introText: this.props.introduction
            })
        }
        else
        {
            this.setState({
                introText: this.props.introduction.substring(0, npos)+((npos%2 === 0)? '|':''),
                pos: npos
            })
        }
    }

    play(){  
        if (!this.state.isPlaying)
        {
           var audio = this.state.audio
           this.setState({
               isPlaying: true
           })
           audio.play()
           setTimeout(()=>{this.setState({
               isPlaying: false
           })}, audio.duration* 1000)
        } 
    }

    render(){
        return(
            <div id="intro">
                <div id="avatar" onClick={this.play.bind(this)}></div>
                <div id="introText">
                    {this.state.introText}
                </div>
            </div>
        )
    }
}

export default Intro