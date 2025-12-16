"use client"
import L from "leaflet"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

// Fix for default marker icon
// We need to delete the default icon options to ensure our custom one works or the default one loads correctly
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

export const Map = () => {
  // Coordinates for the area shown in the screenshot (Lviv, near Arena Lviv)
  const position: [number, number] = [49.78, 24.01]

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%", zIndex: "10" }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" className="z-20" />
        <Marker position={position}>
          <Popup>
            вул. Українська, 23 <br /> м. Одеса
          </Popup>
        </Marker>
      </MapContainer>
    </>
  )
}