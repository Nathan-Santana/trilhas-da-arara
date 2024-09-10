import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Trilhas da Arara</title>
        <meta name="description" content="Explore as maravilhas do cerrado com o Trilhas da Arara." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="logo">
          <div className="logo-circle"></div>
          <span>Trilhas da Arara</span>
        </div>
        <button className="login-button">entrar</button>
      </header>

      <main className="main">
        <h1>Siga as asas do cerrado</h1>
        <nav className="nav">
          <ul>
            <li><a href="#">Pesquisar tudo</a></li>
            <li><a href="#">Hotéis</a></li>
            <li><a href="#">O que fazer</a></li>
            <li><a href="#">Restaurantes</a></li>
            <li><a href="#">Agenda</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Lugares para curtir, comer, hotéis..." />
          <button>Buscar</button>
        </div>
        <div className="image-container">
          <img src="/trilhas-da-arara/dunas.png" alt="Paisagem do cerrado" />
        </div>
      </main>
    </div>
  );
}

