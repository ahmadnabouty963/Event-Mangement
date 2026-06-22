# EventBoard – Projekt Erklärung und Arbeitsplan

## 1. Projektidee

Mein Projekt heißt **EventBoard**.

Es ist eine React-App, mit der man Events verwalten kann.

Der Benutzer kann:

- alle Events sehen
- Events suchen
- Events nach Kategorie filtern
- Events nach Status filtern
- Events sortieren
- Details von einem Event öffnen
- ein neues Event erstellen
- ein Event bearbeiten
- ein Event löschen
- später Teilnehmer verwalten
- später eine Kalenderansicht sehen

Das Projekt ist ein **CRUD-Projekt**.

CRUD bedeutet:

```txt
Create = erstellen
Read   = anzeigen / lesen
Update = bearbeiten
Delete = löschen
```

---

## 2. Ziel des Projekts

Das Ziel ist, eine kleine Event-Management-App zu bauen.

Die App soll technisch funktionieren und gleichzeitig professionell aussehen.

Sie soll nicht wie ein buntes KI-Dashboard aussehen, sondern eher wie ein echtes internes Verwaltungstool für Events.

Am Ende möchte ich zeigen können:

- wie die App aufgebaut ist
- wie Routing funktioniert
- wie Events angezeigt werden
- wie Events erstellt, bearbeitet und gelöscht werden
- wie Daten im Browser gespeichert bleiben
- wie Suche, Filter und Sortierung funktionieren
- wie das Design bewusst verbessert wurde

---

## 3. Verwendete Technologien

Für dieses Projekt benutze ich:

```txt
React
TypeScript
Vite
TanStack Router
Tailwind CSS
DaisyUI
localStorage
```

### Warum React?

React hilft mir, die Benutzeroberfläche in kleine Komponenten zu teilen.

Beispiele:

```txt
EventCard
EventForm
OccupancyBar
AttendeeForm
AttendeeList
```

### Warum TypeScript?

TypeScript hilft mir, Fehler früher zu finden.

Ich kann zum Beispiel genau definieren, wie ein Event aussehen muss.  
Wenn ich eine falsche Property verwende, zeigt TypeScript einen Fehler.

### Warum TanStack Router?

Ich benutze TanStack Router, damit meine App mehrere Seiten haben kann.

Beispiele:

```txt
/
 /events
 /events/new
 /events/$eventId
 /events/$eventId/edit
 /calendar
 /about
```

### Warum Tailwind CSS und DaisyUI?

Tailwind CSS hilft mir, Layout und Abstände schnell zu stylen.

DaisyUI gibt mir fertige UI-Bausteine wie:

```txt
Buttons
Cards
Badges
Inputs
Alerts
Progress Bars
Menus
Stats
```

### Warum localStorage?

Ich benutze `localStorage`, damit die Events im Browser gespeichert bleiben.

Wenn ich ein Event erstelle, bearbeite oder lösche, bleibt die Änderung auch nach einem Refresh erhalten.

---

## 4. Design-Ziel

Der alte Look soll überarbeitet werden.

Die App soll nicht aussehen wie:

```txt
AI-Dashboard
Startup-Landingpage
zu buntes Template
zu viele Verläufe
zu viele große runde Cards
zu starke Schatten
```

Die App soll eher wirken wie:

```txt
professionelles Admin-Tool
Event Office Software
ruhiges Backoffice
interne Verwaltungs-App
seriöse Event-Übersicht
```

Der neue Stil heißt:

```txt
Professional Event Office Style
```

---

## 5. Design-Regeln

### Nicht verwenden

- keine starken Blau-Lila-Farben
- keine Neonfarben
- keine großen Gradient-Hero-Bereiche
- keine übertriebenen Schatten
- nicht überall `rounded-3xl`
- keine Emojis in Navigation oder Cards
- keine unnötigen Icons
- keine Marketing-Texte wie auf einer Landingpage

### Stattdessen verwenden

- dunkle Sidebar
- heller Arbeitsbereich
- weiße Cards
- dünne Borders
- kleine Rundungen
- wenig Schatten
- ruhige Status-Badges
- klare Typografie
- kompakte Informationen
- professionelle Formulare

---

## 6. Neues Farbsystem

