/**
 * @author WMXPY
 * @namespace Kunn
 * @description Index
 */

import Kunn from "@kunn/core";
import { Argument, Coco, Command, createInfoCommand, Option } from "@sudoo/coco";
import { fromConfig } from "./config/read";

export const KunnCLI = async (args: string[]): Promise<void> => {

    try {

        const coco: Coco = Coco.create();

        coco.command(createInfoCommand('help', coco, console.log));
        coco.command(Command
            .create('typescript')
            .argument(Argument.create('config'))
            .option(Option.create('o').setName('out'))
            .then(async (inputs: Record<string, string>): Promise<void> => {

                const kunn: Kunn = await fromConfig(inputs.config);

                console.log(kunn);
            }));

        await coco.go(args);
    } catch (error) {

        console.log(error);
    }
};

export default KunnCLI;
