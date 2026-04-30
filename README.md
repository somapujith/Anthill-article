# AI Evolution & Human Intervention (2020–2030)

Interactive research article exploring the evolution of artificial intelligence and humanity's efforts to guide its development.

## Features

✨ **Interactive Timeline** - Explore major AI breakthroughs and human interventions year by year (2020-2030)

📈 **Data Visualizations** - Charts showing AI investment growth, model scaling, and adoption rates

🎮 **Interactive Simulation** - Adjust AI control levels and see predicted outcomes

🌌 **Smooth Animations** - Framer Motion powered animations throughout

📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile

🎨 **Modern Design** - Tailwind CSS with gradient effects and dark mode

## Tech Stack

- **React** - UI framework
- **Vite** - Fast build tool
- **Framer Motion** - Animations
- **Recharts** - Data visualization
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

The app will open automatically at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navigation
│   ├── Hero.jsx            # Hero section with intro
│   ├── Timeline.jsx        # Interactive timeline 2020-2030
│   ├── AIEvolution.jsx     # AI fields & domains
│   ├── HumanIntervention.jsx # Regulation & safety
│   ├── DataViz.jsx         # Investment & adoption charts
│   ├── FuturePredictions.jsx # Milestones & scenarios
│   ├── Impact.jsx          # Positive/negative impacts
│   ├── Interactive.jsx     # Control level simulator
│   └── Footer.jsx          # Footer with links
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## Key Sections

### 🧠 Hero Section
Animated introduction with gradient backgrounds and smooth scroll animations.

### 📈 Timeline (2020–2030)
Click on any year to see major AI breakthroughs and human intervention efforts for that year.

### 🤖 AI Evolution
Four major AI domains: NLP, Computer Vision, Autonomous Systems, and Reasoning.

### ⚖️ Human Intervention
Breakdown of AI ethics, government regulation, and safety research efforts.
Includes comparison table: Uncontrolled vs Controlled AI scenarios.

### 📊 Data Visualization
Three interactive charts:
- AI Investment Growth (2020-2025)
- Model Scaling & AI Safety Research
- AI Adoption by Sector (2022-2024)

### 🔮 Future Predictions
Key milestones from 2025-2030 with probability and impact assessments.
Three possible scenarios: Optimistic, Pessimistic, and Realistic.

### ⚡ Impact Section
Toggle between positive impacts and risks/challenges of AI advancement.

### 🎮 Interactive Simulation
Slider-based simulation: Adjust AI control level (0-100%) and see how different governance approaches affect innovation speed, safety level, equality impact, and job disruption.

## Content Highlights

- **2022**: ChatGPT era begins
- **2023**: Generative AI boom, EU AI Act passed
- **2024**: Scaling & widespread regulation
- **2025-2030**: Near-AGI, human-AI collaboration, and critical decisions

## Customization

### Changing Colors
Edit `tailwind.config.js` to customize the color scheme.

### Updating Timeline Data
Modify the `timelineData` array in `src/components/Timeline.jsx`

### Adding New Sections
Create a new component in `src/components/` and import it in `App.jsx`

### Adjusting Animations
All animations use Framer Motion. Edit `motion` props in any component to customize.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Vite** provides fast HMR (Hot Module Replacement)
- **Framer Motion** uses GPU acceleration for smooth animations
- **Tailwind** generates minimal CSS through PurgeCSS

## License

This is an educational project. Feel free to use and modify for your own purposes.

## Author

Built as an interactive research article on AI evolution and human oversight.

---

**Made with ❤️ for understanding AI's future**
