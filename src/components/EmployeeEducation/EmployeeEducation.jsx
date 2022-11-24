import styles from "./EmployeeEducation.module.css";
const EmployeeEducation = function () {
  return (
    <div className={styles["employee-educations"]}>
      <h3>Education</h3>
      <p className={styles["employee-university"]}>
        Azerbaijan State Oil and Industry University
      </p>

      <p class={styles["education-duration"]}>2019- present</p>
      <ul className={styles["employee-education-details"]}>
        <li>GPA: 77</li>
        <li>Fourth Course</li>
        <li>Entrance Point: 630.2</li>
      </ul>
    </div>
  );
};
export default EmployeeEducation;
