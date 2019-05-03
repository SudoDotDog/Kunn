/**
 * @author WMXPY
 * @namespace Kunn
 * @description Index
 */

import Kunn, { KunnRoute } from "@kunn/core";
import { generateGoLangGesture } from "@kunn/go";
import { createKunnServer } from "@kunn/server";
import { generateTypeScriptGesture } from "@kunn/typescript";
import { Argument, Coco, Command, createInfoCommand, Option } from "@sudoo/coco";
import { writeTextFile } from "@sudoo/io";
import { createServer } from "http";
import { fromConfig } from "./config/read";
import { parseTargetPath } from "./generator/util";

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

                await writeTextFile(parseTargetPath(inputs.out, 'd.ts'), definition);
            }));

        coco.command(Command
            .create('go')
            .argument(Argument.create('config'))
            .option(Option.create('o').setName('out').required())
            .then(async (inputs: Record<string, string>): Promise<void> => {

                const kunn: Kunn = await fromConfig(inputs.config);
                const definition: string = kunn.routes().map((route: KunnRoute) => generateGoLangGesture(route)).join('\n');

                await writeTextFile(parseTargetPath(inputs.out, 'go'), definition);
            }));

        coco.command(Command
            .create('serve')
            .argument(Argument.create('config'))
            .then(async (inputs: Record<string, string>): Promise<void> => {

                const kunn: Kunn = await fromConfig(inputs.config);
                const server = createKunnServer(kunn);

                createServer(server).listen(8000);
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
