# 📸 Setup Foto Team

## Istruzioni per aggiungere le foto del team

### 1. Copia le Immagini

Copia manualmente le tue foto nella cartella giusta:

```bash
# Foto 1: Mattia (quella con sfondo grigio e t-shirt nera)
# Rinomina come: mattia.jpg
# Destinazione: public/team/mattia.jpg

# Foto 2: Fabio Antichi (quella con capelli ricci e sfondo colorato)
# Rinomina come: fabio-antichi.jpg
# Destinazione: public/team/fabio-antichi.jpg
```

### 2. Formato Immagini Consigliato

- **Formato**: JPG o PNG
- **Dimensioni consigliate**: 400x400px (o superiore, mantenendo aspect ratio 1:1)
- **Peso file**: < 200KB per ottimizzazione
- **Aspect ratio**: Quadrato (1:1) per migliore visualizzazione nei cerchi

### 3. Ottimizzazione (Opzionale)

Per ottimizzare le immagini prima dell'upload:

```bash
# Se hai ImageMagick installato:
convert mattia-original.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 85 public/team/mattia.jpg
convert fabio-original.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 85 public/team/fabio-antichi.jpg
```

### 4. Verifica

Dopo aver copiato le immagini, riavvia il dev server:

```bash
npm run dev
```

Vai su `/pitch-short` e controlla la sezione "Team" - dovresti vedere le foto in cerchi con bordo viola.

## 🎨 Design delle Foto

Le foto verranno mostrate:
- In cerchi con bordo viola (#9c55ff)
- Dimensione: 160x160px su desktop, 128x128px su mobile
- Layout: foto a sinistra, info a destra (su desktop)
- Layout: foto sopra, info sotto (su mobile)
- Badge "FOUNDER" / "ADVISOR" sopra il testo

## 📝 Se Non Hai le Foto

Se non hai ancora le foto pronte, il sistema userà automaticamente:
- Un placeholder o
- Le foto esistenti in `public/` se presenti

Il layout si adatta automaticamente con o senza foto!

---

**Nota**: Le foto sono già configurate nel pitch data, devi solo copiarle fisicamente nella cartella!

