import Image from "next/image";

export const AsideBranding = () => (
  <aside className="flex md:flex-col justify-center items-center bg-[#AD0F0A] md:flex-1">
    <span className="flex items-center gap-4 md:flex-col md:gap-0">
      <Image className="w-[100px] md:w-[285px]" src="./logo.svg" width={285} height={285} alt="fatec conecta logo" />
      <h1 className="text-white uppercase text-center font-bold text-2xl">Conecta</h1>
    </span>
  </aside>
)