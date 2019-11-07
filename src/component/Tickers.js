import React, { Component } from 'react';
import axios from 'axios';

import Cryptocurrency from './Cryptocurrency';
import './Tickers.css';

class Tickers extends Component {
 
// Api 
    fetchCryptocurrencyData() {
        axios   ({
            url: "http://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?slug=bitcoin,ethereum,litecoin,bitcoin-cash,ripple,eos,binance-coin,tron,cardano,monero",
            method: "GET",
            headers:{
                'X-CMC_PRO_API_KEY': '4272dd3f-7910-4d34-8bcf-5eebcaec8ae2',
                "Accept": "application/json",
               'Accept-Encoding': 'deflate, gzip'
            }

        })
            .then(response => {
                console.log('---;---;----',response);
                const wanted = ["bitcoin", "ethereum", "litecoin"];
                const result = response.data.filter(currency => wanted.includes(currency.id));
                this.setState({data: result});
            })
            .catch(err => console.log("hekikihekiehke",err));
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 60*60* 1000);
    }
    // define wach coin 
    state = {
        data: [
            {
                id: "bitcoin",
                name: "Bitcoin",
                symbol: "BTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },
            {
                id: "ethereum",
                name: "Ethereum",
                symbol: "ETH",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },
            {
                id: "litecoin",
                name: "Litecoin",
                symbol: "LTC",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },

            {
                id: "BitcoinCash",
                name: "BitcoinCash",
                symbol: "BCH",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },

            {
                id: "ripple",
                name: "ripple",
                symbol: "XRP",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },
            {
                id: "EOS",
                name: "EOS",
                symbol: "EOS",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },
            {
                id: "binance-coin",
                name: "Binance-coin",
                symbol: "BNB",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },
            {
                id: "TRON",
                name: "TRON",
                symbol: "TRX",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },
            {
                id: "Cardano",
                name: "ADA",
                symbol: "ADA",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },
            {
                id: "Monero",
                name: "Monero",
                symbol: "XMR",
                price_usd: "1",
                percent_change_1h: "0",
                percent_change_24h: "0",
                percent_change_7days: "0",
            },
        ]
    }

    render () {
           let values = Object.values(this.props.cur)
            let keys = Object.keys(this.props.cur)
            let data = [];
        //    console.log(values);
        //    console.log(keys);
            for (let i = 0; i < keys.length; i++) {
                data.push({name: keys[i], rate: values[i].USD})
                
            }
            console.log(data)
           
            const tickers = data.map((currency, i) => 

           <Cryptocurrency key={i} name={currency.name} rate={currency.rate} />
        );

              return(
         <div className="tickers-container">
                <ul className="tickers"> {tickers} </ul>
                <p>price udpated every 10 seconds</p>
            </div>
        );
    }
}

export default Tickers;  


























// import React,{Component} from 'react';
// import axios from 'axios';
// import Cryptocurrency from './Cryptocurrency';
// import './Tickers.css';

// //import cryptocurrency component

// class Tickers extends Component{
//     fetchCryptocurrency(){
//         axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest")
//         .then(response=> {

//                var wanted =["bitcoin","ethereum","litecoin"];

//                  var result = response.data.filter(currency => wanted.includes(currency.id));
//             this.setState({data: result});
        
//         })

//     }
//      componentDidMoundt(){

//     this.fetchCryptocurrencyData();
//     this.interval =setInterval(()=> this.fetchCryptocurrencyData(),1*1000);

//     }
//     state = {
//         data:[
//             {
//                 id: "bitcoin",
//                 name:"Bitcoin",
//                 symbol:"BTC",
//                 price_usd:"1",
//                 percent_change_1hr:"0",
//                 percent_change_24hr:"0",
//                 percent_change_7d:"0",
//             },
//             {
//                 id: "ethereum",
//                 name:"Ethereum",
//                 symbol:"ETH",
//                 price_usd:"1",
//                 percent_change_1hr:"0",
//                 percent_change_24hr:"0",
//                 percent_change_7d:"0",
//             },
//             {
//                 id: "litecoin",
//                 name:"Litecoin",
//                 symbol:"LTC",
//                 price_usd:"1",
//                 percent_change_1hr:"0",
//                 percent_change_24hr:"0",
//                 percent_change_7d:"0",
//             },
//         ] 
//     }
//     render(){
//           const tickers = this.state.data.map((currency) => {
          
//           return (<Cryptocurrency data={currency} key={currency.id}/>)
//         })
//     }

//         return(){

//             <div className="tickers-containers">
//                 <ul className="tickers">{tickers}</ul>
//                     <p>Information takes 10sc to fetch</p>
                
//             </div>

//         }
        
        
// }

//     export default Tickers;