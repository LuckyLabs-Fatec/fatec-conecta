import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
import { Button } from "../atoms/button";

import BibliotecaItinerante from "../../assets/onibus.jpg";
import ConstrucoesSustentaveis from "../../assets/construcoes-sustentaveis.jpg";

import "swiper/css";

export const CustomCarousel = () => (
  <Swiper
    modules={[Autoplay, Parallax]}
    spaceBetween={50}
    slidesPerView={1}
    className="w-full"
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    parallax={true}
    loop={true}
  >
    <SwiperSlide>
        <div
          className="rounded-sm w-full h-[400px] bg-cover bg-center p-4 flex flex-col justify-between"
          style={{ backgroundImage: `url(${BibliotecaItinerante.src})` }}
        >
          <span>
          <h1 className="text-5xl text-black font-bold" data-swiper-parallax="-300">Biblioteca Itinerante</h1>
          <p className="text-black text-xl" data-swiper-parallax="-200">Um ônibus customizado como uma biblioteca itinerante está em Natal até o dia 14 de julho. A iniciativa do projeto Livros nas Praças tem como principal objetivo a democratização do acesso da população ao universo literário. Mais de 2 mil livros estão à disposição para leitura, de forma gratuita.</p>
          <p className="text-black text-xl" data-swiper-parallax="-100">O ônibus fica na Praça Augusto Leite, no bairro Tirol, até sábado (8), das 10h às 16h. Em seguida, no período de 10 a 14 de julho, a biblioteca itinerante estará na Praça das Flores, em Petrópolis, no mesmo horário. </p>
          </span>
        <Button className="px-10 py-6 uppercase" data-swiper-parallax="-50">Leia +</Button>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div
          className="rounded-sm w-full h-[400px] bg-cover bg-center p-4 flex flex-col justify-between"
          style={{ backgroundImage: `url(${ConstrucoesSustentaveis.src})` }}
        >
          <span>
          <h1 className="text-5xl text-black font-bold" data-swiper-parallax="-300">Construção Sustentável</h1>
          <p className="text-black text-xl" data-swiper-parallax="-100">Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.</p>
          </span>
        <Button className="px-10 py-6 uppercase" data-swiper-parallax="-50">Leia +</Button>
        </div>
    </SwiperSlide>
  </Swiper>
)