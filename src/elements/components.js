import { h1, p, container, section, li, ul } from "./elements";

export const renderFeaturedDishesCard = (featuredDishes) => {
  const dishSection = section("dish-section");
  featuredDishes.forEach((dish) => {
    const dishCard = container("dish-section__dish-card");
    const dishHeading = h1(dish.name, "dish-card__heading", 16);
    const dishDescription = p(dish.description, "dish-card__description", 12);
    dishCard.append(dishHeading);
    dishCard.append(dishDescription);
    dishSection.append(dishCard);
  });
  return dishSection;
};

export const renderMenu = (menu) => {
  const dishMenu = section("dish-menu");

  Object.keys(menu).forEach((key) => {
    let categoryCard = container("dish-menu__category-card");
    let categoryList = ul("dish-menu__category-list");
    let categoryTitle = h1(key, "dish-menu__category-title", 18);

    categoryCard.appendChild(categoryTitle);
    categoryCard.appendChild(categoryList);
    dishMenu.appendChild(categoryCard);

    menu[key].forEach((e) => {
      const dishMenuItemCard = container("dish-menu__item-card");
      const description = p(e.description, "item-card__description", 12);
      const price = p(e.price, "item-card__price", 12);
      const name = h1(e.name, "item-card__name", 16);

      dishMenuItemCard.appendChild(name);
      dishMenuItemCard.appendChild(price);
      dishMenuItemCard.appendChild(description);

      const categoryItem = li("dish-menu__item");

      categoryItem.appendChild(dishMenuItemCard);
      categoryList.appendChild(categoryItem);
    });
  });
  return dishMenu;
};
