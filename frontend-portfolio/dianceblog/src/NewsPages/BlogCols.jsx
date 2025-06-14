import Border from "./Border";
import Latest from "./LatestStoryBox";
import CelebritySideBarOne from "./celebrityPage/celebritySideBars/sideBarOne/sideBarBlog";
import FashionSideBarOne from "./fashionPage/fashionSideBars/sideBarOne/sideBarBlog";
import SideBarOne from "./politicsPage/politicsSideBars/sideBarOne/sideBarBlog";
import SideBarTwo from "./politicsPage/politicsSideBars/sideBarTwo/sideBarBlog";





const BlogCols = () => {
 
  return (
    <div className="w-full mt-4">
      <Border />
      <div className="tech-blog first-grid grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4">
        <div className="first-grid">
          <Latest
            head={"latest"}
            body={`"Diving Into the Future: Where Business Innovation Meets Cutting-Edge Technology"`}
            viewMore={"View All Stories"}
            bgColor="bg-blue-500"
          />
        </div>

        <div className="flex justify-center gap-3 business">
          <div className="divider w-1 h-full bg-slate-800"></div>
          <SideBarOne/>
        </div>

        <div className="bussiness first-grid flex justify-center gap-3">
        <div className="divider w-1 h-full bg-slate-800"></div>
       <SideBarTwo/>
        </div>
      </div>

      <Border />
      <div className="second-grid grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        <div className="">
          <Latest
            head={"latest"}
            body={`"Catch up on what’s making waves across the U.S. — from breaking news to trending stories, all in one place."`}
            viewMore={"View All Stories"}
            bgColor="bg-yellow-500"
          />
        </div>

        <div className="cars second-grid flex justify-center gap-3">
          <div className="divider w-1 h-full bg-slate-800"></div>
     <CelebritySideBarOne/>
        </div>
      </div>
      <Border />
      <div className="third-grid grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        <div className="hidden lg:block">
          <Latest
            head={"latest"}
            body={"Covering Finance and Markets Worldwide — Stay Informed, Wherever You Are"}
            viewMore={"View All Stories"}
            bgColor="bg-red-500"
          />
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
