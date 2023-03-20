import styles from './row.module.css'
import PropTypes from 'prop-types';

const Row = ({
    children
}) => {
    return (
        <div className={ styles.row }>
            { children }
        </div>
    
    );
}

Row.propTypes = {
    // children of the Row
    children: PropTypes.node.isRequired
};

export default Row;