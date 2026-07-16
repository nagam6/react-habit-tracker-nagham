import { useState } from "react";
import HabitForm from "./components/HabitForm";
import HabitCard from "./components/HabitCard";
import SummaryBanner from "./components/SummaryBanner";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);

  function addHabit(title) {
    const newHabit = {
      id: crypto.randomUUID(),
      title: title,
      doneToday: false,
      streak: 0,
    };

    setHabits([...habits, newHabit]);
  }

  function toggleHabit(id) {
    const updatedHabits = habits.map((habit) => {
      if (habit.id === id) {
        return {
          ...habit,
          doneToday: !habit.doneToday,
          streak: habit.doneToday
            ? Math.max(0, habit.streak - 1)
            : habit.streak + 1,
        };
      }

      return habit;
    });

    setHabits(updatedHabits);
  }

  function removeHabit(id) {
    const updatedHabits = habits.filter(
      (habit) => habit.id !== id
    );

    setHabits(updatedHabits);
  }

  return (
    <main className="app">
      <h1>Habit Tracker</h1>

      <HabitForm onAdd={addHabit} />

      <SummaryBanner habits={habits} />

      <div className="habit-list">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onToggleDone={toggleHabit}
            onRemove={removeHabit}
          />
        ))}
      </div>
    </main>
  );
}

export default App;