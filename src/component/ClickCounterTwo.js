import React,{Component} from 'react'
export class ClickCounterTwo extends Component{
   render(){
       const {count, incrementCount}= this.props
       return(
           <div>
               <h5>click counter++</h5>
               <button onClick={incrementCount}>clicked {count} times</button>
               <hr/>
           </div>
       )
   }
}