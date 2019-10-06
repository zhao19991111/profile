import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import Title from './components/title.js';
import Menu from './components/menu.js';
import Projects from './components/projects.js';
import Intro from './components/intro.js';
import Video from './components/video.js';
import Slide from './components/slide.js';
import Info from './components/info.js';
import Comment from './components/comment.js'
import Login from './components/login.js'
import Skill from './components/skills.js'
import anyhelper from './resources/anyhelper.jpg'
import anyhelper2 from './resources/anyhelper2.jpg'
import anyhelper3 from './resources/anyhelper3.jpg'
import anyhelper4 from './resources/anyhelper4.jpg'
import rocket from './resources/rocket.jpg'
import rocket2 from './resources/rocket2.jpg'
import rocket3 from './resources/rocket3.jpg'
import rocket4 from './resources/rocket4.jpg'
import minephone from './resources/minephone.png'
import minephone2 from './resources/minephone2.png'
import minephone3 from './resources/minephone3.png'
import minephone4 from './resources/minephone4.png'
import pic1 from './resources/pic1.jpg'
import pic2 from './resources/pic2.jpg'
import pic3 from './resources/pic3.jpg'
import pic4 from './resources/pic4.jpg'
import pic5 from './resources/pic5.jpg'
import pic6 from './resources/pic6.jpg'
import pic7 from './resources/pic7.jpg'
import pic8 from './resources/pic8.jpg'
import pic9 from './resources/pic9.jpg'
import pic10 from './resources/pic10.jpg'
import pic11 from './resources/pic11.jpg'
import pic12 from './resources/pic12.jpg'
import pic13 from './resources/pic13.jpg'
import pic14 from './resources/pic14.jpg'
import pic15 from './resources/pic15.jpg'
import play from './resources/play.jpg'
import fullscreen from './resources/fullscreen.jpg'
import video1 from './resources/demonstration.mp4'
import video2 from './resources/demonstration.webm'
import video3 from './resources/demonstration2.mp4'
import video5 from './resources/demonstration3.mp4'
import video4 from './resources/demonstration4.mp4'
import $ from 'jquery'

const HOSTID = "https://cors-anywhere.herokuapp.com/http://49.235.49.48:5050/"

class App extends React.Component{
    constructor(){
        super();
        this.state={
            comments: [],
            user: null
        }
    }

    componentDidMount(){
        this.get()
    }

    show(){
        document.getElementById("login").style.display = "block";
    }

    hide(){
        document.getElementById("login").style.display = "none";
        this.setState({
            user: {
                nickname: "UNKNOWN"
            }
        })
    }

    login(){
        var username = document.getElementById("username").value
        var nickname = document.getElementById("nickname").value
        if(username!=="" && nickname!=="")
        {
            this.setState({
                user: {
                    nickname: nickname,
                    username: username
               }
            })
            document.getElementById("login").style.display = "none";
            setTimeout(()=>{
                document.getElementsByClassName("submitBtn")[0].click()
            }, 200)
        }
        else{
            document.getElementById("loginWarning").innerHTML="Oops, invalid name"
        }
    }

    get(){
        var that = this
        $.ajax({
            type: "GET",
            url: HOSTID,
            data: "get_comments",
            dataType: "text",
            success: function(res){
                that.setState({
                    comments: JSON.parse(res)
                })
            }
        });
    }

    record(){
        var comments = this.state.comments
        $.ajax({
            type: "POST",
            url: HOSTID+"set_comments",
            data: {"comments": JSON.stringify(comments)},
            dataType: "json",
            success: function(res){
                console.log(res)
            },
            fail: function(err)
            {
                console.log(err)
            }
        });
    }

    addLikes(i){
       var comments = this.state.comments
       comments[i].likes++
       this.setState({
           comments: comments
       })
       this.arrange()
    }

    addComment(comment, date){
        var that = this
        if (comment === "CLR")
        {
            
            $.ajax({
                type: "GET",
                url: HOSTID+"CLR",
                success: function(res){
                    console.log(res)
                    that.get()
                }
            });
            return
        }
        else if (comment.substring(0,3) === "DEL")
        {
            var num = comment.substring(3)
            $.ajax({
                type: "GET",
                url: HOSTID+"DEL/",
                data: num,
                success: function(res){
                    console.log(res)
                    that.get()
                }
            });
            return
        }
        else if (comment!=="")
        {
            var comments = this.state.comments
            if (this.state.user != null)
            {
                comments.push({
                   content: comment,
                   likes: 0,
                   date: date,
                   user: this.state.user
                })
                this.setState({
                   comments: comments
                })
            }
            else{
                this.show()
                return
            }
        }
        this.record()
    }

    arrange(){
        var comments = this.state.comments
        var elements = document.getElementsByClassName("comment")
        var start = -1
        var end = -1
        for (let i=comments.length-1; i>0;)
        {
            if (comments[i].likes > comments[i-1].likes)
            {
                if (start === -1)
                   start = i
                end = i-1
                var up = comments[i]
                var down = comments[i-1]
                comments[i] = down
                comments[i-1] = up
            }
            else{
                i--;
            }
        }
        if (start!==-1 && end!==-1)
        {
            var op = 0
            var timer = setInterval(()=>{
                if (elements[start].style.opacity < 1)
                {
                    elements[start].style.opacity = op
                    elements[end].style.opacity = op
                    op+=0.05
                }
            }, 50)
            setTimeout(()=>{
                clearInterval(timer)
            }, 1000)
        }
        this.setState({
            comments: comments
        })
        this.record()
    }

