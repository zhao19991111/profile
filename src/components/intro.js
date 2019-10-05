import React from 'react';

class Intro extends React.Component{
    constructor(){
        super();
        this.state={
           introText: null,
           pos: 0
        }
    }

    componentDidMount() {
        setInterval(this.printLetter.bind(this), 100);
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

    render(){
        return(
            <div id="intro">
                <div id="avatar"></div>
                <div id="introText">
                    {this.state.introText}
                </div>
            </div>
        )
    }
}

export default Intro