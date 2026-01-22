# 🤖 Configuração do Chatbot Elfsight

## ✅ Integração Concluída

O chatbot Elfsight foi integrado ao seu website. Agora você precisa apenas configurar o ID do widget.

## 📋 Passo a Passo para Ativar

### 1. Obter o ID do Widget

1. Acesse o painel do Elfsight: https://apps.elfsight.com/
2. Faça login na sua conta
3. Selecione o chatbot que você criou
4. Na seção "Embed", você verá um código similar a:

```html
<div class="elfsight-app-XXXXX"></div>
```

Onde `XXXXX` é o ID do seu widget.

### 2. Configurar no Código

1. Abra o arquivo: `src/components/Chatbot.tsx`
2. Localize a linha:
```typescript
const widgetId = 'YOUR_WIDGET_ID'; // Exemplo: '12345'
```
3. Substitua `'YOUR_WIDGET_ID'` pelo ID do seu widget

**Exemplos:**
- Se o ID completo for `elfsight-app-12345`, use apenas `'12345'`
- Se o ID completo for `elfsight-app-abc123`, use apenas `'abc123'`

### 3. Testar

1. Execute `npm run dev` para iniciar o servidor de desenvolvimento
2. Acesse `http://localhost:5173`
3. O chatbot deve aparecer no canto inferior direito (ou conforme configurado no Elfsight)
4. Teste enviando uma mensagem

### 4. Deploy

Após testar localmente:

1. Execute `npm run build` para criar a build de produção
2. Faça commit e push das alterações
3. Execute `npm run deploy` ou `npm run deploy:new` conforme seu repositório
4. O chatbot estará ativo no site em produção

## 🔧 O que foi Configurado

### ✅ Content Security Policy (CSP)
- Permite scripts do Elfsight (`https://static.elfsight.com`)
- Permite frames do Elfsight (`https://apps.elfsight.com`)
- Permite conexões com a API do Elfsight

### ✅ Componente React
- Componente `Chatbot.tsx` criado
- Carregamento assíncrono do script
- Integrado ao App com lazy loading

### ✅ Otimizações
- DNS prefetch para melhor performance
- Lazy loading para não impactar o carregamento inicial
- Z-index configurado para não conflitar com outros elementos

## 📍 Posicionamento

O chatbot aparecerá conforme configurado no painel do Elfsight. Por padrão, os widgets Elfsight aparecem no canto inferior direito.

**Nota:** O botão do WhatsApp está posicionado em `bottom-20 sm:bottom-6` (mobile: 80px do fundo, desktop: 24px). O chatbot do Elfsight geralmente aparece mais próximo do canto, então não deve haver conflito visual.

## 🐛 Troubleshooting

### O chatbot não aparece
1. Verifique se o ID do widget está correto
2. Verifique o console do navegador para erros
3. Certifique-se de que o script está sendo carregado (Network tab)
4. Verifique se o CSP não está bloqueando (Console tab)

### Conflito com outros elementos
- O chatbot tem `z-index: 40`
- O WhatsAppButton tem `z-index: 50`
- Ajuste conforme necessário no componente Chatbot.tsx

### Script não carrega
- Verifique sua conexão com a internet
- Verifique se o CSP está permitindo `https://static.elfsight.com`
- Tente limpar o cache do navegador

## 📚 Documentação Adicional

- [Documento de contexto do website](./a_private/documents/contexto-website-jean.md) - Para treinar o chatbot
- [Documento sobre chatbot Elfsight](./a_private/documents/contexto_chatbot_elfsight.md) - Referência sobre a plataforma

## ✨ Próximos Passos

1. ✅ Configurar o ID do widget
2. ✅ Testar localmente
3. ✅ Fazer deploy
4. ✅ Treinar o chatbot com o documento de contexto
5. ✅ Personalizar mensagens e comportamento no painel Elfsight

---

**Dúvidas?** Consulte a documentação do Elfsight: https://elfsight.com/pt/ai-chatbot-widget

