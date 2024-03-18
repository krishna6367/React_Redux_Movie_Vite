import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import "./App.scss";
import MovieCard from './components/MovieCard/MovieCard';

function App () {
  return (
    <div className="app">
    <Router>
    <Header> </Header>
    <div className="container">
      <Routes>        
      <Route path='/' excat Component = { Home } />
      <Route path='movie/:imdbID' Component = {MovieDetails} />
      <Route component = {PageNotFound}/>
      </Routes>
      </div>
      <Footer/>
    </Router>
  </div>
  );
};
export  default App;


