import React, { useState, useEffect } from "react";
import { IconBoard } from './IconBoard';

interface Team {
  team: string;
  player: string;
  score: number;
  iconUp: JSX.Element;
  iconDown: JSX.Element;
}

export const Scoreboard: React.FC = () => {
  const [scoreTeam1, setScoreTeam1] = useState(0);
  const [scoreTeam2, setScoreTeam2] = useState(0);

  useEffect(() => {
    const savedScoreTeam1 = localStorage.getItem("scoreTeam1");
    const savedScoreTeam2 = localStorage.getItem("scoreTeam2");

    if (savedScoreTeam1 !== null && savedScoreTeam2 !== null) {
      setScoreTeam1(parseInt(savedScoreTeam1, 10));
      setScoreTeam2(parseInt(savedScoreTeam2, 10));
    }
  }, []);

  const saveToLocalStorage = (newScoreTeam1: number, newScoreTeam2: number) => {
    localStorage.setItem("scoreTeam1", newScoreTeam1.toString());
    localStorage.setItem("scoreTeam2", newScoreTeam2.toString());
  };

  const handleIncrementTeam = (team: number) => {
    if (team === 1) {
      setScoreTeam1(prevScore => {
        const newScore = prevScore + 1;
        saveToLocalStorage(newScore, scoreTeam2);
        return newScore;
      });
    } else if (team === 2) {
      setScoreTeam2(prevScore => {
        const newScore = prevScore + 1;
        saveToLocalStorage(scoreTeam1, newScore);
        return newScore;
      });
    }
  };

  const handleDecrementTeam = (team: number) => {
    if ((team === 1) && (scoreTeam1 > 0)) {
      setScoreTeam1(prevScore => {
        const newScore = prevScore - 1;
        saveToLocalStorage(newScore, scoreTeam2);
        return newScore;
      });
    } else if ((team === 2) && (scoreTeam2 > 0)) {
      setScoreTeam2(prevScore => {
        const newScore = prevScore - 1;
        saveToLocalStorage(scoreTeam1, newScore);
        return newScore;
      });
    }
  };

  const teams: Team[] = [
    {
      team: "Equipo 1",
      player: 'lisas',
      score: scoreTeam1,
      iconUp: <IconBoard />,
      iconDown: <IconBoard />,
    },
    {
      team: "Equipo 2",
      player: 'rayadas',
      score: scoreTeam2,
      iconUp: <IconBoard />,
      iconDown: <IconBoard />,
    },
  ];

  const handleReset = () => {
    setScoreTeam1(0);
    setScoreTeam2(0);
    saveToLocalStorage(0, 0);
  };

  return (
    <main className="flex relative mt-8">
      {teams.map((t, index) => (
        <div key={index} className=" w-40 xl:w-auto mx-44">
          <h1 className="font-black text-3xl xl:text-6xl">{t.team}</h1>
          <p className="uppercase text-center mt-3">{t.player}</p>
          <button className="inc-dec-button text-2xl" onClick={() => handleIncrementTeam(index + 1)}>{t.iconUp}</button>
          <p className="relative right-6 justify-center mx-auto text-center text-[14rem] font-black my-0 py-0">{t.score}</p>
          <button className="inc-dec-button rotate-[180deg]" onClick={() => handleDecrementTeam(index + 1)}>{t.iconDown}</button>
        </div>
      ))}
      <button onClick={handleReset} className="reset-button fixed left-[45%] top-[50%] bg-red-500 px-4 py-2 rounded">
        Resetear
      </button>
    </main>
  );
};
