import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import a from "./files/a.json" assert {type: "json"};
import b from "./files/b.json" assert {type: "json"};

//require('./files/c');

const random = Math.random();

let unknownObject;

random > 0.5 ? unknownObject = a : unknownObject = b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

// console.log(`Path to current file is ${__filename}`);
// console.log(`Path to current directory is ${__dirname}`);

// const createMyServer = createServerHttp((_, res) => {
//     res.end('Request accepted');
// });

// module.exports = {
//     unknownObject,
//     createMyServer,
// };

