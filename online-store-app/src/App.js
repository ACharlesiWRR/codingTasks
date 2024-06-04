import './App.css';
import NavigationBar from './components/nav';
import HomeLogin from './pages/home';
import AboutUs from './pages/about';
import Products from './pages/products';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <NavigationBar /> */}
      </header>
      <Routes className="App-body">
        <Route exact path="/" element={<HomeLogin />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App

// part 2 
// in products component display at least 10 products using
// https://react-bootstrap.github.io/docs/components/cards/
// make an array of objects 
// and render each product using .map()
// each product should have a responsive image, a title, a description, a price and a buy button
// should have 3 colour options, using dropdown https://react-bootstrap.github.io/docs/components/dropdowns/
// when the colour is selected the text in the dropdown button should change to that colour
// create a component called TotalPrice.js and define <h2> tags that say "total price"
// when the buy button is clicked the total price componetn should be updated to display the total price of
// all purchased products 
// the total price component should be imported into every other component except the home component
// and displayed in the top right corner
// BUT it should only become visible after a user has clicked the buy button (not visible before action taken)
// on About component use https://react-bootstrap.github.io/docs/components/figures/
// to display 1/ store logo img
// 2. a short description of store
// 3. two fictional images of store
// 4. how to contact us 
// app style using custom CSS and possibily other React libraries
