"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { createAndDownloadIcons } from "./game-icon"

export default function PWAInstaller() {
  const [installPrompt, setInstallPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isGeneratingIcons, setIsGeneratingIcons] = useState(false)

  useEffect(() => {
    // Register service worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then(
          (registration) => {
            console.log("ServiceWorker registration successful with scope: ", registration.scope)
          },
          (err) => {
            console.log("ServiceWorker registration failed: ", err)
          },
        )
      })
    }

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
    }

    // Listen for the beforeinstallprompt event
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later
      setInstallPrompt(e)
    })

    // Listen for app installed event
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true)
      setInstallPrompt(null)
    })
  }, [])

  const handleInstallClick = () => {
    if (!installPrompt) return

    // Show the install prompt
    installPrompt.prompt()

    // Wait for the user to respond to the prompt
    installPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }
      setInstallPrompt(null)
    })
  }

  const handleGenerateIcons = () => {
    setIsGeneratingIcons(true)
    setTimeout(() => {
      createAndDownloadIcons()
      setIsGeneratingIcons(false)
    }, 100)
  }

  if (isInstalled) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {installPrompt && (
        <Button onClick={handleInstallClick} className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <Download className="mr-2 h-4 w-4" />
          Install Game
        </Button>
      )}
      {isGeneratingIcons && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white">Generating icons...</p>
          </div>
        </div>
      )}
    </div>
  )
}
