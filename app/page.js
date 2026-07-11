import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import {
  COUNTRIES, STATS, VALUES, PILLARS, THEMES,
  TEAM, NETWORK, TIMELINE, REFERENCES,
} from "@/lib/data";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <main>

        {/* ============ HERO ============ */}
         {/* ============ HERO ============ */} {/* ============ HERO ============ */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="hero-loc"><span className="dot"></span> Dakar, Sénégal — Cabinet de consultance depuis 2005</span>
              <h1>Conseil, accompagnement<br />et formation au service du <span className="accent">développement</span>.</h1>
              <p className="hero-lede">ADEF, Consulting fédère la compétence de professionnels avérés, réunis pour mieux répondre aux besoins des acteurs du développement économique, financier, social et culturel.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#domaines">Découvrir nos domaines <span className="arr">→</span></a>
                <a className="btn btn-ghost" href="#contact">Demander une mission</a>
              </div>
              <div className="hero-stats">
                {STATS.map((s) => (
                  <div className="stat" key={s.num + s.lab}>
                    <div className="num">{s.num}</div>
                    <div className="lab">{s.lab}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual">
              <div className="ph">
                <Image
                  src="/WhatsApp Image 2026-07-11 at 1.59.45 PM.jpeg"
                  alt="Équipe en mission"
                  fill
                  priority
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="hero-badge">
                <div className="k">Une équipe pluridisciplinaire</div>
                <div className="v">Au service des organisations publiques, privées et de la société civile.</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ BANDEAU PORTÉE ============ */}
        <div className="marquee-band">
          <div className="wrap">
            <span className="label">Réseau de personnes ressources</span>
            <div className="flags">
              {COUNTRIES.map((c) => <span key={c}>{c}</span>)}
            </div>
          </div>
        </div>

        {/* ============ LE CABINET ============ */}
        <section className="section" id="cabinet">
          <div className="wrap intro-grid">
            <Reveal className="intro-copy">
              <span className="eyebrow">Le cabinet</span>
              <p className="lead" style={{ marginTop: "18px" }}>Un collectif de professionnels avérés, réunis pour accompagner les acteurs du développement avec exigence et proximité.</p>
              <p style={{ marginTop: "22px" }}>ADEF, Consulting est un cabinet de consultance, d'appui-conseil, d'accompagnement, de formation et de prestation de services. Il fédère la compétence de professionnels reconnus dans leurs domaines respectifs, ayant décidé de se mettre ensemble pour mieux répondre aux besoins des acteurs du développement économique, financier, social et culturel.</p>
              <p>Nous sommes au service de toutes organisations, gouvernementales ou non, publiques et privées, à but lucratif ou non, pour les appuyer, conseiller et accompagner — en leur offrant des prestations avec toute la qualité et le professionnalisme requis.</p>
              <p className="intro-quote">« Le cabinet intervient dans les domaines des Études-Recherches, de l'Appui-Conseil-Accompagnement aux Collectivités Territoriales et de la Formation. »</p>
            </Reveal>
            <Reveal className="intro-figure">
              <div className="ph">
                <Image
                  src="/WhatsApp Image 2026-07-11 at 2.00.12 PM.jpeg"
                  alt="Atelier participatif sur le terrain"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Reveal>
          </div>

          <div className="wrap" style={{ marginTop: "clamp(56px, 8vw, 96px)" }}>
            <span className="eyebrow">Nos valeurs</span>
            <Reveal className="values">
              {VALUES.map((v) => (
                <div className="value" key={v.n}>
                  <div className="vn">{v.n}</div>
                  <h4>{v.t}</h4>
                  <p>{v.d}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ DOMAINES ============ */}
        <section className="section alt" id="domaines">
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Domaines d'intervention</span>
              <h2>Trois pôles d'expertise, une approche intégrée.</h2>
              <p>Du diagnostic à la mise en œuvre, le cabinet est outillé sur les techniques et méthodes les plus exigeantes pour produire des résultats utiles et durables.</p>
            </Reveal>

            <div className="pillars">
              {PILLARS.map((p) => (
                <Reveal as="article" className="pillar" key={p.num}>
                  <div className="pillar-aside">
                    <div className="pnum">{p.num}</div>
                    <h3>{p.title}</h3>
                    <p>{p.intro}</p>
                  </div>
                  <div className="pillar-body">
                    <div className="pillar-cats">
                      {p.cats.map((c) => (
                        <div className="cat" key={c.h}>
                          <h5>{c.h}</h5>
                          <ul>
                            {c.items.map((it) => <li key={it}>{it}</li>)}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FORMATION ============ */}
        <section className="section" id="formation">
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Thématiques de formation</span>
              <h2>Cinq domaines pour renforcer les compétences.</h2>
              <p>Le cabinet dispose des ressources pour concevoir et conduire des missions de formation, du cadrage méthodologique à l'animation des sessions.</p>
            </Reveal>

            <div className="themes">
              {THEMES.map((t) => (
                <Reveal as="article" className="theme" key={t.tag}>
                  <div className="tk">{t.tag}</div>
                  <h4>{t.t}</h4>
                  <ul>
                    {t.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ ÉQUIPE ============ */}
        <section className="section alt" id="equipe">
          <div className="wrap">
            <Reveal className="section-head" style={{ marginBottom: "48px" }}>
              <span className="eyebrow">Notre équipe</span>
              <h2>Une équipe pluridisciplinaire, un réseau étendu.</h2>
              <p>Une équipe au service exclusif du cabinet, prolongée par un réseau diversifié de personnes ressources de nationalités diverses.</p>
            </Reveal>

            <div className="team-grid">
              <Reveal className="team-core">
                <div className="team-list">
                  {TEAM.map((m) => (
                    <div className="team-item" key={m.n}>
                      <span className="ti-num">{m.n}</span>
                      <span className="ti-body">
                        <strong>{m.t}</strong>
                        <span>{m.d}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal as="aside" className="network">
                <h3>Un réseau de personnes ressources</h3>
                <p>Issues de nationalités diverses — Sénégal, Burkina Faso, Togo, Bénin, Maroc et Canada — mobilisables selon les besoins de chaque mission :</p>
                <div className="chips">
                  {NETWORK.map((c) => <span className="chip" key={c}>{c}</span>)}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============ RÉALISATIONS ============ */}
        <section className="section" id="realisations">
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Activités réalisées</span>
              <h2>Des missions menées sur le terrain, depuis deux décennies.</h2>
            </Reveal>

            <div className="timeline">
              {TIMELINE.map((t) => (
                <Reveal className="tl-item" key={t.y + t.t.slice(0, 12)}>
                  <div className="tl-year">{t.y}</div>
                  <p>{t.t}<span className="org">{t.org}</span></p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ RÉFÉRENCES ============ */}
        <section className="section alt" id="references">
          <div className="wrap">
            <Reveal className="section-head">
              <span className="eyebrow">Quelques références</span>
              <h2>Ils nous ont fait confiance.</h2>
              <p>Un aperçu de missions conduites pour des institutions publiques, des ONG et des partenaires internationaux.</p>
            </Reveal>

            <Reveal className="ref-table">
              <div className="ref-row head">
                <div>Institution</div>
                <div>Service rendu</div>
                <div>Référent</div>
              </div>
              {REFERENCES.map((r) => (
                <div className="ref-row" key={r.inst}>
                  <div className="ref-inst">{r.inst}</div>
                  <div className="ref-serv">{r.serv}</div>
                  <div className="ref-ref">
                    {r.ref}
                    {r.role ? <small>{r.role}</small> : null}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section className="section" id="contact">
          <div className="wrap">
            <Reveal className="section-head" style={{ marginBottom: "52px" }}>
              <span className="eyebrow">Contact</span>
              <h2>Parlons de votre projet.</h2>
              <p>Une étude, un appui à votre collectivité, une mission de formation ? Écrivez-nous — nous revenons vers vous rapidement.</p>
            </Reveal>

            <div className="contact-grid">
              <Reveal className="contact-info">
                <div className="ci-row">
                  <div className="ci-ic">⌖</div>
                  <div><div className="ci-k">Adresse</div><div className="ci-v">BP 11808 Dakar-Peytavin, Sénégal</div></div>
                </div>
                <div className="ci-row">
                  <div className="ci-ic">☎</div>
                  <div><div className="ci-k">Téléphone / Fax</div><div className="ci-v"><a href="tel:+221 338450710">+221 836 49 22</a> · Mobile <a href="tel:+2216460705">+221 646 07 05</a></div></div>
                </div>
                <div className="ci-row">
                  <div className="ci-ic">✉</div>
                  <div><div className="ci-k">E-mail</div><div className="ci-v"><a href="mailto:adefconsulting@gmail.com">adefconsulting@gmail.com</a></div></div>
                </div>
                <div className="ci-row">
                  <div className="ci-ic">§</div>
                  <div><div className="ci-k">Identifiants</div><div className="ci-v">RC : SN-DKR-2005-C-2907 · NINEA : 44177802R6</div></div>
                </div>
              </Reveal>

              <ContactForm />
            </div>
          </div>
        </section>

      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <Image className="brand-logo" src="/logo.png" alt="ADEF Consulting" width={174} height={120} />
              <p className="footer-about">Afrique, Développement, Éducation, Formation — Consulting. Un cabinet de consultance, d'appui-conseil, d'accompagnement et de formation au service des acteurs du développement.</p>
            </div>
            <div>
              <h5>Explorer</h5>
              <ul>
                <li><a href="#cabinet">Le cabinet</a></li>
                <li><a href="#domaines">Domaines d'intervention</a></li>
                <li><a href="#formation">Formation</a></li>
                <li><a href="#equipe">Notre équipe</a></li>
                <li><a href="#references">Références</a></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li>BP 11808 Dakar-Peytavin</li>
                <li>+221 836 49 22</li>
                <li>+221 646 07 05</li>
                <li><a href="mailto:adefconsulting@gmail.com">adefconsulting@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} ADEF, Consulting — Tous droits réservés.</span>
            <span>RC : SN-DKR-2005-C-2907 · NINEA : 44177802R6</span>
          </div>
        </div>
      </footer>

      <style>{`
        .hero-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(18px, 3vw, 36px);
          width: min(100%, 620px);
          margin-inline: auto;
          align-self: center;
          margin-top: 48px;
          padding-top: 30px;
          border-top: 1px solid var(--line);
        }

        .stat {
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat .num {
          width: 100%;
          text-align: center;
        }

        .stat .lab {
          font-size: 13px;
          color: var(--muted);
          margin-top: 8px;
          max-width: 16ch;
          text-align: center;
        }

        .flags {
          display: flex;
          flex-wrap: nowrap;
          gap: 10px 22px;
          width: 100%;
        }

        @media (max-width: 640px) {
          .hero-stats {
            width: 100%;
            gap: 12px;
          }

          .stat .lab {
            max-width: none;
            font-size: 11px;
            line-height: 1.35;
          }

          .flags {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 10px 14px;
          }

          .flags span {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
}
