import EmployeeTitle from "../EmployeeTitle/EmployeeTitle";
import EmployeeContactInfo from "../EmployeeContactInfo/EmployeeContactInfo";
import EmployeeSkills from "../EmployeeSkills/EmployeeSkills";
import styles from "./Employee.module.css";
import EmployeeEducation from "../EmployeeEducation/EmployeeEducation";
import EmployeeProfile from "../EmployeeProfile/EmployeeProfile";
import EmployeePersonalProjects from "../EmployeePersonalProjects/EmployeePersonalProjects";
import EmployeeLanguages from "../EmployeeLanguages/EmployeeLanguages";

const Employee = function () {
  return (
    <div className={styles["employee"]}>
      <header>
        <EmployeeTitle />
      </header>

      <main>
        <div className={styles["employee-left-tab"]}>
          <EmployeeContactInfo />
          <EmployeeSkills />
          <EmployeeEducation />
        </div>
        <div className={styles["employee-right-tab"]}>
          <EmployeeProfile />
          <EmployeePersonalProjects />
          <EmployeeLanguages />
        </div>
      </main>
    </div>
  );
};
export default Employee;
