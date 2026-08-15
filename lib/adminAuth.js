// Checagem de autorizacao simples para as rotas de manutencao/debug da API
// (nao expostas ao usuario final). Compara um segredo enviado pelo chamador
// via header "Authorization: Bearer <segredo>" com a variavel de ambiente
// ADMIN_API_SECRET, que so existe no servidor (nunca prefixada com
// NEXT_PUBLIC_, entao nunca vai parar no bundle do navegador).
export function possuiSegredoAdminValido(request) {
  const segredoConfigurado = process.env.ADMIN_API_SECRET

  if (!segredoConfigurado) {
    return false
  }

  const cabecalhoAuth = request.headers.get('authorization') || ''
  const segredoRecebido = cabecalhoAuth.startsWith('Bearer ')
    ? cabecalhoAuth.slice('Bearer '.length)
    : ''

  return segredoRecebido === segredoConfigurado
}
