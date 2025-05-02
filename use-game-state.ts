"use client"

import { useState, useEffect, useCallback } from "react"
import { type Animatronic, AnimatronicType } from "@/types/game-types"

export function useGameState() {
  // Game state
  const [night, setNight] = useState(1)
  const [hour, setHour] = useState(0)
  const [power, setPower] = useState(100)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)

  // Door and light states
  const [leftDoorClosed, setLeftDoorClosed] = useState(false)
  const [rightDoorClosed, setRightDoorClosed] = useState(false)
  const [leftLightOn, setLeftLightOn] = useState(false)
  const [rightLightOn, setRightLightOn] = useState(false)

  // Animatronics
  const [animatronics, setAnimatronics] = useState<Animatronic[]>([
    {
      type: AnimatronicType.DIDDY,
      location: 1,
      difficulty: 0,
      atLeftDoor: false,
      atRightDoor: false,
      inOffice: false,
    },
    {
      type: AnimatronicType.BABY_OIL_1,
      location: 3,
      difficulty: 0,
      atLeftDoor: false,
      atRightDoor: false,
      inOffice: false,
    },
    {
      type: AnimatronicType.BABY_OIL_2,
      location: 4,
      difficulty: 0,
      atLeftDoor: false,
      atRightDoor: false,
      inOffice: false,
    },
    {
      type: AnimatronicType.BABY_OIL_3,
      location: 5,
      difficulty: 0,
      atLeftDoor: false,
      atRightDoor: false,
      inOffice: false,
    },
  ])

  // Game clock
  useEffect(() => {
    if (gameOver || win || !hour) return

    const hourInterval = setInterval(() => {
      setHour((prev) => {
        const newHour = prev + 1
        if (newHour >= 6) {
          setWin(true)
          return prev
        }
        return newHour
      })
    }, 45000) // Each hour lasts 45 seconds

    return () => clearInterval(hourInterval)
  }, [hour, gameOver, win])

  // Power consumption
  useEffect(() => {
    if (gameOver || win || power <= 0) return

    // Base power consumption
    let consumption = 1

    // Additional consumption for doors and lights
    if (leftDoorClosed) consumption += 1
    if (rightDoorClosed) consumption += 1
    if (leftLightOn) consumption += 0.5
    if (rightLightOn) consumption += 0.5

    const powerInterval = setInterval(() => {
      setPower((prev) => {
        const newPower = Math.max(0, prev - consumption * 0.1)
        if (newPower <= 0) {
          // Power outage
          setLeftDoorClosed(false)
          setRightDoorClosed(false)
          setLeftLightOn(false)
          setRightLightOn(false)

          // Give the player a few seconds before game over
          setTimeout(() => {
            setAnimatronics((prev) =>
              prev.map((a) => (a.type === AnimatronicType.DIDDY ? { ...a, inOffice: true } : a)),
            )
            setGameOver(true)
          }, 5000)
        }
        return newPower
      })
    }, 1000)

    return () => clearInterval(powerInterval)
  }, [leftDoorClosed, rightDoorClosed, leftLightOn, rightLightOn, gameOver, win, power]) // Removed animatronics

  // Animatronic AI
  useEffect(() => {
    if (gameOver || win) return

    // Initial setup of animatronics when night changes
    const setupAnimatronics = () => {
      setAnimatronics((prev) =>
        prev.map((a) => ({
          ...a,
          difficulty: Math.min(20, night * 2 + (a.type === AnimatronicType.DIDDY ? 1 : 0)),
        })),
      )
    }

    setupAnimatronics()

    // Animatronic movement logic
    const moveInterval = setInterval(() => {
      setAnimatronics((prev) => {
        return prev.map((animatronic) => {
          // Skip if already in office
          if (animatronic.inOffice) return animatronic

          // Chance to move based on difficulty
          const willMove = Math.random() * 20 < animatronic.difficulty
          if (!willMove) return animatronic

          // Current state
          const { location, atLeftDoor, atRightDoor } = animatronic

          // If at door, try to enter office
          if (atLeftDoor) {
            if (!leftDoorClosed) {
              return { ...animatronic, atLeftDoor: false, inOffice: true }
            }
            // Random chance to leave door
            if (Math.random() < 0.3) {
              return { ...animatronic, atLeftDoor: false, location: Math.floor(Math.random() * 6) + 1 }
            }
            return animatronic
          }

          if (atRightDoor) {
            if (!rightDoorClosed) {
              return { ...animatronic, atRightDoor: false, inOffice: true }
            }
            // Random chance to leave door
            if (Math.random() < 0.3) {
              return { ...animatronic, atRightDoor: false, location: Math.floor(Math.random() * 6) + 1 }
            }
            return animatronic
          }

          // Move to a new location or door
          const newLocation = Math.floor(Math.random() * 8)

          // Special locations 6 and 7 represent left and right door
          if (newLocation === 6) {
            return { ...animatronic, location: 0, atLeftDoor: true }
          } else if (newLocation === 7) {
            return { ...animatronic, location: 0, atRightDoor: true }
          } else {
            return { ...animatronic, location: newLocation + 1, atLeftDoor: false, atRightDoor: false }
          }
        })
      })
    }, 3000)

    return () => clearInterval(moveInterval)
  }, [night, gameOver, win, leftDoorClosed, rightDoorClosed]) // Removed animatronics from dependencies

  // Door and light controls
  const toggleLeftDoor = useCallback(() => {
    setLeftDoorClosed((prev) => !prev)
    // Turn off light when closing door
    if (!leftDoorClosed) setLeftLightOn(false)
  }, [leftDoorClosed])

  const toggleRightDoor = useCallback(() => {
    setRightDoorClosed((prev) => !prev)
    // Turn off light when closing door
    if (!rightDoorClosed) setRightLightOn(false)
  }, [rightDoorClosed])

  const toggleLeftLight = useCallback(() => {
    setLeftLightOn((prev) => !prev)
  }, [])

  const toggleRightLight = useCallback(() => {
    setRightLightOn((prev) => !prev)
  }, [])

  // Start a new night
  const startNight = useCallback(() => {
    setHour(0)
    setPower(100)
    setGameOver(false)
    setWin(false)
    setLeftDoorClosed(false)
    setRightDoorClosed(false)
    setLeftLightOn(false)
    setRightLightOn(false)

    // Reset animatronics
    setAnimatronics([
      {
        type: AnimatronicType.DIDDY,
        location: 1,
        difficulty: 0,
        atLeftDoor: false,
        atRightDoor: false,
        inOffice: false,
      },
      {
        type: AnimatronicType.BABY_OIL_1,
        location: 3,
        difficulty: 0,
        atLeftDoor: false,
        atRightDoor: false,
        inOffice: false,
      },
      {
        type: AnimatronicType.BABY_OIL_2,
        location: 4,
        difficulty: 0,
        atLeftDoor: false,
        atRightDoor: false,
        inOffice: false,
      },
      {
        type: AnimatronicType.BABY_OIL_3,
        location: 5,
        difficulty: 0,
        atLeftDoor: false,
        atRightDoor: false,
        inOffice: false,
      },
    ])

    // Increment night if won
    if (win) {
      setNight((prev) => (prev >= 5 ? 1 : prev + 1))
    }

    // Start the clock
    setTimeout(() => {
      setHour(1)
    }, 3000)
  }, [win])

  // Reset game
  const resetGame = useCallback(() => {
    setNight(1)
    startNight()
  }, [startNight])

  return {
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
  }
}
