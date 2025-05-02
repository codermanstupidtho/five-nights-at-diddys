import type { CSSProperties } from "react"

interface CameraLocationProps {
  cameraNumber: number
  className?: string
  style?: CSSProperties
}

export function CameraLocation({ cameraNumber, className = "", style = {} }: CameraLocationProps) {
  const getLocationName = () => {
    switch (cameraNumber) {
      case 1:
        return "Stage Area"
      case 2:
        return "Living Room"
      case 3:
        return "Kitchen"
      case 4:
        return "Hallway"
      case 5:
        return "Bedroom"
      case 6:
        return "Bathroom"
      default:
        return "Unknown Location"
    }
  }

  const renderLocation = () => {
    switch (cameraNumber) {
      case 1: // Stage Area
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
            {/* Stage Platform */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-yellow-900 border-t-4 border-yellow-800"></div>
            {/* Curtains */}
            <div className="absolute top-0 left-0 bottom-0 w-1/6 bg-red-900 transform -skew-x-12"></div>
            <div className="absolute top-0 right-0 bottom-0 w-1/6 bg-red-900 transform skew-x-12"></div>
            {/* Spotlights */}
            <div className="absolute top-10 left-1/4 w-12 h-12 rounded-full bg-yellow-500 blur-xl opacity-60"></div>
            <div className="absolute top-10 right-1/4 w-12 h-12 rounded-full bg-blue-500 blur-xl opacity-60"></div>
            {/* Music Equipment */}
            <div className="absolute bottom-1/4 left-1/4 w-16 h-24 bg-gray-800 rounded-md"></div> {/* Speaker */}
            <div className="absolute bottom-1/4 right-1/4 w-16 h-24 bg-gray-800 rounded-md"></div> {/* Speaker */}
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-black rounded-md"></div>{" "}
            {/* Microphone stand */}
          </div>
        )

      case 2: // Living Room
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800"></div>

            {/* Couch */}
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-3/5 h-1/6 bg-purple-900 rounded-t-xl"></div>
            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-2 w-3/5 h-1/24 bg-purple-800 rounded-b-xl"></div>

            {/* TV */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-2/5 h-1/5 bg-gray-900 border-4 border-gray-600 rounded-lg"></div>
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 translate-y-[calc(20%+8px)] w-1/6 h-1/16 bg-gray-600"></div>

            {/* Coffee Table */}
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-1/4 h-1/24 bg-yellow-800 rounded-md"></div>
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-4 w-1/6 h-1/12 bg-yellow-900"></div>
          </div>
        )

      case 3: // Kitchen
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800"></div>

            {/* Kitchen Counter */}
            <div className="absolute bottom-1/3 left-0 right-0 h-1/6 bg-gray-600"></div>
            <div className="absolute bottom-1/3 left-0 right-0 h-1/24 bg-gray-400"></div>

            {/* Sink */}
            <div className="absolute bottom-[calc(33.33%+16px)] left-1/2 transform -translate-x-1/2 w-1/6 h-1/12 bg-gray-300 rounded-sm"></div>

            {/* Cabinets */}
            <div className="absolute bottom-1/3 left-1/4 w-1/6 h-1/12 border border-gray-500 bg-yellow-800"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1/6 h-1/12 border border-gray-500 bg-yellow-800"></div>

            {/* Fridge */}
            <div className="absolute top-1/4 right-1/6 w-1/6 h-2/5 bg-gray-400 rounded-t-sm"></div>

            {/* Stove */}
            <div className="absolute bottom-1/3 left-1/6 w-1/8 h-1/12 bg-black border-t-2 border-gray-400"></div>
            <div className="absolute bottom-[calc(33.33%+16px)] left-1/6 translate-x-[6px] w-2 h-2 rounded-full bg-red-500"></div>
            <div className="absolute bottom-[calc(33.33%+16px)] left-1/6 translate-x-[18px] w-2 h-2 rounded-full bg-red-500"></div>
          </div>
        )

      case 4: // Hallway
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>

            {/* Floor */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-yellow-900/30"></div>

            {/* Left Wall */}
            <div className="absolute top-0 bottom-0 left-0 w-1/6 bg-gray-700"></div>

            {/* Right Wall */}
            <div className="absolute top-0 bottom-0 right-0 w-1/6 bg-gray-700"></div>

            {/* Pictures on wall */}
            <div className="absolute top-1/4 left-1/4 w-1/8 h-1/8 bg-yellow-800 border-2 border-yellow-600"></div>
            <div className="absolute top-1/3 right-1/3 w-1/10 h-1/12 bg-yellow-800 border-2 border-yellow-600"></div>

            {/* Hallway Perspective Lines */}
            <div className="absolute top-0 bottom-0 left-1/6 w-1 bg-gradient-to-b from-gray-600 to-gray-800"></div>
            <div className="absolute top-0 bottom-0 right-1/6 w-1 bg-gradient-to-b from-gray-600 to-gray-800"></div>
            <div className="absolute bottom-1/4 left-0 right-0 h-1 bg-gray-600"></div>
          </div>
        )

      case 5: // Bedroom
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
            {/* Bed */}
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-1/2 h-1/6 bg-blue-900 rounded-md"></div>
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 -translate-y-8 w-1/6 h-1/12 bg-gray-300 rounded-md"></div>{" "}
            {/* Pillow */}
            {/* Nightstand */}
            <div className="absolute bottom-1/3 right-1/4 w-1/10 h-1/8 bg-yellow-900"></div>
            <div className="absolute bottom-1/3 right-1/4 -translate-y-10 w-6 h-6 bg-yellow-500 rounded-full blur-sm"></div>{" "}
            {/* Lamp */}
            {/* Dresser */}
            <div className="absolute bottom-1/3 left-1/6 w-1/8 h-1/6 bg-yellow-800"></div>
            <div className="absolute bottom-1/3 left-1/6 translate-y-4 w-1/8 h-0.5 bg-yellow-700"></div>{" "}
            {/* Drawer line */}
            <div className="absolute bottom-1/3 left-1/6 translate-y-8 w-1/8 h-0.5 bg-yellow-700"></div>{" "}
            {/* Drawer line */}
            {/* Window */}
            <div className="absolute top-1/4 right-1/6 w-1/6 h-1/4 bg-blue-900/50"></div>
            <div className="absolute top-1/4 right-1/6 w-1/6 h-0.5 bg-gray-500"></div> {/* Window frame */}
            <div className="absolute top-1/4 right-1/6 h-1/4 w-0.5 bg-gray-500"></div> {/* Window frame */}
          </div>
        )

      case 6: // Bathroom
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800"></div>

            {/* Sink */}
            <div className="absolute bottom-1/3 left-1/4 w-1/6 h-1/12 bg-white rounded-t-md"></div>
            <div className="absolute bottom-1/3 left-1/4 translate-y-4 w-1/12 h-1/8 bg-gray-500"></div>

            {/* Mirror */}
            <div className="absolute top-1/4 left-1/4 w-1/6 h-1/4 bg-blue-900/30 border border-gray-500"></div>

            {/* Toilet */}
            <div className="absolute bottom-1/3 right-1/4 w-1/8 h-1/12 bg-white rounded-md"></div>
            <div className="absolute bottom-1/3 right-1/4 -translate-y-6 w-1/10 h-1/8 bg-white rounded-t-md"></div>

            {/* Shower/Tub */}
            <div className="absolute bottom-1/3 right-1/2 w-1/4 h-1/8 bg-blue-100/30 rounded-md"></div>
            <div className="absolute bottom-1/3 right-1/2 translate-y-2 w-1/4 h-1 bg-blue-200/50"></div>

            {/* Shower curtain */}
            <div className="absolute top-1/6 right-1/2 w-1/32 h-1/3 bg-gray-400"></div>
            <div className="absolute top-1/6 right-1/2 translate-x-2 w-1/5 h-1/3 bg-purple-300/30 rounded-tr-md"></div>
          </div>
        )

      default:
        return (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-gray-500">No feed available</div>
          </div>
        )
    }
  }

  return (
    <div className={`w-full h-full ${className}`} style={style}>
      {renderLocation()}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded-md text-white font-mono z-20">
        {getLocationName()}
      </div>
    </div>
  )
}
