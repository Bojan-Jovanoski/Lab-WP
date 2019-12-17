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
import AddIngredient from "./components/Ingredient/AddIngredient/adding";
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

  updateIngredient = ((editedIngredient) => {
    IngredientService.updateIngredient(editedIngredient).then((response) => {
      const newIngredient = response.data;
      this.setState((prevState) => {
        const newIngRef = prevState.ingredients.filter((item) => {
          if (item.id === newIngredient.id) {
            return newIngredient;
          }
          return item;
        });
        return {
          "ingredients": newIngRef
        }
      });
    });
  });

  deleteIngredient = ((id) => {
    IngredientService.deleteIngredient(id).then();
    this.setState((prevState) => {
      const newIngredients = prevState.ingredients.filter((ingredient, index) => {
        return ingredient.id !== id;
      });
      return {"ingredients": newIngredients}
    })
  });

  addNewIngredient = ((newIngredient) => {
    IngredientService.addIngredient(newIngredient).then(resp => {
      const newIng = resp.data;
      this.setState((prevState) => {
        const newIngredients = prevState.ingredients.map((item) => {
          return item;
        });
        newIngredients.push(newIng);
        return {
          "ingredients": newIngredients
        }
      });
    });
  });


  render() {
    const routing = (
      <Router>
        <Header/>

        <main role="main" className="mt-3">
          <div className="container">
            <Route path={"/"} exact render={() =>
                <PizzaList pizzas={this.state.pizzas}/>}>
            </Route>
            <Route path={"/pizzas"} exact render={() => <PizzaList pizzas={this.state.pizzas}/>}>
            </Route>
            <Route path="/ingredients" exact
                   render={() => <IngredientList ingredients={this.state.ingredients}
                                                 onDelete={this.deleteIngredient}/>}>
            </Route>
            <Route path="/ingredients/:id/edit" exact render={() =>
                <EditIngredient onSubmit={this.updateIngredient}/>}>
            </Route>
            <Route path="/ingredients/new" exact
                   render={() => <AddIngredient onSubmit={this.addNewIngredient}/>}>
            </Route>
            <Redirect to={"/ingredients"}/>
          </div>
        </main>
      </Router>
    )
    return (
        <div className="App">
        {routing}
        </div>
    );
  }
}

export default App;