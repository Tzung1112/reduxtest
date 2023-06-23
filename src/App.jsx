import './App.css';
import ProductForm from './component/ProductForm';
import ProductList from './component/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <div className='container'>
          <ProductForm></ProductForm>
          <ProductList></ProductList>
    </div>
    </>
  );
}

export default App;
