@echo off
REM Deploy: push to GitHub and trigger Vercel deployment
if not "%~1"=="persist" (
    start "Deploy - Prush Logistics" cmd /k call "%~f0" persist "%~1"
    exit /b 0
)

title Deploy — Prush Logistics Group
cd /d "%~dp0"

set GIT=git
if exist "C:\Program Files\Git\bin\git.exe" set "GIT=C:\Program Files\Git\bin\git.exe"
if exist "C:\Program Files (x86)\Git\bin\git.exe" set "GIT=C:\Program Files (x86)\Git\bin\git.exe"

set COMMIT_MSG=Update deployment
if not "%~2"=="" set COMMIT_MSG=%~2

echo.
echo === Prush Logistics — Deploy ===
echo.

echo [1/3] Staging all changes...
"%GIT%" add .
if errorlevel 1 (
    echo ERROR: git add failed. Is Git installed?
    goto :end
)

echo [2/3] Committing...
"%GIT%" commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo.
    echo No changes to commit. Pushing any existing commits...
    echo.
)

echo [3/3] Pushing to GitHub...
"%GIT%" push
if errorlevel 1 (
    echo.
    echo ERROR: git push failed. Check remote and login.
    goto :end
)

echo.
echo Done. Vercel will build and deploy from the new push.
echo.

:end
echo.
pause
