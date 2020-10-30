export function cultureInRequest(
  nome,
  tamanho_da_area,
  epoca_da_colheita,
  tratos_culturais,
  manejo
) {
  return {
    type: "@auth/CULTURE_IN_REQUEST",
    payload: {
      nome,
      tamanho_da_area,
      epoca_da_colheita,
      tratos_culturais,
      manejo,
    },
  };
}
