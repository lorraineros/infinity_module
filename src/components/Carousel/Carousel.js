import styles from './carousel.module.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Carousel = ({
    images,
    size = "medium"
}) => {
    const minIndex = 0;
    const maxIndex = images.length - 1;
    const [index, setIndex] = useState(0);

    const onPrev = () => {
        const currIndex = index - 1;
        setIndex(currIndex >= minIndex ? currIndex : maxIndex)
    }

    const onNext = () => {
        const currIndex = index + 1;
        setIndex(currIndex <= maxIndex ? currIndex : minIndex)
    }

    return (
        <div className={ styles[size + "-car"] }>
            <span onClick={ onPrev } className={ styles.arrow }><FontAwesomeIcon icon="angle-left" size="lg" /></span>
            <img src={images[index]} alt='carousel' className={ styles[size] } />
            <span onClick={ onNext } className={ styles.arrow }><FontAwesomeIcon icon="angle-right" size="lg" /></span>
        </div>
       
    );
}

Carousel.propTypes = {
    // image array of the Carousel
    images: PropTypes.array.isRequired,
    // size option of the Carousel
    size: PropTypes.string.isRequired
};

export default Carousel;