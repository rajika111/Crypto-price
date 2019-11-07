
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
        cur: {},
        list: []
    }
  }
// comment 
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
// remove a comment
remove = (comment) => {
  let com = [this.state.list]
 let index = com.indexOf(comment)

 com.splice(index, 1)
 this.setState({
   list: com
 })
}

addNewitem=(e)=>{
    console.log(e)
    
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
        <button onClick={()=>this.remove(item)}> remove comment</button>
      </div>)
      });

    return (
      <div className="App">
        <div className="header">

          <h2>Cryptocurrency</h2>
            <p>The place to track your favorite cryptocurrency </p>

            <Tickers cur={this.state.cur} />
            <Comments1 remove={this.remove} newItem={this.addNewitem}
            addItem = {this.addNewComment}/>
           {commentToDisplay}
        </div>

      </div>
    );
  }
}

export default App;















