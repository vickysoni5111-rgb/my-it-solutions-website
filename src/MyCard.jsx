import React from "react";
import "./MyCard.css";

const MyCard = () => {
  const stats = [
    {
      icon: "groups",
      value: "150+",
      label: "Happy Clients",
      colorClass: "mc-blue",
    },
    {
      icon: "task_alt",
      value: "250+",
      label: "Projects Done",
      colorClass: "mc-pink",
    },
    {
      icon: "monitoring",
      value: "99.9%",
      label: "Success Rate",
      colorClass: "mc-blue",
    },
    {
      icon: "history_edu",
      value: "6+",
      label: "Years Exp.",
      colorClass: "mc-pink",
    },
    {
      icon: "support_agent",
      value: "24/7",
      label: "Expert Support",
      colorClass: "mc-blue",
    },
  ];

  return (
    <section className="mycard-section">
      {stats.map((item, index) => (
        <div className="mycard-box" key={index}>
          <span
            className={`material-symbols-outlined mycard-icon ${item.colorClass}`}
          >
            {item.icon}
          </span>

          <h3>{item.value}</h3>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default MyCard;