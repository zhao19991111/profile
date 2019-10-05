import React from 'react';

class Menu extends React.Component{
    constructor() {
        super();
        this.state={
           toShow: []
        }
    }

    componentDidMount() {
        this.timer = setInterval(()=>{
            var w = window.innerWidth;
            var n_toShow = [];
            if (w > 800)
            {
                for(let i= 0; i < 5; i ++)
                document.getElementsByClassName("menulist")[i].style.display = "block";
                n_toShow = [];
            }
            else if (w > 700) {
                for(let i= 0; i < 4; i ++)
                document.getElementsByClassName("menulist")[i].style.display = "block";

                document.getElementsByClassName("menulist")[4].style.display = "none";
                n_toShow.push(document.getElementsByClassName("menulist")[4].innerHTML)
            }
            else if (w > 500) {
                for(let i= 3; i < 5; i ++)
                {
                    document.getElementsByClassName("menulist")[i].style.display = "none";
                    n_toShow.push(document.getElementsByClassName("menulist")[i].innerHTML)
                }
                document.getElementsByClassName("menulist")[0].style.display = "block";
                document.getElementsByClassName("menulist")[1].style.display = "block"; 
                document.getElementsByClassName("menulist")[2].style.display = "block"; 
            } 
            else if (w > 400){
                for(let i= 2; i < 5; i ++)
                {
                   document.getElementsByClassName("menulist")[i].style.display = "none";
                   n_toShow.push(document.getElementsByClassName("menulist")[i].innerHTML)
                }
                document.getElementsByClassName("menulist")[0].style.display = "block"; 
            }
            else{
                for(let i= 1; i < 5; i ++)
                {
                   document.getElementsByClassName("menulist")[i].style.display = "none";
                   n_toShow.push(document.getElementsByClassName("menulist")[i].innerHTML)
                }
            }
            this.setState({
                toShow: n_toShow,
            })
        }, 100);
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