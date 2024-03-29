import Image from 'next/image';
import heroSvg from "./images/hero.svg";
import top_wave from "./images/top-wave.png";
import btm_wave from "./images/btm-wave.png";
import sec_img from "./images/second-img.png";
import trd_img from "./images/three-pic.png";
import fb from "./images/fb.png";
import Google from "./images/Google.png";
import Linkedin from "./images/LINKEDIN.png";
import insta from "./images/Instagram.png";
import skyp from "./images/Skype.png";
import twitter from "./images/Twitter.png";
import Navbar from './Navbar';

// pages/index.tsx
import Link from 'next/link';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div>
           <Navbar />


      <div className="flex flex-col md:flex-row px-9" style={{ paddingTop: '100px', paddingLeft: '90px' }}>
        <div className="md:w-1/2 p-8">
          <h1 className="font-roboto text-7xl font-normal leading-tight tracking-normal mb-4">
            What is Mental Health?
          </h1>

          <p className="font-roboto text-lg mb-4 text-justify py-7" style={{ fontSize: '20px', fontWeight: 0, lineHeight: '47px', letterSpacing: '0em', textAlign: 'justify' }}>            Mental health encompasses the overall well-being of an individual's emotional and psychological state. In South Africa, mental health disorders are prevalent, with the South African Stress and Health (SASH) study reporting that around 30% of the population will experience a mental disorder in their lifetime.          </p>
        </div>
        <div className="md:w-1/2 p-8">
          <Image src={heroSvg} alt="Image Description" width={686.73} height={510.01} />
        </div>
      </div>

      {/* hero-btm Text */}
      <div className="flex flex-col md:flex-row px-9" >
        <p className="font-roboto text-lg mb-4 text-justify  px-9" style={{ paddingLeft: '78px', fontSize: '20px', fontWeight: 0, lineHeight: '47px', letterSpacing: '0em', textAlign: 'justify' }}>           More text goes here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* Divider */}
      {/* section2 */}

      <div className="w-full" style={{ marginBottom: '-1px' }}>
        <Image src={top_wave} alt="Image Description" layout="responsive" width={686.73} height={50.01} />
      </div>

      <div style={{ backgroundColor: '#2E8544', color: 'white', paddingTop: '12px', marginTop: '-3px' }} className="py-12">
        {/* Top Wave PNG Image */}

        <div className="container mx-auto">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-4xl font-bold px-9" style={{ paddingLeft: '70px', paddingBottom: '30px' }}>Handling Mental Health</h2>
          </div>

          <div className="flex items-center">
            <div className="md:w-1/2 md:pr-8" style={{ paddingLeft: '95px' }}>
              <Image src={sec_img} alt="Image Description" width={549.73} height={366.01} className="w-full md:max-w-sm" />
            </div>

            <div className="md:w-1/2 md:pl-8 py-9">
              <h2 className="text-3xl font-bold mb-4">How can I help myself?</h2>
              <ul className="list-disc pl-4">
                <li className="mb-2">i. Offer support and patience.</li>
                <li className="mb-2">ii. Invite him/her to outdoor activities e.g. walks.</li>
                <li className="mb-2">iii. Remind him about his medication frequently.</li>
                <li className="mb-2">iv. Encourage them that with time and treatment, depression will lift.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
      {/* btm Wave PNG Image */}

      <div className="w-full" style={{ marginBottom: '-1px' }}>
        <Image src={btm_wave} alt="Image Description" layout="responsive" width={686.73} height={50.01} />
      </div>
      {/* section3 */}

      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start py-12" style={{ paddingTop: '33px' }}>


        <div className="md:w-1/2 md:pl-8 py-12 " >
          <h2 className="text-3xl font-bold mb-4">How Can I Help Others?</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">i. Offer support and patience.</li>
            <li className="mb-2">ii. Invite him/her to outdoor activities e.g. walks.</li>
            <li className="mb-2">iii. Remind him about his medication frequently.</li>
            <li className="mb-2">iv. Encourage them that with time and treatment, depression will lift.</li>
          </ul>
        </div>
        <div className="md:w-1/2 md:pr-8 flex justify-end"> {/* Adjust the flex justify-end class */}
          <Image src={trd_img} alt="Image Description" width={627.73} height={418.01} className="w-full md:max-w-sm lg:max-w-md" />
        </div>
      </div>
      {/* footer */}
      
      <Footer />


    </div>


  );
}

export default Home;

