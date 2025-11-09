# 📥 Download Automático de Imagens do Canva

Este script permite baixar automaticamente as imagens quando você copia elementos do site no navegador.

## 🚀 Como Usar

### Método 1: Adicionar ao HTML (Automático)

1. Abra o arquivo `index.html`
2. Antes do fechamento da tag `</body>`, adicione:
```html
<script src="js/download-images.js"></script>
```

3. Agora, sempre que você copiar elementos (Ctrl+C ou Cmd+C), as imagens serão baixadas automaticamente!

### Método 2: Executar no Console do Navegador (Manual)

1. Abra o site no navegador
2. Pressione F12 para abrir as Ferramentas de Desenvolvedor
3. Vá para a aba "Console"
4. Cole o conteúdo do arquivo `js/download-images.js` e pressione Enter
5. Agora o script está ativo!

## 📋 Funcionalidades

### Download Automático ao Copiar
- Selecione elementos no site
- Pressione Ctrl+C (ou Cmd+C no Mac)
- As imagens dos elementos copiados serão baixadas automaticamente

### Funções Disponíveis no Console

#### `downloadImagesFromSelection()`
Baixa todas as imagens dos elementos atualmente selecionados.

**Uso:**
1. Selecione elementos na página
2. No console, digite: `downloadImagesFromSelection()`
3. Pressione Enter

#### `downloadAllPageImages()`
Baixa todas as imagens encontradas na página inteira.

**Uso:**
No console, digite: `downloadAllPageImages()` e pressione Enter

## 🎯 O que o Script Detecta

O script detecta imagens de:
- ✅ Tags `<img>` com atributo `src`
- ✅ Imagens de fundo CSS (`background-image`)
- ✅ Imagens com `data-src` (lazy loading)

## ⚠️ Notas Importantes

- O script funciona melhor quando você copia elementos que contêm imagens
- As imagens são baixadas com nomes únicos baseados em timestamp
- Se houver muitas imagens, pode levar alguns segundos para baixar todas
- O navegador pode pedir permissão para múltiplos downloads (dependendo das configurações)

## 🔧 Solução de Problemas

**As imagens não estão sendo baixadas:**
- Verifique se o script foi carregado corretamente (veja mensagens no console)
- Certifique-se de que os elementos copiados realmente contêm imagens
- Tente usar `downloadImagesFromSelection()` manualmente

**Erro de CORS (Cross-Origin):**
- Algumas imagens podem estar em domínios diferentes e não podem ser baixadas diretamente
- Nesse caso, você pode tentar abrir a imagem em uma nova aba e salvá-la manualmente


