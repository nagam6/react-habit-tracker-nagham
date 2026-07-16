// Shows completed habits and the progress bar
function SummaryBanner({ habits }) {
  const total = habits.length;

  const completed = habits.filter(
    (habit) => habit.doneToday
  ).length;

  const progress =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="summary-banner">
      <h2>
        {completed} of {total} done
      </h2>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{progress}%</p>
    </div>
  );
}

export default SummaryBanner;