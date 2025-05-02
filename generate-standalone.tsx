"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

export default function GenerateStandalone() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)

    try {
      // Create a complete HTML document with all necessary scripts inlined
      const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Five Nights at Diddy's - Offline Version</title>
  <style>
    /* Base styles */
    body, html {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: #000;
      color: #fff;
      height: 100%;
      overflow: hidden;
    }
    
    /* Game container */
    #game-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    /* Button styles */
    .button {
      background-color: #FFD700;
      color: #000;
      border: none;
      padding: 12px 24px;
      font-size: 18px;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      margin: 10px;
      transition: background-color 0.3s;
    }
    
    .button:hover {
      background-color: #FFC000;
    }
    
    .button:disabled {
      background-color: #555;
      color: #888;
      cursor: not-allowed;
    }
    
    /* Animatronic styles */
    .animatronic {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 10px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .animatronic-face {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .animatronic-eye {
      width: 20px;
      height: 20px;
      background-color: #000;
      border-radius: 50%;
      position: absolute;
    }
    
    .animatronic-eye.left {
      left: 25px;
      top: 30px;
    }
    
    .animatronic-eye.right {
      right: 25px;
      top: 30px;
    }
    
    .animatronic-mouth {
      width: 40px;
      height: 20px;
      background-color: #000;
      border-radius: 0 0 20px 20px;
      position: absolute;
      bottom: 25px;
    }
    
    .animatronic-name {
      margin-top: 10px;
      font-weight: bold;
    }
    
    /* Game screens */
    .screen {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #000;
      transition: opacity 0.5s;
    }
    
    .hidden {
      display: none;
    }
    
    /* Start screen */
    #start-screen {
      text-align: center;
      padding: 20px;
    }
    
    .title {
      font-size: 48px;
      color: #FFD700;
      margin-bottom: 20px;
    }
    
    .description {
      max-width: 600px;
      margin: 0 auto 30px;
      line-height: 1.6;
    }
    
    .animatronics-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }
    
    /* Game screen */
    #game-screen {
      background-color: #111;
    }
    
    .office {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    
    .controls {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 10px;
    }
    
    .door-controls {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    
    .door-controls.left {
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    
    .door-controls.right {
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
    
    .info-display {
      position: absolute;
      top: 20px;
      display: flex;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 10px;
      border-radius: 8px;
    }
    
    .info-display.left {
      left: 20px;
    }
    
    .info-display.right {
      right: 20px;
    }
    
    /* Game over screen */
    #game-over-screen {
      background-color: #300;
    }
    
    .game-over-title {
      font-size: 64px;
      color: #F00;
      margin-bottom: 30px;
    }
    
    /* Win screen */
    #win-screen {
      background-color: #031;
    }
    
    .win-title {
      font-size: 64px;
      color: #0F0;
      margin-bottom: 30px;
    }
    
    /* Camera view */
    .camera-view {
      width: 100%;
      height: 100%;
      background-color: #222;
      position: relative;
    }
    
    .camera-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-image: linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%);
    }
    
    .camera-static {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      pointer-events: none;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
    
    .camera-label {
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-family: monospace;
    }
    
    .camera-rec {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-family: monospace;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    
    .camera-rec-dot {
      width: 10px;
      height: 10px;
      background-color: red;
      border-radius: 50%;
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    /* Jumpscare animation */
    @keyframes jumpscare {
      0% { transform: scale(0.1); opacity: 0; }
      10% { transform: scale(1.3); opacity: 1; }
      20% { transform: scale(0.9); }
      30% { transform: scale(1.1); }
      40% { transform: scale(0.95); }
      50% { transform: scale(1.05); }
      60% { transform: scale(0.98); }
      70% { transform: scale(1.02); }
      80% { transform: scale(0.99); }
      100% { transform: scale(1); }
    }
    
    .jumpscare {
      animation: jumpscare 0.8s ease-in-out forwards;
    }
  </style>
</head>
<body>
  <div id="game-container">
    <!-- Start Screen -->
    <div id="start-screen" class="screen">
      <h1 class="title">Five Nights at Diddy's</h1>
      <div class="description">
        <p>Welcome to Diddy's Music Palace! You've been hired as the night security guard.</p>
        <p>Your job is to monitor the animatronics through the security cameras and make sure they don't get into your office.</p>
        <p>Use the door controls to keep them out, but be careful with your power usage!</p>
        <p>Survive until 6 AM to complete your shift.</p>
      </div>
      
      <h2 style="color: #FFD700; margin-bottom: 20px;">Meet the Animatronics</h2>
      <div class="animatronics-container">
        <!-- Diddy -->
        <div class="animatronic">
          <div class="animatronic-face" style="background-color: #FFD700; box-shadow: 0 0 20px #FFD700;">
            <div class="animatronic-eye left"></div>
            <div class="animatronic-eye right"></div>
            <div class="animatronic-mouth"></div>
          </div>
          <div class="animatronic-name" style="color: #FFD700;">Diddy</div>
          <div style="color: #AAA; font-size: 12px;">The main star of the show!</div>
        </div>
        
        <!-- Baby Oil 1 -->
        <div class="animatronic">
          <div class="animatronic-face" style="background-color: #3B82F6; box-shadow: 0 0 20px #3B82F6;">
            <div class="animatronic-eye left"></div>
            <div class="animatronic-eye right"></div>
            <div class="animatronic-mouth"></div>
          </div>
          <div class="animatronic-name" style="color: #3B82F6;">Baby Oil 1</div>
          <div style="color: #AAA; font-size: 12px;">The slippery backup singer.</div>
        </div>
        
        <!-- Baby Oil 2 -->
        <div class="animatronic">
          <div class="animatronic-face" style="background-color: #10B981; box-shadow: 0 0 20px #10B981;">
            <div class="animatronic-eye left"></div>
            <div class="animatronic-eye right"></div>
            <div class="animatronic-mouth"></div>
          </div>
          <div class="animatronic-name" style="color: #10B981;">Baby Oil 2</div>
          <div style="color: #AAA; font-size: 12px;">The shiny guitarist.</div>
        </div>
        
        <!-- Baby Oil 3 -->
        <div class="animatronic">
          <div class="animatronic-face" style="background-color: #8B5CF6; box-shadow: 0 0 20px #8B5CF6;">
            <div class="animatronic-eye left"></div>
            <div class="animatronic-eye right"></div>
            <div class="animatronic-mouth"></div>
          </div>
          <div class="animatronic-name" style="color: #8B5CF6;">Baby Oil 3</div>
          <div style="color: #AAA; font-size: 12px;">The smooth drummer.</div>
        </div>
      </div>
      
      <button id="start-button" class="button">Start Night 1</button>
      
      <h2 style="color: #FFD700; margin: 30px 0 20px;">Locations</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; max-width: 800px;">
        <div style="background-color: #222; padding: 10px; border-radius: 8px; text-align: center;">
          <div style="height: 120px; background-color: #333; border-radius: 4px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #666;">Stage Area</span>
          </div>
          <div style="color: #FFD700; font-weight: bold;">Stage Area</div>
        </div>
        <div style="background-color: #222; padding: 10px; border-radius: 8px; text-align: center;">
          <div style="height: 120px; background-color: #333; border-radius: 4px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #666;">Living Room</span>
          </div>
          <div style="color: #FFD700; font-weight: bold;">Living Room</div>
        </div>
        <div style="background-color: #222; padding: 10px; border-radius: 8px; text-align: center;">
          <div style="height: 120px; background-color: #333; border-radius: 4px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #666;">Kitchen</span>
          </div>
          <div style="color: #FFD700; font-weight: bold;">Kitchen</div>
        </div>
        <div style="background-color: #222; padding: 10px; border-radius: 8px; text-align: center;">
          <div style="height: 120px; background-color: #333; border-radius: 4px; margin-bottom: 10px; display: flex; align-items: center; justify-content: center;">
            <span style="color: #666;">Hallway</span>
          </div>
          <div style="color: #FFD700; font-weight: bold;">Hallway</div>
        </div>
      </div>
    </div>
    
    <!-- Game Screen -->
    <div id="game-screen" class="screen hidden">
      <div class="office">
        <div class="info-display left">
          <div id="clock">12 AM<br>Night 1</div>
        </div>
        <div class="info-display right">
          <div id="power">100% POWER</div>
        </div>
        
        <div id="view-container" class="view-container">
          <!-- This will be filled by JS -->
        </div>
        
        <div class="controls">
          <button id="left-button" class="button">← Look Left</button>
          <button id="camera-button" class="button">Toggle Camera</button>
          <button id="right-button" class="button">Look Right →</button>
        </div>
      </div>
    </div>
    
    <!-- Camera Screen -->
    <div id="camera-screen" class="screen hidden">
      <div class="camera-view">
        <div class="camera-static"></div>
        <div class="camera-overlay"></div>
        <div class="camera-label">CAM <span id="camera-number">1</span></div>
        <div class="camera-rec">
          <div class="camera-rec-dot"></div>
          <span>REC</span>
        </div>
        
        <div id="camera-content" class="camera-content">
          <!-- This will be filled by JS -->
        </div>
        
        <div class="controls">
          <button id="prev-camera" class="button">← Prev</button>
          <button id="exit-camera" class="button">Exit Camera</button>
          <button id="next-camera" class="button">Next →</button>
        </div>
      </div>
    </div>
    
    <!-- Game Over Screen -->
    <div id="game-over-screen" class="screen hidden">
      <h1 class="game-over-title">GAME OVER</h1>
      <div id="game-over-animatronic" style="margin-bottom: 30px;">
        <!-- This will be filled by JS -->
      </div>
      <div id="game-over-message" style="font-size: 24px; margin-bottom: 30px;">
        <!-- This will be filled by JS -->
      </div>
      <button id="restart-button" class="button">Try Again</button>
    </div>
    
    <!-- Win Screen -->
    <div id="win-screen" class="screen hidden">
      <h1 class="win-title">6 AM</h1>
      <div id="win-message" style="font-size: 24px; margin-bottom: 30px;">
        You survived Night <span id="win-night">1</span>!
      </div>
      <button id="continue-button" class="button">Continue to Next Night</button>
    </div>
  </div>

  <script>
    // Game state
    const gameState = {
      gameStarted: false,
      night: 1,
      hour: 0,
      power: 100,
      leftDoorClosed: false,
      rightDoorClosed: false,
      leftLightOn: false,
      rightLightOn: false,
      viewDirection: 'center', // 'left', 'center', 'right'
      showCamera: false,
      currentCamera: 1,
      gameOver: false,
      win: false,
      animatronics: [
        {
          type: 'DIDDY',
          location: 1,
          difficulty: 0,
          moveThreshold: 5, // Default threshold
          atLeftDoor: false,
          atRightDoor: false,
          inOffice: false,
          color: '#FFD700'
        },
        {
          type: 'BABY_OIL_1',
          location: 3,
          difficulty: 0,
          moveThreshold: 5, // Default threshold
          atLeftDoor: false,
          atRightDoor: false,
          inOffice: false,
          color: '#3B82F6'
        },
        {
          type: 'BABY_OIL_2',
          location: 4,
          difficulty: 0,
          moveThreshold: 5, // Default threshold
          atLeftDoor: false,
          atRightDoor: false,
          inOffice: false,
          color: '#10B981'
        },
        {
          type: 'BABY_OIL_3',
          location: 5,
          difficulty: 0,
          moveThreshold: 5, // Default threshold
          atLeftDoor: false,
          atRightDoor: false,
          inOffice: false,
          color: '#8B5CF6'
        }
      ],
      intervals: {
        hour: null,
        power: null,
        animatronics: null
      }
    };
    
    // DOM Elements
    const screens = {
      start: document.getElementById('start-screen'),
      game: document.getElementById('game-screen'),
      camera: document.getElementById('camera-screen'),
      gameOver: document.getElementById('game-over-screen'),
      win: document.getElementById('win-screen')
    };
    
    const elements = {
      startButton: document.getElementById('start-button'),
      cameraButton: document.getElementById('camera-button'),
      exitCamera: document.getElementById('exit-camera'),
      leftButton: document.getElementById('left-button'),
      rightButton: document.getElementById('right-button'),
      prevCamera: document.getElementById('prev-camera'),
      nextCamera: document.getElementById('next-camera'),
      restartButton: document.getElementById('restart-button'),
      continueButton: document.getElementById('continue-button'),
      clock: document.getElementById('clock'),
      power: document.getElementById('power'),
      cameraNumber: document.getElementById('camera-number'),
      cameraContent: document.getElementById('camera-content'),
      viewContainer: document.getElementById('view-container'),
      gameOverAnimatronic: document.getElementById('game-over-animatronic'),
      gameOverMessage: document.getElementById('game-over-message'),
      winNight: document.getElementById('win-night')
    };
    
    // Game functions
    function showScreen(screenId) {
      Object.values(screens).forEach(screen => {
        screen.classList.add('hidden');
      });
      screens[screenId].classList.remove('hidden');
    }
    
    function startGame() {
      gameState.gameStarted = true;
      gameState.night = 1;
      gameState.hour = 0;
      gameState.power = 100;
      gameState.leftDoorClosed = false;
      gameState.rightDoorClosed = false;
      gameState.leftLightOn = false;
      gameState.rightLightOn = false;
      gameState.viewDirection = 'center';
      gameState.showCamera = false;
      gameState.currentCamera = 1;
      gameState.gameOver = false;
      gameState.win = false;
      
      // Reset animatronics
      gameState.animatronics = [
        {
          type: 'DIDDY',
          location: 1,
          difficulty: gameState.night * 2 + 1,
          moveThreshold: Math.floor(Math.random() * 10) + 1, // Random number between 1-10
          atLeftDoor: false,
          atRightDoor: false,
          inOffice: false,
          color: '#FFD700'
        },
        {
          type: 'BABY_OIL_1',
          location: 3,
          difficulty: gameState.night * 2,
          moveThreshold: Math.floor(Math.random() * 10) + 1, // Random number between 1-10
          atLeftDoor: false,
          atRightDoor: false,
          inOffice: false,
          color: '#3B82F6'
        },
        {
          type: 'BABY_OIL_2',
          location: 4,
          difficulty: gameState.night * 2,
          moveThreshold: Math.floor(Math.random() * 10) + 1, // Random number between 1-10
          atLeftDoor: false,
          atRightDoor: false,
          inOffice: false,
          color: '#10B981'
        },
        {
          type: 'BABY_OIL_3',
          location: 5,
          difficulty: gameState.night * 2,
          moveThreshold: Math.floor(Math.random() * 10) + 1, // Random number between 1-10
          atLeftDoor: false,
          atRightDoor: false,
          inOffice: false,
          color: '#8B5CF6'
        }
      ];
      
      showScreen('game');
      updateUI();
      
      // Start the clock
      setTimeout(() => {
        gameState.hour = 1;
        updateUI();
        startIntervals();
      }, 3000);
    }
    
    function startIntervals() {
      // Clear any existing intervals
      Object.values(gameState.intervals).forEach(interval => {
        if (interval) clearInterval(interval);
      });
      
      // Hour interval
      gameState.intervals.hour = setInterval(() => {
        gameState.hour++;
        if (gameState.hour >= 6) {
          winGame();
        }
        updateUI();
      }, 45000); // 45 seconds per hour
      
      // Power consumption interval
      gameState.intervals.power = setInterval(() => {
        if (gameState.power <= 0) return;
        
        // Calculate power consumption
        let consumption = 1; // Base consumption
        if (gameState.leftDoorClosed) consumption += 1;
        if (gameState.rightDoorClosed) consumption += 1;
        if (gameState.leftLightOn) consumption += 0.5;
        if (gameState.rightLightOn) consumption += 0.5;
        
        gameState.power = Math.max(0, gameState.power - consumption * 0.1);
        
        if (gameState.power <= 0) {
          // Power outage
          gameState.leftDoorClosed = false;
          gameState.rightDoorClosed = false;
          gameState.leftLightOn = false;
          gameState.rightLightOn = false;
          
          // Give the player a few seconds before game over
          setTimeout(() => {
            gameState.animatronics[0].inOffice = true; // Diddy gets you
            endGame();
          }, 5000);
        }
        
        updateUI();
      }, 1000);
      
      // Animatronic movement interval
      gameState.intervals.animatronics = setInterval(() => {
        gameState.animatronics.forEach((animatronic, index) => {
          // Skip if already in office
          if (animatronic.inOffice) return;
          
          // Generate a random number between 1-10
          const moveRoll = Math.floor(Math.random() * 10) + 1;
          
          // Check if the animatronic should move based on threshold
          const willMove = moveRoll > animatronic.moveThreshold;
          
          // If the roll is not high enough, don't move
          if (!willMove) return;
          
          // If at door, try to enter office
          if (animatronic.atLeftDoor) {
            if (!gameState.leftDoorClosed) {
              animatronic.atLeftDoor = false;
              animatronic.inOffice = true;
              endGame();
              return;
            }
            // Random chance to leave door
            if (Math.random() < 0.3) {
              animatronic.atLeftDoor = false;
              animatronic.location = Math.floor(Math.random() * 6) + 1;
              // Generate a new movement threshold when changing location
              animatronic.moveThreshold = Math.floor(Math.random() * 10) + 1;
            }
            return;
          }
          
          if (animatronic.atRightDoor) {
            if (!gameState.rightDoorClosed) {
              animatronic.atRightDoor = false;
              animatronic.inOffice = true;
              endGame();
              return;
            }
            // Random chance to leave door
            if (Math.random() < 0.3) {
              animatronic.atRightDoor = false;
              animatronic.location = Math.floor(Math.random() * 6) + 1;
              // Generate a new movement threshold when changing location
              animatronic.moveThreshold = Math.floor(Math.random() * 10) + 1;
            }
            return;
          }
          
          // Move to a new location or door
          const newLocation = Math.floor(Math.random() * 8);
          
          // Special locations 6 and 7 represent left and right door
          if (newLocation === 6) {
            animatronic.location = 0;
            animatronic.atLeftDoor = true;
          } else if (newLocation === 7) {
            animatronic.location = 0;
            animatronic.atRightDoor = true;
          } else {
            animatronic.location = newLocation + 1;
            animatronic.atLeftDoor = false;
            animatronic.atRightDoor = false;
          }
          
          // Generate a new movement threshold after moving
          animatronic.moveThreshold = Math.floor(Math.random() * 10) + 1;
        });
        
        updateUI();
      }, 3000);
    }
    
    function stopIntervals() {
      Object.values(gameState.intervals).forEach(interval => {
        if (interval) clearInterval(interval);
      });
      gameState.intervals = { hour: null, power: null, animatronics: null };
    }
    
    function toggleCamera() {
      gameState.showCamera = !gameState.showCamera;
      if (gameState.showCamera) {
        showScreen('camera');
      } else {
        showScreen('game');
      }
      updateUI();
    }
    
    function changeCamera(direction) {
      if (direction === 'next') {
        gameState.currentCamera = gameState.currentCamera === 6 ? 1 : gameState.currentCamera + 1;
      } else {
        gameState.currentCamera = gameState.currentCamera === 1 ? 6 : gameState.currentCamera - 1;
      }
      updateUI();
    }
    
    function changeView(direction) {
      if (direction === 'left') {
        if (gameState.viewDirection === 'center') gameState.viewDirection = 'left';
        else if (gameState.viewDirection === 'right') gameState.viewDirection = 'center';
      } else {
        if (gameState.viewDirection === 'center') gameState.viewDirection = 'right';
        else if (gameState.viewDirection === 'left') gameState.viewDirection = 'center';
      }
      updateUI();
    }
    
    function toggleLeftDoor() {
      gameState.leftDoorClosed = !gameState.leftDoorClosed;
      if (gameState.leftDoorClosed) gameState.leftLightOn = false;
      updateUI();
    }
    
    function toggleRightDoor() {
      gameState.rightDoorClosed = !gameState.rightDoorClosed;
      if (gameState.rightDoorClosed) gameState.rightLightOn = false;
      updateUI();
    }
    
    function toggleLeftLight() {
      gameState.leftLightOn = !gameState.leftLightOn;
      updateUI();
    }
    
    function toggleRightLight() {
      gameState.rightLightOn = !gameState.rightLightOn;
      updateUI();
    }
    
    function endGame() {
      gameState.gameOver = true;
      stopIntervals();
      showScreen('gameOver');
      

      // Find which animatronic got into the office
      const killerAnimatronic = gameState.animatronics.find(a => a.inOffice) || gameState.animatronics[0];
      
      // Update game over screen
      elements.gameOverAnimatronic.innerHTML = createAnimatronicHTML(killerAnimatronic, 'large');
      elements.gameOverMessage.innerHTML = '<span style="color: ' + killerAnimatronic.color + '">' + killerAnimatronic.type + '</span> got you!';
      
      updateUI();
    }

    function winGame() {
      gameState.win = true;
      stopIntervals();
      elements.winNight.textContent = gameState.night;
      showScreen('win');
      updateUI();
    }

    function continueToNextNight() {
      gameState.night++;
      if (gameState.night > 5) {
        gameState.night = 1; // Reset to night 1 after completing all 5 nights
      }
      startGame();
    }

    function updateUI() {
      // Update clock and power
      elements.clock.innerHTML = gameState.hour + ' AM<br>Night ' + gameState.night;
      elements.power.innerHTML = '<span style="font-weight: bold">' + Math.floor(gameState.power) + '%</span> POWER';

      // Update camera view
      elements.cameraNumber.textContent = gameState.currentCamera;

      // Update camera content
      if (gameState.showCamera) {
        updateCameraView();
      } else {
        updateOfficeView();
      }
    }

    function updateCameraView() {
      // Get animatronics in this camera
      const animatronicsInCamera = gameState.animatronics.filter((a) => a.location === gameState.currentCamera);

      // Create camera content
      let cameraHTML = 
        '<div style="position: absolute; inset: 0; display: flex; justify-content: center; align-items: center;">' +
          '<div style="color: #555; font-size: 24px; font-weight: bold; opacity: 0.2;">CAMERA ' + gameState.currentCamera + '</div>' +
        '</div>';

      // Add animatronics
      animatronicsInCamera.forEach((animatronic) => {
        const top = 30 + Math.random() * 40;
        const left = 20 + Math.random() * 60;

        cameraHTML += 
          '<div style="position: absolute; top: ' + top + '%; left: ' + left + '%; z-index: 10;">' +
            createAnimatronicHTML(animatronic, 'medium') +
            '<div style="text-align: center; background-color: rgba(0,0,0,0.5); padding: 4px 8px; border-radius: 4px; margin-top: 8px;">' +
              '<span style="color: ' + animatronic.color + '; font-family: monospace;">' + animatronic.type + '</span>' +
            '</div>' +
          '</div>';
      });

      elements.cameraContent.innerHTML = cameraHTML;
    }

    function updateOfficeView() {
      let viewHTML = '';

      if (gameState.viewDirection === 'center') {
        viewHTML = 
          '<div style="position: absolute; inset: 0; display: flex; justify-content: center; align-items: center;">' +
            '<div style="color: #555; font-size: 24px; font-weight: bold; opacity: 0.2;">OFFICE</div>' +
          '</div>';
      } else if (gameState.viewDirection === 'left') {
        const leftDoorAnimatronic = gameState.animatronics.find((a) => a.atLeftDoor);
        const doorClosed = gameState.leftDoorClosed;
        const lightOn = gameState.leftLightOn;

        viewHTML = 
          '<div style="position: absolute; inset: 0; background-color: #222;">';
            
        if (doorClosed) {
          viewHTML += 
            '<div style="position: absolute; inset: 0; background-color: #333; display: flex; justify-content: center; align-items: center;">' +
              '<div style="color: #555; font-weight: bold;">DOOR CLOSED</div>' +
            '</div>';
        } else {
          viewHTML += 
            '<div style="position: absolute; inset: 0; ' + (lightOn ? '' : 'filter: brightness(0.2);') + '">' +
              '<div style="position: absolute; inset: 0; background-color: #333;"></div>';
              
          if (leftDoorAnimatronic && lightOn) {
            viewHTML += 
              '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">' +
                createAnimatronicHTML(leftDoorAnimatronic, 'large') +
              '</div>';
          }
              
          viewHTML += '</div>';
        }
            
        viewHTML += 
          '<div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 10px;">' +
            '<button onclick="toggleLeftDoor()" class="button" style="' + (doorClosed ? 'background-color: #F00;' : '') + '">' +
              (doorClosed ? 'Open Door' : 'Close Door') +
            '</button>' +
            '<button onclick="toggleLeftLight()" class="button" style="' + (lightOn ? 'background-color: #FF0;' : '') + '">' +
              (lightOn ? 'Light Off' : 'Light On') +
            '</button>' +
          '</div>' +
        '</div>';
      } else if (gameState.viewDirection === 'right') {
        const rightDoorAnimatronic = gameState.animatronics.find((a) => a.atRightDoor);
        const doorClosed = gameState.rightDoorClosed;
        const lightOn = gameState.rightLightOn;

        viewHTML = 
          '<div style="position: absolute; inset: 0; background-color: #222;">';
            
        if (doorClosed) {
          viewHTML += 
            '<div style="position: absolute; inset: 0; background-color: #333; display: flex; justify-content: center; align-items: center;">' +
              '<div style="color: #555; font-weight: bold;">DOOR CLOSED</div>' +
            '</div>';
        } else {
          viewHTML += 
            '<div style="position: absolute; inset: 0; ' + (lightOn ? '' : 'filter: brightness(0.2);') + '">' +
              '<div style="position: absolute; inset: 0; background-color: #333;"></div>';
              
          if (rightDoorAnimatronic && lightOn) {
            viewHTML += 
              '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">' +
                createAnimatronicHTML(rightDoorAnimatronic, 'large') +
              '</div>';
          }
              
          viewHTML += '</div>';
        }
            
        viewHTML += 
          '<div style="position: absolute; left: 20px; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 10px;">' +
            '<button onclick="toggleRightDoor()" class="button" style="' + (doorClosed ? 'background-color: #F00;' : '') + '">' +
              (doorClosed ? 'Open Door' : 'Close Door') +
            '</button>' +
            '<button onclick="toggleRightLight()" class="button" style="' + (lightOn ? 'background-color: #FF0;' : '') + '">' +
              (lightOn ? 'Light Off' : 'Light On') +
            '</button>' +
          '</div>' +
        '</div>';
      }

      elements.viewContainer.innerHTML = viewHTML;
    }

    function createAnimatronicHTML(animatronic, size) {
      const sizeMap = {
        small: 50,
        medium: 100,
        large: 150,
        jumpscare: 200,
      };

      const sizeValue = sizeMap[size] || 100;

      return (
        '<div style="width: ' + sizeValue + 'px; height: ' + sizeValue + 'px; display: flex; flex-direction: column; align-items: center;">' +
          '<div style="width: 100%; height: 100%; background-color: ' + animatronic.color + '; border-radius: 50%; position: relative; box-shadow: 0 0 20px ' + animatronic.color + ';">' +
            '<div style="position: absolute; top: 25%; left: 25%; width: 16%; height: 16%; background-color: black; border-radius: 50%;"></div>' +
            '<div style="position: absolute; top: 25%; right: 25%; width: 16%; height: 16%; background-color: black; border-radius: 50%;"></div>' +
            '<div style="position: absolute; bottom: 25%; left: 50%; transform: translateX(-50%); width: 50%; height: 16%; background-color: black; border-radius: 50%;"></div>' +
          '</div>' +
          (size === 'jumpscare' ? '<div style="color: ' + animatronic.color + '; font-size: 24px; font-weight: bold; margin-top: 16px;">' + animatronic.type + '</div>' : '') +
        '</div>'
      );
    }

    // Event listeners
    elements.startButton.addEventListener('click', startGame);
    elements.cameraButton.addEventListener('click', toggleCamera);
    elements.exitCamera.addEventListener('click', toggleCamera);
    elements.leftButton.addEventListener('click', () => changeView('left'));
    elements.rightButton.addEventListener('click', () => changeView('right'));
    elements.prevCamera.addEventListener('click', () => changeCamera('prev'));
    elements.nextCamera.addEventListener('click', () => changeCamera('next'));
    elements.restartButton.addEventListener('click', startGame);
    elements.continueButton.addEventListener('click', continueToNextNight);

    // Initialize the game
    updateUI();
    </script>
</body>
</html>
      `

      // Create a blob with the HTML content
      const blob = new Blob([htmlContent], { type: "text/html" })

      // Create a download link
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "five-nights-at-diddys.html"

      // Trigger the download
      document.body.appendChild(link)
      link.click()

      // Clean up
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error generating standalone file:", error)
    }

    setIsGenerating(false)
  }

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Button onClick={handleGenerate} disabled={isGenerating} className="bg-blue-600 hover:bg-blue-700">
        <FileDown className="mr-2 h-4 w-4" />
        {isGenerating ? "Generating..." : "Download Game File"}
      </Button>
    </div>
  )
}
