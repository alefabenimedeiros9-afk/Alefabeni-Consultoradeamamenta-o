# Amor que Nutre — starter do site

Projeto demonstrativo para consultoria de amamentação. O arquivo `index.html` é a versão simples e estática, com CSS e JavaScript separados. Também há exemplos opcionais de Next.js/React/TypeScript, Node.js, PHP, Python/FastAPI e PostgreSQL.

## Começar pelo HTML (mais simples)
1. Extraia a pasta do ZIP.
2. Abra `index.html` no navegador.
3. Edite `index.html`, `css/styles.css` e `js/main.js` no VS Code.
4. Em `js/main.js`, preencha `SITE_CONFIG.whatsapp`, `instagram`, `email` e os links reais de cursos. WhatsApp deve usar código do país + DDD + número, apenas dígitos, por exemplo `5547999999999`.

## Rodar a versão Next.js
Requer Node.js instalado. Na raiz do projeto:

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. A versão Next.js usa `src/app/page.tsx` e `src/app/site.css`.

## Exemplos opcionais de backend
- Node.js: `npm install express cors`, depois `node server/server.js`.
- Python: `pip install fastapi uvicorn`, entre na pasta `python` e rode `uvicorn api:app --reload --port 8000`.
- PHP: publique `php/contact.php` em um servidor PHP configurado.
- PostgreSQL: revise e execute `sql/schema.sql` no banco.

**Importante:** os exemplos de API são esqueletos educativos, não um sistema de produção. Antes de publicar, configure HTTPS, validação, controle de abuso, autenticação para área administrativa, política de privacidade/LGPD e armazenamento seguro. O formulário estático não salva dados em banco. Configure contatos, cursos, preços, biografia e depoimentos reais antes da publicação.
