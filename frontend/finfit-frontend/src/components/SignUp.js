import { useState } from "react";

function SignUp({ handleLoginClick }) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertMssg, setAlertMssg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlertMssg("Passwords do not match");
      return;
    }

    console.log(username, email, password);

    try {
      const response = await fetch("http://localhost:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          first_name: firstName,
          last_name: lastName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        alert("Sign Up successful!");
        window.location.href = "/User";
      } else {
        alert(data.error || "Sign Up failed");
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
          Register
        </h1>

        {alertMssg && (
          <div>
            <p className="text-red-500 text-center">{alertMssg}</p>
          </div>
        )}

        <div className="flex flex-col mb-4">
          <label className="font-semibold">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-gray-200 focus:outline-none focus:border-lime-500 bg-gray-100 p-2 rounded-md"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your Username"
            maxLength={256}
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="font-semibold">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border-2 border-gray-200 focus:outline-none focus:border-lime-500 bg-gray-100 p-2 rounded-md"
            type="text"
            placeholder="Enter your First Name"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="font-semibold">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-2 border-gray-200 focus:outline-none focus:border-lime-500 bg-gray-100 p-2 rounded-md"
            type="text"
            placeholder="Enter your Last Name"
            required
          />
        </div>

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
            minLength={8}
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="font-semibold">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border-2 border-gray-200 focus:outline-none focus:border-lime-500 bg-gray-100 p-2 rounded-md"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your Password"
            minLength={8}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-lime-500 hover:bg-lime-400 transition-all duration-200 ease-in-out text-white font-semibold rounded-xl"
        >
          Register
        </button>

        <p className="text-center mt-4">Already Have an Account?</p>
        <a
          className="text-lime-500 font-semibold text-center block mt-2 cursor-pointer"
          onClick={handleLoginClick}
        >
          Login
        </a>
      </form>
    </div>
  );
}

export default SignUp;
