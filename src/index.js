//NETFILX P-1 USING custom ELEMENTS like Card and propss
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card  from './N1cards';
import Sdata from "./N2data";
import ozark from "./images/ozark.jpg"
import { Greeting} from './Greetings';
//import { askname } from './Greetings';
/*ReactDOM.render(
    <>
        <Card
         imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title="A NETFLIX ORIGINAL SERIES"
        sname="DARK"
        link="https://www.netflix.com/in/title/80100172"
        />
        <Card
         imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
        title="A NETFLIX ORIGINAL SERIES"
        sname="DARK"
        link="https://www.netflix.com/in/title/80100172"
        />
    </>,document.getElementById("root")
)*/

//NETFLIX P-2 USING ARRAY
/*ReactDOM.render(
    <>
    <Card imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title}
    sname={Sdata[0].sname}
    link={Sdata[0].link}
    />
    <Card imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname={Sdata[1].sname}
    link={Sdata[1].link}
    />
    <Card imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title}
    sname={Sdata[2].sname}
    link={Sdata[2].link}
    />
    <Card imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title}
    sname={Sdata[3].sname}
    link={Sdata[3].link}
    />
    <Card imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title}
    sname={Sdata[4].sname}
    link={Sdata[4].link}
    />
    </>,
    document.getElementById("root")
)*/

//NETFLIX-3 USING MAP METHOD
function ncard(val){
    return(
        <Card
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
    )
}
ReactDOM.render(
    <>
        <h1 className="heading_style">LIST OF TOP 5 NETFLIX SERIES</h1>
        <Greeting/>
        {Sdata.map(ncard)}
        {/*<img src={ozark} alt="ozark"/>*/}

    </>,
    document.getElementById("root")
)