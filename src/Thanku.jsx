
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/", { replace: true }); // ✅ prevents user from going back to thank-you
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
      <p className="text-lg text-center max-w-md mb-8">
        Your message has been submitted successfully. I’ll get back to you as
        soon as possible!
      </p>
      <button
        onClick={goHome}
        className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Go back to Home
      </button>
    </div>
  );
};

export default ThankYou;
