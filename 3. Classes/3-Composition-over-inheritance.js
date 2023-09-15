// ! Prefer composition over inheritance

// ? Type of relationship = is-a <VS> has-a

// * DEMO CLASS
class CryptoMarket {
  constructor(cryptoSymbol) {
    this.cryptoSymbol = symbol
  }
}

class MarketOrder extends CryptoMarket {
  constructor(cryptoSymbol, price, quantity) {
    super(cryptoSymbol)
    this.price = price
    this.quantity = quantity
  }
}
// The code looks ok without any errors.
// If we look at this code, marketOrder is a an extension of CryptoMarket.
// ! BUT
// MarketOrder is not CryptoMarket. It has-a CryptoMarket. But it is-a not CryptoMarket.
// MarketOrder is made where you can buy and sell crypto. It is not a specific market.
// This is not inheritance of market. This is a different class to make purchases.

// What we can do in this case is the composition.

class Order extends CryptoMarket {
  constructor(price, quantity) {
    this.price = price
    this.quantity = quantity
  }

  setMarket(cryptoSymbol) {
    this.cryptoSymbol = new CryptoMarket(cryptoSymbol)
  }
}

// ? * THIS MIGHT BE CONFUSING BUT IT'S UNDERSTANDABLE WHILE LEARNING THIS,
// ? * IN CASE YOU DON'T REMEMBER, PLEASE WATCH THE VIDEO AGAIN.
