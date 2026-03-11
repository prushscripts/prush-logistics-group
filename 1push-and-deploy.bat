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
    echo ERROR: git add failed.
    pause
    exit /b 1
)

echo [2/3] Committing...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo.
    echo No changes to commit, or commit failed.
    echo Try: push-and-deploy.bat "Your commit message"
    echo.
    set /p PUSH_ANYWAY=Push existing commits anyway? (y/n): 
    if /i not "%PUSH_ANYWAY%"=="y" (
        pause
        exit /b 0
    )
) else (
    echo Commit OK.
)

echo [3/3] Pushing to remote...
git push
if errorlevel 1 (
    echo ERROR: git push failed. Check remote and branch.
    pause
    exit /b 1
)

echo.
echo Done. Vercel will rebuild and deploy from the new push.
echo.
pause
