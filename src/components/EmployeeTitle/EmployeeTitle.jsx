import styles from "./EmployeeTitle.module.css";
import profile from "../../images/employee-profile.png";
const EmployeeTitle = function () {
  return (
    <div className={styles["employee-title"]}>
      <div className={styles["employee-title-info"]}>
        <h1 className={styles["employee-name"]}>Qayibov Nicat</h1>
        <h2 className={styles["employee-profession"]}>front end developer</h2>
      </div>
      <img
        src={profile}
        className={styles["employee-image"]}
        alt="employee profile image"
      />
    </div>
  );
};
export default EmployeeTitle;
