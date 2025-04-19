import Slider from "react-slick";

export default function TrustedByCarousel() {
  const clients = [
    { name: "School A", logo: "/clients/school-a.png" },
    { name: "School B", logo: "/clients/school-b.png" },
    { name: "School C", logo: "/clients/school-c.png" },
    { name: "School D", logo: "/clients/school-d.png" },
    { name: "School E", logo: "/clients/school-e.png" },
    { name: "School F", logo: "/clients/school-f.png" },
    { name: "School G", logo: "/clients/school-g.png" },
    { name: "School H", logo: "/clients/school-h.png" },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Trusted By Leading Institutions
      </h2>

      <Slider {...settings} className="max-w-6xl mx-auto">
        {clients.map((client, idx) => (
          <div key={idx} className="px-4 flex justify-center">
            <img
              src={client.logo}
              alt={client.name}
              className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}
