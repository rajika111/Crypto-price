
import React, { Component } from 'react';
import Tickers from './component/Tickers';
import './App.css';
import axios from 'axios'
import Comments1 from './component/Comments1';


class App extends Component {


  constructor(props){
    super(props);
    this.state={
        list:[{name:"",comment:""}],
        cur: {}
    }
  }

addNewComment= (name,comment) => { 

  const temp={name:name,comment:comment};
  console.log(temp)
  this.setState({

    list: [...this.state.list,temp]
  }
  )
  console.log(this.state.list);

  console.log('ggg', [...this.state.list,temp]);
  

}

addNewitem=(e)=>{
    console.log(e)
      // this.setState({
      //   list:[data,...this.state.list]
      // })
  }
  componentDidMount(){
    axios.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,BCH,XRP,EOS,BNB,TRX,ADA,XMR&tsyms=USD")
    .then(res=> {
      console.log(res.data) 
      this.setState({
        cur: res.data
      })
    })
    .catch(ree => console.log(ree) )


  //   fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin,ethereum,litecoin,bitcoin-cash')
  // .then(response => response.json())
  // .then(commits => console.log(commits))
  
  }

    
    
    
    // console.log (item.name); console.log (item.comment
    render (){


    const commentToDisplay = this.state.list.map((item,index) =>{
        
      return( <div>
        <h2>
          {item.name}
        </h2> 
        <p>
          {item.comment}
        </p>
      </div>)
      });

    return (
      <div className="App">
        <div className="header">

          <h2>Cryptocurrency</h2>
            <p>The place to track your favorite cryptocurrency </p>

            <Tickers cur={this.state.cur} />
            <Comments1 newItem={this.addNewitem}
            addItem = {this.addNewComment}/>
           {commentToDisplay}
        </div>

      </div>
    );
  }
}

export default App;














// import React, {Component} from 'react';
// import Tickers from './component/Tickers';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//     <div className="App">
//       <div className="App-header">
//        <h2>Crypto-Price</h2>
//       </div>
//       <Tickers/>
//     </div>
//   );
//   }
// }

// export default App;
