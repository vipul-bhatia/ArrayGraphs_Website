import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string[];
    link: string;
}


const Aboutdata: datatype[] = [
    {
        heading: "ALPHA",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: ['Vision','Speciality','Offereings','Brand Value','Occasions & more'],
        link: 'Learn more'
    },
    {
        heading: "BETA",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: ['Influencer Marketing','Meetups','Events','Testimonials','Model Shoots'],
        link: 'Learn more'
    },
    {
        heading: "GAMA",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: ['Google Ads','Search Engine Optimization','Social Media'],
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                {/* <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3> */}
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Marketing Technique</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <ul className="list-disc list-inside">
            {item.paragraph.map((point, index) => (
                <li key={index} className="group-hover:text-white" >{point}</li>
            ))}
        </ul>
        <br />
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;