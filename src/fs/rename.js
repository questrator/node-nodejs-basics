import * as fs from "fs";

export const rename = async () => {
    const currentName = "./files/wrongFilename.txt";
    const newName = "./files/properFilename.md";
    fs.rename(currentName, newName, (error) => {
        if (error) throw new Error("FS operation failed");
    });
};

rename();