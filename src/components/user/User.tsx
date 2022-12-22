import type { Component } from 'solid-js';
import styles from './User.module.css';

interface UserProps {
  name: string;
  subtitle: string;
  icon: string;
}

export const User: Component<UserProps> = (props: UserProps) => {
  return (
    <div class={styles.container}>
      <img
        src={props.icon}
        class={styles.image}
      />
      <div>
        <p class={styles.name}>{props.name}</p>
        <p class={styles.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
};
