#!/bin/bash
cd /home/kavia/workspace/code-generation/reviewinsight-hub-96128-96137/reviewradar_frontend
npm run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

