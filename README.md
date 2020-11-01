<h1 align="center">
  Dimas Abimanyu - v4
</h1>

<p align="center"> 
  The fourth iteration of my personal portfolio site built with Gatsby and Strapi headless CMS - hosted with Netlify.
</p>

<p align="center">
  Previous iterations:
  <a href="https://github.com/dimasabimanyy/v1" target="_blank">v1</a>,
  <a href="https://github.com/dimasabimanyy/v2" target="_blank">v2</a>,
  <a href="https://github.com/dimasabimanyy/v3" target="_blank">v3</a>
</p>

![Website Screenshot](https://raw.githubusercontent.com/dimasabimanyy/v4/master/src/assets/screenshot-home.png)

# Complete Project Setup

In order to use complete project you will need:

1. Strapi Instance with all Content-Types and at least single instance of data (for each content-type). Check gatsby-config
2. Permissions for all content-type's

## Setup Notes

1. All components ready to go (including imports)
2. Use style.scss as main style
3. Limit amount of components - better overview
4. React Icons

[react icons] :https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

5. Use constants to avoid repetition.

6. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```

## 🎨 Color Reference

| Color         | Hex                                                                |
| ------------- | ------------------------------------------------------------------ |
| Yellow        | ![#ffff00](https://via.placeholder.com/10/ffff00?text=+) `#ffff00` |
| White         | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) `#ffffff` |
| Black         | ![#262728](https://via.placeholder.com/10/262728?text=+) `#262728` |
| Gray          | ![#808080](https://via.placeholder.com/10/808080?text=+) `#808080` |
| Golden Yellow | ![#ffd504](https://via.placeholder.com/10/ffd504?text=+) `#ffd504` |
