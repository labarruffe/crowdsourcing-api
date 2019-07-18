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

    static async getAllProject(req: Request, res: Response, next: NextFunction) {
        try {
            let project = await ProjectRepository.getAll();
            res.json(project).end();
        } catch (error) {
            next(error);
        }
    }

    static async patchProject(req: Request, res: Response, next: NextFunction) {
        await ProjectRepository.update(req.params._id, req.body)
        .then((doc) => {
            console.log(`Atualizado Projeto: \n ${doc}`);
            res.json(doc).end();
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400).end();
        });
    }

    static async deleteProject(req: Request, res: Response, next: NextFunction) {
        await ProjectRepository.delete(req.params._id)
        .then((doc) => {
            console.log(`Removido Projeto: \n ${doc}`);
            res.json(doc).end();
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400).end();
        });
    }
}