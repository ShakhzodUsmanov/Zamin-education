import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start w-1/2 gap-6">
        <h1 className="h1-header">
          Zamin Ta’lim platformasi orqali kelajak kasbini o’rganing!
        </h1>
        <p className="p-ghost">
          Biz sizga eng yuqori darajadagi kasblarni zamonaviy metodika asosida
          o’rgatamiz va o’z sohangiz mutaxassisi bo’lishingizga ko’maklashamiz
        </p>
        <div className="flex mt-10">
          <Button className="shad-button_primary">Bizning kurslar</Button>
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default Home;
