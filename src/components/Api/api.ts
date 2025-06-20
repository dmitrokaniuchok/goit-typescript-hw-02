import axios from "axios";
import { ImageSearchResponse } from "./types";

const apiKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export async function fetchImages(
  query: string,
  page: number = 1
): Promise<ImageSearchResponse> {
  const response = await axios.get<ImageSearchResponse>(
    "https://api.unsplash.com/search/photos",
    {
      params: {
        query,
        client_id: apiKey,
        page,
        per_page: 12,
      },
    }
  );

  return response.data;
}
