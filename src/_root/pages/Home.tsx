import PhotoGrid from "@/components/shared/PhotoGrid";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home mt-10">
      <header className="header flex">
        <div className="flex flex-col justify-start items-start w-1/2 gap-6">
          <h1 className="h1-header">
            Zamin Ta’lim platformasi orqali kelajak kasbini o’rganing!
          </h1>
          <p className="p-ghost">
            Biz sizga eng yuqori darajadagi kasblarni zamonaviy metodika asosida
            o’rgatamiz va o’z sohangiz mutaxassisi bo’lishingizga ko’maklashamiz
          </p>
          <div className="flex mt-10">
            <Button className="shad-button_primary w-[200px]">
              Bizning kurslar
            </Button>
          </div>
        </div>
        <div className="header-img">
          <img src="/assets/img/header-img.svg" alt="" />
        </div>
      </header>

      <section className="sec-about md:flex gap-10 mt-[140px] ">
        <div className="">
          <img src="/assets/img/sec-about.svg" alt="" />
        </div>
        <div className="flex flex-col justify-start items-start w-1/2 gap-6">
          <h2 className="h2-title">Zamin Education haqida qisqacha</h2>
          <p className="p-ghost">
            “Zamin Education” loyihasining ilk sinov-tajriba o‘quv jarayoni
            Muhammad Al-Xorazmiy nomidagi axborot-texnologiyalarini
            chuqurlashtirib o‘rgatishga ixtisoslashgan maktabda amalga
            oshirilmoqda.
          </p>
          <div className="flex mt-10">
            <Link to="about">
              <Button className="shad-button_primary w-[200px]">
                Batafsil
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec-photo-grid mt-[100px]">
        <h3 className="h3-title text-center">Foto Galereya</h3>
        <p className="p-ghost text-center mt-5">
          Bizning kundalik faoliyatlarimiz haqida ushbu media bilan tanishing
        </p>
        <div className="mt-12 w-full">
          <PhotoGrid />
        </div>
      </section>

    </div>
  );
};

export default Home;
