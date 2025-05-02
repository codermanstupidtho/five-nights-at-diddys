import { AnimatronicType } from "@/types/game-types"

interface AnimatronicImageProps {
  type: AnimatronicType
  size?: "small" | "medium" | "large" | "jumpscare"
  className?: string
}

export function AnimatronicImage({ type, size = "medium", className = "" }: AnimatronicImageProps) {
  const getSize = () => {
    switch (size) {
      case "small":
        return "w-16 h-16"
      case "medium":
        return "w-32 h-32"
      case "large":
        return "w-48 h-48"
      case "jumpscare":
        return "w-80 h-80"
      default:
        return "w-32 h-32"
    }
  }

  const getColor = () => {
    switch (type) {
      case AnimatronicType.DIDDY:
        return "#FFD700" // Gold/yellow for Diddy
      case AnimatronicType.BABY_OIL_1:
        return "#3B82F6" // Blue for Baby Oil 1
      case AnimatronicType.BABY_OIL_2:
        return "#10B981" // Green for Baby Oil 2
      case AnimatronicType.BABY_OIL_3:
        return "#8B5CF6" // Purple for Baby Oil 3
      default:
        return "#FFFFFF"
    }
  }

  const getName = () => {
    switch (type) {
      case AnimatronicType.DIDDY:
        return "DIDDY"
      case AnimatronicType.BABY_OIL_1:
        return "BABY OIL 1"
      case AnimatronicType.BABY_OIL_2:
        return "BABY OIL 2"
      case AnimatronicType.BABY_OIL_3:
        return "BABY OIL 3"
      default:
        return "UNKNOWN"
    }
  }

  return (
    <div className={`${getSize()} ${className} flex flex-col items-center justify-center`}>
      <div
        className={`rounded-full ${
          size === "jumpscare" ? "w-64 h-64" : "w-full h-full"
        } flex items-center justify-center`}
        style={{ backgroundColor: getColor(), boxShadow: `0 0 20px ${getColor()}` }}
      >
        <div className="relative w-full h-full">
          {/* Eyes */}
          <div className="absolute top-1/4 left-1/4 w-1/6 h-1/6 rounded-full bg-black"></div>
          <div className="absolute top-1/4 right-1/4 w-1/6 h-1/6 rounded-full bg-black"></div>

          {/* Mouth */}
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-1/2 h-1/6 rounded-full bg-black"></div>
        </div>
      </div>
      {size === "jumpscare" && (
        <div className="text-4xl font-bold mt-4" style={{ color: getColor() }}>
          {getName()}
        </div>
      )}
    </div>
  )
}
