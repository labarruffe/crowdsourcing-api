import {Document, model, Schema} from 'mongoose';
import {ProjectOwner, Volunteer} from './entities';

interface ProjectOwnerDocument extends ProjectOwner, Document {}

export const ProjectOwnerModel = model<ProjectOwnerDocument>('ProjectOwner', new Schema({
    full_name: { type: String, required: true, max: 100 }
}), 'project_owners');


interface VolunteerDocument extends Volunteer, Document {}

export const VolunteerModel = model<VolunteerDocument>('Volunteer', new Schema({
    full_name: { type: String, required: true, max: 100 }
}),'volunteers');