const About = () => {
    return (  
        <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden font-[Newsreader,'Noto Sans',sans-serif]">
      <div className="flex h-full grow flex-col items-center justify-center px-4 md:px-20 py-10">
        <div className="w-full max-w-4xl flex flex-col gap-6">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold ">
              About Diance-Blog
            </h1>
          </div>

          {/* Intro paragraph */}
          <p className="text-2xl text-center">
          Diance-Blog is more than just a blog — it's a platform built to turn aspiring bloggers’ dreams into reality. We are passionate about empowering individuals with the tools, inspiration, and knowledge they need to share their voice with the world. Whether you're just starting your blogging journey or looking to grow your existing platform, Diance-Blog offers in-depth guides, the latest insights, and practical strategies to help you succeed. Our mission is to simplify 
          the blogging process, spark creativity, and build a supportive community where your ideas can thrive and make an impact.
          </p>

          {/* Mission Section */}
          <div className="text-center mt-6">
            <h2 className="text-2xl mb-2 font-extrabold">
              Our Mission
            </h2>
            <p className="text-xl">
            At Diance-Blog, our vision is to inspire and elevate the next generation of bloggers. We believe that anyone with a story or expertise deserves a platform—and we’re here to help make that journey easier, smarter, and more rewarding. By combining cutting-edge tech insights with content creation strategies, we empower bloggers to build authentic voices, grow meaningful communities, and thrive in a fast-changing digital world. 
            Whether you're writing about code, culture, or creativity, our goal is to be the foundation that supports your vision, passion, and long-term success.
            </p>
          </div>

          {/* Meet the Authors */}
          <div className="text-center mt-10">
            <h2 className="text-xl mb-4 font-extrabold">
              Meet the Authors
            </h2>

            <div className="flex flex-col sm:flex-row gap-8 overflow-x-auto sm:overflow-visible py-4 px-2 sm:px-0">
              {/* Author 1 */}
              <div className="flex flex-col items-center gap-4 min-w-[180px]">
                <div
                  className="bg-center bg-cover rounded-full w-32 h-32"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUID_Ann1EaEmfbRxUZMXwk8plHFZJCs0pvDa25tGufLKfevE_Ddgef0kLd4LXwghsvLkIldhgz_T7wj2rwEFIhyFDkkp02tVWpdaBaJs3wgmLTXVb4nfafXb1IJbTMx8bS5lMxn1VayB_kxBEoDL4iwuSFgQSke4SbVHbguEJ0hfFQzAcp1pKgp6cS19NU4uClgebMUJTKZLjGQVHhn4y87obYJYkFGY-nQNodJbn1ozl-Ef61VM0caev0CT_L0y-2G04DJv9GMdR')",
                  }}
                />
                <div>
                  <p className=" text-base font-medium">Ethan Bennett</p>
                  <p className="text-[#757575] text-sm">Specialization: Software Development</p>
                </div>
              </div>

              {/* Author 2 */}
              <div className="flex flex-col items-center gap-4 min-w-[180px]">
                <div
                  className="bg-center bg-cover rounded-full w-32 h-32"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARrruX7_I8hoW9xOuLFfv2YeJveWSl63M_6vJgVkwtyU4E-hiGiK4xmjXWXeJGVJiNuXc7_ru2t0TuxG9XI1IJF0wDYs9c2jhcuMWM4JOrUMDSh82dfC5PxVUHuW1PRq-ALPIyvP-iY--72iPQBav5pjxuLa0m3e1Rtt8YZThgpLhSvXTZ5tttRrpslT9pZo5TyWzn6O3eVPOy40ZnnRojtcv3EroNlcjwfW8eXcMV5yyvQbYAv4UwycjUaYC2sYFpLf4ZxfLgBqkz')",
                  }}
                />
                <div>
                  <p className=" text-base font-medium">Sophia Hayes</p>
                  <p className="text-[#757575] text-sm">Specialization: Cybersecurity</p>
                </div>
              </div>

              {/* Author 3 */}
              <div className="flex flex-col items-center gap-4 min-w-[180px]">
                <div
                  className="bg-center bg-cover rounded-full w-32 h-32"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCL0lltDGma4rkxlXGMtR3Ab7vjO4lpxAspWc1ogLOwAord2n5MzArIo-b9VplaImXWLTPtCDWE_5eIChOdGrsKa6jcMbBV2iEGIaAy91-T_cpArg2sbOgHaEpBq1GFLyqAmJnh9uMIkcB07KhKFm5cB5sC-dfvhxvPhXglWUMKP6llOqe_3kmOf8SheUyQyjRrTHgNpLJCfY6l0K4MDqjdmgE8h9getyNG72L7dMKXuq50DJizSfxdm-UVnuFloQNv4BcF1MhNYPi')",
                  }}
                />
                <div>
                  <p className="text-[#141414] text-base font-medium">Lucas Reed</p>
                  <p className="text-[#757575] text-sm">Specialization: Emerging Technologies</p>
                </div>
              </div>

                {/* Author 4 */}
                <div className="flex flex-col items-center gap-4 min-w-[180px]">
                <div
                  className="bg-center bg-cover rounded-full w-32 h-32"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCCL0lltDGma4rkxlXGMtR3Ab7vjO4lpxAspWc1ogLOwAord2n5MzArIo-b9VplaImXWLTPtCDWE_5eIChOdGrsKa6jcMbBV2iEGIaAy91-T_cpArg2sbOgHaEpBq1GFLyqAmJnh9uMIkcB07KhKFm5cB5sC-dfvhxvPhXglWUMKP6llOqe_3kmOf8SheUyQyjRrTHgNpLJCfY6l0K4MDqjdmgE8h9getyNG72L7dMKXuq50DJizSfxdm-UVnuFloQNv4BcF1MhNYPi')",
                  }}
                />
                <div>
                  <p className="text-[#141414] text-base font-medium">Lucas Reed</p>
                  <p className="text-[#757575] text-sm">Specialization: Emerging Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    );
}
 
export default About;