import{Request, Response} from "express";
import { BaseDatabase } from "../Data/BaseDatabase";

export class LabController {
    async signupLab(req: Request, res: Response){
        try {
            
        } catch (error) {
            
        }
        await BaseDatabase.destroyConnection();
    }

}   