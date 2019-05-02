import {Request, Response, NextFunction} from 'express';
import {ProjectOwnerRepository} from '../persistence';

export class ProjectOwnerController {
    static async getAllProjectOwners(req: Request, res: Response, next: NextFunction) {
        try {
            let projectOwners = await ProjectOwnerRepository.getAllProjectOwners();
            res.json(projectOwners);
        } catch (error) {
            next(error);
        }
    }

    static async postProjectOwner(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.body.full_name) {
                res.sendStatus(400);
            } else {
                let projectOwner = await ProjectOwnerRepository.create(req.body);
                console.log(`Cadastrado Dono do projeto: \n ${projectOwner}`); 
                res.status(201).json(projectOwner);
            }
        } catch (error) {
            next(error);
        }
    }

    static async patchProjectOwner(req: Request, res: Response, next: NextFunction) {
        await ProjectOwnerRepository.updateProjectOwner(req.params._id, req.body)
        .then((doc) => {
            console.log(`Atualizado Dono do Projeto: \n ${doc}`);
            res.json(doc);
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400);
        });
    }

    static async deleteProjectOwner(req: Request, res: Response, next: NextFunction) {
        await ProjectOwnerRepository.deleteProjectOwner(req.params._id)
        .then((doc) => {
            console.log(`Removido Dono do Projeto: \n ${doc}`);
            res.json(doc);
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400);
        });
    }
}