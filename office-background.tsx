export function OfficeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main office background - wider to accommodate turning */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"
        style={{ width: "150%", left: "-25%" }}
      ></div>

      {/* Floor */}
      <div className="absolute bottom-0 left-[-25%] right-[-25%] h-1/6 bg-gray-800" style={{ width: "150%" }}>
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, #333, #333 50px, #222 50px, #222 100px)",
              backgroundSize: "100px 100%",
            }}
          ></div>
        </div>
      </div>

      {/* Desk - centered in the middle view */}
      <div className="absolute bottom-1/6 left-1/2 transform -translate-x-1/2 w-2/3 h-1/8 bg-gray-700 border-t-2 border-gray-600 rounded-t-lg">
        {/* Control panel */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1/2 h-3/4 bg-gray-800 rounded-md border border-gray-700 flex flex-wrap justify-center content-start p-1">
          <div className="w-2 h-2 bg-red-500 rounded-full m-1"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full m-1"></div>
          <div className="w-8 h-2 bg-gray-600 rounded-full m-1"></div>
          <div className="w-4 h-2 bg-gray-600 rounded-full m-1"></div>
          <div className="w-6 h-2 bg-gray-600 rounded-full m-1"></div>
        </div>
      </div>

      {/* Back wall - wider to accommodate turning */}
      <div className="absolute inset-x-[-25%] top-0 h-2/3 bg-gray-800" style={{ width: "150%" }}>
        {/* Left side elements */}
        <div className="absolute top-1/4 left-[15%] w-1/8 h-1/5 bg-yellow-800 border border-yellow-700 rounded-sm flex items-center justify-center">
          <div className="text-xs text-yellow-600 font-bold">DIDDY</div>
        </div>
        <div className="absolute top-1/6 left-[10%] w-16 h-8 bg-gray-900 border border-gray-700 rounded-sm">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, #333 2px, #333 4px)",
              backgroundSize: "4px 100%",
            }}
          ></div>
        </div>

        {/* Center elements */}
        <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 w-1/4 h-1/6 bg-gray-900 border border-gray-700 rounded-sm flex items-center justify-center">
          <div className="text-xs text-gray-600 font-bold">SECURITY</div>
        </div>

        {/* Right side elements */}
        <div className="absolute top-1/4 right-[15%] w-1/8 h-1/5 bg-blue-800 border border-blue-700 rounded-sm flex items-center justify-center">
          <div className="text-xs text-blue-600 font-bold">BABY OIL</div>
        </div>
        <div className="absolute top-1/6 right-[10%] w-16 h-8 bg-gray-900 border border-gray-700 rounded-sm">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, #333 2px, #333 4px)",
              backgroundSize: "4px 100%",
            }}
          ></div>
        </div>
      </div>

      {/* Side walls - positioned for turning effect */}
      <div className="absolute top-0 bottom-0 left-[-25%] w-1/6 bg-gray-900"></div>
      <div className="absolute top-0 bottom-0 right-[-25%] w-1/6 bg-gray-900"></div>

      {/* Left door frame */}
      <div className="absolute top-0 bottom-0 left-[8.33%] w-1/12 bg-gray-700"></div>

      {/* Right door frame */}
      <div className="absolute top-0 bottom-0 right-[8.33%] w-1/12 bg-gray-700"></div>

      {/* Fan - in center view */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <div
            className="w-8 h-8 rounded-full border-t-2 border-gray-500 animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>
        <div className="w-6 h-4 bg-gray-800 mx-auto"></div>
      </div>
    </div>
  )
}
