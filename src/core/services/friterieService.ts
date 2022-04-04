import axios from 'axios';
import IFriterie from '../model/iFriterie';

const API_URL = "https://fakedatatechnocitelucas.azurewebsites.net"

class FriterieService{
    public async getAll(): Promise<IFriterie[]> {
        return (await axios.request<IFriterie[]>({url: API_URL +  "/api/GetFriteries"})).data;
    }
}

const friterieService = new FriterieService();
export default friterieService;