/**
 * @author WMXPY
 * @namespace Read
 * @description Recursive
 */

import { _Json } from "@sudoo/bark/json";
import { _Map } from "@sudoo/bark/map";
import { _Mutate } from "@sudoo/bark/mutate";
import { readTextFile } from "@sudoo/io";
import * as Path from "path";

// tslint:disable-next-line: ban-types
const isObject = (element: any): element is Object => (element !== null && typeof element === 'object');

export const recursiveRead = async (path: string, depth: number = 0, maxDepth: number = 15): Promise<any> => {

    const content: string = await readTextFile(path);
    const parsed: any = _Json.safeParse(content, new Error('failed'));

    const rootPath: string = Path.parse(path).dir;

    return await recursiveParse(parsed, rootPath, depth + 1, maxDepth);
};

export const recursiveParse = async (parsed: any, rootPath: string, depth: number = 0, maxDepth: number = 15): Promise<any> => {

    if (Array.isArray(parsed)) {

        return _Mutate.asyncMap(parsed, async (element: any) => {

            if (typeof element === 'string' && /^\$ref:.+/.test(element)) {

                const targetPath: string = element.replace('$ref:', '');
                const relativePath: string = Path.join(rootPath, targetPath);
                const replacement: any[] = await recursiveRead(relativePath, depth + 1, maxDepth);

                if (Array.isArray(replacement)) {
                    return replacement;
                }
            }
            return await recursiveParse(element, rootPath, depth, maxDepth);
        });
    } else if (isObject(parsed)) {

        const keys: string[] = _Map.keys(parsed);

        return _Mutate.asyncReduce(keys, async (previous: Record<any, any>, current: string) => {

            if (current === '$ref') {

                const targetPath: string = parsed[current];
                const relativePath: string = Path.join(rootPath, targetPath);
                const replacement: Record<any, any> = await recursiveRead(relativePath, depth + 1, maxDepth);
                if (isObject(replacement)) {
                    return { ...previous, ...replacement };
                }
                throw new Error('not object');
            }
            return {
                ...previous,
                [current]: await recursiveParse(parsed[current], rootPath, depth, maxDepth),
            };
        }, {} as Record<any, any>);
    }

    return parsed;
};
