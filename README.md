# React Text Fade Site

A small Vite + React starter with five pages. Each page displays centered text and fades the words in from beginning to end when the route loads.

## Start the project

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal.

## Pages

- `/one`
- `/two`
- `/three`
- `/four`
- `/five`

## Change the page text

Edit the files inside:

```text
src/pages/
```

For example, in `PageOne.jsx`:

```jsx
return <PageLayout text="Put your own text here." />;
```

## Adjust the animation

In `src/FadeText.jsx`, this controls how quickly the fade moves from one word to the next:

```jsx
style={{ '--delay': `${index * 90}ms` }}
```

In `src/styles.css`, this controls the fade duration:

```css
animation: revealWord 700ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
```

## Build for production

```bash
npm run build
```

The production files will be generated in `dist/`.
