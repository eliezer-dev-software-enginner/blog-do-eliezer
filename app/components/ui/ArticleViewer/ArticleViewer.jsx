import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './ArticleViewer.module.css';

// remarkGfm liga as extensoes do GitHub Flavored Markdown - sem ele, o
// react-markdown so entende CommonMark estrito, que exige a sintaxe
// [texto](url) para virar link e nao converte uma URL solta (ex.:
// "https://teste.com" digitada direto no texto) em link clicavel.
const remarkPlugins = [remarkGfm];

const components = {
  a: ({ href, children, ...props }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  ),
};

/**
 * Componente para renderizar conteúdo Markdown com estilos padrão.
 *
 * @param {object} props
 * @param {string} props.content - String contendo Markdown
 */
export const ArticleViewer = ({ content }) => {
  return (
    <div className={styles.content}>
      <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
