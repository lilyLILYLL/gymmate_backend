import { Request } from "express";

export type AuthenticationFormData = {
    email: string;
    password: string;
};

export type UserFormData = {
    username: string;
    registedClassess: string[];
} & AuthenticationFormData;

export type AuthenticationTypeRequest = Omit<Request, "body"> & {
    body: UserFormData;
    user?: AuthenticationFormData;
};
