import { Component, createEffect, createSignal, Show } from 'solid-js';
import styles from './Navbar.module.css';

export interface NavbarLink {
  href: string;
  target?: string;
  text: string;
}

interface Navbar {
  left_links: NavbarLink[];
  right_links: NavbarLink[];
}

export const Navbar: Component<Navbar> = (props: Navbar) => {
  const [windowWidth, setWindowWidth] = createSignal<number>(0);
  const [showDropdown, setShowDropdown] = createSignal<boolean>(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth >= 880) {
      setShowDropdown(false);
    }
  };

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown());
  };

  createEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav class={styles.nav}>
      <Show when={windowWidth() < 880}>
        <button
          class={styles['menu-button']}
          onClick={handleToggleDropdown}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
            fill="white"
          >
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
          </svg>
        </button>
        <Show when={showDropdown()}>
          <ul class={styles['dropdown-list']}>
            {props.left_links.map((link: NavbarLink) => (
              <li class={styles['list-item']}>
                <a
                  href={link.href}
                  target={link.target}
                  class={styles['list-item-a']}
                >
                  {link.text}
                </a>
              </li>
            ))}
            {props.right_links.map((link: NavbarLink) => (
              <li class={styles['list-item']}>
                <a
                  href={link.href}
                  target={link.target}
                  class={styles['list-item-a']}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </Show>
      </Show>
      <Show when={windowWidth() >= 880}>
        <ul
          class={styles.list}
          style={{ 'margin-right': 'auto' }}
        >
          {props.left_links.map((link: NavbarLink) => (
            <li class={styles['list-item']}>
              <a
                href={link.href}
                target={link.target}
                class={styles['list-item-a']}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <ul class={styles.list}>
          {props.right_links.map((link: NavbarLink) => (
            <li class={styles['list-item']}>
              <a
                href={link.href}
                class={styles['list-item-a']}
                target={link.target}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </Show>
    </nav>
  );
};
