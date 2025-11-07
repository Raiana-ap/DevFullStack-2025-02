import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Kanban.module.css';

const COLUMNS = [
  { id: 'todo', name: 'Backlog' },
  { id: 'doing', name: 'Em Progresso' },
  { id: 'done', name: 'Concluído' },
];

const DEFAULT_TASKS = [
  { id: 't1', title: 'Definir escopo do sprint', column: 'todo', tag: 'Planejamento' },
  { id: 't2', title: 'Levantar requisitos com o time', column: 'todo', tag: 'Descoberta' },
  { id: 't3', title: 'Criar wireframes de alta fidelidade', column: 'doing', tag: 'Design' },
  { id: 't4', title: 'Implementar autenticação OAuth2', column: 'doing', tag: 'Backend' },
  { id: 't5', title: 'Escrever testes de integração', column: 'done', tag: 'QA' },
  { id: 't6', title: 'Publicar release 1.0', column: 'done', tag: 'Release' },
];

const STORAGE_KEY = 'kanban_tasks_v1';

export default function Kanban() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_TASKS;
  });

  const [filter, setFilter] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const filtered = useMemo(() => {
    const term = filter.trim().toLowerCase();
    if (!term) return tasks;
    return tasks.filter(t => t.title.toLowerCase().includes(term));
  }, [tasks, filter]);

  const addTask = (title) => {
    const trimmed = title.trim();
    if (!trimmed) return;
    const newTask = {
      id: 't' + Math.random().toString(36).slice(2, 8),
      title: trimmed,
      column: 'todo',
      tag: 'Nova',
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const moveTask = (taskId, dir) => {
    setTasks(prev => {
      const map = Object.fromEntries(COLUMNS.map((c, i) => [c.id, i]));
    return prev.map(t => {
        if (t.id !== taskId) return t;
        const i = map[t.column];
        const nextIndex = Math.min(Math.max(i + dir, 0), COLUMNS.length - 1);
        return { ...t, column: COLUMNS[nextIndex].id };
      });
    });
  };

  const removeTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id != taskId));
  };

  const onDragStart = (e, taskId) => {
    e.dataTransfer.setData('text/plain', taskId);
    e.dataTransfer.effectAllowed = 'move';
    e.currentTarget.setAttribute('aria-grabbed', 'true');
  };

  const onDragEnd = (e) => {
    e.currentTarget.setAttribute('aria-grabbed', 'false');
  };

  const onDrop = (e, columnId) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, column: columnId } : t)));
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Quadro Kanban</h1>

      <form
        className={styles.toolbar}
        onSubmit={(e) => {
          e.preventDefault();
          addTask(inputRef.current.value);
          inputRef.current.value = '';
          inputRef.current.focus();
        }}
        aria-label="Adicionar e filtrar tarefas"
      >
        <label className={styles.visuallyHidden} htmlFor="newTask">
          Nova tarefa
        </label>
        <input
          id="newTask"
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Descreva a tarefa e pressione Enter"
          required
          aria-required="true"
        />

        <label className={styles.visuallyHidden} htmlFor="filter">
          Filtrar tarefas
        </label>
        <input
          id="filter"
          className={styles.input}
          type="search"
          placeholder="Filtrar por título"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filtrar tarefas por título"
        />
      </form>

      <div className={styles.board} role="list" aria-label="Colunas do kanban">
        {COLUMNS.map((col) => (
          <section
            key={col.id}
            className={styles.column}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, col.id)}
            aria-labelledby={`h-${col.id}`}
            role="group"
            tabIndex={0}
          >
            <header className={styles.columnHeader}>
              <h2 id={`h-${col.id}`} className={styles.columnTitle}>
                {col.name}
              </h2>
              <span
                className={styles.count}
                aria-label={`Total de tarefas: ${
                  filtered.filter(t => t.column === col.id).length
                }`}
              >
                {filtered.filter(t => t.column === col.id).length}
              </span>
            </header>

            <ul className={styles.list} role="list" aria-describedby={`d-${col.id}`}>
              <span id={`d-${col.id}`} className={styles.visuallyHidden}>
                Arraste e solte tarefas ou use os botões para mover.
              </span>

              {filtered
                .filter(t => t.column === col.id)
                .map((t) => (
                  <li key={t.id} className={styles.card} role="listitem">
                    <article
                      className={styles.cardInner}
                      draggable
                      onDragStart={(e) => onDragStart(e, t.id)}
                      onDragEnd={onDragEnd}
                      aria-grabbed="false"
                    >
                      <div className={styles.badge}>{t.tag}</div>

                      <h3 className={styles.cardTitle}>{t.title}</h3>

                      <div className={styles.cardActions}>
                        <button
                          type="button"
                          className={`${styles.btn} ${styles.ghost}`}
                          onClick={() => moveTask(t.id, -1)}
                          aria-label="Mover para a coluna anterior"
                          title="Mover para a coluna anterior"
                        >
                          ←
                        </button>

                        <button
                          type="button"
                          className={`${styles.btn} ${styles.solid}`}
                          onClick={() => moveTask(t.id, +1)}
                          aria-label="Mover para a próxima coluna"
                          title="Mover para a próxima coluna"
                        >
                          →
                        </button>

                        <button
                          type="button"
                          className={`${styles.btn} ${styles.outline}`}
                          onClick={() => removeTask(t.id)}
                          aria-label="Excluir tarefa"
                          title="Excluir tarefa"
                        >
                          Excluir
                        </button>
                      </div>
                    </article>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}