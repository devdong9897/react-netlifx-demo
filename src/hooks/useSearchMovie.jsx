import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// nav바 클릭시, 검색시 이 두가지의 다른 url을 호출
const fetchSearchMovie = ({ keyword }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}`)
    : api.get(`/movie/popular`);
};

// keyword에 따라서 url이 달라짐
export const useSearchMovieQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["movie-search", keyword],
    queryFn: () => fetchSearchMovie({ keyword }),
    select: (result) => result.data,
  });
};
