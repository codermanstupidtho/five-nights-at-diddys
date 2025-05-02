"use client"

import { Button } from "@/components/ui/button"
import { AnimatronicType } from "@/types/game-types"
import { AnimatronicImage } from "./animatronic-images"

interface GameOverProps {
  animatronic: AnimatronicType
  onRestart: () => void
}

export default function GameOver({ animatronic, onRestart }: GameOverProps) {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <h1 className="text-6xl font-bold text-red-600 mb-8">GAME OVER</h1>

      <AnimatronicImage type={animatronic} size="large" className="mb-8" />

      <div className="text-4xl mb-8 text-center">
        {animatronic === AnimatronicType.DIDDY && <span className="text-yellow-400">Diddy got you!</span>}
        {animatronic === AnimatronicType.BABY_OIL_1 && <span className="text-blue-400">Baby Oil 1 got you!</span>}
        {animatronic === AnimatronicType.BABY_OIL_2 && <span className="text-green-400">Baby Oil 2 got you!</span>}
        {animatronic === AnimatronicType.BABY_OIL_3 && <span className="text-purple-400">Baby Oil 3 got you!</span>}
      </div>

      <Button onClick={onRestart} size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl">
        Try Again
      </Button>
    </div>
  )
}
