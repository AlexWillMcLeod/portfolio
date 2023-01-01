import type { Component, JSXElement } from 'solid-js';
import styles from './Contact.module.css';

export interface ContactProps {
  children?: JSXElement;
}

export const Contact: Component<ContactProps> = (props: ContactProps) => {
  return <div class={styles.container}>{props.children}</div>;
};
