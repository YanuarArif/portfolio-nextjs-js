import Image from "next/image";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import DevImg from "./shared/DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Yanuar Lukman Arif",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "0857 2530 0663",
  },
  {
    icon: <MailIcon size={20} />,
    text: "yanuarlukmanarif@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "1 Januari 1997",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "SMK - TKJ",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Purbalingga",
  },
];

const qualificationData = [
  {
    title: "pendidikan",
    data: [
      {
        sekolah: "SMK Muhammadiyah Bobotsari",
        jurusan: "Teknik Komputer Jaringan",
        lulusan: "2015 - 2019",
      },
      {
        sekolah: "SMK Muhammadiyah Bobotsari",
        jurusan: "Teknik Komputer Jaringan",
        lulusan: "2015 - 2019",
      },
      {
        sekolah: "SMK Muhammadiyah Bobotsari",
        jurusan: "Teknik Komputer Jaringan",
        lulusan: "2015 - 2019",
      },
    ],
  },
  {
    title: "pengalaman",
    data: [
      {
        perusahaan: "Barling Reload",
        jabatan: "Administrator",
        tahun: "2021 - 2022",
      },
      {
        perusahaan: "Barling Reload",
        jabatan: "Administrator",
        tahun: "2021 - 2022",
      },
      {
        perusahaan: "Barling Reload",
        jabatan: "Administrator",
        tahun: "2021 - 2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "Javascript",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          Tentang Saya
        </h2>
        <div className="flex">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/foto-pribadi-about.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Info Pribadi
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="kualifikasi">
                  Kualifikasi
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal content info */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Pengalaman lebih dari 3 Bulan</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Sebenarnya saya masih dalam proses belajar web programming
                      dan belum mempunyai pengalaman kerja seputar Programmer
                      .hehe
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}>
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Jawa, Indonesia, English, Arab</div>
                    </div>
                  </div>
                </TabsContent>
                {/* kualifikasi content info */}
                <TabsContent value="kualifikasi">
                  <div className="flex flex-col items-center justify-center mx-auto">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      Perjalanan Karir
                    </h3>
                    {/* Pengalaman dan Pendidikan wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Pengalaman */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "pengalaman").title}
                          </h4>
                        </div>
                        {/* list pengalaman */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "pengalaman").data.map(
                            (item, index) => {
                              const { perusahaan, jabatan, tahun } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  {/* animasi garis start */}
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] bg-primary rounded-full absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  {/* animasi end */}
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {perusahaan}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {jabatan}
                                    </div>
                                    <div className="text-base font-medium">
                                      {tahun}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Pendidikan */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "pendidikan").title}
                          </h4>
                        </div>
                        {/* list pendidikan */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "pendidikan").data.map(
                            (item, index) => {
                              const { sekolah, jurusan, lulusan } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  {/* animasi garis start */}
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] bg-primary rounded-full absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  {/* animasi end */}
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {sekolah}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {jurusan}
                                    </div>
                                    <div className="text-base font-medium">
                                      {lulusan}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills content info */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      Tools Yang Saya Gunakan Setiap Hari
                    </h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-1/2 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}>
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tools list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                alt=""
                                width={48}
                                height={48}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
