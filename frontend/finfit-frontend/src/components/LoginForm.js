import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      const response = await fetch("http://localhost:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        alert("Login successful!");
        window.location.href = "/User"; // or navigate("/User")
      } else {
        alert(data.error || "Login failed");
      }
    } catch (err) {
      alert("Something went wrong. Try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] mx-auto p-8 rounded-md shadow-lg bg-white"
      >
        <h1 className="text-3xl text-center font-sora font-bold py-8 text-green-600">
          Welcome Back!
        </h1>


                <button type="submit" className="w-full py-3 mt-4 bg-lime-500 hover:bg-lime-400 transition-all duration-200 ease-in-out text-white font-semibold rounded-xl">
                    Login
                    
                </button>

        <div className="flex flex-col mb-4">
          <label className="font-semibold">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-200 focus:outline-none focus:border-lime-500 bg-gray-100 p-2 rounded-md"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="font-semibold">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-gray-200 focus:outline-none focus:border-lime-500 bg-gray-100 p-2 rounded-md"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your Password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-lime-500 hover:bg-lime-400 transition-all duration-200 ease-in-out text-white font-semibold rounded-xl"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
