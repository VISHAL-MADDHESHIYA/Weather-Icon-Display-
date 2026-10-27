# Weather Icon Display (Static Data)

A highly polished, responsive web application that dynamically updates a weather card (icon, description, and theme) based on user selection from a dropdown menu. Built purely with HTML, CSS, and vanilla JavaScript.

## 🚀 Features
- **No External Dependencies**: Uses inline SVGs for icons and native browser APIs.
- **Dynamic UI/UX**: Utilizes CSS Custom Properties (Variables) to smoothly transition background gradients and text colors based on the weather condition.
- **Accessibility**: Includes ARIA live regions (`aria-live="polite"`) so screen readers announce the weather changes automatically.
- **Responsive**: Adapts perfectly to mobile and desktop screens using CSS Flexbox.
- **Glassmorphism Design**: Modern card styling with backdrop filters.

## 🛠️ Approach & Architecture
The application avoids bloated `if/else` chains by utilizing a centralized **JavaScript Object** as a data dictionary. The UI updates by passing the selected `<option>` value as a key to fetch the corresponding data object. CSS variables are injected via JS to handle complex theming transitions effortlessly.

## 📝 Interview Questions Answered

**1. How would you map a condition name to an icon?**
I used an object literal where the keys represent the condition names (e.g., `sunny`, `rainy`). The values are objects containing the SVG string, description, and theming variables. When the select value changes, `weatherData[selectedValue]` retrieves the correct configuration in O(1) time.

**2. Why use an object instead of many if/else statements?**
Using an object (a dictionary lookup) is much cleaner, more scalable, and easier to maintain. Adding a new weather condition only requires adding a new key-value pair to the object, without modifying the rendering logic. It also provides better performance (O(1) lookup vs O(n) for if/else chains) and avoids deeply nested code.

**3. How would you provide a sensible default state?**
The default state is provided in two ways:
- In HTML, the `<option>` is `disabled` and `selected` by default.
- In CSS, the `:root` variables hold a neutral dark theme.
- In JS, the display area has fallback text ("Awaiting Selection") and a default information icon. The app safely ignores the "default" disabled option because the data object doesn't have a "default" key, preventing the UI from breaking.

## 💻 How to Run Locally
1. Clone the repository.
2. Open `index.html` in your browser. (No build step or server required).

## 🌐 Deployment
This project is deployed using **GitHub Pages**.
*Deployment Link:*  https://vishal-maddheshiya.github.io/Weather-Icon-Display-/

*Github Link:*  https://github.com/VISHAL-MADDHESHIYA/Weather-Icon-Display-/

## 📸 Rollback Evidence
*(Note for the intern: If you made a mistake during deployment, document it here. For example: "Initial deployment pushed to wrong branch. Reverted via `git revert <commit-hash>` and re-deployed successfully.")*

---
*Completed as part of the Web Development Track Internship.*