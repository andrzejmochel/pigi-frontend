import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Style from './ErrorNotification.module.css';

function ErrorNotification(props) {
    const [isVisible, setVisible] = useState(true);
    const hide = () => setVisible(false);

    const { description } = props;
    return (
        isVisible &&
        <div className={Style.realContainer}>
            <div className={Style.errorNotification}>
                <span className={Style.text}>{description}</span>
                <FontAwesomeIcon className={Style.icon} size={'lg'} icon={faTimes} onClick={hide} />
            </div>
        </div>
    );
}

ErrorNotification.propTypes = {
    description: PropTypes.string.isRequired,
};

export default ErrorNotification;