import axios, { AxiosError } from "axios";
import { Image } from "../utils/interfaces";

const BASE_URL = "http://localhost:5000/images";

class ImageService {
  http = axios.create({ baseURL: BASE_URL });

  async downloadImage(imageUrl: string) {
    try {
      const response = await this.http.post<Image>("/add", {
        sourceUrl: imageUrl,
        addDate: new Date().toLocaleString("en-GB"),
      });
      console.log(response.data);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      } else if (typeof error === "string") {
        console.log(error);
      }
    }
  }
}

const imageService = new ImageService();

export default imageService;
