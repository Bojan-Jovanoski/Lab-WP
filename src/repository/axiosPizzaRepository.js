import axios from '../custom-axios/axios'
import qs from 'qs'

const PizzaService = {
    fetchPizzas: ()=>{
        return axios.get("/pizzas")
    }
}

export default PizzaService;