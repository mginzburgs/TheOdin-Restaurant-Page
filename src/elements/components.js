import { h1, p, container, section, li, ul } from "./elements";

export const renderFeaturedDishesCard = (featuredDishes) => {
  const dishSection = section("dish-section");
  featuredDishes.forEach((dish) => {
    const dishCard = container("dish-section__dish-card");
    const dishHeading = h1(dish.name, "dish-card__heading");
    const dishDescription = p(dish.description, "dish-card__description");
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
    let categoryTitle = h1(key, "dish-menu__category-title");

    categoryCard.appendChild(categoryTitle);
    categoryCard.appendChild(categoryList);
    dishMenu.appendChild(categoryCard);

    menu[key].forEach((e) => {
      const dishMenuItemCard = container("dish-menu__item-card");
      const description = p(e.description, "item-card__description");
      const price = p(e.price ? e.price : " ", "item-card__price");
      const name = h1(e.name, "item-card__name");

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

export const renderAbout = (about) => {
  const ourStory = container("story");
  const ourStoryText = p(about.ourStory, "story__text");

  ourStory.appendChild(ourStoryText);

  const ourTeam = container("team");

  about.team.forEach((member) => {
    const person = container("member");
    const pName = p(member.name, "member__name");
    const pRole = p(member.role, "member__role");
    const pDescription = p(member.description, "member__description");

    person.appendChild(pName);
    person.appendChild(pRole);
    person.appendChild(pDescription);
    ourTeam.appendChild(person);
  });

  const contacts = container("contacts");
  const pAdress = p(about.contact.address, "contacts__adress");
  const pPhone = p(about.contact.phone, "contacts__phone");
  const pEmail = p(about.contact.email, "contacts__email");
  contacts.appendChild(pAdress);
  contacts.appendChild(pPhone);
  contacts.appendChild(pEmail);

  ourStory.appendChild(ourTeam);
  ourStory.appendChild(contacts);
  return ourStory;
};
