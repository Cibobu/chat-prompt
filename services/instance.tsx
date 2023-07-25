import axios, { AxiosError, AxiosResponse } from "axios";
import { getLocalStorage, setToLocalStorage } from "../store/local_storage";
import { ResponseAPI, MethodAPI } from "./types";
import CryptoJS from "crypto-js"
const EXAMPLE_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string

// without auth guard
export const nonGuardInstance = () => {
  const instance = axios.create({
    baseURL: EXAMPLE_BACKEND_URL
  })
  return instance
}