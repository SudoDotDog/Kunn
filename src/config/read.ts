/**
 * @author WMXPY
 * @namespace Config
 * @description Read
 */

import { Kunn, KunnConfig } from "@kunn/core";
import { recursiveRead } from "@sudoo/io";
import { ERROR_CODE, panic } from "../panic/panic";

export const fromConfig = async (path: string): Promise<Kunn> => {

    const parsed: KunnConfig = await recursiveRead(path);

    const kunn: Kunn = Kunn.fromConfig(parsed);

    return kunn;
};
