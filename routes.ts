import {Router} from 'express';
import {ProjectOwnerController} from './controllers/projectOwnerController';
import {VolunteerController} from './controllers/volunteerController';

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

export {router};