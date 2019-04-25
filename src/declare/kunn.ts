/**
 * @author WMXPY
 * @namespace Declare
 * @description Kunn
 */

import { CONFIG_TYPE } from "./declare";
import { KunnRoute } from "./route";

export type KunnConfig = {

    readonly version: number;
    readonly routes: KunnRoute[];
};

export type KunnFile = {

    readonly type: CONFIG_TYPE.CHUNK;
} & KunnConfig | {

    readonly type: CONFIG_TYPE.ROOT;
    readonly reference?: string[];
} & KunnConfig;
