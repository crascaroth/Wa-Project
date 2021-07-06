import { ExamDatabase } from "../Data/examDatabase";
import { LabDatabase } from "../Data/labDatabase";
import { RelationDatabase } from "../Data/relationDatabase";
import { inputRawRelation } from "../Entities/Relation";

export class RelationBusiness{
    constructor(
        private examDatabase: ExamDatabase,
        private labDatabase: LabDatabase,
        private relationDatabase: RelationDatabase
    ){}

    public async associate(input: inputRawRelation): Promise<void>{
        if(![input.id_exam, input.id_laboratory]){
            throw new Error("Please insert a valid laboratory or exam")
        }

        const exam = await this.examDatabase.getExamById(input.id_exam)
        
        
        if(exam.status != 1){
            throw new Error("Exam not active")
        }

        const lab = await this.labDatabase.getLabById(input.id_laboratory)

        if(lab.status != 1){
            throw new Error("Laboratory not active")
        }

        await this.relationDatabase.associate(input)
    }
}