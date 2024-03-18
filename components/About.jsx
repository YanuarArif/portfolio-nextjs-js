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
    title: "Pendidikan",
    data: [
      {
        sekolah: "SMK Muhammadiyah Bobotsari",
        Jurusan: "Teknik Komputer Jaringan",
        Lulusan: "2015 - 2019",
      },
      {
        sekolah: "SMK Muhammadiyah Bobotsari",
        Jurusan: "Teknik Komputer Jaringan",
        Lulusan: "2015 - 2019",
      },
      {
        sekolah: "SMK Muhammadiyah Bobotsari",
        Jurusan: "Teknik Komputer Jaringan",
        Lulusan: "2015 - 2019",
      },
    ],
  },
  {
    title: "Pengalaman",
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
            <Tabs>
              <TabsList>
                <TabsTrigger value="personal">Info Pribadi</TabsTrigger>
                <TabsTrigger value="kualifikasi">Kualifikasi</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div>
                <TabsContent value="personal">daftar info personal</TabsContent>
                <TabsContent value="kualifikasi">
                  daftar info kualifikasi
                </TabsContent>
                <TabsContent value="skills">daftar info skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
