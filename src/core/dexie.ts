import Dexie, {Table} from "dexie";
import IFriterie from "./model/iFriterie";

class DexieDatabase extends Dexie {
    public friteries: Table<IFriterie, string>;
    
    constructor(){
        super("iFriterieDB") // super() va chercher la DB
        
        this.version(1)  // Version() est propre indexDb.
            .stores({
                friteries: "id"
            });
        
        this.friteries = this.table('friteries');
    };
}

const database = new DexieDatabase();

export default database;