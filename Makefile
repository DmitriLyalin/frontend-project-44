install: # install all necessary dependencies
	npm ci
brain-games: #execute file brain-games.js
	./bin/brain-games.js
publish: 
	npm publish --dry-run
