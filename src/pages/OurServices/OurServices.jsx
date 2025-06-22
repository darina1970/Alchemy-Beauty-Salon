import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { headerConfigs } from "../../config/headerConfigs";
import hair from "../../assets/images/Services/hair.webp";
import nails from "../../assets/images/Services/nails.webp";
import look from "../../assets/images/Services/look.webp";
import tan from "../../assets/images/Services/tan.webp";
import ServiceCard from "./ServiceCard";

const ServicesPage = () => {
  const services = [
    {
      title: "комната волос",
      description:
        "Здесь алхимики-колористы и алхимики -парикмахеры проводят эксперименты по созданию шедевров из волос. Магические зелья из тюбиков и бутылей льются на головы и создают нечто неотразимое.. Волшебные зеркала отражают в себе превращения и принимают восторженную энергию отражаемых. Всё это действительно за гранью волшебства!",
      image: hair,
      variant: "light",
      path: "/services/hair",
    },
    {
      title: "комната ноготков",
      description:
        "В этой комнате безраздельно властвует алхимик-ногтевик Алина. Разноцветные баночки, блестки, кисточки - в этой комнате глаза разбегаются быстрее, чем в остальных - ведь ноготков всего двадцать, а шедевров из всего этого можно создать минимум миллион!",
      image: nails,
      variant: "dark",
      path: "/services/nails",
    },
    {
      title: "комната взгляда",
      description:
        "Глаза - зеркало души, а чтоб в это зеркало хотелось смотреть не отрываясь, в нашем бьюти-подземелье есть алхимик-бровист. В её комнате баночки, скляночки, щеточки, пинцеты и... волшебные ручки, ведь без них все эти баночки не сработают.",
      image: look,
      variant: "light",
      path: "/services/look",
    },
    {
      title: "комната загара",
      description:
        'В этой комнате нет алхимиков. Разве что дежурный "Главный алхимик" проводит в неё, а потом тщательно всё уберёт. В этой комнате стоит мощный алхимический аппарат загара. Выйдя из которого ты себя не узнаешь, ведь твоя кожа приобретёт сияние и волшебный бронзовый оттенок!',
      image: tan,
      variant: "dark",
      path: "/services/tan",
    },
  ];

  return (
    <MainLayout headerProps={headerConfigs.services}>
      <section className="services">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
