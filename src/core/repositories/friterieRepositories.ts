import { promises } from "dns";
import database from "../dexie";
import IFriterie from "../model/iFriterie";

class FriterieRepository {
    public async buldAdd(friteries: IFriterie[]): Promise<void>{
        await database.friteries.bulkAdd(friteries);
    }

    public async getAll(): Promise<IFriterie[]>{
       return await database.friteries.toArray();
    }
}

const friterieRepository = new FriterieRepository();

export default friterieRepository;