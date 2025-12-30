import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:process.env.GOOGLE_API_KEY});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "is the api key that i am using fee or billed ",
  });
  console.log(response.text);
}

await main();