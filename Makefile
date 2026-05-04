.PHONY: setup test lint validate-schemas demo clean

setup:
	@echo "==> Installing Node.js toolchain (pnpm)..."
	npm install -g pnpm
	pnpm install
	@echo "==> Installing Python toolchain (uv)..."
	pip install uv
	uv sync --all-packages
	@echo "==> Installing pre-commit hooks..."
	pip install pre-commit
	pre-commit install
	@echo "==> Setup complete."

test:
	pnpm test
	uv run pytest

lint:
	pnpm lint
	uv run ruff check .
	uv run mypy packages/core-py

validate-schemas:
	pnpm validate:schemas

demo:
	pnpm --filter demo-web dev

clean:
	find . -name "node_modules" -type d -prune -exec rm -rf {} +
	find . -name "__pycache__" -type d -prune -exec rm -rf {} +
	find . -name "dist" -type d -prune -exec rm -rf {} +
	find . -name ".venv" -type d -prune -exec rm -rf {} +
	find . -name "*.egg-info" -type d -prune -exec rm -rf {} +
