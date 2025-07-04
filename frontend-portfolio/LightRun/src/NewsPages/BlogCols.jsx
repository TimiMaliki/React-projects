import Border from "./Border";
import Latest from "./LatestStoryBox";
import CelebritySideBarOne from "./celebrityPage/celebritySideBars/sideBarOne/sideBarBlog";
import FashionSideBarOne from "./fashionPage/fashionSideBars/sideBarOne/sideBarBlog";
import SideBarOne from "./politicsPage/politicsSideBars/sideBarOne/sideBarBlog";
import SideBarTwo from "./politicsPage/politicsSideBars/sideBarTwo/sideBarBlog";
import { Link } from "react-router";





const BlogCols = () => {
 
  return (
    <div className="w-full mt-4">
      <Border />
      <div className="tech-blog first-grid grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4">
        <div className="first-grid">
          <Link to="/politics">
          <Latest
            head={"Latest in Politics"}
            body={"Diving Into the Future: Where Business Innovation Meets Cutting-Edge Technology"}
            bgColorPrimary="from-blue-600 "
            bgColorSecondary="to-blue-800"
          />
          </Link>
         
        </div>

        <div className="flex justify-center gap-3 business">
          <div className="divider w-1 h-full bg-slate-800"></div>
          <Link to="/politics">
          <SideBarOne/>
          </Link>
        </div>

        <div className="bussiness first-grid flex justify-center gap-3">
        <div className="divider w-1 h-full bg-slate-800"></div>
        <Link to="/politics">
       <SideBarTwo/>
       </Link>
        </div>
      </div>

      <Border />
      <div className="second-grid grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        <div className="">
        <Link to="/celebrity">
          <Latest
            head={"Celebrity Buzz"}
            body={"Catch up on what's making waves across the U.S. — from breaking news to trending stories, all in one place."}
            bgColorPrimary="from-yellow-600"
            bgColorSecondary="to-yellow-800"
          />
            </Link>
        </div>

        <div className="cars second-grid flex justify-center gap-3">
          <div className="divider w-1 h-full bg-slate-800"></div>
         
     <CelebritySideBarOne/>
   
        </div>
      </div>
      <Border />
      <div className="third-grid grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        <div className="hidden lg:block">
        <Link to="/fashion">
          <Latest
            head={"Fashion Week"}
            body={"Global Runway Trends — Discover This Season's Must-Have Styles From Paris to Tokyo"}
            bgColorPrimary="from-red-600"
            bgColorSecondary="to-red-800"
          />
            </Link>
        </div>

        <div className="fourth-grid flex justify-center gap-3">
          <div className="divider w-1 h-full bg-slate-800"></div>
        <FashionSideBarOne/>
        </div>
        
      </div>
    </div>
  );
};

export default BlogCols;



