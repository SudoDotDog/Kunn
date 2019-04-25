/**
 * @author WMXPY
 * @namespace Read
 * @description Read
 * @override
 */

import { expect } from "chai";
import * as Chance from "chance";
import { readConfig } from "../../../src";

describe('Given [Read] helper method', (): void => {

    const chance: Chance.Chance = new Chance('read-read');

    it('should be able to read config file', (): void => {

        const config = readConfig();

        expect(config).to.be.instanceOf(Object);
    });
});
