export function generateGameIcon(size = 512) {
  // Create a canvas element
  const canvas = document.createElement("canvas")
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext("2d")

  if (!ctx) return null

  // Draw background
  ctx.fillStyle = "#000000"
  ctx.fillRect(0, 0, size, size)

  // Draw Diddy's face
  const faceSize = size * 0.7
  const x = (size - faceSize) / 2
  const y = (size - faceSize) / 2

  // Face circle
  ctx.fillStyle = "#FFD700" // Gold color for Diddy
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, faceSize / 2, 0, Math.PI * 2)
  ctx.fill()

  // Eyes
  const eyeSize = faceSize * 0.15
  const eyeY = y + faceSize * 0.35
  const leftEyeX = x + faceSize * 0.3
  const rightEyeX = x + faceSize * 0.7

  ctx.fillStyle = "#000000"
  ctx.beginPath()
  ctx.arc(leftEyeX, eyeY, eyeSize, 0, Math.PI * 2)
  ctx.arc(rightEyeX, eyeY, eyeSize, 0, Math.PI * 2)
  ctx.fill()

  // Mouth
  ctx.beginPath()
  ctx.arc(size / 2, y + faceSize * 0.7, faceSize * 0.2, 0, Math.PI)
  ctx.fill()

  // Add text
  ctx.fillStyle = "#FFFFFF"
  ctx.font = `bold ${size * 0.07}px Arial`
  ctx.textAlign = "center"
  ctx.fillText("FIVE NIGHTS AT", size / 2, size * 0.85)
  ctx.fillText("DIDDY'S", size / 2, size * 0.92)

  return canvas.toDataURL("image/png")
}

export function createAndDownloadIcons() {
  const sizes = [192, 512]

  sizes.forEach((size) => {
    const iconData = generateGameIcon(size)
    if (iconData) {
      const link = document.createElement("a")
      link.download = `icon-${size}x${size}.png`
      link.href = iconData
      link.click()
    }
  })
}
