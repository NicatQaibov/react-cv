import styles from "./EmployeeSkills.module.css";
const EmployeeSkills = function () {
  return (
    <div className={styles["employee-skills"]}>
      <h3>Skills</h3>
      <ul>
        <li>Front End Development</li>
        <li>ReactJS</li>
        <li>HTML5, CSS3 (including SASS) , JS</li>
        <li>JSON, AJAX</li>
        <li>Figma</li>
        <li>Git</li>
        <li>SQL</li>
        <li>Problem-Solving</li>
        <li>Strong Communication</li>
        <li>Proficient Researcher</li>
      </ul>
    </div>
  );
};
export default EmployeeSkills;
