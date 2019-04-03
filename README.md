# ✈️ Create React Paradrop

**A Create React App plugin that builds a single self-contained JavaScript file instead of an entire webapp**

1. `npx create-react-app --scripts-version create-react-paradrop my-react-paradrop-project`
2. `cd my-react-paradrop-project`
3. `npm run build`

You should now have a single `bundle.js` file in your `build/` folder.

## Next release roadmap

- [ ] Include React Adaptor pattern
- [ ] Removes all other files from `build/` folder.
- [ ] Inlines all images and CSS during build when even when imported.