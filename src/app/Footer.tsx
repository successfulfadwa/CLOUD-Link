import fb from "./images/fb.png";
import Google from "./images/Google.png";
import Linkedin from "./images/LINKEDIN.png";
import insta from "./images/Instagram.png";
import skyp from "./images/Skype.png";
import twitter from "./images/Twitter.png";
import Image from 'next/image';
import top_wave from "./images/top-wave.png";


const Footer = () => {
  return (
    <>
	 <div className="w-full" style={{ marginBottom: '-1px' }}>
        <Image src={top_wave} alt="Image Description" layout="responsive" width={686.73} height={50.01} />
      </div>
      <div style={{ backgroundColor: '#2E8544', color: 'white', paddingTop: '12px', marginTop: '-3px', paddingBottom: '1px' }} className="py-12"></div>
            <footer className="bg-gray-200 p-4 flex justify-between items-center" style={{ backgroundColor: '#2E8544', color: 'white', paddingTop: '12px', marginTop: '-3px' }}>
          <div className="flex items-center">
            <div className="flex space-x-4" style={{ paddingLeft: '44px' }}>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Image src={Google} alt="Google Icon" width={50} height={50} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Image src={fb} alt="Facebook Icon" width={50} height={50} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Image src={Linkedin} alt="LinkedIn Icon" width={50} height={50} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Image src={insta} alt="Instagram Icon" width={50} height={50} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Image src={skyp} alt="Skype Icon" width={50} height={50} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-600">
                <Image src={twitter} alt="Twitter Icon" width={50} height={50} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            {/* Contact Us */}
            <span className="text-3xl font-bold mb-4">Contact Us:</span>
            <div className="flex items-center">
              <input id="name-input" type="text" placeholder="Name" className="mr-2 p-2 border border-gray-300 rounded-lg mb-2" />
              <input id="email-input" type="email" placeholder="Email" className="mr-2 p-2 border border-gray-300 rounded-lg mb-2" />
            </div>
            <div className="flex items-center">
              <input id="message-input" type="text" placeholder="Message" className="mr-2 p-2 border border-gray-300 rounded-lg flex-grow" style={{ height: '93px' }} />
            </div>

            <div className="flex justify-end " style={{ paddingTop: '19px' }} >
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ">Send</button>
            </div>
          </div>


        </footer>

    </>
  );
};

export default Footer;
