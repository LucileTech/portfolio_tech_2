import React, { useRef } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Avatar,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
        <div className="absolute top-0 h-full w-full bg-black bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Lucile Tronczyk
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Full-Stack Software Engineer & Web Developer 👩‍💻 | Career
                transitioner 🎯 10yoe in Film & TV industry
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>

          <section className="relative block h-[50vh]">
            <div className="absolute top-0 h-full w-full bg-cover bg-center" />
          </section>
          <section className="relative px-4 py-16">
            <div className="container mx-auto">
              <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                      <div className="relative">
                        <div className="-mt-20 w-40">
                          <Avatar
                            src="/img/LucileTech.jpeg"
                            alt="Profile picture"
                            variant="circular"
                            className="h-full w-full shadow-xl"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                      <IconButton color="white" className="rounded-full">
                        <Typography color="black">
                          <i className={`fa-brands fa-github`} />
                        </Typography>
                      </IconButton>
                    </div>
                    <div className="w-full px-4 lg:order-1 lg:w-4/12">
                      <div className="flex justify-center py-4 pt-8 lg:pt-4"></div>
                    </div>
                  </div>
                  <div className="my-8 text-center">
                    <Typography variant="h2" color="blue-gray" className="mb-2">
                      Lucile Tronczyk
                    </Typography>
                    <div className="mb-16 flex items-center justify-center gap-2">
                      <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                      <Typography className="font-medium text-blue-gray-700">
                        In person, California & Remote, USA
                      </Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                      <Typography className="font-medium text-blue-gray-700">
                        Web Developer - Full Stack Software Engineer
                      </Typography>
                    </div>
                    <div className="mb-2 flex items-center justify-center gap-2">
                      <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                      <Typography className="font-medium text-blue-gray-700">
                        Ironhack Bootcamp
                      </Typography>
                      <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                      <Typography className="font-medium text-blue-gray-700">
                        Master's Degree Paris I Panthéon Sorbonne
                      </Typography>
                    </div>
                  </div>

                  <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                    <div className="mt-2 flex flex-wrap justify-center">
                      <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                        <Typography className="mb-8 font-normal text-blue-gray-500">
                          Career transitioner now wholeheartedly devoted to
                          crafting efficient code that contributes to building a
                          better world. 🌱 Bringing 10 years of expertise from
                          the film and archives fast-paced industry.
                        </Typography>
                        {/* <Button variant="text">Show more</Button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-32 flex flex-wrap items-center">
            {/* <div className="mx-auto -mt-8 w-full px-4 md:w-5/12"> */}
            {/* <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div> */}
            {/* <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="outlined">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className="px-4 pb-48 pt-20">
        <div className="container mx-auto">
          <PageTitle heading="My projects"></PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-24">
        <div className="container mx-auto">
          {/* <PageTitle heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle> */}
          {/* <div className="mx-auto mb-48 mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div> */}
          <PageTitle heading="Let's connect"></PageTitle>
          <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
