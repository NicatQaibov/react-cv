import styles from "./EmployeeProfile.module.css";
const EmployeeProfile = function () {
  return (
    <div className={styles["employee-profile"]}>
      <h3>Profile</h3>
      <p className={styles["employee-profile-info"]}>
        Studying Computer Science at ASOIU. A Front-End Developer proficient at
        HTML, CSS and JS. Specializes in ReactJS and responsive design. Skilled
        at identifying opportunities to enhance front-end design and improve the
        user experience. Conversant with technologies such as SQL, Python and
        C++.
      </p>
    </div>
  );
};
export default EmployeeProfile;
