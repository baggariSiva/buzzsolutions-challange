import { Express, express, Request, Response, NextFunction, cors } from "./commmon";
import ENV from "./config/env";
import route from "./router";
import * as config from "./config/config.json";

const app: Express = express();

//cors 
app.use(cors({
  origin: "*",
  methods: ['GET'],
}))

app.use(express.json());

// Health Check 
app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({ message: config.serverRunning }).end();
});

// Routing 
app.use("/api/v1", route);

// Invalid Path
app.use('*', (req: Request, res: Response, next: NextFunction) => {
  return res.send({ error: config.pathNotFound }).end()
})

// Global Error Handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log("\x1b[31m%s", `[${req.method}]:${req.path}`, ` \n${err.stack}`); //cyan
  return res.status(500).send({ error: config.globalError }).end();
});

app.listen(ENV.PORT, () => {
  console.log(`[Server]:Running at http://localhost:${ENV.PORT}`);
});
