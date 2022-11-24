import styles from "./EmployeePersonalProjects.module.css";
const EmployeePersonalProjects = function () {
  return (
    <div className={styles["employee-personal-projects"]}>
      <h3>Personal Projects</h3>
      <ul>
        <li>
          Bankist App (HTML5, CSS3, JS) - provides functionalities of basic user
          sign-in, transactions between users, taking loans and etc.
        </li>
        <li>
          Bankist (HTML5, CSS3, JS) - basic bank webpage includes various UI
          components and DOM manipulations.
        </li>
        <li>OmniFood (HTML5, CSS3, JS) - real-world restaurant webpage.</li>
        <li>Natours (HTML5, SCSS) - real-world tour advertising webpage.</li>
        <li>
          Guess the Number App (JS) - app generates a random number and user has
          specifed number of chances to find the number.
        </li>
        <li>
          ReactFood SPA (ReactJS) - basic restaurant includes UI components and
          functionalities built with React hooks.
        </li>
        <li>
          Pig Game App (HTML5, CSS3, JS) - two-player dice rolling game with
          dynamic UI.
        </li>
      </ul>
    </div>
  );
};
export default EmployeePersonalProjects;
