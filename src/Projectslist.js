import React,{Component} from 'react';


class Projects extends Component{
  
render(props){
    return(

        <div>
       
        {this.props.PROJECTS.map(

            PROJECT => {
                return(
                   <div  className='Projects'>
                     <h3   className='title'>   {PROJECT.title}  </h3>
                       <img src={PROJECT.image} alt='img'  style= {{width:200, height:120}} />
                       <p>{PROJECT.description}</p>
                     <a href= {PROJECT.link}>{PROJECT.link}  </a>

                   </div>
                );
            }
                
        )
        }
         </div>
    );
            }
        
}
export default Projects
        
        