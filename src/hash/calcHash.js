import * as fs from "fs";
import * as crypto from "crypto";

export const calculateHash = async () => {
    const path = "./files/fileToCalculateHashFor.txt";
    const file = fs.readFileSync(path);
    const hash = crypto.createHash("sha256");
    const outHash = hash.update(file).digest("hex");
    console.log(outHash);
    return outHash;
};

calculateHash();