import axios from '../custom-axios/axios'
import qs from 'qs'

const PizzaService = {
    fetchPizzas: () => {
        return axios.get("/pizzas");
    },
    fetchPizzasPaged: (page, pageSize) => {
        return axios.get("/pizzas", {
            headers: {
                'page': page, 'page-size': pageSize
            }
        })
    },
}
export default PizzaService;