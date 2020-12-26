import { API_BASE } from "../apibase";

const baseUrl = `${API_BASE}Account/Exercise`;

export const CreateExerciseUrl = () => `${baseUrl}`;
export const GetExerciseByIdUrl = (exerciseId: number) => `${baseUrl}/${exerciseId}`;