Die App soll ruhige, professionelle Farben bekommen.

```txt
Background:      #F4F5F2
Surface:         #FFFFFF
Surface 2:       #E9ECE7
Border:          #D8DDD4

Text Main:       #1F2933
Text Muted:      #6B7280

Primary:         #1E3A34
Primary Hover:   #162C27

Accent:          #8A6A3F
Accent Light:    #EFE6D6

Success:         #2F6B4F
Warning:         #A16207
Error:           #9F3A38

Sidebar:         #17211E
Sidebar Text:    #E8ECE7
```

### Warum diese Farben?

Diese Farben wirken professioneller und ruhiger.

Das dunkle Grün passt gut zu einer Verwaltungs-App.  
Die helle Arbeitsfläche bleibt sauber und gut lesbar.  
Die Akzentfarbe wirkt warm, aber nicht zu auffällig.

---

## 7. Schriftart

Die App soll eine professionelle Schriftart bekommen.

Geplant:

```txt
Source Sans 3
```

Warum?

- sehr gut lesbar
- ruhig und sachlich
- weniger künstlich
- passend für Admin-Oberflächen
- nicht zu verspielt

Alternative:

```txt
IBM Plex Sans
```

---

## 8. Layout-Idee

Die App soll wie ein kleines Backoffice aufgebaut sein.

### Desktop

```txt
Links: dunkle Sidebar
Oben: ruhige Topbar
Rechts: heller Content-Bereich
```

### Mobile

```txt
Topbar
Drawer-Menü
Content darunter
```

### Navigation

Die Navigation bleibt einfach:

```txt
Dashboard
Events
Calendar
About
```

---

## 9. Seitenstruktur

Die App soll diese Seiten haben:

```txt
/
├── Dashboard

/events
├── Event-Übersicht

/events/new
├── Neues Event erstellen

/events/$eventId
├── Event-Detailseite

/events/$eventId/edit
├── Event bearbeiten

/calendar
├── Kalenderübersicht

/about
├── Über die App
```

---

## 10. Ordnerstruktur

Die App ist ungefähr so aufgebaut:

```txt
src
│
├── components
│   │
│   └── events
│       ├── EventCard.tsx
│       ├── EventForm.tsx
│       ├── OccupancyBar.tsx
│       ├── AttendeeForm.tsx
│       └── AttendeeList.tsx
│
├── data
│   └── initialEvents.ts
│
├── hooks
│   └── useEvents.ts
│
├── routes
│   ├── __root.tsx
│   ├── index.tsx
│   ├── about.tsx
│   ├── calendar.tsx
│   │
│   └── events
│       ├── index.tsx
│       ├── new.tsx
│       ├── $eventId.tsx
│       └── $eventId.edit.tsx
│
├── types
│   └── event.ts
│
├── App.tsx
├── main.tsx
├── index.css
└── routeTree.gen.ts
```

Später können zusätzliche Ordner dazukommen:

```txt
src/utils
src/components/layout
```

---

## 11. Datenmodell

Ein Event hat diese Struktur:

```ts
export type EventStatus = "draft" | "published" | "cancelled" | "completed";

export type EventCategory =
  | "workshop"
  | "talk"
  | "networking"
  | "review"
  | "other";

export type Attendee = {
  id: string;
  name: string;
  email: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  status: EventStatus;
  maxAttendees: number;
  attendees: Attendee[];
  createdAt: string;
};
```

---

## 12. Projektplan und Fortschritt

Ich benutze diese Zeichen:

```txt
[x] = erledigt
[ ] = noch offen
```

---

## 12.1 Phase 1: Grundsetup

- [x] React-Projekt mit Vite erstellt
- [x] TypeScript verwendet
- [x] TanStack Router installiert
- [x] TanStack Router Plugin eingerichtet
- [x] Tailwind CSS / DaisyUI installiert
- [x] App gestartet
- [x] `routeTree.gen.ts` wird automatisch erzeugt
- [x] `App.tsx` mit `RouterProvider` verbunden

Ziel:

Die App soll starten und mehrere Seiten anzeigen können.

---

## 12.2 Phase 2: Routing und Grundlayout

