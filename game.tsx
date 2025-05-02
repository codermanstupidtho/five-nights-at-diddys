"use client"

import { useState } from "react"
import Office from "./office"
import Camera from "./camera"
import PowerIndicator from "./power-indicator"
import Clock from "./clock"
import GameOver from "./game-over"
import WinScreen from "./win-screen"
import StartScreen from "./start-screen"
import GenerateStandalone from "../scripts/generate-standalone"
import { useGameState } from "@/hooks/use-game-state"
import { AnimatronicType } from "@/types/game-types"

export default function Game() {
  const [gameStarted, setGameStarted] = useState(false)
  const [showCamera, setShowCamera] = useState(false)
  const {
    night,
    hour,
    power,
    leftDoorClosed,
    rightDoorClosed,
    leftLightOn,
    rightLightOn,
    animatronics,
    gameOver,
    win,
    toggleLeftDoor,
    toggleRightDoor,
    toggleLeftLight,
    toggleRightLight,
    startNight,
    resetGame,
  } = useGameState()

  const handleStartGame = () => {
    startNight()
    setGameStarted(true)
    console.log("Game started!") // Debug log
  }

  const handleToggleCamera = () => {
    setShowCamera(!showCamera)
  }

  // Always show the start screen if game hasn't started
  if (!gameStarted) {
    return (
      <>
        <StartScreen onStart={handleStartGame} />
        <GenerateStandalone />
      </>
    )
  }

  if (gameOver) {
    return (
      <GameOver
        animatronic={animatronics.find((a) => a.inOffice)?.type || AnimatronicType.DIDDY}
        onRestart={resetGame}
      />
    )
  }

  if (win) {
    return <WinScreen night={night} onNextNight={startNight} />
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-4 left-4 z-50">
        <Clock hour={hour} night={night} />
      </div>
      <div className="absolute top-4 right-4 z-50">
        <PowerIndicator power={power} />
      </div>

      {showCamera ? (
        <Camera onToggleCamera={handleToggleCamera} animatronics={animatronics} />
      ) : (
        <Office
          onToggleCamera={handleToggleCamera}
          leftDoorClosed={leftDoorClosed}
          rightDoorClosed={rightDoorClosed}
          leftLightOn={leftLightOn}
          rightLightOn={rightLightOn}
          toggleLeftDoor={toggleLeftDoor}
          toggleRightDoor={toggleRightDoor}
          toggleLeftLight={toggleLeftLight}
          toggleRightLight={toggleRightLight}
          animatronics={animatronics}
        />
      )}
    </div>
  )
}
