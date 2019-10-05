import React from 'react';

class Menu extends React.Component{
    constructor() {
        super();
        this.state={
           toShow: []
        }
    }

    render() {
        return(
            <div id="menubar">
                <ul>
                    <li><a className="menulist" href={this.props.target[0]}>{this.props.menuText[0]}</a></li>
                    <li><a className="menulist" href={this.props.target[1]}>{this.props.menuText[1]}</a></li>
                    <li><a className="menulist" href={this.props.target[2]}>{this.props.menuText[2]}</a></li>
                    <li><a className="menulist" href={this.props.target[3]}>{this.props.menuText[3]}</a></li>
                    <li><a className="menulist" href={this.props.target[4]}>{this.props.menuText[4]}</a></li>
                </ul>
            </div>
        )
    }

}

export default Menu;