// file: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <div className="response-display">
      <h2>{data.result.title}</h2>
      <ul>
        {data.result.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
      {data.result.expert_tips && (
        <>
          <h3>Expert Tips:</h3>
          <ul>
            {data.result.expert_tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ResponseDisplay;
