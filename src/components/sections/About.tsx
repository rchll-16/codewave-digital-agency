

const About = () => {
    const team = [
      {
        avatar: "src/assets/team2.png",
        name: "Alex Carter",
        position: "Co-Founder & CEO",
      },
      {
        avatar: "src/assets/team1.png",
        name: "Maria Gomez",
        position: "Operations Director",
      },
      {
        avatar: "src/assets/team3.png",
        name: "James Lee",
        position: "HR Director",
      },
    ];

  return (
    <div>
      <section
        id="about"
        className="relative py-34 bg-linear-to-b from-white via-red-50/30 to-white overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-125 h-125 bg-red-400/20 blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-red-600/20 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-24">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h1 className="poppins-bold text-4xl md:text-5xl mb-6">
              The People Behind Our <span className="text-red-600">Success</span>
            </h1>
            <p className="poppins-light text-gray-600 max-w-xl mx-auto leading-relaxed">
              A passionate team of designers, developers, and strategists dedicated to building
              impactful digital experiences.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 text-center"
              >
                {/* Avatar */}
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute w-40 h-40 bg-red-400/20 rounded-full blur-2xl"></div>

                  <img
                    src={member.avatar}
                    alt="Team Member"
                    className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h5 className="poppins-semibold text-lg group-hover:text-red-600 transition">
                  {member.name}
                </h5>

                {/* Position */}
                <p className="poppins-regular text-sm text-gray-500 mt-2">{member.position}</p>

                {/* Optional subtle divider */}
                <div className="w-10 h-1 bg-red-500 mx-auto mt-4 rounded-full opacity-60 group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About