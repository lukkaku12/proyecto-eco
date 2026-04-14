function looksLikeMojibake(value) {
  return typeof value === "string" && /(?:Ã.|Â.|â.|�)/.test(value);
}

function fixMojibakeString(value) {
  if (!looksLikeMojibake(value)) {
    return value;
  }

  const converted = Buffer.from(value, "latin1").toString("utf8");
  return converted.includes("�") ? value : converted;
}

function normalizeEncoding(payload) {
  if (Array.isArray(payload)) {
    return payload.map(normalizeEncoding);
  }

  if (payload && typeof payload === "object") {
    const normalized = {};
    Object.entries(payload).forEach(([key, value]) => {
      normalized[key] = normalizeEncoding(value);
    });
    return normalized;
  }

  if (typeof payload === "string") {
    return fixMojibakeString(payload);
  }

  return payload;
}

module.exports = {
  normalizeEncoding,
};
