import {initializeServer} from "./app";
import {getApiPort, getDbUri} from "./services/enviromentService";

const port = getApiPort();
const dbUrl = getDbUri();

initializeServer(port, dbUrl);