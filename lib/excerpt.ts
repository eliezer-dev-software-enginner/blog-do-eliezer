/**
 * Remove a sintaxe do Markdown de um texto, deixando só o conteúdo legível.
 * Usado pra gerar o resumo exibido no card do post na home - sem isso, um
 * post com `![alt](url-enorme)` ou `[link](url)` logo no início mostra a
 * sintaxe crua (incluindo a URL completa) no card, o que quebra o layout
 * (principalmente em telas estreitas).
 * @param markdown Conteúdo Markdown completo do post
 * @returns Texto plano, sem sintaxe Markdown
 */
export function stripMarkdown(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ') // blocos de código
    .replace(/`([^`]+)`/g, '$1') // código inline
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // imagens ![alt](url)
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links [texto](url)
    .replace(/^#{1,6}\s+/gm, '') // headings
    .replace(/(\*\*|__)(.*?)\1/g, '$2') // negrito
    .replace(/(\*|_)(.*?)\1/g, '$2') // itálico
    .replace(/^>\s?/gm, '') // citações
    .replace(/^[-*+]\s+/gm, '') // marcadores de lista
    .replace(/\s+/g, ' ') // colapsa espaços/quebras de linha
    .trim();
}

/**
 * Gera um resumo em texto plano (sem Markdown) de um tamanho máximo, pra
 * exibir no card do post.
 * @param markdown Conteúdo Markdown completo do post
 * @param maxLength Tamanho máximo do resumo (padrão 180)
 * @returns Resumo em texto plano
 */
export function createExcerpt(markdown: string, maxLength = 180): string {
  const textoLimpo = stripMarkdown(markdown || '');

  if (textoLimpo.length <= maxLength) {
    return textoLimpo;
  }

  return `${textoLimpo.slice(0, maxLength).trimEnd()}...`;
}
