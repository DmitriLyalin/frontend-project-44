install: # install all necessary dependencies
	npm ci
brain-games: #execute file brain-games.js
	./bin/brain-games.js
brain-even: #execute file brain-even.js
	./bin/brain-even.js
publish: 
	npm publish --dry-run
lint: # check linting and find problems
	npx eslint .
