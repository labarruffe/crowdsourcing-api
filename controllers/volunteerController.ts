import {Request, Response, NextFunction} from 'express';
import {VolunteerRepository} from '../persistence';

export class VolunteerController {
    /**
     * GET All
     * @param req 
     * @param res 
     * @param next 
    */
    static async getAllVolunteers(req: Request, res: Response, next: NextFunction) {
        try {
            let volunteers = await VolunteerRepository.getAllVolunteers();
            res.json(volunteers);
        } catch (error) {
            next(error);
        }
    }

    /**
     * POST
     * @param req 
     * @param res 
     * @param next 
    */
    static async postVolunteer(req: Request, res: Response, next: NextFunction) {
        try {
            if (!req.body.full_name) {
                res.sendStatus(400);
            } else {
                let volunteer = await VolunteerRepository.create(req.body);
                console.log(`Cadastrado Voluntário: \n ${volunteer}`);
                res.status(201).json(volunteer);
            }
        } catch (error) {
            next(error);
        }
    }

    /**
     * PATCH 
     * @param req 
     * @param res 
     * @param next 
    */
    static async patchVolunteer(req: Request, res: Response, next: NextFunction) {
        await VolunteerRepository.updateVolunteer(req.params._id, req.body)
        .then((doc) => {
            console.log(`Atualizado Voluntário: \n ${doc}`);
            res.json(doc);
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400);
        });
    }

    /**
     * DELETE 
     * @param req 
     * @param res 
     * @param next 
    */
    static async deleteVolunteer(req: Request, res: Response, next: NextFunction) {
        await VolunteerRepository.deleteVolunteer(req.params._id)
        .then((doc) => {
            console.log(`Removido Voluntário: \n ${doc}`);
            res.json(doc);
        })
        .catch((err)=> {
            next(err);
            res.sendStatus(400);
        });
    }
}