export function sectorsInRequest(name, textarea, selectCultura, selectSensor) {
  return {
    type: "@auth/SECTORS_IN_REQUEST",
    payload: { name, textarea, selectCultura, selectSensor },
  };
}
