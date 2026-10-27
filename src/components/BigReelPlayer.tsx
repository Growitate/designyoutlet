import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Sparkles } from 'lucide-react'
import type { Project } from '../data/content'

interface BigReelPlayerProps {
  project: Project
  autoPlay?: boolean
}

export function BigReelPlayer({ project }: BigReelPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(25)
  const [currentSceneIdx, setCurrentSceneIdx] = useState(0)
  const [isVertical, setIsVertical] = useState(false)
  const progressTimerRef = useRef<number | null>(null)

  const scenes = project.videoSimulation?.scenes || ['Intro Sequence', 'Core Visuals', 'Kinetic Climax', 'Brand Outro']

  useEffect(() => {
    if (isPlaying) {
      progressTimerRef.current = window.setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsPlaying(false)
            return 0
          }
          const next = prev + 0.5
          const sceneIndex = Math.min(Math.floor((next / 100) * scenes.length), scenes.length - 1)
          setCurrentSceneIdx(sceneIndex)
          return next
        })
      }, 50)
    } else {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }
    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }
  }, [isPlaying, scenes.length])

  const togglePlay = () => setIsPlaying(!isPlaying)
  const restart = () => {
    setProgress(0)
    setCurrentSceneIdx(0)
    setIsPlaying(true)
  }

  // Synthesize ambient cybernetic sound on unmuting
  const toggleAudio = () => {
    if (isMuted) {
      setIsMuted(false)
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
        if (AudioContextClass) {
          const ctx = new AudioContextClass()
          const osc = ctx.createOscillator()
          const gain = ctx.createGain()
          osc.type = 'sawtooth'
          osc.frequency.setValueAtTime(110, ctx.currentTime)
          osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.4)
          gain.gain.setValueAtTime(0.015, ctx.currentTime)
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8)
          osc.connect(gain).connect(ctx.destination)
          osc.start()
          osc.stop(ctx.currentTime + 0.85)
        }
      } catch {
        // audio policy
      }
    } else {
      setIsMuted(true)
    }
  }

  const formatTime = (pct: number) => {
    const totalSeconds = project.duration === '01:14' ? 74 : 58
    const currentSecs = Math.floor((pct / 100) * totalSeconds)
    const mins = Math.floor(currentSecs / 60)
    const secs = currentSecs % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className={`big-reel-card ${isVertical ? 'mode-vertical' : 'mode-widescreen'}`}>
      <div className="reel-monitor">
        {/* Top telemetry bar */}
        <div className="reel-telemetry">
          <div className="reel-rec-badge">
            <span className={`rec-dot ${isPlaying ? 'is-active' : ''}`} />
            <span>{isPlaying ? 'PLAY' : 'PAUSE'} // 4K 60FPS</span>
          </div>
          <div className="reel-scene-label">
            <Sparkles size={11} /> SCENE {currentSceneIdx + 1}/{scenes.length}: {scenes[currentSceneIdx]}
          </div>
          <div className="reel-mode-toggle">
            <button
              type="button"
              className={`aspect-btn ${!isVertical ? 'active' : ''}`}
              onClick={() => setIsVertical(false)}
            >
              16:9
            </button>
            <button
              type="button"
              className={`aspect-btn ${isVertical ? 'active' : ''}`}
              onClick={() => setIsVertical(true)}
            >
              9:16
            </button>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div className="reel-canvas" onClick={togglePlay}>
          <img
            src={project.image}
            alt={project.title}
            className={`reel-image ${isPlaying ? 'reel-playing' : ''}`}
          />

          {/* Dynamic glitch scanline overlay */}
          <div className="reel-scanline" />
          <div className="reel-crosshairs">
            <span className="ch ch-tl">+</span>
            <span className="ch ch-tr">+</span>
            <span className="ch ch-bl">+</span>
            <span className="ch ch-br">+</span>
          </div>

          {/* Central play overlay when paused */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                className="reel-play-overlay"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <div className="play-pulse-ring" />
                <div className="play-icon-circle">
                  <Play size={28} fill="currentColor" />
                </div>
                <span>CLICK TO PLAY REEL</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Live audio frequency bars simulation */}
          {isPlaying && !isMuted && (
            <div className="audio-visualizer">
              {Array.from({ length: 14 }).map((_, i) => (
                <span
                  key={i}
                  className="audio-bar"
                  style={{
                    animationDuration: `${0.3 + (i % 5) * 0.12}s`,
                    height: `${20 + (i % 6) * 14}%`
                  }}
                />
              ))}
            </div>
          )}

          {/* Scene Title Watermark */}
          <div className="reel-watermark">
            <span>{project.title}</span>
            <strong>{project.client}</strong>
          </div>
        </div>

        {/* Bottom Control Bar */}
        <div className="reel-controls">
          <div className="reel-scrubber-wrap">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="reel-scrubber"
              aria-label="Reel timeline scrubber"
            />
            <div className="reel-scrubber-fill" style={{ width: `${progress}%` }} />
          </div>

          <div className="reel-actions">
            <div className="reel-actions-left">
              <button
                type="button"
                className="reel-ctrl-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
              </button>
              <button
                type="button"
                className="reel-ctrl-btn"
                onClick={restart}
                aria-label="Restart reel"
              >
                <RotateCcw size={14} />
              </button>
              <button
                type="button"
                className="reel-ctrl-btn"
                onClick={toggleAudio}
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
              <span className="reel-timecode">
                {formatTime(progress)} / {project.duration || '01:00'}
              </span>
            </div>

            <div className="reel-actions-right">
              <span className="reel-metric-badge">{project.metrics}</span>
              <button
                type="button"
                className="reel-ctrl-btn"
                onClick={togglePlay}
                title="Fullscreen Preview"
              >
                <Maximize2 size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reel Information Meta */}
      <div className="reel-info">
        <div className="reel-meta-tag">
          <span className="reel-num">{project.number}</span>
          <span className="reel-cat">{project.categoryLabel}</span>
          <span className="reel-tag">{project.tag}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="reel-deliverables">
          {project.deliverables.map((item, idx) => (
            <span key={idx} className="deliv-chip">{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
