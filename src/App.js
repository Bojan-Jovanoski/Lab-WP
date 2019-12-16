import React, {Component} from 'react';
import './App.css';
import './index.css';
import Header from './components/Header/header.js';
import PizzaService from "./repository/axiosPizzaRepository";
import IngredientService from "./repository/axiosIngredientRepository";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import IngredientList from "./components/Ingredient/IngredientList/ingredientlist";
import PizzaList from "./components/Pizza/PizzaList/pizzalist";
import EditIngredient from "./components/Ingredient/EditIngredient/editingredient";
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      ingredients: []
    }
  }

  componentDidMount() {
    this.loadIngredients();
    this.loadPizzas();
  }

  loadPizzas() {
    PizzaService.fetchPizzas().then(resp => {
      this.setState((prevState) => {
        return {
          "pizzas": resp.data.content
        }
      });
    });
  }

  loadIngredients() {
    IngredientService.fetchIngredients().then(resp => {
      this.setState((prevState) => {
        return {
          "ingredients": resp.data.content
        }
      })
    });
  }

  render() {
    return (
        <div className="App">
          <Router>
            <Header/>
            <main role="main" className="mt-3">
              <div className="container">
                <Route path={"/"} exact render={() =>
                    <PizzaList pizzas={this.state.pizzas}/>}>
                </Route>
                <Route path={"/pizzas"} exact render={() =>
                    <PizzaList pizzas={this.state.pizzas}/>}>
                </Route>
                <Route path="/ingredients" exact render={() =>
                    <IngredientList ingredients={this.state.ingredients}/>}>
                </Route>
                <Route path="/ingredients/:id/edit" exact render={() =>
                    <EditIngredient/>}>
                </Route>
                <Redirect to={"/"}/>
              </div>
            </main>
          </Router>
        </div>
    );
  }
}

export default App;