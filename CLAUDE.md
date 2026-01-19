# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static GitHub Pages personal portfolio site for Pierre Nespo, hosted at pierrenespo.com.

## Architecture

- **Static HTML site** - No build process, framework, or JavaScript bundling
- **GitHub Pages hosting** - Deploy by pushing to the `master` branch
- **Custom domain** - Configured via `CNAME` file
- **Dark/Light theme** - CSS custom properties with JavaScript toggle, persisted to localStorage

## File Structure

- `index.html` - Main (and only) page with semantic HTML5 structure
- `styles.css` - Modern CSS with custom properties for theming
- `theme.js` - Dark/light mode toggle with localStorage persistence
- `CNAME` - Custom domain configuration
- `robots.txt` - Search engine directives
- `sitemap.xml` - Site map for search engines
- `humans.txt` - Human-readable credits

## Design System

### Colors
- **Dark mode**: `#18181b` bg, `#fafafa` text, `#22c55e` accent, `#60a5fa` links
- **Light mode**: `#fafafa` bg, `#18181b` text, `#16a34a` accent, `#2563eb` links

### Typography
- Body: System sans-serif stack
- Accents (name, dates, headers): Monospace stack

### Layout
- Single-column, max-width 680px
- Mobile-first responsive design

## Development

No build commands required. Edit files directly and push to deploy. View locally by opening `index.html` in a browser.
