import { FaArrowRight } from "react-icons/fa";

const Latest = ({head,body,bgColorSecondary,bgColorPrimary}) => {
 
    return ( 
      <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
   
        <div className={`bg-gradient-to-br  ${bgColorPrimary} ${bgColorSecondary} p-8 h-full flex flex-col justify-between`}>
          <div>
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-100 rounded-full uppercase tracking-wider">
              {head}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
              {body}
            </h3>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-blue-100 text-sm font-medium">Updated 2 hours ago</span>
            <button className="flex items-center text-white hover:text-blue-200 transition-colors">
              View All Stories
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
    </div>
  
     );
}
 
export default Latest;