import * as fs from "fs";

export const remove = async () => {
    const path = "./files/fileToRemove.txt";
    if (fs.existsSync(path)) {
        fs.unlink(path, (error) => {
            if (error) throw new Error("FS operation failed");
        });
    }
    else throw new Error("FS operation failed");
};

remove();