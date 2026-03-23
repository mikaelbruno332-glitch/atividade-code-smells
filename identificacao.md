# Parte 1 — Identificação de Code Smells

## 1. God Class
- Onde: Classe SistemaBiblioteca
- Problema: Faz muitas responsabilidades
- Motivo: Difícil manutenção

## 2. Long Method
- Onde: realizarEmprestimo
- Problema: Método muito grande
- Motivo: Difícil leitura

## 3. Primitive Obsession
- Onde: uso de strings
- Problema: Usa string ao invés de tipo
- Motivo: Pode gerar erros

## 4. If Excessivo
- Onde: gerarRelatorio
- Problema: Muitos if/else
- Motivo: Código confuso

## 5. Feature Envy
- Onde: Métodos acessando dados externos
- Problema: Classe usa dados de outras
- Motivo: Baixo encapsulamento

## 6. Código Duplicado
- Onde: validações repetidas
- Problema: Código repetido
- Motivo: Difícil manutenção
