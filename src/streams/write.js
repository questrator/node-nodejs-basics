import fs from "fs";

export const write = async () => {
    const path = "./files/fileToWrite.txt";
    process.stdin.on("data", (data) => {
        console.log(data);
    });

    //const output = fs.createWriteStream(path, "utf-8");
   
}