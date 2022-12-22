import { Component, JSXElement, Show } from 'solid-js';
import styles from './Card.module.css';

export interface CardProps {
  title: JSXElement;
  id: string;
  back?: boolean;
  children?: JSXElement;
}

export const Card: Component<CardProps> = (props: CardProps) => {
  return (
    <li
      id={props.id}
      class={styles['card-div']}
      style={
        props.back && {
          'scroll-snap-align': 'start',
        }
      }
    >
      <div>
        <div class={styles['title-div']}>
          {props.title}
          <Show when={props.back}>
            <a
              class={styles['back-button']}
              href="#"
            >
              Back <div class={styles['return-char']}>⏎</div>
            </a>
          </Show>
        </div>
      </div>
      {props.children}
    </li>
  );
};
