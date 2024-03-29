import { API_BASE } from "../apibase";

const baseUrl = `${API_BASE}Account/Auth`;

export const LoginWithFacebookUrl = () => `${baseUrl}/Login/Facebook`;

export const LoginUserUrl = () => `${baseUrl}/Login`;

export const RegisterUserUrl = () => `${baseUrl}/Register`;

export const LogoutUserUrl = (refreshToken: string) => `${baseUrl}/Logout/${refreshToken}`;

export const RefreshTokenUrl = () => `${baseUrl}/Refresh`;

export const ChangePasswordUrl = (userId: string) => 
`${baseUrl}/ChangePassword/${userId}`;

export const UpdatePasswordUrl = () => 
`${baseUrl}/UpdatePassword`;

export const VerifyEmailUrl = (userId: string) => 
`${baseUrl}/VerifyEmail/${userId}`;

export const RequestSmsVerificationUrl = () => 
`${baseUrl}/Sms/RequestVerification`;

export const SendSmsVerificationUrl = () => 
`${baseUrl}/Sms/SendVerification`;