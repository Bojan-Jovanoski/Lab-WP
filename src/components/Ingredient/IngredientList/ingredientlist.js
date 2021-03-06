import React from "react";
import {Link} from "react-router-dom";
import Ingredient from "../ingredient";

const IngredientList = (props) => {
    const ingredients = props.ingredients.map((ingredient, index) => {

        return (
            <Ingredient onDelete={props.onDelete} ingredient={ingredient} key={index} colClass={"col-md-6 mt-2 col-sm-12"}/>
        );
    });
    return (

        <div className="row">
            <h4 className="text-upper text-left">Ingredients</h4>
            <div className="table-responsive">
                <table className="table tr-history table-striped small">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Spicy</th>
                        <th scope="col">Veggie</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ingredients}
                    </tbody>
                </table>
            </div>
            <Link to={"/ingredients/new"} className="btn btn-outline-secondary">
                <span><strong>Add new ingredient</strong></span>
            </Link>
        </div>
    )
};
export default IngredientList;