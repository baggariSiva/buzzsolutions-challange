export type ImageData = {
  farm: number;
  height_c: number;
  height_l: number;
  height_m: number;
  height_n: number;
  height_o: number;
  height_q: number;
  height_s: number;
  height_sq: number;
  height_t: number;
  height_z: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  media: string;
  media_status: string;
  owner: string;
  secret: string;
  server: string;
  title: string;
  url_c: string;
  url_l: string;
  url_m: string;
  url_n: string;
  url_o: string;
  url_q: string;
  url_s: string;
  url_sq: string;
  url_t: string;
  url_z: string;
  width_c: number;
  width_l: number;
  width_m: number;
  width_n: number;
  width_o: number;
  width_q: number;
  width_s: number;
  width_sq: number;
  width_t: number;
  width_z: number;
};

export type Response = {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: ImageData[];
    total: number;
  };
};