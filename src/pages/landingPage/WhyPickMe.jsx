import { FaShieldAlt, FaUsersCog, FaChartBar } from "react-icons/fa";

function WhyPickMe() {
  const features = [
    {
      title: "Secure & Transparent Voting",
      icon: <FaShieldAlt className="w-10 h-10 text-violet-700" />,
      description:
        "Your votes are protected with end-to-end encryption, ensuring fairness and integrity every step of the way.",
    },
    {
      title: "Effortless Setup & Smart Invites",
      icon: <FaUsersCog className="w-10 h-10 text-violet-700" />,
      description:
        "Create elections in minutes and invite voters or admins easily—PickMe handles new and existing users smoothly.",
    },
    {
      title: "Real-Time Results & Instant Notifications",
      icon: <FaChartBar className="w-10 h-10 text-violet-700" />,
      description:
        "Stay informed with live analytics for admins and automatic result delivery for voters, both in-app and via email.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-16 py-16 bg-white text-center min-h-[550px]">
      <h2 className="text-3xl font-bold text-violet-700 mb-12">Why PickMe?</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 space-y-4 hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyPickMe;
