const getRandomColor = () => {
    const red = Math.floor(Math.random() * 156) + 100;
    const green = Math.floor(Math.random() * 156) + 100;
    const blue = Math.floor(Math.random() * 156) + 100;
    return `rgb(${red}, ${green}, ${blue})`;
};

export { getRandomColor };
