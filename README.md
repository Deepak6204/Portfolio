# Portfolio Customization Guide

This portfolio is designed to be easily customizable through JSON files. Here's how to modify each section:

## 1. Personal Information (`src/data/personal.json`)

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your.email@example.com",
  "about": [
    {
      "title": "Section Title",
      "icon": "IconName",
      "color": "text-color-class",
      "description": "Your description"
    }
  ]
}
```

## 2. Projects (`src/data/projects.json`)

The projects section supports categorization. Projects can be filtered by category.

```json
{
  "categories": [
    {
      "id": "category-id",
      "name": "Category Name",
      "icon": "IconName"
    }
  ],
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description",
      "image": "Image URL",
      "tags": ["Tech1", "Tech2"],
      "github": "GitHub URL",
      "demo": "Demo URL",
      "category": "category-id"
    }
  ]
}
```

Available categories:
- `fullstack`: Full Stack Development projects
- `mobile`: Mobile Development projects
- `automation`: Automation and Scripts projects

## 3. Coding Profiles (`src/data/profiles.json`)

```json
{
  "profiles": [
    {
      "platform": "Platform Name",
      "stats": {
        "rating": "Your Rating",
        "solved": "Problems Solved",
        "contests": "Contests Count"
      },
      "icon": "IconName",
      "color": "text-color-class",
      "link": "Profile URL"
    }
  ]
}
```

## Customization Tips

1. **Images**: Use high-quality images from Unsplash or your own hosted images
2. **Colors**: Use Tailwind CSS color classes (e.g., text-blue-500, text-green-500)
3. **Icons**: Available icons from lucide-react:
   - Code2: For development sections
   - Smartphone: For mobile development
   - Bot: For automation
   - Brain: For skills/learning
   - Rocket: For achievements
   - Trophy: For competitions
   - Star: For ratings

## Project Categories

To add a new project:
1. Add the project details to the `projects` array
2. Set the `category` field to match one of the category IDs
3. Projects will automatically appear in the correct category filter

To add a new category:
1. Add the category to the `categories` array with a unique ID
2. Add the corresponding icon to the `icons` object in `Projects.tsx`
3. Projects can now be assigned to the new category

## Name Animation

The name animation in the hero section can be customized in `useAnimatedName.ts`:
- `iterations`: Number of animation cycles
- `speed`: Animation speed in milliseconds

## Best Practices

1. Keep descriptions concise and professional
2. Use high-quality, relevant images
3. Maintain consistent styling across sections
4. Regularly update your projects and achievements
5. Test responsiveness on different screen sizes