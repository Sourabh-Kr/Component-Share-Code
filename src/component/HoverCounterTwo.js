import React,{Component} from 'react'
export class HoverCounterTwo extends Component{
   render(){
       const {count, incrementCount}= this.props
       return(
           <div>
               <h5>On Hover++</h5>
               <button onMouseOver={incrementCount}>Hover {count} times</button>
               <hr/>
           </div>
       )
   }
}