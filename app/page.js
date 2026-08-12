const portfolioUrl = process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://pedronet1997.github.io/about-me/";

const moduleGroups = [
  ["Operación", "Clientes, cuentas, cajas y movimientos"],
  ["Crédito", "Préstamos, cuotas, pagos y abonos a capital"],
  ["Contabilidad", "Fondos, salarios, cierres y balance"],
  ["Información", "Dashboard y reportes para supervisar la operación"],
  ["Administración", "Usuarios, roles, permisos y parámetros"],
];

const reliability = [
  ["Idempotencia", "Una intención financiera estable evita duplicar efectos ante reintentos o pérdida de respuesta."],
  ["Trazabilidad", "OperationId relaciona solicitudes, errores, auditoría, eventos y operaciones asociadas."],
  ["Transacciones", "Las operaciones compuestas mantienen sus efectos dentro de fronteras transaccionales."],
  ["Concurrencia", "Controles y pruebas cubren pagos, retiros, cierres y operaciones simultáneas."],
];

const security = ["JWT y autorización granular", "Contraseñas protegidas", "Secretos fuera del código", "MySQL sin exposición pública", "Servicios limitados al equipo local", "Paquetes verificados", "Licencia Offline verificable", "Diagnósticos sanitizados"];

function Arrow() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M5 15 15 5M7 5h8v8" /></svg>;
}

