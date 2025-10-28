# 🚀 Quick Start - Pitch Deck

## Accesso Rapido

```
http://localhost:3000/pitch
```

## 📋 Checklist Pre-Demo

### Preparazione Dati
- [ ] Compila i placeholder `[DA COMPILARE]` in `pitch.data.ts`
- [ ] Aggiorna i KPIs nel ribbon superiore
- [ ] Verifica tutte le citations e link esterni
- [ ] Personalizza l'elevator pitch per il tuo pubblico

### Test Funzionalità
- [ ] Testa la modalità editing
- [ ] Verifica l'auto-save in localStorage
- [ ] Prova export JSON/PDF
- [ ] Controlla la navigazione tra sezioni
- [ ] Testa su mobile e tablet

### Demo Day
- [ ] Scegli la modalità pitch appropriata (Full/2min/30sec)
- [ ] Espandi le speaker notes necessarie
- [ ] Prepara le risposte per le sezioni "Appendix"
- [ ] Salva una versione finale prima della presentazione

## ⚡ Comandi Rapidi

### Keyboard Shortcuts (Browser)
- `Ctrl/Cmd + P`: Export PDF
- `Ctrl/Cmd + S`: Il browser potrebbe salvare la pagina
- `Ctrl/Cmd + F`: Ricerca nel testo

### Gestione Versioni
```typescript
// Salva versione corrente
localStorage.setItem('pitchVersions', JSON.stringify([data]));

// Reset ai dati originali
localStorage.removeItem('pitchData');
location.reload();
```

## 🎯 Use Cases Comuni

### 1. Prima Presentazione Investitori
```
1. Usa modalità "Full"
2. Espandi speaker notes per promemoria
3. Naviga con sidebar (desktop) o scroll smooth (mobile)
4. Export PDF per follow-up email
```

### 2. Elevator Pitch Veloce
```
1. Passa a modalità "30 sec"
2. Mostra solo la card Elevator Pitch
3. Copia il testo con il pulsante Copy
```

### 3. Review Interno Team
```
1. Attiva "Modalità Editing"
2. Modifica inline le sezioni
3. Salva versione con il pulsante Save
4. Export JSON per condividere con il team
```

### 4. Q&A Session
```
1. Usa la sidebar per navigare rapidamente
2. Espandi Citations per mostrare fonti
3. Scroll to Top per tornare velocemente all'inizio
```

## 🔧 Customizzazione Rapida

### Cambiare il Brand
Modifica `pitch.data.ts`:
```typescript
brand: {
  name: "Il Tuo Brand",
  tagline: "Il tuo tagline",
  logoUrl: "/path/to/logo.png",
  primaryColor: "#9c55ff"
}
```

### Aggiungere una Nuova Sezione
```typescript
{
  id: "mia-sezione",
  title: "Mia Nuova Sezione",
  bullets: [
    { text: "Punto importante 1" },
    { text: "Punto importante 2", tag: "KPI" }
  ],
  speakerNotes: "Ricorda di enfatizzare...",
  citations: [
    { label: "Fonte", href: "https://..." }
  ]
}
```

### Modificare i KPIs
```typescript
kpis: [
  { label: "MRR", value: "€10K" },
  { label: "Clienti", value: "25" },
  { label: "Churn", value: "< 5%" },
  { label: "NPS", value: "8.5" }
]
```

## 🎨 Styling Tips

### Evidenziare Testi Importanti
```typescript
bullets: [
  { 
    text: "Questo è un punto critico",
    tag: "IMPORTANTE" // Verrà mostrato con badge viola
  }
]
```

### Nascondere Sezioni Temporaneamente
```typescript
{
  id: "sezione",
  title: "...",
  hidden: true, // La sezione non verrà mostrata
  // ...
}
```

## 📱 Mobile Tips

- Usa il toggle hamburger menu per accedere alle azioni
- Scroll verticale è ottimizzato per touch
- Pulsante "Scroll to Top" appare dopo 400px di scroll
- Export PDF funziona anche su mobile via browser print

## 🐛 Troubleshooting

### Il pitch non si carica
```typescript
// Apri console browser (F12) e controlla errori
// Reset dati se corrotti:
localStorage.removeItem('pitchData');
localStorage.removeItem('pitchVersions');
location.reload();
```

### Auto-save non funziona
Verifica che:
- La modalità editing sia attiva
- Il browser abbia permessi per localStorage
- Non sia in modalità incognito (localStorage è limitato)

### Export PDF ha colori strani
- Usa Chrome o Firefox per migliori risultati
- Verifica che "Background graphics" sia abilitato nelle opzioni di stampa
- Gli stili di stampa sono già ottimizzati per PDF

## 🚀 Deployment

### Build di Produzione
```bash
npm run build
npm start
```

### Deploy su Vercel
```bash
vercel --prod
```

La rotta `/pitch` sarà automaticamente disponibile.

## 📞 Support

Per problemi o domande:
- Controlla il README completo in `app/pitch/README.md`
- Verifica la struttura dati in `pitch.data.ts`
- Controlla la console browser per errori

---

**Ready to pitch?** 🎯  
Vai su `/pitch` e inizia a presentare!

