import { AnimatronicType } from "@/types/game-types"
import { AnimatronicImage } from "./animatronic-images"

interface HallwayViewProps {
  direction: "left" | "right"
  lightOn: boolean
  doorClosed: boolean
  animatronicPresent: boolean
  animatronicType?: AnimatronicType
}

export function HallwayView({
  direction,
  lightOn,
  doorClosed,
  animatronicPresent,
  animatronicType = AnimatronicType.DIDDY,
}: HallwayViewProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Door (shown when closed) */}
      {doorClosed ? (
        <div className="absolute inset-0 bg-gray-800 border-4 border-gray-700 flex items-center justify-center">
          <div className="text-gray-600 font-bold text-2xl">DOOR CLOSED</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-16 bg-gray-700 rounded-md"></div>
        </div>
      ) : (
        <>
          {/* Hallway view (when door is open) */}
          <div
            className={`absolute inset-0 transition-all duration-300 ${
              lightOn ? "brightness-100" : "brightness-[0.15]"
            }`}
          >
            {/* Hallway perspective */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
              {/* Floor */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-700 to-gray-800"
                style={{
                  perspective: "1000px",
                  transform: "rotateX(60deg)",
                  transformOrigin: "bottom",
                }}
              >
                <div
                  className="w-full h-full opacity-30"
                  style={{
                    backgroundImage:
                      direction === "left"
                        ? "repeating-linear-gradient(to right, #333, #333 20px, #222 20px, #222 40px)"
                        : "repeating-linear-gradient(to left, #333, #333 20px, #222 20px, #222 40px)",
                    backgroundSize: "40px 100%",
                  }}
                ></div>
              </div>

              {/* Wall with perspective */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-800">
                {/* Wall decoration */}
                <div
                  className={`absolute top-1/3 ${
                    direction === "left" ? "left-1/4" : "right-1/4"
                  } w-16 h-24 bg-yellow-900 border border-yellow-800 rounded-sm`}
                ></div>
              </div>

              <div className="absolute inset-y-0 right-0 w-1/2 bg-gray-800">
                {/* Wall decoration */}
                <div
                  className={`absolute top-1/2 ${
                    direction === "left" ? "right-1/4" : "left-1/4"
                  } w-12 h-16 bg-blue-900 border border-blue-800 rounded-sm`}
                ></div>
              </div>

              {/* Ceiling */}
              <div
                className="absolute top-0 left-0 right-0 h-1/6 bg-gray-900"
                style={{
                  perspective: "1000px",
                  transform: "rotateX(-30deg)",
                  transformOrigin: "top",
                }}
              ></div>

              {/* Door frame */}
              <div className="absolute inset-0 border-8 border-gray-700 pointer-events-none"></div>

              {/* Light effect when light is on */}
              {lightOn && (
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/10 to-transparent pointer-events-none"></div>
              )}

              {/* Animatronic in hallway */}
              {animatronicPresent && lightOn && (
                <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center">
                  <div className="relative">
                    <AnimatronicImage type={animatronicType} size="large" />
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-black/50 rounded-full blur-md -z-10"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
