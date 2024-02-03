import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Card from "./Card";

const CardCarousel = () => {
  return (
    <div className="card-carousel">
      <div className="card-carousel flex justify-between flex-col">
        <h3 className="h2-title-joss w-full">Bizning kurslar</h3>
        <p className="p-ghost w-full items-center flex leading-[175%] mt-4">
          Sizda ham shu fikr paydo bo’ldimi? Hozir sizga qisqacha tushuntiramiz
        </p>
      </div>

      <Carousel className="mt-[100px] ">
        <CarouselContent className="gap-10">
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Card />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Card />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Card />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Card />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Card />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4 flex justify-center items-center">
            <Card />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CardCarousel;
