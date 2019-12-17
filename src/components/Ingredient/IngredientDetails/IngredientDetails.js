import React, {useState, useEffect} from 'react'
import {useParams, } from 'react-router-dom';
import axios from '../../../custom-axios/axios'
import Ingredient from "../ingredient";
import Pizza from "../../Pizza/pizza";


const IngredientDetails = (props) => {


    const {id} = useParams();

    let [pizzaIngredients, setPizza] = useState();

    useEffect(() => {
        axios.get("/ingredients/" + id + "/pizzas").then((data) => {
            const pizzas = data.data.map((pizza, index) => {
                return (
                    <div className="col-md-6">
                        {pizza.name}
                    <br/>
                    <hr/>
                </div>
                );
            });
            setPizza(pizzas);
        });
    }, []);


    const PizzaBody = () => {
        return (
            <div className="card-header">
                <div className="row">
                    {pizzaIngredients}
                </div>
            </div>
        );
    };

    return (
        <div className={props.colClass}>
                <div className="pizzas">
                    {PizzaBody()}
                </div>
        </div>
    )
};

export default IngredientDetails;