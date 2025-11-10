import MeltedDiamonds from './MeltedDiamonds'
import DistillateSection from './Distillate'
import HashRosinSection from './HarshRosin'
import LiveResin from './LiveRisin'
import DeviceSpecs from './DeviceSpecs'

const All = () => {
  return (
<>
          <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Title */}
      <div className="relative z-10 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-white uppercase drop-shadow-lg">
          OUR ALL-IN-ONE LINEUP
        </h1>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-poster-00001.jpg"
        >
          <source src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.mp4" type="video/mp4" />
          <source src="https://cdn.prod.website-files.com/62282607739bd61f2cabc5ee%2F68faa9aab9379400d4e0b9ea_WebsiteBG_MP4-transcode.webm" type="video/webm" />
      
        </video>
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    </section>
<MeltedDiamonds/>
<DistillateSection/>
<HashRosinSection/>
<LiveResin/>
<DeviceSpecs/>
</>

  )
}

export default All