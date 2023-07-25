import { Message } from "@/store/state";
import { nonGuardInstance } from "./instance";
import { ResponseAPI } from "./types";

// not using token
export const signInService = (payload: string) => {
  return nonGuardInstance().get<ResponseAPI<Message[]>>(
    `/v1/ai-chat/conv-id/${payload}`
  );
};