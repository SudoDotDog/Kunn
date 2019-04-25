/**
 * @author WMXPY
 * @namespace Kunn
 * @description Kunn
 */

import { readConfig } from "./config/read";
import { KunnConfig } from "./declare/kunn";

export class Kunn {

    public static fromPath(path: string): Kunn {

        const config: KunnConfig = readConfig(path);
        return new Kunn();
    }

    private constructor() {

    }
}
