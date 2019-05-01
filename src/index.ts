/**
 * @author WMXPY
 * @namespace Kunn
 * @description Index
 */

import Kunn, { KunnRoute } from "@kunn/core";
import { generateGoLangGesture } from "@kunn/go";
import { generateTypeScriptGesture } from "@kunn/typescript";
import { Argument, Coco, Command, createInfoCommand, Option } from "@sudoo/coco";
import { writeTextFile } from "@sudoo/io";
import * as Path from "path";
import { fromConfig } from "./config/read";

export const KunnCLI = async (args: string[]): Promise<void> => {

    try {

        const coco: Coco = Coco.create();

        coco.command(createInfoCommand('help', coco, console.log));
        coco.command(Command
            .create('typescript')
            .argument(Argument.create('config'))
            .option(Option.create('o').setName('out').required())
            .then(async (inputs: Record<string, string>): Promise<void> => {

                const kunn: Kunn = await fromConfig(inputs.config);
                const definition: string = kunn.routes().map((route: KunnRoute) => generateTypeScriptGesture(route)).join('\n');

                await writeTextFile(Path.resolve(inputs.out), definition);
            }));

        coco.command(Command
            .create('go')
            .argument(Argument.create('config'))
            .option(Option.create('o').setName('out').required())
            .then(async (inputs: Record<string, string>): Promise<void> => {

                const kunn: Kunn = await fromConfig(inputs.config);
                const definition: string = kunn.routes().map((route: KunnRoute) => generateGoLangGesture(route)).join('\n');

                await writeTextFile(Path.resolve(inputs.out), definition);
            }));

        await coco.go(args);
    } catch (error) {

        if (process.env.NODE_ENV === 'development') {
            console.log(error);
        } else {
            console.log(error.message);
        }
    }
};

export default KunnCLI;
