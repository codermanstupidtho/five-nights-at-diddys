"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { type Animatronic, AnimatronicType } from "@/types/game-types"
import { Monitor, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatronicImage } from "./animatronic-images"
import { CameraLocation } from "./camera-locations"

interface CameraProps {
  onToggleCamera: () => void
  animatronics: Animatronic[]
}

export default function Camera({ onToggleCamera, animatronics }: CameraProps) {
  const [currentCamera, setCurrentCamera] = useState(1)
  const totalCameras = 6

  const handleNextCamera = () => {
    setCurrentCamera((prev) => (prev === totalCameras ? 1 : prev + 1))
  }

  const handlePrevCamera = () => {
    setCurrentCamera((prev) => (prev === 1 ? totalCameras : prev - 1))
  }

  // Get animatronics in the current camera
  const animatronicsInCamera = animatronics.filter((a) => a.location === currentCamera)

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* Camera feed */}
      <div className="w-full max-w-4xl h-[70vh] bg-gray-900 rounded-lg border-4 border-gray-800 overflow-hidden relative">
        {/* Static overlay */}
        <div className="absolute inset-0 bg-static opacity-20 pointer-events-none"></div>

        {/* Camera scan line effect */}
        <div className="absolute inset-0 scan-line pointer-events-none"></div>

        {/* Camera label */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded-md text-white font-mono z-20">
          CAM {currentCamera}
        </div>

        {/* Recording indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black bg-opacity-70 px-3 py-1 rounded-md text-white font-mono z-20">
          <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse"></div>
          <span>REC</span>
        </div>

        {/* Camera content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 z-10">
            <CameraLocation cameraNumber={currentCamera} />
          </div>

          <div className="text-4xl text-gray-500 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-20">
            CAMERA {currentCamera}
          </div>

          {/* Animatronics in this camera */}
          {animatronicsInCamera.map((animatronic) => (
            <div
              key={animatronic.type}
              className="absolute z-30"
              style={{
                top: `${30 + Math.random() * 40}%`,
                left: `${20 + Math.random() * 60}%`,
              }}
            >
              <div className="flex flex-col items-center">
                <AnimatronicImage type={animatronic.type} size="medium" />
                <div className="text-sm font-mono mt-2 bg-black bg-opacity-50 px-2 py-1 rounded">
                  {animatronic.type === AnimatronicType.DIDDY && <span className="text-yellow-400">DIDDY</span>}
                  {animatronic.type === AnimatronicType.BABY_OIL_1 && <span className="text-blue-400">BABY OIL 1</span>}
                  {animatronic.type === AnimatronicType.BABY_OIL_2 && (
                    <span className="text-green-400">BABY OIL 2</span>
                  )}
                  {animatronic.type === AnimatronicType.BABY_OIL_3 && (
                    <span className="text-purple-400">BABY OIL 3</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Camera controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevCamera}
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
          Exit Camera
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNextCamera}
          className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white h-12 w-12"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
