import type { NextConfig } from "next";

/**
 * Configuração enxuta e portável — o site é 100% estático e usa apenas
 * imagens locais (em /public), então não precisamos de flags experimentais
 * nem de domínios de imagem remotos. Isso maximiza a compatibilidade do
 * build em diferentes ambientes de hospedagem.
 */
const nextConfig: NextConfig = {};

export default nextConfig;
