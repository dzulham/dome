import PropTypes from "prop-types";
import styles from "./Wrapper.module.css";
import "../../styles/global.css";

const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
