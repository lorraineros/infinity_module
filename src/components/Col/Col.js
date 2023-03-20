import styles from './col.module.css'
import PropTypes from 'prop-types';

const Col = ({
    size = 1
}) => {
    const col_width = "size" + size;
    return (
        <div className={ styles[col_width] }></div>
    
    );
}

Col.propTypes = {
    // size of the Col
    size: PropTypes.number.isRequired
};

export default Col;