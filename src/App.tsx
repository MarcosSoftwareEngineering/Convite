import { useState, useEffect } from 'react';
import './App.css';
import conviteBg from './assets/convite.jpg';

// Imports das imagens
import liquidificadorImg from './assets/liqDificador.jpeg'; 
import ventiladorImg from './assets/ventilador.jpeg';
import ferroDePassarImg from './assets/ferroDePassar.jpeg';
import sanduicheiraImg from './assets/Sanduicheira.jpeg'; 
import maquinaCabeloImg from './assets/Maquinacabelo.jpeg'; 

const prizes = [
  { id: 1, title: 'Liquidificador Retro', description: 'O suco perfeito para o dia de sol!', imgSrc: liquidificadorImg },
  { id: 2, title: 'Ventilador Vintage', description: 'Para refrescar a brisa do barco.', imgSrc: ventiladorImg },
  { id: 3, title: 'Ferro de Passar a Vapor', description: 'Para estar elegante na praia.', imgSrc: ferroDePassarImg },
  { id: 4, title: 'Sanduicheira Inox', description: 'Para um lanche rápido.', imgSrc: sanduicheiraImg },
  { id: 5, title: 'Máquina de Cortar Cabelo Profissional', description: 'Para ficar na régua para a festa.', imgSrc: maquinaCabeloImg },
];

