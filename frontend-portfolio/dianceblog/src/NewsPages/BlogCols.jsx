import Latest from "./LatestStoryBox";

const BlogCols = () => {
  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-4 gap-3">
        <div className="first-grid">
            <Latest/>
        </div>
        <div className="divider w-1 h-full bg-slate-800"></div>
        <div className="second-grid">
            
        </div>
        <div className="divider w-1 h-full bg-slate-800"></div>
        <div className="third-grid"></div>
      </div>
    </div>
  );
};

export default BlogCols;
