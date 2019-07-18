import {Router} from 'express';
import {ProjectOwnerController} from './controllers/projectOwnerController';
import {VolunteerController} from './controllers/volunteerController';
import { ProjectController } from './controllers/projectController';

const router = Router();

router
    .get('/projectowners', ProjectOwnerController.getAllProjectOwners)
    .post('/projectowners', ProjectOwnerController.postProjectOwner)
    .patch('/projectowners/:_id', ProjectOwnerController.patchProjectOwner)
    .delete('/projectowners/:_id', ProjectOwnerController.deleteProjectOwner);

router
    .get('/volunteers', VolunteerController.getAllVolunteers)
    .post('/volunteers', VolunteerController.postVolunteer)    
    .patch('/volunteers/:_id', VolunteerController.patchVolunteer)
    .delete('/volunteers/:_id', VolunteerController.deleteVolunteer);

router
    .post('/projects', ProjectController.postProject)   
    .get('/projects', ProjectController.getAllProject) 
    .patch('/projects', ProjectController.patchProject) 
    .delete('/projects', ProjectController.deleteProject) 

export {router};