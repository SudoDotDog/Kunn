/**
 * @author WMXPY
 * @namespace Read
 * @description Read
 * @override
 */

import { expect } from "chai";
import * as Chance from "chance";
import { readConfig } from "../../../src/config/read";

describe('Given [Read] helper method', (): void => {

    const chance: Chance.Chance = new Chance('read-read');

    it('should be able to read config file', (): void => {

        const config = readConfig(null as any);

        expect(config).to.be.instanceOf(Object);
    });
});
