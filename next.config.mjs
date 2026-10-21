/**
 * Configuração em JavaScript puro (.mjs) para máxima compatibilidade de build
 * em qualquer ambiente de hospedagem (evita o passo de compilar um config .ts).
 *
 * `output: "export"` gera um site 100% estático na pasta `out/` (HTML/CSS/JS),
 * ideal para hospedagem compartilhada (ex.: Hostinger "Hospedagem de Sites"),
 * que serve arquivos estáticos e não roda um servidor Node.
 *
 * `images.unoptimized` é necessário no modo export (não há servidor de
 * otimização de imagens); as fotos já são .webp otimizadas.
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
