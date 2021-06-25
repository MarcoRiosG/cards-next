import Card from '../card/card'

const Deck = (props)  => {
  
    return <div>
        <h3>{props.title}</h3>
        <div className="deck">{props.cards.map((card, index) => {
          const {number, symbol} = card;
          return <Card symbol={symbol} number={number} key={index} flipped={parseInt(props.flipped) > index}/>
        })}</div>
      </div>
    }

export default Deck