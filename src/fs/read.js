import * as fs from "fs";

export const read = async () => {
    const path = "./files/fileToRead.txt";
    fs.readFile(path, "utf8", (error, data) => {
        if (error) throw new Error("FS operation failed");
        console.log(data);
    });
};

read();