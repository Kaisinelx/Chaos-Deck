function createCard(item) {
  return `
    <div class="item-card">
      <div class="chaos-border"></div>
      <div class="card-title">
        <h2>${item.title}</h2>
      </div>
      <div class="card-image">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="subtitle-tags">
        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="description">
        ${item.description.map(paragraph => `<p>${paragraph}</p>`).join("")}
      </div>
      <div class="stats">
        <div><strong>Cost:</strong> ${item.stats?.Cost || "-"}</div>
        <div><strong>Enc:</strong> ${item.stats?.Enc || "-"}</div>
        <div><strong>Effect:</strong> ${item.stats?.Effect || "-"}</div>
      </div>
    </div>
  `;
}

function renderCards(items) {
  const container = document.getElementById("card-container");
  container.innerHTML = items.map(createCard).join("");
}

function fetchItems() {
  fetch('./items.json') // Make sure this path is correct!
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then(items => {
      renderCards(items);
    })
    .catch(error => {
      console.error('Error fetching items:', error);
    });
}

fetchItems();
