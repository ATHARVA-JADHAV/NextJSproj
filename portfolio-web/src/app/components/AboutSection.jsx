import React from "react";

const AboutSection = () => {
  return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <video width="600" controls>
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>About Me</h2>
      <p>
        I am a web developer based in San Francisco, CA. I have a passion for
        building web applications that are user-friendly and visually appealing.
      </p>
      </div>
    </section>
  );
};
export default AboutSection;