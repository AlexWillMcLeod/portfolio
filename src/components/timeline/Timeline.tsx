import type { Component, JSXElement } from 'solid-js';
import styles from './Timeline.module.css';

interface TimelineProps {
  children?: JSXElement;
}

export const Timeline: Component<TimelineProps> = (props: TimelineProps) => {
  return <div class={styles['timeline-container']}>{props.children}</div>;
};
