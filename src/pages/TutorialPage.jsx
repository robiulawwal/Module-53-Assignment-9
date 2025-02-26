import { Link } from "react-router-dom";

const TutorialPage = () => {
    
    return (
        <div className="container mx-auto my-14">
          <div className="mt-10">
        <h1 className="text-2xl md:text-5xl font-bold text-pink-700/80 text-center mb-3"> tutorials !
        </h1>
        <p className="text-xl text-gray-500 text-center mb-12">
          Learn Japanese with YouTube tutorials—easy to learn and effective.
        </p>

        {/* Responsive Grid for Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
     
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/sISIVKJh_EA?si=E0riVwbZwlls8VwL"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-50 rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/kR21pvgsCo0?si=qc0M13faLA8x8BPL"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-50 rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/HMI_oAnjtmY?si=yJBZzd7m0u53oztk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-50 rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/AfkgVPo2OSI?si=EpAwYkd7M20NkEG7"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-50 rounded-lg shadow-lg"
            ></iframe>
          </div>
          
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/vtWo3lFV2x0?si=3sVJstS34hfQ-Ylp"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-50 rounded-lg shadow-lg"
            ></iframe>
          </div>

          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/kYson5zgwLE?si=Alp9cHau7xtb-p-d"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-50 rounded-lg shadow-lg"
            ></iframe>
          </div>
   
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/scmbOmrUVUA?si=eLMWBFvZATD_ziRS"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-50 rounded-lg shadow-lg"
            ></iframe>
          </div>
       
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/VaUfsPxDUcA?si=kwL6GeE9Cz0z6xz_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-50 rounded-lg shadow-lg"
            ></iframe>
          </div>

        </div>

        <div className="flex justify-center">
          <Link to="/start-learning"><button className="mt-10 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-3 rounded-lg transition duration-300 shadow-md ">
          Learn Vocabularies
          </button></Link>
        </div>
      </div>
        </div>
    );
};

export default TutorialPage;