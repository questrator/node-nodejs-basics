import fs from "fs";
import zlib from "zlib";

export const compress = async () => {
    const pathTxt = "./files/fileToCompress.txt";
    const pathZip = "./files/archive.txt.gz";
    const gzip = zlib.createGzip();
    const rStream = fs.createReadStream(pathTxt);
    const wStream = fs.createWriteStream(pathZip);

    rStream.pipe(gzip).pipe(wStream);
};

compress();