import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';

export async function geminiClient() {

    const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = ``;

    const result = await model.generateContent(prompt);

    const modelResponse = result.response.text();
    return modelResponse;
}
const query = await geminiClient()
console.log(query);