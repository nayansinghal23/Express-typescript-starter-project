import dotenv from 'dotenv'

interface ServerConfig {
    PORT: number;
}

interface DataSourceConfig {
    url: string;
}

function loadDotenv() {
    dotenv.config();
}
loadDotenv();


const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001,
};

const dataSource: DataSourceConfig = {
    url: process.env.DATABASE_URL || '',
}

export {
    serverConfig,
    dataSource,
};