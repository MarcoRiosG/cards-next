const { ApolloServer, gql } = require('apollo-server');

class Deck {
  numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  suits = ['♣', '♦', '♥', '♠'];

  cards = [];

  constructor() {
    this.suits.forEach((symbol) => {
      this.numbers.forEach((number) => {
        this.cards.push({number, symbol});
      });
    });
  }

  dispatchCards(size) {
    if(this.cards.length > size){
      return new Array(size)
      .fill()
      .map(
        () =>
          this.cards.splice(parseInt(Math.random() * this.cards.length), 1)[0]
      );
    } else {
      this.suits.forEach((number) => {
        this.numbers.forEach((symbol) => {
          this.cards.push({number, symbol});
        });
      });

      return new Array(size)
      .fill()
      .map(
        () =>
          this.cards.splice(parseInt(Math.random() * this.cards.length), 1)[0]
      );
    }
    
  }
}

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Card {
    number: String
    symbol: String
  }

  type Query {
    cards: [Card]
    getCards(cards: Int): [Card]
    table: [Card]
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin', 
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

let deck = new Deck();

let table = deck.dispatchCards(5);

const resolvers = {
  Query: {
    books: () => books,
    cards: () => deck.cards,
    table: () => {
      return table;
    },
    getCards: (_, { cards }) => {
      return deck.dispatchCards(cards)
    }
  },
  Mutation: {
    addBook: (_, args) => {
        books.push([...args]);
      return books;
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});