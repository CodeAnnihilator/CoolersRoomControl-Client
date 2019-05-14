const generateRandomColor = (alpha = 1) => `rgba(${Array.from({length: 3}).map(item => Math.round(Math.random() * 255))},${alpha})`

export default generateRandomColor;
