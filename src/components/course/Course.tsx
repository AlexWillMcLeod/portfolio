import { Component, JSXElement, Show } from 'solid-js';
import { TechIcon } from '../tech-icon/TechIcon';
import styles from './Course.module.css';

export interface CourseProps {
  title: string;
  subtitle: string;
  grade: string;
  website_link?: string;
  technologies?: JSXElement;
}

export const Course: Component<CourseProps> = (props: CourseProps) => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>{props.title}</h1>
      <h2 class={styles.subtitle}>{props.subtitle}</h2>
      <h3 class={styles.grade}>{props.grade}</h3>
      <div class={styles.tech}>{props.technologies}</div>
      <div class={styles.links}>
        <Show when={props.website_link}>
          <a
            class={styles.link}
            href={props.website_link}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36px"
              height="36px"
              fill="white"
            >
              <path d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h7v2H5v14h14v-7h2v7C21,20.1,20.1,21,19,21z" />
              <path d="M21 10L19 10 19 5 14 5 14 3 21 3z" />
              <path
                d="M6.7 8.5H22.3V10.5H6.7z"
                transform="rotate(-45.001 14.5 9.5)"
              />
            </svg>
          </a>
        </Show>
      </div>
    </div>
  );
};
