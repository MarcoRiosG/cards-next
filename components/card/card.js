import {useState} from 'react';

import styles from './card.module.scss'

const createCardCorner = (number, symbol) => {
    return <div className={styles.cardcorner}>
      <div>{number}</div>
      <div>{symbol}</div>
      </div>;
  }
  
  const createSymbols = (number, symbol) => {
    const isNumber = !isNaN(number);
    return <div className={styles.symbols}>
      {(number === "A") && <div>{symbol}</div>}
  
      {(number === "J" || number === "Q" || number === "K") && <div className={styles.image}></div>}
  
      {(isNumber) && new Array(parseInt(number))
      .fill(symbol)
      .map((cardSymbol, key) => <div key={key}>{cardSymbol}</div>)
      }
  </div>
  }
  
  const Card = (props) =>
   {
  
    // const isNumber = !isNaN(props.number);
    // const cardDiv = document.createElement('div');
  
    // cardDiv.classList.add('card');
  
    // // cardDiv.setAttribute('symbol', props.symbol);
    // // cardDiv.setAttribute('number', props.number);
  
    // cardDiv += createCardCorner(props.number, props.symbol);
    
    // cardDiv += 
  
    // return <div class="symbols">
    //     {(props.number === "A") ? <div>{props.symbol}</div>:''}
    //     {(props.number === "J" || props.number === "Q" || props.number === "K") ? <div class="image"></div>:""}
    //     {(isNumber) ? {new Array(parseInt(props.number)).fill(props.symbol).map((cardSymbol) => <div class={props.number}>{cardSymbol}</div>).join('')} : ''}
    // </div>
    // <div class="card-corner top-left">
    //   <div>{props.number}</div>
    //   <div>{props.symbol}</div>
    // </div>;
  
    // cardDiv.addEventListener('click', () => {
    //     if(cardDiv.classList.contains('flipped')){
    //         cardDiv.classList.remove('flipped');
    //     } else {
    //         cardDiv.classList.add('flipped');
    //         var elem = document.getElementsByClassName('symbols');
    //         elem.parentNode
    //     }
          
    // })
  
    // if(flip){
    //   cardDiv.classList.add('flipped');
    // }
  
    // return cardDiv;
  
    const [isFlipped, setIsFlipped] = useState(props.flipped);
      return <div 
        className={[styles.card, (isFlipped ? styles.flipped : "")].filter(Boolean).join(" ")} 
        symbol={props.symbol} 
        number={props.number} 
        onClick={() => {setIsFlipped(!isFlipped)}}>
        {createCardCorner(props.number, props.symbol)}
        {createSymbols(props.number, props.symbol)}
        {createCardCorner(props.number, props.symbol)}
      </div>
  
   }

export default Card