function SectionTitle({ index, label, title, copy }) {
  return <header className="section-title"><p>{index} / {label}</p><div><h2>{title}</h2>{copy && <span>{copy}</span>}</div></header>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio"><strong>Bank G</strong><span>Magic Systems</span></a>
        <div className="nav-links"><a href="#producto">Producto</a><a href="#arquitectura">Arquitectura</a><a href="#calidad">Calidad</a></div>
        <a className="portfolio" href={portfolioUrl} target="_blank" rel="noreferrer">Pedro Guale <Arrow /></a>
      </nav>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> OFFLINE 0.2.0 · GATE E APROBADO</p>
          <h1>Finanzas locales.<br/><em>Control real.</em></h1>
          <p className="lead">Una plataforma de gestión financiera diseñada para operar localmente con integridad transaccional, aislamiento por organización y herramientas propias de instalación y recuperación.</p>
          <div className="hero-actions"><a className="button primary" href="#producto">Explorar el producto <Arrow /></a><a className="button" href="#arquitectura">Ver arquitectura</a></div>
        </div>
        <div className="hero-visual" aria-label="Representación de una instancia local de Bank G">
          <div className="monogram">G</div>
          <div className="system-line"><span>INSTANCE</span><strong>LOCAL / ISOLATED</strong></div>
          <div className="pulse"><i /><span>SYSTEM READY</span></div>
        </div>
      </section>

      <section className="statement" id="producto"><div className="shell statement-grid"><p>01 / EL ENFOQUE</p><h2>No es solamente registrar datos. Es mantener una operación financiera consistente, recuperable y lista para evolucionar.</h2></div></section>

      <section className="section shell">
        <SectionTitle index="02" label="PRODUCTO" title="Una operación conectada." copy="Bank G reúne los procesos esenciales sin convertir la experiencia en una tabla interminable de funciones." />
        <div className="module-grid">{moduleGroups.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="section architecture" id="arquitectura"><div className="shell">
        <SectionTitle index="03" label="ARQUITECTURA" title="Modular por dentro. Simple al operar." copy="Un monolito modular desplegado en contenedores: límites claros sin complejidad distribuida innecesaria." />
        <div className="architecture-flow">
          <article><small>INTERFACE</small><strong>Angular 22</strong><span>Browser / Nginx</span></article><b>→</b>
          <article><small>APPLICATION</small><strong>Spring Boot 4.1</strong><span>Java 21 / JWT</span></article><b>→</b>
          <article><small>DATA</small><strong>MySQL 8</strong><span>Liquibase / CoreData</span></article>
        </div>
        <div className="instance-card"><div><p>INSTANCIA POR ORGANIZACIÓN</p><h3>Cada operación vive en su propio perímetro.</h3></div><ul><li>Proyecto y red Docker propios</li><li>Volumen y base de datos independientes</li><li>Configuración y secretos propios</li><li>Respaldo y restauración por instancia</li></ul></div>
      </div></section>

      <section className="section shell installer">
        <SectionTitle index="04" label="INSTALLER + LAUNCHER" title="Del equipo vacío al sistema operativo." copy="La entrega local es parte del producto, no una lista de instrucciones para el usuario." />
        <ol className="process"><li><span>01</span>Validar el equipo</li><li><span>02</span>Configurar instancia</li><li><span>03</span>Preparar Docker y MySQL</li><li><span>04</span>Aplicar CoreData</li><li><span>05</span>Iniciar Bank G</li></ol>
        <div className="launcher-grid"><article><p>SETUP</p><h3>Instalación verificable</h3><span>Comprueba requisitos, prepara la instancia, crea su configuración y valida la salud de los servicios.</span></article><article><p>LAUNCHER</p><h3>Control operativo</h3><span>Administra perfiles, servicios, respaldos, restauración, diagnóstico y reconciliación.</span></article></div>
      </section>

      <section className="section reliability"><div className="shell">
        <SectionTitle index="05" label="CONFIABILIDAD" title="Diseñada para cuando algo falla." />
        <div className="reliability-grid">{reliability.map(([title, text]) => <article key={title}><div className="cross">+</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="recovery"><p>RECUPERACIÓN</p><div><strong>Backup</strong><i>→</i><strong>Integridad</strong><i>→</i><strong>Restauración</strong><i>→</i><strong>Reconciliación</strong></div><span>Respaldos manuales y preventivos, manifiestos, hashes SHA-256 y comprobación posterior de la operación.</span></div>
      </div></section>

      <section className="section shell security">
        <SectionTitle index="06" label="SEGURIDAD" title="Principios públicos. Detalles privados." />
        <div className="security-list">{security.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}<i>✓</i></p>)}</div>
      </section>

      <section className="section quality" id="calidad"><div className="shell">
        <SectionTitle index="07" label="CALIDAD" title="205 pruebas. Una salida certificada." copy="Línea base documentada para Bank G Offline 0.2.0, además de las verificaciones de CoreData y Gate E." />
        <div className="metrics"><article><strong>82</strong><span>Backend</span></article><article><strong>49</strong><span>Frontend + build</span></article><article><strong>74</strong><span>Installer + build</span></article><article className="metric-wide"><strong>GO</strong><span>Gate E · Offline</span></article></div>
        <p className="coredata-note">COREDATA / Instalación limpia, migración y conciliación aprobadas.</p>
      </div></section>

      <section className="section status shell">
        <SectionTitle index="08" label="ESTADO" title="Offline hoy. Evolución controlada." />
        <div className="status-grid"><article className="done"><p>COMPLETADO</p><h3>Bank G Offline 0.2.0</h3><span>Gate E aprobado: instalación, aislamiento, licenciamiento, recuperación y operación local validados.</span></article><article><p>EN EVOLUCIÓN</p><h3>Siguiente ciclo</h3><span>Las mejoras posteriores se incorporarán de forma versionada y volverán a pasar por validación.</span></article><article className="planned"><p>FUERA DE 0.2.0</p><h3>Canal Online</h3><span>No se presenta como disponible ni certificado en esta entrega.</span></article></div>
      </section>

      <section className="closing"><div className="shell"><p>UN PRODUCTO DE MAGIC SYSTEMS</p><h2>Ingeniería financiera,<br/><em>hecha producto.</em></h2><a href={portfolioUrl} target="_blank" rel="noreferrer">Conocer a Pedro Guale <Arrow /></a></div></section>
      <footer className="shell"><p>© 2026 Bank G</p><p>Offline 0.2.0</p><a href="#inicio">Volver arriba ↑</a></footer>
    </main>
  );
}
