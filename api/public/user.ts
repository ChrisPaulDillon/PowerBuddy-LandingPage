import { API_BASE } from "../apibase";

const baseUrl = `${API_BASE}Public/User`;

export const GetAllActiveUserProfilesUrl = () => `${baseUrl}/All`

export const GetPublicUserProfileUrl = (userName: string) =>
  `${baseUrl}/Profile/${userName}`;
