import path from "path";
import { fileURLToPath } from 'url';
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import a from "./files/a.json" assert {type: "json"};
import b from "./files/b.json" assert {type: "json"};
import "./files/c.js";

const random = Math.random();

let unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer }