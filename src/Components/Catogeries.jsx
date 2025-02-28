import { categories } from '../assets'
import { useTheme } from '../ProductContext/ThemeContext';


const Catogeries = () => {
    const { theme } = useTheme(); // Access theme and toggle function
  
  return (
    <>
      <div className= {`flex flex-wrap justify-between  gap-7 py-9 px-12 sm:px-8 md:px-12 lg:px-16  ${
         theme === 'default' ? 'bg-[#FFFFFF] text-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]' : 'bg-[#EDE0D4] text-black'
      }  `}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-full sm:w-1/3 md:w-1/5  lg:w-1/6 bg-white rounded-lg overflow-hidden cursor-pointer shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={category.imgSrc}
              alt={category.label}
              className="w-full h-32 object-cover cursor-pointer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-lg font-semibold text-[#3E2723] cursor-pointer">
                {category.label}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Catogeries;
