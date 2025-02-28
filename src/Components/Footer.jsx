import { useNavigate } from "react-router-dom";
import { Images } from "../assets";
import { footerData } from '../assets';
import { useTheme } from '../ProductContext/ThemeContext';


const Footer = () => {
  const { theme } = useTheme(); // Access theme and toggle function

  let navigate = useNavigate();

  return (
    <footer className={` py-12   ${ theme === 'default' ? 'bg-[#FFFFFF] text-black' : 'bg-[#4E342E] text-white   bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] ' }  `}>
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-between">
        
        {/* First Section (Logo) */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0 ">
          <img 
            onClick={() => nevigate("/")} 
            src={Images.logo} 
            alt="Claue Logo" 
            className="mb-6 cursor-pointer w-32 md:w-40 " 
            EOL  
            
          

          />
          {footerData[0].content.map((item, idx) => {
            if (item.type === "text") {
              return (
                <p key={idx} className="mb-2  text-sm md:text-base">
                  {item.value}
                </p>
              );
            }
            if (item.type === "links") {
              return (
                <div key={idx} className="flex space-x-4">
                  {item.value.map((link, i) => (
                    <a key={i} href={link.href} className=" text-sm md:text-base">
                      {link.label}
                    </a>
                  ))}
                </div>
              );
            }
            return null;
          })}
        </div>
  
        {/* Categories and Information */}
        <div className="flex flex-wrap w-full md:w-4/5 mb-8 md:mb-0">
          
          {footerData.slice(1).map((section, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/5 mb-4 md:mb-0 flex-shrink-0">
              <h3 className="font-bold mb-6  text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.content.map((item, idx) => {
                  if (item.type === "text") {
                    return (
                      <p key={idx} className=" text-sm md:text-base">
                        {item.value}
                      </p>
                    );
                  }
                  if (item.type === "link") {
                    return (
                      <li key={idx}>
                        <a href={item.href} className=" text-sm md:text-base">
                          {item.label}
                        </a>
                      </li>
                    );
                  }
                  if (item.type === "form") {
                    return (
                      <div key={idx}>
                        <div className="flex items-center rounded-lg overflow-hidden border border-gray-300">
                          <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full px-4 py-3 text-sm border-none outline-none"
                          />
                        </div>
                        <button className="bg-black text-white px-5 py-3 rounded-lg mt-3 text-sm font-semibold hover:bg-gray-800">
                          Subscribe
                        </button>
                      </div>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center mt-12  text-sm">
        &copy; 2025 Copyright By EbadBaloch.
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;