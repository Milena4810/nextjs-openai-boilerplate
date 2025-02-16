const ModeSelector = ({ mode, setMode }) => {
    return (
      <div className="mode-selector">
        <button className={mode === "cooking" ? "active" : ""} onClick={() => setMode("cooking")}>Cooking Trainer</button>
        <button className={mode === "symptom" ? "active" : ""} onClick={() => setMode("symptom")}>Symptom Analysis</button>
      </div>
    );
  };
  
  export default ModeSelector;
  