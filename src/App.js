import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1> Hello World</h1>

      <Product
        name="Amazon Echo"
        description="Your AI assistant"
        price={59.99} /> {/* becaus we passe a number in price so we use jsx.*/}

      <Product
        name="iphone 12"
        description="the best"
        price={1200} /> {/* becaus we passe a number in price so we use jsx.*/}

      <Product
        name="Macbook pro"
        description="your favour computer"
        price={2500} /> {/* becaus we passe a number in price so we use jsx.*/}
    </div>
  );
}

export default App;
