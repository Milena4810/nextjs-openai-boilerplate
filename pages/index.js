// file: /pages/index.js
import Head from "next/head";
import { useState } from "react";
import TextInput from "@/components/TextInput";
import SubmitButton from "@/components/SubmitButton";
import ResponseDisplay from "@/components/ResponseDisplay";
import useApi from "@/hooks/useApi";
import ModeSelector from "@/components/ModeSelector";
import { getUserPrompt, getSystemPrompt } from "../prompts/promptUtils";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [mode, setMode] = useState("cooking"); // Default mode
  const { data, error, loading, fetchData } = useApi();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userPrompt = getUserPrompt(inputValue, mode);
    await fetchData("/api/openai", "POST", userPrompt);
  };

  return (
    <>
      <Head>
        <title>AI Cooking & Symptom Analysis</title>
      </Head>
      <main className="container">
        <h1>AI Cooking Skill Trainer & Symptom Checker</h1>
        <ModeSelector mode={mode} setMode={setMode} />
        <p>{mode === "cooking" ? "Enter a cooking skill you want to learn:" : "Describe your symptoms:"}</p>
        <form>
          <ResponseDisplay data={data} error={error} loading={loading} />
          <TextInput value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <SubmitButton onClick={handleSubmit} disabled={loading} />
        </form>
      </main>
    </>
  );
}
