import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyDo0jIflaZecrKbgk2f7DjdouuGB2tohlw");
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

async function test() {
  try {
    const result = await model.generateContent("Hello!");
    console.log("SUCCESS:", result.response.text());
  } catch (error) {
    console.error("ERROR:", error);
  }
}

test();
