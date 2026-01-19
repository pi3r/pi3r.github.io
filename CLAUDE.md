# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static GitHub Pages personal portfolio site for Pierre Nespo, hosted at pierrenespo.com.

## Architecture

- **Static HTML site** - No build process, framework, or JavaScript bundling
- **GitHub Pages hosting** - Deploy by pushing to the `master` branch
- **Custom domain** - Configured via `CNAME` file

## File Structure

- `index.html` - Main (and only) page
- `stylesheets/` - Primary CSS (`stylesheet.css` for dark terminal theme, `github-dark.css`)
- `css/` - Bootstrap CSS and custom overrides (`custom.css`)
- `javascripts/main.js` - Minimal JS (currently just a console log)
- `js/bootstrap.min.js` - Bootstrap library

## Development

No build commands required. Edit files directly and push to deploy. View locally by opening `index.html` in a browser.
