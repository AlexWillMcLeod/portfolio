import type { Component, JSXElement } from 'solid-js';
import Scrollbars from 'solid-custom-scrollbars';
import styles from './Container.module.css';

export interface ContainerProps {
  children?: JSXElement;
}

export const Container: Component<ContainerProps> = (props: ContainerProps) => {
  return <div class={styles.container}>{props.children}</div>;
};
