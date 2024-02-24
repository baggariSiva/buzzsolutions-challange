import { Router } from "../commmon";
import flickerRouter from "./flicker.routes";
const route: Router = Router();
route.use('/photos',flickerRouter);

export default route;