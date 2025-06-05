//import axios from "axios";
//export const sendOTP = async (email: string) => {
//  return await axios.post("/api/send-otp", { email });
//};
import { CreateUserData } from "../types/types";

export const sendOTP = async (email: string): Promise<{ onboarding_id: string }> => {
  const res = await fetch('http://localhost:3001/api/onboarding', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error('Error sending OTP');
  }

  return await res.json();
};

export const verifyOTP = async (onboarding_id: string, otp: string): Promise<boolean> => {
  const res = await fetch('http://localhost:3001/api/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ onboarding_id, otp }),
  });

  const result = await res.json();
  return result.success === true;
};

export const resendOTP = async (email: string, onboarding_id: string): Promise<boolean> => {
  const res = await fetch('http://localhost:3001/api/resend-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, onboarding_id }),
  });

  return res.ok;
};

export const completeRegistration = async (data: CreateUserData): Promise<boolean> => {
  const res = await fetch('http://localhost:3001/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  return result.success === true;
};