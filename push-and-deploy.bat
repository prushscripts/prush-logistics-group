@echo off
title Push to Git and Deploy (Vercel)
cd /d "%~dp0"

set COMMIT_MSG=Update deployment
if not "%~1"=="" set COMMIT_MSG=%~1

echo.
echo === Prush Logistics - Push and Deploy ===
echo.

echo [1/3] Staging all changes...
git add .
if errorlevel 1 (
    echo ERROR: git add failed. Is Git installed and in your PATH?
    goto :end
)

echo [2/3] Committing...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo.
    echo No changes to commit, or commit failed.
    echo Pushing any existing commits to trigger Vercel...
    echo.
)

echo [3/3] Pushing to remote...
git push
if errorlevel 1 (
    echo.
    echo ERROR: git push failed. Check:
    echo   - You are logged in to Git / GitHub
    echo   - Remote is set: git remote -v
    echo   - Branch exists on remote
    goto :end
)

echo.
echo Done. Vercel will rebuild and deploy from the new push.
echo.

:end
echo.
pause
