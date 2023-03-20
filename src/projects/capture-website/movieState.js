//Import Images
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";
import athletegallery1 from "./img/athlete-gallery1.jpg";
import athletegallery2 from "./img/athlete-gallery2.jpg";
import athletegallery3 from "./img/athlete-gallery3.jpg";
import goodtimesgallery1 from "./img/good-times-gallery1.jpg";
import goodtimesgallery2 from "./img/good-times-gallery2.jpg";
import goodtimesgallery3 from "./img/good-times-gallery3.jpg";
import racergallery1 from "./img/racer-gallery1.jpg";
import racergallery2 from "./img/racer-gallery2.jpg";
import racergallery3 from "./img/racer-gallery3.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/projects/Photography%20&%20Movies%20website/2/work/the-athlete",
      
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
      gallery: [
        {
          galleryImage: athletegallery1,
          id: "1",
        },
        {
          galleryImage: athletegallery2,
          id: "2",
        },
        {
          galleryImage: athletegallery3,
          id: "3",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/projects/Photography%20&%20Movies%20website/2/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
      gallery: [
        {
          galleryImage: goodtimesgallery1,
          id: "4",
        },
        {
          galleryImage: goodtimesgallery2,
          id: "5",
        },
        {
          galleryImage: goodtimesgallery3,
          id: "6",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/projects/Photography%20&%20Movies%20website/2/work/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
      gallery: [
        {
          galleryImage: racergallery1,
          id: "7",
        },
        {
          galleryImage: racergallery2,
          id: "8",
        },
        {
          galleryImage: racergallery3,
          id: "9",
        },
      ],
    },
  ];
};
