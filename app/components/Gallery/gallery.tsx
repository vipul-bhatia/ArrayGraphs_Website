export const Gallery = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
             <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Welcome</span>
            </span>{' '}
            the gallery full of surprises
          </h2>

        </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-60 w-72 rounded-lg" src="./timg1.jpeg" alt=""></img>
        </div>
        <div>
            <img className="h-64 max-w-full rounded-lg" src="./timg2.jpeg" alt=""></img>
        </div>
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg3.jpeg" alt=""></img>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg4.jpeg" alt=""></img>
        </div>
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg5.jpeg" alt=""></img>
        </div>
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg6.jpeg" alt=""></img>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg7.jpeg" alt=""></img>
        </div>
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg8.jpeg" alt=""></img>
        </div>
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg9.jpeg" alt=""></img>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg10.jpeg" alt=""></img>
        </div>
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg11.jpeg" alt=""></img>
        </div>
        <div>
            <img className="h-60 w-72  rounded-lg" src="./timg12.jpeg" alt=""></img>
        </div>
    </div>
</div>

      </div>
    );
  };