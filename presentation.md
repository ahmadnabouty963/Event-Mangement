# Präsentation: EventBoard

Hallo, ich präsentiere heute mein React-Projekt **EventBoard**.

EventBoard ist eine kleine Event-Management-App.
Mit dieser App kann man Events erstellen, anzeigen, bearbeiten, löschen und Teilnehmer verwalten.

## 1. Projektidee

Die Idee von EventBoard ist, Events wie Workshops, Talks oder Meetups übersichtlich zu organisieren.

Ein Event hat verschiedene Informationen:

- Titel
- Beschreibung
- Datum
- Uhrzeit
- Ort
- Kategorie
- Status
- maximale Teilnehmerzahl
- Teilnehmerliste

Der Benutzer kann auf der Events-Seite alle Events sehen, nach Events suchen, filtern und sortieren.

## 2. Technologien

Für dieses Projekt habe ich mehrere Technologien benutzt:

- **React** für die Benutzeroberfläche
- **TypeScript** für Typensicherheit
- **Vite** als Entwicklungsumgebung
- **TanStack Router** für File-based Routing
- **localStorage** zum Speichern der Daten im Browser
- **Tailwind CSS und DaisyUI** für das Styling

## 3. Seitenstruktur

Die App hat mehrere Seiten.

Die Startseite ist das **Dashboard**.
Dort sieht man wichtige Informationen, zum Beispiel:

- Anzahl aller Events
- veröffentlichte Events
- Entwürfe
- abgesagte Events
- abgeschlossene Events
- gesamte Teilnehmerzahl
- durchschnittliche Auslastung
- nächste Events

Die Seite **Events** zeigt alle Events als Karten an.
Dort gibt es Suche, Filter und Sortierung.

Die **Detailseite** zeigt ein einzelnes Event mit allen Informationen.
Dort kann man auch Teilnehmer hinzufügen oder entfernen.

Die **Create-Seite** erstellt ein neues Event.

Die **Edit-Seite** bearbeitet ein bestehendes Event.

Die **Calendar-Seite** zeigt alle Events nach Datum gruppiert.

Die **About-Seite** erklärt kurz das Projekt und die verwendeten Technologien.

## 4. Wichtige Komponenten

Ich habe mehrere wiederverwendbare Komponenten gebaut.

Zum Beispiel:

**EventCard** zeigt ein Event als Karte an.

**EventForm** wird für Create und Edit benutzt.
Das ist wichtig, weil ich dadurch nicht zweimal fast den gleichen Formular-Code schreiben muss.

**OccupancyBar** zeigt an, wie voll ein Event ist.
Zum Beispiel: 5 von 10 Teilnehmern bedeutet 50 Prozent.

**StatusBadge** zeigt den Status eines Events an, zum Beispiel draft, published, cancelled oder completed.

**AttendeeForm** fügt neue Teilnehmer hinzu.

**AttendeeList** zeigt die Teilnehmerliste und kann Teilnehmer entfernen.

## 5. State Management und localStorage

Die Event-Daten werden zentral im Custom Hook **useEvents** verwaltet.

Dort gibt es Funktionen wie:

- addEvent
- updateEvent
- deleteEvent
- addAttendee
- removeAttendee

Die Daten werden im **localStorage** gespeichert.
Das bedeutet: Wenn ich die Seite neu lade, bleiben die Events trotzdem erhalten.

## 6. Routing

Für das Routing benutze ich **TanStack Router**.

Meine wichtigsten Routen sind:

- `/` für das Dashboard
- `/events` für die Event-Übersicht
- `/events/$eventId` für die Detailseite
- `/events/new` zum Erstellen
- `/events/edit/$eventId` zum Bearbeiten
- `/calendar` für die Kalenderübersicht
- `/about` für die Projektbeschreibung

## 7. Was ich gelernt habe

In diesem Projekt habe ich gelernt, wie man eine React-App strukturiert.

Ich habe gelernt:

- Komponenten zu erstellen
- Props zu benutzen
- State mit useState zu verwalten
- Listen mit map anzuzeigen
- Daten mit filter und sort zu bearbeiten
- Formulare zu bauen
- dynamische Routen zu benutzen
- Daten in localStorage zu speichern
- wiederverwendbare Komponenten zu erstellen
- Code in Helper-Funktionen auszulagern

## 8. Schwierigkeiten

Eine Schwierigkeit war das Routing mit dynamischen Seiten.
Zum Beispiel musste ich verstehen, wie `/events/$eventId` funktioniert und wie ich die richtige Event-ID aus der URL lese.

Eine andere Schwierigkeit war die Edit-Seite.
Ich musste darauf achten, dass sie als eigene Seite geöffnet wird und nicht unter der Detailseite erscheint.

## 9. Fazit

EventBoard ist eine kleine, aber vollständige React-App.
Sie enthält viele typische Funktionen echter Webanwendungen:

- Routing
- CRUD-Funktionen
- Formulare
- Filter
- Sortierung
- localStorage
- Komponentenstruktur
- Teilnehmerverwaltung
- Kalenderübersicht

Mein Ziel war nicht nur, dass die App funktioniert, sondern auch, dass ich den Code erklären kann.
