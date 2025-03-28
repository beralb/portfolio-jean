# Contexto do Projeto - Portfolio Jean

## Situação Atual

### Estrutura dos Repositórios
1. **beralb.github.io**
   - Repositório principal que serve o site em `https://beralb.github.io/`
   - Contém atualmente um `index.html` com redirecionamento (renomeado para `index.html.bak`)
   - Configurado para servir da branch `main`

2. **portfolio-jean**
   - Contém o código fonte do novo site
   - Atualmente servido em `https://beralb.github.io/portfolio-jean/`
   - Usa Vite + React + TypeScript

### Objetivo
Servir o conteúdo do portfolio-jean diretamente em `https://beralb.github.io/` em vez de `https://beralb.github.io/portfolio-jean/`

### Alterações em Andamento

1. **Configuração do Vite**
   ```typescript
   // vite.config.ts
   export default defineConfig({
     plugins: [react()],
     base: './',  // Tentando ajustar para funcionar local e produção
     // ... outras configurações
   })
   ```

2. **Script de Deploy**
   ```json
   // package.json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist --repo https://github.com/beralb/beralb.github.io.git --branch main --dotfiles true"
     }
   }
   ```

### Problemas Atuais

1. **Servidor Local**
   - Não está carregando corretamente (erro 404)
   - Tentativas de configuração do `base` no Vite não resolveram
   - Possível conflito com múltiplas instâncias do servidor

2. **Deploy**
   - Configurado para publicar no repositório /portofolio-jean e deve carregar no raiz
   - Ainda não testado com as novas configurações

### Próximos Passos Planejados

1. Resolver o problema do servidor local:
   - Limpar cache do Vite (`rm -rf node_modules/.vite`)
   - Garantir uma única instância do servidor rodando
   - Testar diferentes configurações do `base` no Vite

2. Após resolver local:
   - Testar o deploy para o repositório principal
   - Verificar se o site carrega corretamente na raiz
   - Remover arquivos de redirecionamento antigos 