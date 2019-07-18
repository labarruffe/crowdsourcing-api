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
    projectOwner: ObjectId,
    volunteers: ObjectId[]
}