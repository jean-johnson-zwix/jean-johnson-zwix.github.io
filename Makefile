# Makefile for jean-johnson-zwix.github.io
# Jekyll site + Python scripts
.DELETE_ON_ERROR:
.SUFFIXES:

.PHONY: all serve build clean fetch venv deps

PROJECT := jean-johnson-zwix.github.io
PYTHON ?= python
VENV := scripts/venv
PIP := $(VENV)/Scripts/pip
PYTHON_VENV := $(VENV)/Scripts/python

## Build Jekyll site (default)
all: build

## Serve locally with live reload
serve:
	bundle exec jekyll serve --livereload

## Build Jekyll site
build:
	bundle exec jekyll build

## Install Ruby + Python dependencies
deps: venv
	bundle install

## Create Python venv and install dependencies
venv: $(VENV)/Scripts/activate

$(VENV)/Scripts/activate: scripts/requirements.txt
	$(PYTHON) -m venv $(VENV)
	$(PIP) install -r scripts/requirements.txt
	@touch $@

## Fetch all project READMEs from GitHub
fetch: venv
	$(PYTHON_VENV) scripts/fetch_all_projects.py

## Remove built files
clean:
	bundle exec jekyll clean
	$(RM) -r _site .jekyll-cache

## Show help
help:
	@echo "$(PROJECT)"
	@echo ""
	@echo "Targets:"
	@echo "  all     - Build Jekyll site (default)"
	@echo "  serve   - Serve locally with live reload"
	@echo "  build   - Build Jekyll site"
	@echo "  deps    - Install Ruby + Python dependencies"
	@echo "  venv    - Create Python venv"
	@echo "  fetch   - Fetch project READMEs from GitHub"
	@echo "  clean   - Remove built files"
	@echo "  help    - Show this help"
