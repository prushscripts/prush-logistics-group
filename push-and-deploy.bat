@echo off
REM Re-run in a window that stays open when double-clicked from Explorer
if not "%~1"=="persist" (
    start "Push and Deploy" cmd /k call "%~f0" persist "%~1"
    exit /b 0
)

title Push to Git and Deploy (Vercel)
cd /d "%~dp0"

REM Use full path to Git so it works when double-clicked (Git often not in PATH)
set GIT=git
if exist "C:\Program Files\Git\bin\git.exe" set "GIT=C:\Program Files\Git\bin\git.exe"
if exist "C:\Program Files (x86)\Git\bin\git.exe" set "GIT=C:\Program Files (x86)\Git\bin\git.exe"

set COMMIT_MSG=Update deployment
if not "%~2"=="" set COMMIT_MSG=%~2

echo.
echo === Prush Logistics - Push and Deploy ===
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

echo [3/3] Pushing to remote...
"%GIT%" push
if errorlevel 1 (
    echo.
    echo ERROR: git push failed. Check login and remote.
    goto :end
)

echo.
echo Done. Vercel will rebuild and deploy from the new push.
echo.

:end
echo.
pause
