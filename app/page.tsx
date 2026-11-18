export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Decoding Tomorrow</h1>
        <p>Post-Quantum Cryptography vs. Current Crypto & The Blockchain Case Study</p>
      </header>

      <main>
        <section className="card">
          <h2>Welcome to the Project</h2>
          <p>
            Hey there! This educational hub is designed to break down how quantum computers will eventually threaten 
            the encryption protecting today's digital world—and how cryptocurrency is adapting to survive.
          </p>
          <p>
            <em>Site under construction: Check back soon for interactive modules, visual breakdowns, and deep dives into lattice-based cryptography.</em>
          </p>
        </section>

        <section className="card">
          <h2>What You'll Learn</h2>
          <p><strong>1. Current Crypto:</strong> How RSA and Elliptic Curve Cryptography (ECC) secure modern websites and blockchains like Bitcoin.</p>
          <p><strong>2. The Quantum Threat:</strong> Why quantum computers and Shor's algorithm render current math problems trivial to solve.</p>
          <p><strong>3. The Solution:</strong> Post-quantum algorithms and how decentralized networks plan to upgrade before quantum supremacy arrives.</p>
        </section>
      </main>
    </div>
  );
}