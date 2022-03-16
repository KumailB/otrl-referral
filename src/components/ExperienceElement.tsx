import React, { useState } from "react";

import { Menu } from "@headlessui/react";

type ExperienceElementProps = {
  survey: any;
  setTrySubmit: any;
  // survey: {
  //   sWorkTime: Number;
  //   sPressure: Number;
  //   sEthic: Number;
  //   sComplaints: Number;
  //   sRespect: Number;
  //   sReliable: Number;
  //   sTaskTime: Number;
  //   sTaskComplete: Number;
  //   sTaskCommunicate: Number;
  //   sFullTime: Number;
  //   sExperience: Number;
  // };
};

const ExperienceElement = ({
  survey,
  setTrySubmit,
}: ExperienceElementProps) => {
  const [option, setOption] = useState("Select an Option");

  return (
    <div className="flex gap-6 mt-8">
      <div className="mt-1">
        How long have they been working for the company?
      </div>
      <Menu as="div" className="relative">
        <Menu.Button className="inline-flex justify-between py-2 px-4 w-44 text-white bg-otrl-red hover:bg-otrl-light-red rounded-sm transition ease-in-out duration-400">
          {option}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="-mr-1 ml-2 w-5 h-5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </Menu.Button>
        <Menu.Items className="absolute right-0 w-full text-black rounded-sm shadow-xl origin-top-right">
          <Menu.Item>
            <a
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line no-param-reassign
                survey.sExperience = 1;
                setTrySubmit(false);
                setOption("Less than a year");
              }}
              className="group flex gap-2 items-center py-1 px-4 text-sm text-black hover:text-black bg-white hover:bg-otrl-pink rounded-sm border-b-2 border-b-white hover:border-b-otrl-red transition duration-400"
            >
              Less than a year
            </a>
          </Menu.Item>

          <Menu.Item>
            <a
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line no-param-reassign
                survey.sExperience = 2;
                setTrySubmit(false);
                setOption("1 to 2 years");
              }}
              className="group flex gap-2 items-center py-1 px-4 text-sm text-black hover:text-black bg-white hover:bg-otrl-pink rounded-sm border-b-2 border-b-white hover:border-b-otrl-red transition duration-400"
            >
              1 to 2 years
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line no-param-reassign
                survey.sExperience = 3;
                setTrySubmit(false);
                setOption("2 to 3 years");
              }}
              className="group flex gap-2 items-center py-1 px-4 text-sm text-black hover:text-black bg-white hover:bg-otrl-pink rounded-sm border-b-2 border-b-white hover:border-b-otrl-red transition duration-400"
            >
              2 to 3 years
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line no-param-reassign
                survey.sExperience = 4;
                setTrySubmit(false);
                setOption("3 to 4 years");
              }}
              className="group flex gap-2 items-center py-1 px-4 text-sm text-black hover:text-black bg-white hover:bg-otrl-pink rounded-sm border-b-2 border-b-white hover:border-b-otrl-red transition duration-400"
            >
              3 to 4 years
            </a>
          </Menu.Item>
          <Menu.Item>
            <a
              onClick={(e) => {
                e.preventDefault();
                // eslint-disable-next-line no-param-reassign
                survey.sExperience = 5;
                setTrySubmit(false);
                setOption("5+ years");
              }}
              className="group flex gap-2 items-center py-1 px-4 text-sm text-black hover:text-black bg-white hover:bg-otrl-pink rounded-sm border-b-2 border-b-white hover:border-b-otrl-red transition duration-400"
            >
              5+ years
            </a>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export { ExperienceElement };
