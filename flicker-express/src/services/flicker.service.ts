import { Router, Request, Response } from 'express';

import ENV from "../config/env";
import axios from 'axios';
export async function getPhotos(req: Request, res: Response) {
  const {search, page=1, perPage=10} =   req.query || {};
 const data =  await axios(`https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${ ENV.FLICKER_API_KEY}&method=${search ?`flickr.photos.search&tags=${search}`:'flickr.photos.getRecent'}&page=${page}&per_page=${perPage}&extras=media,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o`)
  
  res.status(data.status).send(data.data).end()
}