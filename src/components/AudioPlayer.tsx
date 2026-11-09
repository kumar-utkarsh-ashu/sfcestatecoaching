"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, RotateCcw, Radio } from "lucide-react";

interface AudioPlayerProps {
  title?: string;
  subtitle?: string;
  src?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  title = "Charitable Giving and Estate Planning",
  subtitle = "Craig Mellendorf of SFC Estate Coaching on the radio with Dr. Dave Borst",
  src = "/assets/interview.mp3"
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const restartAudio = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const seekTime = parseFloat(e.target.value);
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds === 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <div className="w-full bg-slate-900 text-white rounded-xl p-5 shadow-lg border border-slate-800">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
      />

      <div className="flex items-center space-x-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
          <Radio className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-bold text-white leading-snug">{title}</h4>
          <p className="text-xs text-slate-300 leading-normal">{subtitle}</p>
        </div>
      </div>

      {/* Progress slider */}
      <div className="space-y-1.5 mb-3">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-orange"
          aria-label="Audio progress slider"
        />
        <div className="flex justify-between text-xs text-slate-400 font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center transition-colors shadow"
            aria-label={isPlaying ? "Pause audio interview" : "Play audio interview"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>
          <button
            onClick={restartAudio}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Restart from beginning"
            aria-label="Restart audio interview"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMute}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <a
            href={src}
            download="Craig-Mellendorf-Interview.mp3"
            className="text-xs text-slate-400 hover:text-brand-orange transition-colors underline"
          >
            Download Audio
          </a>
        </div>
      </div>
    </div>
  );
};

