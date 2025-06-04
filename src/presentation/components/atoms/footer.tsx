import Image from "next/image";

export const Footer = () => (
  <footer 
    className="flex w-full justify-between p-4 border-t-4 border-[#AD0F0A] bg-[#F7F7F7]"
  >
    <Image src="./fatec.svg" width={149} height={52} alt="logo fatec" />
    <Image src="./cps.svg" width={100} height={36} alt="logo cps" />
  </footer>
)