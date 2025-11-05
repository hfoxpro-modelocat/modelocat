@echo off
chcp 65001 >nul
echo ========================================
echo   MODELO CAT - REFORMULAÇÃO AUTOMÁTICA
echo ========================================
echo.
echo Este script vai:
echo 1. Encontrar o projeto modelocat
echo 2. Aplicar todas as mudanças
echo 3. Fazer commit e push automático
echo.
echo Pressione qualquer tecla para continuar...
pause >nul

echo.
echo [1/5] Procurando projeto modelocat...
echo.

REM Procurar pasta modelocat em locais comuns
set PROJECT_PATH=
if exist "%USERPROFILE%\Documents\modelocat" set PROJECT_PATH=%USERPROFILE%\Documents\modelocat
if exist "%USERPROFILE%\Desktop\modelocat" set PROJECT_PATH=%USERPROFILE%\Desktop\modelocat
if exist "C:\modelocat" set PROJECT_PATH=C:\modelocat
if exist "D:\modelocat" set PROJECT_PATH=D:\modelocat

if "%PROJECT_PATH%"=="" (
    echo ❌ ERRO: Projeto modelocat não encontrado!
    echo.
    echo Por favor, coloque este script na pasta do projeto modelocat
    echo ou edite a linha 28 deste ficheiro com o caminho correto.
    echo.
    pause
    exit /b 1
)

echo ✅ Projeto encontrado em: %PROJECT_PATH%
echo.

echo [2/5] Instalando dependência react-helmet-async...
cd /d "%PROJECT_PATH%"
call pnpm add react-helmet-async
if errorlevel 1 (
    echo ❌ ERRO ao instalar dependência!
    pause
    exit /b 1
)
echo ✅ Dependência instalada!
echo.

echo [3/5] Baixando ficheiros atualizados...
echo.
echo ATENÇÃO: Os ficheiros serão baixados do servidor.
echo Certifique-se de ter conexão à internet!
echo.

REM Criar pasta temporária
if not exist "%TEMP%\modelocat-update" mkdir "%TEMP%\modelocat-update"

REM Baixar ficheiros (usando curl ou PowerShell)
echo Baixando SEOHead.jsx...
powershell -Command "& {Invoke-WebRequest -Uri 'https://raw.githubusercontent.com/hfoxpro-modelocat/modelocat/main/src/components/SEOHead.jsx' -OutFile '%TEMP%\modelocat-update\SEOHead.jsx' -ErrorAction SilentlyContinue}"

if not exist "%TEMP%\modelocat-update\SEOHead.jsx" (
    echo.
    echo ⚠️  Não foi possível baixar automaticamente.
    echo.
    echo Por favor:
    echo 1. Baixe o ficheiro COPIAR-PARA-PROJETO.zip que foi enviado
    echo 2. Extraia para uma pasta
    echo 3. Copie a pasta 'src' para: %PROJECT_PATH%
    echo 4. Substitua os ficheiros quando perguntado
    echo.
    pause
    exit /b 1
)

echo [4/5] Aplicando mudanças...
echo.

REM Criar pasta components se não existir
if not exist "%PROJECT_PATH%\src\components" mkdir "%PROJECT_PATH%\src\components"

REM Copiar ficheiros
copy /Y "%TEMP%\modelocat-update\SEOHead.jsx" "%PROJECT_PATH%\src\components\" >nul

echo ✅ Ficheiros aplicados!
echo.

echo [5/5] Fazendo commit e push...
echo.

cd /d "%PROJECT_PATH%"

REM Adicionar ficheiros
git add .

REM Fazer commit
git commit -m "Feat: Reformulação completa do site com SEO otimizado"

if errorlevel 1 (
    echo ⚠️  Nenhuma mudança para commit ou erro no git
    echo.
    echo Verifique se:
    echo 1. O Git está instalado
    echo 2. Você está na pasta correta do projeto
    echo 3. Os ficheiros foram copiados corretamente
    echo.
    pause
    exit /b 1
)

REM Fazer push
git push origin main

if errorlevel 1 (
    echo ❌ ERRO ao fazer push!
    echo.
    echo Por favor, faça push manualmente no GitHub Desktop
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   ✅ REFORMULAÇÃO APLICADA COM SUCESSO!
echo ========================================
echo.
echo O Netlify vai fazer o deploy automaticamente.
echo Aguarde 3-5 minutos e depois acesse:
echo.
echo https://modelocat.netlify.app
echo.
echo Não esqueça de fazer Ctrl + Shift + R para limpar o cache!
echo.
echo Pressione qualquer tecla para fechar...
pause >nul

