
const listings = [
  {
    name: "Sarah",
    title: "Haircuts & Styling",
    category: "skill",
    description: "Offering basic haircuts and trims.",
    wants: "Fresh eggs or garden vegetables"
  },
  {
    name: "Mike",
    title: "Lawn Mowing",
    category: "skill",
    description: "Lawn mowing and yard cleanup.",
    wants: "Home-cooked meals"
  },
  {
    name: "Emma",
    title: "Fresh Farm Eggs",
    category: "item",
    description: "Fresh eggs from backyard chickens.",
    wants: "Haircuts or baked goods"
  },
  {
    name: "James",
    title: "Computer Repair",
    category: "skill",
    description: "Help with computer problems and setup.",
    wants: "Household repairs"
  },
  {
    name: "Olivia",
    title: "Homemade Bread",
    category: "item",
    description: "Freshly baked homemade bread.",
    wants: "Garden vegetables"
  },
  {
    name: "Daniel",
    title: "Car Detailing",
    category: "skill",
    description: "Interior car cleaning and detailing.",
    wants: "Lawn care"
  },
  {
    name: "Ashley",
    title: "Garden Vegetables",
    category: "item",
    description: "Seasonal vegetables from my garden.",
    wants: "Baked goods or pet sitting"
  },
  {
    name: "Chris",
    title: "Math Tutoring",
    category: "skill",
    description: "Math tutoring for students.",
    wants: "Home maintenance help"
  },
  {
    name: "Megan",
    title: "Handmade Candles",
    category: "item",
    description: "Hand-poured scented candles.",
    wants: "Photography services"
  },
  {
    name: "Ryan",
    title: "Furniture Assembly",
    category: "skill",
    description: "Assembly of shelves and furniture.",
    wants: "Homemade meals"
  },
  {
    name: "Jessica",
    title: "Pet Sitting",
    category: "skill",
    description: "Pet care while you're away.",
    wants: "House cleaning"
  },
  {
    name: "Tyler",
    title: "Firewood",
    category: "item",
    description: "Seasoned firewood for pickup.",
    wants: "Small engine repair"
  },
  {
    name: "Nicole",
    title: "Photography",
    category: "skill",
    description: "Portraits and family photography.",
    wants: "Handmade goods"
  },
  {
    name: "Brandon",
    title: "Homegrown Herbs",
    category: "item",
    description: "Fresh herbs grown at home.",
    wants: "Gardening supplies"
  },
  {
    name: "Rachel",
    title: "House Cleaning",
    category: "skill",
    description: "General household cleaning.",
    wants: "Babysitting or car detailing"
  }
];

const swapGrid = document.getElementById("swapGrid");
const randomBtn = document.getElementById("randomBtn");
const resultsMessage = document.getElementById("resultsMessage");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentFilter = "all";

function getFilteredListings() {
  if (currentFilter === "all") {
    return listings;
  }

  return listings.filter(listing => listing.category === currentFilter);
}

function displayListings(items) {
  swapGrid.innerHTML = "";

  items.forEach((listing) => {
    const card = document.createElement("article");
    card.className = "swap-card";

    const badge = listing.category === "skill" ? "Skill" : "Item";

    card.innerHTML = `
      <div class="card-art ${listing.category}">
        <span class="card-art-label">
          ${listing.category === "skill" ? "SKILL EXCHANGE" : "ITEM EXCHANGE"}
        </span>
      </div>

      <div class="card-body">
        <span class="category-badge ${listing.category}">
          ${badge} Available
        </span>

        <h3>${listing.title}</h3>
        <p>${listing.description}</p>

        <div class="trade-info">
          <strong>Looking for:</strong><br>
          ${listing.wants}
        </div>

        <div class="card-footer">
          <div class="person">
            <span class="avatar">${listing.name.charAt(0)}</span>
            ${listing.name}
          </div>

          <button class="interest-btn" type="button">
            I'm Interested
          </button>
        </div>
      </div>
    `;

    const interestBtn = card.querySelector(".interest-btn");

    interestBtn.addEventListener("click", () => {
      alert(
        `You're interested in ${listing.name}'s ${listing.title}!\n\n` +
        "In a future version, this will let you send a trade request."
      );
    });

    swapGrid.appendChild(card);
  });

  resultsMessage.textContent =
    `Showing ${items.length} swap${items.length === 1 ? "" : "s"}.`;
}

function showRandomSwaps() {
  const available = [...getFilteredListings()];

  // Fisher-Yates shuffle
  for (let i = available.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [available[i], available[j]] = [available[j], available[i]];
  }

  displayListings(available.slice(0, 3));
}

randomBtn.addEventListener("click", showRandomSwaps);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    displayListings(getFilteredListings());
  });
});

// Display all 15 listings when the page loads.
displayListings(listings);
