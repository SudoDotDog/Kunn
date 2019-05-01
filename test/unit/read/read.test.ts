/**
 * @author WMXPY
 * @namespace Read
 * @description Read
 * @override
 */

import { Kunn, KunnConfig } from "@kunn/core";
import * as __SudooIO from "@sudoo/io";
import { Mock, Sandbox } from "@sudoo/mock";
import { expect } from "chai";
import * as Chance from "chance";
import { fromConfig } from "../../../src/config/read";

describe('Given [Read] helper method', (): void => {

    const chance: Chance.Chance = new Chance('read-read');

    it('should be able to read config file', async (): Promise<void> => {

        const stack = Sandbox.create();
        const mock = Mock.create(__SudooIO, 'recursiveRead');

        const kunnConfig: KunnConfig = {
            version: 1,
            routes: [],
        };
        mock.mock(stack.func(kunnConfig));

        const config: Kunn = await fromConfig(chance.string());

        mock.restore();

        expect(config.config).to.be.deep.equal(kunnConfig);
    });
});
