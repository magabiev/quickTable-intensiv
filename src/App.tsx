import ProductCard from './components/ProductCard';
import pizza from './assets/img.png';

function App() {
  return (
    <div className="m-3.5">
      <ProductCard title="ProductCard" calories={44} price={9.99} src={pizza} />
    </div>
  );
}

export default App;
