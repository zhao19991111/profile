import React from 'react';
class Slide extends React.Component {
    constructor(){
        super()
        this.state = {
            index: 0
        }
    }

    componentDidMount(){
        setInterval(()=>{
            if (this.state.index < this.props.myData.name.length - 1)
            {
                this.setState({
                   index: this.state.index+1
                })
            }
            else {
                this.setState({
                    index: 0
                })
            }
        }, 4000)
    }

    render() {
        var myPics = [];
        var myNames = [];
        var m_data = this.props.myData;

        for (let i = 0; i < m_data.name.length; i++) {
            myPics.push(<img key={i}
            className="slide_pic"
            src={m_data.picture[i]} alt="N/A" 
            style={{ display: i === this.state.index ? 'block' : 'none'}} />);
            myNames.push(<p key={i}
            className="slide_text"
            style={{ display: i === this.state.index ? 'block' : 'none'}}>
            {m_data.name[i]}
            </p>);
        }
        return (<div id="slide" className='pictureSlide'>
            <div className="subtitles">
               WHERE I HAVE BEEN TO
            </div>
            {myPics}{myNames}
        </div>);
    }
}
export default Slide