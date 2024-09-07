import React from 'react';
import styles from './todo.module.css';

const Todo = ({ todo }) => {
    return <li className={styles.todo}>{todo}</li>;
};

export default Todo;
