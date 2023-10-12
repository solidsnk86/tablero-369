'use client'

import React, { useState, useEffect } from "react";
import { IconBoard } from "@/app/components/IconBoard";

export const Scoreboard = () => {
  const maxScore = 15;

  const initialScoreTeam1 = parseInt(localStorage.getItem("scoreTeam1")) || 0;
  const initialScoreTeam2 = parseInt(localStorage.getItem("scoreTeam2")) || 0;

  const [scoreTeam1, setScoreTeam1] = useState(initialScoreTeam1);
  const [scoreTeam2, setScoreTeam2] = useState(initialScoreTeam2);

  const [remainingTime, setRemainingTime] = useState(5400);
  const [isTimerPaused, setIsTimerPaused] = useState(true);

  const handleIncrement = (setScore, currentScore) => {
    if (currentScore < maxScore) {
      setScore(currentScore + 1);
    }
  };

  const handleDecrement = (setScore, currentScore) => {
    if (currentScore > 0) {
      setScore(currentScore - 1);
    }
  };

  const handleIncrementTeam1 = () => {
    handleIncrement(setScoreTeam1, scoreTeam1);
  };

  const handleDecrementTeam1 = () => {
    handleDecrement(setScoreTeam1, scoreTeam1);
  };

  const handleIncrementTeam2 = () => {
    handleIncrement(setScoreTeam2, scoreTeam2);
  };

  const handleDecrementTeam2 = () => {
    handleDecrement(setScoreTeam2, scoreTeam2);
  };

  useEffect(() => {
    localStorage.setItem("scoreTeam1", scoreTeam1);
    localStorage.setItem("scoreTeam2", scoreTeam2);
  }, [scoreTeam1, scoreTeam2]);

  useEffect(() => {
    let intervalId;

    if (!isTimerPaused) {
      intervalId = setInterval(() => {
        setRemainingTime((previewTime) => (previewTime > 0 ? previewTime - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isTimerPaused]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleResetButton = () => {
    setScoreTeam1(0);
    setScoreTeam2(0);
    setRemainingTime(5400);
    setIsTimerPaused(true);
  };

  const handleStartTime = () => {
    setIsTimerPaused(false);
  };

  const handlePauseTime = () => {
    setIsTimerPaused(true);
  };

  const nameOne = 'Equipo 1';
  const nameTwo = 'Equipo 2';
  const teamL = 'Lisas';
  const teamR = 'Rayadas';

  return (
    <main className="main-board flex text-center">
      <span className="timer-game">{formatTime(remainingTime)}</span>

      <div className="teams-div block w-44 justify-center m-auto">
        <h2 className="name-team">{nameOne}</h2>
        <p className="team-feature my-4">{teamR}</p>
        <button onClick={handleIncrementTeam1}>
          <IconBoard />
        </button>
        <p className="score">{scoreTeam1}</p>
        <button onClick={handleDecrementTeam1}>
          <IconBoard className="rotate-[180deg]" />
        </button>
      </div>

      <div>
        <button
          className="reset-button bg-red-500 px-4 py-2 rounded mx-5"
          onClick={handleResetButton}
        >
          Resetear
        </button>
        {isTimerPaused ? (
          <button
            className="start-button bg-green-500 px-4 py-2 rounded mx-5"
            onClick={handleStartTime}
          >
            Inicio
          </button>
        ) : (
          <button
            className="pause-button bg-yellow-600 px-4 py-2 rounded mx-5"
            onClick={handlePauseTime}
          >
            Pausa
          </button>
        )}
      </div>

      <div className=" teams-div block w-44 justify-center m-auto">
        <h2 className="name-team">{nameTwo}</h2>
        <p className="team-feature my-4">{teamL}</p>
        <button onClick={handleIncrementTeam2}>
          <IconBoard />
        </button>
        <p className="score">{scoreTeam2}</p>
        <button onClick={handleDecrementTeam2}>
          <IconBoard className="rotate-[180deg]" />
        </button>
      </div>
    </main>
  );
};
