"use client";

import { useState } from "react";

export default function ContactForm() {
  const [note, setNote] = useState({ text: "Vos informations restent confidentielles.", error: false });
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name || !email) {
      setNote({ text: "Merci de renseigner au moins votre nom et votre e-mail.", error: true });
      return;
    }
    setSent(true);
    setNote({
      text: "Merci ! Votre demande a bien été prise en compte — nous vous répondrons rapidement.",
      error: false,
    });
    form.reset();
  }

  return (
    <form className="form reveal in" id="contact-form" noValidate onSubmit={onSubmit}>
      <h3>Demander une mission</h3>
      <div className="field">
        <label htmlFor="f-name">Nom &amp; prénom</label>
        <input id="f-name" name="name" type="text" placeholder="Votre nom" required />
      </div>
      <div className="field">
        <label htmlFor="f-org">Organisation</label>
        <input id="f-org" name="org" type="text" placeholder="Institution, ONG, entreprise…" />
      </div>
      <div className="field">
        <label htmlFor="f-email">E-mail</label>
        <input id="f-email" name="email" type="email" placeholder="vous@organisation.org" required />
      </div>
      <div className="field">
        <label htmlFor="f-need">Type de besoin</label>
        <select id="f-need" name="need" defaultValue="">
          <option value="">Sélectionner…</option>
          <option>Études &amp; recherches</option>
          <option>Appui aux collectivités territoriales</option>
          <option>Formation &amp; renforcement de capacités</option>
          <option>Autre</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Votre message</label>
        <textarea id="f-msg" name="message" placeholder="Décrivez votre besoin en quelques lignes…"></textarea>
      </div>
      <button className="btn btn-primary" type="submit" disabled={sent} style={sent ? { opacity: 0.75 } : undefined}>
        {sent ? "Demande envoyée ✓" : (<>Envoyer la demande <span className="arr">→</span></>)}
      </button>
      <p className="form-note" style={{ color: note.error || sent ? "var(--red-700)" : undefined }}>
        {note.text}
      </p>
    </form>
  );
}
