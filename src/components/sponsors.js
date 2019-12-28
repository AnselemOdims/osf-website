import React from "react";

import { sponsors, patterns } from "../components/cloudImages";

const sponsorsData = [
  {
    tier: "headline",
    companyName: "Google",
    image: sponsors.google,
    link: "https://opensource.google/"
  },
  {
    tier: "headline",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "https://opensource.facebook.com/"
  },
  {
    tier: "headline",
    companyName: "Google",
    image: sponsors.google,
    link: ""
  },
  {
    tier: "headline",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "diamond",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "diamond",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "diamond",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "diamond",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "gold",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "gold",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "gold",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "gold",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "silver",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "silver",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "silver",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "silver",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "bronze",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "bronze",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  },
  {
    tier: "bronze",
    companyName: "Google",
    image: sponsors.google,
    link: "#"
  },
  {
    tier: "bronze",
    companyName: "Facebook",
    image: sponsors.facebook,
    link: "#"
  }
];

function Sponsors() {
  return (
    <section id="sponsors" className="bg-white-smoke md:flex-row px-4 lg:px-40 pt-12 pb-24 lg:pt-24">
      <div className="absolute left-0 fixed">
        <img className="-mt-8 lg:-mt-12 -pl-4" src={patterns.headerRec} alt="An Africa Pattern Design" />
      </div>
      <div className="flex flex-wrap">
        <div className="mb-8 md:mb-12 w-full md:w-1/2 text-dark-blue-primary">
          <h1 className="text-5xl font-bold font-ubuntu">Sponsors</h1>
        </div>
        <div className="w-full hidden md:block md:w-1/2 mt-6">
          <img src={patterns.speakers} alt="" className="w-auto" />
        </div>
      </div>

      <div className="my-8">
        {/* Headline Sponsors */}
        <h1 className="line font-bold">
          Headline <span></span>
        </h1>
        <div className="mt-4 mb-8 lg:my-6 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("headline"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full md:w-1/4 max-w-sm rounded my-6 px-2 md:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Diamond Sponsors */}
        <h1 className="line font-bold">
          Diamond <span></span>
        </h1>
        <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("diamond"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full md:w-1/4 max-w-sm rounded my-6 px-2 md:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Gold Sponsors */}
        <h1 className="line font-bold">
          Gold <span></span>
        </h1>
        <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("gold"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full md:w-1/4 max-w-sm rounded my-6 px-2 md:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Silver Sponsors */}
        <h1 className="line font-bold">
          Silver <span></span>
        </h1>
        <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("silver"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full md:w-1/4 max-w-sm rounded my-6 px-2 md:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>

        {/* Bronze Sponsors */}
        <h1 className="line font-bold">
          Bronze <span></span>
        </h1>
        <div className="mt-4 mb-8 md:mt-2 md:mb-8 flex flex-wrap">
          {sponsorsData
            .filter(data => data.tier.includes("bronze"))
            .map(sponsors => (
              <a
                href={sponsors.link}
                key={sponsors.companyName}
                className="relative w-full h-full md:w-1/4 max-w-sm rounded my-6 px-2 md:my-8"
              >
                <figure className="w-full">
                  <img className="w-auto mx-auto" src={sponsors.image} alt={`${sponsors.name}'s Logo`} />
                </figure>
              </a>
            ))}
        </div>
      </div>

      <div className="relative mt-12 text-center">
        <a
          href="https://opencollective.com/osca/"
          className="bg-orange-primary text-brown px-6 py-4 rounded-lg uppercase"
        >
          Become a Sponsor
        </a>
      </div>
    </section>
  );
}

export default Sponsors;