    render(){
        return(
        <div>
            <Login submit={this.login.bind(this)} hide={this.hide.bind(this)}/>
            <Title phrases={this.props.titleTexts}/>
            <Menu menuText={this.props.menuText} target={this.props.targetIds}/>
            <Intro introduction={this.props.introduction}/>
            <Info keyword={this.props.keywords}/>
            <Skill keyword={this.props.skills}/>
            <Slide myData={this.props.myData}/>
            <Projects projects={this.props.projects}/>
            <Video videos={this.props.videos} play={this.props.playSign} fullscreen={this.props.fullscreenSign}/>
            <Comment comments={this.state.comments} record={this.addLikes.bind(this)} submit={this.addComment.bind(this)}/>
        </div>);
    }
}

ReactDOM.render(<App titleTexts={["Feel free to move around!", "Welcome to my website!"]}
menuText={["Intro","Photos","Projects","Videos","Comment"]}
targetIds={["#intro","#slide","#projects","#video","#commentArea"]}
introduction="Hi, vistor! I am Ricky Zhao, an Applied Math student at UCLA who is passionated about programming and will be a CS major next quarter. Hope this dynamic and interative website will introduce to you more about my life and experience! Have fun here!"
buttonText={["Check my resume here","Hide my resume"]}
skills={["JavaScript","C++","Python","HTML5","CSS", "React.js", "Node.js", "Web.py", "MySQL", "Ajax", "Redis", "Celery", "Linux", "Github", "Fusion 360", "Solidworks", "Octave", "Mathematica", "Nginx", "Cron","Shell","VScode","Soldering","MATLAB", "Wxml", "Wxss", "Firebase", "Data Analysis","WeChat Dev"]}
projects={
        [ 
            {
               text: "Software Engineer Intern at AnyHelper in Shanghai",
               desc: <p data-ind={0} className="desc">
                   Initiated, maintained, transfered, and debugged servers hosting company's websites<br/><br/>

                   Developed a WeChat public platform in the backend to interact with WeChat APIs,
                   Baidu Map APIs, and Youdao Translation APIs to create features such as
                   auto-reply with regular expressions, navigation, translation, and notification.<br/><br/>

                   Set up scheduled notifications and tasks with Celery and backed up chat
                   record and codes with Redis, MySQL and Github<br/><br/>

                   Developed WeChat mini program to realize a guessing competition game with Wxml, 
                   Wxss in the front end and Severless cloud functions and database<br/><br/>

                   Designed algorithms for sorting, matching, and analyzing users based on their 
                   personal information and preferences
                   </p>,
               url: [anyhelper2, anyhelper3, anyhelper4, anyhelper]
            },{
               text: "Individual project: MinePhone",
               desc: <p data-ind={1} className="desc">
                   3D designed an environmental-friendly modular phone that has replace-able
                   parts and extensive functions along with simplicity<br/><br/>

                   Rendered the 3D model to demonstrate different functionalities of the phone<br/><br/>

                   Built a project presentation website with React.js on the frontend and Node.js 
                   on the backend
                   </p>,
               url: [minephone2, minephone, minephone3, minephone4]
            },{
               text: "RISE program at Rocket Club",
               desc: <p data-ind={2} className="desc">
                   Designed model rockets with OpenRocket (simulation software) and 3D designed 
                   nosecones in Fusion 360<br/><br/>

                   Manufactured rockets in teams by solidifying carbon fiber, fixing parachutes, 
                   and attaching motors<br/><br/>

                   Launched the rockets in Mojave Desert and reached the height of 1000 ft
                    </p>,
               url: [rocket2, rocket, rocket3, rocket4]
            }
        ]
    }
videos={[[video3,],[video4],[video5],[video1, video2]]}
myData={{
    name: ["De Neve Plaza, Los Angeles","Santa Monica, Los Angeles","Rose Bowl Stadium, Los Angeles","Koehn Lake, California City","Getty Villa, Los Angeles","Times Square, New York","Empire State Building, New York","White House, Washington D.C.","National Aquarium, Baltimore","Independence Hall, Philadelphia","Hearst Castle, San Simeon","Golden Gate Bridge, San Fransico","MGM Grand, Las Vegas","Hoover Dam","Kissing Statue, San Diego"],
    picture: [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15]
}}
playSign={play}
fullscreenSign={fullscreen}
keywords={["Programming","Travel","Food","Hackathon","F1","Badminton","Movies","3D Design","Poem","Physics","Hiking","Volunteering","PC games","Blog","Photography","Calligraphy", "Philosophy", "UCLA", "Math", "Quick Learner","Caring", "Optimistic", "Resilient", "Energetic","Confident","Hardworking", "Creative", "Curious", "Funny"]}/>, document.getElementById('root'));