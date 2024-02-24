import { useEffect, useMemo, useState } from "react";

import Pagination from "./Pagination";
import type { ImageData, Response } from "../../types";

type Props = {
  searchQuery: string;
};

const API_URL: string = `http://localhost:5000/api/v1/photos`;

const INITIAL_DATA: Response = {
  photos: {
    page: 1,
    pages: 1,
    perpage: 10,
    photo: [],
    total: 10,
  },
};

function ImageContainer({ searchQuery }: Props) {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [imageData, setImageData] = useState<Response>(INITIAL_DATA);

  const params = useMemo((): string => {
    const search = searchQuery ? `search=${searchQuery}` : null;
    const pageNo = `page=${page}`;
    const perPage = `perPage=${pageSize}`;

    return [search, pageNo, perPage].filter((param) => param).join("&");
  }, [page, pageSize, searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${API_URL}?${params}`);
        const data = await response.json();
      setImageData(data);
      }catch(error){
        console.log("Error in fetching data",error)
      }
     
    };

    fetchData();
  }, [params]);

  return (
    <div className="container text-center">
      <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        {imageData?.photos?.photo?.map((image: ImageData, index: number) => {
          return (
            <div className="col" key={index}>
              <img
                src={image.url_c}
                className="img-thumbnail"
                alt={image.title}
                object-fit="contain"
              />
            </div>
          );
        })}
        {imageData?.photos?.photo?.length === 0 && !!searchQuery && (
          <div className="no-img">
            <p>No images found</p>
          </div>
        )}
      </div>
      {imageData?.photos?.photo.length > 0 && (
        <Pagination
          page={page}
          pageSize={pageSize}
          setPage={setPage}
          setPageSize={setPageSize}
          totalRecordCount={imageData.photos.total}
        />
      )}
    </div>
  );
}

export default ImageContainer;
