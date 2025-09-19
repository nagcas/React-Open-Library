# 📚 React Open Library - Recent Changes

Benvenuto in **React Open Library**, una web app che mostra in tempo reale le modifiche più recenti alla piattaforma [Open Library](https://openlibrary.org/).

---

## 🚀 Tecnologie utilizzate

- **React** (Vite)
- **Hooks** (`useState`, `useEffect`)
- **Fetch API**
- **Custom Hook** (`useGetChanges`)
- **timeago.js** (per la formattazione "tempo fa")
- **CSS**

---

## 📦 Funzionalità principali

- ✅ Recupera gli ultimi cambiamenti da Open Library.
- ✅ Aggiorna automaticamente i dati ogni 10 secondi.
- ✅ Visualizza chi ha fatto una modifica, quando l'ha fatta, e una breve descrizione.
- ✅ Mostra l'orario corretto in **fuso italiano** (+2 ore).
- ✅ Stato di caricamento (`loading`) gestito.

---

## 📂 Struttura delle cartelle

```
/src
  ├── /components
  │     ├── /home
  │     │     └── Home.jsx
  │     ├── Heading.jsx
  │     └── Row.jsx
  ├── /hooks
  │     └── useGetChanges.js
  ├── App.jsx
  ├── App.css
  └── main.jsx
```
---

## ⚙️ Come avviare il progetto

1. **Clona** il repository:

```bash
git clone https://github.com/tuo-username/react-open-library.git
```

2. **Installa** le dipendenze:

```bash
npm install
```

3. **Avvia** l'app:

```bash
npm run dev
```

---

## 🧠 Cosa fa il custom hook `useGetChanges`

- Effettua una `fetch` all'endpoint di Open Library.
- Aggiusta il timestamp aggiungendo +2 ore (fuso orario italiano).
- Formatta il tempo usando **timeago.js**.
- Aggiorna i dati automaticamente ogni 10 secondi.
- Restituisce i dati formattati e lo stato di caricamento.

---

## 📌 Note

- L'API di Open Library è **pubblica**, non richiede chiavi di autenticazione.
- I dati vengono aggiornati in **tempo reale** con un intervallo regolare.
- È stato registrato il linguaggio **italiano** in `timeago.js` per avere date più leggibili.

---

## 👨‍💻 Autore

- [Gianluca Chiaravalloti](https://github.com/nagcas)

---

## 📜 Licenza

Questo progetto è open-source e disponibile sotto la [MIT License](LICENSE).
