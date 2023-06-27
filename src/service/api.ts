import { CitiesDTO, PartnerDTO, SortsDTO, Style } from "./types";
import axios from "axios";
const _baseUrl = "http://localhost:8000/beers";

axios.defaults.baseURL = _baseUrl;

export const getSorts = async (beer_style?: Style | ""): Promise<SortsDTO> => {
  return await axios.get(`/`, { params: { beer_style } });
};

export const getCities = async (): Promise<CitiesDTO> => {
  return await axios.get(`/cities/`);
};

export const getPartners = async (city__name: string): Promise<PartnerDTO> => {
  return await axios.get(`/markets/`, {
    params: { city__name },
  });
};
