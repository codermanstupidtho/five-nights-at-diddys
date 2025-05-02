"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import type { Animatronic, AnimatronicType } from "@/types/game-types"
import { Monitor, DoorClosed, DoorOpen, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatronicImage } from "./animatronic-images"
import { OfficeBackground } from "./office-background"
import { HallwayView } from "./hallway-view"

// Define view directions
type ViewDirection = "left" | "center" | "right"

interface OfficeProps {
  onToggleCamera: () => void
  leftDoorClosed: boolean
  rightDoorClosed: boolean
  leftLightOn: boolean
  rightLightOn: boolean
  toggleLeftDoor: () => void
  toggleRightDoor: () => void
  toggleLeftLight: () => void
  toggleRightLight: () => void
  animatronics: Animatronic[]
}

export default function Office({
  onToggleCamera,
  leftDoorClosed,
  rightDoorClosed,
  leftLightOn,
  rightLightOn,
  toggleLeftDoor,
  toggleRightDoor,
  toggleLeftLight,
  toggleRightLight,
  animatronics,
}: OfficeProps) {
  // Add view direction state
  const [viewDirection, setViewDirection] = useState<ViewDirection>("center")
  const [jumpscareActive, setJumpscareActive] = useState(false)
  const [jumpscareAnimatronic, setJumpscareAnimatronic] = useState<AnimatronicType | null>(null)

  // Check for animatronics in the office
  useEffect(() => {
    const officeAnimatronic = animatronics.find((a) => a.inOffice)
    if (officeAnimatronic && !jumpscareActive) {
      setJumpscareAnimatronic(officeAnimatronic.type)
      setJumpscareActive(true)
    }
  }, [animatronics, jumpscareActive])

  // Functions to change view direction
  const turnLeft = () => {
    if (viewDirection === "center") setViewDirection("left")
    else if (viewDirection === "right") setViewDirection("center")
  }

  const turnRight = () => {
    if (viewDirection === "center") setViewDirection("right")
    else if (viewDirection === "left") setViewDirection("center")
  }

  // Render jumpscare if active
  if (jumpscareActive && jumpscareAnimatronic) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
        <div className="animate-jumpscare">
          <AnimatronicImage type={jumpscareAnimatronic} size="jumpscare" />
        </div>
      </div>
    )
  }

  // Check for animatronics at doors
  const leftDoorAnimatronic = animatronics.find((a) => a.atLeftDoor)
  const rightDoorAnimatronic = animatronics.find((a) => a.atRightDoor)

  return (
    <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center">
      {/* Office background - changes based on view direction */}
      <div
        className="absolute inset-0 transition-transform duration-300"
        style={{
          transform:
            viewDirection === "center"
              ? "translateX(0)"
              : viewDirection === "left"
                ? "translateX(25%)"
                : "translateX(-25%)",
        }}
      >
        <OfficeBackground />
      </div>

      {/* Left door/hallway view - only visible when looking left */}
      {viewDirection === "left" && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-full h-full max-w-4xl max-h-[70vh] relative">
            {/* Hallway view */}
            <div className="absolute inset-0">
              <HallwayView
                direction="left"
                lightOn={leftLightOn}
                doorClosed={leftDoorClosed}
                animatronicPresent={!!leftDoorAnimatronic}
                animatronicType={leftDoorAnimatronic?.type}
              />
            </div>

            {/* Door controls - positioned on the right side of the view */}
            <div className="absolute right-8 inset-y-0 flex flex-col items-center justify-center gap-8 z-20">
              <Button
                variant={leftDoorClosed ? "destructive" : "outline"}
                size="lg"
                onClick={toggleLeftDoor}
                className="w-20 h-20 rounded-full bg-gray-800 border-gray-700"
              >
                {leftDoorClosed ? <DoorClosed className="h-8 w-8" /> : <DoorOpen className="h-8 w-8" />}
              </Button>
              <Button
                variant={leftLightOn ? "default" : "outline"}
                size="lg"
                onClick={toggleLeftLight}
                className="w-20 h-20 rounded-full bg-gray-800 border-gray-700"
              >
                <Lightbulb className={`h-8 w-8 ${leftLightOn ? "text-yellow-300" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Right door/hallway view - only visible when looking right */}
      {viewDirection === "right" && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-full h-full max-w-4xl max-h-[70vh] relative">
            {/* Hallway view */}
            <div className="absolute inset-0">
              <HallwayView
                direction="right"
                lightOn={rightLightOn}
                doorClosed={rightDoorClosed}
                animatronicPresent={!!rightDoorAnimatronic}
                animatronicType={rightDoorAnimatronic?.type}
              />
            </div>

            {/* Door controls - positioned on the left side of the view */}
            <div className="absolute left-8 inset-y-0 flex flex-col items-center justify-center gap-8 z-20">
              <Button
                variant={rightDoorClosed ? "destructive" : "outline"}
                size="lg"
                onClick={toggleRightDoor}
                className="w-20 h-20 rounded-full bg-gray-800 border-gray-700"
              >
                {rightDoorClosed ? <DoorClosed className="h-8 w-8" /> : <DoorOpen className="h-8 w-8" />}
              </Button>
              <Button
                variant={rightLightOn ? "default" : "outline"}
                size="lg"
                onClick={toggleRightLight}
                className="w-20 h-20 rounded-full bg-gray-800 border-gray-700"
              >
                <Lightbulb className={`h-8 w-8 ${rightLightOn ? "text-yellow-300" : ""}`} />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Center view - main office view */}
      {viewDirection === "center" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Center view content */}
          <div className="w-full max-w-4xl h-[70vh] relative flex items-center justify-center">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/6 h-2/3 bg-gray-800 border-r-4 border-gray-700 opacity-70"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/6 h-2/3 bg-gray-800 border-l-4 border-gray-700 opacity-70"></div>
          </div>
        </div>
      )}

      {/* Navigation controls - always visible */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={turnLeft}
          disabled={viewDirection === "right"}
          className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white h-12 w-12"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={onToggleCamera}
          className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
        >
          <Monitor className="mr-2 h-5 w-5" />
          Toggle Camera
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={turnRight}
          disabled={viewDirection === "left"}
          className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white h-12 w-12"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* View direction indicator */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full z-20">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${viewDirection === "left" ? "bg-green-500" : "bg-gray-500"}`}></div>
          <div className={`w-3 h-3 rounded-full ${viewDirection === "center" ? "bg-green-500" : "bg-gray-500"}`}></div>
          <div className={`w-3 h-3 rounded-full ${viewDirection === "right" ? "bg-green-500" : "bg-gray-500"}`}></div>
        </div>
      </div>
    </div>
  )
}
