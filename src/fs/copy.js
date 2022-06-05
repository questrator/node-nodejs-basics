import * as fs from "fs";

export const copy = async () => {
    const originalPath = "./files/";
    const newPath = "./files_copy/";
    fs.readdir(originalPath, (error, data) => {
        if (error) throw new Error("FS operation failed");    
        fs.access(newPath, (error) => {
            if (error && error.code === "ENOENT") {
                fs.mkdir(newPath, (error) => {
                    if (error) throw new Error("FS operation failed");
                });
            }

            if (data.length > 0) {
                data.forEach(e => {
                    fs.copyFile(originalPath.concat(e), newPath.concat(e), (error) => {
                        if (error) throw new Error("FS operation failed");
                    })
                })
            }
        });
    });
};

copy();