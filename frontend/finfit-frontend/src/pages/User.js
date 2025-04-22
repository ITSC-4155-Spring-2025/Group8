import { useState, useEffect } from "react";
import UserNavBar from "../components/UserNavBar";
import Footer from "../components/Footer";
import Reward from "../components/Reward";

function User() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [points, setPoints] = useState(0);

  const rewards = [
    {
      id: 1,
      imageSrc: "/gamingchair.webp",
      title: "SecretLab Gaming Chair",
      buttonText: "Redeem",
      points: "500",
    },
    {
      id: 2,
      imageSrc: "/ps5.jpg",
      title: "Sony PlayStation 5",
      buttonText: "Redeem",
      points: "1000",
    },
    {
      id: 3,
      imageSrc: "/iphone16promax.jpg",
      title: "iPhone 16 Pro Max",
      buttonText: "Redeem",
      points: "2500",
    },
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await fetch(
          "http://localhost:8000/api/user/profile/",
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch user data");

        const data = await response.json();
        setUsername(data.username);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setPoints(data.points);
      } catch (error) {
        console.error("Error loading user profile:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_top,_#d1fae5,_#ffffff_60%,_#d1fae5)]">
      <UserNavBar />
      <div className="px-6 mt-12 mb-6 max-w-4xl mx-auto w-full">
        <div className="relative bg-white shadow-xl rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start overflow-hidden transition-all duration-500 hover:shadow-2xl">
          <div className="absolute -top-10 -left-10 w-52 h-52 bg-green-200 rounded-full blur-3xl opacity-30 z-[-1]" />

          <img
            src="/my-image.png"
            alt="ProfilePic"
            className="w-28 h-28 object-cover rounded-full border-4 border-green-300 shadow-md"
          />

          <div className="md:ml-6 mt-4 md:mt-0 flex-1">
            <h2 className="text-3xl font-bold text-gray-800 font-sora">
              {firstName} {lastName}{" "}
              <span className="text-sm text-gray-500">({username})</span>
            </h2>
            <p className="text-green-600 mt-1 font-semibold">Charlotte, NC</p>
            <p className="text-gray-600 mt-2">
              College student learning finance with FinFit 🎓💸
            </p>
          </div>

          <div className="md:ml-auto mt-6 md:mt-0 text-right">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mb-4 transition duration-300">
              Edit Profile
            </button>
            <div className="bg-gray-100 rounded-2xl p-4 shadow-inner">
              <h2 className="text-md font-semibold text-gray-700">
                Your Points
              </h2>
              <p className="font-bold text-3xl text-purple-600 mt-1 transition-all duration-300 hover:scale-105">
                {points}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-4 bg-white">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-12 font-sora">
          🎁 Your Available Rewards 🎁
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="transition-transform duration-300 hover:scale-105"
            >
              <Reward
                imageSrc={reward.imageSrc}
                title={reward.title}
                buttonText={reward.buttonText}
                points={reward.points}
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default User;
