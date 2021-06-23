import { IdGenerator } from "../Services/IdGenerator";
import {LabDatabase} from "../Data/labData"

export class LabBusiness {
    constructor (
        private labDatabase: LabDatabase,
        private idGenerator: IdGenerator,
    ) {}

    public async labSignup(){

    }

    
}