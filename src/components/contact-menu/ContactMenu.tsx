import { Component, createSignal, JSXElement } from 'solid-js';
import styles from './ContactMenu.module.css';
import { User } from '../user/User';

interface ContactMenuProps {
  user: JSXElement;
}

interface EmailState {
  name: string;
  email: string;
  message: string;
}

export const ContactMenu: Component<ContactMenuProps> = (
  props: ContactMenuProps
) => {
  const [emailState, setEmailState] = createSignal<EmailState>({
    name: '',
    email: '',
    message: '',
  });
  return (
    <div class={styles.container}>
      <p class={styles.title}>Message {props.user}</p>
      <div class={styles.form}>
        <div class={styles['form-item']}>
          <label for="Name">Your Name</label>
          <input
            name="Name"
            value={emailState().name}
          />
        </div>
        <div class={styles['form-item']}>
          <label for="Email">Your Email</label>
          <input
            name="Email"
            value={emailState().email}
          />
        </div>
        <div class={styles['form-item']}>
          <label for="Message">Your Message</label>
          <textarea
            class={styles.message}
            value={emailState().message}
            name="Message"
          />
        </div>
      </div>
      <button class={styles.submit}>Submit</button>
    </div>
  );
};
