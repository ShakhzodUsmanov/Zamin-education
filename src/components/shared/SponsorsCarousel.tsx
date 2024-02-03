import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

const SponsorsCarousel = () => {
  return (
    <div className="sponsors">
      <div className="sponsors-header flex justify-between lg:flex-row flex-col">
        <h3 className="h2-title-joss w-full lg:w-1/3">
          Biz bilan hamkor bo’lgan tashkilotlar bilan tanishing!
        </h3>
        <p className="p-ghost w-full lg:w-1/2 items-center flex leading-[175%]">
          Biz mamlakatimizdagi eng nufuzli tashkilotlar bilan birgalikda
          hamkorlik qilamiz va ularga ishonamiz. Siz ham bizning safimizga
          qo’shilishingiz mumkin. Imkoniyatlardan foydalaning
        </p>
      </div>

      <Carousel className="mt-[100px]">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex justify-center items-center">
            <img src="/assets/sponsors/dgu.svg" alt="logo"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex justify-center items-center">
            <img src="/assets/sponsors/mitc.svg" alt="logo"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex justify-center items-center">
            <img src="/assets/sponsors/najot-talim.svg" alt="logo"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex justify-center items-center">
            <img src="/assets/sponsors/pdp.svg" alt="logo"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex justify-center items-center">
            <img src="/assets/sponsors/sde.svg" alt="logo"/>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/5 flex justify-center items-center">
            <img src="/assets/sponsors/dgu.svg" alt="logo"/>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SponsorsCarousel;
