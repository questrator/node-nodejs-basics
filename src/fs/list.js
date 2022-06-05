import * as fs from "fs";

export const list = async () => {
    const path = "./files/";
    fs.readdir(path, (error, data) => {
        if (error) throw new Error("FS operation failed");
        data.forEach(e => console.log(e));
    });
};

list();