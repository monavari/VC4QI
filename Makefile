.PHONY: setup test lint validate-schemas demo clean

# Prerequisites: Node 20, pnpm 10.15.1, Python 3.12 and uv on PATH.
setup:
	pnpm install --frozen-lockfile
	uv sync --locked --all-packages --extra dev

test:
	pnpm test
	pnpm test:scenarios
	uv run --locked --all-packages --extra dev pytest packages/core-py/tests

lint:
	pnpm lint
	uv run --locked --all-packages --extra dev ruff check .
	uv run --locked --all-packages --extra dev mypy packages/core-py

validate-schemas:
	pnpm validate:schemas

demo:
	pnpm --filter @qi-vc/demo-web dev

clean:
	find . -name "node_modules" -type d -prune -exec rm -rf {} +
	find . -name "__pycache__" -type d -prune -exec rm -rf {} +
	find . -name "dist" -type d -prune -exec rm -rf {} +
	find . -name ".venv" -type d -prune -exec rm -rf {} +
	find . -name "*.egg-info" -type d -prune -exec rm -rf {} +
