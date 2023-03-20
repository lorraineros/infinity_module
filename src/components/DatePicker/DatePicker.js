import styles from './datepicker.module.css'
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DatePicker = ({
    onDatePick,
    locale = "is-IS"
}) => {
    const [date, setDate] = useState(new Date());
    const [localDate, setLocalDate] = useState();
    const [days, setDays] = useState([]);
    const months_en = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const months_is = ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"];

    const firstDay = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    }

    const lastDay = (date) => {
        return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
    }

    const onUpdateMonth = (month) => {
        setDate(new Date(date.getFullYear(), date.getMonth()+month, date.getDay()));
    }

    const onSelectDate = (day, id) => {
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
        setLocalDate(selectedDate.toLocaleDateString(locale));
        var dayArr = document.getElementsByClassName(styles.day);
        for (var i=0;i<dayArr.length;i++) {
            dayArr[i].classList.remove(styles.selected);
        }
        document.getElementById(id).classList.add(styles.selected);
        onDatePick(selectedDate);
    }

    useEffect (() => {
        var dayArr = [];

        for (let i=1; i<firstDay(date); i++) {
            dayArr.push(<li key={i}></li>)
        }
    
        for (let i=1; i<=lastDay(date); i++) {
            dayArr.push(<li onClick={() => onSelectDate(i, i)} id={ i } key={ i+dayArr.length } className={ styles.day }>{i}</li>)
        }
        setDays(dayArr);
    }, [date])

    return (
        <div className={ styles.calendar }>
            <div className={ styles.month_year }>
                <span onClick={() => onUpdateMonth(-1)}><FontAwesomeIcon icon="angle-left" size="lg" /></span>
                <span>
                    { locale === "is-IS" ? 
                        (<>{months_is[date.getMonth()]}</>) : (<>{months_en[date.getMonth()]}</>)
                        
                    } {date.getFullYear()}
                </span>
                <span onClick={() => onUpdateMonth(1)}><FontAwesomeIcon icon="angle-right" size="lg" /></span>
            </div>
            <ul className={ styles.weeks }>
                <li>M</li><li>T</li><li>W</li><li>R</li><li>F</li><li>S</li><li>U</li>
            </ul>
            <ul className={ styles.days }>{ days }</ul>
            <p>Selected Date: {localDate}</p>
        </div>
    
    );
}

DatePicker.propTypes = {
    // onDatePick function of the DatePicker
    onDatePick: PropTypes.func,
    // locale of the DatePicker
    locale: PropTypes.string.isRequired
};

export default DatePicker;