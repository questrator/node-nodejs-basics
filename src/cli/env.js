export const parseEnv = () => {
    const keys = Object.entries(process.env).filter(e => e[0].startsWith("RSS_"));
    keys.forEach(e => console.log(`${e[0]}=${e[1]}`));
};

parseEnv();