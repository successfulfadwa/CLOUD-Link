import Image from 'next/image';
import heroSvg from "./images/hero.svg";
import top_wave from "./images/top-wave.png";
import btm_wave from "./images/btm-wave.png";
// pages/index.tsx
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between items-center h-16 text-white px-9 py-9" style={{ paddingTop: '57px', paddingRight: '90px' }}>
        <div className="text-xl font-bold" style={{ paddingLeft: '85px' }}>Logo</div>
        <nav className="flex items-center space-x-4">
          <Link href="/about-us" className="hover:text-gray-300">About US</Link>
          <Link href="/sign-up" className="border border-white text-white px-4 py-2 hover:text-gray-300 hover:border-gray-300  rounded-full ">Sign-up</Link>
          <Link href="/sign-in" className="inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 hover:text-gray-300">Sign-in</Link>
        </nav>
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row px-9" style={{ paddingTop: '100px', paddingLeft: '90px' }}>
        {/* Left Content */}
        <div className="md:w-1/2 p-8">
          <h1 className="font-roboto text-7xl font-normal leading-tight tracking-normal mb-4">
            What is Mental Health?
          </h1>

          <p className="font-roboto text-lg mb-4 text-justify py-7" style={{ fontSize: '20px', fontWeight: 0, lineHeight: '47px', letterSpacing: '0em', textAlign: 'justify' }}>            Mental health encompasses the overall well-being of an individual's emotional and psychological state. In South Africa, mental health disorders are prevalent, with the South African Stress and Health (SASH) study reporting that around 30% of the population will experience a mental disorder in their lifetime.          </p>
        </div>
        {/* Right Image */}
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
      <div className="w-full" style={{ marginBottom: '-1px' }}>
        <Image src={top_wave} alt="Image Description" layout="responsive" width={686.73} height={50.01} />
      </div>

      <div style={{ backgroundColor: '#2E8544', color: 'white', paddingTop: '12px', marginTop: '-1px' }} className="py-12">
        {/* Top Wave PNG Image */}

        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to our website</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
              {/* btm Wave PNG Image */}

      <div className="w-full" style={{ marginBottom: '-1px' }}>
        <Image src={btm_wave} alt="Image Description" layout="responsive" width={686.73} height={50.01} />
      </div>

      {/* my next content */}
    </div>


  );
}

export default Home;

