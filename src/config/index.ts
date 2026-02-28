import dotenv from 'dotenv'

interface ServerConfig {
    PORT: number;
}

function loadDotenv() {
    dotenv.config();
}
loadDotenv();


const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001,
};

export {
    serverConfig,
};