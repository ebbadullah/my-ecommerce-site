import { salesData } from '../assets'
import { useTheme } from '../ProductContext/ThemeContext';


const Sales = () => {
   const { theme } = useTheme();
  return (
    <div className={`flex flex-wrap justify-center gap-5 p-4 ${theme === 'default'
            ? 'bg-[#FFFFFF]' :'bg-[#EDE0D4]'   }  `}>
  {salesData.map((item, index) => (
    <div
      key={index}
      className="w-full lg:w-[45%] flex items-center bg-cover bg-center shadow-md relative"
      style={{ backgroundImage: `url(${item.image})`, height: '300px' }} 
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center p-4">
        <h2 className="text-2xl lg:text-2xl font-bold">{item.title}</h2> 
        <p className="text-md lg:text-md mt-2">{item.subtitle}</p>
      </div>
    </div> 
  ))}
</div>





  )
}









export default Sales