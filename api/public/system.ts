import { API_BASE } from "../apibase";

const baseUrl = `${API_BASE}Public/System`;

export const GetAllGendersUrl = () => `${baseUrl}/Gender`;
export const GetAllMemberStatusUrl = () => `${baseUrl}/MemberStatus`;
