import { API_BASE } from "../apibase";

const baseUrl = `${API_BASE}Public/LiftingStats`;

export const GetLiftFeedByUserName = (userName: string) => `${baseUrl}/${userName}`;
