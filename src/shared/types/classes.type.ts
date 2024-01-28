import { Request } from "express";

export type ClassType = {
    name: string;
    trainer: string;
    level: string;
    schedule: string[] | Date[];
    startDate: string | Date;
    endDate: string | Date;
    img: string;
};

export type ClassRequestType = Omit<Request, "body"> & {
    body: ClassType;
};


