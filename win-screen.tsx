"use client"

import { Button } from "@/components/ui/button"

interface WinScreenProps {
  night: number
  onNextNight: () => void
}

export default function WinScreen({ night, onNextNight }: WinScreenProps) {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <h1 className="text-6xl font-bold text-green-500 mb-8">6 AM</h1>
      <div className="text-4xl mb-8 text-white">You survived Night {night}!</div>

      {night < 5 ? (
        <Button
          onClick={onNextNight}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl"
        >
          Continue to Night {night + 1}
        </Button>
      ) : (
        <div className="text-center">
          <div className="text-3xl text-yellow-400 mb-4">Congratulations!</div>
          <div className="text-xl text-gray-300 mb-8">You completed all five nights at Diddy's!</div>
          <Button
            onClick={onNextNight}
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl"
          >
            Play Again
          </Button>
        </div>
      )}
    </div>
  )
}
