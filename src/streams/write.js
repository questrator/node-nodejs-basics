import fs from "fs";

export const write = async () => {
    const path = "./files/fileToWrite.txt";
    const input = fs.createReadStream(process.stdin.read());
    const output = fs.createWriteStream(path, "utf-8");
    input.on("data", chunk => {
        output.write(chunk);
        process.stdin.read(chunk);
    });
};