- [x] `src/routes/__root.tsx` erstellt
- [x] Root Layout erstellt
- [x] Navigation erstellt
- [x] Links zu Dashboard, Events, Calendar und About erstellt
- [x] `Outlet` eingebaut
- [x] Startseite `/` erstellt
- [x] Events-Seite `/events` erstellt
- [x] About-Seite `/about` vorbereitet
- [x] Calendar-Seite `/calendar` vorbereitet
- [ ] Layout im Professional Event Office Style neu gestalten
- [ ] dunkle Sidebar bauen
- [ ] Topbar bauen

Wichtige Datei:

```txt
src/routes/__root.tsx
```

Erklärung:

Das Root Layout ist der Rahmen der App.  
Dort befindet sich die Navigation.  
Das `Outlet` zeigt die aktuelle Seite an.

---

## 12.3 Phase 3: Datenmodell und Demo-Daten

- [x] Ordner `src/types` erstellt
- [x] Datei `src/types/event.ts` erstellt
- [x] Type `Attendee` erstellt
- [x] Type `Event` erstellt
- [x] Ordner `src/data` erstellt
- [x] Datei `src/data/initialEvents.ts` erstellt
- [x] Demo-Daten erstellt
- [x] Status-Werte erweitert
- [x] Category-Werte erweitert

Wichtige Dateien:

```txt
src/types/event.ts
src/data/initialEvents.ts
```

---

## 12.4 Phase 4: Event-Übersicht

- [x] Route `/events` erstellt
- [x] Komponente `EventCard` erstellt
- [x] Events mit `.map()` angezeigt
- [x] Jede Event Card zeigt wichtige Informationen
- [x] Jede Event Card verlinkt zur Detailseite
- [x] Grid Layout für mehrere Event Cards erstellt
- [ ] Event Cards professioneller stylen
- [ ] Occupancy Bar in Event Cards einbauen
- [ ] Edit-Link in Event Cards ergänzen

Wichtige Dateien:

```txt
src/routes/events/index.tsx
src/components/events/EventCard.tsx
```

---

## 12.5 Phase 5: Event-Detailseite

- [x] Dynamische Route `/events/$eventId` erstellt
- [x] Datei `src/routes/events/$eventId.tsx` erstellt
- [x] `eventId` aus der URL gelesen
- [x] Passendes Event mit `.find()` gesucht
- [x] Event Details angezeigt
- [x] Teilnehmerliste angezeigt
- [x] Fehlermeldung für ungültige Event-ID erstellt
- [x] Zurück-Link zur Event-Übersicht erstellt
- [x] Edit Button erstellt
- [x] Delete Button erstellt
- [ ] Detailseite wie Management-Seite stylen
- [ ] Occupancy Section einbauen
- [ ] Teilnehmerverwaltung einbauen

Wichtige Datei:

```txt
src/routes/events/$eventId.tsx
```

---

## 12.6 Phase 6: Suche, Filter und Sortierung

- [x] Suchfeld erstellt
- [x] Suche nach Titel eingebaut
- [x] Suche nach Beschreibung eingebaut
- [x] Suche nach Ort eingebaut
- [x] Filter nach Kategorie erstellt
- [x] Filter nach Status erstellt
- [x] Sortierung nach Datum erstellt
- [x] Sortierung nach Titel erstellt
- [x] Sortierung nach Teilnehmerzahl erstellt
- [x] Reset-Button für Filter vorbereitet
- [x] Filter-Optionen an das Datenmodell angepasst
- [ ] Filter Bar kompakter und professioneller stylen

Wichtige Datei:

```txt
src/routes/events/index.tsx
```

Verwendete React Hooks:

```txt
useState
useMemo
```

`useState` speichert die aktuellen Eingaben des Benutzers.

Beispiele:

```txt
search
category
status
sortBy
```

`useMemo` berechnet die gefilterte und sortierte Event-Liste.

---

## 12.7 Phase 7: Zentrales State Management

- [x] Ordner `src/hooks` erstellt
- [x] Datei `src/hooks/useEvents.ts` erstellt
- [x] Events zentral verwaltet
- [x] Events aus `localStorage` gelesen
- [x] Demo-Daten verwendet, wenn noch nichts gespeichert ist
- [x] Events in `localStorage` gespeichert
- [x] Funktion `addEvent` erstellt
- [x] Funktion `updateEvent` erstellt
- [x] Funktion `deleteEvent` erstellt
- [ ] Funktion `addAttendee` ergänzen
- [ ] Funktion `removeAttendee` ergänzen
- [ ] Funktion `resetEvents` optional ergänzen

