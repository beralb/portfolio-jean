# Portfolio Jean Paul Bernhardt

## Sobre o Projeto
Portfolio profissional desenvolvido com React, TypeScript e Tailwind CSS, apresentando uma interface moderna e responsiva com suporte a tema claro/escuro.

### Tecnologias Principais
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

### Características
- Design responsivo
- Tema claro/escuro
- Animações suaves
- Otimizado para SEO
- Acessibilidade

## Começando

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositório]

# Entre no diretório
cd portolio-jean

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run lint` - Executa o linter
- `npm run preview` - Visualiza a build de produção localmente

## Estrutura do Projeto

```
portolio-jean/
├── public/            # Arquivos estáticos
├── src/
│   ├── components/    # Componentes React
│   ├── context/      # Contextos React (ex: tema)
│   ├── styles/       # Estilos e configurações CSS
│   └── types/        # Definições de tipos TypeScript
├── index.html        # Página HTML principal
└── package.json      # Dependências e scripts
```

## Segurança

### Content Security Policy (CSP)
O projeto implementa uma política de segurança de conteúdo que:
- Restringe fontes de recursos (scripts, estilos, imagens)
- Previne ataques XSS
- Permite apenas recursos de fontes confiáveis
- Força conexões HTTPS

### Boas Práticas
- Links externos abrem em nova aba com `rel="noopener noreferrer"`
- Sanitização de dados em inputs
- Proteção contra clickjacking
- Atualizações regulares de dependências

## Contribuindo

### Como Contribuir
1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- Use TypeScript para todo código novo
- Siga o estilo de código existente
- Mantenha os componentes pequenos e focados
- Documente mudanças significativas
- Adicione testes para novas funcionalidades

### Processo de PR
1. Atualize a documentação relevante
2. Verifique se o código passa no linter
3. Teste as mudanças localmente
4. Solicite review de outro desenvolvedor
