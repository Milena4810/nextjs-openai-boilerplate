// file: /prompts/promptUtils.js
export function getSystemPrompt(mode) {
  if (mode === "cooking") {
    return {
      role: "system",
      content: "You are an expert cooking instructor who provides step-by-step guidance on cooking skills and techniques.",
    };
  } else {
    return {
      role: "system",
      content: "You are a medical assistant providing general insights on symptoms based on user descriptions.",
    };
  }
}

export function getUserPrompt(input, mode) {
  if (mode === "cooking") {
    return {
      role: "user",
      content: `Provide step-by-step instructions for learning the cooking skill: "${input}". Include common mistakes, hand movements, and expert tips.`,
    };
  } else {
    return {
      role: "user",
      content: `Analyze the following symptoms: "${input}". Provide possible causes and whether medical attention is needed.`,
    };
  }
}

export function getFunctions() {
  return [
    {
      name: "generate_response",
      description: "Generate structured responses based on the user's input.",
      parameters: {
        type: "object",
        properties: {
          title: { type: "string", description: "The title of the response" },
          steps: { type: "array", items: { type: "string" }, description: "Step-by-step instructions or analysis" },
          expert_tips: { type: "array", items: { type: "string" }, description: "Additional expert tips or insights" },
        },
        required: ["title", "steps"],
      },
    },
  ];
}