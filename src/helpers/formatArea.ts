function formatArea(area?: number): string {
  if (area === undefined || area === null) {
    return "Unknown";
  }
  return `${area.toLocaleString()} km²`;
}

export default formatArea;
