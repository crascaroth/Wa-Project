import { ExamDatabase } from "../Data/examDatabase";
import { LabDatabase } from "../Data/labDatabase";
import { RelationDatabase } from "../Data/relationDatabase";
import { InputCompleteExam, RequestCompleteExam } from "../Entities/Exam";
import { InputCompleteLab, RequestCompleteLab } from "../Entities/Lab";
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

        const exam: RequestCompleteExam = await this.examDatabase.getExamById(input.id_exam)
        
        console.log("exam", exam)
        
        if(exam.status != 1  ){
            throw new Error("Exam not active")
        }

        const lab: RequestCompleteLab = await this.labDatabase.getLabById(input.id_laboratory)

        console.log("lab", lab)
        if(lab.status != 1){
            throw new Error("Laboratory not active")
        }

        await this.relationDatabase.associate(input)
    }

    public async disassociate(input: inputRawRelation): Promise<void>{
        if(![input.id_exam, input.id_laboratory]){
            throw new Error("Please insert a valid laboratory or exam")
        }
        await this.relationDatabase.disassociate(input)
    }
}