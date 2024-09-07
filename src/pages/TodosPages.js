import React from 'react';
import Todo from '../components/Todo';
import styles from './todosPage.module.css';

const TodosPage = () => {
    const todos = ['todo 1', 'todo 2', 'todo 3'];

    return (
        <div className={styles.page}>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo, index) => (
                    <Todo key={index} todo={todo} />
                ))}
            </ul>
        </div>
    );
};

export default TodosPage;
