import styles from "./Brand.module.css";
import PropTypes from "prop-types";
import "../../styles/global.css";

const Brand = (props) => (
  <h3 className={styles.brand}>
    {props.title}
  </h3>
);

Brand.propTypes = {
  title: PropTypes.node.isRequired
};

export default Brand;
