const Latest = ({head,body,viewMore,bgColor}) => {
 
    return ( 
        <div className="w-full">
               <div className={`box ${bgColor} w-full h-80 shadow-lg rounded-lg mt-12`}>
                  <div className="head text-xl font-bold text-left p-5">
                    {/* <p>latest</p> */}
                    {head}
                  </div>
                  <div className="body text-xl lg:text-3xl font-extrabold text-left p-5">
                     <h2>
                        {/* Inspiration from leaders <br />
                        and Communities around the world */}
                        {body}
                     </h2>
                  </div>
                  <div className="viewMore  font-semibold text-left p-5">
                    {/* <p>View All Stories</p> */}
                    {viewMore}
                  </div>
               </div>
        </div>
     );
}
 
export default Latest;