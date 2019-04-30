/**
 * @author WMXPY
 * @namespace Kunn
 * @description Index
 */

import { Coco, Command, createInfoCommand } from "@sudoo/coco";

export const KunnCLI = async (args: string[]): Promise<void> => {

    try {

        const coco: Coco = Coco.create();

        coco.command(createInfoCommand('help', coco, console.log));
        coco.command(Command.create('hello'));

        await coco.go(args);
    } catch (error) {

        console.log(error);
    }
};

export default KunnCLI;

