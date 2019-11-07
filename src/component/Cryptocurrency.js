import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
// keep watch bytton 
    keepwatch= () => {console.log("string")}


    render () {
       
        return (
           <div>
               <li className={"cryptocurrency "}>

          <p className="cryptocurrencylist">{this.props.name}  </p>

                <h1>${this.props.rate}</h1>
                

            </li>
            <div onClick={this.keepwatch} >keep watch</div>
            </div> 
        )   
    }  
}

export default Cryptocurrency;















