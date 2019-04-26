/**
 * @author WMXPY
 * @namespace Read
 * @description Recursive
 */

import { _Json } from "@sudoo/bark/json";
import { _Map } from "@sudoo/bark/map";
import { readTextFile } from "@sudoo/io";

// tslint:disable-next-line: ban-types
const isObject = (element: any): element is Object => (element !== null && typeof element === 'object');

export const recursiveRead = async (path: string, depth: number = 0, maxDepth: number = 15): Promise<any> => {

    const content: string = await readTextFile(path);
    const parsed: any = _Json.safeParse(content, new Error('failed'));

    return await recursiveParse(parsed, depth + 1, maxDepth);
};

export const recursiveParse = async (parsed: any, depth: number = 0, maxDepth: number = 15): Promise<any> => {

    if (Array.isArray(parsed)) {

        return parsed.map(async (element: any) => {
            if (typeof element === 'string' && element.match(/$\$ref:.+/)) {
                const targetPath: string = element.replace('$ref:', '');
                const replacement: any[] = await recursiveRead(targetPath);

                if (Array.isArray(replacement)) {
                    return replacement;
                }
            }
            return element;
        });
    } else if (isObject(parsed)) {

        const keys: string[] = _Map.keys(parsed);

        return keys.reduce(async (previous: Record<any, any>, current: string) => {

            if (current === '$ref') {

                const replacement: Record<any, any> = await recursiveRead(parsed[current]);
                if (isObject(replacement)) {
                    return { ...previous, ...replacement };
                }
                throw new Error('not object');
            }
            return {
                ...previous,
                [current]: parsed[current],
            };
        }, {} as Record<any, any>);
    }
};
