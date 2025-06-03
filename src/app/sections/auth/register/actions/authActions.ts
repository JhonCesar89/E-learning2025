//import axios from "axios";
//export const sendOTP = async (email: string) => {
//  return await axios.post("/api/send-otp", { email });
//};

export const sendOTP = async (email: string): Promise<{ onboarding_id: string }> => {
  console.log(`Enviando OTP a ${email}`);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ onboarding_id: "mock-onboarding-id-00001" }); // Simulated onboarding_id
    }, 1000)
  );
};

export const verifyOTP = async (onboarding_id: string, otp: string): Promise<boolean> => {
  console.log(`Verificando OTP ${otp} para onboarding_id ${onboarding_id}`);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(otp === "123456"); // Accepts only mock OTP
    }, 1000)
  );
};

// Simulated resendOTP function that accepts both email and onboarding_id
export const resendOTP = async (
  email: string,
  onboarding_id: string
): Promise<boolean> => {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Reenviar OTP a ${email} con onboarding_id ${onboarding_id}`);
      resolve(true);
    }, 1000)
  );
};
