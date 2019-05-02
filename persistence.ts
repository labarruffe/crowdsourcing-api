import {ProjectOwnerModel, VolunteerModel} from './schemes';
import {ProjectOwner, Volunteer} from './entities';
import {Types} from 'mongoose';

export class ProjectOwnerRepository {
    static async create(projectOwner: ProjectOwner): Promise<ProjectOwner> {
        let new_projectOwner = await ProjectOwnerModel.create(projectOwner);
        return new_projectOwner.save();
    }

    static async getAllProjectOwners(): Promise<ProjectOwner[]> {
        return await ProjectOwnerModel.find().exec();
    }

    static async updateProjectOwner(id: string, field: Object): Promise<any> {
        if (Types.ObjectId.isValid(id)) {
            return await ProjectOwnerModel.findByIdAndUpdate(id, {$set: field}, {new:true})
        } else {
           throw new Error('ObjectId Invalid!');
        }
    }  

    static async deleteProjectOwner(id: string): Promise<any> {
        if(Types.ObjectId.isValid(id)) {
            return await ProjectOwnerModel.findByIdAndDelete(id);
        } else {
            throw new Error('ObjectId Invalid!');
        }
    }
} 

export class VolunteerRepository {
    static async create(volunteer: Volunteer): Promise<Volunteer> {
        let new_volunteer = await VolunteerModel.create(volunteer);
        return new_volunteer.save();
    }

    static async getAllVolunteers(): Promise<Volunteer[]> {
        return await VolunteerModel.find().exec();
    }

    static async updateVolunteer(id: string, field: Object): Promise<any> {
        if (Types.ObjectId.isValid(id)) {
            return await VolunteerModel.findByIdAndUpdate(id, {$set: field}, {new:true})
        } else {
           throw new Error('ObjectId Invalid!');
        }
    }
    
    static async deleteVolunteer(id: string): Promise<any> {
        if (Types.ObjectId.isValid(id)) {
            return await VolunteerModel.findByIdAndDelete(id);
        } else {
            throw new Error('ObjectId Invalid!');
        }
    }
}