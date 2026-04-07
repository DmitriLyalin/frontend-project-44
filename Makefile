install: # install all necessary dependencies
	npm ci
brain-games: #execute file brain-games.js
	./bin/brain-games.js
brain-even: #execute file brain-even.js
	./bin/brain-even.js

brain-calc: #execute file brain-calc.js
	./bin/brain-calc.js
brain-gcd: #execute file brain-gcd.js
	./bin/brain-gcd.js
brain-progression: #execute file brain-progression.js
	./bin/brain-progression.js
brain-prime: #execute file brain-prime.js
	./bin/brain-prime.js

publish: 
	npm publish --dry-run
lint: # check linting and find problems
	npx eslint .
