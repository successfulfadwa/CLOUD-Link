import Image from "next/image";
import heroSvg from "../images/hero.svg";
import top_wave from "../images/top-wave.png";
import btm_wave from "../images/btm-wave.png";
import guy from "../images/tech_guy.png";
import female from "../images/Character2.png";
import female_3 from "../images/Character3.png";

import Footer from '../Footer';

// pages/index.tsx
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <div
        className="flex justify-between items-center h-16 text-white px-9 py-9"
        style={{ paddingTop: "57px", paddingRight: "90px" }}
      >
        <div className="text-xl font-bold" style={{ paddingLeft: "85px" }}>
          Logo
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About US
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            contact us
          </Link>
        </nav>
      </div>

      <div className="w-full" style={{ marginBottom: "-1px" }}>
        <Image
          src={top_wave}
          alt="Image Description"
          layout="responsive"
          width={686.73}
          height={50.01}
        />
      </div>

      <div
        style={{
          backgroundColor: "#2E8544",
          color: "white",
          paddingTop: "12px",
          marginTop: "-3px",
        }}
        className="py-12"
      >
        {/* Top Wave PNG Image */}

        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col items-center justify-center gap-210 md:gap-[10%] px-3 ">
            <div className="md:text-8xl text-5xl md:w-[10rem] mr-4 ">
              Who are we?
            </div>
            <div className="md:pl-8 py-9 w-[40] tracking-widest md:w-1/2 font-light md:text-xl">
              At Test, we are a mental health services provider dedicated to
              supporting individuals during challenging times. Founded in 2021,
              in the wake of the post-COVID-19 pandemic, we recognized the
              increasing prevalence of depression and the importance of
              accessible mental health care. We are committed to offering
              convenient and personalized services in the comfort of your home.
            </div>

          </div>

        </div>
      </div>
      {/* btm Wave PNG Image */}

      <div className="w-full" style={{ marginBottom: "-1px" }}>
        <Image
          src={btm_wave}
          alt="Image Description"
          layout="responsive"
          width={686.73}
          height={50.01}
        />
      </div>
      <div className="w-full flex justify-end">
        <div style={{ marginTop: "-300px" }}>
          <Image
            src={guy}
            alt="Image Description"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="md:pl-8 py-9 w-[40] tracking-widest md:w-3/4 font-light md:text-xl"> {/* Adjusted to 3/4 (75% width) */}
            <p className="mb-4" style={{ marginTop: "-250px", lineHeight: '47px' }}>Our mission is to empower individuals to prioritize their mental well-being by providing accessible and high-quality mental health services. We envision a world where everyone has the opportunity to achieve mental wellness and lead fulfilling lives.</p>
          </div>
          <div className="md:pl-8  w-[40] tracking-widest md:w-4/4 font-light md:text-xl"> {/* Adjusted to 4/4 (75% width) */}
            <p className="mb-4" style={{ marginTop: "-180", lineHeight: '47px' }}>Test offers a comprehensive suite of mental health services tailored to meet your individual needs. Our team of experienced and compassionate mental health professionals provides therapy, counseling, and support for a variety of concerns, including depression, anxiety, and substance abuse. We combine evidence-based practices with a client-centered approach to ensure personalized care that promotes growth, healing, and resilience.</p>
          </div>
        </div>
        <div style={{ marginTop: "00px" }}>
          <Image
            src={female}
            alt="Image Description"
          />
        </div>
        <div className="md:pl-8 py-9 w-[40] tracking-widest md:w-3.5/4 font-light md:text-xl">
          <p className="mb-4" style={{ marginTop: "-490px", lineHeight: '47px', marginLeft: '150px' }}>Our mission is to empower individuals to prioritize their mental well-being by providing accessible and high-quality mental health services. We envision a world where everyone has the opportunity to achieve mental wellness and lead fulfilling lives.</p>

        </div>
        <div className="md:pl-8 py-9 w-[40] tracking-widest md:w-3.5/4 font-light md:text-xl">
          <p className="mb-4" style={{ marginTop: "-400px", lineHeight: '47px', marginLeft: '150px' }}>

            We understand the importance of privacy and confidentiality in the therapeutic process. At Bimo Health, we adhere to strict privacy standards and follow legal and ethical guidelines to safeguard
            your personal information. Your privacy is our utmost priority, ensuring a safe and confidential
            space for you to share and grow.</p>
        </div>

      </div>


      <div className="w-full" style={{ marginBottom: "-1px" }}>
        <Image
          src={top_wave}
          alt="Image Description"
          layout="responsive"
          width={686.73}
          height={50.01}
        />
      </div>

      <div
        style={{
          backgroundColor: "#2E8544",
          color: "white",
          paddingTop: "12px",
          marginTop: "-3px",
        }}
        className="py-12"
      >
        {/* Top Wave PNG Image */}

        <div className="container mx-auto">
          <div className="max-w-3/4 mx-auto py-8">
            <h1 className="font-roboto text-7xl font-normal leading-tight tracking-normal mb-4" style={{

              paddingLeft: "100px"

            }}>
              Our Purpose
            </h1>    <p className="md:pl-8 py-9 w-[40] tracking-widest md:w-1/2 font-light md:text-xl" style={{ paddingLeft: "100px", lineHeight: '47px' }}>
              At Bimo Health, our purpose is deeply rooted in our belief that solutions created to serve others, especially those who are underserved, are always the best solutions. We are driven by the commitment to make a positive impact on individuals' lives, ensuring that everyone has access to the mental health care they deserve.
            </p>
          </div>
        </div>

      </div>
      {/* btm Wave PNG Image */}

      <div className="w-full" style={{ marginBottom: "-1px" }}>
        <Image
          src={btm_wave}
          alt="Image Description"
          layout="responsive"
          width={686.73}
          height={50.01}
        />
      </div>
      <div className="w-full flex justify-end">
        <div style={{ marginTop: "-700px", marginRight: "100px" }}>
          <Image
            src={female_3}
            alt="Image Description"
          />
        </div>
      </div>
      <div className="container mx-auto">
  <div className="max-w-3/4 mx-auto py-8">
    <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>

    <p className="md:pl-8 w-[40] tracking-widest md:w-4/4 font-light md:text-xl mb-6" style={{ lineHeight: '47px' }}>
      We understand that seeking care for mental health concerns can be challenging, with various barriers that can prevent individuals from receiving the support they need. That's why we are dedicated to removing those barriers and making mental health care more accessible to all. Whether it's geographical limitations, financial constraints, or stigmas surrounding mental health, we strive to bridge the gaps and create a safe and inclusive space where individuals can seek help without hesitation or obstacles.
    </p>

    <p className="md:pl-8 w-[40] tracking-widest md:w-4/4 font-light md:text-xl mb-6" style={{ lineHeight: '47px' }}>
      Equally important to us is easing the burdens for those delivering care. We recognize the immense dedication and compassion required from mental health professionals who work tirelessly to support individuals on their journey to recovery. By leveraging technology and innovative solutions, we aim to streamline and enhance the mental health care delivery process, empowering our dedicated professionals to focus on what they do best: helping individuals find their way back to themselves.
    </p>

    <p className="md:pl-8 w-[40] tracking-widest md:w-4/4 font-light md:text-xl mb-6" style={{ lineHeight: '47px' }}>
      We firmly believe that the right technology can transform lives. By harnessing the power of digital tools, we can extend our reach and impact, ensuring that individuals can access mental health resources anytime, anywhere. Whether through online counseling, teletherapy options, or user-friendly platforms, we embrace technology as a means to enhance the lives of people who are seeking a way back to themselves.
    </p>

    <p className="md:pl-8 w-[40] tracking-widest md:w-4/4 font-light md:text-xl mb-6" style={{ lineHeight: '47px' }}>
      Our purpose is to create a harmonious connection between compassionate care, cutting-edge technology, and the individuals we serve. We are driven by the conviction that everyone deserves the opportunity to prioritize their mental well-being and discover a path to inner peace and fulfillment. At Bimo Health, we are dedicated to making a meaningful difference in the lives of those who need it most, one step at a time.
    </p>
  </div>
</div>

<Footer />

    </div>
  );
};

export default Home;
