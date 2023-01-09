import type { Component, JSXElement } from 'solid-js';
import styles from './TimelineCard.module.css';

interface TimelineCardProps {
  role: string;
  company: string;
  timeperiod: string;
  desc: string | JSXElement;
  children?: JSXElement;
}

export const TimelineCard: Component<TimelineCardProps> = (
  props: TimelineCardProps
) => {
  return (
    <div class={styles.container}>
      <h1 class={styles.role}>{props.role}</h1>
      <h2 class={styles.company}>{props.company}</h2>
      <h3 class={styles.timeperiod}>{props.timeperiod}</h3>
      <div class={styles.desc}>
        <p class={styles.children}>{props.desc}</p>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
