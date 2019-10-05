import React from 'react';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state={
            textarr: [],
            imagearr: [],
            descarr: [],
            posarr: [],
            isEntered: [false, false, false],
            isStretched: [false, false, false]
        }
    }

    componentDidMount() {
        var m_projects = this.props.projects
        var textarr=[]
        var imagearr=[]
        var descarr = []
        for(let i=0; i<m_projects.length; i++)
        {
            textarr.push(m_projects[i].text)
            imagearr.push(m_projects[i].url)
            descarr.push(m_projects[i].desc)
        }
        this.setState({
            textarr: textarr,
            imagearr: imagearr,
            descarr: descarr,
        })
    }


    start(e){
        this.expand(e)
        var ind = e.target.dataset.ind
        var slide = document.getElementsByClassName("roll")[ind]
        slide.style.animationName = "play"
        if (!this.state.isEntered[ind])
        {
            var status = this.state.isEntered
            status[ind] = true;
            this.setState({
                isEntered: status
            })
        }
    }

    expand(e)
    {
        e.stopPropagation()
        var ind = e.target.dataset.ind
        var isStretched = this.state.isStretched
        if (!this.state.isStretched[ind])
        {
            document.getElementsByClassName("project_desc")[ind].style.animationName = "show"
            document.getElementsByClassName("project_title")[ind].style.animationName = "appear"
            document.getElementsByClassName("project_detail")[ind].style.animationName = "appear"
            setTimeout(()=>{isStretched[ind] = true}, 1500)
        }
    }

    collapse(ind)
    {
        console.log("here")
        document.getElementsByClassName("project_desc")[ind].style.animationName = "collapse";
        document.getElementsByClassName("project_title")[ind].style.animationName = "disappear"
        document.getElementsByClassName("project_detail")[ind].style.animationName = "disappear"
        var isStretched = this.state.isStretched
        setTimeout(()=>{isStretched[ind] = false}, 1500)
    }

    shrink(e)
    {
        e.stopPropagation()
        var ind = e.target.dataset.ind
        if (this.state.isStretched[ind])
        {
          this.collapse(ind)
        }
        else{
            setTimeout(()=>{
                console.log("col")
                this.collapse(ind)
            },1500)
        }
    }

    render() {
        var texts = this.state.textarr
        var images = this.state.imagearr
        var descs = this.state.descarr
        var toShow = []
        for(let i=0; i<texts.length; i++)
        {
            var imgList = []
            for (let j=0; j<images[i].length; j++)
            {
                var ele = <div key={j} style={{backgroundImage: "url(" + images[i][j]+ ")"}} data-ind={i} className="imgFrame" ></div>
                imgList.push(ele)
            }
            toShow.push(
                <div key={i} data-ind={i} className="project" onMouseLeave={this.shrink.bind(this)}  onMouseOver={this.start.bind(this)}>
                    <div className="project_desc" key={i} data-ind={i}>
                       <p className="project_title" data-ind={i}>{texts[i]}</p>
                       <div className="project_detail" data-ind={i}>{descs[i]}</div>
                    </div>
                    <div key={"roll"+i} className="roll" data-ind={i} >
                    {imgList}
                    </div>
                </div>
           )
        }
        return(
            <div id="projects">
            <div className="subtitles">
                WHAT I HAVE EXPERIENCED
            </div>
                <div id="project_list">
                   {toShow}
                </div>
            </div>
        )
    }

}

export default Projects;