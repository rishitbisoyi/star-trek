# StarTrek API Documentation

## Overview

StarTrek uses a combination of external APIs and internal API routes to provide real-time space and astronomy information.

All API routes are implemented using Next.js Route Handlers.

---

# Internal API Routes

---

## ISS Endpoint

### Route

```http
GET /api/iss
```

### Purpose

Returns the current position and telemetry data for the International Space Station.

### Response Example

```json
{
  "name": "iss",
  "id": 25544,
  "latitude": 12.34,
  "longitude": 45.67,
  "altitude": 420,
  "velocity": 27600,
  "visibility": "daylight",
  "timestamp": 1710000000
}
```

### Used By

* ISS Tracker
* Dashboard Preview

---

## Crew Endpoint

### Route

```http
GET /api/crew
```

### Purpose

Returns information about the current ISS crew.

### Used By

* CrewCard
* ISS Tracker

---

## Constellations Endpoint

### Route

```http
GET /api/constellations
```

### Purpose

Returns constellation dataset information.

### Data Source

Local JSON dataset.

### Used By

* Constellation Explorer
* Featured Constellation

---

## Events Endpoint

### Route

```http
GET /api/events
```

### Purpose

Returns celestial event records.

### Event Types

* Solar Eclipse
* Lunar Eclipse
* Meteor Shower
* Planetary Conjunction
* Astronomical Events

### Used By

* Event Calendar
* Event Cards
* Dashboard Alerts

---

# External Services

---

## WhereTheISS.at API

### Purpose

Provides real-time ISS telemetry.

### Endpoint

```http
https://api.wheretheiss.at/v1/satellites/25544
```

### Data Used

* Latitude
* Longitude
* Altitude
* Velocity
* Visibility
* Timestamp

### Module

ISS Tracker

---

## Open-Meteo API

### Purpose

Provides weather information for astronomy observations.

### Data Used

* Cloud Coverage
* Visibility Conditions
* Atmospheric Information

### Module

Night Sky Command Center

---

## Geocoding Service

### Purpose

Converts city names into geographic coordinates.

### Data Used

* Latitude
* Longitude
* Location Information

### Module

Night Sky Command Center

---

# Local Datasets

---

## Constellation Dataset

### File

```text
data/constellations.json
```

### Contains

* Name
* Brightest Star
* Hemisphere
* Season
* Description
* Mythology
* Viewing Information

---

## Events Dataset

### File

```text
data/events.json
```

### Contains

* Event Title
* Date
* Description
* Event Type

---

# Custom Hooks

---

## useISS()

Fetches and manages ISS telemetry.

Used By:

* ISS Dashboard
* ISS Map
* Orbit Statistics

---

## useCrew()

Fetches ISS crew information.

Used By:

* CrewCard

---

## useSky()

Handles Night Sky data retrieval and processing.

Used By:

* Night Sky Command Center

---

## useEvents()

Provides celestial event data management.

Used By:

* Event Calendar
* Event Listings

---

# Error Handling

All API routes implement error handling and fallback mechanisms to ensure graceful degradation during external service outages.

Strategies include:

* Try/catch handling
* API fallbacks
* Cached responses
* Safe default values

---

# Performance Considerations

* Type-safe API responses
* Modular route architecture
* Component-level data fetching
* Lightweight JSON datasets
* Optimized Next.js production builds

---

Version: 1.0
