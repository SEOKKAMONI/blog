---
title: "Welcome Bbang starter"
date: "2023-10-08"
---

## 1. Support Four frontmatter

```
---
thumbnail: "./image.jpg"
title: "Welcome Bbang starter"
description: "This is a description of Bbang starter."
date: "2023-10-08"
---
```

1. thumbnail
2. title
3. description
4. date

## 2. Edit `gatsby-config.js` File

### 1. Open the File

Use a text editor of your choice to open the gatsby-config.js file.

### 2. Edit SITE_METADATA

Find the SITE_METADATA object within the configuration file. You can modify the site title, description, author, and other metadata properties here.

```
const SITE_METADATA = Object.freeze({
  title: "Title",
  author: {
    name: "Name",
    position: "Position",
    summary: "I'm Seokjin, your theme creator. ",
  },
  description: "description",
  siteUrl: "https://github.com/seokkamoni",
  social: {
    phoneNumber: "010-1234-5678",
    gmail: "gmail",
    github: "github-id",
    instagram: "instagram-id",
  },
});
```

## 3. Change Profile Image

### 1. Access Assets Folder

Go to the assets folder in your project.

### 2. Add New Image:

Place your desired image, named profile.png, in the assets folder.

## Contributing

If you find any bugs or issues in this blog, please feel free to contribute by raising an [issue](https://github.com/SEOKKAMONI/gatsby-starter-bbang-blog/issues) or submitting a [pull request (PR)](https://github.com/SEOKKAMONI/gatsby-starter-bbang-blog/pulls). Your contributions are highly appreciated and will help improve the overall quality of this blog. Thank you for your support!
