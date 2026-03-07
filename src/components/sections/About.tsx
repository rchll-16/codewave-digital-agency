import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";

const About = () => {
  const team = [
    {
      avatar: team1,
      name: "Alex Carter",
      position: "Co-Founder & CEO",
    },
    {
      avatar: team2,
      name: "Maria Gomez",
      position: "Operations Director",
    },
    {
      avatar: team3,
      name: "James Lee",
      position: "HR Director",
    },
  ];

  return (
    <div>
      <section
        id="about"
        className="relative py-16 md:py-34 bg-gradient-to-b from-white via-red-50/30 to-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 bg-red-400/20 blur-[120px] animate-hero-bg" />
        <div className="absolute -bottom-40 -left-40 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/20 blur-[120px] animate-hero-bg" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-16 md:mb-20 animate-fade-up">
            <h1 className="poppins-bold text-3xl sm:text-4xl md:text-5xl mb-6 animate-fade-up">
              The People Behind Our <span className="text-red-600">Success</span>
            </h1>

            <p className="poppins-light text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed animate-fade-up [animation-delay:0.15s]">
              A passionate team of designers, developers, and strategists dedicated to building
              impactful digital experiences.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.2}s` }}
                className="group bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-100 
                     shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center animate-fade-up"
              >
                {/* Avatar */}
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-red-400/20 rounded-full blur-2xl" />

                  <img
                    src={member.avatar}
                    alt="Team Member"
                    className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-lg 
                          transition duration-500 group-hover:scale-105 animate-scale"
                  />
                </div>

                {/* Name */}
                <h5 className="poppins-semibold text-base sm:text-lg group-hover:text-red-600 transition">
                  {member.name}
                </h5>

                {/* Position */}
                <p className="poppins-regular text-xs sm:text-sm text-gray-500 mt-2">
                  {member.position}
                </p>

                {/* Divider */}
                <div className="w-8 sm:w-10 h-1 bg-red-500 mx-auto mt-4 rounded-full opacity-60 group-hover:w-16 transition-all duration-300 animate-fade" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
