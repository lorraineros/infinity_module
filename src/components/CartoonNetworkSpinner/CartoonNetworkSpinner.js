import styles from './cnspinner.module.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const CartoonNetworkSpinner = ({
    interval = 3
}) => {
    const images=[
        'https://www.jing.fm/clipimg/detail/47-477455_who-is-your-favorite-cartoon-character-powerpuff-girls.png',
        'https://i.pinimg.com/736x/10/cb/66/10cb66eb69c43a316adbeb51d75701ba.jpg',
        'https://i.scdn.co/image/ab6761610000e5ebc94fb92f8143c3637c6f7b80',
        'https://nonnieskidzone.com/image/cache/catalog/Toys/63FE4738-CB49-4F7C-8304-7FE0B0C05D52-900x900.jpeg',
        'https://lh4.ggpht.com/uYykiYaKG3lP_l8XigBcEWCy9g1mpXatUVwDazthAGBc-ZydiS76HIHDkjxwMP834bQ'

    ]
    const minIndex = 0;
    const maxIndex = images.length - 1;
    const [index, setIndex] = useState(0);
    const [isSpinning, setSpin] = useState(true);

    const changeImage = () => {
        var newIndex = index + 1;
        if (newIndex > maxIndex) newIndex = minIndex;
        setIndex(newIndex);
    }

    const spinImage = () => {
        if (!isSpinning) {
            setSpin(true)
            changeImage()  
        } else {
            setSpin(false)
        }
    }

    useEffect(() => {
        setInterval(() => spinImage(), interval/2*1000);
    })
    
    return (
        <div>
            <img src={images[index]} id="spinImage" className={ `${styles.spinner} ${isSpinning && styles.spinning}` } />
        </div>
    );
}

CartoonNetworkSpinner.propTypes = {
    // interval of the CartoonNetworkSpinner
    interval: PropTypes.number.isRequired
};

export default CartoonNetworkSpinner;