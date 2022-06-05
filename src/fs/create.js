import * as fs from "fs";

export const create = async () => {
    const data = "I am fresh and young";
    const path = "./files/fresh.txt";
    fs.access(path, (error) => {
        if (error) {
            fs.writeFile(path, data, (error) => {
                if (error) throw new Error("FS operation failed");
            });
        }
        else throw new Error("FS operation failed");
    });
    
};

create();