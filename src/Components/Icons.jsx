import { features } from "../assets";
import { useTheme } from '../ProductContext/ThemeContext';

let Icons = () => {
    const { theme } = useTheme(); // Access theme and toggle function
  
  return (
    <div className={`flex justify-between items-center flex-wrap gap-8 px-12 py-16 ${
      theme === 'default' ? 'bg-[#FFFFFF] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]' : 'bg-[#EDE0D4] text-[#3E2723] '
    }`}>
  {features.map((feature) => {
    const Icon = feature.icon; 
    return (
      <div
        key={feature.id}
        className="flex items-center gap-4 flex-1 min-w-[250px] max-w-[350px] px-4"
      >
        <div className="flex-shrink-0">
          <Icon size={45} className={`  ${
            theme === 'default'? 'text-black' : 'text-[#22191A]'  
          }`} />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-bold text-[#3E2723]">
            {feature.title} 
          </h3>
          <p className="text-sm text-[#3E2723]">
            {feature.description}
          </p>
        </div>
      </div>
    );
  })}
</div>



  );
};

export default Icons;
