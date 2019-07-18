export interface ProjectOwner {
    full_name: string
}

export interface Volunteer {
    full_name: string
}

export interface Project {
    topic: string,
    title: string,
    owner_id: string,
    volunteers_id: string[]
}