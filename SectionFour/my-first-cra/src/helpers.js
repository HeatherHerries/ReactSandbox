function choice(items) {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

function remove(itmes, item) {
  for (let i = 0; i < item.length; i++) {
    if (item[i] === item) {
      return [...item.slice(0, i), ...item.slice(i + 1)];
    }
  }
}

export { choice, remove };
