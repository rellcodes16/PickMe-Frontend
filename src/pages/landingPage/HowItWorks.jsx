import Button from "../../UI/Button";

function HowItWorks() {
    const Steps = [
        {
          title: "Create Your Account",
          description: "Get started in seconds by signing up with your email. It's fast, secure, and free.",
        },
        {
          title: "Join or Create an Organization",
          description: "Start your own organization or accept an invite to join an existing one—perfect for schools, clubs, or teams.",
        },
        {
          title: "Add Voters with Ease",
          description: "Invite voters in bulk using emails. Whether new or existing users, PickMe handles the rest smoothly.",
        },
        {
          title: "Launch Voting Sessions",
          description: "Set up elections in minutes with customizable settings, positions, and timelines tailored to your needs.",
        },
        {
          title: "Access Real-Time Results",
          description: "Once voting ends, view real-time analytics and share compiled results instantly with your voters.",
        },
      ];
      
    
      return (
        <section className="w-full px-6 md:px-16 py-20 bg-white text-center min-h-[620px]">
  <h2 className="text-3xl font-bold text-violet-700 mb-1">How it Works?</h2>
  <p className="italic text-lg text-gray-600 mb-12">Get started with just a few steps.</p>

  <div className="grid gap-8 md:grid-cols-3">
    {Steps.slice(0, 3).map((feature, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-6 space-y-4 transition duration-300"
      >
        <h3 className="text-xl font-semibold text-gray-800">{index + 1}</h3>
        <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    ))}
    <div className="md:col-span-3 md:flex justify-center gap-8 mb-3 grid grid-cols-1">
      {Steps.slice(3).map((feature, index) => (
        <div
          key={index + 3}
          className="bg-white rounded-xl p-6 space-y-4 transition duration-300 w-full md:w-[370px]"
        >
          <h3 className="text-xl font-semibold text-gray-800">{index + 4}</h3>
          <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
  <Button type='primary'>Get Started</Button>
</section>

      );
}

export default HowItWorks
