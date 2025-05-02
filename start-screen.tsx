"use client"

import { Button } from "@/components/ui/button"
import { AnimatronicImage } from "./animatronic-images"
import { AnimatronicType } from "@/types/game-types"
import { CameraLocation } from "./camera-locations"

interface StartScreenProps {
  onStart: () => void
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 p-4 overflow-y-auto">
      <h1 className="text-6xl font-bold text-yellow-400 mb-8 text-center">Five Nights at Diddy's</h1>
      <div className="max-w-2xl text-center text-gray-300 mb-8">
        <p className="mb-4">Welcome to Diddy's Music Palace! You've been hired as the night security guard.</p>
        <p className="mb-4">
          Your job is to monitor the animatronics through the security cameras and make sure they don't get into your
          office.
        </p>
        <p className="mb-4">Use the door controls to keep them out, but be careful with your power usage!</p>
        <p>Survive until 6 AM to complete your shift.</p>
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Meet the Animatronics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <AnimatronicImage type={AnimatronicType.DIDDY} size="small" />
            <div className="text-yellow-400 font-bold mt-2">Diddy</div>
            <div className="text-gray-300 text-sm">The main star of the show!</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <AnimatronicImage type={AnimatronicType.BABY_OIL_1} size="small" />
            <div className="text-blue-400 font-bold mt-2">Baby Oil 1</div>
            <div className="text-gray-300 text-sm">The slippery backup singer.</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <AnimatronicImage type={AnimatronicType.BABY_OIL_2} size="small" />
            <div className="text-green-400 font-bold mt-2">Baby Oil 2</div>
            <div className="text-gray-300 text-sm">The shiny guitarist.</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
            <AnimatronicImage type={AnimatronicType.BABY_OIL_3} size="small" />
            <div className="text-purple-400 font-bold mt-2">Baby Oil 3</div>
            <div className="text-gray-300 text-sm">The smooth drummer.</div>
          </div>
        </div>
      </div>

      {/* Start Button - Prominently displayed */}
      <Button
        onClick={onStart}
        size="lg"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-8 py-6 mb-8 animate-pulse"
      >
        Start Night 1
      </Button>

      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Locations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-2 rounded-lg">
            <div className="h-32 relative overflow-hidden rounded">
              <CameraLocation cameraNumber={1} />
            </div>
            <div className="text-yellow-400 font-bold mt-2">Stage Area</div>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg">
            <div className="h-32 relative overflow-hidden rounded">
              <CameraLocation cameraNumber={2} />
            </div>
            <div className="text-yellow-400 font-bold mt-2">Living Room</div>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg">
            <div className="h-32 relative overflow-hidden rounded">
              <CameraLocation cameraNumber={3} />
            </div>
            <div className="text-yellow-400 font-bold mt-2">Kitchen</div>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg">
            <div className="h-32 relative overflow-hidden rounded">
              <CameraLocation cameraNumber={4} />
            </div>
            <div className="text-yellow-400 font-bold mt-2">Hallway</div>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg">
            <div className="h-32 relative overflow-hidden rounded">
              <CameraLocation cameraNumber={5} />
            </div>
            <div className="text-yellow-400 font-bold mt-2">Bedroom</div>
          </div>
          <div className="bg-gray-800 p-2 rounded-lg">
            <div className="h-32 relative overflow-hidden rounded">
              <CameraLocation cameraNumber={6} />
            </div>
            <div className="text-yellow-400 font-bold mt-2">Bathroom</div>
          </div>
        </div>
      </div>
    </div>
  )
}
