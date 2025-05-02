import Game from "@/components/game"
import PWAInstaller from "@/components/pwa-installer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Game />
      <PWAInstaller />
    </main>
  )
}