Wichtige Datei:

```txt
src/hooks/useEvents.ts
```

Erklärung:

`useEvents` ist ein Custom Hook.  
Er ist für die Event-Daten verantwortlich.

Die Seiten sollen nicht direkt mit `localStorage` arbeiten.  
Sie benutzen stattdessen den Hook.

---

## 12.8 Phase 8: localStorage

- [x] Storage Key erstellt
- [x] Events beim ersten Laden aus Demo-Daten geladen
- [x] Events danach aus `localStorage` gelesen
- [x] Neue Events gespeichert
- [x] Bearbeitete Events gespeichert
- [x] Gelöschte Events gespeichert
- [x] Änderungen bleiben nach Reload erhalten
- [ ] Optional: Button zum Zurücksetzen auf Demo-Daten erstellen

Wichtige Datei:

```txt
src/hooks/useEvents.ts
```

---

## 12.9 Phase 9: Event erstellen

- [x] Route `/events/new` erstellt
- [x] Datei `src/routes/events/new.tsx` erstellt
- [x] Komponente `EventForm` erstellt
- [x] Formularfelder erstellt
- [x] Neues Event kann über das Formular erstellt werden
- [x] Neues Event wird gespeichert
- [x] Nach dem Erstellen wird zurück zur Events-Seite navigiert
- [ ] Nach dem Erstellen optional direkt zur Detailseite navigieren
- [ ] Bessere Validierung einbauen
- [ ] Fehlernachrichten unter den Feldern anzeigen
- [ ] Formular professioneller stylen

Wichtige Dateien:

```txt
src/routes/events/new.tsx
src/components/events/EventForm.tsx
```

---

## 12.10 Phase 10: Event bearbeiten

- [x] Route `/events/$eventId/edit` erstellt
- [x] Datei `src/routes/events/$eventId.edit.tsx` erstellt
- [x] Event anhand der ID gesucht
- [x] Formular mit vorhandenen Daten vorausgefüllt
- [x] Event kann geändert werden
- [x] Änderungen werden gespeichert
- [x] Nach dem Speichern wird zur Detailseite navigiert
- [x] Ungültige Event-ID wird abgefangen

Wichtige Datei:

```txt
src/routes/events/$eventId.edit.tsx
```

---

## 12.11 Phase 11: Event löschen

- [x] Funktion `deleteEvent` in `useEvents.ts` erstellt
- [x] Löschen funktioniert über Event-ID
- [x] `filter()` wird zum Entfernen benutzt
- [x] Delete Button auf der Detailseite eingebaut
- [x] Sicherheitsabfrage mit `window.confirm()` eingebaut
- [x] Nach dem Löschen zur Events-Seite navigieren
- [x] Prüfen, ob gelöschte Events nach Reload weg bleiben

Wichtige Dateien:

```txt
src/hooks/useEvents.ts
src/routes/events/$eventId.tsx
```

Erklärung:

Zum Löschen wird eine neue Event-Liste erstellt.  
Alle Events bleiben erhalten, außer das Event mit der passenden ID.

---

## 12.12 Phase 12: Design-System einbauen

- [ ] eigenes DaisyUI Theme erstellen
- [ ] Professional Event Office Farben eintragen
- [ ] Theme aktivieren
- [ ] neue Schriftart einbauen
- [ ] `index.css` anpassen
- [ ] Body-Hintergrund ändern
- [ ] App im Browser prüfen

Wichtige Dateien:

```txt
tailwind.config.ts oder tailwind.config.js
src/index.css
index.html
```

Ziel:

Die App bekommt einen eigenen professionellen Look und sieht weniger nach Standard-Template aus.

---

## 12.13 Phase 13: Dashboard

