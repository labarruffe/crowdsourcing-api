import {Document, model, Schema} from 'mongoose';
import {ProjectOwner, Volunteer, Project} from './entities';

interface ProjectOwnerDocument extends ProjectOwner, Document {}

export const ProjectOwnerModel = model<ProjectOwnerDocument>('ProjectOwner', new Schema({
    full_name: { type: String, required: true, max: 100 }
}), 'project_owners');


interface VolunteerDocument extends Volunteer, Document {}

export const VolunteerModel = model<VolunteerDocument>('Volunteer', new Schema({
    full_name: { type: String, required: true, max: 100 }
}),'volunteers');

interface ProjectDocument extends Project, Document {}

export const ProjectModel = model<ProjectDocument>('Project', new Schema({
    topic: { type: String, required: true, max: 100 },
    title: { type: String, required: true, max: 100 },
    owner_id: { type: String, required: true},
    volunteers_id: { required: false }
}),'projects');