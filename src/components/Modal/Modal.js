import styles from './modal.module.css'
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Modal = ({
    isOpen,
    onClose,
    children
}) => {

    if (!isOpen) return;
    const title = React.Children.map(children, child => child.type.displayName === 'Title' ? child : null);
    const body = React.Children.map(children, child => child.type.displayName === 'Body' ? child : null);
    const footer = React.Children.map(children, child => child.type.displayName === 'Footer' ? child : null);
    return (
        <div onClick={ onClose } className={ styles.overlay }>
            <div
                onClick={(e) => {
                e.stopPropagation();
                }}
                className={ styles.modal }>
                <div className={ styles.title }>
                { title }
                <span onClick={ onClose }><FontAwesomeIcon icon="xmark" /></span>
                </div>
                { body }
                { footer }
            </div>
        </div>
       
    );
}

const Title = ({ children }) => <> { children } </>;
Title.displayName = 'Title';
Modal.Title = Title;

const Body = ({ children }) => <div className={ styles.body }> { children } </div>;
Body.displayName = 'Body';
Modal.Body = Body;

const Footer = ({ children }) => <div className={ styles.footer }> { children } </div>;
Footer.displayName = 'Footer';
Modal.Footer = Footer;

Modal.propTypes = {
    // open state of the Modal
    isOpen: PropTypes.bool.isRequired,
    // onClose function of the Modal
    onClose: PropTypes.func.isRequired,
    // children of the Modal
    children: PropTypes.node.isRequired
};

export default Modal;