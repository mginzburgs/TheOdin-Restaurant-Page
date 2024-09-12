import { h1, p } from "./elements/elements";
import { renderFeaturedDishesCard, renderMenu } from "./elements/components";
import { restaurantData } from "./content";

const renderHome = (content) => {
  const page = document.getElementById("content");

  const heading = h1(content.homePage.name, "homePage", 16);
  const tagline = p(content.homePage.tagline, "homePage", 12);
  const featuredDishes = renderFeaturedDishesCard(
    content.homePage.featuredDishes
  );
  const menu = renderMenu(content.menuPage);
  page.append(heading);
  page.append(tagline);
  page.append(featuredDishes);
  page.append(menu);
};

renderHome(restaurantData);
renderMenu(restaurantData.menuPage);
