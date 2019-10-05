import React from 'react';

class Title extends React.Component{
    constructor() {
        super();
        this.state = {
            ind: 0
        }
        this.timer = setInterval(this.change.bind(this), 4000)
    }

    change() {
        this.setState({
            ind : 1-this.state.ind
        })
    }


    render() {
        return(
            <div id="title">
                <div id="leftbar">
                </div>
                <div id="title_text">
                   {this.props.phrases[this.state.ind]}
                </div>
                <div id="rightbar">
                </div>
            </div>
        )
    }

}

export default Title;