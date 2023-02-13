import React from "react";
import { useEffect, useState } from "react";

// export const Coin = ({contractAddr,eco}) => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState();

//   console.log(eco);

//   useEffect(() => {
//     fetch(
//       `https://api.dexscreener.io/latest/dex/pairs/${eco}/${contractAddr}`
//     )
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   } else if (!isLoaded) { 
//     return <div>Loading...</div>;
//   } else {
//     return <div>
//       {items ? "$" + items.pair.baseToken.symbol : "Loading..."}
//       {items ? items.pair.priceUsd : "nothing"}</div>;
//   }
// };

// type CoinProp = {
//   // ecosystem's name
//   eco: string;

//   // contract's address
//   contractAddr:string;
// };
// type NewType = {
  
// };

// type CoinState = {
//   error: string; // like this
//   isLoaded: boolean;
//   items: NewType;
// };


// class Coin extends React.Component<CoinProp, CoinState> {
//   state: CoinState = {
//     // optional second annotation for better type inference
//     items: NewType,
//   };
//   error:any;

//   componentDidMount() {
//     this.pointer = 3;
//   }

//   render() {
//     if (this.error) {
//       return <div>Error: {this.error}</div>;
//     } else if (!this.isLoaded) { 
//       return <div>Loading...</div>;
//     } else {
//       return <div>
//         {this.items ? "$" + this.state.items.pair.baseToken.symbol : "Loading..."}
//         {this.items ? this.items.pair.priceUsd : "nothing"}</div>;
//     }
//   }
// }


