import React, { Component } from 'react';
import Projects from './Projectslist';
import Picture from './assets/Picture.jpg';



const PROJECTS=[ 

    {
        id: 1,
        title: 'Fruit Game',
        description: 'A javascript web page that I built with JS,Jquery,HTML and CSS',
        link: 'https://github.com/BorhenCherif/FruitGame',
         image: "https://imgur.com/lZelNi4.jpg",
       
    },
    {
        id: 2,
        title: 'Math Game',
        description: 'A javascript web page that I built with JS,HTML and CSS',
        link: 'https://github.com/BorhenCherif/MathGame',
        image: "https://imgur.com/U8HCskG.jpg"
    },
    {
        id: 3,
        title: 'Create the best',
        description: 'A web page that I create with HTML and CSS',
        link: 'https://github.com/BorhenCherif/Create-the-Best',
        image:'https://imgur.com/VPXw5gu.jpg'
    },
     

      ];

     


class App extends Component{
   
    state={
        displayBio:false,
        PROJECTS

    };
        

 toggleDisplayBio=()=>{
 

     this.setState({displayBio: !this.state.displayBio});
    
 }

render(){
    return(
        <div>
            <img src={Picture} alt='img' className='Picture' />
        <h1>Hello!</h1>
        <p>My name is Borhen. I'm a fullstack Engineer</p>
        <p>I'm alaways looking forward to working on meaningful projects </p>

        
        {
 this.state.displayBio ?(

<div>
    <p>I live in Tunis, and I code everyday</p>
<p>My favourite language is Javascript</p>
<button onClick={this.toggleDisplayBio} >Show Less</button>

</div> 
) : (
    
            <div>
<button onClick={this.toggleDisplayBio}>Read more </button>

           </div>
       ) 
     }
     <hr />
    <Projects PROJECTS={this.state.PROJECTS}/>

      </div>

    )
 }
}

export default App;