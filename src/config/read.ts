/**
 * @author WMXPY
 * @namespace Config
 * @description Read
 */

import { KunnConfig } from "../declare/kunn";
import { ERROR_CODE, panic } from "../panic/panic";
import { recursiveRead } from "./recursive";
import { validateKunnConfig } from "./validate";

export const readConfig = async (path: string): Promise<KunnConfig> => {

    const parsed: KunnConfig = await recursiveRead(path);

    if (!validateKunnConfig(parsed)) {
        throw panic.code(ERROR_CODE.CONFIG_NOT_VALID);
    }

    return parsed;
};
