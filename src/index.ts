import { GoogleGenerativeAI } from "@google/generative-ai";
import { input } from "@inquirer/prompts";
import { envConfig } from "./envConfig.js";

export async function geminiClient() {
  envConfig();

  const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt = await input({ message: "Enter your prompt", required: true });

  const result = await model.generateContent(prompt);

  const modelResponse = result.response.text();
  return modelResponse;
}

const query = await geminiClient();
console.log(query);
