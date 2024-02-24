
import {  Router } from "../commmon";
import { getPhotos } from '../services';
const flickerRouter: Router = Router();
flickerRouter.get('/',getPhotos);
export default flickerRouter;