"use client"

import { BatteryLow, BatteryMedium, BatteryFull, BatteryWarning } from "lucide-react"

interface PowerIndicatorProps {
  power: number
}

export default function PowerIndicator({ power }: PowerIndicatorProps) {
  // Determine which battery icon to show based on power level
  const getBatteryIcon = () => {
    if (power <= 20) return <BatteryWarning className="h-6 w-6 text-red-500" />
    if (power <= 40) return <BatteryLow className="h-6 w-6 text-orange-500" />
    if (power <= 70) return <BatteryMedium className="h-6 w-6 text-yellow-500" />
    return <BatteryFull className="h-6 w-6 text-green-500" />
  }

  return (
    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 flex items-center gap-2">
      {getBatteryIcon()}
      <div className="text-white font-mono">
        <span className="font-bold">{power}%</span> POWER
      </div>
    </div>
  )
}
