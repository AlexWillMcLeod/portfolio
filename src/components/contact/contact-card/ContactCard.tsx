import styles from './ContactCard.module.css';
import type { Component, JSXElement } from 'solid-js';
import { createSignal, Show } from 'solid-js';
import { BiRegularClipboard } from 'solid-icons/bi';

interface ContactCardProps {
  email: string;
  user: JSXElement;
}

export const ContactCard = (props: ContactCardProps) => {
  const [showCopied, setShowCopied] = createSignal<boolean>(false);
  return (
    <div class={styles.container}>
      {props.user}
      <div class={styles['email-container']}>
        <p class={styles.email}>{props.email}</p>
        <button
          class={styles['copy-button']}
          onClick={() => {
            navigator.clipboard.writeText(props.email);
            setShowCopied(true);
            setInterval(() => setShowCopied(false), 2000);
          }}
        >
          <p class={showCopied() ? styles.copied : styles.copy}>
            {showCopied() ? 'Copied' : 'Copy'}
          </p>
          <BiRegularClipboard
            size="1.4rem"
            class={showCopied() ? styles.copied : styles.copy}
          />
        </button>
      </div>
    </div>
  );
};