function App() {
  const [name, setName] = useState('');
  const [inviteGenerated, setInviteGenerated] = useState(false);
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleGenerateInvite = () => {
    if (!name.trim()) {
      alert('Por favor, digite seu nome primeiro!');
      return;
    }
    setInviteGenerated(true);
  };

  useEffect(() => {
    if (inviteGenerated) {
      const timer = setTimeout(() => {
        setCurrentPrizeIndex(0);
        setShowModal(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [inviteGenerated]);

  const handleNextPrize = () => {
    if (currentPrizeIndex < prizes.length - 1) {
      setCurrentPrizeIndex(currentPrizeIndex + 1);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const handleStartRaffle = () => { setCurrentPrizeIndex(0); setShowModal(true); };

  const waNumber = '5512997184400'; 
  const waLink = `https://wa.me/${waNumber}?text=Oi%20Adailton!%20Aqui%20é%20o(a)%20${name},%20confirmo%20presença%20no%20seu%20Bora%20Bora!`;

  return (
    <>
      <style>{`
        @keyframes fadeInSlide { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        @keyframes pulse { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 107, 0, 0.7); } 70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 107, 0, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 107, 0, 0); } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        
        .fadeInSlide { animation: fadeInSlide 1s ease-out forwards; }
        .float { animation: float 6s ease-in-out infinite; }
        .pulse { animation: pulse 2s infinite; }
        .zoomIn { animation: zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}</style>

      <div className="app-container" style={{
        backgroundImage: `url(${conviteBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'scroll',
        padding: '20px'
      }}>
        
        {!inviteGenerated ? (
          // TELA 1: LOGIN 
          <div className="fadeInSlide float" style={styles.glassCard}>
            <h1 style={styles.title}>Bora Bora com as Pretas</h1>
            <h2 style={styles.subtitle}>Aniversário do Adailton - 13/09/2026</h2>
            <input 
              type="text" 
              placeholder="Digite seu nome para acessar" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleGenerateInvite} style={styles.button}>
              Ver Meu Convite Especial
            </button>
          </div>
        ) : (
          // TELA 2: CONVITE E CARTÕES
          <>
            {/* CARTÃO 1: INICIA EM CIMA (O CONVITE PRINCIPAL) */}
            <div className="fadeInSlide float" style={{ ...styles.glassCard, maxWidth: '90%', width: '700px', marginBottom: '60px', marginTop: '40px' }}>
              
              <h1 style={{ color: '#0a5c2d', textAlign: 'center', marginBottom: '20px', textShadow: '0px 1px 2px rgba(255,255,255,0.8)' }}>
                Para: {name}
              </h1>
              
              <section style={{ padding: '20px', fontSize: '18px', lineHeight: '1.6', color: '#1a401c', textAlign: 'left', marginBottom: '30px', textShadow: '0px 1px 1px rgba(255,255,255,0.5)' }}>
                <p style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Convite – Aniversário do Adailton</p>
                <p style={{ textAlign: 'center', fontWeight: 'bold' }}>📅 Data: 13/09/2026</p>
                <br />
                <p><strong>{name}, meu amigo(a),</strong></p>
                <p>Este convite é feito com carinho especialmente para você. No dia 13 de setembro quero celebrar não apenas mais um ano de vida, mas também a alegria de ter pessoas tão importantes como você ao meu lado.</p>
                <p>Sua presença é essencial para tornar esse momento inesquecível. Você não é apenas convidado, é parte fundamental da minha história e da minha felicidade. Ter você comigo nessa comemoração será um presente que não tem preço.</p>
                <p>Espero que venha compartilhar risadas, boas lembranças e novas histórias. Afinal, aniversários são mais especiais quando temos amigos únicos como você para celebrar junto.</p>
                <br />
                <p style={{ textAlign: 'right' }}>Com gratidão e amizade,</p>
                <p style={{ fontSize: '28px', textAlign: 'right', fontWeight: 'bold', fontFamily: '"Great Vibes", cursive, sans-serif' }}>Adailton</p>
              </section>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{ color: '#1a401c', marginBottom: '15px', textShadow: '0px 1px 1px rgba(255,255,255,0.5)' }}>
                  O Bingo começará automaticamente em 5 segundos...
                </h3>
                <button className="pulse" onClick={handleStartRaffle} style={styles.raffleButton}>
                  Ver Prêmios do Sorteio Manualmente
                </button>
              </div>
            </div>

            {/* SEÇÃO INFERIOR: CARTÕES QUANDO ROLA PARA BAIXO */}
            <div className="fadeInSlide" style={{ ...styles.glassContainer, marginBottom: '60px' }}>
              
              {/* CARTÃO 2: O CARTÃO DE VALORES (Novo formato lindão!) */}
              <div style={styles.innerCard}>
                <h2 style={styles.cardTitle}>Pacote All Inclusive 🌴</h2>
                
                <div style={{ backgroundColor: 'rgba(10, 92, 45, 0.1)', padding: '20px', borderRadius: '10px', marginBottom: '20px', textAlign: 'center' }}>
                  <p style={{ fontSize: '22px', margin: 0, color: '#0a5c2d', fontWeight: 'bold' }}>
                    Valor: 100 Reais <span style={{ color: '#666', fontSize: '18px' }}>ou</span> 1 Caixa de Cerveja
                  </p>
                </div>

                <p style={{ fontSize: '20px', color: '#1a401c', fontWeight: 'bold', marginBottom: '15px' }}>
                  Você terá direito a:
                </p>

                <ul style={styles.detailList}>
                  <li>🍻 <strong>Bebidas:</strong> Água, cerveja, refrigerante, energéticos, whisky e caipirinha.</li>
                  <li>🍖 <strong>Comida:</strong> Feijoada, bolo, salgados e churrasco na praia.</li>
                  <li>🎁 <strong>Diversão:</strong> Direito a participar do Bingo com prêmios!</li>
                </ul>
              </div>

              {/* CARTÃO 3: RSVP / CONFIRMAÇÃO */}
              <div style={styles.innerCard}>
                <h2 style={styles.cardTitle}>Confirmar Presença (RSVP)</h2>
                <p style={styles.cardText}>Para garantir que tudo corra bem no nosso Bora Bora, por favor confirme sua presença.</p>
                
                <a href={waLink} target="_blank" rel="noopener noreferrer" style={styles.waLink}>
                  <button style={styles.rsvpButtonWA}>
                    Confirmar via WhatsApp ➔
                  </button>
                </a>
              </div>

              {/* CARTÃO 4: RESUMO DOS PRÊMIOS DO BINGO */}
              <div style={styles.innerCard}>
                <h2 style={styles.cardTitle}>Resumo dos Prêmios do Bingo</h2>
                <div style={styles.prizeSummaryList}>
                  {prizes.map((prize, index) => (
                    <div key={prize.id} style={styles.prizeSummaryItem}>
                      <span style={styles.prizeId}>PRÊMIO {prize.id}:</span>
                      <span style={styles.prizeName}>{prize.title}</span>
                      {index === 0 && '🍹'} {index === 1 && '💨'} {index === 2 && '👔'} {index === 3 && '🥪'} {index === 4 && '💈'}
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a401c', fontFamily: '"Great Vibes", cursive, sans-serif' }}>Até lá!</p>
                <span style={{ fontSize: '30px' }}>🏝️⛵</span>
              </div>
            </div>
          </>
        )}

        {/* MODAL DO SORTEIO */}
        {showModal && (
          <div style={styles.modalOverlay}>
            <div className="zoomIn" style={{ ...styles.glassCard, maxWidth: '400px', width: '90%', position: 'relative' }}>
              <button onClick={handleCloseModal} style={styles.closeX}>✖</button>
              <h2 style={styles.modalTitle}>PRÊMIO {prizes[currentPrizeIndex].id}</h2>
              <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}>
                <img src={prizes[currentPrizeIndex].imgSrc} alt={prizes[currentPrizeIndex].title} style={styles.prizeImage} />
              </div>
              <h3 style={styles.prizeTitle}>{prizes[currentPrizeIndex].title}</h3>
              <p style={styles.prizeDescription}>{prizes[currentPrizeIndex].description}</p>
              
              {currentPrizeIndex < prizes.length - 1 ? (
                <button onClick={handleNextPrize} style={styles.nextButton}>Próximo Prêmio ➔</button>
              ) : (
                <button onClick={handleCloseModal} style={styles.closeButton}>Finalizar Sorteio</button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Estilos Atualizados
const styles = {
  glassCard: { backgroundColor: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.6)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '500px', textAlign: 'center' as const },
  glassContainer: { backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)', border: '1px solid rgba(255, 255, 255, 0.5)', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', padding: '50px', borderRadius: '25px', width: '100%', maxWidth: '90%', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '30px' },
  
  // Estilo dos cartões que aparecem na rolagem
  innerCard: { backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', width: '100%', maxWidth: '600px', textAlign: 'left' as const },
  
  cardTitle: { color: '#0a5c2d', fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' as const, textAlign: 'center' as const },
  cardText: { color: '#666', fontSize: '18px', marginBottom: '25px', lineHeight: '1.4', textAlign: 'center' as const },
  detailList: { fontSize: '18px', color: '#1a401c', marginTop: '10px', lineHeight: '1.8', listStyleType: 'none', paddingLeft: '0' },
  waLink: { textDecoration: 'none' },
  rsvpButtonWA: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#00cc66', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' as const, transition: 'all 0.3s ease', display: 'block', width: '100%' },
  prizeSummaryList: { display: 'flex', flexDirection: 'column' as const, gap: '15px' },
  prizeSummaryItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', backgroundColor: 'rgba(10, 92, 45, 0.1)', borderRadius: '10px', fontSize: '18px', color: '#1a401c' },
  prizeId: { fontWeight: 'bold', color: '#0a5c2d' },
  prizeName: { flexGrow: 1, textAlign: 'center' as const, fontWeight: 'bold' },
  title: { color: '#0a5c2d', fontSize: '32px', marginBottom: '10px', textShadow: '0px 1px 2px rgba(255,255,255,0.8)' },
  subtitle: { color: '#1a401c', fontSize: '18px', marginBottom: '30px', fontWeight: 'bold' as const },
  input: { padding: '15px', fontSize: '18px', borderRadius: '10px', border: '2px solid #0a5c2d', width: '90%', marginBottom: '20px', backgroundColor: 'rgba(255,255,255,0.8)' },
  button: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#0a5c2d', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' as const, width: '100%' },
  raffleButton: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#ff6b00', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' as const },
  modalOverlay: { position: 'fixed' as const, top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
  closeX: { position: 'absolute' as const, top: '15px', right: '20px', background: 'transparent', border: 'none', fontSize: '24px', color: '#333', cursor: 'pointer', fontWeight: 'bold' },
  prizeImage: { maxWidth: '100%', height: '150px', objectFit: 'contain' as const, borderRadius: '10px' },
  modalTitle: { color: '#ff6b00', fontSize: '28px', margin: 0, textShadow: '0px 1px 1px rgba(255,255,255,0.8)' },
  prizeTitle: { color: '#1a401c', fontSize: '28px', margin: '10px 0', textShadow: '0px 1px 1px rgba(255,255,255,0.8)' },
  prizeDescription: { color: '#1a401c', fontSize: '18px', marginBottom: '30px', fontWeight: 'bold' as const },
  nextButton: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#0a5c2d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' as const, width: '100%' },
  closeButton: { padding: '15px 30px', fontSize: '18px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' as const, width: '100%' },
};

export default App;