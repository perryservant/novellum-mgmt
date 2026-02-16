import "dotenv/config";
import { startServer } from "./api/server";

import "./storage/database";

startServer();
