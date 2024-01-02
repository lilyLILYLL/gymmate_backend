import { Request } from "express";

export type AuthenticationFormData = {
    email: string;
    password: string;
};

export type AuthenticationTypeRequest = Omit<Request, "body"> & {
    body: AuthenticationFormData;
    user?: AuthenticationFormData;
};
