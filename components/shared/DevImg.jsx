import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} `}>
      <Image
        src={imgSrc}
        alt=""
        priority
        fill
        // style={{
        //   objectFit: "cover",
        // }}
      />
    </div>
  );
};

export default DevImg;
