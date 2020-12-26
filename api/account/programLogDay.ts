import { API_BASE } from "../apibase";

const baseUrl = `${API_BASE}Account/ProgramLogDay`;

export const CreateProgramLogDayUrl = () => `${baseUrl}`;

export const DeleteProgramLogExerciseUrl = (programLogDayId: number) => `${baseUrl}/${programLogDayId}`;

export const UpdateProgramLogDayUrl = (programLogDayId: number) => `${baseUrl}/${programLogDayId}`;

export const UpdateProgramLogDayNotesUrl = (programLogDayId: number, notes: string) =>
  `${baseUrl}/Note/${programLogDayId}?notes=${notes}`;

export const DeleteProgramLogDayUrl = (programLogDayId: number) => `${baseUrl}/${programLogDayId}`;


export const GetWorkoutSummariesUrl = () => `${baseUrl}/Summary`;