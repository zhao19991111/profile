import React from 'react'

class Login extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div id="login">
                <div id="personal_info">
                   <p style={{fontSize: "3vw", color: "yellow"}}>Want to leave your footprint here?</p>
                   <div className="entries"><label>Username: </label><input id="username" maxLength="15" type="text"/></div>
                   <div className="entries"><label>Nickname: </label><input id="nickname"  maxLength="15" type="text"/></div>
                   <p id="loginWarning"></p>
                   <button className="submitBtn2" onClick={this.props.submit.bind(this)}>Submit</button>
                </div>
                <button id="exit" onClick={this.props.hide}>✕</button>
            </div>
        )
    }

}

export default Login