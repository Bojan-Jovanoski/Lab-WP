import React from "react";
import Pizza from "../pizza";

const PizzaList = (props) => {
    const pizzas = props.pizzas.map((pizza, index) => {
        return (
            <Pizza pizza={pizza} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });
    return (
        <div className={"row"}>
            {pizzas}
        </div>
    )
};

export default PizzaList;