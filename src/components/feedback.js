import React from 'react';


class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    changeText(event) {
        this.setState({
            text: event.target.value,
        });
    }

    clear() {
        this.setState({
            text: '',
        });
    }
    render() {
        var remainingChar = 150;
        var text = this.state.text;
        var d = new Date();
        var post_date = d.getFullYear() + "-" + ("0" + (d.getMonth()+1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
        var post_time = (d.getHours()<10 ? "0"+d.getHours():d.getHours()) + ":" + (d.getMinutes()<10 ? "0"+d.getMinutes(): d.getMinutes());
        var post_string = post_date+"    "+post_time;
        return (<div style={{ overflow: 'auto' }}>
            <textarea
                id="feedback"
                cols="50" rows="5"
                maxLength="150"
                placeholder="Share your feelings with me!"
                value={this.state.text}
                onChange={this.changeText.bind(this)}>
            </textarea><br/>
            <div className="controlBar">
                <button className="submitBtn" type="button" onClick={() => this.props.record(text, post_string)}> Submit </button>
                <button className="clearBtn" type="button" onClick={() => this.clear()}> Clear </button><br />
                <p className="warning" >remaining characters: {remainingChar - text.length}</p>
            </div>
        </div>);
    }

}
export default Feedback;