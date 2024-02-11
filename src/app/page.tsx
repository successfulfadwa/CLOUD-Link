import Image from 'next/image';
import heroSvg from "./images/hero.svg";
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

      {/* Additional Text */}
      <div className="flex flex-col md:flex-row px-9" >
        <p className="font-roboto text-lg mb-4 text-justify  px-9" style={{ paddingLeft: '78px', fontSize: '20px', fontWeight: 0, lineHeight: '47px', letterSpacing: '0em', textAlign: 'justify' }}>           More text goes here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      {/* Divider */}
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="fill-current text-gray-200"
        >
          <path
            fillOpacity="1"
            d="M0,64L60,96C120,128,240,192,360,218.7C480,245,600,235,720,224C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

    </div>

  );
}

export default Home;

