import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}


const Aboutdata: datatype[] = [
    {
        heading: "Online Advertising",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: "Our online advertising services are designed to help your business reach a wider audience. We utilize various online platforms and strategies to create effective ad campaigns.",
        link: 'Learn more'
    },
    {
        heading: "Social Media Management",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: "We specialize in managing and monitoring your social media presence. Our team ensures your brand has a strong and engaging presence on social platforms.",
        link: 'Learn more'
    },
    {
        heading: "Events & Sponsorships",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "We organize and manage events that help your business connect with its audience. Our sponsorship opportunities provide valuable exposure and partnerships.",
        link: 'Learn more'
    },
    {
        heading: "Campaigns",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: "Our marketing campaigns are tailored to your specific goals and objectives. We create impactful campaigns to drive results and brand awareness.",
        link: 'Learn more'
    },
    {
        heading: "Online Content & Blogging.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: "Quality content is key to online success, and we excel at content creation and blogging. We develop engaging content that resonates with your target audience.",
        link: 'Learn more'
    },
    {
        heading: "Search Engine Optimisation.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "SEO is essential for online visibility, and we're experts in optimizing your web presence. We use industry-best practices to enhance your search engine rankings.",
        link: 'Learn more'
    },
];


const Aboutus = () => {
    return (
        <div id="aboutus-section">
          <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
            <Image
              src="/images/aboutus/dots.svg"
              width={100}
              height={100}
              alt="dots-image"
              className="absolute bottom-1 -left-20"
            />
            <h4 className="text-center text-4xl lg:text-65xl font-bold">Digital Marketing</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32">
              {Aboutdata.map((item, i) => (
                <div
                  key={i}
                  className="hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group transform transition-transform hover:scale-105"
                >
                  <h4 className="text-4xl font-semibold text-black mb-5 group-hover:text-white">
                    {item.heading}
                  </h4>
                  <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                  <p className="text-base font-normal text-black mb-5 group-hover:text-white">
                    {item.paragraph}
                  </p>
                  <br />
                  {/* <Link
                    href="#"
                    className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
                  >
                    {item.link}
                    <ChevronRightIcon width={20} height={20} />
                  </Link> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Aboutus;