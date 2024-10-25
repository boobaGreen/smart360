const TruckAnimation = () => {
  return (
    <div className="flex justify-center items-center h-60 overflow-hidden">
      <div className="relative w-full h-40 bg-transparent border-gray-[#6b7280] border-b-0 ">
        <div className="absolute top-0 left-0 w-[320px] h-[150px] xl:animate-drive animate-driveMobile ">
          {/* Cab section */}
          <div className="absolute top-1 right-0 w-[110px] h-[90px] bg-[#c4253f] rounded-t-[10px]"></div>

          {/* Window */}
          <div className="absolute top-[12px] right-[10px] w-[70px] h-[40px] bg-bluCesena-200 rounded"></div>

          {/* Grill */}
          <div className="absolute top-[60px] right-[80px] w-5 h-[30px] bg-gray-[#111827] rounded"></div>

          {/* Mirror */}
          <div className="absolute top-[35px] right-[-15px] w-[10px] h-[30px] bg-[#c4253f] rounded"></div>

          {/* Box section */}
          <div className="absolute top-3.5 right-[110px] w-[190px] h-[90px] bg-white border-4 border-[#c4253f] rounded">
            {/* Text (not mirrored) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-redCesena-900 text-lg font-bold">
                Group Traslochi
              </span>
              <span className="text-redCesena-900 text-sm font-bold animate-wiggle">
                Smart360°
              </span>
            </div>
            <div className="absolute top-[10px] right-[10px] w-[170px] h-1 bg-[#c4253f]"></div>
            <div className="absolute bottom-[10px] right-[10px] w-[170px] h-1 bg-[#c4253f]"></div>
          </div>

          {/* Wheels */}
          <div className="absolute bottom-0 w-[55px] h-[55px] bg-[#374151] rounded-full shadow-lg right-[15px]">
            <div className="absolute top-[10px] left-[10px] w-[35px] h-[35px] bg-gray-300 rounded-full"></div>
          </div>

          <div className="absolute bottom-0 w-[55px] h-[55px] bg-[#374151] rounded-full shadow-lg left-[30px]">
            <div className="absolute top-[10px] left-[10px] w-[35px] h-[35px] bg-[#d1d5db] rounded-full"></div>
          </div>

          {/* Shadow */}
          <div className="absolute bottom-[-12px] left-0 w-[320px] h-5 bg-[#000000] opacity-20 rounded-full"></div>

          {/* Nuvolette di fumo */}
          {/* Nuvolette di fumo */}
          <div className="absolute top-20 left-2 animate-smoke1 z-20 ">
            <div className="w-5 h-5 bg-[#e4e4e4] rounded-full "></div>
          </div>
          <div className="absolute top-20 left-2 animate-smoke2 z-20">
            <div className="w-6 h-6 bg-[#e4e4e4] rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-20 left-2 animate-smoke3 z-20">
            <div className="w-7 h-7 bg-[#e4e4e4] rounded-full opacity-50"></div>
          </div>
          {/* <div className="absolute top-20 left-2 animate-smoke4 z-20">
            <div className="w-8 h-8 bg-[#e4e4e4] rounded-full opacity-40"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TruckAnimation;
