import { API_BASE } from "../apibase";

const baseUrl = `${API_BASE}Public/TemplateProgram`;

export const GetAllTemplateProgramsUrl = () => `${baseUrl}`;

export const GetTemplatesBySearch = (searchTerm: string) => `${baseUrl}/Search?searchTerm=${searchTerm}`;

export const GetTemplateFeedUrl = () => `${baseUrl}/Feed`;

export const GetTemplateProgramByIdUrl = (templateProgramId: number) =>
  `${baseUrl}/${templateProgramId}`;
