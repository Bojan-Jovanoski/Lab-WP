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
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-6">
                                {pizza.name}
                            </div>
                        </div>
                    </div>
                );
            });
            setPizza(pizzas);
        });
    }, []);


    const PizzaBody = () => {
        return (
                <div>
                    {pizzaIngredients}
            </div>
        );
    };

    return (
        <div className={props.colClass}>
            <div className="card">
                <div className="pizzas">
                    {PizzaBody()}
                </div>
            </div>
        </div>
    )
};

export default IngredientDetails;