- [ ] Dashboard mit echten Daten bauen
- [ ] Anzahl aller Events anzeigen
- [ ] Anzahl veröffentlichter Events anzeigen
- [ ] Anzahl Entwürfe anzeigen
- [ ] Anzahl abgesagter Events anzeigen
- [ ] Anzahl abgeschlossener Events anzeigen
- [ ] gesamte Teilnehmerzahl anzeigen
- [ ] nächstes Event anzeigen
- [ ] durchschnittliche Auslastung anzeigen
- [ ] nächste 3 Events anzeigen
- [ ] Dashboard wie internes Admin-Tool stylen

Wichtige Datei:

```txt
src/routes/index.tsx
```

Geplante Struktur:

```txt
Page Header
Statistik-Karten
Next Event
Upcoming Events
```

---

## 12.14 Phase 14: Occupancy Bar

- [ ] Komponente `OccupancyBar` erstellen
- [ ] Auslastung berechnen
- [ ] Teilnehmerzahl anzeigen
- [ ] maximale Teilnehmerzahl anzeigen
- [ ] Prozentwert anzeigen
- [ ] Progress Bar anzeigen
- [ ] Komponente in `EventCard` benutzen
- [ ] Komponente in der Detailseite benutzen

Wichtige Datei:

```txt
src/components/events/OccupancyBar.tsx
```

Berechnung:

```ts
const occupancy = (attendees.length / maxAttendees) * 100;
```

Beispiel:

```txt
8 / 16 Teilnehmer
50%
```

---

## 12.15 Phase 15: Teilnehmerverwaltung

- [ ] Formular zum Hinzufügen von Teilnehmern erstellen
- [ ] Feld für Name erstellen
- [ ] Feld für E-Mail erstellen
- [ ] Teilnehmer zu einem Event hinzufügen
- [ ] Teilnehmerliste anzeigen
- [ ] Teilnehmer entfernen
- [ ] Prüfen, ob das Event voll ist
- [ ] Fehlermeldung anzeigen, wenn Event voll ist
- [ ] Änderungen in `localStorage` speichern

Wichtige Dateien geplant:

```txt
src/components/events/AttendeeForm.tsx
src/components/events/AttendeeList.tsx
src/routes/events/$eventId.tsx
src/hooks/useEvents.ts
```

---

## 12.16 Phase 16: Kalenderseite

- [ ] Route `/calendar` fertigstellen
- [ ] Events nach Datum gruppieren
- [ ] Datum als Überschrift anzeigen
- [ ] Events unter dem passenden Datum anzeigen
- [ ] Uhrzeit anzeigen
- [ ] Titel anzeigen
- [ ] Status anzeigen
- [ ] Link zur Detailseite einbauen
- [ ] Optional: nur veröffentlichte Events anzeigen
- [ ] Optional: vergangene Events markieren

Wichtige Datei:

```txt
src/routes/calendar.tsx
```

---

## 12.17 Phase 17: UI-Zustände und UX

- [ ] Empty State anzeigen, wenn keine Events vorhanden sind
- [ ] Empty State anzeigen, wenn keine Events zu den Filtern passen
- [ ] Fehlermeldung anzeigen, wenn Event nicht gefunden wird
- [ ] Hinweis anzeigen, wenn Event voll ist
- [ ] Buttons klar beschriften
- [ ] Responsive Layout verbessern
- [ ] ungenutzte Imports entfernen
- [ ] `console.log()` entfernen
- [ ] Optional: Toast Notifications einbauen

---

## 12.18 Phase 18: Refactoring

- [ ] große Komponenten aufteilen
- [ ] wiederholte Logik auslagern
- [ ] Helper-Funktionen erstellen
- [ ] Typen sauber halten
- [ ] Dateinamen prüfen
- [ ] Imports aufräumen
- [ ] Komponenten klar benennen
- [ ] Code formatieren
- [ ] App komplett testen

Mögliche Helper-Dateien:

```txt
src/utils/dateHelpers.ts
src/utils/eventHelpers.ts
```

---

## 12.19 Phase 19: Präsentation vorbereiten

