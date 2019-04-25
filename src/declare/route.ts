/**
 * @author WMXPY
 * @namespace Declare
 * @description Route
 */

import { PROTOCOL } from "./declare";

export type KunnGetRequest = {

};

export type KunnPostRequest = {

};

export type KunnRoute = {

    readonly path: string;
    readonly protocol: PROTOCOL.GET;
    readonly request: KunnGetRequest;
} | {
    readonly path: string;
    readonly protocol: PROTOCOL.POST;
    readonly request: KunnPostRequest;
};
