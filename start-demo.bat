@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 goto use_py
where python >nul 2>nul
if %errorlevel%==0 goto use_python
echo Python was not found. You can still try opening index.html directly in Chrome or Edge.
pause
start "" "%~dp0index.html"
exit /b 1
:use_py
start "AZAL Store Desk demo server" /min cmd /c "cd /d ""%~dp0"" && py -m http.server 8020 --bind 0.0.0.0"
goto open_browser
:use_python
start "AZAL Store Desk demo server" /min cmd /c "cd /d ""%~dp0"" && python -m http.server 8020 --bind 0.0.0.0"
:open_browser
timeout /t 2 /nobreak >nul
start "" http://127.0.0.1:8020
endlocal
