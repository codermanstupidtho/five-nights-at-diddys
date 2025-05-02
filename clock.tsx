"use client"

interface ClockProps {
  hour: number
  night: number
}

export default function Clock({ hour, night }: ClockProps) {
  return (
    <div className="bg-gray-900 p-3 rounded-lg border border-gray-800 flex flex-col items-center">
      <div className="text-white font-mono">
        <span className="font-bold">{hour} AM</span>
      </div>
      <div className="text-white font-mono text-sm">
        NIGHT <span className="font-bold">{night}</span>
      </div>
    </div>
  )
}
