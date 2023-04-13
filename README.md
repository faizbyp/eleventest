# Eleventest

Trying 11ty static-site generator


## Init Project

### Install 11ty

```bash
# Create package.json
npm init -y
# Installing 11ty
npm install @11ty/eleventy --save-dev
```

### Install Bootstrap 5

```bash
npm install bootstrap@5.2.3 --save
```

Create `index.html` for template and `.gitignore` file


## Development

```bash
# Auto rebuild after changes
npx @11ty/eleventy --serve
# or
npm start
```