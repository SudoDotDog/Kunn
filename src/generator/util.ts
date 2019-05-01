/**
 * @author WMXPY
 * @namespace Generator
 * @description Util
 */

import * as Path from "path";

export const parseTargetPath = (path: string, ext: string): string => {

    const resolved: string = Path.resolve(path);
    const parsed: Path.ParsedPath = Path.parse(resolved);

    if (parsed.ext.length > 1) {
        return resolved;
    }

    return Path.join(parsed.dir, `${parsed.name}.${ext}`);
};
