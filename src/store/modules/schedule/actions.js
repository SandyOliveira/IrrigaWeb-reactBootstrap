export function scheduleInRequest(
  setor,
  dias_da_semana,
  data_inicio,
  data_fim,
  hora_inicio,
  hora_fim
) {
  return {
    type: "@auth/SCHEDULE_IN_REQUEST",
    payload: {
      setor,
      dias_da_semana,
      data_inicio,
      data_fim,
      hora_inicio,
      hora_fim,
    },
  };
}
