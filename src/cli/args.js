export const parseArgs = () => {
    const props = process.argv.filter((e, i, a) => {
        if (e.startsWith("-")) e += a[i + 1];
    });
    console.log(props);
};

parseArgs();