import { API_BASE } from "../apibase";

const baseUrl = `${API_BASE}Account/User/`;

export const GetLoggedInUsersProfileUrl = () => `${baseUrl}Profile`;
export const CreateFirstVisitStatsUrl = () => `${baseUrl}FirstVisit`;
export const EditProfileUrl = () => `${baseUrl}Profile`;
