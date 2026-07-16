// Displays one habit and its action buttons
function HabitCard({ habit, onToggleDone, onRemove }) {
  return (
    <div className={habit.doneToday ? "habit-card completed" : "habit-card"}>
      <div>
        <h2>{habit.title}</h2>
        <p className="streak">
        🔥 {habit.streak} {habit.streak === 1 ? "day" : "days"} streak
        </p>          
    </div>

      <div className="habit-actions">
        <button
          className={habit.doneToday ? "toggle-button done" : "toggle-button"}
          onClick={() => onToggleDone(habit.id)}
        >
          {habit.doneToday ? "Undo" : "Mark Done"}
        </button>

        <button
          className="remove-button"
          onClick={() => onRemove(habit.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default HabitCard;