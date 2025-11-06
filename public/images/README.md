# Image Organization Guide

## Folder Structure

All images should be placed in the `public/images/` directory, organized by category:

```
public/
└── images/
    ├── logos/          # Company logos, brand assets
    ├── projects/       # Project photos, case studies
    ├── team/           # Team member photos
    └── gallery/        # General gallery images
```

## Usage in Next.js

### Using Next.js Image Component (Recommended)

```tsx
import Image from 'next/image'

<Image
  src="/images/projects/project-name.jpg"
  alt="Project description"
  width={800}
  height={600}
  priority // For above-the-fold images
/>
```

### Using Regular img Tag

```tsx
<img src="/images/gallery/image.jpg" alt="Description" />
```

## Image Optimization

- Images are automatically optimized by Next.js
- Supported formats: AVIF, WebP
- Place images in the appropriate subfolder based on their purpose
- Use descriptive filenames (e.g., `obite-gas-plant-construction.jpg`)

## Recommended Image Sizes

- **Hero images**: 1920x1080px or larger
- **Project images**: 1200x800px
- **Thumbnails**: 400x300px
- **Logos**: Original size, preferably SVG or PNG

## Adding Your Images

1. Place your image file in the appropriate folder:
   - Logo → `public/images/logos/`
   - Project photo → `public/images/projects/`
   - Team photo → `public/images/team/`
   - Gallery image → `public/images/gallery/`

2. Reference it in your component:
   ```tsx
   <Image src="/images/logos/your-logo.png" alt="Logo" width={200} height={50} />
   ```

Note: The path starts with `/images/` (not `/public/images/`) because Next.js serves files from the `public` folder at the root level.

