import fs from "fs";

export const write = async () => {
    const path = "./files/fileToWrite.txt";
    const wStream = fs.createWriteStream(path);
    process.stdin.on("data", (data) => {
        wStream.write(data);
    });

   
}

write();