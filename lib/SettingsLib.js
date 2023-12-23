function getSettings() {
  if (typeof window === 'undefined')
    return;

  return JSON.parse(
    localStorage.getItem("tcf_settings") || '{ "v": 1, "theme": "dark", "language": "en", "blur": true, "tracking": true, "ads": true }'
  )
}

function setSettings(setting, value) {
  const oldSettings = getSettings();

  oldSettings[setting] = value;

  localStorage.setItem("tcf_settings", JSON.stringify(oldSettings))
}

module.exports = {
  getSettings,
  setSettings
}