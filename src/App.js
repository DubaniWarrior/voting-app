import React, {Component} from 'react';
import ProductList from './components/Product_List';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList/>
      </div>
    );
  }
}

export default App;
