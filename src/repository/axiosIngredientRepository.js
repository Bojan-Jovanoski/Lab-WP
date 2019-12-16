import axios from '../custom-axios/axios'
import qs from 'qs';

const IngredientService = {
    fetchIngredients: () => {
        return axios.get("/ingredients");
    },
    fetchIngredientsPaged: (page, pageSize) => {
        return axios.get("/ingredients", {
            headers: {
                'page': page, 'page-size': pageSize
            }
        })
    }
}

export default IngredientService;