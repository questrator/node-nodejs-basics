import fs from "fs";
import zlib from "zlib";

export const decompress = async () => {
    const pathZip = "./files/archive.txt.gz";
    const pathTxt = "./files/fileToDeCompress.txt";
    const unzip = zlib.createGunzip();
    const rStream = fs.createReadStream(pathZip);
    const wStream = fs.createWriteStream(pathTxt);        

    rStream.pipe(unzip).pipe(wStream);
};

decompress();