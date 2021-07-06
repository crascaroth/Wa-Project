
import { Request, Response } from "express";
import { RelationBusiness } from "../Business/relationBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { ExamDatabase } from "../Data/examDatabase";
import { LabDatabase } from "../Data/labDatabase";
import { inputRawRelation } from "../Entities/Relation";

export class RelationController{
    async associate(req:Request, res: Response){
        try {

            const input: inputRawRelation = {
                id_laboratory: req.body.id_laboratory,
                id_exam: req.body.id_exam,
            }
            
            const relationBusiness = new RelationBusiness(
                new ExamDatabase,
                new LabDatabase,
                new RelationDatabase
            )

            await relationBusiness.associate(input)
            res.status(201).send("Association Created Sucessfully")
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        await BaseDatabase.destroyConnection();
    }
}