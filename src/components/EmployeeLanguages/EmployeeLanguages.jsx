import styles from "./EmployeeLanguages.module.css";
const EmployeeLanguages = function () {
  return (
    <div className={styles["employee-languages"]}>
      <h3>Languages</h3>
      <ul>
        <li>Azerbaijani - Native Proficiency </li>
        <li>English - Professional Working Proficiency</li>
        <li>Turkish - Full Professional Proficiency</li>
      </ul>
    </div>
  );
};
export default EmployeeLanguages;
