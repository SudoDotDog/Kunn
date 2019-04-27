/**
 * @author WMXPY
 * @namespace Panic
 * @description Panic
 */

import { Panic } from "connor";

export const MODULE_NAME = 'KUNN';

export enum ERROR_CODE {

    JSON_PARSE_FAILED = 1201,

    OBJECT_REFERENCE_NOT_OBJECT = 2005,

    CONFIG_NOT_VALID = 2900,
}

export const ERROR_LIST: Record<ERROR_CODE, string> = {

    [ERROR_CODE.JSON_PARSE_FAILED]: 'Parsing json failed: "{}"',

    [ERROR_CODE.OBJECT_REFERENCE_NOT_OBJECT]: 'Object reference must be a object, but: "{}"',

    [ERROR_CODE.CONFIG_NOT_VALID]: 'Configuration not valid',
};

export const panic: Panic<ERROR_CODE> = Panic.withDictionary(MODULE_NAME, ERROR_LIST);
