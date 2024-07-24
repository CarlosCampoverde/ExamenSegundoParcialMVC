import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TASK TASK TASK</title>
        <meta name="description" content="Página creada desde cero con Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="#">Task Task Task</a>
        </h1>

        <p className={styles.description}>
          Recuerda tus tareas pendientes hoy, mañana y siempre.
        </p>

        <Link href="/login">
          <button className={styles.button}>Iniciar Sesión</button>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Dark593
        </a>
      </footer>
    </div>
  );
}

export default Home;
