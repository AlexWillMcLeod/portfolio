import { Component, JSXElement, Show } from 'solid-js';
import { TechIcon } from '../tech-icon/TechIcon';
import styles from './Project.module.css';

export interface ProjectProps {
  title: string;
  subtitle?: string;
  desc?: string;
  github_link: string;
  website_link?: string;
  download_link?: string;
  technologies?: JSXElement;
  children?: JSXElement;
}

export const Project: Component<ProjectProps> = (props: ProjectProps) => {
  return (
    <div class={styles.container}>
      <div class={styles['image-container']}>{props.children}</div>
      <h1 class={styles.title}>{props.title}</h1>
      <h3>{props.subtitle}</h3>
      <p>{props.desc}</p>
      <div class={styles.tech}>{props.technologies}</div>
      <div class={styles.links}>
        <a
          class={styles.link}
          href={props.github_link}
          target="_blank"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
          </svg>
        </a>
        <Show when={props.website_link}>
          <a
            class={styles.link}
            href={props.website_link}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="28px"
              height="28px"
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
        <Show when={props.download_link}>
          <a
            class={styles.link}
            href={props.download_link}
          >
            <svg
              width="24"
              height="24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
              />
            </svg>
          </a>
        </Show>
      </div>
    </div>
  );
};
