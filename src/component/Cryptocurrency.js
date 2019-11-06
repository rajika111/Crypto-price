import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {

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
















// import React,{Component} from 'react';

// class Cryptocurrency extends Component{
//     render(){
//         const cryptocurrency1 = {
//             id,
//             name,
//             symbol,
//             price_usd,
//             percent_change_1h,
//             percent_change_24h,
//             percent_change_7d,
//         } = this.props.data;
//         return(
//             <li className={"cryptocurrency"+id}>
//                 <p className="cryptocurrency-name">{name}{{symbol}}</p>
//                 <h1>${(+price_usd).toFixed(2)}</h1>
//                 <p>{percent_change_1h}% 1h</p>
//                 <p>{percent_change_24h}% 24h</p>
//                 <p>{percent_change_7d}% 7days</p>
//             </li>
//            )
//         }
//     }
// export default Cryptocurrency;