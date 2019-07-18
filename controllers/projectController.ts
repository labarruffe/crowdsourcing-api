import {Request, Response, NextFunction} from 'express';
import { ProjectRepository } from "../persistence";

export class ProjectController {
    static async postProject(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.body) {
                res.sendStatus(400).end();
            } else {
                let project = await ProjectRepository.create(req.body);
                console.log(`Cadastrado projeto: \n ${project}`); 
                res.status(201).json(project);
            }
        } catch (error) {
            next(error);
        }
    }
}