
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

// Função helper para inicializar a IA apenas quando necessário
const getAI = () => {
  const apiKey = process.env.API_KEY || "";
  return new GoogleGenAI({ apiKey });
};

export const getAIResponse = async (context: 'faq' | 'technical' | 'admin', prompt: string) => {
  const model = context === 'admin' ? 'gemini-3-pro-preview' : 'gemini-3-flash-preview';
  
  const systemInstructions = {
    faq: "Você é o assistente inteligente do Vini Amaral. Responda dúvidas sobre desenvolvimento de software, metodologias ágeis e como contratar a consultoria. Seja conciso e elegante.",
    technical: "Você é um Arquiteto de Software. Analise requisitos e sugira stacks modernas (Next.js, Node, AWS). Foque em escalabilidade e performance.",
    admin: "Analise o lead e gere um relatório técnico de viabilidade com estimativa de horas e riscos."
  };

  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: model,
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: {
        systemInstruction: systemInstructions[context],
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Erro ao processar requisição.";
  }
};

export const generateTechnicalResponse = async (prompt: string, history: Message[]) => {
  const model = 'gemini-3-flash-preview';
  
  const contents = history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: model,
      contents: contents,
      config: {
        systemInstruction: "Você é um Arquiteto de Software. Analise requisitos e sugira stacks modernas (Next.js, Node, AWS). Foque em escalabilidade e performance.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Technical Error:", error);
    return "Erro ao processar requisição técnica.";
  }
};

export const generateProjectDoc = async (projectData: any) => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [{ role: 'user', parts: [{ text: `Gere um escopo técnico para o projeto: ${JSON.stringify(projectData)}` }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            architecture: { type: Type.STRING },
            timeline: { type: Type.ARRAY, items: { type: Type.STRING } },
            estimatedHours: { type: Type.NUMBER }
          }
        }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Doc Error:", error);
    return null;
  }
};
