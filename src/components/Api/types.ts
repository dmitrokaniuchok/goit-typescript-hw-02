export interface UnsplashImage {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
  likes: number;
  user: {
    name: string;
  };
}

export interface ImageSearchResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
