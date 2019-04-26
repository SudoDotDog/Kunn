import * as Path from "path";
import { recursiveRead } from "../src/config/recursive";

const currentPath = __dirname;

recursiveRead(Path.join(currentPath, 'recursive', 'recursive.json')).then(console.log);