- [ ] Projektidee erklären
- [ ] Technologien erklären
- [ ] Ordnerstruktur erklären
- [ ] Routing erklären
- [ ] Event Type erklären
- [ ] EventCard erklären
- [ ] EventForm erklären
- [ ] useEvents erklären
- [ ] localStorage erklären
- [ ] Create demonstrieren
- [ ] Edit demonstrieren
- [ ] Delete demonstrieren
- [ ] Dashboard erklären
- [ ] OccupancyBar erklären
- [ ] Teilnehmerverwaltung erklären
- [ ] Kalender erklären
- [ ] Design-Entscheidungen erklären
- [ ] Schwierigkeiten nennen
- [ ] Verbesserungen nennen

Präsentationsdauer:

```txt
3 bis 5 Minuten
```

---

## 13. Mindestziel

Wenn nicht alles fertig wird, müssen diese Punkte funktionieren:

- [x] Routing funktioniert
- [x] Events werden angezeigt
- [x] Event-Detailseiten funktionieren
- [x] Suche funktioniert
- [x] Filter funktionieren
- [x] Sortierung funktioniert
- [x] Events können erstellt werden
- [x] Events bleiben nach Reload erhalten
- [x] Events können bearbeitet werden
- [x] Events können gelöscht werden
- [ ] eigenes Design-System ist eingebaut
- [ ] Dashboard zeigt echte Daten
- [ ] App kann präsentiert werden

---

## 14. Starkes Ziel

Für eine starke Abgabe sollen zusätzlich diese Punkte funktionieren:

- [ ] eigenes DaisyUI Theme
- [ ] neue Schriftart
- [ ] dunkle Sidebar
- [ ] helles Admin-Layout
- [ ] Dashboard sieht wie ein Verwaltungstool aus
- [ ] Event Cards sehen professionell aus
- [ ] Occupancy Bar funktioniert
- [ ] Teilnehmer können hinzugefügt werden
- [ ] Teilnehmer können entfernt werden
- [ ] volle Events werden verhindert
- [ ] Kalender funktioniert
- [ ] UI-Zustände sind sauber
- [ ] Code ist aufgeräumt

---

## 15. Was ich in der Präsentation sagen kann

Ich kann mein Projekt so erklären:

```txt
EventBoard ist eine kleine React-App zur Verwaltung von Events.

Ich habe React und TypeScript benutzt, weil ich die App in Komponenten aufteilen und Fehler früh erkennen möchte.

Mit TanStack Router habe ich mehrere Seiten gebaut.

Die Events werden über einen eigenen Hook verwaltet und im localStorage gespeichert.

Dadurch bleiben erstellte, bearbeitete und gelöschte Events auch nach einem Refresh erhalten.

Ich habe außerdem Suche, Filter, Sortierung, Create, Edit und Delete eingebaut.

Danach habe ich das Design überarbeitet, weil ich nicht wollte, dass die App wie ein generisches KI-Dashboard aussieht.

Ich habe mich für einen Professional Event Office Style entschieden: dunkle Sidebar, heller Arbeitsbereich, ruhige Farben, dünne Borders und weniger Effekte.
```

---

## 16. Persönlicher Lernplan

Ich möchte nicht nur Code schreiben, sondern auch verstehen, was ich gebaut habe.

Nach jeder Phase will ich diese Fragen beantworten können:

```txt
Was macht diese Datei?
Warum brauche ich diese Komponente?
Woher kommen die Daten?
Was passiert beim Klick auf den Button?
Wie wird die Route geladen?
Wie wird localStorage benutzt?
Warum zeigt TypeScript hier einen Fehler?
Warum habe ich dieses Styling gewählt?
```

Mein Ziel ist, das Projekt am Ende nicht nur zu zeigen, sondern auch erklären zu können.

---

## 17. Nächste Schritte

Die nächsten Schritte sind:

```txt
1. App starten und Fehler prüfen
2. eigenes DaisyUI Theme einbauen
3. index.css anpassen
4. neue Schriftart einbauen
5. Root Layout mit dunkler Sidebar neu stylen
6. Dashboard mit echten Daten bauen
7. Event Cards professioneller stylen
8. Detailseite neu stylen
9. OccupancyBar bauen
10. Teilnehmerverwaltung bauen
11. Kalenderseite bauen
12. Präsentation vorbereiten
```

---

## 18. Arbeitsregel

Ab jetzt arbeite ich in kleinen Schritten:

```txt
ein Schritt
testen
verstehen
dokumentieren
weiter
```

Nicht alles gleichzeitig ändern.
