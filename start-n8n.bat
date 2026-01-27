@echo off
title n8n Auto-Run (Tam Thinh)
cd /d d:\n8n-automation
set N8N_USER_MANAGEMENT_DISABLED=true
set WEBHOOK_URL=https://anicfi-ip-1-54-152-175.tunnelmole.net/
echo Khoi dong n8n (Khong mat khau): %WEBHOOK_URL%
npx n8n
pause
