#!/usr/bin/env bash
# One-command deploy: push local code, then pull/build/restart on the server.
# Usage: ./deploy.sh
# Auth: uses your SSH key if set up; otherwise export SSHPASS='<password>' first.

set -euo pipefail

SERVER_HOST="79.99.46.63"
SERVER_PORT="2222"
SERVER_USER="root"
REMOTE_DIR="/root/callpilot"
BRANCH="production"

# How the app is restarted on the server. Set after checking `pm2 ls` / `ps aux`.
RESTART_CMD="${RESTART_CMD:-pm2 restart callpilot}"

SSH_OPTS=(-p "$SERVER_PORT" -o StrictHostKeyChecking=accept-new)
if [[ -n "${SSHPASS:-}" ]]; then
  SSH=(sshpass -e ssh "${SSH_OPTS[@]}")
else
  SSH=(ssh "${SSH_OPTS[@]}")
fi

if [[ -n "$(git status --porcelain)" ]]; then
  echo "You have uncommitted changes. Commit them first (they won't be deployed)." >&2
  exit 1
fi

current_branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$current_branch" != "$BRANCH" ]]; then
  echo "You are on '$current_branch', but deploys go from '$BRANCH'." >&2
  exit 1
fi

echo "==> Pushing $BRANCH"
git push origin "$BRANCH"

echo "==> Deploying on $SERVER_HOST"
"${SSH[@]}" "$SERVER_USER@$SERVER_HOST" bash -s <<EOF
set -euo pipefail
cd "$REMOTE_DIR"
git checkout -- yarn.lock
git pull origin "$BRANCH"
npm install --legacy-peer-deps
npm run build
$RESTART_CMD
EOF

echo "==> Deploy finished"
