import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "../constants/constant";

const googleGenAI = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

export default googleGenAI;