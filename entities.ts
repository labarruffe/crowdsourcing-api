import { ObjectId } from "bson";

export interface ProjectOwner {
    full_name: string
}

export interface Volunteer {
    full_name: string
}

export interface Project {
    topic: string,
    title: string,
    owner_id: ObjectId,
    volunteers_id: ObjectId[]
}