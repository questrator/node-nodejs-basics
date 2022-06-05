export const parseArgs = () => {
    const props = process.argv
    .map((e, i, a) => e.startsWith("-") ? `${e.replace(/^-+/, "")} is ${a[i + 1]}` : null)
    .forEach(e => e !== null ? console.log(e) : 0);
};

parseArgs();