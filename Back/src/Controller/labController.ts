import { Request, Response } from "express";
import { LabBusiness } from "../Business/labBusiness";
import { BaseDatabase } from "../Data/BaseDatabase";
import { LabDatabase } from "../Data/labDatabase";
import { inputRawEditLab, InputRawLab } from "../Entities/Lab";
import { IdGenerator } from "../Services/IdGenerator";

export class LabController {
  async signupLab(req: Request, res: Response) {
    try {
      const inputRaw: InputRawLab = {
        nome: req.body.nome,
        endereco: req.body.endereco,
      };

      const labBusiness = new LabBusiness(new LabDatabase(), new IdGenerator());

      await labBusiness.labSignup(inputRaw);

      res.status(201).send("Laboratory Created Sucessfully.");
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }

  async getAllLabs(req: Request, res: Response) {
    try {
      const labBusiness = new LabBusiness(new LabDatabase(), new IdGenerator());

      const laboratories = await labBusiness.getAllLabs();

      res.status(200).send({ Laboratories: laboratories });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }

  async getActiveLabs(req: Request, res: Response) {
    try {
      const labBusiness = new LabBusiness(new LabDatabase(), new IdGenerator());
      const laboratories = await labBusiness.getActiveLabs();
      res.status(200).send({ ActiveLaboratories: laboratories });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }

  async updateLaboratory(req: Request, res: Response){
    try {

      const inputRaw: inputRawEditLab = {
        id: req.params.id,
        nome: req.body.nome, 
        endereco: req.body.endereco
      }
      const labBusiness = new LabBusiness(
        new LabDatabase(),
        new IdGenerator()
      );
  
      await labBusiness.updateLaboratory(inputRaw);
        res.status(200).send(`id: ${req.params.id} Editted Sucessfully`)
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    await BaseDatabase.destroyConnection();
  }
}
