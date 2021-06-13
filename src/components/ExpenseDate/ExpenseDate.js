import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // Determining for the date, e.g rd, st, nd and th
  let extension = "";
  if (day === "01") {
    extension = "st";
  } else if (day === "02") {
    extension = "nd";
  } else if (day === "03") {
    extension = "rd";
  } else {
    extension = "th";
  }

  return (
    <div className="date">
      <div className="day">
        {day}
        <div className="number-extension">{extension}</div>
      </div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
