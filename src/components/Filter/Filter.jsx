import PropTypes from "prop-types";
import styles from './filter.module.scss'

const ContactFilter =({handleChange, value}) =>{
  return(
    <div>
      <label className={styles.filterLabel}>Find contacts by name</label>
      <input className={styles.filterName} value={value} name='filter' onChange={handleChange} placeholder='name'/>
    </div>
  )
}
export default ContactFilter;

ContactFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
}
