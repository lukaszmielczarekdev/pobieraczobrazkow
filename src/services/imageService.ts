import axios, { AxiosError } from "axios";
import { AllDownloadedImagesProps, Image } from "../utils/interfaces";

const BASE_URL =
  "https://pobieraczobrazkow-api-production.up.railway.app/images";

type ImageId = {
  imageId: string;
};

class ImageService {
  http = axios.create({ baseURL: BASE_URL });

  async downloadImage(imageUrl: string) {
    try {
      const response = await this.http.post<ImageId>("/add", {
        sourceUrl: imageUrl,
      });

      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      } else if (typeof error === "string") {
        console.log(error);
      }
    }
  }

  async getAllDownloadedImages(page: number) {
    try {
      const response = await this.http.get<AllDownloadedImagesProps>(
        `/get?page=${page}`
      );
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data.message);
      } else if (typeof error === "string") {
        console.log(error);
      }
    }
  }

  async getImage(id: string) {
    try {
      const response = await this.http.get<Image>(`/get/${id}`);
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
