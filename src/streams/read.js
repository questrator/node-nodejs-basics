import fs from "fs";

export const read = async () => {
    const path = "./files/fileToRead.txt";
    const readStream = fs.createReadStream(path, "utf-8");
    readStream.on("data", (part) => {
        process.stdout.write(part);
    });
    
};

read();